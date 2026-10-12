import {generateReading,ReadingError} from './ai-service.mjs';
export default async function handler(req,res){
  const allowed=(process.env.ALLOWED_ORIGINS||'https://yojing-hub.github.io').split(',').map(x=>x.trim()).filter(Boolean),origin=req.headers.origin;
  for(const host of [process.env.VERCEL_URL,process.env.VERCEL_PROJECT_PRODUCTION_URL])if(host)allowed.push('https://'+host);
  res.setHeader('Cache-Control','no-store');res.setHeader('Vary','Origin');res.setHeader('X-Content-Type-Options','nosniff');
  if(!origin||!allowed.includes(origin))return res.status(403).json({error:{code:'ORIGIN_BLOCKED',message:'無法從這個網站使用 AI 解讀。'}});
  res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS')return res.status(204).end();
  if(req.method!=='POST')return res.status(405).json({error:{code:'METHOD_NOT_ALLOWED',message:'請從占卜頁送出問題。'}});
  if(!String(req.headers['content-type']||'').includes('application/json'))return res.status(415).json({error:{code:'INVALID_INPUT',message:'請從占卜頁重新送出問題。'}});
  try{
    const raw=typeof req.body==='string'?req.body:JSON.stringify(req.body);if(!raw||Buffer.byteLength(raw)>100000)throw new ReadingError('INPUT_TOO_LARGE','內容過長，請精簡後再試。',413);
    let input;try{input=JSON.parse(raw)}catch{throw new ReadingError('INVALID_INPUT','問題資料格式有誤。')}
    const reading=await generateReading(input,process.env);return res.status(200).json({reading});
  }catch(error){return res.status(error instanceof ReadingError?error.status:500).json({error:{code:error instanceof ReadingError?error.code:'INTERNAL_ERROR',message:error instanceof ReadingError?error.message:'暫時無法完成解讀，請稍後再試。'}})}
}
