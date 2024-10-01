mod controller;
mod filter;
mod blocklist;

use clap::Parser;
use anyhow::Error;
use tokio::signal;

#[derive(Debug, Parser)]
struct CommandLineArgs {
    #[clap(short, long, default_value = "eth0")]
    network_interface: String,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    let args = CommandLineArgs::parse();

    // Initialize the program (Logging, eBPF loading, etc.)
    controller::initialize_packet_filter(&args.network_interface).await?;

    // Wait for signal to terminate
    signal::ctrl_c().await?;
    controller::detach_packet_filter();

    Ok(())
}
