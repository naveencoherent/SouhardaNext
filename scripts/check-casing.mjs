import fs from 'node:fs';
import path from 'node:path';

const ROUTE_ROOT = 'src/app';
const PUBLIC_ROOT = 'public';

// Existing legacy folders already referenced across the site
const LEGACY_IGNORE = new Set([
  'Database',
  'Swabhimani_Sahakari',
  'Director',
  'divOffice',
  'Education',
  'Estamping',
  'Regulatory',
  'Services',
  'documents',
]);

const MEDIA_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.pdf', '.ico']);
const violations = [];

function checkRoutes(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.name !== entry.name.toLowerCase()) {
      violations.push(`[Route Folder] ${fullPath}`);
    }
    checkRoutes(fullPath);
  }
}

function checkPublic(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (LEGACY_IGNORE.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== entry.name.toLowerCase()) {
        violations.push(`[Public Folder] ${fullPath}`);
      }
      checkPublic(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!MEDIA_EXTS.has(ext) && entry.name !== entry.name.toLowerCase()) {
        violations.push(`[Public Data File] ${fullPath}`);
      }
    }
  }
}

if (fs.existsSync(ROUTE_ROOT)) checkRoutes(ROUTE_ROOT);
if (fs.existsSync(PUBLIC_ROOT)) checkPublic(PUBLIC_ROOT);

if (violations.length > 0) {
  console.error('\n❌ Uppercase route/public paths detected (will 404 on Linux):');
  violations.forEach((v) => console.error(`  - ${v}`));
  process.exit(1);
}

console.log('✓ All Next.js routes and public folders are Linux-safe lowercase.');