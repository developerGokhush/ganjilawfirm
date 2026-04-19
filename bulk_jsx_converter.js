const fs = require('fs');
const path = require('path');

const ROOT_DIR = '/Users/nandakishore/ganjilawfirm';
const NEXT_APP_DIR = path.join(ROOT_DIR, 'ganji-next', 'src', 'app');

function transformHtmlToJsx(html) {
    let jsx = html;
    
    // 1. Convert specific html attributes to JSX format mapping
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    jsx = jsx.replace(/maxLength="(.*?)"/gi, 'maxLength={$1}');
    jsx = jsx.replace(/required=""/gi, 'required={true}');
    jsx = jsx.replace(/disabled=""/gi, 'disabled={true}');
    jsx = jsx.replace(/checked=""/gi, 'checked={true}');
    jsx = jsx.replace(/readOnly=""/gi, 'readOnly={true}');
    jsx = jsx.replace(/autoFocus=""/gi, 'autoFocus={true}');
    jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
    jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
    jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
    jsx = jsx.replace(/xmlns:xlink="/g, 'xmlnsXlink="');
    jsx = jsx.replace(/srcset="/g, 'srcSet="');
    
    // 2. Convert inline styles
    // 2. Convert inline styles
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        let styles = p1.split(';').filter(Boolean);
        let objArr = styles.map(s => {
            let parts = s.split(':');
            let key = parts[0];
            let val = parts.slice(1).join(':');
            if(!key || !val) return '';
            key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            if (key === 'MsTransform') key = 'msTransform';
            return `${key}: '${val.trim().replace(/'/g, "\\'")}'`;
        }).filter(Boolean);
        return `style={{${objArr.join(', ')}}}`;
    });

    // 3. Centralized suppression of hydration warnings on ALL structural HTML tags
    jsx = jsx.replace(/<([a-z0-9]+)([^>]+)>/gi, (m, tag, attrs) => {
        let isHtmlTag = /^(div|span|a|p|h[1-6]|img|svg|nav|ul|li|section|form|input|button|label|textarea|iframe|video|audio|html|body|main|header|footer)$/i.test(tag);
        if (!isHtmlTag) return m;

        let cleanAttrs = attrs.replace(/\bsuppressHydrationWarning\b/g, '').trimEnd();
        if (cleanAttrs.endsWith('/')) {
           return `<${tag} ${cleanAttrs.slice(0, -1).trimEnd()} suppressHydrationWarning />`;
        } else {
           return `<${tag} ${cleanAttrs} suppressHydrationWarning>`;
        }
    });

    // 3. Close non-closing tags in HTML for JSX validation
    const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
    for (const tag of voidTags) {
        const regex = new RegExp(`<${tag}([^>]*)>`, 'gi');
        jsx = jsx.replace(regex, (m, p1) => {
            if (p1.trimEnd().endsWith('/')) return m; // Already closed
            return `<${tag}${p1} />`;
        });
    }

    return jsx;
}

function processFile(filePath, relativePath) {
    // Determine the router path (ignore index.html root to preserve the Custom Home layout we did)
    if (relativePath === 'index.html' || relativePath === '404.html') {
        if (relativePath === '404.html') relativePath = 'not-found/index.html'; 
        else return;
    }

    const html = fs.readFileSync(filePath, 'utf8');
    
    const startToken = '<div class="main-wrapper">';
    let startIdx = html.indexOf(startToken);
    
    if (startIdx === -1) {
        console.log(`Skipping ${relativePath}: No main-wrapper found`);
        return;
    }
    startIdx += startToken.length;
    
    const endIdx = html.indexOf('<div class="footer-outer">');
    if (endIdx === -1) {
        console.log(`Skipping ${relativePath}: No footer-outer found`);
        return;
    }
    
    let bodyHtml = html.substring(startIdx, endIdx).trim();
    
    // Extract page metadata for Webflow Initialization
    let pageId = '68dbf1fa0f89b93c8288d09d'; // fallback
    let siteId = '68dbf1fa0f89b93c8288d0b9'; // fallback
    const pageMatch = html.match(/data-wf-page="([^"]+)"/);
    if(pageMatch) pageId = pageMatch[1];
    const siteMatch = html.match(/data-wf-site="([^"]+)"/);
    if(siteMatch) siteId = siteMatch[1];
    
    const lastDivIdx = bodyHtml.lastIndexOf('</div>');
    if (lastDivIdx !== -1 && lastDivIdx >= bodyHtml.length - 10) {
        bodyHtml = bodyHtml.substring(0, lastDivIdx);
    }
    
    const jsx = transformHtmlToJsx(bodyHtml);
    
    let dirName = path.dirname(relativePath);
    let pagePath = path.join(NEXT_APP_DIR, dirName, 'page.tsx');
    if (relativePath === 'not-found/index.html') {
        pagePath = path.join(NEXT_APP_DIR, 'not-found.tsx');
    }
    
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    
    const componentName = dirName.split(/[-\/]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') || 'Unknown';
    
    const tsxContent = `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebflowInit from "@/components/WebflowInit";

export default function ${componentName.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="page-wrapper">
      <WebflowInit pageId="${pageId}" siteId="${siteId}" />
      <Navbar />
      <div className="main-wrapper">
        ${jsx}
      </div>
      <Footer />
    </div>
  );
}
`;
    
    fs.writeFileSync(pagePath, tsxContent, 'utf8');
    console.log(`Generated ${pagePath}`);
}

function crawlDir(dir, baseDir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // Ignore build output and IDE folders
            if (!['ganji-next', '.vscode'].includes(file)) {
                crawlDir(fullPath, baseDir);
            }
        } else if (file.endsWith('.html')) {
            const relPath = path.relative(baseDir, fullPath);
            processFile(fullPath, relPath);
        }
    }
}

crawlDir(ROOT_DIR, ROOT_DIR);
