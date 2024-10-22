import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';

export const linkRegExp = /\[\[([^\|\]]+)\|?([^\]]*)\]\]/g;

const srcDir = path.resolve(import.meta.dirname, '../src');
const langs = {
    en: {}
}

function extractLinks(g, arr) {
    const linksMatch = g.description.matchAll(linkRegExp)
    return [...linksMatch].map(([_, key, link]) => {
        link = link === "" ? null : link
        const targetObj = arr.find(g => {
            const names = [g.id, g.name, ...(g.keywords || [])].map(n => escapeRegExp(n))
            const re = new RegExp(`^(${names.join('|')})$`, 'i')
            //console.log(re)
            return link ? link.match(re) : key.match(re)
        })
        return { key, link, target: targetObj?.id || null }
    })
}

export function loadSource() {
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
            const description = src.content.trim('\n')

            arr.push({
                id,
                ...src.data,
                description,
            })
        }
        for (const g of arr) {
            g.links = extractLinks(g, arr)
        }
        output[lang] = arr
    }
    const stats = Object.keys(output).map(k => `${k}=${output[k].length}`).join(', ')
    console.log(`Loaded glossary: ${stats}`)
    return output
}

export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}