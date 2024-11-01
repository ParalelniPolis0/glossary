---
name: Zero-knowledge proof (ZKP)
keywords:
  - zero-knowledge proof
  - zero-knowledge proofs
type: technology

resources:
  - title: Wikipedia article "Zero-knowledge proof"
    url: https://en.wikipedia.org/wiki/Zero-knowledge_proof
---

A zero-knowledge proof is a [[cryptographic|cryptography]] method that enables one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself. This groundbreaking concept allows for verification of data or credentials while maintaining complete privacy of the underlying information, making it a cornerstone of modern [[privacy]] technologies.

The concept satisfies three key properties: completeness (if the statement is true, an honest verifier will be convinced), soundness (if the statement is false, no cheating prover can convince an honest verifier), and zero-knowledge (if the statement is true, the verifier learns nothing other than the fact that the statement is true). For example, one could prove they are over 18 years old without revealing their actual age, or prove ownership of funds without revealing the account balance.

Zero-knowledge proofs have found numerous applications in [[blockchain]] technology, [[digital identity]] systems, and [[privacy-preserving]] protocols. They are used in [[cryptocurrency]] systems for private transactions, in authentication systems where users can prove their credentials without revealing sensitive data, and in various other scenarios where verification without disclosure is crucial. Notable implementations include [[zk-SNARKs]] and [[zk-STARKs]], which are specific types of zero-knowledge proofs optimized for different use cases.