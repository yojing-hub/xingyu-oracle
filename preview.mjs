import http from 'node:http';import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./',import.meta.url));
const allowed=new Set(['index.html','style.css','enhancements.css','app.js','iztro.min.js','astrolabe.svg','star-card.svg','constellations.svg','site-config.js']);
http.createServer((req,res)=>{
  const name=new URL(req.url,'http://localhost').pathname.replace(/^\//,'')||'index.html';
  if(!allowed.has(name)){res.writeHead(404);res.end();return}
  try{res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'})[path.extname(name)]);res.end(fs.readFileSync(path.join(root,name)))}catch{res.writeHead(404);res.end()}
}).listen(4320,'127.0.0.1',()=>console.log('網站預覽：http://127.0.0.1:4320'));


