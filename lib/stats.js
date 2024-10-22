import { loadGlossary } from "../index.js";
import * as fs from "node:fs";


const langs = {
    en: { title: 'English' },
    cs: { title: 'Czech' },
}
const { glossary } = loadGlossary();
const readmeFn = './README.md';


const readme = fs.readFileSync(readmeFn).toString();

const statLines = []
for (const lang in glossary) {
    statLines.push(`| [${langs[lang].title} (${lang})](./src/${lang}) | ${glossary[lang].length} | 0 |`)
}

const stats = `| lang | terms | missing links |
| --- | --- | --- |\n${statLines.join('\n')}`

const outputReadme = readme.replace(
    /<!--stats-->[\s\S]*<!--\/stats-->/,
    `<!--stats-->\n${stats}\n<!--/stats-->`
)

fs.writeFileSync(readmeFn, outputReadme);
console.log(`Writed: ${readmeFn}`);

