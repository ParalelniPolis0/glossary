---
name: Mixnet
type: technology
resources:
  - title: Mix network - Wikipedia
    url: https://en.wikipedia.org/wiki/Mix_network
  - title: Nym - Privacy Infrastructure
    url: https://nymtech.net/
---

A mixnet (mix network) is a routing protocol that uses a chain of proxy servers, called mix nodes, to obscure the correspondence between the messages that go in and the messages that come out, thereby providing anonymous communication. While similar to [[onion routing]] used in systems like [[Tor]], mixnets provide stronger anonymity guarantees through additional mechanisms like message batching, reordering, and intentional delays, making them more resistant to timing analysis attacks at the cost of higher latency.

The concept was first introduced by [[David Chaum]] in 1981 as a way to implement anonymous email and has since become a fundamental building block for many [[privacy]]-enhancing technologies. Mixnets work by using multiple layers of [[encryption]] (similar to onion routing) where each mix node knows only the previous and next step in the message's journey, but no single node knows both the sender and final recipient. The key difference from onion routing is that mixnets deliberately collect, delay, and shuffle multiple messages together before forwarding them, creating uncertainty about which incoming message corresponds to which outgoing message.

Modern implementations of mixnets are being developed for various applications beyond email, including cryptocurrency transactions, instant messaging, and general internet traffic anonymization. Projects like [[Nym]] are building mixnet-based privacy infrastructure that aims to protect against both passive and active surveillance at the network level. While onion routing focuses on low-latency communication suitable for web browsing, mixnets prioritize stronger anonymity guarantees through their batch processing approach, making them more suitable for applications where timing is less critical but privacy is paramount.
