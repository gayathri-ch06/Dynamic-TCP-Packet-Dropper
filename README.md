# Prerequisites

1. Install a rust stable toolchain: `rustup install stable`
2. Install a rust nightly toolchain: `rustup install nightly`
3. Install bpf-linker: `cargo install bpf-linker`

   
# Dynamic-TCP-Packet-Dropper
This project demonstrates how to block specific TCP packets on a designated port using eBPF (Extended Berkeley Packet Filter) with Rust. The program loads an eBPF kernel program that monitors network traffic and drops any TCP packets coming from or heading to port 4040. The user space code manages the interaction between the eBPF kernel program and the user, allowing configuration and logging.

# Features
1. Blocks TCP packets on a specific port.
2. User-space program written in Rust to manage eBPF programs and maps.
3. Modular structure with separation of concerns for eBPF program loading, packet filtering, and user interaction.
4. Support for attaching to the network interface using XDP (eXpress Data Path).
5. Logging and error-handling mechanisms in the user space.



## Architecture
- **eBPF Kernel Program**: The core program intercepts and inspects network packets, filtering out those targeting specific ports (default `4040`).
- **Rust User-space Program**: Manages the interaction with eBPF, including loading the program, attaching it to network interfaces, and logging.
- **Docker Container**: Dockerized environment for consistent and reproducible builds and deployments.

# Installation
1. **Rust**: Install Rust and the cargo build tool.
2. **AYA**: This project uses the aya library, which is a pure Rust eBPF library that supports the eBPF targets.
3. **Linux Kernel**: Linux distribution with kernel version 5.x or above to support eBPF.
4. **LLVM**: Required for compiling eBPF programs.



## Packages Installed in Docker
- Ubuntu 22.04-based Docker image.
- Essential development packages like `build-essential`, `libssl-dev`, `clang`, `llvm`, `git`, `nginx`, etc.
- Rust and necessary toolchains (stable and nightly), along with **BPF-Linker** for eBPF compilation.

### Main Components
1. The project employs data structures that enable interaction between kernel space and userspace.
2. It invloves logic to extract relevant packet headers, specifically Ethernet, IP, and TCP headers to inspect network traffic. The program identifies packets intended for port 4040 and drops them accordingly.
### How it works

1. **Initialization**: The eBPF program is attached to a network interface.
2. **Packet Interception**: Incoming network packets are intercepted and analyzed by the eBPF program.
3. **Header Inspection**: Ethernet, IP, and TCP headers are extracted to determine the destination port.
4. **Packet Dropping**: If a packet is targeting port 4040, it is dropped. Otherwise, it is allowed to pass through the network.


## DOCKER IMAGE
To use the Dynamic TCP Packet Dropper, first pull the Docker image from Docker Hub:
```bash
docker pull rmg0070/dynamictcppacketdropper
```

## Running the Application
To run the application, use the following command:
```bash
sudo docker run --privileged -it -p 80:80 --name ebpf rmg0070/dynamictcppacketdropper:v1 /bin/bash
```
Note: Omit sudo if you are running on a Windows system.

## Using the Application
Once inside the Docker container, compile the eBPF code with the following command:
```bash
cargo task run
```

#### Available Commands

| **Command**           | **Description**                                                            | **Example**                          |
|-----------------------|----------------------------------------------------------------------------|--------------------------------------|
| `blockip <IP>`        | Block all traffic to and from the specified IP address.                   | `blockip 172.168.191.12`             |
| `unblockip <IP>`      | Unblock all traffic to and from the specified IP address.                 | `unblockip 172.168.191.12`           |
| `blockport <port>`    | Block all traffic on the specified port.                                  | `blockport 80`                       |
| `unblockport <port>`  | Unblock all traffic on the specified port.                                | `unblockport 80`                     |
| `exit`                | Terminate the application                                                 | `exit`                               |

## Monitoring
Actions performed by the application are logged in the application.log file.
the above command compiles ebpf code.

## Stopping the Application
To stop the application, type exit and then use Ctrl+C to terminate the application

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

## Test
```bash
cargo test
```
## Fuzz
```bash
cargo fuzz run filter_ip_port
```
