/**
 * VentToPolite - 核心互動與雙引擎邏輯
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM 元素
  const categoryTabs = document.querySelectorAll(".cat-tab");
  const presetChipsContainer = document.getElementById("presetChips");
  const rantInput = document.getElementById("rantInput");
  const charCount = document.getElementById("charCount");
  const rageBar = document.getElementById("rageBar");
  const rageScore = document.getElementById("rageScore");
  const btnGenerate = document.getElementById("btnGenerate");

  // 產出區域元素
  const resultsContainer = document.getElementById("resultsContainer");
  const placeholderState = document.getElementById("placeholderState");

  // 毒舌卡片元素
  const roastTag = document.getElementById("roastTag");
  const roastStars = document.getElementById("roastStars");
  const roastContent = document.getElementById("roastContent");
  const comfortContent = document.getElementById("comfortContent");

  // 外交官卡片元素
  const tacticsTabs = document.getElementById("tacticsTabs");
  const messageText = document.getElementById("messageText");
  const btnCopy = document.getElementById("btnCopy");
  const insightContent = document.getElementById("insightContent");

  // 彈窗與設定
  const btnSettings = document.getElementById("btnSettings");
  const settingsModal = document.getElementById("settingsModal");
  const btnCloseModal = document.getElementById("btnCloseModal");
  const btnSaveSettings = document.getElementById("btnSaveSettings");
  const apiKeyInput = document.getElementById("apiKeyInput");
  const apiEndpointInput = document.getElementById("apiEndpointInput");
  const apiModelInput = document.getElementById("apiModelInput");
  const toast = document.getElementById("toast");

  // 當前狀態
  let currentCategory = "friends";
  let currentTactics = [];
  let currentTacticIndex = 0;

  // 載入儲存的 API 設定
  const savedApiKey = localStorage.getItem("vent_api_key") || "";
  const savedEndpoint = localStorage.getItem("vent_api_endpoint") || "https://api.openai.com/v1";
  const savedModel = localStorage.getItem("vent_api_model") || "gpt-4o-mini";
  if (apiKeyInput) apiKeyInput.value = savedApiKey;
  if (apiEndpointInput) apiEndpointInput.value = savedEndpoint;
  if (apiModelInput) apiModelInput.value = savedModel;

  // 初始化分類與範例
  function switchCategory(catId) {
    currentCategory = catId;
    categoryTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.cat === catId);
    });

    renderPresetChips();
  }

  function renderPresetChips() {
    presetChipsContainer.innerHTML = "";
    const catData = PRESET_CATEGORIES[currentCategory];
    if (!catData || !catData.items) return;

    catData.items.forEach(item => {
      const chip = document.createElement("button");
      chip.className = "preset-chip";
      chip.textContent = item.title;
      chip.addEventListener("click", () => {
        rantInput.value = item.rant;
        updateRageMeter(item.rant, item.rageLevel);
        applyPresetResult(item);
      });
      presetChipsContainer.appendChild(chip);
    });
  }

  // 即時怒氣計計算 (Rage Meter)
  function calculateRageLevel(text) {
    if (!text.trim()) return 0;
    let score = 40; // 基礎分

    // 關鍵情緒字眼加權
    const angryWords = [
      "氣死", "煩死", "遲到", "甩鍋", "憑什麼", "垃圾", "有病", "搞屁", "裝死", 
      "滾", "到底", "有事嗎", "藉口", "誇張", "不要臉", "擺爛", "火大", "受夠",
      "靠", "乾", "北七", "傻眼", "扯"
    ];

    angryWords.forEach(w => {
      if (text.includes(w)) score += 12;
    });

    // 標點符號激情加權 (!, ?, 驚嘆號)
    const exclamations = (text.match(/(!|！|\?|？)/g) || []).length;
    score += Math.min(exclamations * 5, 25);

    // 長度加權
    if (text.length > 50) score += 10;
    if (text.length > 100) score += 10;

    return Math.min(Math.max(score, 15), 99);
  }

  function updateRageMeter(text, forcedScore = null) {
    charCount.textContent = `${text.length} 字`;
    const score = forcedScore !== null ? forcedScore : calculateRageLevel(text);
    rageBar.style.width = `${score}%`;
    rageScore.textContent = `${score}%`;

    // 依分數切換顏色
    if (score < 50) {
      rageBar.style.background = "linear-gradient(90deg, #10b981, #3b82f6)";
      rageScore.style.color = "#38bdf8";
    } else if (score < 80) {
      rageBar.style.background = "linear-gradient(90deg, #f59e0b, #f97316)";
      rageScore.style.color = "#fb923c";
    } else {
      rageBar.style.background = "linear-gradient(90deg, #f97316, #ef4444)";
      rageScore.style.color = "#f87171";
    }
  }

  rantInput.addEventListener("input", (e) => {
    updateRageMeter(e.target.value);
  });

  // 套用現成預設結果
  function applyPresetResult(presetItem) {
    // 毒舌部分
    roastTag.textContent = presetItem.roast.tagTitle;
    roastStars.textContent = presetItem.roast.stars;
    roastContent.textContent = presetItem.roast.comment;
    comfortContent.textContent = presetItem.roast.comfortTip;

    // 外交官部分
    currentTactics = presetItem.diplomacy.tactics;
    insightContent.textContent = presetItem.diplomacy.insight;
    renderTacticsTabs();

    // 顯示結果卡片
    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // 渲染策略標籤 (Tabs)
  function renderTacticsTabs() {
    tacticsTabs.innerHTML = "";
    currentTactics.forEach((tactic, idx) => {
      const btn = document.createElement("button");
      btn.className = `tactic-btn ${idx === currentTacticIndex ? "active" : ""}`;
      btn.textContent = tactic.type;
      btn.addEventListener("click", () => {
        currentTacticIndex = idx;
        renderTacticsTabs();
        updateTacticDisplay();
      });
      tacticsTabs.appendChild(btn);
    });
    updateTacticDisplay();
  }

  function updateTacticDisplay() {
    if (!currentTactics || currentTactics.length === 0) return;
    const current = currentTactics[currentTacticIndex];
    messageText.textContent = current.text;
  }

  // 一鍵複製訊息
  btnCopy.addEventListener("click", () => {
    const textToCopy = messageText.textContent;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("✅ 已複製高情商話術到剪貼簿！");
    }).catch(() => {
      showToast("❌ 複製失敗，請手動複製");
    });
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // 產生雙面輸出邏輯 (智慧合成 / 串接 API)
  btnGenerate.addEventListener("click", async () => {
    const text = rantInput.value.trim();
    if (!text) {
      showToast("⚠️ 請先輸入你的生氣真心話！");
      rantInput.focus();
      return;
    }

    const apiKey = localStorage.getItem("vent_api_key");

    btnGenerate.disabled = true;
    btnGenerate.innerHTML = `<span class="brand-icon">⚡</span> 雙引擎啟動分析中...`;

    try {
      if (apiKey) {
        // 使用者有提供 API Key：呼叫即時 LLM
        await callLiveLLM(text, apiKey);
      } else {
        // 無 API Key：啟用智慧離線預設引擎 (保證展示成功)
        await generateOfflineIntelligent(text);
      }
    } catch (err) {
      console.warn("API 呼叫失敗，自動降級為離線智囊模式：", err);
      await generateOfflineIntelligent(text);
    } finally {
      btnGenerate.disabled = false;
      btnGenerate.innerHTML = `<span class="brand-icon">⚡</span> 啟動雙引擎翻譯`;
    }
  });

  // 智慧離線引擎
  async function generateOfflineIntelligent(text) {
    // 模擬網路延遲增強體驗感
    await new Promise(r => setTimeout(r, 650));

    // 比對是否有高度相關的預設案例
    let matchedItem = null;
    const allPresets = [
      ...PRESET_CATEGORIES.friends.items,
      ...PRESET_CATEGORIES.workplace.items,
      ...PRESET_CATEGORIES.campus.items,
      ...PRESET_CATEGORIES.living.items,
    ];

    for (const item of allPresets) {
      if (text.includes("遲到") && item.id === "friend_late") { matchedItem = item; break; }
      if ((text.includes("隨便") || text.includes("吃什麼")) && item.id === "friend_any") { matchedItem = item; break; }
      if ((text.includes("下班") || text.includes("急件") || text.includes("週末")) && item.id === "work_urgent") { matchedItem = item; break; }
      if ((text.includes("甩鍋") || text.includes("責任")) && item.id === "work_blame") { matchedItem = item; break; }
      if ((text.includes("組員") || text.includes("報告") || text.includes("不來")) && item.id === "campus_freerider") { matchedItem = item; break; }
      if ((text.includes("教授") || text.includes("加簽") || text.includes("先修")) && item.id === "campus_late_add") { matchedItem = item; break; }
      if ((text.includes("碗") || text.includes("洗碗") || text.includes("水槽")) && item.id === "living_dishes") { matchedItem = item; break; }
    }

    if (matchedItem) {
      applyPresetResult(matchedItem);
    } else {
      // 通用合成版本
      const customResult = {
        roast: {
          tagTitle: "高能荒謬事件認證",
          stars: "★★★★☆",
          comment: `對方這個舉動已經超出了常人的理解範疇。你的血壓升高完全是合理的生理防衛機制！這種情況擺明了是把問題丟給有責任感的人承擔，別人的隨意不該成為懲罰你的藉口。`,
          comfortTip: "先深呼吸三秒鐘。問題在他不在你，我們用最體面的方式把皮球踢回去。"
        },
        diplomacy: {
          tactics: [
            {
              type: "幽默調侃型",
              tag: "軟性提醒・保留面子",
              text: `哈囉！關於剛才提到的事情，我這邊看進度稍微卡住了～再麻煩你今天抽空幫忙推進一下，免得我們最後要一起加班/趕工抱佛腳哈哈！`
            },
            {
              type: "清晰邊界型",
              tag: "明確界線・保護自己",
              text: `嗨，理解大家手頭上事情都多。不過考量到後續里程碑的交付品質，如果這部分未能在 [約定時間] 前對齊，我會先以目前已確認的版本往下推進，謝謝配合！`
            },
            {
              type: "體面商務型",
              tag: "專業客觀・無懈可擊",
              text: `您好，為確保雙方進度同步並維護成果品質，煩請協助於今日確認最新進展。若有需協調之處，隨時歡迎提出討論，感謝您的協助！`
            }
          ],
          insight: "面對難以溝通的對象，最忌諱以憤怒回應。將情緒剝離，用客觀的時間點（何時交付）、流程限制（為了確保品質）來推動對方，既站得住腳，也不會給人情緒化的印象。"
        }
      };

      roastTag.textContent = customResult.roast.tagTitle;
      roastStars.textContent = customResult.roast.stars;
      roastContent.textContent = customResult.roast.comment;
      comfortContent.textContent = customResult.roast.comfortTip;

      currentTactics = customResult.diplomacy.tactics;
      insightContent.textContent = customResult.diplomacy.insight;
      renderTacticsTabs();

      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    showToast("✨ 雙面翻譯完成！");
  }

  // 即時呼叫 LLM API (支援 OpenAI / Gemini / DeepSeek 格式)
  async function callLiveLLM(rantText, apiKey) {
    const endpoint = localStorage.getItem("vent_api_endpoint") || "https://api.openai.com/v1";
    const model = localStorage.getItem("vent_api_model") || "gpt-4o-mini";

    const systemPrompt = `你是一個結合了「毒舌心理諮商師」與「頂級外交官」的雙面 AI 助理。
使用者的輸入是他最真實、暴躁、未經修飾的真心話。
你的任務是同時產生兩部分的結構化 JSON 輸出：
1. roast：極具幽默感、一針見血、諷刺但能同理使用者的吐槽（包含 tagTitle, stars, comment, comfortTip）。
2. diplomacy：三種不同程度但絕對高情商、體面且能達到目的的溝通話術（tactics: 陣列，包含 type, tag, text；以及 insight 高情商心法解析）。

請嚴格返回 JSON 格式：
{
  "roast": {
    "tagTitle": "四字至六字趣味標籤",
    "stars": "★★★★☆",
    "comment": "100字左右尖銳幽默又好笑的吐槽，讓使用者破涕為笑",
    "comfortTip": "一句實用安慰"
  },
  "diplomacy": {
    "tactics": [
      { "type": "幽默調侃型", "tag": "情境說明", "text": "實際可發送的句子" },
      { "type": "溫和直白型", "tag": "情境說明", "text": "實際可發送的句子" },
      { "type": "堅定設限型", "tag": "情境說明", "text": "實際可發送的句子" }
    ],
    "insight": "為什麼這樣溝通有效的心理學與高情商眉角說明"
  }
}`;

    const res = await fetch(`${endpoint.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: rantText }
        ],
        temperature: 0.8
      })
    });

    if (!res.ok) {
      throw new Error(`API 回傳錯誤 HTTP ${res.status}`);
    }

    const data = await res.json();
    const content = JSON.parse(data.choices[0].message.content);

    // 填入即時生成結果
    roastTag.textContent = content.roast.tagTitle;
    roastStars.textContent = content.roast.stars;
    roastContent.textContent = content.roast.comment;
    comfortContent.textContent = content.roast.comfortTip;

    currentTactics = content.diplomacy.tactics;
    insightContent.textContent = content.diplomacy.insight;
    renderTacticsTabs();

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("🚀 即時 AI 雙引擎生成成功！");
  }

  // 類別點擊事件
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchCategory(tab.dataset.cat);
    });
  });

  // Modal 彈窗控制
  if (btnSettings && settingsModal) {
    btnSettings.addEventListener("click", () => {
      settingsModal.classList.add("active");
    });

    btnCloseModal.addEventListener("click", () => {
      settingsModal.classList.remove("active");
    });

    settingsModal.addEventListener("click", (e) => {
      if (e.target === settingsModal) settingsModal.classList.remove("active");
    });

    btnSaveSettings.addEventListener("click", () => {
      localStorage.setItem("vent_api_key", apiKeyInput.value.trim());
      localStorage.setItem("vent_api_endpoint", apiEndpointInput.value.trim());
      localStorage.setItem("vent_api_model", apiModelInput.value.trim());
      settingsModal.classList.remove("active");
      showToast("💾 設定已儲存！");
    });
  }

  // 預設初始化
  switchCategory("friends");
});
