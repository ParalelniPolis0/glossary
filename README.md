# Parallel Glossary

Collection of key terms and concepts at the intersection of cryptoanarchy, digital freedom, decentralized technologies, and biohacking, designed to empower and inspire the parallel society.

- Frontend: https://paralelnipolis.info/glossary
- JSON source: https://glossary.pp0.co

## How to use

### Javascript

Install package:
```bash
npm i @pp0/glossary
```

And then use:
```js
import { loadGlossary } from '@pp0/glossary';

// load glossary
const { glossary } = loadGlossary();

// print english glossary
console.log(glossary.en);
```
