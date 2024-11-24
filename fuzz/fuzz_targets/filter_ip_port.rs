#![no_main]
use libfuzzer_sys::fuzz_target;
use std::net::Ipv4Addr;
use std::collections::HashMap;

fuzz_target!(|data: &[u8]| {
    // Ensure there is enough data to form an IP and a port
    if data.len() >= 6 {
        // Attempt to form an IP address from the first 4 bytes
        let ip = Ipv4Addr::new(data[0], data[1], data[2], data[3]);

        // Forming the port from the next two bytes
        let port_bytes = [data[4], data[5]];  // Create a fixed-size array for conversion
        let port = u16::from_be_bytes(port_bytes);

        // Simulate an eBPF map using a HashMap for IP
        let mut ip_map: HashMap<Ipv4Addr, u32> = HashMap::new();
        // Simulate an eBPF map using a HashMap for Port
        let mut port_map: HashMap<u16, u16> = HashMap::new();

        // Simulate blocking and unblocking IP
        ip_map.insert(ip, 0); // Block
        ip_map.remove(&ip);   // Unblock

        // Simulate blocking and unblocking Port
        port_map.insert(port, 0); // Block
        port_map.remove(&port);   // Unblock
    }
});
