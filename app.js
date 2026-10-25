/**
 * VentToPolite - 核心互動、雙語切換 (i18n) 與精準語意雙引擎邏輯
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
    lensTitleText: "高階思維模型深度推演",
    lensSecondOrderTitle: "二階思考 (Second-Order Thinking)",
    lensPreMortemTitle: "事前驗屍風險預防 (Pre-Mortem)",
    lensFirstPrinciplesTitle: "第一性原理 (First Principles)",
    lensFirstOrderPrefix: "眼前反應：",
    lensSecondOrderPrefix: "長遠效應：",
    lensRiskPrefix: "潛在翻車點：",
    lensPreventionPrefix: "避坑策略：",
    lensCoreTruthPrefix: "核心本質：",
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
    lensTitleText: "Cognitive Thinking Lens (Deep Strategy)",
    lensSecondOrderTitle: "Second-Order Thinking",
    lensPreMortemTitle: "Pre-Mortem Risk Check",
    lensFirstPrinciplesTitle: "First Principles",
    lensFirstOrderPrefix: "Immediate reaction: ",
    lensSecondOrderPrefix: "Ripple effect: ",
    lensRiskPrefix: "Potential pitfall: ",
    lensPreventionPrefix: "Safeguard: ",
    lensCoreTruthPrefix: "Core Truth: ",
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

  // 思維模型 (Thinking Lens)
  const thinkingLensBox = document.getElementById("thinkingLensBox");
  const btnToggleThinkingLens = document.getElementById("btnToggleThinkingLens");
  const lensTitleText = document.getElementById("lensTitleText");
  const lensSecondOrderTitle = document.getElementById("lensSecondOrderTitle");
  const lensPreMortemTitle = document.getElementById("lensPreMortemTitle");
  const lensFirstPrinciplesTitle = document.getElementById("lensFirstPrinciplesTitle");
  const lensFirstOrderPrefix = document.getElementById("lensFirstOrderPrefix");
  const lensSecondOrderPrefix = document.getElementById("lensSecondOrderPrefix");
  const lensRiskPrefix = document.getElementById("lensRiskPrefix");
  const lensPreventionPrefix = document.getElementById("lensPreventionPrefix");
  const lensCoreTruthPrefix = document.getElementById("lensCoreTruthPrefix");

  const lensSecondOrderImmediate = document.getElementById("lensSecondOrderImmediate");
  const lensSecondOrderRipple = document.getElementById("lensSecondOrderRipple");
  const lensPreMortemRisk = document.getElementById("lensPreMortemRisk");
  const lensPreMortemPrevention = document.getElementById("lensPreMortemPrevention");
  const lensFirstPrinciplesCore = document.getElementById("lensFirstPrinciplesCore");

  if (btnToggleThinkingLens && thinkingLensBox) {
    btnToggleThinkingLens.addEventListener("click", () => {
      thinkingLensBox.classList.toggle("collapsed");
    });
  }

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

  // 切換語言
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("vent_lang", lang);
    const strings = UI_STRINGS[lang];

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

    // 思維模型標題切換
    if (lensTitleText) lensTitleText.textContent = strings.lensTitleText;
    if (lensSecondOrderTitle) lensSecondOrderTitle.textContent = strings.lensSecondOrderTitle;
    if (lensPreMortemTitle) lensPreMortemTitle.textContent = strings.lensPreMortemTitle;
    if (lensFirstPrinciplesTitle) lensFirstPrinciplesTitle.textContent = strings.lensFirstPrinciplesTitle;
    if (lensFirstOrderPrefix) lensFirstOrderPrefix.textContent = strings.lensFirstOrderPrefix;
    if (lensSecondOrderPrefix) lensSecondOrderPrefix.textContent = strings.lensSecondOrderPrefix;
    if (lensRiskPrefix) lensRiskPrefix.textContent = strings.lensRiskPrefix;
    if (lensPreventionPrefix) lensPreventionPrefix.textContent = strings.lensPreventionPrefix;
    if (lensCoreTruthPrefix) lensCoreTruthPrefix.textContent = strings.lensCoreTruthPrefix;

    document.getElementById("modalTitleText").textContent = strings.modalTitleText;
    document.getElementById("modalApiKeyLabel").textContent = strings.modalApiKeyLabel;
    document.getElementById("modalHelpText").textContent = strings.modalHelpText;
    document.getElementById("modalEndpointLabel").textContent = strings.modalEndpointLabel;
    document.getElementById("modalModelLabel").textContent = strings.modalModelLabel;
    document.getElementById("modalSaveText").textContent = strings.modalSaveText;
    document.getElementById("footerMainText").textContent = strings.footerMainText;
    document.getElementById("footerSubText").textContent = strings.footerSubText;

    const langCategories = PRESET_CATEGORIES[lang];
    categoryTabs.forEach(tab => {
      const catKey = tab.dataset.cat;
      if (langCategories[catKey]) {
        const textSpan = tab.querySelector(".cat-text");
        if (textSpan) textSpan.textContent = langCategories[catKey].name;
      }
    });

    renderPresetChips();

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

  function switchCategory(catId) {
    currentCategory = catId;
    activePresetId = null;
    categoryTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.cat === catId);
    });
    renderPresetChips();
  }

  function calculateRageLevel(text) {
    if (!text.trim()) return 0;
    let score = 42;

    const angryWords = [
      "氣死", "煩死", "遲到", "甩鍋", "憑什麼", "垃圾", "有病", "搞屁", "裝死", 
      "滾", "到底", "有事嗎", "藉口", "誇張", "不要臉", "擺爛", "火大", "受夠",
      "靠", "乾", "北七", "傻眼", "扯", "髒話", "粗話",
      "furious", "pissed", "late", "slacking", "hate", "idiot", "lazy", "ridiculous", 
      "annoying", "waste", "garbage", "sick of", "enough", "freeloader", "ghosted", "bad words", "swear"
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

  function renderThinkingLens(lensData) {
    if (!thinkingLensBox) return;
    if (!lensData) {
      thinkingLensBox.style.display = "none";
      return;
    }
    thinkingLensBox.style.display = "block";
    if (lensData.secondOrder) {
      if (lensSecondOrderImmediate) lensSecondOrderImmediate.textContent = lensData.secondOrder.firstOrder || "";
      if (lensSecondOrderRipple) lensSecondOrderRipple.textContent = lensData.secondOrder.secondOrder || "";
    }
    if (lensData.preMortem) {
      if (lensPreMortemRisk) lensPreMortemRisk.textContent = lensData.preMortem.risk || "";
      if (lensPreMortemPrevention) lensPreMortemPrevention.textContent = lensData.preMortem.prevention || "";
    }
    if (lensData.firstPrinciples) {
      if (lensFirstPrinciplesCore) lensFirstPrinciplesCore.textContent = lensData.firstPrinciples.coreTruth || "";
    }
  }

  function applyPresetResult(presetItem) {
    roastTag.textContent = presetItem.roast.tagTitle;
    roastStars.textContent = presetItem.roast.stars;
    roastContent.textContent = presetItem.roast.comment;
    comfortContent.textContent = presetItem.roast.comfortTip;

    currentTactics = presetItem.diplomacy.tactics;
    insightContent.textContent = presetItem.diplomacy.insight;
    currentTacticIndex = 0;
    renderTacticsTabs();

    if (presetItem.thinkingLens) {
      renderThinkingLens(presetItem.thinkingLens);
    } else {
      renderThinkingLens(null);
    }

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

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

  /**
   * 關鍵字比對（防止子字串誤判）：
   * 英文關鍵字用 \b 單字邊界比對，避免 "translate" 誤判 late、"already" 誤判 read、
   * "busy" 誤判 bus、"great" 誤判 eat 等子字串碰撞；
   * 中文關鍵字（任何非 ASCII 字元）沒有空格邊界，維持子字串比對。
   */
  const matchKeyword = (lowerText, keyword) => {
    if (/[^\u0000-\u007F]/.test(keyword)) return lowerText.includes(keyword);
    return new RegExp("\\b" + keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b").test(lowerText);
  };

  /**
   * 智慧語意離線引擎：依據使用者實際輸入的問題類型，進行情境分類與客製化應對
   * 徹底杜絕非工作情境卻給出工作 Milestone 答案的 bug！
   */
  async function generateOfflineIntelligent(text) {
    await new Promise(r => setTimeout(r, 600));

    const lower = text.toLowerCase();
    const isEn = currentLang === "en";

    // 1. 語言與口頭習慣摩擦 (Verbal Habits, Swearing, Bad words, Rude remarks)
    const isVerbalConflict = [
      "bad words", "swear", "swearing", "curse", "cursing", "vulgar", "rude", 
      "insult", "foul", "offensive words", "saying bad", "said bad", "harsh words",
      "髒話", "粗話", "粗口", "難聽", "沒禮貌", "說話難聽", "嘴臭", "罵人", "口出惡言"
    ].some(k => matchKeyword(lower, k));

    if (isVerbalConflict) {
      const match = PRESET_CATEGORIES[currentLang].friends.items.find(i => i.id === "friend_bad_words");
      if (match) {
        activePresetId = match.id;
        applyPresetResult(match);
        showToast(UI_STRINGS[currentLang].toastDone);
        return;
      }
    }

    // 2. 借錢與金錢糾紛 (Money, Borrowing, Splitting bills, Unpaid debts)
    const isMoneyConflict = [
      "money", "borrow", "borrowed", "borrowing", "pay back", "owe", "owes", "owed",
      "split", "bill", "cheap", "lend", "lent", "debt",
      "借錢", "還錢", "分帳", "欠錢", "催討", "不給錢", "討錢"
    ].some(k => matchKeyword(lower, k));

    if (isMoneyConflict) {
      activePresetId = null;
      const moneyResult = {
        roast: {
          tagTitle: isEn ? "Selective Amnesia Debt Collector" : "暫時性失憶理財大師",
          stars: "★★★★☆",
          comment: isEn 
            ? "When borrowing, their memory was razor-sharp and instant. When it's time to pay back, they develop sudden, clinical-grade neurological amnesia. They treat your generosity like a zero-interest grant from a philanthropic foundation."
            : "借錢的時候秒回又誠懇，到了要還錢的時候直接觸發『選擇性暫時失憶症』。他把你的好心當成無息天使投資基金，裝傻的演技比奧斯卡影帝還要逼真。",
          comfortTip: isEn
            ? "Money lent without clear boundaries is tuition paid for human nature. Let's ask for it back with maximum composure."
            : "錢要得回來是你的本事，不用覺得自己不好意思。欠錢的人都沒在臉紅了，討錢的人更不用心虛！"
        },
        diplomacy: {
          tactics: [
            {
              type: isEn ? "Casual Sync" : "輕鬆對帳型",
              tag: isEn ? "Routine Framing・Zero Awkwardness" : "日常對帳・不傷面子",
              text: isEn
                ? "Hey! Just balancing my weekly expenses today—did that [amount / meal bill] from earlier go through on your end? Let me know so I can check it off my list haha!"
                : "哈囉！我剛好在整理這週的記帳明細～之前那個 [金額/餐費] 不知道你轉了沒？再麻煩你有空確認一下，我好把帳結清，謝啦！"
            },
            {
              type: isEn ? "Direct Boundary" : "溫和直白型",
              tag: isEn ? "Clear Timeline" : "清晰時間・表明需求",
              text: isEn
                ? "Hey! Gentle ping regarding the [amount] from earlier. I've got a couple of upcoming bills to clear, so whenever you have a minute today, could you shoot that over? Appreciate it!"
                : "嗨！溫馨提醒一下之前那筆 [金額]，因為我今天剛好要繳一些卡費/開銷，方便的話再麻煩你今天抽空轉給我喔，感謝！"
            },
            {
              type: isEn ? "Firm Standard" : "明確底線型",
              tag: isEn ? "Professional & Direct" : "公事公辦・堅定表明",
              text: isEn
                ? "Hey, I need to finalize my accounts today. Please send over your share of [the bill] by tonight so we're all squared up. Thanks!"
                : "嗨，我需要今天把之前代墊的帳目結清。麻煩你今天晚上前把你的那份款項轉過來喔，帳戶是 [帳號]，感謝配合！"
            }
          ],
          insight: isEn
            ? "Financial awkwardness grows exponentially with delay. Framing the reminder under 'routine weekly budgeting' or 'settling bills' depersonalizes the request, removing confrontation while making evasion impossible."
            : "討錢的尷尬會隨時間成倍增加。將催討包裝成『例行性對帳』或『今天要付其他帳單』，將焦點轉移到客觀事實上，對方就找不到藉口推託。"
        },
        thinkingLens: {
          secondOrder: {
            firstOrder: isEn ? "Immediate Reaction: They are reminded to transfer the amount with zero public shame." : "眼前反應：對方收到提醒，無尷尬地轉帳還款，化解拖欠。",
            secondOrder: isEn ? "Ripple Effect: Sets a crystal-clear financial boundary that you don't overlook debts, preventing future entitlement." : "長遠效應：建立『你絕非任人佔便宜』的界線，杜絕未來再次借錢裝傻。"
          },
          preMortem: {
            risk: isEn ? "Potential Pitfall: Accusing them of bad faith turns it into a character fight, delaying payment further." : "潛在翻車點：指責對方故意賴帳引發防禦反抗，反而讓還錢拖更久。",
            prevention: isEn ? "Safeguard: Frame it as neutral routine expense checking ('organizing my weekly budget')." : "避坑策略：包裝成客觀常態（整理每週記帳、今天剛好要繳卡費），不涉及人品批判。"
          },
          firstPrinciples: {
            coreTruth: isEn ? "Money lent must be repaid; your right to your property requires no hesitation or apology." : "借貸核心在於信任與契約；討回屬於自己的財產，從來不需要感到不好意思。"
          }
        }
      };

      roastTag.textContent = moneyResult.roast.tagTitle;
      roastStars.textContent = moneyResult.roast.stars;
      roastContent.textContent = moneyResult.roast.comment;
      comfortContent.textContent = moneyResult.roast.comfortTip;
      currentTactics = moneyResult.diplomacy.tactics;
      insightContent.textContent = moneyResult.diplomacy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();
      renderThinkingLens(moneyResult.thinkingLens);
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 3. 已讀不回與訊息冷暴力 (Ghosting, Left on read, Ignored messages)
    const isGhostingConflict = [
      "ghost", "ghosting", "read", "reply", "replied", "replying", "ignore", "ignored",
      "ignoring", "text back", "message", "messaged", "messaging", "messages",
      "已讀", "不回", "不理", "人間蒸發", "回很慢", "不看訊息"
    ].some(k => matchKeyword(lower, k));

    if (isGhostingConflict) {
      activePresetId = null;
      const ghostResult = {
        roast: {
          tagTitle: isEn ? "Digital Bunker Hermit" : "數位掩體隱身大師",
          stars: "★★★★☆",
          comment: isEn
            ? "They check social media 800 times an hour, but their fingers magically seize up whenever it comes to replying to your message. It's like your chat window contains a digital Bermuda Triangle."
            : "他看限時動態一小時刷八百次，但在回覆你訊息的那一秒，他的手指宛如遭遇了某種神祕的全身癱瘓。他不是沒看到，他只是在玩『看誰先忍不住再密一次』的心理戰。",
          comfortTip: isEn
            ? "Don't double-text with anxiety. Give a clear deadline or let their silence be your answer."
            : "不要焦慮地連環奪命連環傳。設下明確時限，或者乾脆讓他的沉默成為你的答案。"
        },
        diplomacy: {
          tactics: [
            {
              type: isEn ? "Playful Nudge" : "幽默破冰型",
              tag: isEn ? "Lighthearted Tease" : "化解尷尬・開玩笑喚醒",
              text: isEn
                ? "Sending a search-and-rescue team to your inbox! Did your phone fall into a black hole haha? Ping me when you resurface!"
                : "逼逼！正在向你的收件匣發送搜救小隊～你的手機是不是掉進百慕達三角洲了哈哈？浮出水面的時候記得敲我一下喔！"
            },
            {
              type: isEn ? "Gentle Check-in" : "溫和確認型",
              tag: isEn ? "No Pressure Inquiry" : "體貼詢問・給足台階",
              text: isEn
                ? "Hey, totally understand if you're swamped right now. Just wanted to make sure you saw my note regarding [Topic] when you get a breathing moment!"
                : "嗨，理解你最近手頭事情可能比較多～只是想確認一下你有沒有看到之前提的 [事情]，等你喘口氣有空再回我就好！"
            },
            {
              type: isEn ? "Deadline Decision" : "時限自保型",
              tag: isEn ? "Action-Driven Boundary" : "設下期限・拿回主動權",
              text: isEn
                ? "Hey! I need to lock down plans on this by [Time today]. If I don't hear from you by then, I'll go ahead with alternative arrangements. Hope all is well!"
                : "哈囉！因為這件事我需要在 [時間點] 前做決定。如果那時還沒收到你的回覆，我就先按照備用方案往下安排囉，祝你今天順利！"
            }
          ],
          insight: isEn
            ? "Calling out ghosting with anger makes people withdraw further. Providing a binary action with a soft deadline ('If I don't hear back by X, I'll proceed with Y') removes their delay advantage and forces a resolution."
            : "指責對方『為什麼已讀不回』只會讓他更想逃避。給出一個『如果不回我就直接往下做』的明確期限，能瞬間打破被動局面，拿回主控權。"
        },
        thinkingLens: {
          secondOrder: {
            firstOrder: isEn ? "Immediate Reaction: Breaks their silent delay cycle and forces them to prioritize a response." : "眼前反應：打破對方的被動拖延心理，迫使其做出明確回應。",
            secondOrder: isEn ? "Ripple Effect: Establishes that your time and attention cannot be kept on hold indefinitely." : "長遠效應：確立『你的時間不接受無上限懸空等待』的底線，篩選健康互動對象。"
          },
          preMortem: {
            risk: isEn ? "Potential Pitfall: Anxious spamming or passive-aggressive guilt trips make them pull away more." : "潛在翻車點：焦慮連環轟炸或陰陽怪氣，讓對方更加退縮逃避。",
            prevention: isEn ? "Safeguard: Set a firm deadline ('If I don't hear by 5pm, I will proceed with Option B') to regain initiative." : "避坑策略：給出清晰時限與自保備案（『若未回覆我將先做替代安排』），優雅拿回主導權。"
          },
          firstPrinciples: {
            coreTruth: isEn ? "Communication is a bidirectional loop; silence itself is an answer, and you always hold the agency to move forward." : "溝通是雙向確認；對方的沉默本身就是一種回答，而你永遠擁有繼續前進的選擇權。"
          }
        }
      };

      roastTag.textContent = ghostResult.roast.tagTitle;
      roastStars.textContent = ghostResult.roast.stars;
      roastContent.textContent = ghostResult.roast.comment;
      comfortContent.textContent = ghostResult.roast.comfortTip;
      currentTactics = ghostResult.diplomacy.tactics;
      insightContent.textContent = ghostResult.diplomacy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();
      renderThinkingLens(ghostResult.thinkingLens);
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 4. 比對其他預設案例 (遲到、隨便、急件、甩鍋、組員、加簽、洗碗)
    const currentPresets = [
      ...PRESET_CATEGORIES[currentLang].friends.items,
      ...PRESET_CATEGORIES[currentLang].workplace.items,
      ...PRESET_CATEGORIES[currentLang].campus.items,
      ...PRESET_CATEGORIES[currentLang].living.items,
      ...PRESET_CATEGORIES[currentLang].daily.items,
    ];

    let matchedItem = null;
    for (const item of currentPresets) {
      if ((matchKeyword(lower, "遲到") || matchKeyword(lower, "late") || matchKeyword(lower, "wait") || matchKeyword(lower, "waiting")) && item.id === "friend_late") { matchedItem = item; break; }
      if ((matchKeyword(lower, "隨便") || matchKeyword(lower, "吃什麼") || matchKeyword(lower, "anything") || matchKeyword(lower, "eat") || matchKeyword(lower, "eating")) && item.id === "friend_any") { matchedItem = item; break; }
      if ((matchKeyword(lower, "下班") || matchKeyword(lower, "急件") || matchKeyword(lower, "urgent") || matchKeyword(lower, "weekend")) && item.id === "work_urgent") { matchedItem = item; break; }
      if ((matchKeyword(lower, "甩鍋") || matchKeyword(lower, "責任") || matchKeyword(lower, "bus") || matchKeyword(lower, "blame")) && item.id === "work_blame") { matchedItem = item; break; }
      if ((matchKeyword(lower, "組員") || matchKeyword(lower, "報告") || matchKeyword(lower, "teammate") || matchKeyword(lower, "slacker")) && item.id === "campus_freerider") { matchedItem = item; break; }
      if ((matchKeyword(lower, "教授") || matchKeyword(lower, "加簽") || matchKeyword(lower, "professor") || matchKeyword(lower, "prereq")) && item.id === "campus_late_add") { matchedItem = item; break; }
      if ((matchKeyword(lower, "碗") || matchKeyword(lower, "水槽") || matchKeyword(lower, "dishes") || matchKeyword(lower, "sink")) && item.id === "living_dishes") { matchedItem = item; break; }
      if (["mom", "mommy", "mother", "dad", "daddy", "father", "parents", "family", "sister", "brother", "siblings", "媽", "爸", "父母", "爸媽", "家人", "兄弟", "姐妹", "母親", "父親"].some(k => matchKeyword(lower, k)) && item.id === "daily_family") { matchedItem = item; break; }
      if (["girlfriend", "boyfriend", "fiance", "fiancé", "husband", "wife", "partner", "dating", "crush", "break up", "broke up", "breakup", "marriage", "married", "wedding", "divorce", "曖昧", "分手", "告白", "女朋友", "男朋友", "結婚", "離婚", "喜歡的人"].some(k => matchKeyword(lower, k)) && item.id === "daily_relationship") { matchedItem = item; break; }
      if (["sick", "fever", "headache", "headaches", "migraine", "flu", "nauseous", "vomit", "doctor", "hospital", "medicine", "unwell", "生病", "發燒", "頭痛", "想吐", "看醫生", "吃藥", "不舒服", "請病假"].some(k => matchKeyword(lower, k)) && item.id === "daily_health") { matchedItem = item; break; }
    }

    if (matchedItem) {
      activePresetId = matchedItem.id;
      applyPresetResult(matchedItem);
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 5. 家人與父母壓力 (Family & Parents Pressure)
    const isFamilyConflict = [
      "mom", "mommy", "mother", "dad", "daddy", "father", "parents", "family",
      "sister", "brother", "siblings",
      "媽", "爸", "父母", "爸媽", "家人", "兄弟", "姐妹", "母親", "父親"
    ].some(k => matchKeyword(lower, k));

    if (isFamilyConflict) {
      activePresetId = null;
      const familyResult = {
        roast: {
          tagTitle: isEn ? "Backseat Life Driver" : "人生代駕司機",
          stars: "★★★★☆",
          comment: isEn
            ? "They've appointed themselves chauffeurs of your life — flooring the accelerator labeled 'it's for your own good' while ignoring the GPS that says 'their choice'. The love is real. So is the reckless driving."
            : "他們自聘為你人生的代駕——猛踩那台寫著『為你好』的油門，完全無視導航上寫的『當事人選擇』。愛是真的，車開太猛也是真的。",
          comfortTip: isEn
            ? "Their pressure is usually love delivered in the only language they ever learned. You don't have to obey the message to respect the messenger — translate it, don't swallow it whole."
            : "爸媽的壓力通常是愛，只是用他們唯一會的語言講。你不需要照單全收才叫孝順——翻譯它，不要整顆吞下去。"
        },
        diplomacy: {
          tactics: [
            {
              type: isEn ? "Reframe & Reassure" : "翻譯安心型",
              tag: isEn ? "Show Plan・Defuse Worry" : "給方案・消擔心",
              text: isEn
                ? "I know this comes from you caring about me — thank you for that. Here's exactly how I'm planning to handle it: [plan]. I'll keep you posted on how it goes, okay?"
                : "我知道你會這樣講是因為擔心我——這點我先謝謝你。我目前的規劃是這樣：[方案]。過程我會跟你更新進度，好不好？"
            },
            {
              type: isEn ? "Role Boundary" : "角色界線型",
              tag: isEn ? "Report, Don't Ask" : "成年人決策・報告不請示",
              text: isEn
                ? "I really value talking things through with you, but this one I have to own — I'm the one who'll live with the decision. I've made my call, and I'd love your support on the ride, not a veto on the route."
                : "我很重視跟你討論，但這件事我得自己扛——畢竟日子是我自己在過。我已經做了決定，希望你當我的支持者，不是路線審查員。"
            },
            {
              type: isEn ? "Steady Repetition" : "平靜重申型",
              tag: isEn ? "Same Answer・No Debate" : "答案不變・不再辯論",
              text: isEn
                ? "I know we see this differently, and that's okay — my answer hasn't changed. I'd much rather enjoy dinner hearing about [their hobby] than relitigate this one. Deal?"
                : "我知道我們在這件事上看法不同，這沒關係——我的答案沒有變。我更想好好吃飯、聽你聊聊你最近的興趣，而不是再吵一次。成交？"
            }
          ],
          insight: isEn
            ? "Family boundaries work best as doors, not walls: walls trigger siege mentality and endless escalation. Keep the relationship channel wide open while making the decision channel one-way — you share outcomes, not vetoes."
            : "家人的界線要當『門』不要當『牆』：牆會引發攻城心態、吵個沒完。把關係通道開大，把決策通道設成單向——你分享結果，不開放否決權。"
        },
        thinkingLens: {
          secondOrder: {
            firstOrder: isEn ? "Immediate Reaction: You respond with a plan instead of defense, so the topic loses its grip on dinner." : "眼前反應：你用計畫而不是防禦來回應，這個話題就抓不住餐桌了。",
            secondOrder: isEn ? "Ripple Effect: They stop seeing you as the kid who needs managing and start seeing an adult who reports rather than asks." : "長遠效應：他們不再把你當需要管理的小孩，而是會主動匯報的大人。"
          },
          preMortem: {
            risk: isEn ? "Potential Pitfall: Explaining your reasoning in exhaustive detail invites them to debate every detail." : "潛在翻車點：把理由講得太詳細，等於邀請他們逐條辯論。",
            prevention: isEn ? "Safeguard: Lead with the decision and the plan — details are shared as updates, not submitted for approval." : "避坑策略：先講決定、再講方案——細節是『更新進度』，不是『送審』。"
          },
          firstPrinciples: {
            coreTruth: isEn ? "You can honor your parents' voice without handing them the veto — love and autonomy are not zero-sum." : "你可以尊重父母的聲音，卻不必交出否決權——愛與自主不是零和遊戲。"
          }
        }
      };

      roastTag.textContent = familyResult.roast.tagTitle;
      roastStars.textContent = familyResult.roast.stars;
      roastContent.textContent = familyResult.roast.comment;
      comfortContent.textContent = familyResult.roast.comfortTip;
      currentTactics = familyResult.diplomacy.tactics;
      insightContent.textContent = familyResult.diplomacy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();
      renderThinkingLens(familyResult.thinkingLens);
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 6. 感情、曖昧與分手 (Romance, Breakups & Relationship Ambiguity)
    const isRelationshipConflict = [
      "girlfriend", "boyfriend", "fiance", "fiancé", "husband", "wife", "partner",
      "dating", "crush", "break up", "broke up", "breakup", "marriage", "married",
      "wedding", "divorce",
      "曖昧", "分手", "告白", "女朋友", "男朋友", "結婚", "離婚", "喜歡的人"
    ].some(k => matchKeyword(lower, k));

    if (isRelationshipConflict) {
      activePresetId = null;
      const relResult = {
        roast: {
          tagTitle: isEn ? "Relationship Tourist" : "戀愛觀光客",
          stars: "★★★★☆",
          comment: isEn
            ? "They treat love like a sightseeing tour — collecting experiences, taking selfies, never signing the lease. Meanwhile you're refreshing a chat window like it owes you interest. Feelings deserve a destination, not an endless layover."
            : "他把戀愛當成觀光行程——收集體驗、狂拍美照，就是從不簽長期租約。你卻在那邊狂刷新聊天視窗，像它欠你利息一樣。感情值得有個目的地，不是無限轉機。",
          comfortTip: isEn
            ? "You can't negotiate chemistry, but you can negotiate clarity. Ask one honest question; whatever the answer, at least you stop paying rent in your own head."
            : "你談判不了化學反應，但你談判得了清楚。問一個誠實的問題；無論答案是什麼，至少你不用繼續在腦袋裡付房租。"
        },
        diplomacy: {
          tactics: [
            {
              type: isEn ? "Playful Probe" : "輕踩試探型",
              tag: isEn ? "Low Pressure・Saves Face" : "零壓力・留面子",
              text: isEn
                ? "Sooo I've been rehearsing this in the shower like it's an Oscar speech 😅 — but seriously, where are we at? No big dramatic talk needed, just a vibe check!"
                : "所以～我已經在浴室裡把這段話排練得像奧斯卡得獎感言了哈哈😅——認真的，我們現在到底算什麼？不用搞得很盛大，氣氛確認一下就好！"
            },
            {
              type: isEn ? "Honest & Gentle" : "真誠溫柔型",
              tag: isEn ? "Share Feelings・Invite Reply" : "分享感受・邀請回應",
              text: isEn
                ? "Hey, I've really enjoyed getting to know you, and I like where this is heading. I'd love to hear how you're feeling about us — no pressure at all, I'm just genuinely curious where your head's at."
                : "嗨，我很享受跟你相處的過程，也喜歡我們現在的狀態。想聽聽你對我們的感覺是什麼——完全沒壓力，我單純很好奇你心裡的模樣。"
            },
            {
              type: isEn ? "Clear Bottom Line" : "清晰底線型",
              tag: isEn ? "Clarity Over Comfort" : "寧要清楚・不要舒服",
              text: isEn
                ? "I'm at a point where clarity matters more to me than comfort. If you're not on the same page, that's completely fine — but I'd rather know now than keep guessing and hoping for the best."
                : "我現在要清楚勝過要舒服。如果你沒有同樣的想法那也沒關係——但我寧可現在就知道，也不想繼續猜然後抱著期待過日子。"
            }
          ],
          insight: isEn
            ? "Ambiguity isn't romance — it's debt, and every unspoken question compounds interest. One calm, low-pressure question converts emotional debt into either a real relationship or a clean answer; both are cheaper than endless hope."
            : "曖昧不是浪漫，是欠債，每個沒問出口的問題都在累積利息。一句冷靜、無壓力的提問，就能把情緒欠款換成一段真關係或一個乾淨的答案——兩者都比無限期待便宜。"
        },
        thinkingLens: {
          secondOrder: {
            firstOrder: isEn ? "Immediate Reaction: The ambiguity breaks — you get a real answer instead of replaying old chats in your head at 2am." : "眼前反應：曖昧被打破——你得到真實答案，而不是半夜兩點還在腦海重播舊對話。",
            secondOrder: isEn ? "Ripple Effect: You stop auditioning for a role that may not exist and reclaim your emotional bandwidth." : "長遠效應：你停止試鏡一個可能不存在的角色，把情緒頻寬拿回來。"
          },
          preMortem: {
            risk: isEn ? "Potential Pitfall: Delivering an ultimatum while emotional turns an honest question into a threat." : "潛在翻車點：帶著情緒下最後通牒，會把誠實提問變成威脅。",
            prevention: isEn ? "Safeguard: Ask when calm, face-to-face if possible — and mean it when you say 'no pressure'." : "避坑策略：挑冷靜的時候、能見面就見面問——說『沒壓力』的時候要真的沒壓力。"
          },
          firstPrinciples: {
            coreTruth: isEn ? "A relationship only exists where two people agree it exists — clarity is kinder than prolonged hope." : "關係存在於兩人共同確認的地方——清楚，比漫長的希望更仁慈。"
          }
        }
      };

      roastTag.textContent = relResult.roast.tagTitle;
      roastStars.textContent = relResult.roast.stars;
      roastContent.textContent = relResult.roast.comment;
      comfortContent.textContent = relResult.roast.comfortTip;
      currentTactics = relResult.diplomacy.tactics;
      insightContent.textContent = relResult.diplomacy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();
      renderThinkingLens(relResult.thinkingLens);
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 7. 身體不適與健康 (Health & Body)
    const isHealthConflict = [
      "sick", "fever", "headache", "headaches", "migraine", "flu", "nauseous",
      "vomit", "doctor", "hospital", "medicine", "unwell",
      "生病", "發燒", "頭痛", "想吐", "看醫生", "吃藥", "不舒服", "請病假"
    ].some(k => matchKeyword(lower, k));

    if (isHealthConflict) {
      activePresetId = null;
      const healthResult = {
        roast: {
          tagTitle: isEn ? "Human Battery at 3%" : "人體電池剩 3%",
          stars: "★★★★☆",
          comment: isEn
            ? "Your body has been pushing 'low battery' notifications for months and you keep swiping them away like annoying pop-ups. Spoiler: the hardware has no 'deal with it later' mode — only a shutdown."
            : "你的身體已經跳出『電量不足』通知好幾個月了，你每次都像關彈窗一樣滑掉。劇透：這台硬體沒有『以後再處理』模式，只有關機模式。",
          comfortTip: isEn
            ? "Rest isn't a reward you earn after collapsing — it's the maintenance that prevents the collapse. Book the appointment today; future-you is already thanking you."
            : "休息不是昏倒之後才領得到的獎勵，是避免昏倒的保養。今天就先掛號——未來的你已經先謝過了。"
        },
        diplomacy: {
          tactics: [
            {
              type: isEn ? "Factual Sync" : "事實同步型",
              tag: isEn ? "Condition + Coverage + Return" : "狀況＋備援＋歸隊",
              text: isEn
                ? "Hi, quick heads-up: I woke up with [fever/migraine] and should rest today. I've handed [task] to [name] and will monitor from home — I'll be back online tomorrow and catch up first thing."
                : "哈囉，先跟你同步一下：我今天醒來 [發燒/偏頭痛]，需要休息一天。[工作] 我已經交給 [同事] 並會在家遠端關注——我明天回到崗位，一早先補進度。"
            },
            {
              type: isEn ? "Coverage Plan" : "補償方案型",
              tag: isEn ? "De-risk The Deadline" : "替期限拆風險",
              text: isEn
                ? "I'm not well enough to give this my usual focus today. Rather than send something half-done, could we move [deadline] to [date]? Here's my plan to make up the time — I'll own the catch-up."
                : "我今天狀況沒辦法給這件事該有的專注。與其交半成品，[期限] 能不能改到 [日期]？補回來的計畫我先排好了——追進度的責任我扛。"
            },
            {
              type: isEn ? "Health Boundary" : "健康底線型",
              tag: isEn ? "Recover To Return At 100%" : "先修復・再歸隊",
              text: isEn
                ? "I've been pushing through and it's catching up with me. I'm taking [today/tomorrow] to recover so I can come back at full capacity — I'll send an update the moment I'm back online."
                : "我硬撐了一段時間，身體開始收利息了。我先請 [今天/明天] 把狀態養回來，才能以 100% 回歸——一上線我立刻回報進度。"
            }
          ],
          insight: isEn
            ? "Health requests land when framed as risk management, not weakness: state the objective condition, show the coverage plan, give a return date. A superior can decline a favor, but not a contagion risk or a deadline that's already been de-risked."
            : "健康請假要用『風險管理』包裝才容易准：講客觀狀況、給備援方案、給歸隊日期。主管可以拒絕幫忙，但拒絕不了傳染風險，也拒絕不了一個已經拆完風險的排程。"
        },
        thinkingLens: {
          secondOrder: {
            firstOrder: isEn ? "Immediate Reaction: You stop performing wellness you don't feel, and the body gets the recovery window it's been demanding." : "眼前反應：你不再假裝活得很好，身體終於拿到它喊了很久的修復窗口。",
            secondOrder: isEn ? "Ripple Effect: Honest status updates become normal instead of risky — prevention beats the ER visit you keep postponing." : "長遠效應：如實回報狀態變成常態而不是冒險——預防勝過你一直延期的急診。"
          },
          preMortem: {
            risk: isEn ? "Potential Pitfall: 'I'm sick' with zero handover reads as an excuse and invites negotiation." : "潛在翻車點：只說『我生病了』卻沒有交接，會被當藉口，還會被拿來談判。",
            prevention: isEn ? "Safeguard: Always pair the bad news with a coverage plan and a return date." : "避坑策略：壞消息旁邊永遠附上備援方案與歸隊日期。"
          },
          firstPrinciples: {
            coreTruth: isEn ? "Your body runs the only irreplaceable hardware you own — maintenance is not optional." : "身體是你唯一不可替換的硬體——保養不是選配。"
          }
        }
      };

      roastTag.textContent = healthResult.roast.tagTitle;
      roastStars.textContent = healthResult.roast.stars;
      roastContent.textContent = healthResult.roast.comment;
      comfortContent.textContent = healthResult.roast.comfortTip;
      currentTactics = healthResult.diplomacy.tactics;
      insightContent.textContent = healthResult.diplomacy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();
      renderThinkingLens(healthResult.thinkingLens);
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 8. 通用人際摩擦與界線自保 (Universal Interpersonal Conflict & Personal Boundary Fallback)
    // 徹底移除不相干的職場里程碑 (milestones) 詞彙！
    activePresetId = null;
    const universalResult = {
      roast: {
        tagTitle: isEn ? "Absurd Boundary Violation" : "人際界線越界認證",
        stars: "★★★★☆",
        comment: isEn 
          ? "What this person did is a textbook display of zero emotional intelligence. Your frustration is completely justified! Someone else's lack of self-awareness should never become your personal burden."
          : "對方這個舉動真的是標準的『毫無同理心與自覺』。你的生氣完全合情合理！別人的白目不該成為懲罰你的枷鎖，這口悶氣我們絕不自己吞。",
        comfortTip: isEn
          ? "Take a deep breath for 3 seconds. The issue lies squarely with their behavior, not your patience. Let's set the boundary cleanly."
          : "先深呼吸三秒鐘。問題在他不在你，我們用最得體、最無懈可擊的方式把界線劃分清楚。"
      },
      diplomacy: {
        tactics: [
          {
            type: isEn ? "Playful Deflection" : "幽默調侃型",
            tag: isEn ? "Diffuses Tension・Maintains Face" : "軟性提醒・保留面子",
            text: isEn
              ? "Hey! About what happened earlier—my brain did a little triple-take haha. Can we hit the reset button and find a smoother way for both of us to handle this?"
              : "哈囉！關於剛才那件事，我的腦袋差點當機哈哈～想說我們彼此退一步，找個兩邊相處都舒服的方式，你覺得呢？"
          },
          {
            type: isEn ? "Honest Boundary" : "真誠表達型",
            tag: isEn ? "Express Discomfort Directly" : "表達感受・建立界線",
            text: isEn
              ? "Hey, I've been reflecting on our interaction, and to be open, it left me feeling a bit uncomfortable. I value our relationship, so I wanted to share my thoughts honestly rather than keeping it to myself."
              : "嗨，稍微沈澱了一下剛才的事，老實說當下的情況讓我覺得有點不太舒服。因為我很在乎我們之間的相處，所以想坦誠跟你分享我的感受，也聽聽你的想法！"
          },
          {
            type: isEn ? "Firm Standard" : "明確原則型",
            tag: isEn ? "Mutual Respect Ground Rule" : "互相尊重・確立原則",
            text: isEn
              ? "I think mutual respect is essential for us to communicate well. Here is where I stand on this, and I hope we can find common ground so neither of us feels frustrated moving forward."
              : "我覺得彼此互相尊重、有話好說是長久相處的基礎。在這件事情上我的原則比較明確，希望能跟你取得共識，避免以後雙方都覺得委屈或產生誤解。"
          }
        ],
        insight: isEn
          ? "When resolving awkward interpersonal conflicts, use 'I-statements' (how the situation made you feel) rather than 'You-statements' (accusing their character). Expressing your standard with calm composure leaves zero room for toxic drama while making your boundary respected."
          : "處理人際摩擦時，切記使用『我字開頭』（表達自己的真實感受），而不是『你字開頭』（指責對方的品格）。聚焦在感受與長遠關係，能最大程度降低對方的防衛心，同時讓界線清晰有效。"
      },
      thinkingLens: {
        secondOrder: {
          firstOrder: isEn ? "Immediate Reaction: The other party recognizes an uncomfortable boundary has been crossed without feeling attacked." : "眼前反應：對方清楚意識到自己踩到了界線，同時沒有被當面羞辱或防衛激化。",
          secondOrder: isEn ? "Ripple Effect: Calibrates the long-term relationship dynamic to one based on mutual respect rather than silent resentment." : "長遠效應：將長期互動基調校正為彼此尊重，避免暗生芥蒂甚至最終關係破裂。"
        },
        preMortem: {
          risk: isEn ? "Potential Pitfall: Using 'You' blame statements escalates the conversation into an ego battle." : "潛在翻車點：使用『你總是/你根本』指責語氣，引爆對方的自尊反擊戰。",
          prevention: isEn ? "Safeguard: Use 'I-statements' focusing on feelings and desired mutual ground rather than character flaws." : "避坑策略：全面改採『我感到/為了雙方相處更順暢』的我字陳述法，聚焦行為與感受。"
        },
        firstPrinciples: {
          coreTruth: isEn ? "Civil boundaries are not fences to push people away; they are the guardrails that make genuine relationships sustainable." : "清晰的界線不是為了推開彼此，而是為了讓健康的關係能夠長久維繫的防護欄。"
        }
      }
    };

    roastTag.textContent = universalResult.roast.tagTitle;
    roastStars.textContent = universalResult.roast.stars;
    roastContent.textContent = universalResult.roast.comment;
    comfortContent.textContent = universalResult.roast.comfortTip;

    currentTactics = universalResult.diplomacy.tactics;
    insightContent.textContent = universalResult.diplomacy.insight;
    currentTacticIndex = 0;
    renderTacticsTabs();
    renderThinkingLens(universalResult.thinkingLens);

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast(UI_STRINGS[currentLang].toastDone);
  }

  // 即時呼叫 LLM (針對問題 100% 精準對齊 + 思維模型深度推演)
  async function callLiveLLM(rantText, apiKey) {
    const endpoint = localStorage.getItem("vent_api_endpoint") || "https://api.openai.com/v1";
    const model = localStorage.getItem("vent_api_model") || "gpt-4o-mini";
    const isEn = currentLang === "en";

    const systemPrompt = isEn 
      ? `You are an AI assistant combining a cynical witty roaster (Catharsis Engine) and a senior diplomat (Diplomacy Engine), powered by high-order cognitive models.
CRITICAL RULE: The user input is their REAL interpersonal problem (e.g., friends swearing, unreturned money, slacking, annoying habits, broken boundaries). Your output MUST SPECIFICALLY and DIRECTLY address the exact situation they mentioned. DO NOT output generic workplace milestone or deadline templates unless they explicitly talked about work/deadlines!

Return valid JSON with:
1. roast: { tagTitle (3-5 words), stars ("★★★★☆"), comment (witty, hilarious, sharp roast of the other party's absurdity in this specific situation), comfortTip (1 practical de-escalation tip) }.
2. diplomacy: { tactics: [ { type: "Playful Tease", tag: "string", text: "ready-to-send message specifically solving this problem" }, { type: "Gentle Boundary", tag: "string", text: "..." }, { type: "Firm Standard", tag: "string", text: "..." } ], insight: "psychological explanation of why this communication strategy works" }.
3. thinkingLens: {
  secondOrder: { firstOrder: "immediate reaction to this message", secondOrder: "long-term behavioral ripple effect" },
  preMortem: { risk: "the #1 way this response could backfire", prevention: "practical rule to prevent that failure" },
  firstPrinciples: { coreTruth: "the bedrock fundamental principle governing this interaction" }
}.
Language: ENGLISH.`
      : `你是一個結合了「毒舌心理諮商師」與「頂級外交官」的雙面 AI 助理，並具備頂級高階思維推演能力。
重要準則：使用者輸入的是他現實中遇到的具體人際困難（例如朋友常講髒話、借錢不還、被放鳥、討厭的習慣、被踩底線等）。
你的輸出必須 100% 針對使用者所描述的具體事件進行精準回應，嚴禁給予無關的職場里程碑或工作截止日套話！

請嚴格返回 JSON 格式：
{
  "roast": {
    "tagTitle": "四字至六字趣味標籤",
    "stars": "★★★★☆",
    "comment": "100字左右尖銳幽默又好笑的吐槽，專門針對該具體荒謬事件",
    "comfortTip": "一句實用安慰"
  },
  "diplomacy": {
    "tactics": [
      { "type": "幽默調侃型", "tag": "情境說明", "text": "針對該問題、實際可發送的句子" },
      { "type": "溫和直白型", "tag": "情境說明", "text": "針對該問題、實際可發送的句子" },
      { "type": "明確底線型", "tag": "情境說明", "text": "針對該問題、實際可發送的句子" }
    ],
    "insight": "針對該人際溝通問題的心理學與高情商眉角說明"
  },
  "thinkingLens": {
    "secondOrder": {
      "firstOrder": "傳送此訊息後的眼前直接反應",
      "secondOrder": "兩到三個月後的長遠骨牌連鎖效應"
    },
    "preMortem": {
      "risk": "這則訊息最可能踩雷的翻車點",
      "prevention": "徹底避開此翻車點的關鍵策略"
    },
    "firstPrinciples": {
      "coreTruth": "此人際摩擦背後不可動搖的第一性原理底層真相"
    }
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

    if (content.thinkingLens) {
      renderThinkingLens(content.thinkingLens);
    }

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast(UI_STRINGS[currentLang].toastLiveDone);
  }

  btnLangToggle.addEventListener("click", () => {
    const newLang = currentLang === "zh-TW" ? "en" : "zh-TW";
    applyLanguage(newLang);
    showToast(newLang === "en" ? "🌐 Switched to English" : "🌐 已切換為繁體中文");
  });

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchCategory(tab.dataset.cat);
    });
  });

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

  applyLanguage(currentLang);
  switchCategory("friends");
});
