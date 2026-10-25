/**
 * VentToPolite - 預設情境與智囊資料庫 (雙語版: 繁體中文 & English)
 * 整合高階思維模型：第一性原理 (First Principles)、二階思考 (Second-Order Thinking)、事前驗屍 (Pre-Mortem)
 */

const PRESET_CATEGORIES = {
  "zh-TW": {
    friends: {
      id: "friends",
      name: "朋友社交",
      icon: "👥",
      description: "面對好朋友的白目行為，想吐槽又不想破壞友情？",
      items: [
        {
          id: "friend_late",
          title: "每次都遲到 10 分鐘",
          tag: "朋友慣性遲到",
          rant: "每次約都遲到 10 分鐘，每次都跟我說『快到了』，我到底要站在路邊吹風吹多久？真的很煩，時間不是時間喔！",
          rageLevel: 82,
          roast: {
            tagTitle: "時空扭曲慣犯",
            stars: "★★★★☆",
            comment: "他的『快到了』大概是指他剛從床上坐起來、準備尋找另一隻襪子。他的手錶不是慢 10 分鐘，是他的人生時鐘走得比樹懶還悠哉。建議下次約他直接把時間往前報半小時，他準時到的那一刻還會以為自己今天表現優異呢。",
            comfortTip: "生氣浪費卡路里，待會碰面先凹他請一杯微糖微冰壓壓驚。"
          },
          diplomacy: {
            tactics: [
              {
                type: "幽默調侃型",
                tag: "最推朋友・不傷感情",
                text: "我已經在現場幫你把這家店的冷氣吹好吹滿了！再不出現，你今天欠我的精神損失費是一杯五十嵐喔～"
              },
              {
                type: "溫柔直白型",
                tag: "明確界線・體貼包裝",
                text: "我看你每次出門時間都蠻趕的，下次我們乾脆直接約晚 15 分鐘，免得你趕路危險、我也不用在路邊當門神站崗哈哈！"
              },
              {
                type: "戰略反制型",
                tag: "化被動為主動",
                text: "我剛剛到了，但我先去隔壁逛個文具店買東西，你到了再打給我，慢慢來不急（但到了不要讓我等太久嘿）！"
              }
            ],
            insight: "面對熟人朋友，直接指責『你很不守時』會激起對方的羞恥防禦心理；改用『開玩笑討飲料』或『替他著想約晚一點』，既幽默點出他遲到的事實，又給足了台階下。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：對方知道你等了，但用笑聲化解尷尬，當場不會撕破臉。",
              secondOrder: "長期連鎖效應：對方下次會自覺提前 10 分鐘準備，或主動發訊息告知真實進度；避免你默默忍耐到某天情緒大爆發導致友誼破碎。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：語氣太嚴肅像教官訓話，讓對方惱羞成怒反嗆『才等 10 分鐘計較什麼』。",
              prevention: "關鍵避坑策略：鎖定在『幽默索賠（討杯飲料）』或『替他著想約晚點』，嚴禁上升到人格道德指責。"
            },
            firstPrinciples: {
              coreTruth: "你真正要在乎的不是逼朋友達到軍事化準時，而是捍衛你寶貴的時間，同時維持輕鬆自在的友誼。"
            }
          }
        },
        {
          id: "friend_bad_words",
          title: "朋友常講髒話/說話難聽",
          tag: "語言習慣摩擦",
          rant: "朋友講話三句不離髒話，動不動就罵難聽的字眼，我覺得超煩超不舒服，想叫他閉嘴但又怕被說開不起玩笑！",
          rageLevel: 80,
          roast: {
            tagTitle: "粗口詞彙超標警報",
            stars: "★★★★☆",
            comment: "他的日常辭彙庫大概是從限制級黑幫電影裡批發來的。說話不加兩句髒話好像舌頭會抽筋一樣，把沒禮貌當隨性、把粗口當語助詞，聽得人耳根子都發麻。他可能以為這樣很接地氣，其實聽起來像音響接觸不良在漏電。",
            comfortTip: "你是他的朋友，不是他的訓導主任。你有絕對的權利保護自己的耳朵不被噪音污染。"
          },
          diplomacy: {
            tactics: [
              {
                type: "幽默調侃型",
                tag: "開玩笑制止・不傷感情",
                text: "兄弟，你今天的粗口濃度有點超標囉！稍微收斂一點，不然我的耳朵要開始向你收精神撫慰金了哈哈～"
              },
              {
                type: "溫和直白型",
                tag: "表達感受・建立界線",
                text: "老實說，常常聽那些重話和髒話其實蠻讓人消耗精力的。我很喜歡跟你聊天，但髒話少一點我們相處起來會更舒服、更放鬆！"
              },
              {
                type: "明確底線型",
                tag: "互相尊重・確立原則",
                text: "我很重視我們的交情，但我個人真的不習慣一直聽到髒話或攻擊性的用詞。我們聊天互相尊重一下，好嗎？"
              }
            ],
            insight: "習慣講粗口的人通常是無意識的語病，或自以為這樣顯得很率性。不要用道德制高點指責他（『你很沒教養』），而是用自己的主觀感受（『聽久了很消耗我的精力』）劃定界線，對方最不容易惱羞成怒。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：對方當下愣了一下，意識到平常無意識的說話習慣讓你感到刺耳。",
              secondOrder: "長期連鎖效應：朋友圈聚會時的語言環境自然過濾，對方跟你相處時會自覺收斂粗話，大幅降低人際相處的能量消耗。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：被對方反將一軍說『幹嘛那麼敏感、開不起玩笑』。",
              prevention: "關鍵避坑策略：強調『我個人聽久了很累很耗能』，聚焦生理與精力感受，不要評價對方的道德人品。"
            },
            firstPrinciples: {
              coreTruth: "溝通的本質是傳遞訊息與情感連結，無休止的負面粗話是無意義的干擾雜訊，你有權利維護自己的耳根清淨。"
            }
          }
        },
        {
          id: "friend_any",
          title: "問吃什麼永遠回「隨便」",
          tag: "選擇困難甩鍋",
          rant: "每次問他吃什麼都回『隨便、都可以』，給了他三個選項又說這個不想吃那個太油，那你到底要吃什麼啦？！",
          rageLevel: 75,
          roast: {
            tagTitle: "人體否決權機器人",
            stars: "★★★☆☆",
            comment: "他的『隨便』翻譯成白話文是：『我不知道我想吃什麼，但我肯定知道你挑的我都不想吃。』他不是沒有意見，他是把決策責任丟給你，同時保留隨時打槍你的特權。",
            comfortTip: "對付這種人千萬別給開放式問答，直接玩『刪除法二選一』或直接帶路走進店裡。"
          },
          diplomacy: {
            tactics: [
              {
                type: "幽默調侃型",
                tag: "打破僵局",
                text: "警報！你的『隨便配額』今日已用盡！現在只剩『拉麵』或『咖哩』二選一，倒數五秒不選我就直接拖你進拉麵店囉～"
              },
              {
                type: "體面主導型",
                tag: "拿回主導權",
                text: "我看你今天也沒特別想法，那我們今天就去吃上次那家義大利麵，走吧我訂位了！"
              },
              {
                type: "溫柔設限型",
                tag: "分工合作",
                text: "今天我腦袋也放空，這次交給你挑兩家你想吃的，我來做最後決定，這樣最公平！"
              }
            ],
            insight: "面對選擇障礙的朋友，詢問『你想吃什麼』只會加劇他的焦慮。直接將問題縮小為『封閉式二選一』或乾脆展現自信帶路，通常對方反而會鬆一口氣。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：5 秒內打破無意義的『吃什麼』拉鋸戰，迅速落腳餐廳點餐。",
              secondOrder: "長期連鎖效應：建立起『一人挑兩家、一人選一家』或『直接帶路』的默契，節省未來每次聚會 30 分鐘的決策內耗。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：挑了一家對方身體不能吃（如海鮮過敏）的餐廳而引發抱怨。",
              prevention: "關鍵避坑策略：給出封閉式二選一，保留對方最後的知情選擇權。"
            },
            firstPrinciples: {
              coreTruth: "聚餐的核心利益是『享受陪伴與食物』，而不是陷入形式主義的偽民主表決。"
            }
          }
        }
      ]
    },
    workplace: {
      id: "workplace",
      name: "職場工作",
      icon: "💼",
      description: "面對同事甩鍋、下班急件、客戶反覆，如何優雅保命又不委屈？",
      items: [
        {
          id: "work_urgent",
          title: "下班前 5 分鐘丟急件",
          tag: "壓線突襲",
          rant: "每天下午都沒聲音，偏偏在週五下班前 5 分鐘丟一堆檔案過來說『這個很急，週一早上一早要用』，你的一早是我的週末嗎？！自己不會提早規劃喔！",
          rageLevel: 94,
          roast: {
            tagTitle: "週末謀殺戰術師",
            stars: "★★★★★",
            comment: "這不是急件，這是他把自己的拖延症偽裝成別人的緊急事件。他在週五下午 5:55 按下寄出鍵的那一秒，自己就可以心安理得去過週末了，因為這顆燙手山芋已經成功砸到你頭上。",
            comfortTip: "深呼吸，不要秒回。只要你不主動犧牲週末，別人的急迫就不會變成你的苦難。"
          },
          diplomacy: {
            tactics: [
              {
                type: "專業邊界型",
                tag: "最推職場・合規自保",
                text: "收到！因目前已接近下班時間，且該項目需完整審視以確保產出品質，我已排定於下週一上班首要時段（09:00）優先處理，預計於週一中午前交付初稿給您。"
              },
              {
                type: "優先順序反問型",
                tag: "讓對方做決策",
                text: "收到這項需求。因目前手頭正專注於今天下班前需交付的 [項目A]，若這份文件必須於週一清晨前完成，請問這兩者的優先順序是否需要為您做調整？"
              },
              {
                type: "體面拖延型",
                tag: "冷靜化解",
                text: "這項需求我大致看過，牽涉的細節較多。為了不倉促遺漏關鍵細節，建議我們週一早上花 10 分鐘對齊方向後，我立刻加速推進！"
              }
            ],
            insight: "職場高情商的核心是：『不要用情緒對抗，用流程與優先級對抗』。強調『為了確保品質』和『工作時段內優先處理』，在主管或同事眼裡既專業且無懈可擊。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：守住這週的週末休息時間，不用含淚加班。",
              secondOrder: "長期連鎖效應：向全團隊樹立『週五壓線急件無效』的專業邊界；對方下次會被迫在週四或週五上午提前規劃，不再把你當成兜底工具人。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：被對方在主管面前告狀說『態度消極、不顧團隊急難』。",
              prevention: "關鍵避坑策略：文字中絕口不提『我要放假』，而是以『為確保專業交付品質』與『週一晨間第一優先排程』進行包裝。"
            },
            firstPrinciples: {
              coreTruth: "勞雇合約購買的是工作時間內的專注產出，而非 24 小時隨叫隨到的情緒待命。"
            }
          }
        },
        {
          id: "work_blame",
          title: "開會時同事把黑鍋甩過來",
          tag: "公然甩鍋",
          rant: "明明是他那邊數據沒給齊，開會的時候主管問進度，他居然當場說：『因為行銷那邊還在卡著，所以我們沒辦法往下做』，直接把責任全部推給我，超不要臉！",
          rageLevel: 96,
          roast: {
            tagTitle: "花式甩鍋奧運金牌",
            stars: "★★★★★",
            comment: "他的甩鍋技術比熱炒店的大廚還要流暢。他可能以為在會議室只要手比得夠快，重力就抓不到他的責任。這種人是把辦公室當成大逃殺在玩呢。",
            comfortTip: "不要當場發火，當場發火會讓主管覺得你情緒化；拿出客觀時間戳，直接用事實優雅反殺。"
          },
          diplomacy: {
            tactics: [
              {
                type: "事實核對型",
                tag: "會議現場・優雅反殺",
                text: "想跟團隊補充說明一下：我們團隊在週三下午已經將初版方案準備完畢，目前正在等待對方提供核心數據清單（已於昨天下午發信跟進）。只要拿到資料，我們承諾在 24 小時內就能無縫推進！"
              },
              {
                type: "合作聚焦型",
                tag: "展現大器格局",
                text: "為了不耽誤整體里程碑，建議我和 [同事姓名] 會後花 15 分鐘把交接格式確認好，今天下班前把這段流程定下來，請主管放心。"
              },
              {
                type: "書面留痕型",
                tag: "會後郵件抄送",
                text: "銜接剛才會議討論，在此附上本週行銷端已完成之進度備忘錄。為利下一階段展開，煩請 [同事團隊] 協助於 [日期] 提供相關數據，我們隨即為您接棒！"
              }
            ],
            insight: "面對甩鍋，永遠不要自辯『不是我的錯』，而是主動提供『客觀時間線與下一步行動』。這會讓全場和主管立刻看清誰在做事、誰在找藉口。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：在主管面前瞬間釐清責任鏈條，化解信任危機。",
              secondOrder: "長期連鎖效應：主管與同事認識到你有嚴密的進度追蹤與留痕習慣，未來甩鍋者在動歪腦筋前會自動避開你。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：當場發飆反駁，讓主管覺得『兩個人都在吵架、團隊溝通不成熟』。",
              prevention: "關鍵避坑策略：絕不使用指責性字眼，只報出時間戳（週三已交付），並主動展現解決問題的格局。"
            },
            firstPrinciples: {
              coreTruth: "職場評價的本質是『誰能可靠地解決問題與產出成果』，事實留痕永遠勝過無謂的辯白。"
            }
          }
        }
      ]
    },
    campus: {
      id: "campus",
      name: "校園學術",
      icon: "🎓",
      description: "組員擺爛、求教授加簽、助教分數有疑義，大學生求生必備！",
      items: [
        {
          id: "campus_freerider",
          title: "分組報告組員裝死擺爛",
          tag: "免費搭便車 Free-rider",
          rant: "群組每次問問題就已讀不回，分配給他的部分做出來像幼兒園剪貼簿，明天就要期末上台了，他居然說他今天有事不能來開會！我想直接把他名字從封面拿掉！",
          rageLevel: 98,
          roast: {
            tagTitle: "幽靈系人間蒸發大師",
            stars: "★★★★★",
            comment: "他的技能樹大概全部點在『隱形術』與『呼吸拿學分』上了。他的名字留在報告封面上，就像外帶便當裡附贈的塑膠湯匙——沒有任何實質營養，但丟掉前你還得猶豫一下。",
            comfortTip: "截圖存檔留證據！大學生最體面的復仇不是私下對罵，而是用格式工整的『分工貢獻表』呈給教授。"
          },
          diplomacy: {
            tactics: [
              {
                type: "最後通牒型",
                tag: "群組公告・白紙黑字",
                text: "各位好，因明天 08:00 是系統繳件死線，為顧及全組成績，我們將於今晚 22:00 進行最終版本封存。目前 [姓名] 的部分仍有較多缺漏，若在 22:00 前未收到更新，我們將直接提交現有成果，並在分工說明表中如實標註各部分進度。"
              },
              {
                type: "向教授陳述型",
                tag: "體面回報・客觀自保",
                text: "教授您好，本組已如期完成期末專案成果。在團隊協作過程中，各組員投入之項目詳如附錄分工貢獻表。若教授對於專題各章節的實作細節有任何評分考量，我們隨時樂意向您進行個別說明。"
              },
              {
                type: "冷靜止損型",
                tag: "專案收尾",
                text: "[姓名] 你好，考量到你今天有其他行程，剩餘的投影片格式修正與講稿我們其他人會先分擔完成。明天現場報告我們就按照每人負責的部分輪流發言，祝你今天事情順利！"
              }
            ],
            insight: "對付擺爛組員切忌情緒性辱罵，這反而會讓教授覺得是全組溝通不良。設立『客觀時間死線（如晚上 10 點）』並在結尾呈交『如實分工貢獻表』，是最具合法性也最有威力的自保手段。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：專案不再被擺爛者卡死，今晚順利封裝繳件。",
              secondOrder: "長期連鎖效應：教授透過客觀分工表給予差別評分，搭便車者承擔自己的學業後果，認真付出的組員成績得到捍衛。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：私自刪除組員姓名，被對方告狀至系辦指責『霸凌或擅自除名』。",
              prevention: "關鍵避坑策略：不私下除名，而是將名字完整保留在報告上，但後方附上嚴謹客觀的『分工章節與貢獻度百分比表』。"
            },
            firstPrinciples: {
              coreTruth: "學分的獲得應當建立在真實的學術貢獻之上，保護自己的汗水成果不被免費掠奪是正當權利。"
            }
          }
        },
        {
          id: "campus_late_add",
          title: "沒修先修課想求教授加簽",
          tag: "求教授通融",
          rant: "這門熱門課沒選到，而且我其實沒修過規定的先修課，但這學期再不修我真的會延畢啊！想寫信求教授通融加簽，但又怕教授覺得我不自量力直接拒絕我。",
          rageLevel: 55,
          roast: {
            tagTitle: "極限操作賭徒",
            stars: "★★☆☆☆",
            comment: "這不是加簽信，這是一封『誠懇越級打怪申請書』。教授看過的求情信大概比他的期刊論文還多，『老師我很有熱忱』這句話在他眼裡就像背景音樂一樣沒感覺。",
            comfortTip: "教授不在乎你有多急，教授在乎的是：加簽了你，你會不會期中考考爛然後期末跑去求他調分？"
          },
          diplomacy: {
            tactics: [
              {
                type: "誠懇積極型",
                tag: "打消教授疑慮・首選",
                text: "尊敬的 [教授姓名] 教授您好，我是 [系級] 學生 [姓名]。非常景仰您在 [領域名稱] 的研究，本學期極希望能修習您的 [課程名稱]。雖然我尚未正式修習先修科目 [課程B]，但我已利用假期研讀 [相關教材/或修過類似網課]，並深知該課程難度。我承諾會額外投入心力跟上進度，若教授願意給予加簽授權碼，我定會全力以赴！"
              },
              {
                type: "旁聽證明型",
                tag: "展現決心",
                text: "教授您好，理解您的課程加簽人數非常嚴格。若目前名額已滿，我非常希望能申請前兩週旁聽，若兩週後有同學退選且我的隨堂表現能讓您認可，再懇請教授考慮加簽機會，非常感謝您的時間！"
              }
            ],
            insight: "寫給教授的求生信關鍵在於『打消疑慮』與『降低負擔』。主動承認先修課不足但提出補救方案（如預習教材、願接受旁聽考驗），遠比單純哭訴『會延畢』更具說服力。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：教授在幾十封加簽信中看見你的誠意與自學準備，批准機率大幅躍升。",
              secondOrder: "長期連鎖效應：在教授心中樹立負責任、有韌性的優質學生印象，為後續專題指導或推薦信埋下伏筆。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：信中大談個人延畢慘況，被教授認為是缺乏規劃還想情勒選課機制。",
              prevention: "關鍵避坑策略：絕口不寫『拜託救救我我會延畢』，聚焦於『我對該領域的學術熱情與已完成的先修自學成果』。"
            },
            firstPrinciples: {
              coreTruth: "教授加簽的決策標準是『評估該生是否會成為教學負擔』，打消教學風險是獲得通融的唯一核心鑰匙。"
            }
          }
        }
      ]
    },
    living: {
      id: "living",
      name: "生活室友",
      icon: "🏠",
      description: "碗不洗、冰箱食物偷吃、半夜吵鬧，如何化解生活地獄？",
      items: [
        {
          id: "living_dishes",
          title: "吃完碗堆水槽三天不洗",
          tag: "水槽古文明製造者",
          rant: "每次吃完泡麵和外帶碗就往水槽一丟，都發酵出酸味引來果蠅了！明明講過好幾次了到底為什麼可以髒成這樣？我是室友不是你的免費保母耶！",
          rageLevel: 92,
          roast: {
            tagTitle: "生態系培育家",
            stars: "★★★★☆",
            comment: "那個水槽裡的不是碗盤，是他在進行某種新型微生物培養實驗。他可能在等盤子裡的細菌進化出高度文明，然後自己走路去洗碗機洗澡呢。",
            comfortTip: "別幫他洗，幫他洗一次你就得幫他洗一輩子。用幽默化解尷尬，但要把界線釘死。"
          },
          diplomacy: {
            tactics: [
              {
                type: "幽默提醒型",
                tag: "群組破冰・好笑有用",
                text: "各位室友注意～水槽裡的碗盤好像快要進化出自主意識跟我們打招呼了！今天哪位大廚的料理廚具記得回家給它們洗個熱水澡喔，果蠅們已經在旁邊開派對了哈哈！"
              },
              {
                type: "清晰公約型",
                tag: "理性建立共識",
                text: "哈囉大家，為了維護廚房衛生，我們之前約定過當天碗盤當天洗～水槽裡有些餐具堆了幾天已有異味，麻煩主人今天睡前隨手清理一下，大家住起來也比較舒服！"
              },
              {
                type: "行動邊界型",
                tag: "不撕破臉的實際作法",
                text: "嗨！因為水槽目前滿了大家都沒辦法洗菜/洗手，我先把你的碗盤先集中放到旁邊的塑膠盆裡囉，等你今天回來再洗～"
              }
            ],
            insight: "生活瑣事的溝通忌諱人身攻擊（如『你很噁心』），改為指涉『公共環境的客觀影響（果蠅、佔用水槽）』，並以群組公共維護的角度切入，最能達到效果而不反目。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前直接反應：室友看到訊息不好意思再裝傻，今晚主動將碗盤洗淨。",
              secondOrder: "長期連鎖效應：確立『公共區域當日清』的生活底線，防止懶散習慣蔓延成全棟宿舍的衛生地獄。"
            },
            preMortem: {
              risk: "最可能踩雷的翻車點：好心順手幫洗，導致對方產生依賴心理，從此把碗盤視為理所當然由你處理。",
              prevention: "關鍵避坑策略：絕對不要順手幫洗！採用『集中移盆』維護水槽淨空，讓責任物歸原主。"
            },
            firstPrinciples: {
              coreTruth: "合住生活的核心基石是公共衛生的底線共識，守住邊界才能換來長久舒適的同住關係。"
            }
          }
        }
      ]
    },
    daily: {
      id: "daily",
      name: "人生課題",
      icon: "🌱",
      description: "爸媽碎念催婚、曖昧卡關、身體亮紅燈，日常三大難題一次拆解！",
      items: [
        {
          id: "daily_family",
          title: "爸媽施壓催婚又愛管東管西",
          tag: "人生代駕司機",
          rant: "選科系要管、工作要管，現在連結婚都要催！每次講沒兩句就說『我都是為你好』，我是你小孩不是你的人生代辦專案吧？壓力真的好大，到底要怎麼溝通才不會吵起來？",
          rageLevel: 85,
          roast: {
            tagTitle: "人生代駕司機",
            stars: "★★★★☆",
            comment: "他們自聘為你人生的代駕——猛踩那台寫著『為你好』的油門，完全無視導航上寫的『當事人選擇』。愛是真的，車開太猛也是真的。",
            comfortTip: "爸媽的壓力通常是愛，只是用他們唯一會的語言講。你不需要照單全收才叫孝順——翻譯它，不要整顆吞下去。"
          },
          diplomacy: {
            tactics: [
              {
                type: "翻譯安心型",
                tag: "給方案・消擔心",
                text: "我知道你會這樣講是因為擔心我——這點我先謝謝你。我目前的規劃是這樣：[方案]。過程我會跟你更新進度，好不好？"
              },
              {
                type: "角色界線型",
                tag: "成年人決策・報告不請示",
                text: "我很重視跟你討論，但這件事我得自己扛——畢竟日子是我自己在過。我已經做了決定，希望你當我的支持者，不是路線審查員。"
              },
              {
                type: "平靜重申型",
                tag: "答案不變・不再辯論",
                text: "我知道我們在這件事上看法不同，這沒關係——我的答案沒有變。我更想好好吃飯、聽你聊聊你最近的興趣，而不是再吵一次。成交？"
              }
            ],
            insight: "家人的界線要當『門』不要當『牆』：牆會引發攻城心態、吵個沒完。把關係通道開大，把決策通道設成單向——你分享結果，不開放否決權。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前反應：你用計畫而不是防禦來回應，這個話題就抓不住餐桌了。",
              secondOrder: "長遠效應：他們不再把你當需要管理的小孩，而是會主動匯報的大人。"
            },
            preMortem: {
              risk: "潛在翻車點：把理由講得太詳細，等於邀請他們逐條辯論。",
              prevention: "避坑策略：先講決定、再講方案——細節是『更新進度』，不是『送審』。"
            },
            firstPrinciples: {
              coreTruth: "你可以尊重父母的聲音，卻不必交出否決權——愛與自主不是零和遊戲。"
            }
          }
        },
        {
          id: "daily_relationship",
          title: "曖昧卡關搞不清楚關係",
          tag: "戀愛觀光客",
          rant: "到底在一起了沒啊？每次問『我們算什麼』他就顧左右而言他，這週還已讀不回兩次！喜歡一個人還要靠猜真的很累，我只想要一個清楚的答案有這麼難嗎？",
          rageLevel: 78,
          roast: {
            tagTitle: "戀愛觀光客",
            stars: "★★★★☆",
            comment: "他把戀愛當成觀光行程——收集體驗、狂拍美照，就是從不簽長期租約。你卻在那邊狂刷新聊天視窗，像它欠你利息一樣。感情值得有個目的地，不是無限轉機。",
            comfortTip: "你談判不了化學反應，但你談判得了清楚。問一個誠實的問題；無論答案是什麼，至少你不用繼續在腦袋裡付房租。"
          },
          diplomacy: {
            tactics: [
              {
                type: "輕踩試探型",
                tag: "零壓力・留面子",
                text: "所以～我已經在浴室裡把這段話排練得像奧斯卡得獎感言了哈哈😅——認真的，我們現在到底算什麼？不用搞得很盛大，氣氛確認一下就好！"
              },
              {
                type: "真誠溫柔型",
                tag: "分享感受・邀請回應",
                text: "嗨，我很享受跟你相處的過程，也喜歡我們現在的狀態。想聽聽你對我們的感覺是什麼——完全沒壓力，我單純很好奇你心裡的模樣。"
              },
              {
                type: "清晰底線型",
                tag: "寧要清楚・不要舒服",
                text: "我現在要清楚勝過要舒服。如果你沒有同樣的想法那也沒關係——但我寧可現在就知道，也不想繼續猜然後抱著期待過日子。"
              }
            ],
            insight: "曖昧不是浪漫，是欠債，每個沒問出口的問題都在累積利息。一句冷靜、無壓力的提問，就能把情緒欠款換成一段真關係或一個乾淨的答案——兩者都比無限期待便宜。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前反應：曖昧被打破——你得到真實答案，而不是半夜兩點還在腦海重播舊對話。",
              secondOrder: "長遠效應：你停止試鏡一個可能不存在的角色，把情緒頻寬拿回來。"
            },
            preMortem: {
              risk: "潛在翻車點：帶著情緒下最後通牒，會把誠實提問變成威脅。",
              prevention: "避坑策略：挑冷靜的時候、能見面就見面問——說『沒壓力』的時候要真的沒壓力。"
            },
            firstPrinciples: {
              coreTruth: "關係存在於兩人共同確認的地方——清楚，比漫長的希望更仁慈。"
            }
          }
        },
        {
          id: "daily_health",
          title: "身體亮紅燈老闆還不准請假",
          tag: "人體電池剩 3%",
          rant: "連續忙了好幾個禮拜根本沒休息，今天起來頭痛又發燒超不舒服，結果老闆還說案子趕不能請假！我又不是機器人，身體都在發警報了，是一定要我垮給他看嗎？",
          rageLevel: 88,
          roast: {
            tagTitle: "人體電池剩 3%",
            stars: "★★★★☆",
            comment: "你的身體已經跳出『電量不足』通知好幾個月了，你每次都像關彈窗一樣滑掉。劇透：這台硬體沒有『以後再處理』模式，只有關機模式。",
            comfortTip: "休息不是昏倒之後才領得到的獎勵，是避免昏倒的保養。今天就先掛號——未來的你已經先謝過了。"
          },
          diplomacy: {
            tactics: [
              {
                type: "事實同步型",
                tag: "狀況＋備援＋歸隊",
                text: "哈囉，先跟你同步一下：我今天醒來 [發燒/偏頭痛]，需要休息一天。[工作] 我已經交給 [同事] 並會在家遠端關注——我明天回到崗位，一早先補進度。"
              },
              {
                type: "補償方案型",
                tag: "替期限拆風險",
                text: "我今天狀況沒辦法給這件事該有的專注。與其交半成品，[期限] 能不能改到 [日期]？補回來的計畫我先排好了——追進度的責任我扛。"
              },
              {
                type: "健康底線型",
                tag: "先修復・再歸隊",
                text: "我硬撐了一段時間，身體開始收利息了。我先請 [今天/明天] 把狀態養回來，才能以 100% 回歸——一上線我立刻回報進度。"
              }
            ],
            insight: "健康請假要用『風險管理』包裝才容易准：講客觀狀況、給備援方案、給歸隊日期。主管可以拒絕幫忙，但拒絕不了傳染風險，也拒絕不了一個已經拆完風險的排程。"
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "眼前反應：你不再假裝活得很好，身體終於拿到它喊了很久的修復窗口。",
              secondOrder: "長遠效應：如實回報狀態變成常態而不是冒險——預防勝過你一直延期的急診。"
            },
            preMortem: {
              risk: "潛在翻車點：只說『我生病了』卻沒有交接，會被當藉口，還會被拿來談判。",
              prevention: "避坑策略：壞消息旁邊永遠附上備援方案與歸隊日期。"
            },
            firstPrinciples: {
              coreTruth: "身體是你唯一不可替換的硬體——保養不是選配。"
            }
          }
        }
      ]
    }
  },
  "en": {
    friends: {
      id: "friends",
      name: "Friends & Social",
      icon: "👥",
      description: "Tired of annoying friend habits but don't want to destroy the friendship?",
      items: [
        {
          id: "friend_late",
          title: "Always 10 Mins Late",
          tag: "Chronic Tardiness",
          rant: "Every single time we meet up, they're 10 minutes late! Always texting 'almost there' while I freeze on the sidewalk. Is my time worth nothing?!",
          rageLevel: 82,
          roast: {
            tagTitle: "Time-Warp Specialist",
            stars: "★★★★☆",
            comment: "Their 'almost there' literally means they just sat up in bed and started looking for their second sock. Their watch isn't slow; their personal life clock moves slower than a sloth on vacation. Next time, tell them the meetup is 30 minutes earlier—when they show up 'on time', they'll genuinely think they won an award.",
            comfortTip: "Getting mad burns valuable calories. Once they arrive, make them buy you a boba drink to compensate for emotional distress."
          },
          diplomacy: {
            tactics: [
              {
                type: "Playful Tease",
                tag: "Best for Friends・No Hard Feelings",
                text: "I've officially inhaled all the AC in this shop waiting for you! If you don't show up in 2 minutes, your late fee is a large iced boba on you~"
              },
              {
                type: "Gentle Boundary",
                tag: "Clear & Considerate",
                text: "I noticed timing is usually pretty tight for you. Next time, why don't we just plan for 15 minutes later? That way you don't have to rush, and I don't have to stand guard outside haha!"
              },
              {
                type: "Proactive Pivot",
                tag: "Take Back Control",
                text: "Hey! I just got here, but I'm going to pop into the bookstore next door to browse. Call me when you arrive—no rush, just don't keep me waiting too long!"
              }
            ],
            insight: "Calling out a close friend with direct blame triggers defensive guilt. Using playful extortion (demanding a drink) or considerate rescheduling delivers the message without putting them on the defensive."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Friend acknowledges the wait with a laugh rather than defensive irritation.",
              secondOrder: "Downstream: Friend starts budgeting travel time more mindfully; prevents quiet resentment from detonating the friendship months later."
            },
            preMortem: {
              risk: "Worst Failure Mode: Sounding like an angry parent scolding them, making them feel attacked.",
              prevention: "Prevention: Anchor the boundary in playful humor (demanding a drink) or scheduling pragmatism."
            },
            firstPrinciples: {
              coreTruth: "The objective is not enforcing strict punctuality; it is respecting your time while preserving a joyful friendship."
            }
          }
        },
        {
          id: "friend_bad_words",
          title: "Friends Constantly Swearing / Harsh Talk",
          tag: "Verbal Friction",
          rant: "My friends always said bad words, I felt annoying. Every conversation is full of vulgar language and I'm tired of hearing it!",
          rageLevel: 80,
          roast: {
            tagTitle: "Uncensored Broadcast Malfunction",
            stars: "★★★★☆",
            comment: "Their mouth seems to be running on an R-rated cable channel with zero parental controls. It's as if they think profanity adds seasoning, when in reality it just sounds like verbal pollution and electrical static.",
            comfortTip: "You're their friend, not their kindergarten teacher. You have every right to protect your mental peace from acoustic trash."
          },
          diplomacy: {
            tactics: [
              {
                type: "Playful Tease",
                tag: "Lighthearted・No Hard Feelings",
                text: "Bro, your vocabulary is sounding like an uncut mafia movie today! Tone down the R-rated filter before my ears start charging you an emotional distress fee haha."
              },
              {
                type: "Gentle Boundary",
                tag: "Focus on Personal Feeling",
                text: "Hey, honestly it gets kind of draining when every conversation has harsh words in it. I really enjoy hanging out with you, but can we dial back the swearing? It'd make chatting way more fun for me!"
              },
              {
                type: "Firm Standard",
                tag: "Mutual Respect",
                text: "I value our friendship, but I really dislike being around constant cursing and negative phrasing. Let's keep things respectful so we can both have a good time, deal?"
              }
            ],
            insight: "Chronic swearing is usually an unconscious habit or an attempt to sound casual. Rather than a moral lecture ('You're rude'), stating personal sensory discomfort ('It drains my energy') shifts the boundary without putting them on the defensive."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Friend pauses and realizes their speech habit is causing real discomfort.",
              secondOrder: "Downstream: Group conversations naturally detoxify, saving significant emotional energy during future hangouts."
            },
            preMortem: {
              risk: "Worst Failure Mode: Being dismissed as overly sensitive or a 'buzzkill'.",
              prevention: "Prevention: State your personal fatigue ('it drains my energy') rather than judging their character."
            },
            firstPrinciples: {
              coreTruth: "Communication exists to connect people; constant profanity is cognitive noise. You have full right to protect your mental sanctuary."
            }
          }
        },
        {
          id: "friend_any",
          title: "Always Replies 'Anything' For Food",
          tag: "Indecisive Deflection",
          rant: "Whenever I ask what to eat, they say 'anything, I'm easy'. But when I offer 3 places, they reject all of them! What on earth do you actually want?!",
          rageLevel: 75,
          roast: {
            tagTitle: "Human Veto Machine",
            stars: "★★★☆☆",
            comment: "Their 'anything' translates to: 'I have no clue what I want, but I definitely know I'll dislike whatever you pick.' They don't lack opinions—they just pass the mental burden of deciding to you while retaining full veto power.",
            comfortTip: "Never ask open-ended food questions to these people. Use closed binary choices or just pick a spot and start walking."
          },
          diplomacy: {
            tactics: [
              {
                type: "Playful Tease",
                tag: "Break the Standoff",
                text: "Alert! Your 'Anything Quota' for today is depleted! You now have a 5-second countdown to choose between Ramen or Curry, or I'm dragging you to Ramen right now~"
              },
              {
                type: "Confident Lead",
                tag: "Take Charge",
                text: "Since neither of us has a strong craving, let's just hit up that Italian pasta place down the street. I made a table reservation already, let's go!"
              },
              {
                type: "Gentle Boundary",
                tag: "Fair Delegation",
                text: "My brain is out of decision juice today! How about you pick two options you like, and I'll make the final call between them? Fair deal!"
              }
            ],
            insight: "Asking an indecisive friend 'What do you feel like?' increases their choice anxiety. Constraining the options into a forced binary choice or taking cheerful initiative relieves their mental load."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Eliminates 20 minutes of aimless walking and back-and-forth hesitation.",
              secondOrder: "Downstream: Establishes a swift '2-option delegation' habit for all future dinner meetups."
            },
            preMortem: {
              risk: "Worst Failure Mode: Picking a spot that violates a dietary restriction they forgot to mention.",
              prevention: "Prevention: Offer a binary choice (Option A or B) so they retain quick final consent."
            },
            firstPrinciples: {
              coreTruth: "The fundamental purpose of dinner with a friend is shared presence, not democratic perfection."
            }
          }
        }
      ]
    },
    workplace: {
      id: "workplace",
      name: "Workplace & Career",
      icon: "💼",
      description: "Colleagues deflecting blame, urgent tasks dumped before leaving, client scope creep?",
      items: [
        {
          id: "work_urgent",
          title: "Urgent Tasks Dumped at 5:55 PM",
          tag: "Friday Sneak Attack",
          rant: "Radio silence all afternoon, and then 5 minutes before clocking out on Friday, they dump files saying 'Super urgent, need this Monday 9am.' Is your Monday morning my weekend?! Learn to plan ahead!",
          rageLevel: 94,
          roast: {
            tagTitle: "Weekend Assassin",
            stars: "★★★★★",
            comment: "This isn't an emergency; it's their chronic procrastination disguised as your crisis. The exact moment they pressed 'Send' at 5:55 PM, they felt relieved and ready for the weekend because the hot potato is now officially in your lap.",
            comfortTip: "Breathe deeply and do not reply instantly. Unless you volunteer your weekend, someone else's poor planning is not your emergency."
          },
          diplomacy: {
            tactics: [
              {
                type: "Professional Boundary",
                tag: "Workplace Standard・Self-Defense",
                text: "Received! As we are at the end of the working day and this requires thorough review to guarantee quality, I have scheduled this as my top priority for Monday morning at 09:00. I will deliver the initial draft by Monday noon."
              },
              {
                type: "Priority Calibration",
                tag: "Put Choice on Requester",
                text: "Noted on this request. I am currently finalizing [Project A] for today's deadline. If this new file must be completed before Monday morning, could you clarify which of these two takes priority?"
              },
              {
                type: "Graceful Deferral",
                tag: "Cool & Collected",
                text: "I took a brief look—there are several moving parts here. To ensure we don't overlook critical details, let's sync for 10 minutes first thing Monday morning to align, and I'll accelerate execution right after!"
              }
            ],
            insight: "High-EQ workplace communication never fights emotion with emotion—it counters with process, priority, and quality standards. Framing your deferral as 'ensuring deliverable quality' makes your boundary bulletproof."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Reclaims your weekend without open confrontation.",
              secondOrder: "Downstream: Teaches the sender that late dumps fail to produce free weekend work, training them to schedule requests earlier."
            },
            preMortem: {
              risk: "Worst Failure Mode: Being framed to leadership as 'uncooperative during an urgent project crisis'.",
              prevention: "Prevention: State 'prioritizing Monday 09:00 to ensure quality'—this frames you as quality-conscious rather than unhelpful."
            },
            firstPrinciples: {
              coreTruth: "Employment contracts buy professional output during working hours, not unpaid round-the-clock panic."
            }
          }
        },
        {
          id: "work_blame",
          title: "Colleague Deflecting Blame in Meeting",
          tag: "Blatant Scapegoating",
          rant: "They failed to provide the necessary data, but when the boss asked for status in the all-hands meeting, they had the audacity to say 'We're blocked because marketing is slow'! Throwing me under the bus on the spot!",
          rageLevel: 96,
          roast: {
            tagTitle: "Olympic Scapegoat Champion",
            stars: "★★★★★",
            comment: "Their blame-shifting reflex is smoother than a teppanyaki chef. They seem to believe that as long as they point fingers fast enough in a Zoom meeting, gravity won't catch up with their incompetence.",
            comfortTip: "Never explode in the meeting—anger looks unprofessional. Present neutral timestamps and let the facts deliver the counter-punch."
          },
          diplomacy: {
            tactics: [
              {
                type: "Factual Alignment",
                tag: "In-Meeting・Elegant Rebuttal",
                text: "Just to clarify for the team: our side completed the initial proposal on Wednesday afternoon. We're currently waiting on the core data set (followed up via email yesterday). Once that arrives, we're primed to turn it around within 24 hours!"
              },
              {
                type: "Solution-Oriented",
                tag: "Show Executive Maturity",
                text: "To ensure we don't compromise the milestone, I suggest [Colleague] and I spend 15 minutes right after this call to lock in the handover format today, so management doesn't have to worry."
              },
              {
                type: "Written Trail",
                tag: "Post-Meeting Follow-Up",
                text: "Following up on today's discussion, attaching the completed deliverables from marketing this week. To unlock the next sprint, kindly share the requested data metrics by [Date], and we'll take the baton immediately!"
              }
            ],
            insight: "Never respond to scapegoating by saying 'It's not my fault'. Instead, state objective timestamps and immediate next steps. Leadership will instantly see who is executing and who is making excuses."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Objective timeline displayed in front of management, dispelling blame.",
              secondOrder: "Downstream: Builds a reputation for rigorous documentation and executive maturity; scapegoaters learn to avoid you."
            },
            preMortem: {
              risk: "Worst Failure Mode: Interrupting with high emotional intensity, making leadership view it as petty squabbling.",
              prevention: "Prevention: State cold timestamps (delivered Wednesday) followed by a constructive next step."
            },
            firstPrinciples: {
              coreTruth: "Organizational trust is earned through documented execution and constructive forward motion, not emotional debates."
            }
          }
        }
      ]
    },
    campus: {
      id: "campus",
      name: "Campus & Academic",
      icon: "🎓",
      description: "Slacking teammates, begging professors for overrides, grade review requests.",
      items: [
        {
          id: "campus_freerider",
          title: "Slacker Teammate on Group Project",
          tag: "Free-Rider Alert",
          rant: "Leaves messages on read, submits work that looks like a toddler's collage, and the night before our final presentation, tells us they 'have personal plans and can't meet'! I want to strip their name off the title slide right now!",
          rageLevel: 98,
          roast: {
            tagTitle: "Invisibility & Free-Ride Master",
            stars: "★★★★★",
            comment: "Their entire skill tree was invested into 'Stealth Camouflage' and 'Breathing to Earn Credits'. Having their name on the cover page is like the plastic fork in a takeout box—zero nutritional value, but you feel awkward throwing it out.",
            comfortTip: "Take screenshots and document everything. The cleanest student revenge isn't a flame war, it's submitting a neat 'Contribution Breakdown Table' to the professor."
          },
          diplomacy: {
            tactics: [
              {
                type: "Firm Deadline",
                tag: "Group Chat・Black and White",
                text: "Hey team, since the portal closes at 08:00 tomorrow, we will freeze the final submission at 22:00 tonight. [Name]'s section still has notable gaps; if updates aren't received by 22:00, we will submit existing work and accurately reflect the progress in the contribution appendix."
              },
              {
                type: "Professor Notice",
                tag: "Professional & Fact-Based",
                text: "Dear Professor [Name], our group has finalized the term project as scheduled. As detailed in the attached Group Contribution Matrix, individual task allocations are documented. Should you have any questions regarding chapter ownership during grading, we are glad to provide details."
              },
              {
                type: "Controlled Wrap-Up",
                tag: "Damage Containment",
                text: "Hey [Name], since you're occupied today, the rest of us will handle the formatting and script wrap-up. For tomorrow's live presentation, we will each speak strictly on the sections we authored. Best of luck with your schedule today!"
              }
            ],
            insight: "Never yell at a free-rider in group chat—professors view emotional bickering as poor team coordination. Setting a hard timestamp deadline and submitting an objective contribution table provides legitimate, undeniable protection."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Project is finalized cleanly tonight without relying on missing pieces.",
              secondOrder: "Downstream: Professor grades proportionally based on the contribution log; slackers bear their academic consequences while serious students are protected."
            },
            preMortem: {
              risk: "Worst Failure Mode: Erasing their name unilaterally, prompting them to complain to the department about 'group bullying'.",
              prevention: "Prevention: Keep their name on the cover, but submit an explicit, documented chapter ownership matrix."
            },
            firstPrinciples: {
              coreTruth: "Academic credit reflects intellectual contribution. Documenting reality is not betrayal; it is fair accounting."
            }
          }
        },
        {
          id: "campus_late_add",
          title: "Begging Professor to Waive Prerequisite",
          tag: "Prerequisite Override",
          rant: "The course is full, and I haven't taken the official prerequisite yet, but if I can't take it this term, I will genuinely have to delay graduation! How do I ask the professor without sounding totally unqualified?!",
          rageLevel: 55,
          roast: {
            tagTitle: "High-Stakes Academic Gambler",
            stars: "★★☆☆☆",
            comment: "This isn't an add-code request; this is an application to fight the final boss with Level 1 gear. Professors see hundreds of 'I have immense passion' emails; to them, it's just background elevator music.",
            comfortTip: "The professor doesn't care how desperate you are. They care about: if they let you in, will you fail the midterm and beg for a curve at finals?"
          },
          diplomacy: {
            tactics: [
              {
                type: "Proactive Assurance",
                tag: "Remove Professor's Doubt・Top Pick",
                text: "Dear Professor [Name], I am [Name], a [Year/Major] student. I admire your research in [Field] and am eager to enroll in [Course]. While I have not formally completed [Prereq Course], I spent the break self-studying [Textbook/Materials] and understand the rigorous workload. I am fully committed to putting in extra effort to keep pace, and would be deeply grateful for an add authorization code!"
              },
              {
                type: "Audit-to-Enroll",
                tag: "Demonstrate Commitment",
                text: "Dear Professor [Name], I understand class capacity is strictly capped. If enrollment is currently unavailable, could I request permission to audit the first two weeks? If seats open up and my class engagement earns your approval, I would be honored to be considered for an add code."
              }
            ],
            insight: "Asking professors for exceptions requires mitigating their risk. Acknowledging the prerequisite gap while providing evidence of self-prep (or offering to audit first) is far more persuasive than emotional pleas about graduation."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Professor notes your mature self-preparation above standard desperate emails.",
              secondOrder: "Downstream: Establishes a strong rapport; even if full, you are positioned first in line for future overrides or mentorship."
            },
            preMortem: {
              risk: "Worst Failure Mode: Pleading desperation ('I will delay graduation'), signaling lack of academic planning.",
              prevention: "Prevention: Never plead desperation; frame everything through demonstrated self-prep and willingness to audit."
            },
            firstPrinciples: {
              coreTruth: "Professors grant overrides to students who minimize teaching risk, not those who maximize emotional liability."
            }
          }
        }
      ]
    },
    living: {
      id: "living",
      name: "Roommates & Living",
      icon: "🏠",
      description: "Dirty dishes, stolen fridge food, midnight noise — how do you survive shared living hell?",
      items: [
        {
          id: "living_dishes",
          title: "Dishes Piled in the Sink for 3 Days",
          tag: "Ancient Sink Civilization",
          rant: "Every time they finish instant noodles or takeout, the bowl goes straight into the sink — now it's sour and breeding fruit flies! I've told them so many times, how can it possibly get this dirty?! I'm a roommate, not their free live-in maid!",
          rageLevel: 92,
          roast: {
            tagTitle: "Ecosystem Cultivator",
            stars: "★★★★☆",
            comment: "That's not dishes in the sink — it's a cutting-edge microbial cultivation experiment. He's probably waiting for the bacteria on his plates to evolve into a full civilization that walks itself to the dishwasher for a bath.",
            comfortTip: "Don't wash for them — do it once and you'll be doing it forever. Defuse the awkwardness with humor, but nail that boundary in place."
          },
          diplomacy: {
            tactics: [
              {
                type: "Playful Reminder",
                tag: "Group Icebreaker・Funny & Effective",
                text: "Attention roommates! The dishes in the sink seem to be evolving self-awareness and about to say hi to us! Whoever owns tonight's cooking gear, take it home and give it a hot bath — the fruit flies are already throwing a party around it haha!"
              },
              {
                type: "Clear House Rules",
                tag: "Build Consensus Calmly",
                text: "Hey everyone, to keep the kitchen sanitary we agreed long ago: dishes get washed the same day. Some utensils in the sink have been sitting for days and smell now — could whoever owns them do a quick rinse before bed? It'll be comfier for all of us!"
              },
              {
                type: "Action Boundary",
                tag: "Practical, No Burned Bridges",
                text: "Hey! The sink is full so nobody can wash veggies or hands, so I've moved your dishes into the plastic basin on the side for now — feel free to wash them when you get back tonight!"
              }
            ],
            insight: "When nagging about chores, avoid personal attacks ('you're disgusting'). Point instead to the objective impact on the shared space (fruit flies, an occupied sink) and frame it as common-area upkeep — that gets results without anyone falling out."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate: Flatmate washes the dishes tonight without feeling cornered into a fight.",
              secondOrder: "Downstream: Re-solidifies the shared house rule permanently, preventing hygiene standards from deteriorating."
            },
            preMortem: {
              risk: "Worst Failure Mode: Washing it yourself out of impatience, creating permanent servant expectations.",
              prevention: "Prevention: Never wash their dishes; place them into a clean container basin to free up the sink."
            },
            firstPrinciples: {
              coreTruth: "Shared living depends on enforced common area boundaries, not unilateral silent sacrifice."
            }
          }
        }
      ]
    },
    daily: {
      id: "daily",
      name: "Life & Wellbeing",
      icon: "🌱",
      description: "Parent pressure, situationship limbo, body at 3% battery — life's three toughest everyday dilemmas, decoded.",
      items: [
        {
          id: "daily_family",
          title: "Parents Meddling & Pushing for Marriage",
          tag: "Backseat Life Driver",
          rant: "They controlled my major, my job, and now they're pressuring me to get married! Every conversation ends with 'it's for your own good.' I'm their kid, not their life project! How do I even talk to them without starting a fight?",
          rageLevel: 85,
          roast: {
            tagTitle: "Backseat Life Driver",
            stars: "★★★★☆",
            comment: "They've appointed themselves chauffeurs of your life — flooring the accelerator labeled 'it's for your own good' while ignoring the GPS that says 'their choice'. The love is real. So is the reckless driving.",
            comfortTip: "Their pressure is usually love delivered in the only language they ever learned. You don't have to obey the message to respect the messenger — translate it, don't swallow it whole."
          },
          diplomacy: {
            tactics: [
              {
                type: "Reframe & Reassure",
                tag: "Show Plan・Defuse Worry",
                text: "I know this comes from you caring about me — thank you for that. Here's exactly how I'm planning to handle it: [plan]. I'll keep you posted on how it goes, okay?"
              },
              {
                type: "Role Boundary",
                tag: "Report, Don't Ask",
                text: "I really value talking things through with you, but this one I have to own — I'm the one who'll live with the decision. I've made my call, and I'd love your support on the ride, not a veto on the route."
              },
              {
                type: "Steady Repetition",
                tag: "Same Answer・No Debate",
                text: "I know we see this differently, and that's okay — my answer hasn't changed. I'd much rather enjoy dinner hearing about [their hobby] than relitigate this one. Deal?"
              }
            ],
            insight: "Family boundaries work best as doors, not walls: walls trigger siege mentality and endless escalation. Keep the relationship channel wide open while making the decision channel one-way — you share outcomes, not vetoes."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate Reaction: You respond with a plan instead of defense, so the topic loses its grip on dinner.",
              secondOrder: "Ripple Effect: They stop seeing you as the kid who needs managing and start seeing an adult who reports rather than asks."
            },
            preMortem: {
              risk: "Potential Pitfall: Explaining your reasoning in exhaustive detail invites them to debate every detail.",
              prevention: "Safeguard: Lead with the decision and the plan — details are shared as updates, not submitted for approval."
            },
            firstPrinciples: {
              coreTruth: "You can honor your parents' voice without handing them the veto — love and autonomy are not zero-sum."
            }
          }
        },
        {
          id: "daily_relationship",
          title: "Situationship Stuck in Ambiguity",
          tag: "Relationship Tourist",
          rant: "Are we together or not? Every time I ask 'so what are we?', he dodges the question — and he left me on read twice this week! Guessing someone's feelings is exhausting. I just want one clear answer, is that too much?",
          rageLevel: 78,
          roast: {
            tagTitle: "Relationship Tourist",
            stars: "★★★★☆",
            comment: "They treat love like a sightseeing tour — collecting experiences, taking selfies, never signing the lease. Meanwhile you're refreshing a chat window like it owes you interest. Feelings deserve a destination, not an endless layover.",
            comfortTip: "You can't negotiate chemistry, but you can negotiate clarity. Ask one honest question; whatever the answer, at least you stop paying rent in your own head."
          },
          diplomacy: {
            tactics: [
              {
                type: "Playful Probe",
                tag: "Low Pressure・Saves Face",
                text: "Sooo I've been rehearsing this in the shower like it's an Oscar speech 😅 — but seriously, where are we at? No big dramatic talk needed, just a vibe check!"
              },
              {
                type: "Honest & Gentle",
                tag: "Share Feelings・Invite Reply",
                text: "Hey, I've really enjoyed getting to know you, and I like where this is heading. I'd love to hear how you're feeling about us — no pressure at all, I'm just genuinely curious where your head's at."
              },
              {
                type: "Clear Bottom Line",
                tag: "Clarity Over Comfort",
                text: "I'm at a point where clarity matters more to me than comfort. If you're not on the same page, that's completely fine — but I'd rather know now than keep guessing and hoping for the best."
              }
            ],
            insight: "Ambiguity isn't romance — it's debt, and every unspoken question compounds interest. One calm, low-pressure question converts emotional debt into either a real relationship or a clean answer; both are cheaper than endless hope."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate Reaction: The ambiguity breaks — you get a real answer instead of replaying old chats in your head at 2am.",
              secondOrder: "Ripple Effect: You stop auditioning for a role that may not exist and reclaim your emotional bandwidth."
            },
            preMortem: {
              risk: "Potential Pitfall: Delivering an ultimatum while emotional turns an honest question into a threat.",
              prevention: "Safeguard: Ask when calm, face-to-face if possible — and mean it when you say 'no pressure'."
            },
            firstPrinciples: {
              coreTruth: "A relationship only exists where two people agree it exists — clarity is kinder than prolonged hope."
            }
          }
        },
        {
          id: "daily_health",
          title: "Body Failing, Boss Won't Grant Leave",
          tag: "Human Battery at 3%",
          rant: "I've been going non-stop for weeks with zero rest, and today I woke up with a headache and fever. My boss still says the deadline is too tight for me to take leave! I'm not a robot — my body is sounding alarms and he wants me to collapse first?",
          rageLevel: 88,
          roast: {
            tagTitle: "Human Battery at 3%",
            stars: "★★★★☆",
            comment: "Your body has been pushing 'low battery' notifications for months and you keep swiping them away like annoying pop-ups. Spoiler: the hardware has no 'deal with it later' mode — only a shutdown.",
            comfortTip: "Rest isn't a reward you earn after collapsing — it's the maintenance that prevents the collapse. Book the appointment today; future-you is already thanking you."
          },
          diplomacy: {
            tactics: [
              {
                type: "Factual Sync",
                tag: "Condition + Coverage + Return",
                text: "Hi, quick heads-up: I woke up with [fever/migraine] and should rest today. I've handed [task] to [name] and will monitor from home — I'll be back online tomorrow and catch up first thing."
              },
              {
                type: "Coverage Plan",
                tag: "De-risk The Deadline",
                text: "I'm not well enough to give this my usual focus today. Rather than send something half-done, could we move [deadline] to [date]? Here's my plan to make up the time — I'll own the catch-up."
              },
              {
                type: "Health Boundary",
                tag: "Recover To Return At 100%",
                text: "I've been pushing through and it's catching up with me. I'm taking [today/tomorrow] to recover so I can come back at full capacity — I'll send an update the moment I'm back online."
              }
            ],
            insight: "Health requests land when framed as risk management, not weakness: state the objective condition, show the coverage plan, give a return date. A superior can decline a favor, but not a contagion risk or a deadline that's already been de-risked."
          },
          thinkingLens: {
            secondOrder: {
              firstOrder: "Immediate Reaction: You stop performing wellness you don't feel, and the body gets the recovery window it's been demanding.",
              secondOrder: "Ripple Effect: Honest status updates become normal instead of risky — prevention beats the ER visit you keep postponing."
            },
            preMortem: {
              risk: "Potential Pitfall: 'I'm sick' with zero handover reads as an excuse and invites negotiation.",
              prevention: "Safeguard: Always pair the bad news with a coverage plan and a return date."
            },
            firstPrinciples: {
              coreTruth: "Your body runs the only irreplaceable hardware you own — maintenance is not optional."
            }
          }
        }
      ]
    }
  }
};
