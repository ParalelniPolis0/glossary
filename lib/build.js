import * as fs from "node:fs";
import { join } from "node:path";
import { loadSource } from "./glossary.js";

const destDir = './dist';

const output = {
    glossary: loadSource(),
    generatedAt: new Date().toISOString()
}

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir)
}
const destFn = join(destDir, 'index.json')
fs.writeFileSync(destFn, JSON.stringify(output, null, 2))
console.log(`Writed: ${destFn}`)

const destJsFn = join(destDir, 'glossary.js')
fs.writeFileSync(destJsFn, `export default ${JSON.stringify(output)};`)
console.log(`Writed: ${destJsFn}`)