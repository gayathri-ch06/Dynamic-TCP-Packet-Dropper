# Prerequisites

1. Install a rust stable toolchain: `rustup install stable`
2. Install a rust nightly toolchain: `rustup install nightly`
3. Install bpf-linker: `cargo install bpf-linker`

   
# Dynamic-TCP-Packet-Dropper
This project demonstrates how to block specific TCP packets on a designated port using eBPF (Extended Berkeley Packet Filter) with Rust. The program loads an eBPF kernel program that monitors network traffic and drops any TCP packets coming from or heading to port 4040. The user space code manages the interaction between the eBPF kernel program and the user, allowing configuration and logging.

# Features
1. ABlocks TCP packets on a specific port (default: 4040).
2. User-space program written in Rust to manage eBPF programs and maps.
3. Modular structure with separation of concerns for eBPF program loading, packet filtering, and user interaction.
4. Support for attaching to the network interface using XDP (eXpress Data Path).
5. Logging and error-handling mechanisms in the user space.

# Installation
1. **Rust**: Install Rust and the cargo build tool.
2. **AYA**: This project uses the aya library, which is a pure Rust eBPF library that supports the eBPF targets.
3. **Linux Kernel**: Linux distribution with kernel version 5.x or above to support eBPF.
4. **clang and LLVM**: Required for compiling eBPF programs.

# Main Components
1. The project employs data structures that enable interaction between kernel space and userspace.
2. It invloves logic to extract relevant packet headers, specifically Ethernet, IP, and TCP headers to inspect network traffic. The program identifies packets intended for port 4040 and drops them accordingly.
### How it works

1. **Initialization**: The eBPF program is attached to a network interface.
2. **Packet Interception**: Incoming network packets are intercepted and analyzed by the eBPF program.
3. **Header Inspection**: Ethernet, IP, and TCP headers are extracted to determine the destination port.
4. **Packet Dropping**: If a packet is targeting port 4040, it is dropped. Otherwise, it is allowed to pass through the network.



## Build eBPF

```bash
cargo task build-ebpf
```


## Build Userspace

```bash
cargo build
```

## Run

```bash
cargo task run
```

