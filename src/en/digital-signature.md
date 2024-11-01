---
name: Digital Signature
keywords:
  - digital signatures
type: technology
resources:
  - title: Introduction to Digital Signatures
    url: https://www.cs.cornell.edu/courses/cs5430/2015sp/notes/sig_intro.php
  - title: Applied Cryptography - Digital Signatures
    url: https://www.schneier.com/academic/applied-cryptography/
---

Digital signatures are cryptographic proofs that enable message authentication, integrity verification, and non-repudiation without relying on trusted third parties. Using [[public key cryptography]], a signer creates an unforgeable mathematical seal with their private key that anyone can verify using the corresponding public key, proving both the origin of a message and that it hasn't been altered.

This technology forms the foundation for autonomous digital interactions by enabling individuals to make verifiable commitments and sign messages that carry the same weight as traditional signatures, but with mathematical rather than institutional backing. In parallel structures, digital signatures enable binding agreements, [[secure communications]], and reputation systems without the need for authentication authorities.

Beyond simple document signing, digital signatures enable advanced cryptographic protocols like blind signatures for [[private voting systems]], ring signatures for [[anonymous group authentication]], and aggregate signatures for efficient collective signing. These primitives power numerous privacy-preserving applications and parallel systems where individuals can interact with cryptographic certainty while maintaining their autonomy.