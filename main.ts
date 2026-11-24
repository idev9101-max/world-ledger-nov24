import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const destinationFolder = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceImage = fileURLToPath(new URL('entry.png', import.meta.url));

async function publishEntryImage() {
  await mkdir(destinationFolder, { recursive: true, mode: 0o755 });
  await copyFile(sourceImage, path.join(destinationFolder, path.basename(sourceImage)));
}

await publishEntryImage();
