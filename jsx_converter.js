const fs = require('fs');

const inFile = '/Users/nandakishore/ganjilawfirm/index.html';
const outFile = '/Users/nandakishore/ganjilawfirm/ganji-next/src/app/page.tsx';

let html = fs.readFileSync(inFile, 'utf8');

// Extract the content from section-service to section-faq (lines 10232 to 11870)
const startIndex = html.indexOf('<section data-wf--services-component');
const endIndex = html.indexOf('<div class="footer-outer">');

let bodyHtml = html.substring(startIndex, endIndex);

// Change paths
bodyHtml = bodyHtml.replace(/https:\/\/wubflow-shield\.NOCODEXPORT\.DEV\/[^\/]+\//g, '/assets/');
bodyHtml = bodyHtml.replace(/https:\/\/d3e54v103j8qbb\.cloudfront\.net\/js\//g, '/js/');
bodyHtml = bodyHtml.replace(/\/template\//g, '#');

// JSX Conversions
let jsx = bodyHtml;
jsx = jsx.replace(/class="/g, 'className="');
jsx = jsx.replace(/for="/g, 'htmlFor="');
jsx = jsx.replace(/maxlength/g, 'maxLength');

// Fix inline styles
// E.g., style="-webkit-transform:translate3d(0px, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    let styles = p1.split(';').filter(Boolean);
    let objArr = styles.map(s => {
        let [key, val] = s.split(':');
        if(!key || !val) return '';
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${key}: '${val.trim().replace(/'/g, "\\'")}'`;
    }).filter(Boolean);
    return `style={{${objArr.join(', ')}}}`;
});

// Self-closing tags
jsx = jsx.replace(/<img(.*?)>/g, (m, p1) => {
    if (p1.endsWith('/')) return m;
    return `<img${p1} />`;
});
jsx = jsx.replace(/<input(.*?)>/g, (m, p1) => {
    if (p1.endsWith('/')) return m;
    return `<input${p1} />`;
});

// Remove xmlns attributes which might cause issues if not camelCased, etc, actually standard is fine.

const pageTsx = `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <Hero />
        <AboutSection />
        ${jsx}
      </div>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync(outFile, pageTsx, 'utf8');
console.log('Successfully generated page.tsx');
