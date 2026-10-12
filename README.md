# 星語 Xingyu

結合紫微斗數與塔羅牌的繁體中文網站，採深靛色與霧金色的線條星空美術。

## 功能

- 紫微十二宮本命盤：出生年份直接輸入、月日選單、西元／民國切換、閏日檢查與時辰提示。
- 塔羅占卜：完整 78 張牌，抽取三張不重複的牌，含正逆位與線稿牌面。
- 星牌合參：問題整理、主題宮位／命宮／福德宮提示、逐牌解讀、整合視角、一週行動與反思問題。
- 瀏覽器內收藏紀錄、查看、刪除與下載完整解讀。
- 支援桌機與手機、鍵盤操作，以及減少動態效果的系統偏好。

解讀依星曜、牌義與提問關鍵字規則整理，未接入 AI 或真人即時諮詢。出生地只供紀錄，不參與真太陽時或時區校正；補充情況列入結果供對照，不進行 AI 語意分析。

## GitHub Pages

網站已包含可直接上線的檔案，不需要線上建置或 API 金鑰。

在 GitHub 儲存庫的 **Settings → Pages**，選擇 **Deploy from a branch**，來源設為 **main** 分支的 **/(root)**，並儲存。GitHub 完成發布後，Pages 設定頁會提供網站網址。

發布方式：[GitHub Pages 官方文件](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 本機使用與維護

直接開啟 `index.html` 可使用網站。Google 字型需要網路；離線時會使用系統字型。

編輯 `app-source.js`、`reading-engine.js` 等原始碼後，執行：

```sh
npm install
npm test
npm run build
npm run preview
```

預覽網址為 `http://127.0.0.1:4318`。更新時，請一併提交原始碼與產生的 `app.js`。CSS、HTML 與 SVG 可直接編輯根目錄的檔案。

## 隱私與解讀範圍

出生資料、抽牌與解讀在瀏覽器內處理。主動收藏的紀錄儲存在使用者瀏覽器的 localStorage，最多 30 筆，不上傳至 GitHub。清除瀏覽器資料也會清除收藏。

網站依星曜與牌義提供自我探索參考，不保證事件走向、不讀取他人想法，也不替代專業建議。紫微提示未包含完整三方四正或行運判讀。

## 第三方套件

使用 [iztro 2.6.1](https://github.com/SylarLong/iztro)（MIT 授權）計算紫微命盤，授權全文保留於 `IZTRO-LICENSE.txt`。

本儲存庫未指定其餘原創程式碼與美術的開源授權；公開可閱讀不等於授予重用授權。


