const { execSync } = require('child_process');
const fs = require('fs');

const username = process.argv[2];

if (!username) {
  console.error('Usage: node generate-snake.js <github-username>');
  process.exit(1);
}

// Roda o comando da lib github-contribution-grid-snake como CLI (você pode usar o pacote CLI instalado localmente)

try {
  execSync(`npx github-contribution-grid-snake -u ${username} -o github-contribution-grid-snake.svg`, { stdio: 'inherit' });
  console.log('SVG gerado com sucesso!');
} catch (error) {
  console.error('Erro ao gerar SVG:', error);
  process.exit(1);
}
