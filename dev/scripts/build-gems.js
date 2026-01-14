import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gemsDir = path.resolve(__dirname, '../../gem');

const gems = fs.readdirSync(gemsDir).filter(gem => {
  return fs.statSync(path.join(gemsDir, gem)).isDirectory() &&
    fs.existsSync(path.join(gemsDir, gem, 'app.tsx'));
});

console.log(`Found gems: ${gems.join(', ')}`);

gems.forEach(gem => {
  console.log(`Building ${gem}...`);
  try {
    // Execute Vite build with the gem name environment variable
    execSync(`npx vite build -c vite.config.gem.ts`, {
      stdio: 'inherit',
      env: { ...process.env, GEM_NAME: gem },
      cwd: path.resolve(__dirname, '..')
    });
  } catch (e) {
    console.error(`Failed to build ${gem}`, e);
    process.exit(1);
  }
});
