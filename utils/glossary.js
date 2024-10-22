import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';

const srcDir = './src';
const langs = {
    en: {}
}

export async function loadSource() {
    const output = {}
    for (const lang in langs) {
        const arr = []
        const langDir = path.join(srcDir, lang)
        for (const fn of fs.readdirSync(langDir)) {
            if (path.extname(fn) !== '.md') {
                continue
            }
            const id = path.basename(fn, path.extname(fn))
            const src = matter.read(path.join(langDir, fn))
            arr.push({
                id,
                ...src.data,
                description: src.content.trim('\n'),
            })
        }
        output[lang] = arr
    }
    const stats = Object.keys(output).map(k => `${k}=${output[k].length}`).join(', ')
    console.log(`Loaded glossary: ${stats}`)
    return output
}