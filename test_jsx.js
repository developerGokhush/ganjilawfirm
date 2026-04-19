const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find all opening and closing tags using a regex (rough parse)
let openTags = [];
const tagRegex = /<(\/?)([a-zA-Z0-9]+)[^>]*(\/?)>/g;

let match;
while ((match = tagRegex.exec(content)) !== null) {
  const isClosing = match[1] === '/';
  const tagName = match[2];
  const isSelfClosing = match[3] === '/';

  if (!isSelfClosing && !["img", "input", "br", "hr", "meta", "link", "path", "svg"].includes(tagName)) {
    if (isClosing) {
      if (openTags.length > 0 && openTags[openTags.length - 1] === tagName) {
        openTags.pop();
      } else {
        console.log(`Mismatched closing tag at index ${match.index}: </${tagName}>. Top of stack is ${openTags[openTags.length - 1]}`);
      }
    } else {
      openTags.push(tagName);
    }
  }
}
console.log("Remaining open tags:", openTags);
