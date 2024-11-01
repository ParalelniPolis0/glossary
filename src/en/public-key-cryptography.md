---
name: Public Key Cryptography
keywords:
  - public-key cryptography
type: cryptography
resources:
  - title: Understanding Public Key Cryptography
    url: https://www.cloudflare.com/learning/ssl/how-does-public-key-encryption-work/
  - title: Public Key Cryptography - Wikipedia
    url: https://en.wikipedia.org/wiki/Public-key_cryptography
---

Public Key Cryptography, also known as asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner. This system enables secure communication and authentication without requiring a pre-shared secret between parties. The fundamental breakthrough of public key cryptography is that it allows people who have never met to securely exchange encrypted messages and verify the authenticity of digital signatures.

The system works through mathematical functions that are easy to compute in one direction but computationally infeasible to reverse without specific knowledge (the private key). This property enables several critical applications: [[encryption]] (using the recipient's public key to ensure only they can read the message), [[digital signatures]] (using the sender's private key to prove authenticity), and *key exchange* protocols. Public key cryptography is essential to modern [[digital security]] and forms the backbone of secure internet communications through protocols like *SSL/TLS*.

Public key cryptography has been revolutionary for enabling secure digital communications and is fundamental to many aspects of modern life, from secure websites to [[cryptocurrency]] transactions. It plays a crucial role in the [[cypherpunk]] movement and the development of privacy-preserving technologies. Notable implementations include *PGP* (Pretty Good Privacy) for secure email, *SSH* (Secure Shell) for remote system access, and the cryptographic systems underlying [[Bitcoin]] and other blockchain technologies. The most widely used public key algorithms include *RSA*, *Elliptic Curve Cryptography*, and *Ed25519*.
