import * as fs from "node:fs";
import { join } from "node:path";
import { loadSource } from "./glossary.js";

const destDir = './dist';

const glossary = await loadSource()
//console.log(JSON.stringify(glossary, null, 2))

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir)
}
const destFn = join(destDir, 'bundle.json')
fs.writeFileSync(destFn, JSON.stringify(glossary, null, 2))
console.log(`Writed: ${destFn}`)