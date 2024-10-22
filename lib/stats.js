import { loadGlossary } from "../index.js";
import * as fs from "node:fs";

function findMissingLinks(items) {
    const missing = [];
    for (const i of items) {
        if (!i.links) {
            continue
        }
        for (const l of i.links) {
            const link = l.link || l.key;
            if (!l.target && !missing.includes(link)) {
                missing.push(link)
            }
        }
    }
    //console.log(missing)
    return missing
}

const langs = {
    en: { title: 'English' },
    cs: { title: 'Czech' },
}
const { glossary } = loadGlossary();
const readmeFn = './README.md';

const statLines = []
for (const lang in glossary) {
    const missingLinks = findMissingLinks(glossary[lang]);
    statLines.push(`| [${langs[lang].title} (${lang})](./src/${lang}) | ${glossary[lang].length} | ${missingLinks.length} |`);
}

const stats = `| lang | terms | missing links |
| --- | --- | --- |\n${statLines.join('\n')}`

const readme = fs.readFileSync(readmeFn).toString();
const outputReadme = readme.replace(
    /<!--stats-->[\s\S]*<!--\/stats-->/,
    `<!--stats-->\n${stats}\n<!--/stats-->`
)

fs.writeFileSync(readmeFn, outputReadme);
console.log(`Writed: ${readmeFn}`);

