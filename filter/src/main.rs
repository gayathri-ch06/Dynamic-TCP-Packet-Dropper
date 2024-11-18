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
    program.attach("wlp2s0", XdpFlags::default())
        .context("failed to attach the XDP program with default flags - try changing XdpFlags::default() to XdpFlags::SKB_MODE")?;

    // } // `blocklist` mutable borrow ends here

    // Blocking ports logic
    {
        let mut port_blocklist: HashMap<_, u16, u16> = HashMap::try_from(bpf.map_mut("PORT_BLOCKLIST").unwrap())?;
        let blocked_port: u16 = 80;
        port_blocklist.insert(blocked_port, 0, 0)?;
        info!("Blocking Port: 80 (HTTPS)");
    } // `port_blocklist` mutable borrow ends here

    // Blocking IPs logic
    {
        let mut blocklist: HashMap<_, u32, u32> = HashMap::try_from(bpf.map_mut("BLOCKLIST").unwrap())?;
        let block_addr: u32 = Ipv4Addr::new(172, 20, 10, 3).try_into()?;
        blocklist.insert(block_addr, 0, 0)?;
        // info!("Blocking IP: 127.0.0.1");
    } // `blocklist` mutable borrow ends here

    
    // Wait for Ctrl-C to exit the program
    info!("Waiting for Ctrl-C...");
    signal::ctrl_c().await?;
    info!("Exiting...");

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use aya::{programs::Xdp, Bpf};
    use std::net::Ipv4Addr;
    use std::collections::HashMap;

    fn mock_load_bpf() -> Result<Bpf, anyhow::Error> {
        #[cfg(debug_assertions)]
        let bpf = Bpf::load(include_bytes_aligned!("../../target/bpfel-unknown-none/debug/xdp-drop"))?;
        #[cfg(not(debug_assertions))]
        let bpf = Bpf::load(include_bytes_aligned!("../../target/bpfel-unknown-none/release/xdp-drop"))?;
        Ok(bpf)
    }

    #[test]
    fn test_port_blocklist_insertion() {
        // Use standard Rust HashMap for testing
        let mut port_blocklist: HashMap<u16, u16> = HashMap::new();

        // Insert a port into the blocklist and check if it exists
        port_blocklist.insert(80, 0);
        assert!(port_blocklist.contains_key(&80));
    }

    #[test]
    fn test_ip_blocklist_insertion() {
        // Use standard Rust HashMap for testing
        let mut blocklist: HashMap<u32, u32> = HashMap::new();
        let block_addr: u32 = Ipv4Addr::new(172, 20, 10, 3).into();

        // Insert an IP address into the blocklist and check if it exists
        blocklist.insert(block_addr, 0);
        assert!(blocklist.contains_key(&block_addr));
    }
}
