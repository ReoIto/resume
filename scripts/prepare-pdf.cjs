const fs = require('fs');
const path = require('path');

// PDF生成用にMarkdownファイルを準備
const sourceFile = path.join(__dirname, '../docs/index.md');
const tempFile = path.join(__dirname, '../docs/index.pdf.md');
const sourceContent = fs.readFileSync(sourceFile, 'utf-8');

// 絶対パス /images/ を相対パス public/images/ に変換
// basedirがdocsに設定されているため、public/images/で解決される
const convertedContent = sourceContent.replace(
  /src=["']\/images\//g,
  'src="public/images/'
);

fs.writeFileSync(tempFile, convertedContent, 'utf-8');
console.log('PDF用Markdownファイルを準備しました:', tempFile);
