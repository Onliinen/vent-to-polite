/**
 * VentToPolite - 核心互動、雙語切換 (i18n) 與雙引擎邏輯
 */

const UI_STRINGS = {
  "zh-TW": {
    langBtn: "English",
    brandBadge: "AI 雙引擎",
    navSettingsLabel: "API 設定",
    heroPill: "<span>🚀 2026 AI 創新專案</span><span>•</span><span>一個能分享給全世界的溝通神器</span>",
    heroTitleInner: "內心",
    heroTitleFire: "暴躁發洩",
    heroTitleCross: " ✕ ",
    heroTitleOuter: "外在",
    heroTitleDiplomat: "體面求生",
    heroSubtitle: "生活中充滿了說不出口的拒絕、難以啟齒的界線與莫名其妙的人際摩擦？<br>倒出你最真實的生氣大實話，AI 幫你<b>毒舌吐槽宣洩情緒</b>，同時產出<b>高情商、不撕破臉的完美應對話術</b>！",
    presetLabel: "💡 常見人際情境參考：",
    inputAreaLabel: "傾倒你的原始真心話（生活中遇到的任何難題，毫無保留、自由開火）",
    rageLabel: "抓狂指數:",
    rantPlaceholder: "輸入任何讓你為難、憤怒、委屈，或是不知道該怎麼得體開口的生活／職場／社交難題...",
    btnGenerateText: "啟動雙引擎翻譯",
    btnGeneratingText: "雙引擎分析中...",
    placeholderText: "點選上方的經典案例，或直接在框框輸入真心話，點擊「啟動雙引擎翻譯」！",
    roastTitleText: "毒舌解憂閣",
    comfortTitleText: "💡 心靈降溫小秘方：",
    diplomatTitleText: "高情商外交官",
    diplomatBadgeText: "可直接傳送",
    btnCopyText: "一鍵複製訊息",
    insightHeaderText: "高情商心理學剖析：",
    modalTitleText: "⚙️ API 串接設定 (可選)",
    modalApiKeyLabel: "API Key (OpenAI / DeepSeek / Gemini)",
    modalHelpText: "未填寫時，系統將自動啟動內建的「智慧案例智囊庫」，仍可離線流暢體驗！",
    modalEndpointLabel: "API Endpoint",
    modalModelLabel: "Model Name",
    modalSaveText: "儲存設定",
    footerMainText: "VentToPolite 專案｜人機協同創新（Human-AI Collaboration Showcase）",
    footerSubText: "依據開源原則構建 • 專題展示請遵守社群禮儀",
    toastCopied: "✅ 已複製高情商話術到剪貼簿！",
    toastEmpty: "⚠️ 請先輸入你的生氣真心話！",
    toastDone: "✨ 雙面翻譯完成！",
    toastLiveDone: "🚀 即時 AI 雙引擎生成成功！",
    toastSaved: "💾 設定已儲存！"
  },
  "en": {
    langBtn: "繁體中文",
    brandBadge: "Dual-Engine AI",
    navSettingsLabel: "API Settings",
    heroPill: "<span>🚀 2026 AI Innovation</span><span>•</span><span>A Shareable Diplomatic Tool</span>",
    heroTitleInner: "Raw ",
    heroTitleFire: "Venting",
    heroTitleCross: " ✕ ",
    heroTitleOuter: "Civil ",
    heroTitleDiplomat: "Diplomacy",
    heroSubtitle: "Struggling with awkward boundaries, unspoken friction, or frustrating demands in daily life?<br>Pour out your raw, unfiltered thoughts—AI gives you a <b>cathartic roast</b> to laugh it off, and <b>high-EQ drafts</b> to resolve conflicts without burning bridges!",
    presetLabel: "💡 Common Scenarios for Reference:",
    inputAreaLabel: "Unfiltered Vent (Any real-life conflict or dilemma, no filter):",
    rageLabel: "Rage Level:",
    rantPlaceholder: "Enter any frustrating interaction, awkward boundary, unfair demand, or interpersonal problem you're dealing with...",
    btnGenerateText: "Launch Dual-Engine Translation",
    btnGeneratingText: "Analyzing with Dual Engines...",
    placeholderText: "Click a scenario above or enter your thoughts, then click 'Launch Dual-Engine Translation'!",
    roastTitleText: "Roast & Catharsis",
    comfortTitleText: "💡 De-escalation Tip:",
    diplomatTitleText: "Diplomatic Response",
    diplomatBadgeText: "Ready to Send",
    btnCopyText: "Copy Message",
    insightHeaderText: "High-EQ Psychological Insight:",
    modalTitleText: "⚙️ API Settings (Optional)",
    modalApiKeyLabel: "API Key (OpenAI / DeepSeek / Gemini)",
    modalHelpText: "When empty, the built-in intelligent knowledge base is used for seamless offline demo!",
    modalEndpointLabel: "API Endpoint",
    modalModelLabel: "Model Name",
    modalSaveText: "Save Settings",
    footerMainText: "VentToPolite Project | Human-AI Collaboration Showcase",
    footerSubText: "Built with Open Source Principles • Designed for Civil Communication",
    toastCopied: "✅ Copied message to clipboard!",
    toastEmpty: "⚠️ Please enter your thoughts first!",
    toastDone: "✨ Dual translation completed!",
    toastLiveDone: "🚀 Live AI generation succeeded!",
    toastSaved: "💾 Settings saved!"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 當前語言與狀態
  let currentLang = localStorage.getItem("vent_lang") || "zh-TW";
  let currentCategory = "friends";
  let currentTactics = [];
  let currentTacticIndex = 0;
  let activePresetId = null;

  // DOM 元素
  const btnLangToggle = document.getElementById("btnLangToggle");
  const langLabel = document.getElementById("langLabel");
  const categoryTabs = document.querySelectorAll(".cat-tab");
  const presetChipsContainer = document.getElementById("presetChips");
  const rantInput = document.getElementById("rantInput");
  const charCount = document.getElementById("charCount");
  const rageBar = document.getElementById("rageBar");
  const rageScore = document.getElementById("rageScore");
  const btnGenerate = document.getElementById("btnGenerate");
  const btnGenerateText = document.getElementById("btnGenerateText");

  // 產出區域
  const resultsContainer = document.getElementById("resultsContainer");
  const placeholderState = document.getElementById("placeholderState");

  // 毒舌卡片
  const roastTag = document.getElementById("roastTag");
  const roastStars = document.getElementById("roastStars");
  const roastContent = document.getElementById("roastContent");
  const comfortContent = document.getElementById("comfortContent");

  // 外交官卡片
  const tacticsTabs = document.getElementById("tacticsTabs");
  const messageText = document.getElementById("messageText");
  const btnCopy = document.getElementById("btnCopy");
  const insightContent = document.getElementById("insightContent");

  // 彈窗
  const btnSettings = document.getElementById("btnSettings");
  const settingsModal = document.getElementById("settingsModal");
  const btnCloseModal = document.getElementById("btnCloseModal");
  const btnSaveSettings = document.getElementById("btnSaveSettings");
  const apiKeyInput = document.getElementById("apiKeyInput");
  const apiEndpointInput = document.getElementById("apiEndpointInput");
  const apiModelInput = document.getElementById("apiModelInput");
  const toast = document.getElementById("toast");

  // 載入 API 設定
  if (apiKeyInput) apiKeyInput.value = localStorage.getItem("vent_api_key") || "";
  if (apiEndpointInput) apiEndpointInput.value = localStorage.getItem("vent_api_endpoint") || "https://api.openai.com/v1";
  if (apiModelInput) apiModelInput.value = localStorage.getItem("vent_api_model") || "gpt-4o-mini";

  // 更新所有 UI 字串
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("vent_lang", lang);
    const strings = UI_STRINGS[lang];

    // 更新各項文字
    langLabel.textContent = strings.langBtn;
    document.getElementById("brandBadge").textContent = strings.brandBadge;
    document.getElementById("navSettingsLabel").textContent = strings.navSettingsLabel;
    document.getElementById("heroPill").innerHTML = strings.heroPill;
    document.getElementById("heroTitleInner").textContent = strings.heroTitleInner;
    document.getElementById("heroTitleFire").textContent = strings.heroTitleFire;
    document.getElementById("heroTitleCross").textContent = strings.heroTitleCross;
    document.getElementById("heroTitleOuter").textContent = strings.heroTitleOuter;
    document.getElementById("heroTitleDiplomat").textContent = strings.heroTitleDiplomat;
    document.getElementById("heroSubtitle").innerHTML = strings.heroSubtitle;
    document.getElementById("presetLabel").textContent = strings.presetLabel;
    document.getElementById("inputAreaLabel").textContent = strings.inputAreaLabel;
    document.getElementById("rageLabel").textContent = strings.rageLabel;
    rantInput.placeholder = strings.rantPlaceholder;
    btnGenerateText.textContent = strings.btnGenerateText;
    document.getElementById("placeholderText").textContent = strings.placeholderText;
    document.getElementById("roastTitleText").textContent = strings.roastTitleText;
    document.getElementById("comfortTitleText").textContent = strings.comfortTitleText;
    document.getElementById("diplomatTitleText").textContent = strings.diplomatTitleText;
    document.getElementById("diplomatBadgeText").textContent = strings.diplomatBadgeText;
    document.getElementById("btnCopyText").textContent = strings.btnCopyText;
    document.getElementById("insightHeaderText").textContent = strings.insightHeaderText;
    document.getElementById("modalTitleText").textContent = strings.modalTitleText;
    document.getElementById("modalApiKeyLabel").textContent = strings.modalApiKeyLabel;
    document.getElementById("modalHelpText").textContent = strings.modalHelpText;
    document.getElementById("modalEndpointLabel").textContent = strings.modalEndpointLabel;
    document.getElementById("modalModelLabel").textContent = strings.modalModelLabel;
    document.getElementById("modalSaveText").textContent = strings.modalSaveText;
    document.getElementById("footerMainText").textContent = strings.footerMainText;
    document.getElementById("footerSubText").textContent = strings.footerSubText;

    // 更新分類標籤名稱
    const langCategories = PRESET_CATEGORIES[lang];
    categoryTabs.forEach(tab => {
      const catKey = tab.dataset.cat;
      if (langCategories[catKey]) {
        const textSpan = tab.querySelector(".cat-text");
        if (textSpan) textSpan.textContent = langCategories[catKey].name;
      }
    });

    renderPresetChips();

    // 如果目前有已選中的 preset，自動刷新該 preset 的雙語內容
    if (activePresetId) {
      const currentCatData = PRESET_CATEGORIES[currentLang][currentCategory];
      if (currentCatData && currentCatData.items) {
        const item = currentCatData.items.find(i => i.id === activePresetId);
        if (item) {
          rantInput.value = item.rant;
          updateRageMeter(item.rant, item.rageLevel);
          applyPresetResult(item);
        }
      }
    }
  }

  // 渲染情境藥丸 (Presets)
  function renderPresetChips() {
    presetChipsContainer.innerHTML = "";
    const catData = PRESET_CATEGORIES[currentLang][currentCategory];
    if (!catData || !catData.items) return;

    catData.items.forEach(item => {
      const chip = document.createElement("button");
      chip.className = `preset-chip ${activePresetId === item.id ? "active" : ""}`;
      chip.textContent = item.title;
      chip.addEventListener("click", () => {
        activePresetId = item.id;
        rantInput.value = item.rant;
        updateRageMeter(item.rant, item.rageLevel);
        applyPresetResult(item);
        renderPresetChips();
      });
      presetChipsContainer.appendChild(chip);
    });
  }

  // 分類切換
  function switchCategory(catId) {
    currentCategory = catId;
    activePresetId = null;
    categoryTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.cat === catId);
    });
    renderPresetChips();
  }

  // 即時怒氣計計算 (Rage Meter)
  function calculateRageLevel(text) {
    if (!text.trim()) return 0;
    let score = 42;

    const angryWords = [
      "氣死", "煩死", "遲到", "甩鍋", "憑什麼", "垃圾", "有病", "搞屁", "裝死", 
      "滾", "到底", "有事嗎", "藉口", "誇張", "不要臉", "擺爛", "火大", "受夠",
      "靠", "乾", "北七", "傻眼", "扯",
      "furious", "pissed", "late", "slacking", "hate", "idiot", "lazy", "ridiculous", 
      "annoying", "waste", "garbage", "sick of", "enough", "freeloader", "ghosted"
    ];

    angryWords.forEach(w => {
      if (text.toLowerCase().includes(w)) score += 12;
    });

    const exclamations = (text.match(/(!|！|\?|？)/g) || []).length;
    score += Math.min(exclamations * 5, 25);

    if (text.length > 50) score += 10;
    if (text.length > 100) score += 10;

    return Math.min(Math.max(score, 15), 99);
  }

  function updateRageMeter(text, forcedScore = null) {
    charCount.textContent = currentLang === "en" ? `${text.length} chars` : `${text.length} 字`;
    const score = forcedScore !== null ? forcedScore : calculateRageLevel(text);
    rageBar.style.width = `${score}%`;
    rageScore.textContent = `${score}%`;

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
    activePresetId = null;
    updateRageMeter(e.target.value);
  });

  // 套用結果
  function applyPresetResult(presetItem) {
    roastTag.textContent = presetItem.roast.tagTitle;
    roastStars.textContent = presetItem.roast.stars;
    roastContent.textContent = presetItem.roast.comment;
    comfortContent.textContent = presetItem.roast.comfortTip;

    currentTactics = presetItem.diplomacy.tactics;
    insightContent.textContent = presetItem.diplomacy.insight;
    currentTacticIndex = 0;
    renderTacticsTabs();

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // 渲染策略切換 Tab
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

  // 複製按鈕
  btnCopy.addEventListener("click", () => {
    const textToCopy = messageText.textContent;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(UI_STRINGS[currentLang].toastCopied);
    }).catch(() => {
      showToast("Copy failed, please copy manually");
    });
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // 生成按鈕事件
  btnGenerate.addEventListener("click", async () => {
    const text = rantInput.value.trim();
    if (!text) {
      showToast(UI_STRINGS[currentLang].toastEmpty);
      rantInput.focus();
      return;
    }

    const apiKey = localStorage.getItem("vent_api_key");

    btnGenerate.disabled = true;
    btnGenerateText.textContent = UI_STRINGS[currentLang].btnGeneratingText;

    try {
      if (apiKey) {
        await callLiveLLM(text, apiKey);
      } else {
        await generateOfflineIntelligent(text);
      }
    } catch (err) {
      console.warn("API Call fallback:", err);
      await generateOfflineIntelligent(text);
    } finally {
      btnGenerate.disabled = false;
      btnGenerateText.textContent = UI_STRINGS[currentLang].btnGenerateText;
    }
  });

  // 智慧離線引擎
  async function generateOfflineIntelligent(text) {
    await new Promise(r => setTimeout(r, 650));

    const currentPresets = [
      ...PRESET_CATEGORIES[currentLang].friends.items,
      ...PRESET_CATEGORIES[currentLang].workplace.items,
      ...PRESET_CATEGORIES[currentLang].campus.items,
      ...PRESET_CATEGORIES[currentLang].living.items,
    ];

    let matchedItem = null;
    const lower = text.toLowerCase();

    for (const item of currentPresets) {
      if ((lower.includes("遲到") || lower.includes("late")) && item.id === "friend_late") { matchedItem = item; break; }
      if ((lower.includes("隨便") || lower.includes("吃什麼") || lower.includes("anything") || lower.includes("eat")) && item.id === "friend_any") { matchedItem = item; break; }
      if ((lower.includes("下班") || lower.includes("急件") || lower.includes("urgent") || lower.includes("weekend")) && item.id === "work_urgent") { matchedItem = item; break; }
      if ((lower.includes("甩鍋") || lower.includes("責任") || lower.includes("bus") || lower.includes("blame")) && item.id === "work_blame") { matchedItem = item; break; }
      if ((lower.includes("組員") || lower.includes("報告") || lower.includes("teammate") || lower.includes("slacker")) && item.id === "campus_freerider") { matchedItem = item; break; }
      if ((lower.includes("教授") || lower.includes("加簽") || lower.includes("professor") || lower.includes("prereq")) && item.id === "campus_late_add") { matchedItem = item; break; }
      if ((lower.includes("碗") || lower.includes("水槽") || lower.includes("dishes") || lower.includes("sink")) && item.id === "living_dishes") { matchedItem = item; break; }
    }

    if (matchedItem) {
      activePresetId = matchedItem.id;
      applyPresetResult(matchedItem);
    } else {
      activePresetId = null;
      const isEn = currentLang === "en";
      const customResult = {
        roast: {
          tagTitle: isEn ? "High-Absurdity Certified" : "高能荒謬事件認證",
          stars: "★★★★☆",
          comment: isEn 
            ? "What this person did violates fundamental common sense. Your blood pressure spike is a completely valid physiological survival reflex! Someone else's carelessness should never become your punishment."
            : "對方這個舉動已經超出了常人的理解範疇。你的血壓升高完全是合理的生理防衛機制！這種情況擺明了是把問題丟給有責任感的人承擔，別人的隨意不該成為懲罰你的藉口。",
          comfortTip: isEn
            ? "Take a deep breath for 3 seconds. The problem is with them, not you. Let's pass the hot potato right back with maximum elegance."
            : "先深呼吸三秒鐘。問題在他不在你，我們用最體面的方式把皮球踢回去。"
        },
        diplomacy: {
          tactics: [
            {
              type: isEn ? "Playful Tease" : "幽默調侃型",
              tag: isEn ? "Soft Reminder" : "軟性提醒・保留面子",
              text: isEn
                ? "Hey! Quick check on what we talked about earlier—looks like things are a bit paused on your end. Could you push it forward today so we don't end up pulling an all-nighter together haha!"
                : "哈囉！關於剛才提到的事情，我這邊看進度稍微卡住了～再麻煩你今天抽空幫忙推進一下，免得我們最後要一起加班/趕工抱佛腳哈哈！"
            },
            {
              type: isEn ? "Clear Boundary" : "清晰邊界型",
              tag: isEn ? "Firm & Polite" : "明確界線・保護自己",
              text: isEn
                ? "Hey, totally understand everyone's plates are full. That said, to ensure the quality of upcoming milestones, if this isn't aligned by [Agreed Time], I will move forward with our currently confirmed scope. Thanks for understanding!"
                : "嗨，理解大家手頭上事情都多。不過考量到後續里程碑的交付品質，如果這部分未能在 [約定時間] 前對齊，我會先以目前已確認的版本往下推進，謝謝配合！"
            },
            {
              type: isEn ? "Executive Diplomat" : "體面商務型",
              tag: isEn ? "Objective & Bulletproof" : "專業客觀・無懈可擊",
              text: isEn
                ? "Hello, to ensure team alignment and protect deliverable standards, kindly confirm the latest progress by today. If any coordination is required, please feel free to raise it—appreciate your support!"
                : "您好，為確保雙方進度同步並維護成果品質，煩請協助於今日確認最新進展。若有需協調之處，隨時歡迎提出討論，感謝您的協助！"
            }
          ],
          insight: isEn
            ? "When dealing with difficult communicators, never fight back with anger. Strip away emotional accusations and anchor your response to objective timelines and quality standards. This leaves you unassailable while preventing you from appearing reactive."
            : "面對難以溝通的對象，最忌諱以憤怒回應。將情緒剝離，用客觀的時間點（何時交付）、流程限制（為了確保品質）來推動對方，既站得住腳，也不會給人情緒化的印象。"
        }
      };

      roastTag.textContent = customResult.roast.tagTitle;
      roastStars.textContent = customResult.roast.stars;
      roastContent.textContent = customResult.roast.comment;
      comfortContent.textContent = customResult.roast.comfortTip;

      currentTactics = customResult.diplomacy.tactics;
      insightContent.textContent = customResult.diplomacy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();

      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    showToast(UI_STRINGS[currentLang].toastDone);
  }

  // 即時呼叫 LLM
  async function callLiveLLM(rantText, apiKey) {
    const endpoint = localStorage.getItem("vent_api_endpoint") || "https://api.openai.com/v1";
    const model = localStorage.getItem("vent_api_model") || "gpt-4o-mini";
    const isEn = currentLang === "en";

    const systemPrompt = isEn 
      ? `You are a dual AI persona: a cynical witty roaster (Catharsis Engine) and a senior diplomat (Diplomacy Engine).
The user provides their raw, unfiltered, angry thoughts.
You must return a valid JSON object with:
1. roast: { tagTitle (3-5 words), stars ("★★★★☆"), comment (witty, hilarious, sharp roast of the other party's absurdity), comfortTip (1 practical de-escalation tip) }.
2. diplomacy: { tactics: [ { type: "Playful Tease", tag: "string", text: "actual ready-to-send message" }, { type: "Gentle Boundary", tag: "string", text: "..." }, { type: "Executive Firm", tag: "string", text: "..." } ], insight: "psychological explanation of why this communication strategy works" }.
Language: ENGLISH.`
      : `你是一個結合了「毒舌心理諮商師」與「頂級外交官」的雙面 AI 助理。
使用者的輸入是他最真實、暴躁、未經修飾的真心話。
你的任務是同時產生兩部分的結構化 JSON 輸出：
1. roast：極具幽默感、一針見血、諷刺但能同理使用者的吐槽（包含 tagTitle, stars, comment, comfortTip）。
2. diplomacy：三種不同程度但絕對高情商、體面且能達到目的的溝通話術（tactics: 陣列，包含 type, tag, text；以及 insight 高情商心法解析）。
語言：繁體中文（台灣口吻）。`;

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
      throw new Error(`API HTTP ${res.status}`);
    }

    const data = await res.json();
    const content = JSON.parse(data.choices[0].message.content);

    roastTag.textContent = content.roast.tagTitle;
    roastStars.textContent = content.roast.stars;
    roastContent.textContent = content.roast.comment;
    comfortContent.textContent = content.roast.comfortTip;

    currentTactics = content.diplomacy.tactics;
    insightContent.textContent = content.diplomacy.insight;
    currentTacticIndex = 0;
    renderTacticsTabs();

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast(UI_STRINGS[currentLang].toastLiveDone);
  }

  // 語言切換按鈕事件
  btnLangToggle.addEventListener("click", () => {
    const newLang = currentLang === "zh-TW" ? "en" : "zh-TW";
    applyLanguage(newLang);
    showToast(newLang === "en" ? "🌐 Switched to English" : "🌐 已切換為繁體中文");
  });

  // 分類點擊
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
      showToast(UI_STRINGS[currentLang].toastSaved);
    });
  }

  // 初始化啟動語言
  applyLanguage(currentLang);
  switchCategory("friends");
});
