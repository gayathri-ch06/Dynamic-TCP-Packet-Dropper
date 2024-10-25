#![allow(warnings)]
use anyhow::Context;
use aya::{
    include_bytes_aligned,
    maps::{HashMap, MapData},
    programs::{Xdp, XdpFlags},
    Bpf,
};
use aya_log::BpfLogger;
use log::{info, warn};
use std::net::Ipv4Addr;
use tokio::signal;

#[tokio::main]
async fn main() -> Result<(), anyhow::Error> {
    // Initialize logging
    env_logger::init();

    // Load the eBPF program
    #[cfg(debug_assertions)]
    let mut bpf = Bpf::load(include_bytes_aligned!(
        "../../target/bpfel-unknown-none/debug/xdp-drop"
    ))?;
    #[cfg(not(debug_assertions))]
    let mut bpf = Bpf::load(include_bytes_aligned!(
        "../../target/bpfel-unknown-none/release/xdp-drop"
    ))?;
    if let Err(e) = BpfLogger::init(&mut bpf) {
        warn!("failed to initialize eBPF logger: {}", e);
    }

    let program: &mut Xdp = bpf.program_mut("xdp_firewall").unwrap().try_into()?;
    program.load()?;
    program.attach("enp0s3", XdpFlags::default())
        .context("failed to attach the XDP program with default flags - try changing XdpFlags::default() to XdpFlags::SKB_MODE")?;

    // } // `blocklist` mutable borrow ends here

    // // Blocking ports logic
    {
        let mut port_blocklist: HashMap<_, u16, u16> = HashMap::try_from(bpf.map_mut("PORT_BLOCKLIST").unwrap())?;
        let blocked_port: u16 = 6969;
        port_blocklist.insert(blocked_port, 0, 0)?;
        info!("Blocking Port: 443 (HTTPS)");
    } // `port_blocklist` mutable borrow ends here

    
    // Wait for Ctrl-C to exit the program
    info!("Waiting for Ctrl-C...");
    signal::ctrl_c().await?;
    info!("Exiting...");

    Ok(())
}
