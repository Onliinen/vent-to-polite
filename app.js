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
    ].some(k => lower.includes(k));

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
      "money", "borrow", "pay back", "owe", "split", "bill", "cheap", "lend", "debt",
      "借錢", "還錢", "分帳", "欠錢", "催討", "不給錢", "討錢"
    ].some(k => lower.includes(k));

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
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 3. 已讀不回與訊息冷暴力 (Ghosting, Left on read, Ignored messages)
    const isGhostingConflict = [
      "ghost", "ghosting", "read", "reply", "ignore", "text back", "message",
      "已讀", "不回", "不理", "人間蒸發", "回很慢", "不看訊息"
    ].some(k => lower.includes(k));

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
    ];

    let matchedItem = null;
    for (const item of currentPresets) {
      if ((lower.includes("遲到") || lower.includes("late") || lower.includes("wait")) && item.id === "friend_late") { matchedItem = item; break; }
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
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // 5. 通用人際摩擦與界線自保 (Universal Interpersonal Conflict & Personal Boundary Fallback)
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

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast(UI_STRINGS[currentLang].toastDone);
  }

  // 即時呼叫 LLM (針對問題 100% 精準對齊)
  async function callLiveLLM(rantText, apiKey) {
    const endpoint = localStorage.getItem("vent_api_endpoint") || "https://api.openai.com/v1";
    const model = localStorage.getItem("vent_api_model") || "gpt-4o-mini";
    const isEn = currentLang === "en";

    const systemPrompt = isEn 
      ? `You are an AI assistant combining a cynical witty roaster (Catharsis Engine) and a senior diplomat (Diplomacy Engine).
CRITICAL RULE: The user input is their REAL interpersonal problem (e.g., friends swearing, unreturned money, slacking, annoying habits, broken boundaries). Your output MUST SPECIFICALLY and DIRECTLY address the exact situation they mentioned. DO NOT output generic workplace milestone or deadline templates unless they explicitly talked about work/deadlines!

Return valid JSON with:
1. roast: { tagTitle (3-5 words), stars ("★★★★☆"), comment (witty, hilarious, sharp roast of the other party's absurdity in this specific situation), comfortTip (1 practical de-escalation tip) }.
2. diplomacy: { tactics: [ { type: "Playful Tease", tag: "string", text: "ready-to-send message specifically solving this problem" }, { type: "Gentle Boundary", tag: "string", text: "..." }, { type: "Firm Standard", tag: "string", text: "..." } ], insight: "psychological explanation of why this communication strategy works" }.
Language: ENGLISH.`
      : `你是一個結合了「毒舌心理諮商師」與「頂級外交官」的雙面 AI 助理。
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
