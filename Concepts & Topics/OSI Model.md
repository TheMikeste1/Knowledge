---
tags: 
---
The Open System Interconnection (abbr.  #OSI) model is a conceptual model used to organize and abstract away sending information between devices. It consists of seven layers, the last three of which are often combined into one in other similar models.
![[OSI_model.png|128]]
Each layer uses a protocol to structure and encode data. There are multiple protocols per layer, and each protocol has different advantages and disadvantages. These protocols may include error correction, encryption, delivery ensurance, or other functions.

Data is passed from the top layer down until it reaches the lowest, at which point it is passed back up through the layers once it has reached it destination.

# Layer 1 - Physical
| Addressing |  Data Unit  | Protocol Examples |
|:----------:|:-----------:|:-----------------:|
|    N/A     | Bit, Symbol | 10Base-T, 802.11  |

The physical layer handles transitions between the digital world and the physical world. This includes transforming bits into some signal that can be used to transport information in the real world.

## Examples
- Digital bits to electrical pulses
- Digital bits to radio signals
- Digital bits to flashes of light

# Layer 2 - Data Link

| Addressing  | Data Unit |      Protocol Examples       |
|:-----------:|:---------:|:----------------------------:|
| MAC Address |   Frame   | Ethernet, WiFi, VLAN, DOCSIS |

The data link layer controls data transfer between two directly connected nodes, where a “node” is some device. “Directly connected” does not necessarily mean physically connected by a wire; they could be connected via radio (WiFi, Bluetooth) or any other physical layer transport. Rather, it refers to nodes that are connected without any other nodes between them.

## Examples
- Computer to router
- Router to modem
- Modem to switch

# Layer 3 - Network

| Addressing | Data Unit | Protocol Examples |
|:----------:|:---------:|:-----------------:|
| IP Address |  Packet   |     IP, IPsec     |

The network layer handles transferring information between nodes in multiple networks. It may fragment messages if they are too large for the data link layer. Delivery on the network layer is not necessarily guaranteed, though some protocols may include reliable transfer.

## Examples
- LAN to LAN
- LAN to ISP network
- ISP network to separate ISP network

# Layer 4 - Transport

| Addressing |     Data Unit     |          Protocol Examples          |
|:----------:|:-----------------:|:-----------------------------------:|
|   Ports    | Segment, Datagram | #TCP, #UDP, TP0, TP1, TP2, TP3, TP4 |

The transport layer works with transferring information from host to host, or end device to end device. It includes common protocols such as UDP, TCP, and COTP. It may segment data as required.

Similar to the [[#Layer 3 - Network|network layer]], protocols may or may not guarantee delivery or lack of error. This is not necessarilly a problem; for example, when video chatting it is usually okay to miss a frame or a have a few miscolored pixels.

## Examples
- Computer to computer
- Computer to server
- Port to port

# Layer 5 - Session

| Addressing |   Data Unit    |           Protocol Examples            |
|:----------:|:--------------:|:--------------------------------------:|
|    N/A     | Data, Messages | Sockets, Pipes, session portion of TCP |

The session layer sets up, maintains, and tears down connections between one or more devices, dubbed sessions.

# Layer 6 - Presentation

| Addressing |   Data Unit    |     Protocol Examples     |
|:----------:|:--------------:|:-------------------------:|
|    N/A     | Data, Messages | SSL/TLS, XDR, ASCII, MPEG |

The presentation layer handles transforming data to be ready for transport or to be used (presented) by the [[#Layer 7 - Application|application layer]]. This may include parsing from JSON into application objects (classes), or encrypting/decrypting data.

Relating to application design models, this layer could be viewed as the repository or view-model layer in #MVVM.

# Layer 7 - Application

| Addressing |   Data Unit    |      Protocol Examples      |
|:----------:|:--------------:|:---------------------------:|
|    N/A     | Data, Messages | HTTP, FTP, SMTP, ACSE, ROSE |

The application takes the data from the network and consumes it in some way, often by displaying the information to the user.

## Examples
- Web browser
- Email application
- Video game client
- Video game server

# See also
- [OSI model - Wikipedia](https://en.wikipedia.org/wiki/OSI_model), especially [Definitions](https://en.wikipedia.org/wiki/OSI_model#Definitions) and [Layer architecture](https://en.wikipedia.org/wiki/OSI_model#Layer_architecture)
- [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite), aka the Internet protocol suite, for a related 5-layer model