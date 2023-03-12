const fs = require('fs').promises;

// https://stackoverflow.com/a/49458964
function formatXml(xml, tab) { // tab = optional indent value, default is tab (\t)
    var formatted = '', indent = '';
    tab = tab || '\t';
    xml.split(/>\s*</).forEach(function (node) {
        if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted += indent + '<' + node + '>\r\n';
        if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;              // increase indent
    });
    return formatted.substring(1, formatted.length - 3);
}

async function createSitemap() {
    const site_url = await fs.readFile("public/CNAME", "utf-8")
    const pagesCode = await fs.readFile("./src/pages/index.js", "utf-8")
    // cant import it because its a module file, so ill just eval the pages array here after i scrape that file (really dumb i know)
    let codeToEval = "[\n"
    let toggle;
    // parser 
    for (let line of pagesCode.split("\n")) {
        if (!toggle && line.includes("const pages = [")) {
            toggle = true; // start parser
            continue;
        }
        if (toggle && line.includes("export default pages")) break; // end parser
        if (toggle && line.includes("component: React.lazy")) continue; // skip tokens
        if (toggle) {
            codeToEval += `${line}\n`
        }
    }
    const pages = eval(codeToEval)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((page) => `<url><loc>https://${site_url.trimEnd()}/#/${page.location}</loc></url>`).join('')}</urlset>
    `
    const formatted = formatXml(sitemap)
    await fs.writeFile('public/sitemap.xml', formatted)
    return formatted
}

console.log("Creating sitemap.xml ...")
createSitemap()
    .then(console.log)
    .then(() => console.log("Finished"))