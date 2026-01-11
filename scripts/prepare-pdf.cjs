const fs = require('fs');
const path = require('path');

// PDF生成用にMarkdownファイルを準備
const sourceFile = path.join(__dirname, '../docs/index.md');
const tempFile = path.join(__dirname, '../docs/index-temp.md');
const sourceContent = fs.readFileSync(sourceFile, 'utf-8');

let convertedContent = sourceContent;

// 絶対パス /images/ を相対パス public/images/ に変換
// basedirがdocsに設定されているため、public/images/で解決される
convertedContent = convertedContent.replace(
  /src=["']\/images\//g,
  'src="public/images/'
);

// VitePressの:::details構文を標準Markdownの見出しに変換
// :::details タイトル {open} → ### タイトル
convertedContent = convertedContent.replace(
  /^:::details\s+(.+?)\s+\{open\}$/gm,
  '### $1'
);

// :::detailsの閉じタグを削除
convertedContent = convertedContent.replace(
  /^:::$/gm,
  ''
);

fs.writeFileSync(tempFile, convertedContent, 'utf-8');
console.log('PDF用Markdownファイルを準備しました:', tempFile);
