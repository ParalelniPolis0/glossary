//import { loadSource } from "./lib/glossary.js";
import bundle from './dist/index.json' with { type: "json" };

export function loadGlossary() {
    return bundle
}