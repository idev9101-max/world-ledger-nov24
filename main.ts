import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const destination = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
const source = resolve(here, 'entry.png');

async function main(): Promise<void> {
  await mkdir(destination, { recursive: true });
  await copyFile(source, resolve(destination, 'entry.png'));
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
