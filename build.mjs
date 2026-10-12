import {readFileSync,writeFileSync,copyFileSync,existsSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('./',import.meta.url));
const removeImports=s=>s.replace(/^import .* from '\.\/[^']+';\r?\n/gm,'');
const helpers=['date-utils.js','tarot-meanings.js','reading-engine.js','art.js'].map(f=>removeImports(readFileSync(path.join(root,f),'utf8').replace(/export /g,''))).join('\n');
writeFileSync(path.join(root,'app.js'),helpers+'\n'+removeImports(readFileSync(path.join(root,'app-source.js'),'utf8').replace("import { astro } from 'iztro';","const { astro } = window.iztro;")));
const library=path.join(root,'node_modules/iztro/dist/iztro.min.js');
if(existsSync(library))copyFileSync(library,path.join(root,'iztro.min.js'));
else if(!existsSync(path.join(root,'iztro.min.js')))throw Error('請先執行 npm install 安裝排盤套件。');
console.log('網站檔案已更新，可直接由 GitHub Pages 提供。');


const publicRoot=path.join(root,"public");mkdirSync(publicRoot,{recursive:true});
for(const name of ["index.html","style.css","enhancements.css","app.js","iztro.min.js","astrolabe.svg","constellations.svg","star-card.svg","IZTRO-LICENSE.txt"])copyFileSync(path.join(root,name),path.join(publicRoot,name));
writeFileSync(path.join(publicRoot,"site-config.js"),"window.XINGYU_CONFIG={aiEndpoint:'/api/reading'};\n");
