# 星語 AI 解讀

初次解讀直接分析完整問題與補充背景，依本次牌面及十二宮本命星曜生成文字。追問沿用同一次資料，最多四次。舊收藏保留為明確標示的舊版牌義紀錄；AI 失敗不會改回模板。

## 部署

Vercel 匯入此儲存庫，Framework 選 Other，建置 `npm run build`，輸出 `public`。`api/reading.mjs` 為 Node Function，60 秒上限。設定 `AI_GATEWAY_MODEL=openai/gpt-6.1-sol`（已於 2026-10-12 模型目錄確認）。部署使用 Vercel 自動 OIDC；本機可另設私密 `AI_GATEWAY_API_KEY`。

AI Gateway 額度需要可用。公開啟用前，在 Vercel Firewall 對 `/api/reading` 設置合理的每 IP 請求頻率限制，並確認 AI Gateway 的預算限制。CORS 只限制瀏覽器來源，不能代替防濫用或預算控制。

`ALLOWED_ORIGINS` 預設 `https://yojing-hub.github.io`；本 Vercel 正式域名與部署域名由環境自動加入。GitHub Pages 前端的 `site-config.js` 設為實際後端完整 `/api/reading` URL；Vercel 自己提供的前端採同源 `/api/reading`。

## 隱私

使用者在送出前勾選資料傳送同意。傳送问题、補充情況、宮位／星曜、三張牌與追問文字；不傳出生日期、出生地或排盤性別。文字會經 Vercel AI Gateway 與模型供應商处理。收藏仍由使用者主動儲存在本機瀏覽器。

## 驗證

`node verify-ai.mjs` 驗證真實排盤資料、輸入上限、牌面不重複、隱私清理、追問順序及失敗訊息，測試不呼叫付費模型。上線前另需實際模型及瀏覽器端到端驗證。
