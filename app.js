/**
 * VentToPolite - bilingual, browser-based scenario reply templates
 */

const UI_STRINGS = {
  "zh-TW": {
    langBtn: "English",
    brandBadge: "中英雙語範本",
    heroPill: "<span>🔥 快速回覆範本</span><span>•</span><span>免 API、開啟即用</span>",
    heroTitleInner: "內心",
    heroTitleFire: "暴躁發洩",
    heroTitleCross: " ✕ ",
    heroTitleOuter: "外在",
    heroTitleDiplomat: "體面求生",
    heroSubtitle: "遇到讓人為難、委屈或抓狂的人際情境？<br>選擇常見案例或寫下幾句描述，範本會整理出<b>快速吐槽、柔和回覆與思考提示</b>。免 API 金鑰，直接使用。",
    presetLabel: "💡 常見人際情境參考：",
    inputAreaLabel: "傾倒你的原始真心話（生活中遇到的任何難題，毫無保留、自由開火）",
    rageLabel: "抓狂指數:",
    rantPlaceholder: "輸入任何讓你為難、憤怒、委屈，或是不知道該怎麼得體開口的生活／職場／社交難題...",
    btnGenerateText: "快速產生回覆",
    btnGeneratingText: "正在整理回覆...",
    placeholderText: "點選上方的常見案例，或輸入情境後點擊「快速產生回覆」。結果由內建範本整理，不會呼叫 AI API。",
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
    footerMainText: "VentToPolite｜中英雙語人際情境回覆範本",
    footerSubText: "靜態網站 • 無需 API 金鑰 • 回覆由瀏覽器內建範本產生",
    toastCopied: "✅ 已複製高情商話術到剪貼簿！",
    toastEmpty: "⚠️ 請先輸入你的生氣真心話！",
    toastDone: "✨ 範本回覆已整理完成！"
  },
  "en": {
    langBtn: "繁體中文",
    brandBadge: "Bilingual Templates",
    heroPill: "<span>🔥 Quick Reply Templates</span><span>•</span><span>Online and API-free</span>",
    heroTitleInner: "Raw ",
    heroTitleFire: "Venting",
    heroTitleCross: " ✕ ",
    heroTitleOuter: "Civil ",
    heroTitleDiplomat: "Diplomacy",
    heroSubtitle: "Dealing with an awkward, unfair, or frustrating interaction?<br>Choose a common scenario or describe it briefly to get a <b>quick roast, softer replies, and thinking prompts</b> from built-in templates. No API key needed.",
    presetLabel: "💡 Common Scenarios for Reference:",
    inputAreaLabel: "Unfiltered Vent (Any real-life conflict or dilemma, no filter):",
    rageLabel: "Rage Level:",
    rantPlaceholder: "Enter any frustrating interaction, awkward boundary, unfair demand, or interpersonal problem you're dealing with...",
    btnGenerateText: "Generate Quick Replies",
    btnGeneratingText: "Preparing replies...",
    placeholderText: "Choose a common scenario or describe yours, then select 'Generate Quick Replies'. Replies come from built-in templates; no AI API is called.",
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
    footerMainText: "VentToPolite | Bilingual interpersonal reply templates",
    footerSubText: "Static website • No API key • Replies are assembled from built-in browser templates",
    toastCopied: "✅ Copied message to clipboard!",
    toastEmpty: "⚠️ Please enter your thoughts first!",
    toastDone: "✨ Template replies are ready!"
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

  const toast = document.getElementById("toast");


  // 切換語言
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("vent_lang", lang);
    const strings = UI_STRINGS[lang];

    langLabel.textContent = strings.langBtn;
    document.getElementById("brandBadge").textContent = strings.brandBadge;
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

  function completeThinkingLens(lensData, issue, isEn) {
    const subject = issue.replace(/\s+/g, " ").trim().slice(0, 90);
    const fallback = isEn ? {
      secondOrder: {
        firstOrder: `For “${subject}”, state what happened and what you need without attacking the person.`,
        secondOrder: "If the same issue repeats, agree on one clear next step so the pattern does not continue."
      },
      preMortem: {
        risk: "A sarcastic or accusatory reply could shift the discussion from the issue to the tone.",
        prevention: "Keep the message short: name the behavior, its effect on you, and the change you want."
      },
      firstPrinciples: {
        coreTruth: "Focus on the specific behavior and the practical outcome you need; avoid guessing the other person's intent."
      }
    } : {
      secondOrder: {
        firstOrder: `針對「${subject}」，先說明發生的事與你的需求，避免把焦點變成人身指責。`,
        secondOrder: "若同一問題再次發生，和對方約定一個明確的下一步，避免模式持續。"
      },
      preMortem: {
        risk: "太諷刺或帶指責的回覆，可能讓討論從事情本身偏到你的語氣。",
        prevention: "訊息保持簡短：說明具體行為、對你的影響，以及希望對方如何調整。"
      },
      firstPrinciples: {
        coreTruth: "聚焦在具體行為與你需要的結果，不猜測對方的動機。"
      }
    };

    return {
      secondOrder: {
        firstOrder: lensData?.secondOrder?.firstOrder || fallback.secondOrder.firstOrder,
        secondOrder: lensData?.secondOrder?.secondOrder || fallback.secondOrder.secondOrder
      },
      preMortem: {
        risk: lensData?.preMortem?.risk || fallback.preMortem.risk,
        prevention: lensData?.preMortem?.prevention || fallback.preMortem.prevention
      },
      firstPrinciples: {
        coreTruth: lensData?.firstPrinciples?.coreTruth || fallback.firstPrinciples.coreTruth
      }
    };
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

    renderThinkingLens(completeThinkingLens(
      presetItem.thinkingLens,
      rantInput.value || presetItem.rant || "",
      currentLang === "en"
    ));

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

    btnGenerate.disabled = true;
    btnGenerateText.textContent = UI_STRINGS[currentLang].btnGeneratingText;

    try {
      await generateOfflineIntelligent(text);
    } catch (err) {
      console.error("Template generation failed:", err);
      showToast(UI_STRINGS[currentLang].toastDone);
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
   * Key-free quick replies: route familiar phrases to bilingual scenario templates;
   * unknown situations receive a short general draft rather than a false exact match.
   */
  async function generateOfflineIntelligent(text) {
    const lower = text.toLowerCase();
    const isEn = currentLang === "en";

    // Extra bilingual offline scenarios for short, everyday descriptions.
    // Keep triggers phrase-based so incidental words do not hijack unrelated inputs.
    const quickScenarios = [
      {
        id: "last_minute_cancel",
        keywords: {
          en: ["cancelled last minute", "canceled last minute", "cancel on me", "bailed on me", "flaked on me", "stood me up", "changed plans last minute"],
          zh: ["臨時取消", "臨時放鳥", "臨時爽約", "突然取消約", "說改就改", "約好又不來"]
        },
        zh: {
          tag: "臨時變卦大師",
          roast: "行程說取消就取消，彷彿你的時間是可以無限退訂的免費試用。難怪耐性都快被排進取消名單了。",
          comfort: "你可以體諒突發狀況，也可以要求對方提早告知。",
          playful: "「嗨，臨時改行程我有點措手不及，下次如果有變動可以早點跟我說嗎？我好安排時間～」",
          soft: "「我知道有時候會有突發狀況，不過臨時取消會影響我的安排。下次有變動時，麻煩早點告訴我，好嗎？」",
          firm: "「如果行程又臨時取消，我之後會先安排自己的事，等時間確定再約。」",
          insight: "用具體影響和下次的安排來表達，比爭論誰比較重視約定更容易改善狀況。"
        },
        en: {
          tag: "Last-Minute Plot Twist",
          roast: "Plans get canceled so suddenly your calendar needs a seat belt. Your time is not a free trial people can keep restarting.",
          comfort: "You can understand emergencies and still ask for earlier notice.",
          playful: "“Hey, that last-minute change caught me off guard 😅 Could you give me a heads-up sooner next time so I can plan?”",
          soft: "“I understand things come up, but a last-minute cancellation affects my plans. Please let me know earlier if something changes.”",
          firm: "“If plans change at the last minute again, I’ll make my own plans first and we can meet when the time is confirmed.”",
          insight: "Naming the impact and agreeing on earlier notice keeps the conversation practical instead of turning it into a test of who cares more."
        }
      },
      {
        id: "interrupted",
        keywords: {
          en: ["talks over me", "talked over me", "keeps interrupting", "interrupted me", "won't let me finish", "doesn't let me finish", "cuts me off"],
          zh: ["一直打斷我", "打斷我說話", "不讓我說完", "插嘴", "搶話", "都不聽我說"]
        },
        zh: {
          tag: "搶話搶到超速",
          roast: "對方接話的速度快到像在參加搶答比賽，只差沒按鈴。你的句子還沒落地，就被迫提早下班。",
          comfort: "把話說完是基本的互相尊重，不是你在搶舞台。",
          playful: "「等我把這句講完再換你，今天的搶答鈴先借我保管一下😄」",
          soft: "「我想先把這個想法說完，等一下也想聽你的看法，可以嗎？」",
          firm: "「我剛剛還沒說完。請先讓我講完，我也會留時間聽你說。」",
          insight: "當下用簡短、明確的提示拿回發言空間，比事後累積不滿更容易讓對方調整。"
        },
        en: {
          tag: "Conversation Speedrunner",
          roast: "They jump in so fast the conversation feels like a buzzer round. Your sentence barely landed before it got sent home early.",
          comfort: "Getting to finish a sentence is basic respect, not hogging the spotlight.",
          playful: "“Hold that thought—let me finish this sentence before we start the buzzer round 😄”",
          soft: "“I’d like to finish this thought, then I want to hear what you think. Is that okay?”",
          firm: "“I wasn’t finished speaking. Please let me finish, and I’ll give you the same space.”",
          insight: "A brief, calm cue in the moment restores your turn without turning the discussion into a fight about character."
        }
      },
      {
        id: "privacy_boundary",
        keywords: {
          en: ["went through my phone", "checked my phone", "read my messages", "looked at my private messages", "invaded my privacy", "asked really personal questions", "keeps asking personal questions"],
          zh: ["翻我手機", "偷看我手機", "看我訊息", "偷看訊息", "侵犯隱私", "隱私界線", "一直問私事", "打聽私事"]
        },
        zh: {
          tag: "隱私探測器過界",
          roast: "對方把好奇心開到最大，卻忘了隱私不是公共展覽。你的手機和私事都沒有提供免費導覽。",
          comfort: "親近不代表可以跳過你的同意；你有權決定哪些事要分享。",
          playful: "「這題先列為私人珍藏，不開放參觀喔～下次先問我一下再看手機啦。」",
          soft: "「我知道你可能只是好奇，但手機和這些私事對我來說比較私人。下次先問過我再看或聊，好嗎？」",
          firm: "「請不要在沒有問我的情況下看手機或追問這些私事。這是我希望你尊重的界線。」",
          insight: "把界線說成具體行為（先詢問、不直接查看），能讓對方清楚知道怎麼尊重你。"
        },
        en: {
          tag: "Privacy Border Patrol",
          roast: "Their curiosity has gone full documentary crew, forgetting your private life is not a public exhibit. Your phone does not come with a free tour.",
          comfort: "Being close to someone does not replace asking for consent.",
          playful: "“That one’s in the private collection—no tour today 😄 Please ask before checking my phone next time.”",
          soft: "“I know you may just be curious, but my phone and personal life are private to me. Could you ask before looking or asking about them?”",
          firm: "“Please don’t look through my phone or press me about private matters without asking. I need you to respect that boundary.”",
          insight: "Naming the specific behavior you want changed makes the privacy boundary clear and actionable."
        }
      },
      {
        id: "unfair_requests",
        keywords: {
          en: ["keeps asking me to do", "always asks me for favors", "keeps dumping work on me", "unfair workload", "taking advantage of me", "expects me to do everything", "keeps making me cover"],
          zh: ["一直叫我幫忙", "一直要我幫忙", "都把工作丟給我", "把事情推給我做", "工作都丟給我", "一直使喚我", "不合理的要求", "都要我代班"]
        },
        zh: {
          tag: "免費支援部門主管",
          roast: "對方把你的行程當成無限容量的共享雲端，事情一有空位就往裡丟。你不是全年無休的客服中心。",
          comfort: "拒絕不合理的要求，不等於你不友善；你也需要保留自己的時間。",
          playful: "「我的免費支援時數今天用完啦😅 這件事你先自己處理，真的卡住我們再一起看。」",
          soft: "「我現在手上也有自己的安排，這次沒辦法再接下來。之後如果要我幫忙，麻煩先確認我的時間。」",
          firm: "「這件事不在我目前能承接的範圍，我這次不會接手。請重新安排負責人或優先順序。」",
          insight: "清楚說明能不能接、需要什麼前提，比含糊答應後再累積怨氣更能建立公平分工。"
        },
        en: {
          tag: "Unpaid Support Department",
          roast: "They treat your calendar like unlimited shared storage and keep dropping tasks into it. You are not a 24/7 help desk.",
          comfort: "Declining an unfair request does not make you unkind; your time matters too.",
          playful: "“My free-support hours are all used up today 😅 You’ll need to handle this one; if you get stuck, we can take a quick look together.”",
          soft: "“I have my own commitments right now, so I can’t take this on. Please check with me before assigning me something next time.”",
          firm: "“This isn’t within what I can take on right now, so I won’t be owning it. Please reassign it or reset the priorities.”",
          insight: "A clear yes-or-no and the conditions for future help create fairer expectations than agreeing and building resentment."
        }
      },
      {
        id: "credit_taken",
        keywords: {
          en: ["took credit for my work", "taking credit for my work", "stole my idea", "claimed my work", "presented my idea as theirs", "takes credit for everything"],
          zh: ["搶我的功勞", "把我的功勞拿走", "把我的點子說成他的", "把我的成果說成他的", "冒領功勞", "搶功"]
        },
        zh: {
          tag: "功勞搬運專員",
          roast: "成果還沒冷卻，功勞就被搬到別人的名下，這手速不去參加接力賽太可惜了。",
          comfort: "把自己的貢獻留下紀錄，是專業自保，不是小題大作。",
          playful: "「剛剛那個點子我也有參與喔，幫它補上完整作者名單，免得功勞迷路😄」",
          soft: "「剛才提到的成果有一部分是我負責的，我想把各自的貢獻說清楚，避免後續資訊有落差。」",
          firm: "「請在後續的簡報／紀錄中註明這部分由我完成。相關草稿和時間紀錄我也會一併整理。」",
          insight: "用文件、草稿或具體分工記錄來校正事實，比直接指控對方的人品更有說服力。"
        },
        en: {
          tag: "Credit Relocation Expert",
          roast: "The work barely cooled before the credit got relocated. That kind of speed belongs in a relay race, not a project recap.",
          comfort: "Keeping a record of your contribution is professional self-protection, not petty behavior.",
          playful: "“I contributed to that idea too—let’s add the full author list before the credit wanders off again 😄”",
          soft: "“Part of that work was mine, and I’d like us to make each person’s contribution clear so the record is accurate.”",
          firm: "“Please credit me for the portion I completed in the next update. I’ll share the drafts and work records so we can document it clearly.”",
          insight: "Correct the record with specific evidence and ownership details instead of making the conversation about motives."
        }
      },
      {
        id: "hurtful_teasing",
        keywords: {
          en: ["body shaming", "comments on my body", "comments on my appearance", "making fun of my body", "keeps teasing me about", "jokes at my expense", "makes fun of my appearance"],
          zh: ["拿我的身材開玩笑", "評論我的外表", "一直笑我的外表", "拿我外表開玩笑", "一直拿我開玩笑", "開我的身材玩笑", "嘲笑我的外表"]
        },
        zh: {
          tag: "玩笑界線測試員",
          roast: "這個笑話的笑點大概只剩講的人自己知道，聽的人卻被迫買單。不好笑的玩笑不會因為加個『開玩笑啦』就自動變好笑。",
          comfort: "你不需要證明自己開得起玩笑，才能要求對方停止讓你不舒服的話。",
          playful: "「這個梗我先不收喔，換個笑點比較有機會全場都笑😅」",
          soft: "「我知道你可能是在開玩笑，但拿我的外表／身材說笑會讓我不舒服，可以不要再這樣嗎？」",
          firm: "「我已經說過不喜歡這類評論，請停止拿我的外表或身材開玩笑。」",
          insight: "指出哪類玩笑不舒服並直接提出停止要求，能避免對方把界線模糊成你是否幽默。"
        },
        en: {
          tag: "Joke Boundary Tester",
          roast: "The punchline may only exist in the speaker’s head; everyone else got handed the bill. Adding “just joking” doesn’t magically make it funny.",
          comfort: "You don’t have to prove you can take a joke before asking someone to stop.",
          playful: "“I’m going to pass on that joke—let’s find one the whole room can laugh at 😅”",
          soft: "“I know you may mean it as a joke, but comments about my appearance/body make me uncomfortable. Could you stop?”",
          firm: "“I’ve said I don’t like those comments. Please stop making jokes about my appearance or body.”",
          insight: "Name the kind of joke and the change you want so the boundary cannot be dismissed as a debate about humor."
        }
      },
      {
        id: "gossip_secret",
        keywords: {
          en: ["shared my secret", "told everyone my secret", "spread a rumor about me", "spreading rumors about me", "gossiping about me", "shared my private information"],
          zh: ["把我的秘密說出去", "把我的秘密告訴別人", "亂傳我的八卦", "散播謠言", "到處說我", "把我的私事說出去", "洩漏我的秘密"]
        },
        zh: {
          tag: "八卦快遞超時配送",
          roast: "別人的私事被打包成八卦到處寄送，這份好奇心真的很勤勞，尊重卻一路請假。",
          comfort: "你可以要求對方停止轉傳，也可以重新決定哪些事要告訴他。",
          playful: "「我的私事不用幫我做全網配送啦😅 這件事先到你這裡就好，別再轉傳了。」",
          soft: "「我把這件事告訴你是因為信任你，不希望再被轉述給其他人。可以請你不要再分享嗎？」",
          firm: "「請停止傳播我的私事／這個說法，也請更正你已經告訴的人。之後我會先保留私人資訊。」",
          insight: "明確指出要停止什麼、需要如何補救，並調整未來分享範圍，能同時處理影響與信任。"
        },
        en: {
          tag: "Gossip Express Courier",
          roast: "Someone packed your private life into gossip and shipped it everywhere. Their curiosity is working overtime; respect apparently called in sick.",
          comfort: "You can ask them to stop sharing it and choose what you trust them with next time.",
          playful: "“My private life doesn’t need worldwide delivery 😅 Please let this one stop with you—don’t pass it on.”",
          soft: "“I told you that because I trusted you, and I don’t want it shared with anyone else. Could you please stop repeating it?”",
          firm: "“Please stop sharing my private information and correct the story with anyone you told. I’ll be keeping personal details private going forward.”",
          insight: "State what must stop, what repair you need, and how you’ll protect trust going forward."
        }
      },
      {
        id: "roommate_chores_noise",
        keywords: {
          en: ["roommate never cleans", "roommate won't clean", "never takes out the trash", "leaves a mess everywhere", "roommate is too loud", "keeps making noise at night", "roommate leaves dishes"],
          zh: ["室友不打掃", "室友不倒垃圾", "室友都不整理", "房間很吵", "半夜很吵", "室友很吵", "公共區域都不清"]
        },
        zh: {
          tag: "公共空間失憶症",
          roast: "公共區域不是會自動復原的魔法地圖，垃圾也不會靠意念自己走出去。看來家事分工需要從傳說改成排班表。",
          comfort: "把期待變成明確的分工和時間，比每次看到都生悶氣有效。",
          playful: "「客廳又解鎖『物品自然生成』模式了😅 我們排個倒垃圾／整理輪值表，讓它恢復原狀吧。」",
          soft: "「最近公共空間的清潔／晚上音量有點影響我，我們可以一起訂個輪值和安靜時間嗎？」",
          firm: "「我希望公共區域由大家按排班表整理，晚上也請在約定時間後降低音量。這樣住起來才公平。」",
          insight: "把家務或噪音轉成可觀察的規則、輪值與時間，能減少反覆爭執誰比較辛苦。"
        },
        en: {
          tag: "Shared-Space Amnesia",
          roast: "The common area isn’t a magical map that resets itself, and trash won’t walk out through positive thinking. Chores need a rota, not folklore.",
          comfort: "A clear schedule works better than silently getting annoyed every time you see the mess.",
          playful: "“The living room has unlocked item-generation mode again 😅 Let’s make a cleaning/trash rota and reset it.”",
          soft: "“The shared-space cleanup/noise has been affecting me. Could we agree on a chore rota and quiet hours?”",
          firm: "“I need everyone to follow a shared cleaning schedule and keep the noise down after our agreed quiet time. That’s the fairest way to share the space.”",
          insight: "Turn chores or noise into observable rules and time slots so the discussion is about an agreement, not who complains more."
        }
      },
      {
        id: "tone_miscommunication",
        keywords: {
          en: ["tone of voice", "snapped at me", "talks to me like", "misread my message", "misunderstood my text", "we keep misunderstanding each other", "every conversation turns into an argument"],
          zh: ["語氣很差", "口氣很差", "講話口氣", "誤會我的訊息", "誤解我的意思", "一講就吵起來", "每次溝通都變吵架"]
        },
        zh: {
          tag: "語氣翻譯故障",
          roast: "明明在討論一件事，最後卻變成語氣鑑定大會，原本的問題還在旁邊排隊等處理。",
          comfort: "你可以談事情本身，也可以要求彼此用能聽進去的方式說話。",
          playful: "「我們好像又卡在語氣副本了😅 先回到原本那件事，我想把它好好說完。」",
          soft: "「我想把事情談清楚，但剛剛的語氣讓我有點難接收。我們可以慢一點說，先聚焦在這件事嗎？」",
          firm: "「如果我們開始互相提高音量，我會先暫停，等冷靜後再把事情談完。」",
          insight: "把語氣和原本議題分開處理，並約定暫停條件，可以避免一次誤會擴大成整場爭吵。"
        },
        en: {
          tag: "Tone Translation Glitch",
          roast: "You started discussing one issue and somehow ended up in a full tone-of-voice trial, while the original problem is still waiting outside.",
          comfort: "You can address the issue and ask for a way of speaking you can actually hear.",
          playful: "“I think we’ve unlocked the tone-of-voice side quest again 😅 Can we return to the original issue and finish that first?”",
          soft: "“I want to work this out, but the tone is making it hard for me to listen. Could we slow down and focus on the issue?”",
          firm: "“If we start raising our voices, I’m going to pause this conversation and come back to it when we’re calmer.”",
          insight: "Separating tone from the original issue and agreeing on a pause point can stop one misunderstanding from taking over the whole conversation."
        }
      },
      {
        id: "quality_time_phone",
        keywords: {
          en: ["always on their phone when we", "on their phone during dinner", "never spends time with me", "too busy to see me", "not making time for me", "keeps canceling our time together", "keeps cancelling our time together"],
          zh: ["約會都在滑手機", "吃飯一直滑手機", "一直滑手機不理我", "都不花時間陪我", "沒時間陪我", "都不陪我", "相處時一直看手機"]
        },
        zh: {
          tag: "手機搶走主場",
          roast: "你們是一起吃飯，手機卻像買了雙人座，還順便把對話也包場了。",
          comfort: "想要相處時被好好陪伴很合理，直接提出一段專心相處的時間就好。",
          playful: "「我們今天可以讓手機先休息一下嗎？它最近陪你的時間比我還多耶😅」",
          soft: "「我很珍惜我們一起吃飯／相處的時間。你一直看手機時我會覺得有點被晾著，可以留一段時間專心陪彼此嗎？」",
          firm: "「如果我們約好一起相處，我希望這段時間先少看手機；如果你現在有事，我們也可以改天再約。」",
          insight: "把需求說成具體的相處安排，比只說對方不在乎你更容易得到可執行的改變。"
        },
        en: {
          tag: "Phone Takes the Date",
          roast: "You went out together, but the phone seems to have booked the two-seat table and reserved the conversation too.",
          comfort: "It’s reasonable to want someone’s attention during time you set aside together.",
          playful: "“Can we let our phones take a little break? Yours has had more quality time with you than I have lately 😅”",
          soft: "“I really value our time together. When you’re on your phone through dinner, I feel a little sidelined. Could we set aside some phone-free time?”",
          firm: "“When we make plans to spend time together, I’d like us to put our phones away for a while. If now isn’t a good time, we can reschedule.”",
          insight: "Turn the need for attention into a specific shared-time request instead of framing it as proof that the other person does not care."
        }
      },
      {
        id: "shared_expenses",
        keywords: {
          en: ["split rent", "split the utilities", "split household bills", "unfair bill split", "doesn't pay their share of rent", "does not pay their share of rent", "shared grocery costs", "who pays for shared supplies"],
          zh: ["分攤房租", "房租分攤", "分攤水電費", "水電費怎麼分", "共同帳單", "生活費分攤", "採買費用怎麼分", "共用物品費用"]
        },
        zh: {
          tag: "帳單分攤迷霧",
          roast: "帳單自己不會分身，大家的記憶卻很會各自長出一套算法。再不寫清楚，月底就要開數學辯論賽。",
          comfort: "把項目、金額和分攤方式列出來，是求公平，不是計較。",
          playful: "「我們來幫房租／水電費找個固定算法吧，不然每個月都像在玩猜帳單😅」",
          soft: "「我想把房租和共用支出的分攤方式整理清楚，這樣大家都知道各自要付多少，也比較不會誤會。」",
          firm: "「從下個月開始，我希望依照這份明細和約好的比例分攤房租／帳單，付款日期也一起固定下來。」",
          insight: "用共同明細和事先約定的比例處理共享支出，比月底臨時追問更透明、也更少傷感情。"
        },
        en: {
          tag: "Bill-Splitting Fog",
          roast: "Bills don’t split themselves, but everyone’s memory seems to invent a different formula. Leave it vague and month-end becomes math debate night.",
          comfort: "Listing the costs and agreeing on a split is about fairness, not being petty.",
          playful: "“Can we pick one clear way to split rent and utilities? I’d love to retire from monthly bill-guessing 😅”",
          soft: "“I’d like us to write down how we split rent and shared expenses so everyone knows their amount and we avoid misunderstandings.”",
          firm: "“Starting next month, I’d like us to use this expense list and agreed split, with a fixed payment date for each bill.”",
          insight: "A shared expense list and agreed formula make recurring costs more transparent than sorting them out from memory at month-end."
        }
      },
      {
        id: "unexpected_guests",
        keywords: {
          en: ["brings guests over without asking", "brings people over without telling me", "overnight guests", "partner stays over every night", "has people over late", "keeps inviting friends over", "unexpected guests"],
          zh: ["不問就帶朋友回家", "沒先說就帶人來", "常常帶人回來過夜", "另一半常住", "朋友常來過夜", "半夜帶朋友回家", "室友帶人回來"]
        },
        zh: {
          tag: "客人突然登場",
          roast: "家裡不是隨機開放的快閃活動，室友也不該每次都靠門鈴才知道今天有訪客。",
          comfort: "共享空間裡的訪客會影響每個人，先通知和同意很合理。",
          playful: "「下次開派對支線前先發個預告吧😅 我也想知道家裡什麼時候會多一位嘉賓。」",
          soft: "「我不介意你邀朋友來，但臨時看到訪客會有點不自在。下次可以先告訴我，也確認一下時間嗎？」",
          firm: "「帶訪客或過夜前，請先和住在這裡的人確認；沒有說好的話，我不接受臨時留宿。」",
          insight: "把訪客的通知時間、過夜規則和共同同意說清楚，能同時尊重邀客者與其他住戶。"
        },
        en: {
          tag: "Surprise Guest Arrival",
          roast: "The home isn’t a random pop-up event, and housemates shouldn’t have to learn about tonight’s guest from the doorbell.",
          comfort: "Guests affect everyone who shares the space, so asking first is reasonable.",
          playful: "“Can I get a preview before the surprise-guest side quest next time? 😅 I’d like to know when we have company.”",
          soft: "“I’m okay with you having friends over, but surprise guests make me uncomfortable. Could you let me know and check the timing first?”",
          firm: "“Please check with the people who live here before inviting guests or having someone stay overnight. I’m not okay with unplanned overnight stays.”",
          insight: "Agreeing on notice, overnight stays, and shared consent respects both the person hosting and everyone living in the space."
        }
      },
      {
        id: "shared_food_belongings",
        keywords: {
          en: ["eats my food", "ate my food", "takes my things without asking", "uses my stuff without asking", "borrows my clothes without asking", "uses my toiletries", "never replaces shared supplies"],
          zh: ["偷吃我的食物", "吃掉我的食物", "沒問就拿我的東西", "沒問就用我的", "拿我的衣服穿", "用我的盥洗用品", "共用物品不補"]
        },
        zh: {
          tag: "共用不等於公用",
          roast: "對方把「住一起」自動翻譯成「東西都能拿」，這套字典可能需要更新一下。冰箱不是無限補給箱。",
          comfort: "清楚區分共用品和個人物品，可以省掉很多小摩擦。",
          playful: "「冰箱不是自動補貨系統喔😅 拿我的食物或用品前先問一下，吃完也記得補上～」",
          soft: "「我發現我的食物／用品有時會被拿走。下次使用前可以先問我嗎？如果是共用的，我們也可以約好怎麼補貨。」",
          firm: "「請不要未經同意拿用我的個人物品。共用品請依照約定分攤並補回。」",
          insight: "先界定哪些物品共用、哪些要先詢問，再約定補貨方式，能讓界線可操作。"
        },
        en: {
          tag: "Shared Doesn’t Mean Public",
          roast: "They translated “we live together” into “everything is up for grabs.” That dictionary needs an update; the fridge is not an infinite supply crate.",
          comfort: "Separating shared supplies from personal belongings prevents a lot of small resentments.",
          playful: "“The fridge isn’t an automatic restock system 😅 Please ask before taking my food or things, and replace what you finish.”",
          soft: "“I’ve noticed some of my food/stuff has been used. Could you ask first next time? We can also agree on how to replace shared supplies.”",
          firm: "“Please don’t use my personal belongings without permission. Shared supplies should be split and replaced as we agreed.”",
          insight: "Define what is shared, what needs permission, and how replacements work so the boundary is easy to follow."
        }
      },
      {
        id: "missed_deadlines_contribution",
        keywords: {
          en: ["misses every deadline", "keeps missing deadlines", "doesn't do their part", "does not do their part", "not pulling their weight at work", "coworker doesn't finish their work", "group member never submits their part"],
          zh: ["一直錯過期限", "一直拖延交件", "沒有完成分內工作", "同事都不做事", "同事沒完成工作", "組員沒交他的部分", "小組都我在做"]
        },
        zh: {
          tag: "期限消失術",
          roast: "期限每次都準時出現，該交的內容卻像加入了隱形斗篷。最後收尾的人通常還不是消失的那位。",
          comfort: "你不必默默替別人補洞；先把任務、期限和影響留下紀錄。",
          playful: "「提醒一下，這部分的期限快到了～可以回報目前進度和預計完成時間嗎？我好安排後續。」",
          soft: "「目前還缺你的部分，會影響整體進度。你可以在[時間]前完成，或現在告訴我需要調整哪個安排嗎？」",
          firm: "「為了避免影響交付，我會把目前分工、已完成項目和缺漏記錄下來，並依流程同步給負責人。」",
          insight: "指出缺少的交付物、具體期限和後續影響，能將抱怨轉成可追蹤的責任與安排。"
        },
        en: {
          tag: "Deadline Disappearing Act",
          roast: "The deadline always shows up on time; the work due keeps putting on an invisibility cloak. Somehow the cleanup usually lands on someone else.",
          comfort: "You don’t have to silently fill every gap; document the task, deadline, and impact.",
          playful: "“Quick check-in: this part is due soon. Could you share the progress and expected finish time so I can plan the next step?”",
          soft: "“Your part is still missing, and it affects the overall timeline. Can you finish by [time], or let me know what needs to change?”",
          firm: "“To protect the delivery, I’m documenting the assignments, completed work, and outstanding items, then I’ll update the project lead through the usual process.”",
          insight: "Naming the missing deliverable, a real deadline, and the impact turns frustration into trackable responsibilities and next steps."
        }
      },
      {
        id: "work_recognition",
        keywords: {
          en: ["my work goes unnoticed", "not recognized for my work", "boss takes me for granted", "passed over for promotion", "not included in decisions at work", "no one acknowledges my contribution"],
          zh: ["工作沒被肯定", "沒人看見我的付出", "主管不重視我的工作", "升遷不公平", "不讓我參與決策", "貢獻都被忽略", "努力都沒人看到"]
        },
        zh: {
          tag: "隱形貢獻者",
          roast: "成果明明有上線，功勞卻像開了隱形模式。公司不是看不見，只是你的付出需要從背景音變成清楚紀錄。",
          comfort: "提出具體成果和你想要的回饋，是爭取公平，不是在邀功。",
          playful: "「我把這段時間完成的成果整理成清單了，讓我的貢獻不要再玩躲貓貓😅 可以一起看一下嗎？」",
          soft: "「我想和你回顧一下最近完成的工作，以及我接下來的發展機會。這些成果希望能在評估時被納入考量。」",
          firm: "「我希望在下一次績效／升遷討論中，依照這些具體成果和責任範圍評估我的貢獻與發展。」",
          insight: "整理可驗證的成果、責任和影響，再提出明確的評估或回饋需求，比只表達不被重視更容易促成討論。"
        },
        en: {
          tag: "Invisible Contributor",
          roast: "The work shipped, but the credit seems to have switched on invisibility mode. Your contribution needs to move from background music to a clear record.",
          comfort: "Sharing concrete results and asking for feedback is about fairness, not bragging.",
          playful: "“I put together a list of what I’ve delivered so my contributions can stop playing hide-and-seek 😅 Could we review it?”",
          soft: "“I’d like to review the work I’ve completed and discuss my next growth opportunities. I hope these results can be included in the evaluation.”",
          firm: "“At the next performance/promotion discussion, I’d like my contribution and growth path assessed against these specific results and responsibilities.”",
          insight: "Document measurable results and responsibilities, then make a clear request for evaluation or feedback instead of only saying you feel overlooked."
        }
      },
      {
        id: "future_decisions",
        keywords: {
          en: ["can't agree where to live", "cannot agree where to live", "arguing about our future", "different plans for the future", "can't agree on moving", "cannot agree on moving", "arguing about holiday plans"],
          zh: ["對未來沒有共識", "住哪裡談不攏", "未來規劃不同", "要不要搬家談不攏", "為搬家一直吵", "假日安排一直吵", "過年去哪裡談不攏"]
        },
        zh: {
          tag: "未來規劃卡關中",
          roast: "一個在討論目的地，一個在守著原地，最後連行李都還沒打包，情緒先打包好了。",
          comfort: "重大決定可以先拆成偏好、限制和時間，不必一次逼出唯一答案。",
          playful: "「我們先別急著決定人生結局，先把各自最在意的兩件事列出來，看看有沒有交集吧😅」",
          soft: "「我知道我們對未來安排的想法不太一樣。我想先聽聽你最在意的是什麼，再一起找一個兼顧彼此需求的選項。」",
          firm: "「這件事對我很重要，我不想在還沒談清楚前就答應。讓我們訂個時間把選項和期限一起確認。」",
          insight: "先分清楚彼此的底線、偏好和現實限制，再比較選項，比把分歧解讀成誰不在乎誰更有效。"
        },
        en: {
          tag: "Future Plans Buffering",
          roast: "One person is discussing the destination while the other is guarding the starting point. The bags aren’t packed, but the emotions already are.",
          comfort: "Big decisions can be broken into preferences, constraints, and timing instead of forcing one answer immediately.",
          playful: "“Let’s not decide the whole life finale yet 😅 Can we each list the two things that matter most and see where they overlap?”",
          soft: "“I know we picture the future differently. I’d like to understand what matters most to you, then look for an option that respects both of our needs.”",
          firm: "“This matters a lot to me, and I don’t want to agree before we’ve talked it through. Let’s set a time to review the options and timeline.”",
          insight: "Separate each person’s non-negotiables, preferences, and practical constraints before treating a disagreement as proof that someone does not care."
        }
      },
      {
        id: "one_sided_friendship",
        keywords: {
          en: ["always reach out first", "only calls when they need something", "friend never checks in", "one-sided friendship", "always the one making plans", "friend only contacts me for favors"],
          zh: ["都是我主動聯絡", "只有有事才找我", "朋友都不關心我", "單方面付出", "每次都是我約", "只會找我幫忙"]
        },
        zh: {
          tag: "友情單向充電器",
          roast: "你像是友情裡的客服專線：平常沒人問候，一有需求就立刻被轉接。關係不該只有你在維護。",
          comfort: "你可以重視這段友情，也可以期待主動和關心是雙向的。",
          playful: "「友情客服今天輪到你值班囉😄 這次換你約我／主動敲我一下吧！」",
          soft: "「我發現最近大多是我主動聯絡和安排，久了會有點失落。我也希望你偶爾主動找我。」",
          firm: "「我不想再單方面維持聯絡了。接下來我會少主動一些，也看看我們能不能一起經營這段友情。」",
          insight: "清楚說出你希望對方做的主動行為，再觀察是否有持續回應，比猜測對方是否在乎更有依據。"
        },
        en: {
          tag: "One-Way Friendship Charger",
          roast: "You’re the friendship help desk: nobody checks in until they need something. A relationship shouldn’t be maintained by one person alone.",
          comfort: "You can value the friendship and still expect care and initiative to go both ways.",
          playful: "“Friendship help-desk shifts rotate 😄 Your turn to make the plan or check in with me next time!”",
          soft: "“I’ve noticed I’m usually the one reaching out and making plans, and I feel a little disappointed. I’d appreciate it if you checked in sometimes too.”",
          firm: "“I don’t want to be the only one keeping us in touch. I’m going to step back a bit and see if we can both put effort into this friendship.”",
          insight: "Ask for a specific reciprocal action, then look at the pattern of follow-through instead of trying to guess how much the other person cares."
        }
      },
      {
        id: "social_exclusion",
        keywords: {
          en: ["left me out", "wasn't invited", "was not invited", "everyone went without me", "excluded me from the plans", "not included in the group chat", "they made plans without me"],
          zh: ["沒邀我", "沒有邀我", "沒揪我", "大家都去了沒找我", "把我排除在外", "沒有加我進群組", "背著我約"]
        },
        zh: {
          tag: "聚會名單漏接員",
          roast: "大家的行程都排好了，你卻像收到一張不存在的邀請函。被漏掉的感覺，真的不是一句「想太多」就能消失。",
          comfort: "先確認是刻意排除還是單純漏掉，再決定要怎麼看待這段關係。",
          playful: "「我看到你們有約，下次也把我算進名單吧～我也想一起去。」",
          soft: "「我知道你們最近有一起出去，發現沒被邀請時我有點失落。下次如果方便，也想一起參加。」",
          firm: "「如果這次是刻意不邀我，我希望你直接告訴我；我不想一直靠猜測理解我們的關係。」",
          insight: "先用平靜的方式確認情況，能避免把一次漏邀直接當成長期排斥，也讓對方有機會說清楚。"
        },
        en: {
          tag: "Invitation List Glitch",
          roast: "Everyone’s plans are set and you got the invitation that apparently doesn’t exist. Being left out doesn’t disappear just because someone says “you’re overthinking.”",
          comfort: "Check whether it was intentional or an oversight before deciding what it means for the friendship.",
          playful: "“I saw you all went out—count me in next time! I’d love to come along.”",
          soft: "“I heard you got together recently, and I felt a little left out when I wasn’t invited. I’d like to join next time if there’s room.”",
          firm: "“If I was intentionally left out, I’d rather you tell me directly. I don’t want to keep guessing where we stand.”",
          insight: "A calm check-in keeps one missed invitation from becoming an assumed pattern while giving the other person a chance to explain."
        }
      },
      {
        id: "family_overcontrol",
        keywords: {
          en: ["parents keep deciding for me", "family keeps controlling my choices", "parents won't respect my decision", "in-laws keep interfering", "mother-in-law keeps criticizing", "family keeps pressuring me to"],
          zh: ["爸媽替我決定", "父母一直控制我", "不尊重我的決定", "長輩一直干涉", "婆婆一直批評", "家人一直逼我", "家人干涉我的選擇"]
        },
        zh: {
          tag: "人生代辦越權中",
          roast: "家人把關心一路升級成代替你按下確認鍵，彷彿你的人生設定忘了交還本人管理。",
          comfort: "你可以感謝家人的關心，同時保留自己做決定的權利。",
          playful: "「謝謝人生顧問團的提案😅 這題我先自己決定，有進度再跟你們更新。」",
          soft: "「我知道你是關心我，也有聽到你的建議。不過這個決定我想自己做，之後會跟你分享結果。」",
          firm: "「我已經做出決定，請不要再替我安排或施壓。若話題持續被逼迫，我會先結束這次討論。」",
          insight: "把感謝、決定權和停止施壓的界線分開說，能保留關係又不交出自主權。"
        },
        en: {
          tag: "Life Admin Overreach",
          roast: "Your family upgraded concern into clicking “confirm” on your behalf, as if your life settings forgot to return admin access to you.",
          comfort: "You can appreciate their concern and still keep the right to make your own decisions.",
          playful: "“Thanks to the life-advisor panel for the proposal 😅 I’ll make this call myself and share an update later.”",
          soft: "“I know you care, and I’ve heard your advice. I want to make this decision myself, and I’ll share how it goes.”",
          firm: "“I’ve made my decision. Please stop arranging this for me or pressuring me about it. If it continues, I’m going to end this conversation for now.”",
          insight: "Separate appreciation, decision ownership, and the limit on continued pressure to protect both the relationship and your autonomy."
        }
      },
      {
        id: "after_hours_work_messages",
        keywords: {
          en: ["messages me after work", "texts me late at night about work", "work messages on weekends", "expects me to reply after hours", "contacted me on my day off about work", "non-urgent work messages after hours"],
          zh: ["下班還傳工作訊息", "下班後還找我工作", "週末傳工作訊息", "半夜傳工作訊息", "休假還要回工作", "期待我下班回覆"]
        },
        zh: {
          tag: "下班後還在待命",
          roast: "下班時間到了，工作訊息卻像忘記打卡一樣繼續出現。你的休息時間不是公司的備用辦公室。",
          comfort: "非緊急事情可以等到上班時間處理；你可以先說明自己的可聯絡時段。",
          playful: "「我現在切換成休息模式啦😅 這件事我明天上班後再接球，可以嗎？」",
          soft: "「我下班後通常不會即時查看工作訊息。非緊急事項我會在下一個工作時段處理；若有急件，請用我們約定的緊急聯絡方式。」",
          firm: "「請把非緊急工作訊息留到工作時間。我休假期間不會即時回覆，會在下一個工作日跟進。」",
          insight: "把可聯絡時段和真正的緊急管道說清楚，能保護休息時間，也讓必要的急件有明確處理方式。"
        },
        en: {
          tag: "Always-On After Hours",
          roast: "The workday ended, but those messages forgot to clock out. Your personal time is not the company’s backup office.",
          comfort: "Non-urgent work can wait until working hours; it is reasonable to state when you are available.",
          playful: "“I’ve switched to rest mode 😅 I’ll pick this up when I’m back online tomorrow, okay?”",
          soft: "“I don’t usually check work messages after hours. I’ll handle non-urgent items during my next work period; please use our agreed urgent channel for emergencies.”",
          firm: "“Please keep non-urgent work messages to working hours. I’m not available for real-time replies on my days off and will follow up on my next workday.”",
          insight: "State your availability and the agreed emergency channel so rest stays protected while genuinely urgent issues have a clear route."
        }
      },
      {
        id: "public_email_callout",
        keywords: {
          en: ["cc'd my boss to point out", "cced my boss to point out", "called me out in a group email", "passive-aggressive email at work", "copied the whole team on a minor mistake", "publicly corrected my typo at work"],
          zh: ["副本主管指責我", "寄群組信公開指責", "把小錯誤抄送給主管", "用陰陽怪氣的郵件", "在全公司信件糾正我", "抄送全組糾正小錯"]
        },
        zh: {
          tag: "抄送名單擴大術",
          roast: "一個小問題被加上整排收件人，彷彿信件抄送越多人，事情就會越快變好。",
          comfort: "先處理實際錯誤，再把後續溝通拉回直接、合適的管道。",
          playful: "「收到，我會把這個細節修正好。下次小地方可以先直接敲我嗎？這樣不用讓整個收件匣一起開會😅」",
          soft: "「謝謝提醒，我會修正這個部分。之後如果是單一細節的問題，可以先直接告訴我，我會更快處理。」",
          firm: "「我已修正指出的問題。若後續有具體修改需求，請直接列出內容和期限；我也希望小型更正先透過直接訊息溝通。」",
          insight: "先承接可核實的工作問題，再提出更有效的溝通管道，避免陷入對語氣或動機的爭辯。"
        },
        en: {
          tag: "The CC List Expansion Pack",
          roast: "One small issue got a whole audience, as if adding more recipients automatically fixes the work faster.",
          comfort: "Address the actual error first, then move future feedback to a direct and appropriate channel.",
          playful: "“Got it—I’ll fix that detail. Could you message me directly about small items next time? Then the whole inbox doesn’t have to attend the meeting 😅”",
          soft: "“Thanks for flagging it; I’ll correct that part. For a single detail next time, could you tell me directly so I can address it quickly?”",
          firm: "“I’ve corrected the issue you identified. For future requests, please list the specific change and deadline; I’d also like minor corrections handled directly first.”",
          insight: "Acknowledge verifiable work issues and suggest a better feedback channel without getting pulled into an argument about tone or intent."
        }
      },
      {
        id: "invisible_mental_load",
        keywords: {
          en: ["mental load at home", "emotional labor at home", "only one tracking appointments", "I have to remember everything for the family", "planning all the family events", "invisible household labor", "I manage the household calendar"],
          zh: ["家裡的心智負荷", "家務心智負擔", "情緒勞動", "只有我記得家裡的事", "家裡大小事都要我安排", "家庭行程都我在記", "只有我在安排看診和採買"]
        },
        zh: {
          tag: "全家行程管理員",
          roast: "家裡的事情不是自己排進行事曆的，但好像只有你被默認安裝了提醒功能。",
          comfort: "看不見的規劃和記憶工作也是工作，提出分工不是在挑剔。",
          playful: "「我可以卸載一下『全家提醒小幫手』嗎😅 這些行程和採買我們來分區負責吧。」",
          soft: "「我最近一直在記行程、預約和家裡要補的東西，覺得有點累。我希望我們把這些固定工作列出來，再一起分配負責人。」",
          firm: "「我不能再一個人負責記住和安排所有家務。請從這週開始固定負責其中幾項，並自行追蹤需要的時間和補貨。」",
          insight: "把隱形的記憶、追蹤和安排工作列成清單，再分配完整責任，比只分派臨時跑腿更能減少負擔。"
        },
        en: {
          tag: "Household Calendar Manager",
          roast: "Household tasks don’t schedule themselves, but apparently you’re the only one with the reminder feature installed.",
          comfort: "Planning and remembering are real work too; asking to share them is not nitpicking.",
          playful: "“Can I uninstall the ‘family reminder app’ for a bit? 😅 Let’s split the appointments, errands, and restocking by owner.”",
          soft: "“I’ve been keeping track of appointments, plans, and supplies, and I’m getting tired. Could we list these recurring tasks and decide who owns each one?”",
          firm: "“I can’t keep being the only person who remembers and organizes all the household tasks. Starting this week, please take ownership of a few recurring items, including tracking when they need attention.”",
          insight: "List the remembering, tracking, and planning work, then assign ownership of whole tasks instead of only occasional errands."
        }
      },
      {
        id: "holiday_family_pressure",
        keywords: {
          en: ["family expects us every holiday", "pressure to spend every holiday with family", "guilt trip about visiting family", "parents demand we visit for every holiday", "arguing over which family to visit", "in-laws expect every holiday", "holiday visits are never fair"],
          zh: ["每個節日都要回婆家", "每個節日都要回娘家", "家人要求每個假日都回去", "被情緒勒索回家過節", "過年一定要去哪一家", "為了去哪邊過節吵架", "每次過節都只有我配合"]
        },
        zh: {
          tag: "節日行程拉鋸戰",
          roast: "節日原本是休息日，最後卻變成跨家族巡迴賽，還附贈一題『誰比較孝順』的加考。",
          comfort: "你可以珍惜家人，也可以討論符合你們時間、預算和體力的安排。",
          playful: "「今年的節日不辦家族巡迴賽啦😅 我們先排好時間，再輪流安排探訪好嗎？」",
          soft: "「我知道大家都希望一起過節，但每次都照同一種安排讓我有點吃不消。我想和你先討論時間、交通和輪流探訪的方式。」",
          firm: "「今年我們只能安排這些日期探訪。其他時間會留給休息或自己的計畫，請不要把沒有出席解讀成不在乎家人。」",
          insight: "先對齊兩人的時間、交通和休息需求，再提出可預期的輪替安排，比臨近節日才回應壓力更容易維持公平。"
        },
        en: {
          tag: "Holiday Itinerary Tug-of-War",
          roast: "A holiday was supposed to be a day off; somehow it became a family tour with an extra exam on who is the most devoted.",
          comfort: "You can care about family and still plan around your time, budget, and energy.",
          playful: "“Can we skip the family world tour this year? 😅 Let’s plan the dates first and take turns arranging visits.”",
          soft: "“I know everyone wants to celebrate together, but repeating the same plan every time is wearing me out. Could we talk through timing, travel, and a fair rotation?”",
          firm: "“We can visit on these dates this year. I’m keeping the other days for rest or our own plans; not attending every gathering doesn’t mean we don’t care.”",
          insight: "Agree on time, travel, and rest needs first, then make a predictable rotation instead of negotiating under last-minute pressure."
        }
      },
      {
        id: "friend_group_messenger",
        keywords: {
          en: ["asked me to pass a message between them", "put me in the middle of their argument", "friend wants me to take sides", "dragged me into their fight", "friends expect me to mediate", "being used as the messenger between friends"],
          zh: ["叫我幫忙傳話", "被夾在朋友中間", "叫我選邊站", "被迫替朋友評理", "朋友吵架要我調停", "把我拖進他們的爭執", "要我替他跟對方說"]
        },
        zh: {
          tag: "友情傳聲筒被徵召",
          roast: "兩個人有話不直接說，卻把你升職成免費客服、傳聲筒兼裁判。這份差事看起來沒有排休。",
          comfort: "你可以關心雙方，但不必替任何人傳話或選邊。",
          playful: "「我友情支援可以，傳聲筒和裁判今天都沒有排班😅 你直接跟對方說會比較清楚。」",
          soft: "「我知道你想把事情處理好，但我不太適合替你們傳話。我願意聽你整理想法，不過還是希望你直接和對方談。」",
          firm: "「我不會替任何一方轉述或站隊。請直接和當事人溝通；如果你們都同意，我可以陪你們一起談。」",
          insight: "拒絕三角傳話、提供雙方同意的共同對話選項，能支持朋友又不替他們承擔溝通責任。"
        },
        en: {
          tag: "Friend-Group Messenger Duty",
          roast: "Two people avoid talking directly and somehow promote you to unpaid help desk, messenger, and referee—with no days off.",
          comfort: "You can care about both people without carrying messages or choosing a side.",
          playful: "“I can offer friend support, but messenger and referee shifts aren’t open today 😅 It’ll be clearer if you tell them directly.”",
          soft: "“I know you want to work this out, but I’m not the best person to pass messages between you. I can help you sort out what you want to say, though.”",
          firm: "“I’m not going to relay messages or take sides. Please talk directly with the person involved; if you both agree, I can sit in for a conversation.”",
          insight: "Decline the message relay while offering a conversation everyone agrees to, so you can be supportive without owning their communication."
        }
      },
      {
        id: "parent_teen_tech_chores",
        keywords: {
          en: ["teen is always on their phone", "child won't put the phone down", "arguing about screen time", "teen won't do chores", "child ignores every instruction", "fighting about bedtime"],
          zh: ["小孩一直玩手機", "孩子一直滑手機", "一直為手機吵架", "孩子不做家事", "小孩不聽指令", "每天為睡覺時間吵架", "作業拖到很晚"]
        },
        zh: {
          tag: "家庭規則拉鋸賽",
          roast: "手機、家事和睡覺時間輪流登場，家裡每天都像在重播同一集。看來光靠提醒，已經無法讓規則自己落地。",
          comfort: "先挑一條最重要的規則談清楚，比一次把所有問題都拿出來吵更有效。",
          playful: "「我們今天先不要重播『手機／家事大戰』，一起訂一個大家都做得到的規則好嗎？」",
          soft: "「我知道你想自己安排時間，我也需要家裡的事情有人一起負責。我們一起訂好手機／家事的時間和分工吧。」",
          firm: "「我們約定的手機／家事時間需要照做；如果有例外，先說好，不要等到最後才爭執。」",
          insight: "把抽象的『聽話一點』換成一條清楚、可協商又能執行的家庭規則，能降低每天重複爭吵。"
        },
        en: {
          tag: "Family Rule Replay",
          roast: "Phones, chores, and bedtime keep taking turns on stage; the household is replaying the same episode daily. Reminders alone clearly aren’t making the rules stick.",
          comfort: "Pick the most important rule to discuss first instead of bringing every frustration into one argument.",
          playful: "“Can we skip today’s rerun of the phone/chores debate and agree on one rule everyone can actually follow?”",
          soft: "“I know you want to manage your own time, and I need everyone to share the household responsibilities. Can we agree on a phone/chores schedule together?”",
          firm: "“We need to follow the phone/chores time we agreed on. If something needs to change, let’s discuss it before the deadline, not during another argument.”",
          insight: "Replace a vague demand to “listen” with one specific, negotiable rule that everyone can follow and revisit."
        }
      }
    ];

    const quickScenario = quickScenarios.find(scenario =>
      [...scenario.keywords.en, ...scenario.keywords.zh].some(keyword => matchKeyword(lower, keyword))
    );
    if (quickScenario) {
      activePresetId = null;
      const copy = quickScenario[isEn ? "en" : "zh"];
      roastTag.textContent = copy.tag;
      roastStars.textContent = "★★★★☆";
      roastContent.textContent = copy.roast;
      comfortContent.textContent = copy.comfort;
      currentTactics = [
        { type: isEn ? "Playful" : "幽默調侃型", tag: isEn ? "Keep it light" : "輕鬆提醒", text: copy.playful },
        { type: isEn ? "Soft" : "溫和直白型", tag: isEn ? "Warm but clear" : "溫和表達", text: copy.soft },
        { type: isEn ? "Firm" : "明確底線型", tag: isEn ? "Set a boundary" : "清楚設界線", text: copy.firm }
      ];
      insightContent.textContent = copy.insight;
      currentTacticIndex = 0;
      renderTacticsTabs();
      renderThinkingLens(completeThinkingLens(null, text, isEn));
      placeholderState.style.display = "none";
      resultsContainer.style.display = "grid";
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

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
      "borrow", "borrowed", "borrowing", "pay back", "owe", "owes", "owed",
      "split the bill", "lend", "lent", "debt", "unpaid", "pay me back",
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
      "ghost", "ghosted", "ghosting", "left on read", "no reply", "no response",
      "won't reply", "doesn't reply", "not replying", "ignoring me", "ignored me",
      "text me back", "reply to me", "已讀不回", "不回訊息", "不回我", "不理我",
      "人間蒸發", "回很慢", "不看訊息"
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
      if ((matchKeyword(lower, "遲到") || matchKeyword(lower, "always late") || matchKeyword(lower, "keeps arriving late") || matchKeyword(lower, "made me wait") || matchKeyword(lower, "kept me waiting")) && item.id === "friend_late") { matchedItem = item; break; }
      if ((matchKeyword(lower, "隨便") || matchKeyword(lower, "吃什麼") || matchKeyword(lower, "where should we eat") || matchKeyword(lower, "where to eat") || matchKeyword(lower, "pick a restaurant")) && item.id === "friend_any") { matchedItem = item; break; }
      if ((matchKeyword(lower, "下班") || matchKeyword(lower, "急件") || matchKeyword(lower, "urgent") || matchKeyword(lower, "weekend work") || matchKeyword(lower, "work this weekend")) && item.id === "work_urgent") { matchedItem = item; break; }
      if ((matchKeyword(lower, "甩鍋") || matchKeyword(lower, "推責") || matchKeyword(lower, "blame") || matchKeyword(lower, "pushed the responsibility")) && item.id === "work_blame") { matchedItem = item; break; }
      if ((matchKeyword(lower, "組員") || matchKeyword(lower, "組員擺爛") || matchKeyword(lower, "groupmate") || matchKeyword(lower, "teammate") || matchKeyword(lower, "freeload") || matchKeyword(lower, "slacker")) && item.id === "campus_freerider") { matchedItem = item; break; }
      if ((matchKeyword(lower, "教授") || matchKeyword(lower, "加簽") || matchKeyword(lower, "professor") || matchKeyword(lower, "prereq")) && item.id === "campus_late_add") { matchedItem = item; break; }
      if ((matchKeyword(lower, "碗") || matchKeyword(lower, "水槽") || matchKeyword(lower, "dishes") || matchKeyword(lower, "sink")) && item.id === "living_dishes") { matchedItem = item; break; }
      if (["mom", "mommy", "mother", "dad", "daddy", "father", "parents", "family", "sister", "brother", "siblings", "媽", "爸", "父母", "爸媽", "家人", "兄弟", "姐妹", "母親", "父親"].some(k => matchKeyword(lower, k)) && item.id === "daily_family") { matchedItem = item; break; }
      if (["girlfriend", "boyfriend", "fiance", "fiancé", "husband", "wife", "romantic partner", "dating", "crush", "break up", "broke up", "breakup", "marriage", "married", "wedding", "divorce", "曖昧", "分手", "告白", "女朋友", "男朋友", "結婚", "離婚", "喜歡的人"].some(k => matchKeyword(lower, k)) && item.id === "daily_relationship") { matchedItem = item; break; }
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
      "girlfriend", "boyfriend", "fiance", "fiancé", "husband", "wife", "romantic partner",
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
    // Keep the offline fallback quick: reflect the user's situation, roast the problem lightly,
    // and provide a soft reply without turning the flow into a clarification chat.
    activePresetId = null;
    const normalizedIssue = text.replace(/\s+/g, " ").trim();
    const userIssue = normalizedIssue.length > 90 ? `${normalizedIssue.slice(0, 90)}…` : normalizedIssue;
    const universalResult = {
      roast: {
        tagTitle: isEn ? "Patience Under Review" : "耐性正在考驗",
        stars: "★★★★☆",
        comment: isEn 
          ? `“${userIssue}” is the kind of situation that makes patience file a formal complaint. You’re allowed to be annoyed; let’s give it a reply that doesn’t make things worse.`
          : `「${userIssue}」真的很考驗耐性，連耐性本人都想先請個假。你會覺得煩很正常，回覆時先把重點講清楚就好。`,
        comfortTip: isEn
          ? "Keep the tone soft and the boundary clear. You don't need a perfect speech."
          : "語氣可以放軟，界線一樣說清楚；不用把回覆想得太複雜。"
      },
      diplomacy: {
        tactics: [
          {
            type: isEn ? "Playful Deflection" : "幽默調侃型",
            tag: isEn ? "Diffuses Tension・Maintains Face" : "軟性提醒・保留面子",
            text: isEn
              ? `Hey, about “${userIssue}”—that caught me a little off guard 😅 Could we handle it a bit differently next time?`
              : `嗨，關於「${userIssue}」這件事，我剛剛有點措手不及😅 下次我們可以換個方式處理嗎？`
          },
          {
            type: isEn ? "Honest Boundary" : "真誠表達型",
            tag: isEn ? "Express Discomfort Directly" : "表達感受・建立界線",
            text: isEn
              ? `Hey, about “${userIssue}”—I know you may not have meant it that way, but it did bother me. Could you check with me first next time?`
              : `嗨，關於「${userIssue}」，我知道你可能不是故意的，但這樣確實讓我有點困擾。下次可以先跟我確認一下嗎？`
          },
          {
            type: isEn ? "Firm Standard" : "明確原則型",
            tag: isEn ? "Mutual Respect Ground Rule" : "互相尊重・確立原則",
            text: isEn
              ? `About “${userIssue}”, I’d like us to agree on a clearer approach for next time. That would make things easier for both of us.`
              : `關於「${userIssue}」，我希望下次能先把做法說好，這樣彼此都比較好安排，也比較不會再有誤會。`
          }
        ],
        insight: isEn
          ? "A short description is enough for a quick draft. You can personalize the wording before sending it."
          : "簡短描述就能先產生一版快速回覆；傳送前再依照你們平常的相處方式微調即可。"
      },
    };

    roastTag.textContent = universalResult.roast.tagTitle;
    roastStars.textContent = universalResult.roast.stars;
    roastContent.textContent = universalResult.roast.comment;
    comfortContent.textContent = universalResult.roast.comfortTip;

    currentTactics = universalResult.diplomacy.tactics;
    insightContent.textContent = universalResult.diplomacy.insight;
    currentTacticIndex = 0;
    renderTacticsTabs();
    renderThinkingLens(completeThinkingLens(null, text, isEn));

    placeholderState.style.display = "none";
    resultsContainer.style.display = "grid";
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast(UI_STRINGS[currentLang].toastDone);
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



  applyLanguage(currentLang);
  switchCategory("friends");
});
