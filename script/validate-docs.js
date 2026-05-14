const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');

if (!fs.existsSync(docsDir)) {
  console.error('docs directory does not exist');
  process.exit(1);
}

const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));

if (files.length === 0) {
  console.error('No markdown files found in docs directory');
  process.exit(1);
}

console.log('Documentation validation completed successfully');
process.exit(0);