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
    toastCopyFail: "⚠️ 複製失敗，請長按文字手動複製。",
    toastEmpty: "⚠️ 請先輸入你的生氣真心話！",
    toastDone: "✨ 範本回覆已整理完成！",
    unmatchedText: "抱歉，我目前找不到適合這個情境的範本。請換個方式描述，並盡量說明發生了什麼事或對方做了什麼。"
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
    toastCopyFail: "⚠️ Copy failed — please select and copy manually.",
    toastEmpty: "⚠️ Please enter your thoughts first!",
    toastDone: "✨ Template replies are ready!",
    unmatchedText: "Sorry, I couldn’t find a suitable template for that situation. Please try describing it another way, including what happened or what the other person did."
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

    // 已顯示結果時，切換語言要讓回覆跟著換語言，且不覆蓋使用者輸入的文字。
    if (resultsContainer.style.display !== "none") {
      if (activePresetId) {
        const item = Object.values(PRESET_CATEGORIES[lang])
          .flatMap(category => category.items || [])
          .find(i => i.id === activePresetId);
        if (item) {
          if (item.quickScenario) {
            generateOfflineIntelligent(rantInput.value.trim() || item.rant);
          } else {
            applyPresetResult(item);
          }
        }
      } else if (rantInput.value.trim()) {
        generateOfflineIntelligent(rantInput.value.trim());
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
        activatePreset(item);
      });
      presetChipsContainer.appendChild(chip);
    });
  }

  function activatePreset(item) {
    rantInput.value = item.rant;
    updateRageMeter(item.rant, item.rageLevel);
    if (item.quickScenario) {
      generateOfflineIntelligent(item.rant);
    } else {
      applyPresetResult(item);
    }
    // 產生流程內部會把 activePresetId 重設，所以放在最後才恢復，chip 才會保持高亮。
    activePresetId = item.id;
    renderPresetChips();
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
    if (placeholderState.style.display !== "none") {
      document.getElementById("placeholderText").textContent = UI_STRINGS[currentLang].placeholderText;
    }
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

    const fallbackCopy = () => {
      const helper = document.createElement("textarea");
      helper.value = textToCopy;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(helper);
      showToast(ok ? UI_STRINGS[currentLang].toastCopied : UI_STRINGS[currentLang].toastCopyFail);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(UI_STRINGS[currentLang].toastCopied);
      }).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
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
      renderPresetChips(); // chip 高亮跟隨 activePresetId 的最新狀態
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
   * Tier-2 模糊比對工具：把關鍵詞切成詞幹（英文）或二元組（中文），
   * 用「詞彙重疊計分」找出最接近的情境，處理自然說法與範本關鍵詞不同字的情況。
   * 門檻刻意偏嚴格：寧可維持「找不到範本」，也不隨便誤答。
   */
  const FUZZY_STOP = new Set([
    "the", "and", "for", "you", "your", "with", "this", "that", "from", "they", "them",
    "their", "was", "were", "are", "but", "not", "any", "all", "one", "its", "his", "her",
    "our", "too", "also", "just", "still", "than", "then", "who", "how", "why", "what",
    "when", "been", "being", "these", "those", "into", "she", "him", "had", "has", "have",
    "keep", "keeps", "keeping", "always", "never", "really", "very", "much", "some",
    "more", "most", "other", "another", "will", "would", "can", "could", "should",
    "about", "there", "here", "get", "gets", "got", "let", "puts", "put"
  ]);

  const fuzzyEnTokens = (kw) => kw.toLowerCase().replace(/'/g, "").split(/[^a-z0-9]+/)
    .filter(w => w.length >= 3 && !FUZZY_STOP.has(w));

  const fuzzyEnStem = (w) => {
    if (w.length > 4 && w.endsWith("ing")) return w.slice(0, -3);
    if (w.length > 4 && /(ed|es)$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith("s")) return w.slice(0, -1);
    return w;
  };

  const fuzzyZhBigrams = (str) => {
    const segs = str.match(/[\u3400-\u9fff]+/g) || [];
    const out = new Set();
    for (const seg of segs) {
      for (let i = 0; i < seg.length - 1; i++) out.add(seg.slice(i, i + 2));
    }
    return out;
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
          en: ["body shaming", "comments on my body", "comments on my appearance", "making fun of my body", "keeps teasing me about my body", "makes fun of my appearance"],
          zh: ["拿我的身材開玩笑", "評論我的外表", "一直笑我的外表", "拿我外表開玩笑", "拿我的外表開玩笑", "開我的身材玩笑", "嘲笑我的外表"]
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
        id: "friend_teasing_annoyance",
        keywords: {
          en: ["friend's teasing annoys me", "my friend's teasing makes me feel irritated", "friends teasing makes me feel annoyed", "my friend keeps teasing me", "friend keeps making jokes about me", "friend keeps making fun of me", "jokes at my expense", "friends keep teasing me", "their teasing is getting on my nerves"],
          zh: ["朋友的調侃讓我感到很煩躁", "朋友的調侃讓我感到很煩", "朋友的調侃讓我很煩躁", "朋友的調侃讓我很煩", "朋友一直調侃我", "朋友一直拿我開玩笑", "朋友開玩笑讓我不舒服", "朋友的玩笑很煩", "被朋友嘲笑很煩"]
        },
        zh: {
          tag: "玩笑音量太大",
          roast: "對方把調侃當成友情快捷鍵，卻忘了接收的人也有音量和耐心上限。",
          comfort: "覺得煩不代表你開不起玩笑；你可以指出哪些玩笑讓你不舒服。",
          playful: "「這個梗我今天真的笑不出來，先換個話題吧😅」",
          soft: "「我知道你可能是想開玩笑，但最近這種調侃讓我有點煩躁。可以先不要拿這件事說笑嗎？」",
          firm: "「我不喜歡被這樣調侃，請停止。如果又繼續，我會先離開／結束這段對話。」",
          insight: "直接描述玩笑的影響並說明希望停止的內容，比假裝不在意或反過來攻擊對方更能讓界線清楚。"
        },
        en: {
          tag: "Joke Volume Too High",
          roast: "Your friend treats teasing like a friendship shortcut and forgot the person receiving it has a limit on patience and volume.",
          comfort: "Being annoyed doesn’t mean you can’t take a joke; you can name which jokes don’t feel good.",
          playful: "“That one’s not landing for me today—can we switch topics? 😅”",
          soft: "“I know you may mean it as a joke, but this kind of teasing has been getting on my nerves. Could you stop joking about it for now?”",
          firm: "“I don’t like being teased about this. Please stop. If it continues, I’m going to leave/end the conversation.”",
          insight: "Name the effect of the joke and the change you want instead of pretending it is fine or attacking the person back."
        }
      },
      {
        id: "need_social_break",
        keywords: {
          en: ["I don't want to socialize", "I do not want to socialize", "don't feel like socializing", "do not feel like socializing", "don't want to hang out with anyone", "need to be alone tonight", "not up for plans"],
          zh: ["我不想社交", "不想社交", "不想跟人出去", "不想和人出去", "不想參加聚會", "今天不想見人", "只想自己待著"]
        },
        zh: {
          tag: "社交邀請先暫停",
          roast: "你的社交電量顯示低電量，今天不必硬開省電模式還假裝滿格。",
          comfort: "你可以拒絕邀約而不必編理由；想獨處是合理的選擇。",
          playful: "「我今天先跟社交行程請個假，改天電量回來再約你😅」",
          soft: "「謝謝你邀我，但我今天想自己休息，就先不去了。希望你們玩得開心！」",
          firm: "「我今天不參加，也不想再被勸了。等我有空、想出門時會再聯絡你。」",
          insight: "簡短拒絕並清楚表達是否想改約，可以保留選擇權，也避免不必要的解釋。"
        },
        en: {
          tag: "Social Plans on Pause",
          roast: "Your social battery is flashing low; you don’t have to pretend it’s fully charged while running on power-saving mode.",
          comfort: "You can decline an invitation without making up a reason. Wanting time alone is valid.",
          playful: "“I’m taking a little vacation from plans today—let’s hang out when my social battery is back 😅”",
          soft: "“Thanks for inviting me, but I’m going to take some time to myself today. I hope you have a great time!”",
          firm: "“I’m not coming today, and I don’t want to be talked into it. I’ll reach out when I’m free and feel like going out.”",
          insight: "A brief no, with or without a reschedule, protects your choice without requiring a long explanation."
        }
      },
      {
        id: "socializing_feels_annoying",
        keywords: {
          en: ["socializing feels annoying", "socializing is annoying", "socializing is such a hassle", "social plans are a hassle", "socializing feels like a chore", "social interaction is annoying", "people are getting on my nerves", "dealing with people is exhausting and annoying", "I find socializing irritating"],
          zh: ["我覺得社交很煩", "社交很煩", "社交讓我覺得很煩", "社交好麻煩", "社交太麻煩", "社交很麻煩", "人際好麻煩", "跟人相處很煩", "人際互動讓我很煩", "最近覺得跟人說話很煩"]
        },
        zh: {
          tag: "人際通知太密集",
          roast: "最近每段對話都像跳出通知，難怪你想把整個人際系統先切成勿擾模式。",
          comfort: "覺得社交很煩時，可以先減少刺激、縮短行程，看看自己需要的是休息還是更合適的相處方式。",
          playful: "「我最近的人際通知有點爆量，先讓我切到勿擾模式一下😅」",
          soft: "「我最近比較需要安靜一點，可能會少參加一些活動。不是針對你，我想先把自己的步調調整好。」",
          firm: "「我現在不想繼續這個聚會／話題，先到這裡。請尊重我想休息一下的決定。」",
          insight: "先降低當下的社交負荷，再分辨是特定活動、互動方式還是整體疲勞讓你煩躁，不必立刻做出長期判斷。"
        },
        en: {
          tag: "Too Many People Notifications",
          roast: "Lately every conversation feels like another pop-up notification. No wonder you want to put your whole social system on Do Not Disturb.",
          comfort: "When socializing feels annoying, try fewer demands or shorter plans and notice whether you need rest or a different kind of interaction.",
          playful: "“My people-notifications are a little overloaded lately—putting myself on Do Not Disturb for a bit 😅”",
          soft: "“I’ve been needing more quiet lately, so I may join fewer plans for a while. It’s not about you; I’m trying to find a pace that works for me.”",
          firm: "“I don’t want to continue this gathering/topic right now. I’m going to stop here; please respect that I need a break.”",
          insight: "Lower the immediate social load, then notice whether a particular activity, interaction style, or general fatigue is driving the irritation before making a long-term judgment."
        }
      },
      {
        id: "socializing_feels_tiring",
        keywords: {
          en: ["socializing feels tiring", "socializing is exhausting", "socializing is draining", "feel drained after socializing", "being around people wears me out", "social events take all my energy"],
          zh: ["我覺得社交很累", "社交很累", "社交讓我好累", "跟人相處很耗能", "社交很耗能", "每次社交後都很累", "聚會讓我精疲力盡"]
        },
        zh: {
          tag: "社交後需要充電",
          roast: "聚會結束後別人續攤，你的靈魂已經先一步回家插上充電線。",
          comfort: "社交後需要獨處恢復很正常；安排休息時間不代表你不重視朋友。",
          playful: "「今天的社交電量用完啦，我先回去跟沙發和充電器團聚，下次再約😅」",
          soft: "「我很想和你保持聯絡，但最近社交後需要比較多時間恢復。我們可以約短一點，或改成比較安靜的活動嗎？」",
          firm: "「我今天會先休息，不參加續攤。之後邀約我會看自己的時間和精力再決定。」",
          insight: "在行程前後預留休息、縮短聚會或選擇安靜活動，可以讓社交更符合自己的精力，而不必完全切斷關係。"
        },
        en: {
          tag: "Post-Social Recharge Needed",
          roast: "Everyone else is planning the after-party while your soul has already gone home to plug itself in.",
          comfort: "Needing solo recovery after socializing is normal; making room to rest doesn’t mean you don’t value your friends.",
          playful: "“My social battery is out for today—I’m heading home to reunite with my couch and charger. Next time 😅”",
          soft: "“I want to stay in touch, but I’ve been needing more time to recharge after social plans. Could we keep it shorter or choose something quieter?”",
          firm: "“I’m going to rest tonight, so I’m skipping the after-party. I’ll decide about future plans based on my time and energy.”",
          insight: "Build in recovery time, shorten plans, or choose quieter activities so socializing fits your energy without cutting off connection entirely."
        }
      },
      {
        id: "extended_relative_prying",
        keywords: {
          en: ["relatives keep asking when I'm getting married", "aunt keeps asking when I'll have kids", "uncle keeps asking about my salary", "grandparents keep questioning my relationship", "relatives keep prying into my personal life", "relatives keep asking when I'm having children"],
          zh: ["親戚一直問我什麼時候結婚", "阿姨一直問我什麼時候生小孩", "叔叔一直問我的薪水", "長輩一直追問我的感情", "親戚一直問東問西", "親戚一直打聽我的私事"]
        },
        zh: {
          tag: "親戚提問連發",
          roast: "家族聚會突然變成人生進度報告會，問題一題接一題，彷彿答完就能領號碼牌抽獎。",
          comfort: "你的感情、工作和生育安排是私人選擇，不必在餐桌上交代進度。",
          playful: "「這題今天先不開放家族問答喔😅 有好消息我會自己分享，先聊聊最近吃什麼吧。」",
          soft: "「我知道你是關心我，不過感情／結婚／生小孩的事我想自己安排。等我想分享時會再告訴你。」",
          firm: "「這是我的私人安排，我不想繼續回答。請換個話題；如果一直追問，我會先離開一下。」",
          insight: "簡短回答、設定話題界線，不需要用更多個人細節來證明自己的決定合理。"
        },
        en: {
          tag: "Relatives’ Rapid-Fire Questions",
          roast: "The family gathering has turned into a life-progress review, with questions arriving like there’s a prize for finishing the whole questionnaire.",
          comfort: "Your relationship, career, and family plans are personal choices; you don’t owe the dinner table a progress report.",
          playful: "“That question isn’t open for family Q&A today 😅 I’ll share news if I have any. What have you been enjoying lately?”",
          soft: "“I know you care, but I want to make my own choices about relationships/marriage/kids. I’ll tell you if and when I’m ready to share.”",
          firm: "“That’s personal, and I don’t want to discuss it. Please change the subject; if the questions continue, I’m going to step away.”",
          insight: "A brief answer and a clear topic boundary avoid turning private choices into a debate that needs defending."
        }
      },
      {
        id: "cousin_comparisons_favoritism",
        keywords: {
          en: ["uncle compares me to my cousin", "aunt keeps comparing my salary to my cousin's", "grandparents favor my cousin", "relatives compare our careers", "family keeps comparing the cousins", "grandma says my cousin is better than me"],
          zh: ["叔叔拿我跟表哥比較", "舅舅拿我跟堂弟比較", "姑姑一直比較我和表姊的收入", "長輩偏心表弟", "家人一直比較堂表兄弟姊妹", "奶奶說表姊比我好"]
        },
        zh: {
          tag: "堂表兄弟姊妹排行榜",
          roast: "家族聚會又開啟堂表兄弟姊妹排行榜，彷彿人生是同一場考試，還有人兼任裁判。",
          comfort: "你不必用親戚設定的排名衡量自己的進度或價值。",
          playful: "「今天的表親排行榜先休刊吧😅 我們每個人的路線不一樣，聊點不用比名次的話題？」",
          soft: "「把我和表哥／表姊比較會讓我有壓力。我希望我們可以各自談自己的近況，不用排高低。」",
          firm: "「請不要再拿我和表親比較。若話題又回到排名或批評，我會先結束這段對話。」",
          insight: "指出比較造成的影響並要求停止排名，能把重點從爭輸贏拉回彼此尊重。"
        },
        en: {
          tag: "The Cousin Leaderboard",
          roast: "The family gathering has reopened the cousin leaderboard, as if everyone took the same exam and someone got appointed judge.",
          comfort: "You don’t have to measure your progress or worth by a ranking relatives made up.",
          playful: "“Can we retire the cousin leaderboard for today? 😅 We’re on different paths—let’s talk about something that doesn’t need rankings.”",
          soft: "“Being compared with my cousin puts pressure on me. I’d rather we talk about each person’s life without ranking us.”",
          firm: "“Please stop comparing me with my cousins. If the conversation turns back to ranking or criticism, I’m going to step away.”",
          insight: "Name the impact and ask for the comparisons to stop so the conversation can return to respect instead of competition."
        }
      },
      {
        id: "eldercare_relative_conflict",
        keywords: {
          en: ["only one relative caring for grandma", "siblings won't help care for grandparent", "family arguing over elder care responsibilities", "fight over paying for grandparent care", "relatives disagree about assisted living for grandpa", "my aunt does all the caregiving for grandma"],
          zh: ["照顧阿嬤都我在做", "親戚都不幫忙照顧長輩", "大家為照顧爺爺奶奶吵架", "長照費用分攤不公平", "為阿公要不要住機構吵架", "姑姑一個人在照顧阿嬤"]
        },
        zh: {
          tag: "照顧責任不能隱形",
          roast: "長輩需要的是一份大家看得見的照顧計畫，不是讓最常出現的那位自動包辦所有班表。",
          comfort: "照顧長輩的時間、費用和安排都是真實負擔，談清楚分工是在保護照顧者和長輩。",
          playful: "「我們別再用『有空再幫忙』當排班系統了😅 一起把探望、接送和費用分清楚吧。」",
          soft: "「我希望先確認長輩目前需要什麼，再把探望、接送、預約和費用列出來分工。每個人能負擔的方式不同，我們可以一起談。」",
          firm: "「我沒辦法再一個人承擔目前的照顧安排。請大家在[日期]前認領可負責的事項；醫療或安置決定則一起聽取長輩意願和專業意見。」",
          insight: "把照顧工作拆成可認領的任務與費用，並把醫療決定交由長輩意願及合適專業資訊引導，避免只靠責怪談判。"
        },
        en: {
          tag: "Care Work Shouldn’t Be Invisible",
          roast: "An older relative needs a care plan everyone can see, not a schedule that silently assigns every shift to whoever lives closest.",
          comfort: "Care time, costs, and coordination are real responsibilities; discussing them protects both the caregiver and the older relative.",
          playful: "“Can we retire ‘help when you can’ as our scheduling system? 😅 Let’s divide visits, rides, appointments, and costs clearly.”",
          soft: "“I’d like us to confirm what support they need, then list visits, rides, appointments, and expenses and share the tasks. People can contribute in different ways.”",
          firm: "“I can’t keep carrying the current care plan alone. Please claim the tasks you can take by [date]; for medical or living decisions, let’s include their wishes and professional guidance.”",
          insight: "Turn care into specific tasks and costs people can own, and ground medical or living decisions in the older person’s wishes and appropriate professional input."
        }
      },
      {
        id: "family_gathering_hosting_load",
        keywords: {
          en: ["always expected to host family gatherings", "I do all the cooking and cleaning for family holidays", "relatives never help clean up after dinner", "same person always hosts family dinner", "family gathering costs aren't shared fairly", "I pay for the whole family dinner"],
          zh: ["每次家庭聚會都要我主辦", "過節都要我煮菜打掃", "親戚都不幫忙收拾", "家族聚餐都我在準備", "家族聚會費用分攤不公平", "整桌家族聚餐都我付"]
        },
        zh: {
          tag: "家族聚會總召又是你",
          roast: "家族聚會的主持、廚師、清潔和會計好像都自動指派給同一個人，這不是聚會，是一人公司年會。",
          comfort: "想把準備工作和費用分攤清楚很合理，聚會不該靠一個人默默透支。",
          playful: "「今年家族聚會開放大家認領任務囉😅 我負責一項，其他人也來分一下菜色和收拾吧。」",
          soft: "「我很願意和大家聚聚，但最近準備、收拾和費用大多由我負責，有點吃不消。下次我們可以先分配工作和預算嗎？」",
          firm: "「這次我只能負責[一項工作／固定金額]，其他準備和費用需要大家一起分攤；如果分工沒確認，我就不負責主辦。」",
          insight: "在活動前把主辦工作、收拾和預算具體分配，比事後累積怨氣更容易維持親戚關係。"
        },
        en: {
          tag: "Family Reunion, One-Person Crew",
          roast: "Hosting, cooking, cleaning, and accounting all seem auto-assigned to one person. That’s not a gathering; it’s a one-person annual meeting.",
          comfort: "It’s reasonable to share the preparation and cost; a family event shouldn’t quietly drain one person.",
          playful: "“We’re opening sign-ups for reunion jobs this year 😅 I’ll take one task—everyone else can claim a dish or cleanup too.”",
          soft: "“I love getting everyone together, but I’ve been handling most of the prep, cleanup, and cost, and it’s a lot. Could we divide the work and budget before the next gathering?”",
          firm: "“I can take [one task/a set amount] this time. The rest of the prep and cost needs to be shared; if we can’t confirm that, I won’t organize the event.”",
          insight: "Assign hosting work, cleanup, and budget before the event so the load is visible instead of becoming resentment afterward."
        }
      },
      {
        id: "relative_political_argument",
        keywords: {
          en: ["uncle starts political arguments at dinner", "relatives keep arguing politics at family gatherings", "family dinner turns into a political fight", "politics ruins every family holiday", "aunt keeps provoking political arguments"],
          zh: ["叔叔吃飯一直聊政治吵架", "親戚聚餐一直吵政治", "家族聚會變成政治辯論", "每次過年都為政治吵架", "阿姨一直挑起政治話題"]
        },
        zh: {
          tag: "餐桌辯論賽又開場",
          roast: "菜還沒上齊，餐桌辯論賽已經進入加時賽；你只是想吃飯，沒有報名當裁判。",
          comfort: "你可以選擇不參與政治爭論，也可以在氣氛變差前換話題或離席。",
          playful: "「這桌今天先休戰吧😅 我想好好吃飯，誰要分享最近看的電影？」",
          soft: "「我知道大家看法不同，但我不想在聚會裡辯論政治。可以換個話題，讓大家把飯吃完嗎？」",
          firm: "「我不會繼續這個政治話題。如果還是要爭論，我先去別桌／離開一下。」",
          insight: "把界線放在自己是否參與和何時離席，不必在餐桌上說服所有親戚改變立場。"
        },
        en: {
          tag: "Dinner Table Debate, Again",
          roast: "The food isn’t all on the table and the debate is already in overtime. You came to eat, not to referee.",
          comfort: "You can opt out of a political argument and change the subject or step away before the gathering turns sour.",
          playful: "“Can we call a truce at this table? 😅 I’d like to eat—who’s watched a good movie lately?”",
          soft: "“I know we see this differently, but I don’t want to debate politics at a family gathering. Could we switch topics and enjoy dinner?”",
          firm: "“I’m not continuing this political discussion. If it keeps going, I’m going to move to another table/step away.”",
          insight: "Set a boundary around your own participation and exit rather than trying to persuade the whole family at dinner."
        }
      },
      {
        id: "neighbor_noise",
        keywords: {
          en: ["neighbor plays loud music late at night", "upstairs neighbor stomps after midnight", "neighbor's party is too loud", "neighbor does renovation early in the morning", "noise from my neighbor keeps waking me", "neighbor keeps making noise at night", "noisy neighbor", "neighbor is too loud", "loud music at night", "keeps me up at night"],
          zh: ["鄰居半夜放音樂很大聲", "樓上鄰居半夜一直跺腳", "鄰居派對太吵", "鄰居一大早裝修很吵", "鄰居的噪音一直吵醒我", "鄰居晚上一直製造噪音", "鄰居很吵", "唱歌很吵", "晚上很吵", "吵到睡不著"]
        },
        zh: {
          tag: "隔壁音響自帶環繞",
          roast: "牆壁薄到像幫鄰居加裝了免費環繞音響，而你的睡眠被迫訂閱整晚特別節目。",
          comfort: "先用具體日期、時段和影響說明問題，通常比直接批評對方生活方式更容易溝通。",
          playful: "「嗨，昨晚的音樂我這邊也收到完整專輯了😅 可以在晚上[時間]後把音量調低嗎？」",
          soft: "「你好，最近晚上[時段]的音樂／聲響會傳到我家，影響休息。方便在這個時段把音量降低一些嗎？謝謝。」",
          firm: "「我已在[日期]提過夜間噪音問題，最近仍持續影響休息。我會記錄發生時段，並依大樓／社區的正式流程反映。」",
          insight: "記下發生時間和具體影響，再提出一個可執行的音量或時段請求；持續發生時使用社區流程。"
        },
        en: {
          tag: "Surround Sound Through the Wall",
          roast: "The wall seems to come with free surround sound, and your sleep got subscribed to the neighbor’s all-night special.",
          comfort: "Describe the dates, hours, and effect on you; that usually lands better than criticizing someone’s lifestyle.",
          playful: "“Hey, I think I got the full album from last night too 😅 Could you lower the volume after [time]?”",
          soft: "“Hi, sound from the music/noise around [time] has been carrying into my place and affecting my sleep. Could you keep it lower during those hours? Thanks.”",
          firm: "“I mentioned the nighttime noise on [date], and it’s still affecting my rest. I’ll keep a record of the times and raise it through the building/community process.”",
          insight: "Record when it happens and how it affects you, make one specific volume or timing request, and use the community process if it continues."
        }
      },
      {
        id: "neighbor_parking",
        keywords: {
          en: ["neighbor keeps blocking my driveway", "neighbor parks in my assigned parking spot", "neighbor blocks the garage entrance", "neighbor's guest blocks our driveway", "neighbor keeps taking my parking space", "parked in my spot", "took my spot", "in my parking spot"],
          zh: ["鄰居一直擋我家車道", "鄰居停在我的固定車位", "鄰居擋住車庫出入口", "鄰居的客人擋住車道", "鄰居一直佔我的停車位", "停我的車位", "佔我的車位", "停到我的位子"]
        },
        zh: {
          tag: "車位界線請勿跨線",
          roast: "車子停得很有創意，創意到你的車道快變成對方的私人延伸空間。",
          comfort: "先確認車位標示或管理規則，並記錄具體時間和位置，讓溝通有共同事實。",
          playful: "「嗨，這個位置是我家的車道／固定車位喔😅 可以麻煩移一下，之後也不要停在這裡嗎？」",
          soft: "「你好，這輛車停在我家車道／分配車位，讓我無法正常進出。麻煩移車，之後請停到可使用的位置，謝謝。」",
          firm: "「這個車道／車位不是訪客停車區，請勿再停放。若再次擋住出入口，我會依大樓或社區的處理流程通報。」",
          insight: "指出確切位置和實際影響，先按標示或社區規則處理，不要把公共道路或車位權利想當然耳。"
        },
        en: {
          tag: "Parking Spot Boundary Patrol",
          roast: "That’s a creative parking job—so creative your driveway is starting to look like someone else’s private extension.",
          comfort: "Check the space markings or building rules and note the time and location so the conversation starts with shared facts.",
          playful: "“Hi, this is my driveway/assigned spot 😅 Could you move the car and leave this space clear next time?”",
          soft: "“Hi, this car is in my driveway/assigned space, so I can’t get in or out. Could you move it and use an available space next time? Thanks.”",
          firm: "“This driveway/space isn’t guest parking. Please don’t park here again. If access is blocked again, I’ll report it through the building/community process.”",
          insight: "Name the exact location and impact, then follow posted or community rules instead of assuming who owns a public curb space."
        }
      },
      {
        id: "neighbor_pet_problem",
        keywords: {
          en: ["neighbor's dog barks all night", "neighbor dog barks while they're away", "neighbor won't pick up dog poop", "neighbor's cat keeps digging up my garden", "neighbor's pet keeps damaging my plants", "pet waste in my yard from neighbor"],
          zh: ["鄰居的狗整晚一直叫", "鄰居上班時狗一直叫", "鄰居不清狗大便", "鄰居的貓一直挖我的花圃", "鄰居的寵物弄壞我的植物", "鄰居的狗在我家院子大小便"]
        },
        zh: {
          tag: "毛小孩越界支線",
          roast: "毛小孩很可愛，但半夜演唱會和自助花圃改造，已經超出鄰居粉絲福利範圍。",
          comfort: "對方可能不知道寵物獨處時的狀況；用具體時間或地點說明，通常更容易一起找辦法。",
          playful: "「嗨，毛小孩最近好像把我家院子當成巡演場／洗手間了😅 可以一起想個辦法嗎？」",
          soft: "「你好，最近[時段／地點]會有狗叫／寵物排泄物，影響休息／環境。想請你留意一下，並協助清理或避免牠進入這個區域。」",
          firm: "「這個情況已持續一段時間，請安排好寵物照看並清理排泄物，避免牠進入我家範圍。若仍持續，我會依社區流程反映。」",
          insight: "把問題說成可觀察的行為（吠叫時段、排泄物位置或植物受損），再提出清楚的照顧和清理要求。"
        },
        en: {
          tag: "Pet Side Quest Crossed the Line",
          roast: "Pets are adorable, but a midnight concert and a self-service garden makeover exceed the neighbor-fan benefits.",
          comfort: "The owner may not know what happens while the pet is alone; concrete times and locations make it easier to solve together.",
          playful: "“Hi, your pet may have added my yard to its tour/restroom route 😅 Could we figure out a fix?”",
          soft: "“Hi, there’s been barking/waste around [time/place], and it’s affecting my rest/the yard. Could you keep an eye on it, clean up, or keep the pet out of this area?”",
          firm: "“This has continued for a while. Please arrange care and clean up after your pet, and keep it out of my yard. If it continues, I’ll raise it through the community process.”",
          insight: "Describe the observable issue—barking times, waste location, or plant damage—and make a clear request about supervision and cleanup."
        }
      },
      {
        id: "neighbor_property_boundary",
        keywords: {
          en: ["neighbor's fence is over the property line", "neighbor's tree branches hang over my yard", "neighbor keeps entering my yard", "neighbor put belongings on my property", "neighbor's renovation crossed our boundary", "neighbor built a fence on my land"],
          zh: ["鄰居的圍籬越界", "鄰居的樹枝伸進我家", "鄰居一直走進我家院子", "鄰居把東西放在我家範圍", "鄰居施工跨到我家界線", "鄰居把圍牆蓋到我家土地"]
        },
        zh: {
          tag: "地界不是猜謎遊戲",
          roast: "圍籬和樹枝都在努力拓展版圖，但地界不是靠誰先伸過去就自動更新的地圖。",
          comfort: "先確認界線資料和實際位置，再討論處理方式；不必在沒有共同資訊時先互相指控。",
          playful: "「我們先讓地圖和圍籬對一下答案吧😅 可以一起確認界線，再談怎麼修剪／調整嗎？」",
          soft: "「你好，我注意到[圍籬／樹枝／物品]好像跨到我這側了。可以先一起確認界線和位置，再討論怎麼處理嗎？」",
          firm: "「在界線確認前，請先不要繼續施工或移動物品。我會查核相關圖面／管理資料，再透過合適的社區或專業管道處理。」",
          insight: "先核對地界和管理資料再談方案；涉及所有權時避免只靠口頭印象或情緒自行定論。"
        },
        en: {
          tag: "Property Lines Aren’t Guesswork",
          roast: "The fence and branches are expanding their territory, but a boundary isn’t a map that updates just because something crossed it first.",
          comfort: "Check the boundary records and actual location before discussing a fix; don’t start with accusations when you lack shared information.",
          playful: "“Could we let the map and fence compare notes first? 😅 Let’s confirm the boundary and then discuss trimming/adjustments.”",
          soft: "“Hi, I noticed the [fence/branches/items] may be crossing onto my side. Could we confirm the boundary and location together, then discuss a solution?”",
          firm: "“Please pause further work or moving items until the boundary is confirmed. I’ll check the relevant records/building information and use the appropriate community or professional channel.”",
          insight: "Verify the boundary and relevant records before agreeing on a fix; don’t make ownership conclusions from memory or frustration alone."
        }
      },
      {
        id: "neighbor_shared_space",
        keywords: {
          en: ["neighbor leaves trash in the shared hallway", "neighbor stores things in the common area", "neighbor blocks the apartment hallway", "neighbor leaves garbage by my door", "neighbor never cleans the shared area", "neighbor dumps rubbish in the shared space"],
          zh: ["鄰居把垃圾放在公共走廊", "鄰居把東西堆在公共區域", "鄰居堵住公寓走道", "鄰居把垃圾放在我家門口", "鄰居從不整理公共空間", "鄰居在共用空間堆雜物"]
        },
        zh: {
          tag: "公共走道不是私人倉庫",
          roast: "公共走道被佈置成私人倉庫，其他住戶只能在雜物迷宮裡練習閃避。",
          comfort: "保持共用空間通暢關係到所有住戶的使用和安全，提出清理要求很合理。",
          playful: "「走道最近開了快閃倉庫嗎😅 可以把門口的東西移回室內，讓大家好好通行嗎？」",
          soft: "「你好，走道上的垃圾／物品會影響通行和公共空間使用。麻煩你在[日期]前移走，謝謝。」",
          firm: "「請勿把物品或垃圾堆放在公共走道。若[日期]後仍未清理，我會依大樓管理規定通知管委會／管理處。」",
          insight: "聚焦在具體位置、通行影響和管理規則，讓請求可以被確認和處理。"
        },
        en: {
          tag: "The Hallway Isn’t a Storage Unit",
          roast: "The shared hallway has become a private storage unit, and everyone else is practicing obstacle-course navigation.",
          comfort: "Keeping a shared path clear affects everyone’s access and safety, so asking for cleanup is reasonable.",
          playful: "“Did the hallway open a pop-up storage unit? 😅 Could you move those things inside so everyone can get through?”",
          soft: "“Hi, the trash/items in the hallway are affecting access to the shared space. Could you move them by [date]? Thanks.”",
          firm: "“Please don’t leave belongings or trash in the shared hallway. If it’s still there after [date], I’ll notify building management under the community rules.”",
          insight: "Focus on the exact location, impact on access, and applicable building rules so the request can be acted on."
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

    quickScenarios.push(
      {
        id: "roommate_food_taken",
        keywords: {
          en: ["roommate keeps eating my food without asking", "roommate eats my groceries", "roommate takes my food from the fridge", "roommate keeps taking my snacks", "eating my food", "finished my food", "took my food"],
          zh: ["室友一直偷吃我的食物", "室友沒問就吃我的東西", "室友一直拿冰箱裡的食物", "室友偷吃我的零食", "室友偷吃我的食物", "吃掉我的零食", "又吃我的東西"]
        },
        zh: {
          tag: "冰箱不是共享自助餐",
          roast: "你的食物放進冰箱，不代表自動加入室友的試吃活動；標籤寫著『我的』不是裝飾品。",
          comfort: "先把哪些食物可以共用、哪些要先問說清楚，避免把習慣不同直接升級成偷竊指控。",
          playful: "「冰箱不是無限續盤區喔😅 想吃我的東西先問一聲，我們也可以另外劃出共用區。」",
          soft: "「我注意到我放在冰箱的[食物]幾次不見了。那些是我自己要吃的；如果想分享，請先問我，我們也可以一起標出共用的東西。」",
          firm: "「請不要再拿我標明或放在個人區的食物。若你想共用某些食材，我們先說好怎麼分和補。」",
          insight: "區分個人食物與共用食材，描述具體例子並提出先詢問的規則，不必先推斷對方的動機。"
        },
        en: {
          tag: "The Fridge Isn’t a Shared Buffet",
          roast: "Putting food in the fridge doesn’t enroll it in your roommate’s tasting program. The “mine” label isn’t decorative.",
          comfort: "Clarify which food is shared and which needs permission before turning different habits into accusations about intent.",
          playful: "“The fridge isn’t an all-you-can-eat buffet 😅 Please ask before taking my food—we can also mark a shared shelf.”",
          soft: "“I noticed my [food] has gone missing a few times. I bought it for myself; please ask before taking it. We can label what’s shared if that helps.”",
          firm: "“Please don’t take food I’ve marked or set aside for myself. If you want to share certain groceries, let’s agree on how we split and replace them first.”",
          insight: "Separate personal food from shared groceries, name a concrete example, and agree on an ask-first rule without guessing intent."
        }
      },
      {
        id: "roommate_bills",
        keywords: {
          en: ["roommate hasn't paid their share of utilities", "roommate is late paying rent and bills", "roommate owes me for the internet bill", "roommate won't pay their share of the electric bill"],
          zh: ["室友一直不付水電費", "室友沒分攤房租", "室友欠我網路費", "室友每次都拖著不繳帳單", "室友不付自己的電費"]
        },
        zh: {
          tag: "帳單分攤別靠心電感應",
          roast: "帳單不會因為大家都假裝沒看到就自己繳掉；電表也不接受『下次一定』當付款方式。",
          comfort: "拿出帳單、分攤方式和到期日談，比只說對方不負責更容易得到具體結果。",
          playful: "「電費帳單又來敲門了😅 這期你的份是[金額]，可以在[日期]前轉給我嗎？」",
          soft: "「這期[帳單]總額是[金額]，照我們說好的分法，你的份是[金額]，到期日是[日期]。方便在那之前付給我嗎？」",
          firm: "「[帳單]的[金額]目前還沒收到。請在[日期]前付清，之後我們把每月分攤和付款日寫下來，避免再拖到逾期。」",
          insight: "用帳單、約定比例、個人金額和日期對帳；若原本沒有約定，先談新規則，不要假設對方知道你的期待。"
        },
        en: {
          tag: "Bills Don’t Run on Mind Reading",
          roast: "The bill won’t pay itself because everyone pretends not to see it. The meter doesn’t accept “next time for sure” as currency.",
          comfort: "Bring the bill, agreed split, and due date; specific numbers work better than calling someone irresponsible.",
          playful: "“The electric bill is back to collect 😅 Your share is [amount]—could you send it by [date]?”",
          soft: "“The [bill] came to [amount]. Based on our split, your part is [amount], due on [date]. Could you send it before then?”",
          firm: "“I haven’t received your [amount] share for [bill]. Please pay by [date]. Let’s write down the monthly split and payment date so it doesn’t become overdue again.”",
          insight: "Compare the bill, agreed ratio, amount, and due date. If there was no agreement, establish one instead of assuming expectations were shared."
        }
      },
      {
        id: "roommate_shared_supplies",
        keywords: {
          en: ["roommate uses shared supplies but never replaces them", "roommate never replaces toilet paper", "roommate uses all the cleaning supplies", "roommate won't replace shared household items"],
          zh: ["室友用完衛生紙都不補", "室友一直用公共用品不補貨", "清潔用品都是我在買", "室友用完共用品不補", "室友從不補衛生紙"]
        },
        zh: {
          tag: "公共用品不是無限生成",
          roast: "衛生紙和洗碗精不是打開櫃子就會自動重生的遊戲道具，補貨責任也不能永遠只有一個人看見。",
          comfort: "如果共用和個人用品沒有分清楚，先訂簡單的購買與輪替方式，通常比追究每一張衛生紙有效。",
          playful: "「公共用品庫存又見底啦😅 我們排個輪流補貨表，別讓最後一卷衛生紙承受所有壓力。」",
          soft: "「最近衛生紙／清潔用品大多是我在補。我們可以列一份共用清單，輪流買或月底分帳嗎？」",
          firm: "「我不會再單獨負責購買所有共用品。請大家照輪值補貨，或先同意哪些物品共用、費用如何分攤。」",
          insight: "先定義共用品清單，再選擇輪流購買或分帳，讓責任和費用都看得見。"
        },
        en: {
          tag: "Household Supplies Don’t Respawn",
          roast: "Toilet paper and dish soap aren’t game items that regenerate in the cupboard, and restocking can’t stay visible to just one person.",
          comfort: "If shared and personal supplies aren’t clear, set a simple buying or rotation system instead of tracking every roll.",
          playful: "“The shared-supplies shelf is empty again 😅 Let’s make a restock rota before the last toilet roll has to carry the house.”",
          soft: "“I’ve been replacing most of the toilet paper/cleaning supplies lately. Could we make a shared list and rotate purchases or split the cost?”",
          firm: "“I can’t keep buying all the shared supplies on my own. Please follow a restock rota, or let’s agree which items are shared and how we split the cost.”",
          insight: "Agree on a list of shared essentials, then rotate purchases or split costs so the work and expense are visible."
        }
      },
      {
        id: "roommate_guests",
        keywords: {
          en: ["roommate keeps bringing guests over without asking", "roommate's partner is here all the time", "roommate has overnight guests every week", "roommate's boyfriend practically lives here", "roommate's girlfriend is always in our shared space", "friends are always over", "brings friends over", "has friends over"],
          zh: ["室友常常沒問就帶朋友回家", "室友的伴侶幾乎天天住這裡", "室友每週都帶人過夜", "室友男友一直待在公共空間", "室友女友常常來住", "室友帶朋友回來", "半夜開趴", "帶朋友回來開趴"]
        },
        zh: {
          tag: "室友的客人快變固定住戶",
          roast: "這位訪客出勤率高到快能領門禁卡了，而共用空間和水電也悄悄多了一位使用者。",
          comfort: "你可以在不批評對方關係的前提下，談通知、過夜頻率、公共空間和費用分攤。",
          playful: "「你伴侶最近出席率很高，快要成為第三位室友了😅 我們能先聊聊來訪頻率和共用空間怎麼安排嗎？」",
          soft: "「我不反對你邀請朋友／伴侶來，但最近來訪很頻繁，會影響我使用公共空間和休息。我們可以約定提前通知和過夜頻率嗎？」",
          firm: "「請不要在沒有先和室友說好的情況下安排長時間或頻繁過夜。這個住處是共用的，來訪頻率、安靜時間和費用影響都需要一起談。」",
          insight: "把焦點放在頻率、通知、休息與共同成本，而不是否定室友的伴侶或朋友。也要一起遵守租約與住宿規則。"
        },
        en: {
          tag: "The Guest Is Nearly a Third Roommate",
          roast: "This guest is close to earning a key, while the shared space and utility use quietly gained another regular.",
          comfort: "You can discuss notice, overnight frequency, shared space, and costs without criticizing your roommate’s relationship.",
          playful: "“Your partner’s attendance is approaching roommate status 😅 Could we talk about visit frequency and shared-space plans?”",
          soft: "“I don’t mind you having friends/your partner over, but visits have been frequent and affect my use of the shared space and rest. Could we agree on advance notice and overnight frequency?”",
          firm: "“Please don’t arrange frequent or extended overnight stays without discussing them with the household first. Visit frequency, quiet time, and shared costs affect everyone here.”",
          insight: "Keep the discussion on frequency, notice, rest, and shared costs rather than judging the relationship. Follow the lease or housing rules together."
        }
      },
      {
        id: "roommate_borrowing_privacy",
        keywords: {
          en: ["roommate borrows my things without asking", "roommate uses my belongings without permission", "roommate goes into my room without asking", "roommate keeps borrowing my clothes", "roommate invades my privacy"],
          zh: ["室友沒問就拿我的東西", "室友一直借東西不還", "室友擅自進我的房間", "室友沒問就穿我的衣服", "室友一直侵犯我的隱私"]
        },
        zh: {
          tag: "共住不等於物品共享",
          roast: "住在同一個屋簷下，不代表你的耳機、衣服和房門都自動改成公共財產。",
          comfort: "清楚說明哪些物品不共用、進房前要先問，能減少對界線的猜測。",
          playful: "「我們共享地址，不共享所有物品喔😅 借之前先問我，進房間也請先敲門。」",
          soft: "「我發現[物品]被拿去使用／房間在我不在時被進入，讓我不太自在。請先問我再借，也請進房前敲門。」",
          firm: "「請不要再未經同意拿我的物品或進我的房間。若需要借用，先取得我的同意；房間是我的私人空間。」",
          insight: "把可借用規則和私人空間界線說具體；若重複發生，記錄情況並尋求可信任的宿舍管理或房東協助。"
        },
        en: {
          tag: "Sharing an Address Isn’t Sharing Everything",
          roast: "Living under one roof doesn’t automatically turn your headphones, clothes, or bedroom into community property.",
          comfort: "Name what isn’t shared and ask for a knock before entry so no one has to guess where the boundary is.",
          playful: "“We share an address, not every possession 😅 Please ask before borrowing and knock before coming in.”",
          soft: "“I noticed my [item] was used/my room was entered while I was away, and I’m not comfortable with that. Please ask before borrowing and knock first.”",
          firm: "“Please don’t take my belongings or enter my room without permission. Ask me first if you need to borrow something; my room is private space.”",
          insight: "Set a clear borrowing rule and privacy boundary. If it keeps happening, document it and ask trusted housing staff or a landlord for help."
        }
      },
      {
        id: "roommate_bathroom_schedule",
        keywords: {
          en: ["roommate takes too long in the bathroom", "roommate monopolizes the shower", "roommate uses the bathroom during my morning routine", "roommate leaves no time for others to shower"],
          zh: ["室友洗澡洗很久", "室友一直佔著浴室", "室友早上霸佔浴室", "室友洗澡時間太長害我遲到"]
        },
        zh: {
          tag: "浴室不是私人包場",
          roast: "浴室使用時間長到快能辦會員制了，其他人只能在門外練習把上班時間往後移。",
          comfort: "共用浴室最需要的是可預期的時段；一起排出早晨尖峰安排，比敲門催人更省火氣。",
          playful: "「浴室今天有包場活動嗎😅 我們排一下早上使用順序，讓大家都趕得上出門吧。」",
          soft: "「最近早上浴室使用時間比較長，我有幾次差點來不及出門。我們能不能排個尖峰時段的順序或時間上限？」",
          firm: "「我需要在[時間]前使用浴室。請在約定時段內完成，若需要更久，先和大家協調其他時段。」",
          insight: "確認彼此作息後，約定早晨時段或簡單輪序；針對共享資源談時間安排，不必指責個人習慣。"
        },
        en: {
          tag: "The Bathroom Isn’t a Private Suite",
          roast: "The bathroom session is long enough to start a membership program, while everyone else practices moving their workday later.",
          comfort: "A shared bathroom needs predictable timing. Planning the morning rush is less heated than knocking and hoping.",
          playful: "“Is the bathroom hosting a private event today? 😅 Can we set a morning order so everyone gets out on time?”",
          soft: "“The bathroom has been occupied for a while during the morning rush, and I’ve nearly been late. Could we set a schedule or a time limit for peak hours?”",
          firm: "“I need bathroom access before [time]. Please finish within our agreed slot; if you need longer, coordinate another time with everyone.”",
          insight: "Compare schedules and agree on a morning slot or rotation. Address the shared resource and timing rather than attacking someone’s habits."
        }
      },
      {
        id: "roommate_temperature",
        keywords: {
          en: ["roommate keeps changing the thermostat", "roommate sets the AC too cold", "roommate won't let us turn on the air conditioning", "we keep arguing about the thermostat", "roommate keeps turning the heat up"],
          zh: ["室友一直亂調冷氣溫度", "室友把冷氣開太冷", "室友不讓開冷氣", "室友一直調暖氣", "我們一直為冷氣溫度吵架"]
        },
        zh: {
          tag: "冷氣遙控器爭奪戰",
          roast: "冷氣遙控器成了室友版拔河繩，一個人調低兩度，另一個人就調回去，電費在旁邊默默加戲。",
          comfort: "每個人的體感不同，可以把舒適度、電費和作息一起談，找一個大家都能接受的預設值。",
          playful: "「冷氣遙控器今天又在自己投票了😅 我們訂個大家都能接受的溫度和調整方式吧。」",
          soft: "「我們對冷氣溫度的偏好不太一樣。能不能約定一個範圍，太冷／太熱時先說一聲，也一起分攤相關費用？」",
          firm: "「請不要一直私自改掉我們約定的設定。我希望我們先定好溫度範圍和費用分法，再照約定調整。」",
          insight: "把舒適度和電費都納入協商，約定可接受範圍與調整方式，避免每次都變成遙控器拉鋸戰。"
        },
        en: {
          tag: "Thermostat Remote Tug-of-War",
          roast: "The thermostat has become a roommate tug-of-war: one person lowers it, another raises it, and the utility bill gets a supporting role.",
          comfort: "Comfort differs by person. Discuss temperature, routines, and cost together to find a workable default.",
          playful: "“The thermostat remote is voting again 😅 Can we agree on a comfortable range and how we’ll adjust it?”",
          soft: "“We seem to prefer different temperatures. Could we agree on a range, give each other a heads-up before changing it, and share the related cost?”",
          firm: "“Please don’t keep changing the setting we agreed on. Let’s set a temperature range and cost split, then stick to it.”",
          insight: "Include comfort and utility cost in the agreement, with a shared range and adjustment rule instead of repeated remote-control battles."
        }
      },
      {
        id: "roommate_locked_door",
        keywords: {
          en: ["roommate keeps leaving the front door unlocked", "roommate forgets to lock the apartment door", "roommate leaves our house door open", "roommate doesn't lock the door at night"],
          zh: ["室友出門不鎖門", "室友一直忘記鎖大門", "室友離開家都不鎖門", "室友晚上忘記鎖門"]
        },
        zh: {
          tag: "大門不是自動上鎖的",
          roast: "大門每次都靠運氣確認有沒有鎖，這種安全抽卡遊戲大家其實都不想玩。",
          comfort: "先確認門現在已鎖，再把鎖門步驟變成共同習慣；安全問題值得直接而不羞辱地談。",
          playful: "「出門前幫大門做一下『拉門確認』吧😅 它沒有自動鎖門技能，大家一起記得鎖好。」",
          soft: "「我發現幾次出門後大門沒有鎖，會讓我擔心住家安全。可以把鎖門確認加進出門習慣嗎？」",
          firm: "「請每次進出後確認大門已上鎖。這是住家安全的基本共識；如果鎖具或門有問題，我們一起回報房東／管理處。」",
          insight: "處理前先確認門已安全上鎖，再說明具體情況並建立可執行的離家檢查習慣。"
        },
        en: {
          tag: "The Front Door Doesn’t Lock Itself",
          roast: "Checking whether the door is locked by luck is a security lottery nobody signed up to play.",
          comfort: "First make sure the door is locked now, then agree on a shared habit. Safety deserves a direct conversation without shaming.",
          playful: "“Let’s do a quick door-pull check before heading out 😅 It doesn’t have an auto-lock superpower.”",
          soft: "“I’ve noticed the front door unlocked a few times after someone left, and it worries me. Could we add a lock check to our leaving routine?”",
          firm: "“Please confirm the front door is locked every time you leave or enter. If the lock or door is faulty, let’s report it to the landlord/building manager together.”",
          insight: "Make sure the door is secure first, describe what happened, and agree on a concrete check whenever someone leaves."
        }
      }
    );

    const quickScenario = quickScenarios
      .map(scenario => ({
        scenario,
        matchedLength: [...scenario.keywords.en, ...scenario.keywords.zh]
          .filter(keyword => matchKeyword(lower, keyword))
          .reduce((longest, keyword) => Math.max(longest, keyword.length), 0)
      }))
      .filter(match => match.matchedLength > 0)
      .sort((a, b) => b.matchedLength - a.matchedLength)[0]?.scenario;
    // 共用的情境渲染：第一層（精確）與第二層（模糊計分）命中後都用這段輸出。
    const renderScenarioCopy = (scenario) => {
      const copy = scenario[isEn ? "en" : "zh"];
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
    };

    if (quickScenario) {
      activePresetId = null;
      renderScenarioCopy(quickScenario);
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
      "borrowed money", "borrow money", "lent me money", "pay back", "pay me back",
      "owe me money", "unpaid debt", "split the bill", "shared expenses", "debt",
      "借錢", "還錢", "欠錢", "欠我錢", "借款不還", "催討", "不給錢", "討錢", "分帳"
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
    // 匯整所有分類的預設案例（分類可能隨版本增減，動態攤平最穩）。
    const currentPresets = Object.values(PRESET_CATEGORIES[currentLang])
      .flatMap(category => category.items || []);

    // 預設案例觸發詞集中管理：第一層精確比對與第二層模糊評分共用同一份資料。
    const presetKeywordRules = [
      { id: "friend_late", en: ["friend is always late", "friend keeps arriving late", "made me wait", "kept me waiting", "is always late", "keeps being late", "waits for me every time"], zh: ["朋友每次遲到", "朋友常常遲到", "每次都遲到", "遲到半小時", "又遲到", "等他很久", "約好又遲到", "每次約都遲到"] },
      { id: "friend_any", en: ["where should we eat", "where to eat", "pick a restaurant"], zh: ["隨便", "吃什麼"] },
      { id: "work_urgent", en: ["urgent task at work", "last-minute urgent task", "urgent work request", "weekend work", "work this weekend"], zh: ["臨時急件", "下班前急件", "臨時交辦急件", "週末還要工作"] },
      { id: "work_blame", en: ["blame", "blamed me", "blames me", "pushed the responsibility", "threw me under the bus"], zh: ["甩鍋", "推責"] },
      { id: "campus_freerider", en: ["groupmate isn't doing their part", "groupmate is freeloading", "teammate didn't do their part", "team member isn't contributing", "freeload", "slacker", "nobody does any work", "doing everything myself"], zh: ["組員擺爛", "小組都我在做", "組員沒交他的部分", "組員沒有做分配工作", "組員都不做事", "都我在做", "擺爛"] },
      { id: "campus_late_add", en: ["ask professor to add me", "professor add code", "course add request", "late add request", "prerequisite permission"], zh: ["加簽", "教授加簽", "請教授加簽", "問教授能不能加簽"] },
      { id: "living_dishes", en: ["roommate leaves dishes in the sink", "roommate never washes dishes", "dishes keep piling up", "shared kitchen dishes"], zh: ["室友不洗碗", "碗盤堆在水槽", "室友都不洗碗", "洗碗分工"] },
      { id: "daily_family", en: ["parents keep deciding for me", "parents won't respect my decision", "family keeps controlling my choices", "family keeps pressuring me", "mom keeps pressuring me", "mother-in-law keeps criticizing me", "controlling what i do", "controlling my life", "keeps pressuring me to marry"], zh: ["爸媽替我決定", "父母一直控制我", "不尊重我的決定", "長輩一直干涉", "家人一直逼我", "家人干涉我的選擇", "爸媽催婚", "父母催婚", "家人催婚", "催我結婚", "一直催婚", "逼我結婚"] },
      { id: "daily_relationship", en: ["unclear relationship", "don't know where we stand", "do not know where we stand", "define the relationship", "won't talk about commitment", "avoids talking about commitment", "are we exclusive", "keeps avoiding the relationship talk"], zh: ["曖昧不清", "不知道我們算什麼", "不願意確認關係", "一直逃避談關係", "不肯承諾", "交往關係不清楚", "對方不願意討論未來"] },
      { id: "daily_health", en: ["boss expects me to work while sick", "manager expects me to work while sick", "pressure me to work while sick", "denied my sick leave", "can't take sick leave", "cannot take sick leave", "manager asked me to work with a fever", "work even when sick", "come to work sick", "wants me to work sick"], zh: ["主管不准我請病假", "老闆叫我帶病上班", "生病還要上班", "主管要我病假工作", "被逼著帶病工作"] }
    ];

    let matchedItem = null;
    for (const rule of presetKeywordRules) {
      if ([...rule.en, ...rule.zh].some(k => matchKeyword(lower, k))) {
        matchedItem = currentPresets.find(item => item.id === rule.id) || null;
        if (matchedItem) break;
      }
    }

    if (matchedItem) {
      activePresetId = matchedItem.id;
      applyPresetResult(matchedItem);
      showToast(UI_STRINGS[currentLang].toastDone);
      return;
    }

    // Tier 2: 沒有任何精確 phrase 命中時，用詞彙重疊計分找「最接近」的情境。
    // 採用門檻：單一關鍵詞至少重疊 2 個詞（最強證據）+ 總分至少 3 + 領先第二名 2 分以上；
    // 不達標就維持下方「找不到範本」提示，寧可不答也不誤答。
    const inputEnTokens = lower.split(/[^a-z0-9]+/).filter(t => t.length > 0);
    const inputEnSet = new Set(inputEnTokens);
    const inputBigrams = fuzzyZhBigrams(lower);
    const scoreCandidate = (rule) => {
      let total = 0;
      let best = 0;
      for (const kw of [...rule.en, ...rule.zh]) {
        let hits = 0;
        if (/[^\u0000-\u007F]/.test(kw)) {
          for (const b of fuzzyZhBigrams(kw)) if (inputBigrams.has(b)) hits++;
        } else {
          for (const token of fuzzyEnTokens(kw)) {
            const stem = fuzzyEnStem(token);
            if (inputEnSet.has(token) || inputEnSet.has(stem) ||
                (stem.length >= 4 && inputEnTokens.some(t => t.startsWith(stem)))) hits++;
          }
        }
        total += hits;
        if (hits > best) best = hits;
      }
      return { total, best };
    };
    const fuzzyCandidates = [
      ...quickScenarios.map(sc => ({ kind: "scenario", data: sc, rule: sc.keywords })),
      ...presetKeywordRules.map(pr => ({ kind: "preset", data: pr, rule: pr }))
    ];
    const fuzzyScored = fuzzyCandidates
      .map(c => Object.assign(c, scoreCandidate(c.rule)))
      .filter(c => c.best >= 2)
      .sort((a, b) => b.total - a.total);
    const fuzzyWinner = fuzzyScored[0];
    const fuzzyRunnerUp = fuzzyScored[1];
    if (fuzzyWinner && fuzzyWinner.total >= 3 && fuzzyWinner.total >= (fuzzyRunnerUp ? fuzzyRunnerUp.total : 0) + 2) {
      if (fuzzyWinner.kind === "scenario") {
        activePresetId = null;
        renderScenarioCopy(fuzzyWinner.data);
        return;
      }
      const fuzzyItem = currentPresets.find(item => item.id === fuzzyWinner.data.id);
      if (fuzzyItem) {
        activePresetId = fuzzyItem.id;
        applyPresetResult(fuzzyItem);
        showToast(UI_STRINGS[currentLang].toastDone);
        return;
      }
    }

    // No confident scenario match: don't invent a reply. Ask for a clearer rephrase.
    activePresetId = null;
    resultsContainer.style.display = "none";
    document.getElementById("placeholderText").textContent = UI_STRINGS[currentLang].unmatchedText;
    placeholderState.style.display = "block";
    placeholderState.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;

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
