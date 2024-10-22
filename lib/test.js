import { loadSource } from "./glossary.js";
import { load } from 'js-yaml';
import * as fs from 'node:fs';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);

const glossary = loadSource();
const schema = load(fs.readFileSync('./schema/term.yaml'));
const validate = ajv.compile(schema);

describe('Glossary Validation', () => {
    for (const lang in glossary) {
        glossary[lang].forEach((i) => {
            it(`${lang}/${i.id}`, function () {
                const valid = validate(i);
                if (!valid) {
                    throw new Error(`Validation failed: ${JSON.stringify(validate.errors, null, 2)}`);
                }
            });
        });
    }
});