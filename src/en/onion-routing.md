---
name: Onion Routing
type: technique
resources:
  - title: Wikipedia article "Onion routing"
    url: https://en.wikipedia.org/wiki/Onion_routing
---

Onion Routing is a technique for [[anonymous communication]] over computer networks. It encrypts data in multiple layers and transmits it through a series of network nodes, with each node "peeling" away a single layer of encryption to uncover the data's next destination. This process obscures the data's origin, destination, and content from network surveillance and traffic analysis.

The key principle behind onion routing is to protect the privacy of the sender and recipient of a message, as well as the message's contents. Data is [[encrypted|Encryption]] multiple times and sent through several network nodes. Each node only knows the immediate preceding and following nodes in the communication chain, making it difficult to trace the complete path of the data.

While [[Tor]] (The Onion Router) is the most widely known implementation, various onion routing networks exist, each with its own architecture and node structure. These networks can be used to access regular websites anonymously or to reach special [[hidden services]] that are only accessible within the onion network. Onion routing has become a crucial tool for privacy-conscious users, [[journalists]], [[activists]], and others seeking to communicate securely and anonymously online.