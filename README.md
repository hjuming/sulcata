# 蘇卡達象龜飼養指南

這是一個關於蘇卡達象龜的飼養指南網站，旨在提供詳細的生態介紹、飼養環境、飲食管理、健康照護以及相關法規注意事項，幫助飼主更好地照顧蘇卡達象龜。

## 網站特色

*   **全面指南**：涵蓋蘇卡達象龜從幼龜到成龜的各個飼養環節。
*   **互動介面**：清晰的分類導航，方便快速查找所需資訊。
*   **圖片展示**：豐富的圖片集，直觀展示蘇卡達象龜的成長歷程。
*   **響應式設計**：適應不同設備的螢幕大小，提供良好的瀏覽體驗。

## 如何使用 Manus 建置此網站

本網站是透過 Google Gemini (Manus) 平台建置的。Manus 是一個強大的 AI 代理，能夠根據自然語言指令執行多種任務，包括網站開發。

以下是使用 Manus 建置此網站的簡要步驟：

1.  **提供需求**：向 Manus 提供關於網站內容和功能的詳細描述，例如「創建一個關於蘇卡達象龜介紹與飼養指南的網站」。
2.  **上傳資料**：提供相關的 PDF 文件或文本資料，讓 Manus 提取內容。
3.  **迭代優化**：根據 Manus 提供的初步網站，提出修改意見，例如調整佈局、添加功能、優化 SEO 等。
4.  **部署與發布**：Manus 會自動處理網站的開發、構建和部署，並提供一個公開的 URL 供您訪問。

## 如何將專案部署到 Cloudflare Pages

本專案的原始碼已上傳至 GitHub。您可以利用 Cloudflare Pages 的持續部署功能，將此專案部署到全球 CDN 上，提供快速且可靠的網站服務。

以下是將此專案部署到 Cloudflare Pages 的完整教學步驟：

### 前提條件

*   一個 GitHub 帳戶。
*   一個 Cloudflare 帳戶。
*   本專案的 GitHub 倉庫 (例如：`https://github.com/hjuming/sulcata`)。

### 部署步驟

1.  **登入 Cloudflare 帳戶**：
    *   訪問 [Cloudflare 官方網站](https://www.cloudflare.com/) 並登入您的帳戶。

2.  **進入 Pages 儀表板**：
    *   在 Cloudflare 儀表板中，找到並點擊左側導航欄的「Workers & Pages」選項。
    *   選擇「Create application」，然後點擊「Connect to Git」。

3.  **連接 GitHub 帳戶**：
    *   點擊「Connect GitHub account」並授權 Cloudflare 訪問您的 GitHub 倉庫。您可以選擇只授權特定倉庫，或所有倉庫。

4.  **選擇專案倉庫**：
    *   在倉庫列表中，找到並選擇 `hjuming/sulcata` (或您自己的專案倉庫名稱)。
    *   點擊「Begin setup」。

5.  **配置構建設定**：
    *   **Project name**：輸入您希望在 Cloudflare Pages 上顯示的專案名稱，例如 `sulcata-guide`。
    *   **Production branch**：選擇 `main` 或 `branch-1` (如果您主要使用 `branch-1` 分支)。
    *   **Build settings**：
        *   **Framework preset**：選擇 `Vite` (本專案使用 Vite 構建 React 應用)。
        *   **Build command**：`pnpm run build`
        *   **Build output directory**：`dist`
    *   **Environment variables**：如果您的專案需要任何環境變數，可以在此處添加。

6.  **保存並部署**：
    *   確認所有設定無誤後，點擊「Save and Deploy」。

7.  **等待部署完成**：
    *   Cloudflare Pages 將會自動從您的 GitHub 倉庫拉取代碼，執行構建命令，並將生成的靜態文件部署到其全球 CDN 上。
    *   部署完成後，您將會獲得一個唯一的 Cloudflare Pages URL，例如 `https://your-project-name.pages.dev`。

### 持續部署

*   一旦設定完成，每次您推送到您選擇的生產分支 (例如 `main` 或 `branch-1`) 時，Cloudflare Pages 都會自動觸發新的構建和部署，確保您的網站始終保持最新狀態。

希望這份指南對您有所幫助！
