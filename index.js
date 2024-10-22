//import { loadSource } from "./lib/glossary.js";
import bundle from './dist/bundle.json' with { type: "json" };

export function loadGlossary() {
    return bundle
}