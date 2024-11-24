#![allow(warnings)]

// Import the run function from the library.
use filter::run;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Simply call the run function from lib.rs and handle any resulting errors.
    run().await
}
