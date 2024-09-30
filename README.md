# Dynamic-TCP-Packet-Dropper
This project showcases how to drop TCP packets targeted at port 4040 by leveraging eBPF in a Rust-based environment. The combination of Rust, eBPF and Cilium allows for the efficient, kernel-level packet filtering with enhanced safety.

# Requirements
1. A Linux operating system
2. Essential package:

# Main Components
1. The project employs data structures that enable interaction between kernel space and userspace.
2. It invloves logic to extract relevant packet headers, specifically Ethernet, IP, and TCP headers to inspect network traffic. The program identifies packets intended for port 4040 and drops them accordingly.

# How it works
**Initialization**: The eBPF program is attached to a network interface.
**Packet Interception:** Incoming network packets are intercepted and analyzed by the eBPF program.
**Header Inspection:** Ethernet, IP, and TCP headers are extracted to determine the destination port.
**Packet Dropping:** If a packet is targeting port 4040, it is dropped. Otherwise, it is allowed to pass through the network.
