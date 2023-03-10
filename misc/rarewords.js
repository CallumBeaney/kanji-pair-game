const rareWords = {
  "亜流": {
    "kana": "ありゅう",
    "definition": "derivation"
  },
  "亜麻": {
    "kana": "あま",
    "definition": "flax"
  },
  "哀愁": {
    "kana": "あいしゅう",
    "definition": "sorrow"
  },
  "哀願": {
    "kana": "あいがん",
    "definition": "petition"
  },
  "悲哀": {
    "kana": "ひあい",
    "definition": "sorrow"
  },
  "愛情": {
    "kana": "あいじょう",
    "definition": "love"
  },
  "愛読": {
    "kana": "あいどく",
    "definition": "favorite reading"
  },
  "恋愛": {
    "kana": "れんあい",
    "definition": "love"
  },
  "愛猫": {
    "kana": "あいねこ",
    "definition": "love cat"
  },
  "悪事": {
    "kana": "あくじ",
    "definition": "bad deed"
  },
  "醜悪": {
    "kana": "しゅうあく",
    "definition": "ugliness"
  },
  "悪寒": {
    "kana": "おかん",
    "definition": "chills"
  },
  "好悪": {
    "kana": "こうお",
    "definition": "likes and dislikes"
  },
  "憎悪": {
    "kana": "ぞうお",
    "definition": "hatred"
  },
  "握手": {
    "kana": "あくしゅ",
    "definition": "Handshake"
  },
  "掌握": {
    "kana": "しょうあく",
    "definition": "control"
  },
  "圧迫": {
    "kana": "あっぱく",
    "definition": "oppression"
  },
  "安全": {
    "kana": "あんぜん",
    "definition": "safety"
  },
  "安価": {
    "kana": "あんか",
    "definition": "inexpensive"
  },
  "不安": {
    "kana": "ふあん",
    "definition": "anxiety"
  },
  "安寧": {
    "kana": "あんねい",
    "definition": "well-being"
  },
  "丁寧": {
    "kana": "ていねい",
    "definition": "polite"
  },
  "暗示": {
    "kana": "あんじ",
    "definition": "suggestion"
  },
  "暗愚": {
    "kana": "あんぐ",
    "definition": "ignorance"
  },
  "新案": {
    "kana": "しんあん",
    "definition": "new plan"
  },
  "以後": {
    "kana": "いご",
    "definition": "after that"
  },
  "位置": {
    "kana": "いち",
    "definition": "position"
  },
  "各位": {
    "kana": "かくい",
    "definition": "Dear Sir"
  },
  "放置": {
    "kana": "ほうち",
    "definition": "neglect"
  },
  "処置": {
    "kana": "しょち",
    "definition": "treatment"
  },
  "依頼": {
    "kana": "いらい",
    "definition": "request"
  },
  "依拠": {
    "kana": "いきょ",
    "definition": "reliance on"
  },
  "依然": {
    "kana": "いぜん",
    "definition": "still"
  },
  "帰依": {
    "kana": "きえ",
    "definition": "devotion"
  },
  "信頼": {
    "kana": "しんらい",
    "definition": "trust"
  },
  "偉観": {
    "kana": "いかん",
    "definition": "great view"
  },
  "囲碁": {
    "kana": "いご",
    "definition": "Go"
  },
  "包囲": {
    "kana": "ほうい",
    "definition": "siege"
  },
  "範囲": {
    "kana": "はんい",
    "definition": "range"
  },
  "委任": {
    "kana": "いにん",
    "definition": "delegation"
  },
  "委員": {
    "kana": "いいん",
    "definition": "committee member"
  },
  "委細": {
    "kana": "いさい",
    "definition": "details"
  },
  "威嚇": {
    "kana": "いかく",
    "definition": "intimidation"
  },
  "威圧": {
    "kana": "いあつ",
    "definition": "coercion"
  },
  "示威": {
    "kana": "しい",
    "definition": "Demonstration"
  },
  "尉官": {
    "kana": "いかん",
    "definition": "lieutenant officer"
  },
  "抑揚": {
    "kana": "よくよう",
    "definition": "intonation"
  },
  "掲揚": {
    "kana": "けいよう",
    "definition": "hoisting"
  },
  "慰安": {
    "kana": "いあん",
    "definition": "comfort"
  },
  "慰問": {
    "kana": "いもん",
    "definition": "comfort"
  },
  "慰労": {
    "kana": "いろう",
    "definition": "consolation"
  },
  "易者": {
    "kana": "えきしゃ",
    "definition": "fortune-teller"
  },
  "貿易": {
    "kana": "ぼうえき",
    "definition": "trade"
  },
  "不易": {
    "kana": "ふえき",
    "definition": "immutable"
  },
  "容易": {
    "kana": "ようい",
    "definition": "easy"
  },
  "安易": {
    "kana": "あんい",
    "definition": "Easy"
  },
  "難易": {
    "kana": "なんい",
    "definition": "difficulty"
  },
  "異論": {
    "kana": "いろん",
    "definition": "objection"
  },
  "異同": {
    "kana": "いどう",
    "definition": "difference"
  },
  "奇異": {
    "kana": "きい",
    "definition": "strange"
  },
  "移転": {
    "kana": "いてん",
    "definition": "transfer"
  },
  "移民": {
    "kana": "いみん",
    "definition": "immigration"
  },
  "推移": {
    "kana": "すいい",
    "definition": "Transition"
  },
  "維持": {
    "kana": "いじ",
    "definition": "maintain"
  },
  "維新": {
    "kana": "いしん",
    "definition": "Restoration"
  },
  "繊維": {
    "kana": "せんい",
    "definition": "fiber"
  },
  "北緯": {
    "kana": "ほくい",
    "definition": "north latitude"
  },
  "経緯": {
    "kana": "けいい",
    "definition": "background"
  },
  "胃腸": {
    "kana": "いちょう",
    "definition": "Stomach"
  },
  "胃酸": {
    "kana": "いさん",
    "definition": "stomach acid"
  },
  "胃弱": {
    "kana": "いじゃく",
    "definition": "dyspepsia"
  },
  "衣服": {
    "kana": "いふく",
    "definition": "clothes"
  },
  "違反": {
    "kana": "いはん",
    "definition": "violation"
  },
  "相違": {
    "kana": "そうい",
    "definition": "differ"
  },
  "遺憾": {
    "kana": "いかん",
    "definition": "regret"
  },
  "遺棄": {
    "kana": "いき",
    "definition": "abandonment"
  },
  "遺産": {
    "kana": "いさん",
    "definition": "heritage"
  },
  "遺失": {
    "kana": "いしつ",
    "definition": "loss"
  },
  "遺言": {
    "kana": "ゆいごん",
    "definition": "will"
  },
  "遺恨": {
    "kana": "いこん",
    "definition": "grudge"
  },
  "痛恨": {
    "kana": "つうこん",
    "definition": "regret"
  },
  "悔恨": {
    "kana": "かいこん",
    "definition": "regret"
  },
  "医学": {
    "kana": "いがく",
    "definition": "medicine"
  },
  "医療": {
    "kana": "いりょう",
    "definition": "medical care"
  },
  "医者": {
    "kana": "いしゃ",
    "definition": "doctor"
  },
  "前者": {
    "kana": "ぜんしゃ",
    "definition": "former"
  },
  "区域": {
    "kana": "くいき",
    "definition": "area"
  },
  "育児": {
    "kana": "いくじ",
    "definition": "Childcare"
  },
  "教育": {
    "kana": "きょういく",
    "definition": "education"
  },
  "家族": {
    "kana": "かぞく",
    "definition": "family"
  },
  "民族": {
    "kana": "みんぞく",
    "definition": "People"
  },
  "土俵": {
    "kana": "どひょう",
    "definition": "ring"
  },
  "逸話": {
    "kana": "いつわ",
    "definition": "anecdote"
  },
  "逸品": {
    "kana": "いっぴん",
    "definition": "gem"
  },
  "印刷": {
    "kana": "いんさつ",
    "definition": "printing"
  },
  "印象": {
    "kana": "いんしょう",
    "definition": "impression"
  },
  "調印": {
    "kana": "ちょういん",
    "definition": "signing"
  },
  "因果": {
    "kana": "いんが",
    "definition": "cause and effect"
  },
  "原因": {
    "kana": "げんいん",
    "definition": "cause"
  },
  "要因": {
    "kana": "よういん",
    "definition": "cause"
  },
  "姻族": {
    "kana": "いんぞく",
    "definition": "in-law"
  },
  "婚姻": {
    "kana": "こんいん",
    "definition": "marriage"
  },
  "引退": {
    "kana": "いんたい",
    "definition": "retirement"
  },
  "索引": {
    "kana": "さくいん",
    "definition": "index"
  },
  "飲料": {
    "kana": "いんりょう",
    "definition": "beverage"
  },
  "飲食": {
    "kana": "いんしょく",
    "definition": "eating and drinking"
  },
  "痛飲": {
    "kana": "つういん",
    "definition": "heavy drinking"
  },
  "議院": {
    "kana": "ぎいん",
    "definition": "House of Representatives"
  },
  "病院": {
    "kana": "びょういん",
    "definition": "hospital"
  },
  "陰性": {
    "kana": "いんせい",
    "definition": "negative"
  },
  "光陰": {
    "kana": "こういん",
    "definition": "light and shade"
  },
  "隠居": {
    "kana": "いんきょ",
    "definition": "retirement"
  },
  "隠忍": {
    "kana": "いんにん",
    "definition": "insidious"
  },
  "隠語": {
    "kana": "いんご",
    "definition": "jargon"
  },
  "韻律": {
    "kana": "いんりつ",
    "definition": "Prosody"
  },
  "音韻": {
    "kana": "おんいん",
    "definition": "phoneme"
  },
  "右岸": {
    "kana": "みぎぎし",
    "definition": "right bank"
  },
  "右折": {
    "kana": "うせつ",
    "definition": "Turn right"
  },
  "右派": {
    "kana": "うは",
    "definition": "right wing"
  },
  "左右": {
    "kana": "さゆう",
    "definition": "left and right"
  },
  "座右": {
    "kana": "ざゆう",
    "definition": "sitting right"
  },
  "宇宙": {
    "kana": "うちゅう",
    "definition": "universe"
  },
  "堂宇": {
    "kana": "どうう",
    "definition": "Dou"
  },
  "羽毛": {
    "kana": "うもう",
    "definition": "down"
  },
  "羽化": {
    "kana": "うか",
    "definition": "emergence"
  },
  "羽翼": {
    "kana": "はねつばさ",
    "definition": "wings"
  },
  "雨量": {
    "kana": "うりょう",
    "definition": "rainfall"
  },
  "降雨": {
    "kana": "こうう",
    "definition": "rainfall"
  },
  "梅雨": {
    "kana": "つゆ",
    "definition": "rainy season"
  },
  "渦中": {
    "kana": "かちゅう",
    "definition": "in the whirlpool"
  },
  "運動": {
    "kana": "うんどう",
    "definition": "motion"
  },
  "運命": {
    "kana": "うんめい",
    "definition": "destiny"
  },
  "海運": {
    "kana": "かいうん",
    "definition": "shipping"
  },
  "雲海": {
    "kana": "うんかい",
    "definition": "sea ​​of ​​clouds"
  },
  "営業": {
    "kana": "えいぎょう",
    "definition": "sales"
  },
  "経営": {
    "kana": "けいえい",
    "definition": "management"
  },
  "陣営": {
    "kana": "じんえい",
    "definition": "camp"
  },
  "営巣": {
    "kana": "えいそう",
    "definition": "nest building"
  },
  "卵巣": {
    "kana": "らんそう",
    "definition": "ovary"
  },
  "病巣": {
    "kana": "びょうそう",
    "definition": "lesion"
  },
  "影響": {
    "kana": "えいきょう",
    "definition": "influence"
  },
  "陰影": {
    "kana": "いんえい",
    "definition": "shadow"
  },
  "撮影": {
    "kana": "さつえい",
    "definition": "photograph"
  },
  "映画": {
    "kana": "えいが",
    "definition": "movie"
  },
  "反映": {
    "kana": "はんえい",
    "definition": "reflect"
  },
  "栄枯": {
    "kana": "えいこ",
    "definition": "ups and downs"
  },
  "栄養": {
    "kana": "えいよう",
    "definition": "nutrition"
  },
  "繁栄": {
    "kana": "はんえい",
    "definition": "prosperity"
  },
  "永久": {
    "kana": "えいきゅう",
    "definition": "forever"
  },
  "持久": {
    "kana": "じきゅう",
    "definition": "endurance"
  },
  "耐久": {
    "kana": "たいきゅう",
    "definition": "Endurance"
  },
  "久遠": {
    "kana": "くどう",
    "definition": "Eternity"
  },
  "永続": {
    "kana": "えいぞく",
    "definition": "Permanence"
  },
  "永遠": {
    "kana": "えいえん",
    "definition": "eternity"
  },
  "背泳": {
    "kana": "はいえい",
    "definition": "Backstroke"
  },
  "英雄": {
    "kana": "えいゆう",
    "definition": "hero"
  },
  "英断": {
    "kana": "えいだん",
    "definition": "decisive decision"
  },
  "俊英": {
    "kana": "しゅんえい",
    "definition": "brilliant"
  },
  "護衛": {
    "kana": "ごえい",
    "definition": "escort"
  },
  "守衛": {
    "kana": "しゅえい",
    "definition": "Guard"
  },
  "詠嘆": {
    "kana": "えいたん",
    "definition": "lamentation"
  },
  "詠草": {
    "kana": "えいくさ",
    "definition": "draft poem"
  },
  "朗詠": {
    "kana": "ろうえい",
    "definition": "recitation"
  },
  "鋭利": {
    "kana": "えいり",
    "definition": "Sharp"
  },
  "鋭敏": {
    "kana": "えいびん",
    "definition": "Sharpness"
  },
  "精鋭": {
    "kana": "せいえい",
    "definition": "elite"
  },
  "液体": {
    "kana": "えきたい",
    "definition": "liquid"
  },
  "液状": {
    "kana": "えきじょう",
    "definition": "Liquid"
  },
  "血液": {
    "kana": "けつえき",
    "definition": "blood"
  },
  "疫病": {
    "kana": "えきびょう",
    "definition": "epidemic"
  },
  "悪疫": {
    "kana": "あくえき",
    "definition": "epidemic"
  },
  "防疫": {
    "kana": "ぼうえき",
    "definition": "Quarantine"
  },
  "疫痢": {
    "kana": "えきり",
    "definition": "diarrhea"
  },
  "下痢": {
    "kana": "げり",
    "definition": "diarrhea"
  },
  "赤痢": {
    "kana": "せきり",
    "definition": "dysentery"
  },
  "駅長": {
    "kana": "えきちょう",
    "definition": "station master"
  },
  "駅伝": {
    "kana": "えきでん",
    "definition": "Ekiden"
  },
  "悦楽": {
    "kana": "えつらく",
    "definition": "pleasure"
  },
  "喜悦": {
    "kana": "きえつ",
    "definition": "joy"
  },
  "謁見": {
    "kana": "えっけん",
    "definition": "audience"
  },
  "拝謁": {
    "kana": "はいえつ",
    "definition": "audience"
  },
  "越境": {
    "kana": "えっきょう",
    "definition": "border crossing"
  },
  "超越": {
    "kana": "ちょうえつ",
    "definition": "transcendence"
  },
  "優越": {
    "kana": "ゆうえつ",
    "definition": "Superiority"
  },
  "閲覧": {
    "kana": "えつらん",
    "definition": "Browse"
  },
  "閲歴": {
    "kana": "えつれき",
    "definition": "career"
  },
  "校閲": {
    "kana": "こうえつ",
    "definition": "proofreading"
  },
  "円卓": {
    "kana": "えんたく",
    "definition": "round table"
  },
  "円熟": {
    "kana": "えんじゅく",
    "definition": "Maturity"
  },
  "園芸": {
    "kana": "えんげい",
    "definition": "gardening"
  },
  "公園": {
    "kana": "こうえん",
    "definition": "park"
  },
  "楽園": {
    "kana": "らくえん",
    "definition": "paradise"
  },
  "宴会": {
    "kana": "えんかい",
    "definition": "banquet"
  },
  "宴席": {
    "kana": "えんせき",
    "definition": "banquet"
  },
  "酒宴": {
    "kana": "しゅえん",
    "definition": "banquet"
  },
  "延長": {
    "kana": "えんちょう",
    "definition": "Extension"
  },
  "延期": {
    "kana": "えんき",
    "definition": "postponement"
  },
  "遅延": {
    "kana": "ちえん",
    "definition": "delay"
  },
  "援助": {
    "kana": "えんじょ",
    "definition": "assistance"
  },
  "応援": {
    "kana": "おうえん",
    "definition": "support"
  },
  "声援": {
    "kana": "せいえん",
    "definition": "Cheering"
  },
  "沿海": {
    "kana": "えんかい",
    "definition": "coast"
  },
  "沿線": {
    "kana": "えんせん",
    "definition": "along the line"
  },
  "沿革": {
    "kana": "えんかく",
    "definition": "History"
  },
  "演技": {
    "kana": "えんぎ",
    "definition": "acting"
  },
  "演奏": {
    "kana": "えんそう",
    "definition": "playing"
  },
  "講演": {
    "kana": "こうえん",
    "definition": "Lecture"
  },
  "炎天": {
    "kana": "えんてん",
    "definition": "scorching sun"
  },
  "火炎": {
    "kana": "かえん",
    "definition": "flame"
  },
  "煙突": {
    "kana": "えんとつ",
    "definition": "chimney"
  },
  "煙霧": {
    "kana": "けむりきり",
    "definition": "haze"
  },
  "喫煙": {
    "kana": "きつえん",
    "definition": "smoking"
  },
  "縁故": {
    "kana": "えんこ",
    "definition": "connection"
  },
  "血縁": {
    "kana": "けつえん",
    "definition": "blood relation"
  },
  "遠近": {
    "kana": "えんきん",
    "definition": "perspective"
  },
  "敬遠": {
    "kana": "けいえん",
    "definition": "Avoid"
  },
  "遠慮": {
    "kana": "えんりょ",
    "definition": "show reserve"
  },
  "考慮": {
    "kana": "こうりょ",
    "definition": "consideration"
  },
  "無慮": {
    "kana": "むりょ",
    "definition": "thoughtless"
  },
  "鉛筆": {
    "kana": "えんぴつ",
    "definition": "pencil"
  },
  "亜鉛": {
    "kana": "あえん",
    "definition": "zinc"
  },
  "黒鉛": {
    "kana": "こくえん",
    "definition": "graphite"
  },
  "塩酸": {
    "kana": "えんさん",
    "definition": "hydrochloric acid"
  },
  "食塩": {
    "kana": "しょくえん",
    "definition": "Salt"
  },
  "汚点": {
    "kana": "おてん",
    "definition": "blemish"
  },
  "汚物": {
    "kana": "おぶつ",
    "definition": "filth"
  },
  "凹凸": {
    "kana": "おうとつ",
    "definition": "Unevenness"
  },
  "奥義": {
    "kana": "おくぎ",
    "definition": "mystery"
  },
  "深奥": {
    "kana": "しんおく",
    "definition": "profundity"
  },
  "往復": {
    "kana": "おうふく",
    "definition": "round trip"
  },
  "往来": {
    "kana": "おうらい",
    "definition": "coming and going"
  },
  "応答": {
    "kana": "おうとう",
    "definition": "response"
  },
  "応用": {
    "kana": "おうよう",
    "definition": "application"
  },
  "呼応": {
    "kana": "こおう",
    "definition": "response"
  },
  "押収": {
    "kana": "おうしゅう",
    "definition": "Seizure"
  },
  "押印": {
    "kana": "おういん",
    "definition": "Imprint"
  },
  "押韻": {
    "kana": "おういん",
    "definition": "rhyme"
  },
  "横断": {
    "kana": "おうだん",
    "definition": "crossing"
  },
  "横領": {
    "kana": "おうりょう",
    "definition": "embezzlement"
  },
  "専横": {
    "kana": "せんおう",
    "definition": "arbitrary"
  },
  "横柄": {
    "kana": "おうへい",
    "definition": "arrogance"
  },
  "西欧": {
    "kana": "せいおう",
    "definition": "Western Europe"
  },
  "渡欧": {
    "kana": "とおう",
    "definition": "Travel to Europe"
  },
  "殴打": {
    "kana": "おうだ",
    "definition": "beating"
  },
  "帝王": {
    "kana": "ていおう",
    "definition": "emperor"
  },
  "黄葉": {
    "kana": "こうよう",
    "definition": "yellow leaves"
  },
  "黄金": {
    "kana": "おうごん",
    "definition": "gold"
  },
  "卵黄": {
    "kana": "らんおう",
    "definition": "egg yolk"
  },
  "沖天": {
    "kana": "おきてん",
    "definition": "rising into the heavens"
  },
  "億万": {
    "kana": "おくまん",
    "definition": "billion"
  },
  "家屋": {
    "kana": "かおく",
    "definition": "house"
  },
  "乙種": {
    "kana": "おつたね",
    "definition": "Class B"
  },
  "甲乙": {
    "kana": "こうおつ",
    "definition": "first and second"
  },
  "恩情": {
    "kana": "おんじょう",
    "definition": "compassion"
  },
  "謝恩": {
    "kana": "しゃおん",
    "definition": "Gratitude"
  },
  "温暖": {
    "kana": "おんだん",
    "definition": "warm"
  },
  "温厚": {
    "kana": "おんこう",
    "definition": "mild-mannered"
  },
  "穏和": {
    "kana": "おんわ",
    "definition": "mild"
  },
  "穏当": {
    "kana": "おんとう",
    "definition": "reasonable"
  },
  "平穏": {
    "kana": "へいおん",
    "definition": "tranquility"
  },
  "音楽": {
    "kana": "おんがく",
    "definition": "music"
  },
  "騒音": {
    "kana": "そうおん",
    "definition": "noise"
  },
  "福音": {
    "kana": "ふくいん",
    "definition": "gospel"
  },
  "音響": {
    "kana": "おんきょう",
    "definition": "acoustic"
  },
  "下流": {
    "kana": "かりゅう",
    "definition": "downstream"
  },
  "下降": {
    "kana": "かこう",
    "definition": "Descent"
  },
  "落下": {
    "kana": "らっか",
    "definition": "fall"
  },
  "下車": {
    "kana": "げしゃ",
    "definition": "get off"
  },
  "化粧": {
    "kana": "けしょう",
    "definition": "make up"
  },
  "化石": {
    "kana": "かせき",
    "definition": "fossil"
  },
  "化学": {
    "kana": "かがく",
    "definition": "chemistry"
  },
  "化身": {
    "kana": "けしん",
    "definition": "incarnation"
  },
  "権化": {
    "kana": "ごんげ",
    "definition": "incarnation"
  },
  "仮定": {
    "kana": "かてい",
    "definition": "Assumption"
  },
  "仮装": {
    "kana": "かそう",
    "definition": "disguise"
  },
  "仮病": {
    "kana": "けびょう",
    "definition": "feigning illness"
  },
  "価値": {
    "kana": "かち",
    "definition": "worth"
  },
  "価格": {
    "kana": "かかく",
    "definition": "price"
  },
  "評価": {
    "kana": "ひょうか",
    "definition": "evaluation"
  },
  "数値": {
    "kana": "すうち",
    "definition": "numerical value"
  },
  "絶佳": {
    "kana": "ぜつか",
    "definition": "Excellent"
  },
  "加入": {
    "kana": "かにゅう",
    "definition": "joining"
  },
  "加減": {
    "kana": "かげん",
    "definition": "addition and subtraction"
  },
  "追加": {
    "kana": "ついか",
    "definition": "addition"
  },
  "加盟": {
    "kana": "かめい",
    "definition": "accession"
  },
  "同盟": {
    "kana": "どうめい",
    "definition": "alliance"
  },
  "連盟": {
    "kana": "れんめい",
    "definition": "federation"
  },
  "可否": {
    "kana": "かひ",
    "definition": "yes or no"
  },
  "可能": {
    "kana": "かのう",
    "definition": "Possible"
  },
  "許可": {
    "kana": "きょか",
    "definition": "permission"
  },
  "夏季": {
    "kana": "かき",
    "definition": "summer"
  },
  "初夏": {
    "kana": "しょか",
    "definition": "early summer"
  },
  "盛夏": {
    "kana": "せいか",
    "definition": "midsummer"
  },
  "夏至": {
    "kana": "げし",
    "definition": "summer solstice"
  },
  "家庭": {
    "kana": "かてい",
    "definition": "home"
  },
  "家来": {
    "kana": "けらい",
    "definition": "retainer"
  },
  "寡黙": {
    "kana": "かもく",
    "definition": "Taciturn"
  },
  "寡婦": {
    "kana": "かふ",
    "definition": "widow"
  },
  "多寡": {
    "kana": "たか",
    "definition": "quantity"
  },
  "科学": {
    "kana": "かがく",
    "definition": "science"
  },
  "教科": {
    "kana": "きょうか",
    "definition": "subject"
  },
  "罪科": {
    "kana": "ざいか",
    "definition": "guilt"
  },
  "果実": {
    "kana": "かじつ",
    "definition": "fruit"
  },
  "果断": {
    "kana": "かだん",
    "definition": "decisiveness"
  },
  "結果": {
    "kana": "けっか",
    "definition": "result"
  },
  "果汁": {
    "kana": "かじゅう",
    "definition": "fruit juice"
  },
  "墨汁": {
    "kana": "ぼくじゅう",
    "definition": "India ink"
  },
  "架橋": {
    "kana": "かきょう",
    "definition": "cross-linking"
  },
  "架空": {
    "kana": "かくう",
    "definition": "fictitious"
  },
  "書架": {
    "kana": "しょか",
    "definition": "bookshelf"
  },
  "歌曲": {
    "kana": "かきょく",
    "definition": "song"
  },
  "唱歌": {
    "kana": "しょうか",
    "definition": "song"
  },
  "短歌": {
    "kana": "たんか",
    "definition": "Tanka"
  },
  "歌詞": {
    "kana": "かし",
    "definition": "lyrics"
  },
  "品詞": {
    "kana": "ひんし",
    "definition": "part of speech"
  },
  "河川": {
    "kana": "かせん",
    "definition": "river"
  },
  "河口": {
    "kana": "かこう",
    "definition": "estuary"
  },
  "運河": {
    "kana": "うんが",
    "definition": "canal"
  },
  "火災": {
    "kana": "かさい",
    "definition": "fire"
  },
  "灯火": {
    "kana": "とうか",
    "definition": "light"
  },
  "禍福": {
    "kana": "かふく",
    "definition": "weal and woe"
  },
  "禍根": {
    "kana": "かこん",
    "definition": "root of evil"
  },
  "災禍": {
    "kana": "さいか",
    "definition": "calamity"
  },
  "稼業": {
    "kana": "かぎょう",
    "definition": "business"
  },
  "稼働": {
    "kana": "かどう",
    "definition": "operation"
  },
  "箇条": {
    "kana": "かじょう",
    "definition": "Clause"
  },
  "箇所": {
    "kana": "かしょ",
    "definition": "part"
  },
  "花弁": {
    "kana": "かべん",
    "definition": "petal"
  },
  "花壇": {
    "kana": "かだん",
    "definition": "flower bed"
  },
  "落花": {
    "kana": "らっか",
    "definition": "falling flowers"
  },
  "川柳": {
    "kana": "せんりゅう",
    "definition": "senryu"
  },
  "華美": {
    "kana": "かび",
    "definition": "extravagance"
  },
  "繁華": {
    "kana": "はんか",
    "definition": "prosperity"
  },
  "栄華": {
    "kana": "えいが",
    "definition": "prosperity"
  },
  "香華": {
    "kana": "かおりはな",
    "definition": "fragrance"
  },
  "散華": {
    "kana": "さんげ",
    "definition": "Sanka"
  },
  "製菓": {
    "kana": "せいか",
    "definition": "confectionery"
  },
  "茶菓": {
    "kana": "さか",
    "definition": "refreshments"
  },
  "貨物": {
    "kana": "かもつ",
    "definition": "cargo"
  },
  "貨幣": {
    "kana": "かへい",
    "definition": "money"
  },
  "通貨": {
    "kana": "つうか",
    "definition": "currency"
  },
  "紙幣": {
    "kana": "しへい",
    "definition": "bill"
  },
  "過失": {
    "kana": "かしつ",
    "definition": "negligence"
  },
  "通過": {
    "kana": "つうか",
    "definition": "passage"
  },
  "我流": {
    "kana": "がりゅう",
    "definition": "own style"
  },
  "彼我": {
    "kana": "ひが",
    "definition": "He and I"
  },
  "自我": {
    "kana": "じが",
    "definition": "ego"
  },
  "画家": {
    "kana": "がか",
    "definition": "painter"
  },
  "図画": {
    "kana": "ずが",
    "definition": "drawings"
  },
  "計画": {
    "kana": "けいかく",
    "definition": "plan"
  },
  "区画": {
    "kana": "くかく",
    "definition": "section"
  },
  "賀状": {
    "kana": "がじょう",
    "definition": "greeting card"
  },
  "祝賀": {
    "kana": "しゅくが",
    "definition": "celebration"
  },
  "雅趣": {
    "kana": "まさおもむき",
    "definition": "elegance"
  },
  "優雅": {
    "kana": "ゆうが",
    "definition": "elegance"
  },
  "餓死": {
    "kana": "がし",
    "definition": "starvation"
  },
  "餓鬼": {
    "kana": "がき",
    "definition": "brat"
  },
  "飢餓": {
    "kana": "きが",
    "definition": "hunger"
  },
  "介入": {
    "kana": "かいにゅう",
    "definition": "intervention"
  },
  "紹介": {
    "kana": "しょうかい",
    "definition": "introduction"
  },
  "会話": {
    "kana": "かいわ",
    "definition": "conversation"
  },
  "会計": {
    "kana": "かいけい",
    "definition": "total"
  },
  "社会": {
    "kana": "しゃかい",
    "definition": "society"
  },
  "会釈": {
    "kana": "えしゃく",
    "definition": "nod"
  },
  "会得": {
    "kana": "えとく",
    "definition": "comprehension"
  },
  "解決": {
    "kana": "かいけつ",
    "definition": "Resolution"
  },
  "解禁": {
    "kana": "かいきん",
    "definition": "lifting of the ban"
  },
  "理解": {
    "kana": "りかい",
    "definition": "Understanding"
  },
  "解脱": {
    "kana": "げだつ",
    "definition": "Liberation"
  },
  "解剖": {
    "kana": "かいぼう",
    "definition": "dissection"
  },
  "回答": {
    "kana": "かいとう",
    "definition": "Answer"
  },
  "転回": {
    "kana": "てんかい",
    "definition": "turning"
  },
  "次回": {
    "kana": "じかい",
    "definition": "next time"
  },
  "回向": {
    "kana": "えこう",
    "definition": "return"
  },
  "塊状": {
    "kana": "かいじょう",
    "definition": "Lumpy"
  },
  "山塊": {
    "kana": "やまかい",
    "definition": "massif"
  },
  "壊滅": {
    "kana": "かいめつ",
    "definition": "Destruction"
  },
  "破壊": {
    "kana": "はかい",
    "definition": "destruction"
  },
  "決壊": {
    "kana": "けっかい",
    "definition": "collapse"
  },
  "快活": {
    "kana": "かいかつ",
    "definition": "Cheerful"
  },
  "快晴": {
    "kana": "かいせい",
    "definition": "fine weather"
  },
  "怪談": {
    "kana": "かいだん",
    "definition": "ghost story"
  },
  "怪物": {
    "kana": "かいぶつ",
    "definition": "monster"
  },
  "奇怪": {
    "kana": "きかい",
    "definition": "bizarre"
  },
  "後悔": {
    "kana": "こうかい",
    "definition": "regret"
  },
  "懐中": {
    "kana": "かいちゅう",
    "definition": "pocket"
  },
  "懐古": {
    "kana": "かいこ",
    "definition": "nostalgia"
  },
  "述懐": {
    "kana": "じゅっかい",
    "definition": "recollection"
  },
  "戒心": {
    "kana": "かいこころ",
    "definition": "repentance"
  },
  "戒律": {
    "kana": "かいりつ",
    "definition": "precepts"
  },
  "警戒": {
    "kana": "けいかい",
    "definition": "vigilance"
  },
  "拐帯": {
    "kana": "かいおび",
    "definition": "absconding with money"
  },
  "誘拐": {
    "kana": "ゆうかい",
    "definition": "kidnapping"
  },
  "改造": {
    "kana": "かいぞう",
    "definition": "modification"
  },
  "改革": {
    "kana": "かいかく",
    "definition": "reform"
  },
  "更改": {
    "kana": "こうかい",
    "definition": "renewal"
  },
  "海岸": {
    "kana": "かいがん",
    "definition": "coast"
  },
  "航海": {
    "kana": "こうかい",
    "definition": "voyage"
  },
  "海浜": {
    "kana": "かいひん",
    "definition": "beach"
  },
  "石灰": {
    "kana": "せっかい",
    "definition": "lime"
  },
  "皆無": {
    "kana": "かいむ",
    "definition": "None"
  },
  "皆勤": {
    "kana": "かいきん",
    "definition": "perfect attendance"
  },
  "絵画": {
    "kana": "かいが",
    "definition": "painting"
  },
  "絵図": {
    "kana": "えず",
    "definition": "drawing"
  },
  "口絵": {
    "kana": "くちえ",
    "definition": "frontispiece"
  },
  "開墾": {
    "kana": "かいこん",
    "definition": "Cultivation"
  },
  "開始": {
    "kana": "かいし",
    "definition": "start"
  },
  "開拓": {
    "kana": "かいたく",
    "definition": "reclamation"
  },
  "展開": {
    "kana": "てんかい",
    "definition": "Deployment"
  },
  "開扉": {
    "kana": "かいとびら",
    "definition": "open door"
  },
  "門扉": {
    "kana": "もんぴ",
    "definition": "gate"
  },
  "階段": {
    "kana": "かいだん",
    "definition": "stairs"
  },
  "階級": {
    "kana": "かいきゅう",
    "definition": "class"
  },
  "貝殻": {
    "kana": "かいがら",
    "definition": "shell"
  },
  "害悪": {
    "kana": "がいあく",
    "definition": "harm"
  },
  "被害": {
    "kana": "ひがい",
    "definition": "damage"
  },
  "損害": {
    "kana": "そんがい",
    "definition": "damage"
  },
  "慨嘆": {
    "kana": "がいたん",
    "definition": "grief"
  },
  "憤慨": {
    "kana": "ふんがい",
    "definition": "resentment"
  },
  "感慨": {
    "kana": "かんがい",
    "definition": "emotion"
  },
  "概念": {
    "kana": "がいねん",
    "definition": "concept"
  },
  "街頭": {
    "kana": "がいとう",
    "definition": "Street"
  },
  "市街": {
    "kana": "しがい",
    "definition": "city"
  },
  "街道": {
    "kana": "かいどう",
    "definition": "highway"
  },
  "該当": {
    "kana": "がいとう",
    "definition": "said"
  },
  "該博": {
    "kana": "がいはく",
    "definition": "the expo"
  },
  "当該": {
    "kana": "とうがい",
    "definition": "concerned"
  },
  "垣根": {
    "kana": "かきね",
    "definition": "fence"
  },
  "各自": {
    "kana": "かくじ",
    "definition": "Each person"
  },
  "各種": {
    "kana": "かくしゅ",
    "definition": "Various"
  },
  "拡張": {
    "kana": "かくちょう",
    "definition": "Expansion"
  },
  "格式": {
    "kana": "かくしき",
    "definition": "formality"
  },
  "規格": {
    "kana": "きかく",
    "definition": "standard"
  },
  "性格": {
    "kana": "せいかく",
    "definition": "character"
  },
  "核心": {
    "kana": "かくしん",
    "definition": "core"
  },
  "結核": {
    "kana": "けっかく",
    "definition": "tuberculosis"
  },
  "獲得": {
    "kana": "かくとく",
    "definition": "Acquisition"
  },
  "捕獲": {
    "kana": "ほかく",
    "definition": "capture"
  },
  "確定": {
    "kana": "かくてい",
    "definition": "Confirm"
  },
  "確認": {
    "kana": "かくにん",
    "definition": "confirmation"
  },
  "正確": {
    "kana": "せいかく",
    "definition": "correct"
  },
  "覚悟": {
    "kana": "かくご",
    "definition": "readiness"
  },
  "知覚": {
    "kana": "ちかく",
    "definition": "Perception"
  },
  "三角": {
    "kana": "さんかく",
    "definition": "triangle"
  },
  "頭角": {
    "kana": "とうかく",
    "definition": "standout"
  },
  "閣議": {
    "kana": "かくぎ",
    "definition": "cabinet meeting"
  },
  "閣僚": {
    "kana": "かくりょう",
    "definition": "minister"
  },
  "隔離": {
    "kana": "かくり",
    "definition": "isolation"
  },
  "隔月": {
    "kana": "かくげつ",
    "definition": "bimonthly"
  },
  "間隔": {
    "kana": "かんかく",
    "definition": "interval"
  },
  "革新": {
    "kana": "かくしん",
    "definition": "innovation"
  },
  "皮革": {
    "kana": "ひかく",
    "definition": "leather"
  },
  "学習": {
    "kana": "がくしゅう",
    "definition": "study"
  },
  "岳父": {
    "kana": "がくちち",
    "definition": "father-in-law"
  },
  "山岳": {
    "kana": "さんがく",
    "definition": "mountains"
  },
  "楽隊": {
    "kana": "がくたい",
    "definition": "band"
  },
  "楽器": {
    "kana": "がっき",
    "definition": "instrument"
  },
  "快楽": {
    "kana": "かいらく",
    "definition": "pleasure"
  },
  "娯楽": {
    "kana": "ごらく",
    "definition": "entertainment"
  },
  "額縁": {
    "kana": "がくぶち",
    "definition": "picture frame"
  },
  "金額": {
    "kana": "きんがく",
    "definition": "Amount of money"
  },
  "割愛": {
    "kana": "かつあい",
    "definition": "omission"
  },
  "割拠": {
    "kana": "かっきょ",
    "definition": "siege"
  },
  "喝破": {
    "kana": "かっぱ",
    "definition": "ripping"
  },
  "恐喝": {
    "kana": "きょうかつ",
    "definition": "Blackmail"
  },
  "括弧": {
    "kana": "かっこ",
    "definition": "brackets"
  },
  "包括": {
    "kana": "ほうかつ",
    "definition": "Comprehensive"
  },
  "活動": {
    "kana": "かつどう",
    "definition": "activity"
  },
  "渇望": {
    "kana": "かつぼう",
    "definition": "craving"
  },
  "滑走": {
    "kana": "かっそう",
    "definition": "gliding"
  },
  "滑降": {
    "kana": "かっこう",
    "definition": "Downhill"
  },
  "円滑": {
    "kana": "えんかつ",
    "definition": "smoothly"
  },
  "褐色": {
    "kana": "かっしょく",
    "definition": "brown"
  },
  "株式": {
    "kana": "かぶしき",
    "definition": "stock"
  },
  "株価": {
    "kana": "かぶか",
    "definition": "Stock price"
  },
  "株主": {
    "kana": "かぶぬし",
    "definition": "shareholder"
  },
  "乾燥": {
    "kana": "かんそう",
    "definition": "drying"
  },
  "乾杯": {
    "kana": "かんぱい",
    "definition": "cheers"
  },
  "焦燥": {
    "kana": "しょうそう",
    "definition": "impatience"
  },
  "高燥": {
    "kana": "たかそう",
    "definition": "dryness"
  },
  "乾板": {
    "kana": "かんばん",
    "definition": "dry plate"
  },
  "鉄板": {
    "kana": "てっぱん",
    "definition": "iron plate"
  },
  "黒板": {
    "kana": "こくばん",
    "definition": "blackboard"
  },
  "冠詞": {
    "kana": "かんし",
    "definition": "article"
  },
  "王冠": {
    "kana": "おうかん",
    "definition": "crown"
  },
  "栄冠": {
    "kana": "えいかん",
    "definition": "crown"
  },
  "寒暑": {
    "kana": "かんしょ",
    "definition": "hot and cold"
  },
  "寒村": {
    "kana": "かんそん",
    "definition": "cold village"
  },
  "厳寒": {
    "kana": "げんかん",
    "definition": "intense cold"
  },
  "週刊": {
    "kana": "しゅうかん",
    "definition": "Weekly"
  },
  "勘弁": {
    "kana": "かんべん",
    "definition": "Excuse me"
  },
  "勘当": {
    "kana": "かんどう",
    "definition": "Disown"
  },
  "勧誘": {
    "kana": "かんゆう",
    "definition": "invitation"
  },
  "勧奨": {
    "kana": "かんしょう",
    "definition": "recommendation"
  },
  "勧告": {
    "kana": "かんこく",
    "definition": "Recommendation"
  },
  "巻頭": {
    "kana": "かんとう",
    "definition": "beginning of the book"
  },
  "圧巻": {
    "kana": "あっかん",
    "definition": "masterpiece"
  },
  "喚問": {
    "kana": "かんもん",
    "definition": "summons"
  },
  "召喚": {
    "kana": "しょうかん",
    "definition": "Summon"
  },
  "叫喚": {
    "kana": "きょうかん",
    "definition": "scream"
  },
  "堪忍": {
    "kana": "かんにん",
    "definition": "endurance"
  },
  "完全": {
    "kana": "かんぜん",
    "definition": "Perfect"
  },
  "完成": {
    "kana": "かんせい",
    "definition": "Complete"
  },
  "未完": {
    "kana": "みかん",
    "definition": "unfinished"
  },
  "官庁": {
    "kana": "かんちょう",
    "definition": "government office"
  },
  "官能": {
    "kana": "かんのう",
    "definition": "sensuality"
  },
  "教官": {
    "kana": "きょうかん",
    "definition": "instructor"
  },
  "寛容": {
    "kana": "かんよう",
    "definition": "tolerance"
  },
  "寛厳": {
    "kana": "ひろしげん",
    "definition": "leniency and severity"
  },
  "干渉": {
    "kana": "かんしょう",
    "definition": "interference"
  },
  "干潮": {
    "kana": "かんちょう",
    "definition": "low tide"
  },
  "若干": {
    "kana": "じゃっかん",
    "definition": "Slightly"
  },
  "幹線": {
    "kana": "かんせん",
    "definition": "main line"
  },
  "幹事": {
    "kana": "かんじ",
    "definition": "secretary"
  },
  "根幹": {
    "kana": "こんかん",
    "definition": "root"
  },
  "患者": {
    "kana": "かんじゃ",
    "definition": "patient"
  },
  "疾患": {
    "kana": "しっかん",
    "definition": "disease"
  },
  "感心": {
    "kana": "かんしん",
    "definition": "Impressed"
  },
  "感覚": {
    "kana": "かんかく",
    "definition": "feelings"
  },
  "直感": {
    "kana": "ちょっかん",
    "definition": "Intuition"
  },
  "感涙": {
    "kana": "かんるい",
    "definition": "tears of gratitude"
  },
  "声涙": {
    "kana": "こえなみだ",
    "definition": "tears of voice"
  },
  "落涙": {
    "kana": "らくるい",
    "definition": "tears"
  },
  "慣例": {
    "kana": "かんれい",
    "definition": "convention"
  },
  "慣性": {
    "kana": "かんせい",
    "definition": "inertia"
  },
  "習慣": {
    "kana": "しゅうかん",
    "definition": "habit"
  },
  "換算": {
    "kana": "かんさん",
    "definition": "Conversion"
  },
  "交換": {
    "kana": "こうかん",
    "definition": "exchange"
  },
  "敢然": {
    "kana": "かんぜん",
    "definition": "Dare"
  },
  "果敢": {
    "kana": "かかん",
    "definition": "Resolute"
  },
  "勇敢": {
    "kana": "ゆうかん",
    "definition": "Brave"
  },
  "石棺": {
    "kana": "いしひつぎ",
    "definition": "sarcophagus"
  },
  "歓迎": {
    "kana": "かんげい",
    "definition": "welcome"
  },
  "歓声": {
    "kana": "かんせい",
    "definition": "Cheers"
  },
  "交歓": {
    "kana": "こうかん",
    "definition": "exchange of courtesies"
  },
  "汗顔": {
    "kana": "かんがん",
    "definition": "sweaty face"
  },
  "漢字": {
    "kana": "かんじ",
    "definition": "Chinese characters"
  },
  "漢語": {
    "kana": "かんご",
    "definition": "Chinese"
  },
  "環状": {
    "kana": "かんじょう",
    "definition": "annular"
  },
  "環境": {
    "kana": "かんきょう",
    "definition": "environment"
  },
  "循環": {
    "kana": "じゅんかん",
    "definition": "Circulation"
  },
  "甘言": {
    "kana": "かんげん",
    "definition": "soft talk"
  },
  "甘受": {
    "kana": "かんじゅ",
    "definition": "acceptance"
  },
  "監視": {
    "kana": "かんし",
    "definition": "monitoring"
  },
  "監督": {
    "kana": "かんとく",
    "definition": "directed by"
  },
  "総監": {
    "kana": "そうかん",
    "definition": "general director"
  },
  "看護": {
    "kana": "かんご",
    "definition": "Nurse"
  },
  "看破": {
    "kana": "かんぱ",
    "definition": "see through"
  },
  "看板": {
    "kana": "かんばん",
    "definition": "signboard"
  },
  "管轄": {
    "kana": "かんかつ",
    "definition": "jurisdiction"
  },
  "所轄": {
    "kana": "しょかつ",
    "definition": "Jurisdiction"
  },
  "直轄": {
    "kana": "ちょっかつ",
    "definition": "direct control"
  },
  "管理": {
    "kana": "かんり",
    "definition": "management"
  },
  "管制": {
    "kana": "かんせい",
    "definition": "control"
  },
  "鉄管": {
    "kana": "てっかん",
    "definition": "Iron pipe"
  },
  "簡単": {
    "kana": "かんたん",
    "definition": "easy"
  },
  "簡易": {
    "kana": "かんい",
    "definition": "Simple"
  },
  "書簡": {
    "kana": "しょかん",
    "definition": "letter"
  },
  "緩和": {
    "kana": "かんわ",
    "definition": "relief"
  },
  "緩慢": {
    "kana": "かんまん",
    "definition": "slow"
  },
  "緩急": {
    "kana": "かんきゅう",
    "definition": "speed"
  },
  "缶詰": {
    "kana": "かんづめ",
    "definition": "canning"
  },
  "製缶": {
    "kana": "せいかん",
    "definition": "can manufacturing"
  },
  "肝臓": {
    "kana": "かんぞう",
    "definition": "liver"
  },
  "肝胆": {
    "kana": "きもたん",
    "definition": "liver and gall"
  },
  "肝要": {
    "kana": "かんよう",
    "definition": "vital"
  },
  "艦船": {
    "kana": "かんせん",
    "definition": "ship"
  },
  "艦隊": {
    "kana": "かんたい",
    "definition": "fleet"
  },
  "軍艦": {
    "kana": "ぐんかん",
    "definition": "warship"
  },
  "艦艇": {
    "kana": "かんてい",
    "definition": "warship"
  },
  "舟艇": {
    "kana": "しゅうてい",
    "definition": "boat"
  },
  "競艇": {
    "kana": "きょうてい",
    "definition": "boat racing"
  },
  "観察": {
    "kana": "かんさつ",
    "definition": "observation"
  },
  "客観": {
    "kana": "きゃっかん",
    "definition": "objective"
  },
  "壮観": {
    "kana": "そうかん",
    "definition": "spectacle"
  },
  "観覧": {
    "kana": "かんらん",
    "definition": "viewing"
  },
  "展覧": {
    "kana": "てんらん",
    "definition": "exhibition"
  },
  "貫通": {
    "kana": "かんつう",
    "definition": "penetration"
  },
  "縦貫": {
    "kana": "じゅうかん",
    "definition": "traverse"
  },
  "還元": {
    "kana": "かんげん",
    "definition": "reduction"
  },
  "返還": {
    "kana": "へんかん",
    "definition": "return"
  },
  "鑑賞": {
    "kana": "かんしょう",
    "definition": "Appreciation"
  },
  "鑑定": {
    "kana": "かんてい",
    "definition": "appraisal"
  },
  "中間": {
    "kana": "ちゅうかん",
    "definition": "intermediate"
  },
  "時間": {
    "kana": "じかん",
    "definition": "time"
  },
  "世間": {
    "kana": "せけん",
    "definition": "world"
  },
  "閑静": {
    "kana": "かんせい",
    "definition": "quiet"
  },
  "閑却": {
    "kana": "ひまきゃく",
    "definition": "neglect"
  },
  "繁閑": {
    "kana": "はんひま",
    "definition": "slack"
  },
  "関節": {
    "kana": "かんせつ",
    "definition": "joint"
  },
  "関係": {
    "kana": "かんけい",
    "definition": "relationship"
  },
  "陥落": {
    "kana": "かんらく",
    "definition": "fall"
  },
  "陥没": {
    "kana": "かんぼつ",
    "definition": "cave-in"
  },
  "欠陥": {
    "kana": "けっかん",
    "definition": "defect"
  },
  "韓国": {
    "kana": "かんこく",
    "definition": "Korea"
  },
  "旅館": {
    "kana": "りょかん",
    "definition": "Ryokan"
  },
  "丸薬": {
    "kana": "がんやく",
    "definition": "pills"
  },
  "弾丸": {
    "kana": "だんがん",
    "definition": "bullet"
  },
  "砲丸": {
    "kana": "ほうがん",
    "definition": "shot put"
  },
  "含有": {
    "kana": "がんゆう",
    "definition": "contains"
  },
  "含蓄": {
    "kana": "がんちく",
    "definition": "implication"
  },
  "包含": {
    "kana": "ほうがん",
    "definition": "inclusion"
  },
  "岸壁": {
    "kana": "がんぺき",
    "definition": "Quay"
  },
  "対岸": {
    "kana": "たいがん",
    "definition": "opposite bank"
  },
  "彼岸": {
    "kana": "ひがん",
    "definition": "equinoctial week"
  },
  "眼球": {
    "kana": "がんきゅう",
    "definition": "eyeball"
  },
  "主眼": {
    "kana": "しゅがん",
    "definition": "main focus"
  },
  "開眼": {
    "kana": "かいがん",
    "definition": "eye opening"
  },
  "岩礁": {
    "kana": "がんしょう",
    "definition": "reef"
  },
  "暗礁": {
    "kana": "あんしょう",
    "definition": "reef"
  },
  "岩石": {
    "kana": "がんせき",
    "definition": "rock"
  },
  "岩塩": {
    "kana": "がんえん",
    "definition": "rock salt"
  },
  "頑強": {
    "kana": "がんきょう",
    "definition": "stubborn"
  },
  "頑健": {
    "kana": "がんけん",
    "definition": "robustness"
  },
  "頑固": {
    "kana": "がんこ",
    "definition": "Stubborn"
  },
  "童顔": {
    "kana": "どうがん",
    "definition": "baby face"
  },
  "厚顔": {
    "kana": "こうがん",
    "definition": "brazen"
  },
  "願望": {
    "kana": "がんぼう",
    "definition": "desire"
  },
  "祈願": {
    "kana": "きがん",
    "definition": "prayer"
  },
  "志願": {
    "kana": "しがん",
    "definition": "Volunteer"
  },
  "企画": {
    "kana": "きかく",
    "definition": "plan"
  },
  "企図": {
    "kana": "きと",
    "definition": "plan"
  },
  "企業": {
    "kana": "きぎょう",
    "definition": "enterprise"
  },
  "危険": {
    "kana": "きけん",
    "definition": "dangerous"
  },
  "危害": {
    "kana": "きがい",
    "definition": "harm"
  },
  "安危": {
    "kana": "あんき",
    "definition": "safety"
  },
  "喜劇": {
    "kana": "きげき",
    "definition": "comedy"
  },
  "悲喜": {
    "kana": "ひき",
    "definition": "joy and sorrow"
  },
  "歓喜": {
    "kana": "かんき",
    "definition": "delight"
  },
  "器量": {
    "kana": "きりょう",
    "definition": "dignity"
  },
  "器用": {
    "kana": "きよう",
    "definition": "Dexterity"
  },
  "陶器": {
    "kana": "とうき",
    "definition": "pottery"
  },
  "基礎": {
    "kana": "きそ",
    "definition": "foundation"
  },
  "基準": {
    "kana": "きじゅん",
    "definition": "standard"
  },
  "基盤": {
    "kana": "きばん",
    "definition": "basis"
  },
  "円盤": {
    "kana": "えんばん",
    "definition": "disk"
  },
  "碁盤": {
    "kana": "ごばん",
    "definition": "go board"
  },
  "奇襲": {
    "kana": "きしゅう",
    "definition": "surprise attack"
  },
  "奇数": {
    "kana": "きすう",
    "definition": "odd number"
  },
  "珍奇": {
    "kana": "ちんき",
    "definition": "curiosity"
  },
  "寄宿": {
    "kana": "きしゅく",
    "definition": "Boarding"
  },
  "寄贈": {
    "kana": "きぞう",
    "definition": "donation"
  },
  "寄港": {
    "kana": "きこう",
    "definition": "port of call"
  },
  "岐路": {
    "kana": "きろ",
    "definition": "crossroads"
  },
  "多岐": {
    "kana": "たき",
    "definition": "many"
  },
  "希望": {
    "kana": "きぼう",
    "definition": "hope"
  },
  "希少": {
    "kana": "きしょう",
    "definition": "rarity"
  },
  "希薄": {
    "kana": "きはく",
    "definition": "dilute"
  },
  "忌避": {
    "kana": "きひ",
    "definition": "evasion"
  },
  "忌中": {
    "kana": "きちゅう",
    "definition": "mourning"
  },
  "禁忌": {
    "kana": "きんき",
    "definition": "taboo"
  },
  "指揮": {
    "kana": "しき",
    "definition": "Command"
  },
  "机辺": {
    "kana": "つくえへん",
    "definition": "desk"
  },
  "旗手": {
    "kana": "きしゅ",
    "definition": "standard bearer"
  },
  "旗艦": {
    "kana": "きかん",
    "definition": "flagship"
  },
  "国旗": {
    "kana": "こっき",
    "definition": "national flag"
  },
  "既成": {
    "kana": "きせい",
    "definition": "ready-made"
  },
  "既婚": {
    "kana": "きこん",
    "definition": "married"
  },
  "期間": {
    "kana": "きかん",
    "definition": "period"
  },
  "期待": {
    "kana": "きたい",
    "definition": "expectations"
  },
  "予期": {
    "kana": "よき",
    "definition": "anticipation"
  },
  "最期": {
    "kana": "さいご",
    "definition": "last moment"
  },
  "棋士": {
    "kana": "きし",
    "definition": "chess player"
  },
  "棋譜": {
    "kana": "きふ",
    "definition": "game record"
  },
  "将棋": {
    "kana": "しょうぎ",
    "definition": "Shogi"
  },
  "棄権": {
    "kana": "きけん",
    "definition": "Abstention"
  },
  "放棄": {
    "kana": "ほうき",
    "definition": "abandonment"
  },
  "機械": {
    "kana": "きかい",
    "definition": "machine"
  },
  "機会": {
    "kana": "きかい",
    "definition": "chance"
  },
  "危機": {
    "kana": "きき",
    "definition": "crisis"
  },
  "帰還": {
    "kana": "きかん",
    "definition": "return"
  },
  "帰納": {
    "kana": "きのう",
    "definition": "induction"
  },
  "復帰": {
    "kana": "ふっき",
    "definition": "return"
  },
  "汽車": {
    "kana": "きしゃ",
    "definition": "train"
  },
  "汽船": {
    "kana": "きせん",
    "definition": "steamer"
  },
  "汽笛": {
    "kana": "きてき",
    "definition": "whistle"
  },
  "警笛": {
    "kana": "けいてき",
    "definition": "horn"
  },
  "牧笛": {
    "kana": "まきふえ",
    "definition": "maki flute"
  },
  "祈念": {
    "kana": "きねん",
    "definition": "prayer"
  },
  "季節": {
    "kana": "きせつ",
    "definition": "season"
  },
  "四季": {
    "kana": "しき",
    "definition": "four seasons"
  },
  "雨季": {
    "kana": "うき",
    "definition": "rainy season"
  },
  "紀元": {
    "kana": "きげん",
    "definition": "A.D."
  },
  "規則": {
    "kana": "きそく",
    "definition": "rule"
  },
  "規律": {
    "kana": "きりつ",
    "definition": "discipline"
  },
  "定規": {
    "kana": "じょうぎ",
    "definition": "ruler"
  },
  "記憶": {
    "kana": "きおく",
    "definition": "Memory"
  },
  "追憶": {
    "kana": "ついおく",
    "definition": "recollection"
  },
  "記入": {
    "kana": "きにゅう",
    "definition": "enter"
  },
  "記号": {
    "kana": "きごう",
    "definition": "symbol"
  },
  "伝記": {
    "kana": "でんき",
    "definition": "biography"
  },
  "貴重": {
    "kana": "きちょう",
    "definition": "valuable"
  },
  "貴下": {
    "kana": "きか",
    "definition": "you"
  },
  "騰貴": {
    "kana": "とうき",
    "definition": "soaring"
  },
  "起床": {
    "kana": "きしょう",
    "definition": "getting up"
  },
  "病床": {
    "kana": "びょうしょう",
    "definition": "sick bed"
  },
  "温床": {
    "kana": "おんしょう",
    "definition": "hotbed"
  },
  "起立": {
    "kana": "きりつ",
    "definition": "stand up"
  },
  "起源": {
    "kana": "きげん",
    "definition": "origin"
  },
  "奮起": {
    "kana": "ふんき",
    "definition": "excitement"
  },
  "軌道": {
    "kana": "きどう",
    "definition": "trajectory"
  },
  "広軌": {
    "kana": "こうき",
    "definition": "broad gauge"
  },
  "常軌": {
    "kana": "じょうき",
    "definition": "Normal"
  },
  "輝石": {
    "kana": "てるいし",
    "definition": "pyroxene"
  },
  "光輝": {
    "kana": "こうき",
    "definition": "brilliant"
  },
  "騎士": {
    "kana": "きし",
    "definition": "knight"
  },
  "騎馬": {
    "kana": "きば",
    "definition": "horseback riding"
  },
  "鬼神": {
    "kana": "きじん",
    "definition": "devil"
  },
  "鬼才": {
    "kana": "きさい",
    "definition": "genius"
  },
  "真偽": {
    "kana": "しんぎ",
    "definition": "authenticity"
  },
  "虚偽": {
    "kana": "きょぎ",
    "definition": "falsehood"
  },
  "儀式": {
    "kana": "ぎしき",
    "definition": "ceremony"
  },
  "威儀": {
    "kana": "いぎ",
    "definition": "dignity"
  },
  "戯曲": {
    "kana": "ぎきょく",
    "definition": "play"
  },
  "遊戯": {
    "kana": "ゆうぎ",
    "definition": "game"
  },
  "児戯": {
    "kana": "じぎ",
    "definition": "child's play"
  },
  "技術": {
    "kana": "ぎじゅつ",
    "definition": "technology"
  },
  "技師": {
    "kana": "ぎし",
    "definition": "engineer"
  },
  "特技": {
    "kana": "とくぎ",
    "definition": "special skill"
  },
  "擬音": {
    "kana": "ぎおん",
    "definition": "Onomatopoeia"
  },
  "模擬": {
    "kana": "もぎ",
    "definition": "simulation"
  },
  "犠牲": {
    "kana": "ぎせい",
    "definition": "Sacrifice"
  },
  "犠打": {
    "kana": "ぎだ",
    "definition": "sacrifice"
  },
  "疑念": {
    "kana": "ぎねん",
    "definition": "Doubt"
  },
  "疑問": {
    "kana": "ぎもん",
    "definition": "question"
  },
  "容疑": {
    "kana": "ようぎ",
    "definition": "suspicion"
  },
  "義理": {
    "kana": "ぎり",
    "definition": "in-law"
  },
  "正義": {
    "kana": "せいぎ",
    "definition": "justice"
  },
  "議論": {
    "kana": "ぎろん",
    "definition": "discussion"
  },
  "会議": {
    "kana": "かいぎ",
    "definition": "meeting"
  },
  "異議": {
    "kana": "いぎ",
    "definition": "objection"
  },
  "菊花": {
    "kana": "きっか",
    "definition": "chrysanthemum"
  },
  "白菊": {
    "kana": "しらぎく",
    "definition": "white chrysanthemum"
  },
  "吉例": {
    "kana": "きちれい",
    "definition": "lucky example"
  },
  "吉報": {
    "kana": "きっぽう",
    "definition": "good news"
  },
  "不吉": {
    "kana": "ふきつ",
    "definition": "ominous"
  },
  "満喫": {
    "kana": "まんきつ",
    "definition": "enjoyment"
  },
  "詰問": {
    "kana": "きつもん",
    "definition": "interrogation"
  },
  "難詰": {
    "kana": "なんきつ",
    "definition": "difficulty"
  },
  "却下": {
    "kana": "きゃっか",
    "definition": "rejected"
  },
  "退却": {
    "kana": "たいきゃく",
    "definition": "retreat"
  },
  "売却": {
    "kana": "ばいきゃく",
    "definition": "sale"
  },
  "客間": {
    "kana": "きゃくま",
    "definition": "parlor"
  },
  "客車": {
    "kana": "きゃくしゃ",
    "definition": "passenger car"
  },
  "乗客": {
    "kana": "じょうきゃく",
    "definition": "passenger"
  },
  "客死": {
    "kana": "かくし",
    "definition": "guest death"
  },
  "主客": {
    "kana": "しゅかく",
    "definition": "main guest"
  },
  "旅客": {
    "kana": "りょきゃく",
    "definition": "passenger"
  },
  "脚部": {
    "kana": "きゃくぶ",
    "definition": "leg"
  },
  "三脚": {
    "kana": "さんきゃく",
    "definition": "tripod"
  },
  "脚立": {
    "kana": "きゃたつ",
    "definition": "stepladder"
  },
  "虐待": {
    "kana": "ぎゃくたい",
    "definition": "abuse"
  },
  "虐殺": {
    "kana": "ぎゃくさつ",
    "definition": "massacre"
  },
  "残虐": {
    "kana": "ざんぎゃく",
    "definition": "cruelty"
  },
  "逆転": {
    "kana": "ぎゃくてん",
    "definition": "reversal"
  },
  "順逆": {
    "kana": "じゅんぎゃく",
    "definition": "back and forth"
  },
  "丘陵": {
    "kana": "きゅうりょう",
    "definition": "hills"
  },
  "砂丘": {
    "kana": "さきゅう",
    "definition": "sand dunes"
  },
  "休憩": {
    "kana": "きゅうけい",
    "definition": "rest"
  },
  "休止": {
    "kana": "きゅうし",
    "definition": "pause"
  },
  "定休": {
    "kana": "ていきゅう",
    "definition": "Closed"
  },
  "休息": {
    "kana": "きゅうそく",
    "definition": "rest"
  },
  "消息": {
    "kana": "しょうそく",
    "definition": "news"
  },
  "及第": {
    "kana": "きゅうだい",
    "definition": "pass"
  },
  "追及": {
    "kana": "ついきゅう",
    "definition": "investigation"
  },
  "普及": {
    "kana": "ふきゅう",
    "definition": "Spread"
  },
  "吸収": {
    "kana": "きゅうしゅう",
    "definition": "absorption"
  },
  "吸入": {
    "kana": "きゅうにゅう",
    "definition": "inhalation"
  },
  "呼吸": {
    "kana": "こきゅう",
    "definition": "breathing"
  },
  "宮廷": {
    "kana": "きゅうてい",
    "definition": "court"
  },
  "宮殿": {
    "kana": "きゅうでん",
    "definition": "palace"
  },
  "離宮": {
    "kana": "りきゅう",
    "definition": "detached palace"
  },
  "宮司": {
    "kana": "ぐうじ",
    "definition": "chief priest"
  },
  "神宮": {
    "kana": "じんぐう",
    "definition": "Jingu"
  },
  "東宮": {
    "kana": "とうぐう",
    "definition": "Crown Prince"
  },
  "弓道": {
    "kana": "きゅうどう",
    "definition": "archery"
  },
  "弓状": {
    "kana": "ゆみじょう",
    "definition": "arcuate"
  },
  "洋弓": {
    "kana": "ひろしゆみ",
    "definition": "Western bow"
  },
  "急坂": {
    "kana": "きゅうさか",
    "definition": "steep slope"
  },
  "急速": {
    "kana": "きゅうそく",
    "definition": "rapid"
  },
  "急務": {
    "kana": "きゅうむ",
    "definition": "urgent business"
  },
  "緊急": {
    "kana": "きんきゅう",
    "definition": "emergency"
  },
  "救助": {
    "kana": "きゅうじょ",
    "definition": "rescue"
  },
  "救援": {
    "kana": "きゅうえん",
    "definition": "relief"
  },
  "救急": {
    "kana": "きゅうきゅう",
    "definition": "first aid"
  },
  "求職": {
    "kana": "きゅうしょく",
    "definition": "looking for a job"
  },
  "要求": {
    "kana": "ようきゅう",
    "definition": "request"
  },
  "追求": {
    "kana": "ついきゅう",
    "definition": "Pursuit"
  },
  "球形": {
    "kana": "きゅうけい",
    "definition": "spherical"
  },
  "球技": {
    "kana": "きゅうぎ",
    "definition": "ball game"
  },
  "球茎": {
    "kana": "きゅうけい",
    "definition": "corm"
  },
  "研究": {
    "kana": "けんきゅう",
    "definition": "the study"
  },
  "学究": {
    "kana": "がっきゅう",
    "definition": "student"
  },
  "窮極": {
    "kana": "きゅうきょく",
    "definition": "ultimate"
  },
  "窮屈": {
    "kana": "きゅうくつ",
    "definition": "narrow"
  },
  "困窮": {
    "kana": "こんきゅう",
    "definition": "poverty"
  },
  "糾弾": {
    "kana": "きゅうだん",
    "definition": "condemnation"
  },
  "紛糾": {
    "kana": "ふんきゅう",
    "definition": "conflict"
  },
  "配給": {
    "kana": "はいきゅう",
    "definition": "distribution"
  },
  "月給": {
    "kana": "げっきゅう",
    "definition": "monthly salary"
  },
  "旧道": {
    "kana": "きゅうどう",
    "definition": "old road"
  },
  "新旧": {
    "kana": "しんきゅう",
    "definition": "old and new"
  },
  "復旧": {
    "kana": "ふっきゅう",
    "definition": "restoration"
  },
  "牛馬": {
    "kana": "ぎゅうば",
    "definition": "cattle and horses"
  },
  "牛乳": {
    "kana": "ぎゅうにゅう",
    "definition": "milk"
  },
  "闘牛": {
    "kana": "とうぎゅう",
    "definition": "bullfight"
  },
  "去就": {
    "kana": "きょしゅう",
    "definition": "leaving"
  },
  "除去": {
    "kana": "じょきょ",
    "definition": "Removal"
  },
  "過去": {
    "kana": "かこ",
    "definition": "past"
  },
  "居住": {
    "kana": "きょじゅう",
    "definition": "residence"
  },
  "居室": {
    "kana": "きょしつ",
    "definition": "room"
  },
  "住居": {
    "kana": "じゅうきょ",
    "definition": "residence"
  },
  "巨匠": {
    "kana": "きょしょう",
    "definition": "master"
  },
  "巨万": {
    "kana": "きょまん",
    "definition": "gigantic"
  },
  "拒絶": {
    "kana": "きょぜつ",
    "definition": "rejection"
  },
  "拒否": {
    "kana": "きょひ",
    "definition": "rejection"
  },
  "拠点": {
    "kana": "きょてん",
    "definition": "Base"
  },
  "占拠": {
    "kana": "せんきょ",
    "definition": "occupation"
  },
  "根拠": {
    "kana": "こんきょ",
    "definition": "basis"
  },
  "証拠": {
    "kana": "しょうこ",
    "definition": "evidence"
  },
  "挙手": {
    "kana": "きょしゅ",
    "definition": "Raise your hand"
  },
  "挙国": {
    "kana": "きょこく",
    "definition": "nation"
  },
  "壮挙": {
    "kana": "そうきょ",
    "definition": "splendor"
  },
  "虚無": {
    "kana": "きょむ",
    "definition": "nothingness"
  },
  "空虚": {
    "kana": "くうきょ",
    "definition": "emptiness"
  },
  "虚空": {
    "kana": "きょくう",
    "definition": "void"
  },
  "許諾": {
    "kana": "きょだく",
    "definition": "Permission"
  },
  "特許": {
    "kana": "とっきょ",
    "definition": "patent"
  },
  "距離": {
    "kana": "きょり",
    "definition": "distance"
  },
  "漁業": {
    "kana": "ぎょぎょう",
    "definition": "fishery"
  },
  "漁船": {
    "kana": "ぎょせん",
    "definition": "fishing boat"
  },
  "漁村": {
    "kana": "ぎょそん",
    "definition": "fishing village"
  },
  "漁師": {
    "kana": "りょうし",
    "definition": "fisherman"
  },
  "不漁": {
    "kana": "ふりょう",
    "definition": "poor catch"
  },
  "魚類": {
    "kana": "ぎょるい",
    "definition": "fish"
  },
  "金魚": {
    "kana": "きんぎょ",
    "definition": "Goldfish"
  },
  "鮮魚": {
    "kana": "せんぎょ",
    "definition": "fresh fish"
  },
  "享有": {
    "kana": "きょうゆう",
    "definition": "enjoyment"
  },
  "享受": {
    "kana": "きょうじゅ",
    "definition": "enjoying"
  },
  "享楽": {
    "kana": "きょうらく",
    "definition": "enjoyment"
  },
  "帰京": {
    "kana": "ききょう",
    "definition": "return to Tokyo"
  },
  "供給": {
    "kana": "きょうきゅう",
    "definition": "supply"
  },
  "提供": {
    "kana": "ていきょう",
    "definition": "offer"
  },
  "自供": {
    "kana": "じきょう",
    "definition": "confession"
  },
  "供物": {
    "kana": "くもつ",
    "definition": "offering"
  },
  "供養": {
    "kana": "くよう",
    "definition": "memorial service"
  },
  "競争": {
    "kana": "きょうそう",
    "definition": "competition"
  },
  "競技": {
    "kana": "きょうぎ",
    "definition": "Competition"
  },
  "競泳": {
    "kana": "きょうえい",
    "definition": "swimming race"
  },
  "競馬": {
    "kana": "けいば",
    "definition": "horse racing"
  },
  "競輪": {
    "kana": "けいりん",
    "definition": "bicycle race"
  },
  "共同": {
    "kana": "きょうどう",
    "definition": "Joint"
  },
  "共通": {
    "kana": "きょうつう",
    "definition": "common"
  },
  "公共": {
    "kana": "こうきょう",
    "definition": "public"
  },
  "凶悪": {
    "kana": "きょうあく",
    "definition": "Heinous"
  },
  "吉凶": {
    "kana": "きっきょう",
    "definition": "fortune"
  },
  "協会": {
    "kana": "きょうかい",
    "definition": "Association"
  },
  "妥協": {
    "kana": "だきょう",
    "definition": "compromise"
  },
  "絶叫": {
    "kana": "ぜっきょう",
    "definition": "scream"
  },
  "境界": {
    "kana": "きょうかい",
    "definition": "boundary"
  },
  "逆境": {
    "kana": "ぎゃっきょう",
    "definition": "adversity"
  },
  "限界": {
    "kana": "げんかい",
    "definition": "limit"
  },
  "世界": {
    "kana": "せかい",
    "definition": "world"
  },
  "境遇": {
    "kana": "きょうぐう",
    "definition": "circumstances"
  },
  "待遇": {
    "kana": "たいぐう",
    "definition": "treatment"
  },
  "峡谷": {
    "kana": "きょうこく",
    "definition": "canyon"
  },
  "海峡": {
    "kana": "かいきょう",
    "definition": "strait"
  },
  "強弱": {
    "kana": "きょうじゃく",
    "definition": "strength"
  },
  "強要": {
    "kana": "きょうよう",
    "definition": "coercion"
  },
  "勉強": {
    "kana": "べんきょう",
    "definition": "study"
  },
  "強引": {
    "kana": "ごういん",
    "definition": "forcible"
  },
  "強情": {
    "kana": "ごうじょう",
    "definition": "obstinate"
  },
  "強盗": {
    "kana": "ごうとう",
    "definition": "robbery"
  },
  "恐慌": {
    "kana": "きょうこう",
    "definition": "panic"
  },
  "恐怖": {
    "kana": "きょうふ",
    "definition": "Fear"
  },
  "恐縮": {
    "kana": "きょうしゅく",
    "definition": "Excuse me"
  },
  "恭賀": {
    "kana": "きょうが",
    "definition": "Kyouga"
  },
  "恭順": {
    "kana": "きょうじゅん",
    "definition": "Obedience"
  },
  "挟撃": {
    "kana": "きょうげき",
    "definition": "pincer attack"
  },
  "教訓": {
    "kana": "きょうくん",
    "definition": "Lesson"
  },
  "宗教": {
    "kana": "しゅうきょう",
    "definition": "religion"
  },
  "教唆": {
    "kana": "きょうさ",
    "definition": "instigation"
  },
  "示唆": {
    "kana": "しさ",
    "definition": "suggestion"
  },
  "橋脚": {
    "kana": "きょうきゃく",
    "definition": "pier"
  },
  "鉄橋": {
    "kana": "てっきょう",
    "definition": "iron bridge"
  },
  "狂言": {
    "kana": "きょうげん",
    "definition": "Kyogen"
  },
  "熱狂": {
    "kana": "ねっきょう",
    "definition": "frenzy"
  },
  "狭量": {
    "kana": "きょうりょう",
    "definition": "Narrow"
  },
  "広狭": {
    "kana": "こうきょう",
    "definition": "wide and narrow"
  },
  "偏狭": {
    "kana": "へんきょう",
    "definition": "narrow-minded"
  },
  "矯正": {
    "kana": "きょうせい",
    "definition": "correct"
  },
  "奇矯": {
    "kana": "ききょう",
    "definition": "eccentric"
  },
  "胸囲": {
    "kana": "きょうい",
    "definition": "chest circumference"
  },
  "胸中": {
    "kana": "きょうちゅう",
    "definition": "chest"
  },
  "脅迫": {
    "kana": "きょうはく",
    "definition": "Intimidation"
  },
  "脅威": {
    "kana": "きょうい",
    "definition": "threat"
  },
  "復興": {
    "kana": "ふっこう",
    "definition": "reconstruction"
  },
  "振興": {
    "kana": "しんこう",
    "definition": "Promotion"
  },
  "興味": {
    "kana": "きょうみ",
    "definition": "interest"
  },
  "興趣": {
    "kana": "きょうしゅ",
    "definition": "interest"
  },
  "余興": {
    "kana": "よきょう",
    "definition": "entertainment"
  },
  "郷里": {
    "kana": "きょうり",
    "definition": "hometown"
  },
  "郷土": {
    "kana": "きょうど",
    "definition": "hometown"
  },
  "異郷": {
    "kana": "いきょう",
    "definition": "foreign land"
  },
  "郷士": {
    "kana": "ごうし",
    "definition": "squire"
  },
  "近郷": {
    "kana": "きんさと",
    "definition": "neighborhood"
  },
  "在郷": {
    "kana": "ざいさと",
    "definition": "hometown"
  },
  "鏡台": {
    "kana": "きょうだい",
    "definition": "dresser"
  },
  "驚異": {
    "kana": "きょうい",
    "definition": "marvel"
  },
  "驚嘆": {
    "kana": "きょうたん",
    "definition": "marvel"
  },
  "仰視": {
    "kana": "ぎょうし",
    "definition": "looking up"
  },
  "仰天": {
    "kana": "ぎょうてん",
    "definition": "astonishment"
  },
  "仰角": {
    "kana": "ぎょうかく",
    "definition": "elevation angle"
  },
  "信仰": {
    "kana": "しんこう",
    "definition": "faith"
  },
  "凝固": {
    "kana": "ぎょうこ",
    "definition": "coagulation"
  },
  "凝結": {
    "kana": "ぎょうけつ",
    "definition": "condensation"
  },
  "凝視": {
    "kana": "ぎょうし",
    "definition": "gaze"
  },
  "暁天": {
    "kana": "あかつきてん",
    "definition": "dawn"
  },
  "今暁": {
    "kana": "いまあかつき",
    "definition": "this morning"
  },
  "通暁": {
    "kana": "つうぎょう",
    "definition": "knowledge"
  },
  "業績": {
    "kana": "ぎょうせき",
    "definition": "performance"
  },
  "職業": {
    "kana": "しょくぎょう",
    "definition": "Profession"
  },
  "卒業": {
    "kana": "そつぎょう",
    "definition": "graduation"
  },
  "業病": {
    "kana": "ごうびょう",
    "definition": "incurable disease"
  },
  "罪業": {
    "kana": "ざいぎょう",
    "definition": "sin"
  },
  "局部": {
    "kana": "きょくぶ",
    "definition": "Local"
  },
  "時局": {
    "kana": "じきょく",
    "definition": "current situation"
  },
  "結局": {
    "kana": "けっきょく",
    "definition": "in the end"
  },
  "曲線": {
    "kana": "きょくせん",
    "definition": "curve"
  },
  "極限": {
    "kana": "きょくげん",
    "definition": "limit"
  },
  "終極": {
    "kana": "おわりきょく",
    "definition": "end"
  },
  "極秘": {
    "kana": "ごくひ",
    "definition": "top secret"
  },
  "至極": {
    "kana": "しごく",
    "definition": "extreme"
  },
  "宝玉": {
    "kana": "たからだま",
    "definition": "Jewel"
  },
  "勤務": {
    "kana": "きんむ",
    "definition": "work"
  },
  "勤勉": {
    "kana": "きんべん",
    "definition": "diligence"
  },
  "均衡": {
    "kana": "きんこう",
    "definition": "equilibrium"
  },
  "平衡": {
    "kana": "へいこう",
    "definition": "equilibrium"
  },
  "均等": {
    "kana": "きんとう",
    "definition": "equality"
  },
  "平均": {
    "kana": "へいきん",
    "definition": "average"
  },
  "斤量": {
    "kana": "きんりょう",
    "definition": "Weight"
  },
  "琴線": {
    "kana": "きんせん",
    "definition": "Heartstring"
  },
  "木琴": {
    "kana": "きこん",
    "definition": "xylophone"
  },
  "禁止": {
    "kana": "きんし",
    "definition": "Ban"
  },
  "禁煙": {
    "kana": "きんえん",
    "definition": "no smoking"
  },
  "厳禁": {
    "kana": "げんきん",
    "definition": "strictly prohibited"
  },
  "筋肉": {
    "kana": "きんにく",
    "definition": "muscle"
  },
  "筋骨": {
    "kana": "きんこつ",
    "definition": "muscles and bones"
  },
  "鉄筋": {
    "kana": "てっきん",
    "definition": "rebar"
  },
  "緊張": {
    "kana": "きんちょう",
    "definition": "tension"
  },
  "緊密": {
    "kana": "きんみつ",
    "definition": "close"
  },
  "開襟": {
    "kana": "かいきん",
    "definition": "open collar"
  },
  "胸襟": {
    "kana": "きょうきん",
    "definition": "chest collar"
  },
  "謹慎": {
    "kana": "きんしん",
    "definition": "Suspension"
  },
  "謹賀": {
    "kana": "きんが",
    "definition": "happy birthday"
  },
  "謹呈": {
    "kana": "きんてい",
    "definition": "honorable presentation"
  },
  "近所": {
    "kana": "きんじょ",
    "definition": "neighborhood"
  },
  "近代": {
    "kana": "きんだい",
    "definition": "modern times"
  },
  "接近": {
    "kana": "せっきん",
    "definition": "approach"
  },
  "金属": {
    "kana": "きんぞく",
    "definition": "metal"
  },
  "金銭": {
    "kana": "きんせん",
    "definition": "money"
  },
  "純金": {
    "kana": "じゅんきん",
    "definition": "pure gold"
  },
  "金色": {
    "kana": "きんいろ",
    "definition": "golden color"
  },
  "吟味": {
    "kana": "ぎんみ",
    "definition": "close examination"
  },
  "詩吟": {
    "kana": "しぎん",
    "definition": "Shigin"
  },
  "苦吟": {
    "kana": "くぎん",
    "definition": "agonizing"
  },
  "銀貨": {
    "kana": "ぎんか",
    "definition": "silver coin"
  },
  "九百": {
    "kana": "きゅうひゃく",
    "definition": "Nine hundred"
  },
  "九月": {
    "kana": "くがつ",
    "definition": "September"
  },
  "句集": {
    "kana": "くしゅう",
    "definition": "collection of haiku"
  },
  "字句": {
    "kana": "じく",
    "definition": "lexical"
  },
  "節句": {
    "kana": "せっく",
    "definition": "Festival"
  },
  "区別": {
    "kana": "くべつ",
    "definition": "Distinction"
  },
  "区々": {
    "kana": "く",
    "definition": "Separately"
  },
  "苦心": {
    "kana": "くしん",
    "definition": "painstaking"
  },
  "苦労": {
    "kana": "くろう",
    "definition": "hard work"
  },
  "辛苦": {
    "kana": "しんく",
    "definition": "hardship"
  },
  "駆使": {
    "kana": "くし",
    "definition": "make full use of"
  },
  "駆逐": {
    "kana": "くちく",
    "definition": "extermination"
  },
  "先駆": {
    "kana": "せんく",
    "definition": "Pioneer"
  },
  "具備": {
    "kana": "ぐび",
    "definition": "Equipment"
  },
  "道具": {
    "kana": "どうぐ",
    "definition": "tool"
  },
  "愚問": {
    "kana": "ぐもん",
    "definition": "foolish question"
  },
  "愚鈍": {
    "kana": "ぐどん",
    "definition": "stupidity"
  },
  "空想": {
    "kana": "くうそう",
    "definition": "Fantasy"
  },
  "空港": {
    "kana": "くうこう",
    "definition": "airport"
  },
  "偶然": {
    "kana": "ぐうぜん",
    "definition": "chance"
  },
  "偶数": {
    "kana": "ぐうすう",
    "definition": "even number"
  },
  "屈辱": {
    "kana": "くつじょく",
    "definition": "Humiliation"
  },
  "屈伸": {
    "kana": "くっしん",
    "definition": "Bending and stretching"
  },
  "不屈": {
    "kana": "ふくつ",
    "definition": "Indomitable"
  },
  "掘削": {
    "kana": "くっさく",
    "definition": "excavation"
  },
  "採掘": {
    "kana": "さいくつ",
    "definition": "mining"
  },
  "桑園": {
    "kana": "くわその",
    "definition": "Mulberry orchard"
  },
  "勲功": {
    "kana": "いさおこう",
    "definition": "Merit"
  },
  "勲章": {
    "kana": "くんしょう",
    "definition": "Medal"
  },
  "殊勲": {
    "kana": "しゅくん",
    "definition": "distinguished service"
  },
  "君主": {
    "kana": "くんしゅ",
    "definition": "monarch"
  },
  "君臨": {
    "kana": "くんりん",
    "definition": "Reign"
  },
  "諸君": {
    "kana": "しょくん",
    "definition": "Gentlemen"
  },
  "薫陶": {
    "kana": "くんとう",
    "definition": "teaching"
  },
  "訓練": {
    "kana": "くんれん",
    "definition": "training"
  },
  "音訓": {
    "kana": "おんくん",
    "definition": "lesson"
  },
  "群居": {
    "kana": "ぐんきょ",
    "definition": "crowd"
  },
  "抜群": {
    "kana": "ばつぐん",
    "definition": "Outstanding"
  },
  "軍隊": {
    "kana": "ぐんたい",
    "definition": "army"
  },
  "軍備": {
    "kana": "ぐんび",
    "definition": "armament"
  },
  "空軍": {
    "kana": "くうぐん",
    "definition": "Air Force"
  },
  "郡部": {
    "kana": "ぐんぶ",
    "definition": "county"
  },
  "係累": {
    "kana": "けいるい",
    "definition": "affiliation"
  },
  "係争": {
    "kana": "けいそう",
    "definition": "dispute"
  },
  "傾斜": {
    "kana": "けいしゃ",
    "definition": "tilt"
  },
  "傾倒": {
    "kana": "けいとう",
    "definition": "Devotion"
  },
  "傾向": {
    "kana": "けいこう",
    "definition": "tendency"
  },
  "刑罰": {
    "kana": "けいばつ",
    "definition": "punishment"
  },
  "処刑": {
    "kana": "しょけい",
    "definition": "execution"
  },
  "兄事": {
    "kana": "あにこと",
    "definition": "Brotherhood"
  },
  "父兄": {
    "kana": "ふけい",
    "definition": "parents"
  },
  "義兄": {
    "kana": "ぎあに",
    "definition": "brother-in-law"
  },
  "兄弟": {
    "kana": "きょうだい",
    "definition": "Brother"
  },
  "啓示": {
    "kana": "けいじ",
    "definition": "revelation"
  },
  "拝啓": {
    "kana": "はいけい",
    "definition": "Greetings"
  },
  "契約": {
    "kana": "けいやく",
    "definition": "contract"
  },
  "契機": {
    "kana": "けいき",
    "definition": "Opportunity"
  },
  "黙契": {
    "kana": "もくけい",
    "definition": "tacit agreement"
  },
  "形態": {
    "kana": "けいたい",
    "definition": "form"
  },
  "形成": {
    "kana": "けいせい",
    "definition": "formation"
  },
  "図形": {
    "kana": "ずけい",
    "definition": "shape"
  },
  "形相": {
    "kana": "ぎょうそう",
    "definition": "appearance"
  },
  "恵贈": {
    "kana": "けいぞう",
    "definition": "gift"
  },
  "恵与": {
    "kana": "けいよ",
    "definition": "gift"
  },
  "恩恵": {
    "kana": "おんけい",
    "definition": "benefit"
  },
  "知恵": {
    "kana": "ちえ",
    "definition": "wisdom"
  },
  "慶弔": {
    "kana": "けいちょう",
    "definition": "congratulations and condolences"
  },
  "慶祝": {
    "kana": "けいしゅく",
    "definition": "celebration"
  },
  "慶賀": {
    "kana": "けいが",
    "definition": "Congratulations"
  },
  "掲示": {
    "kana": "けいじ",
    "definition": "posting"
  },
  "掲載": {
    "kana": "けいさい",
    "definition": "publish"
  },
  "前掲": {
    "kana": "ぜんけい",
    "definition": "mentioned above"
  },
  "携帯": {
    "kana": "けいたい",
    "definition": "cell phone"
  },
  "連帯": {
    "kana": "れんたい",
    "definition": "solidarity"
  },
  "必携": {
    "kana": "ひっけい",
    "definition": "must-have"
  },
  "提携": {
    "kana": "ていけい",
    "definition": "partnership"
  },
  "敬服": {
    "kana": "けいふく",
    "definition": "admiration"
  },
  "尊敬": {
    "kana": "そんけい",
    "definition": "respect"
  },
  "光景": {
    "kana": "こうけい",
    "definition": "spectacle"
  },
  "渓谷": {
    "kana": "けいこく",
    "definition": "valley"
  },
  "渓流": {
    "kana": "けいりゅう",
    "definition": "mountain stream"
  },
  "雪渓": {
    "kana": "せっけい",
    "definition": "snow valley"
  },
  "系統": {
    "kana": "けいとう",
    "definition": "system"
  },
  "系列": {
    "kana": "けいれつ",
    "definition": "series"
  },
  "体系": {
    "kana": "たいけい",
    "definition": "system"
  },
  "系譜": {
    "kana": "けいふ",
    "definition": "genealogy"
  },
  "楽譜": {
    "kana": "がくふ",
    "definition": "Musical score"
  },
  "経費": {
    "kana": "けいひ",
    "definition": "expenses"
  },
  "経済": {
    "kana": "けいざい",
    "definition": "economic"
  },
  "経験": {
    "kana": "けいけん",
    "definition": "experience"
  },
  "お経": {
    "kana": "おけい",
    "definition": "Sutra"
  },
  "写経": {
    "kana": "しゃきょう",
    "definition": "sutra copying"
  },
  "継続": {
    "kana": "けいぞく",
    "definition": "continuation"
  },
  "継承": {
    "kana": "けいしょう",
    "definition": "Inheritance"
  },
  "中継": {
    "kana": "ちゅうけい",
    "definition": "relay"
  },
  "計算": {
    "kana": "けいさん",
    "definition": "calculation"
  },
  "警告": {
    "kana": "けいこく",
    "definition": "caveat"
  },
  "警察": {
    "kana": "けいさつ",
    "definition": "police"
  },
  "軽快": {
    "kana": "けいかい",
    "definition": "nimble"
  },
  "軽薄": {
    "kana": "けいはく",
    "definition": "frivolity"
  },
  "軽率": {
    "kana": "けいそつ",
    "definition": "thoughtlessness"
  },
  "鶏卵": {
    "kana": "けいらん",
    "definition": "chicken egg"
  },
  "鶏舎": {
    "kana": "にわとりしゃ",
    "definition": "poultry coop"
  },
  "養鶏": {
    "kana": "ようけい",
    "definition": "poultry farming"
  },
  "芸術": {
    "kana": "げいじゅつ",
    "definition": "art"
  },
  "芸能": {
    "kana": "げいのう",
    "definition": "entertainment"
  },
  "迎合": {
    "kana": "げいごう",
    "definition": "meeting"
  },
  "送迎": {
    "kana": "そうげい",
    "definition": "pick-up"
  },
  "鯨油": {
    "kana": "くじらあぶら",
    "definition": "whale oil"
  },
  "捕鯨": {
    "kana": "ほげい",
    "definition": "whaling"
  },
  "劇薬": {
    "kana": "げきやく",
    "definition": "powerful drug"
  },
  "劇場": {
    "kana": "げきじょう",
    "definition": "theater"
  },
  "演劇": {
    "kana": "えんげき",
    "definition": "theater"
  },
  "撃退": {
    "kana": "げきたい",
    "definition": "Repel"
  },
  "攻撃": {
    "kana": "こうげき",
    "definition": "attack"
  },
  "打撃": {
    "kana": "だげき",
    "definition": "blow"
  },
  "激動": {
    "kana": "げきどう",
    "definition": "upheaval"
  },
  "感激": {
    "kana": "かんげき",
    "definition": "Deep emotion"
  },
  "傑物": {
    "kana": "けつぶつ",
    "definition": "masterpiece"
  },
  "豪傑": {
    "kana": "ごうけつ",
    "definition": "hero"
  },
  "欠如": {
    "kana": "けつじょ",
    "definition": "lack"
  },
  "突如": {
    "kana": "とつじょ",
    "definition": "suddenly"
  },
  "躍如": {
    "kana": "やくじょ",
    "definition": "roaring"
  },
  "如実": {
    "kana": "にょじつ",
    "definition": "reality"
  },
  "如来": {
    "kana": "にょらい",
    "definition": "Tathagata"
  },
  "欠乏": {
    "kana": "けつぼう",
    "definition": "deficiency"
  },
  "欠席": {
    "kana": "けっせき",
    "definition": "absence"
  },
  "補欠": {
    "kana": "ほけつ",
    "definition": "substitute"
  },
  "貧乏": {
    "kana": "びんぼう",
    "definition": "poor"
  },
  "耐乏": {
    "kana": "たいぼう",
    "definition": "austerity"
  },
  "決裂": {
    "kana": "けつれつ",
    "definition": "rupture"
  },
  "破裂": {
    "kana": "はれつ",
    "definition": "rupture"
  },
  "潔白": {
    "kana": "けっぱく",
    "definition": "innocence"
  },
  "清潔": {
    "kana": "せいけつ",
    "definition": "cleanliness"
  },
  "純潔": {
    "kana": "じゅんけつ",
    "definition": "Purity"
  },
  "穴居": {
    "kana": "けっきょ",
    "definition": "cave dwelling"
  },
  "墓穴": {
    "kana": "ぼけつ",
    "definition": "grave"
  },
  "結晶": {
    "kana": "けっしょう",
    "definition": "crystal"
  },
  "結論": {
    "kana": "けつろん",
    "definition": "Conclusion"
  },
  "結婚": {
    "kana": "けっこん",
    "definition": "marriage"
  },
  "連結": {
    "kana": "れんけつ",
    "definition": "Linking"
  },
  "血統": {
    "kana": "けっとう",
    "definition": "pedigree"
  },
  "鮮血": {
    "kana": "せんけつ",
    "definition": "fresh blood"
  },
  "月曜": {
    "kana": "げつよう",
    "definition": "Monday"
  },
  "歳月": {
    "kana": "さいげつ",
    "definition": "years"
  },
  "正月": {
    "kana": "しょうがつ",
    "definition": "New Year"
  },
  "件数": {
    "kana": "けんすう",
    "definition": "number"
  },
  "事件": {
    "kana": "じけん",
    "definition": "incident"
  },
  "条件": {
    "kana": "じょうけん",
    "definition": "conditions"
  },
  "倹約": {
    "kana": "けんやく",
    "definition": "frugality"
  },
  "節倹": {
    "kana": "ふしけん",
    "definition": "economy"
  },
  "勤倹": {
    "kana": "きんけん",
    "definition": "diligence"
  },
  "健康": {
    "kana": "けんこう",
    "definition": "health"
  },
  "健闘": {
    "kana": "けんとう",
    "definition": "good fight"
  },
  "強健": {
    "kana": "きょうけん",
    "definition": "robust"
  },
  "小康": {
    "kana": "しょうこう",
    "definition": "respite"
  },
  "兼用": {
    "kana": "けんよう",
    "definition": "dual use"
  },
  "兼任": {
    "kana": "けんにん",
    "definition": "Concurrent post"
  },
  "兼職": {
    "kana": "けんしょく",
    "definition": "Concurrent post"
  },
  "剣道": {
    "kana": "けんどう",
    "definition": "kendo"
  },
  "剣舞": {
    "kana": "けんぶ",
    "definition": "sword dance"
  },
  "刀剣": {
    "kana": "とうけん",
    "definition": "sword"
  },
  "堅固": {
    "kana": "けんご",
    "definition": "solid"
  },
  "堅実": {
    "kana": "けんじつ",
    "definition": "solid"
  },
  "中堅": {
    "kana": "ちゅうけん",
    "definition": "medium-sized"
  },
  "嫌悪": {
    "kana": "けんお",
    "definition": "disgust"
  },
  "嫌疑": {
    "kana": "けんぎ",
    "definition": "suspicion"
  },
  "機嫌": {
    "kana": "きげん",
    "definition": "mood"
  },
  "建築": {
    "kana": "けんちく",
    "definition": "architecture"
  },
  "建議": {
    "kana": "けんぎ",
    "definition": "proposal"
  },
  "建立": {
    "kana": "こんりゅう",
    "definition": "Erection"
  },
  "憲章": {
    "kana": "けんしょう",
    "definition": "charter"
  },
  "官憲": {
    "kana": "かんけん",
    "definition": "authorities"
  },
  "懸垂": {
    "kana": "けんすい",
    "definition": "Suspension"
  },
  "懸賞": {
    "kana": "けんしょう",
    "definition": "Sweepstakes"
  },
  "懸命": {
    "kana": "けんめい",
    "definition": "work hard"
  },
  "懸念": {
    "kana": "けねん",
    "definition": "concern"
  },
  "懸想": {
    "kana": "けそう",
    "definition": "concerns"
  },
  "検査": {
    "kana": "けんさ",
    "definition": "test"
  },
  "検討": {
    "kana": "けんとう",
    "definition": "examination"
  },
  "点検": {
    "kana": "てんけん",
    "definition": "inspection"
  },
  "権利": {
    "kana": "けんり",
    "definition": "right"
  },
  "権威": {
    "kana": "けんい",
    "definition": "authority"
  },
  "権現": {
    "kana": "ごんげん",
    "definition": "Gongen"
  },
  "犬歯": {
    "kana": "けんし",
    "definition": "canine tooth"
  },
  "愛犬": {
    "kana": "あいけん",
    "definition": "pet dog"
  },
  "野犬": {
    "kana": "やけん",
    "definition": "wild dog"
  },
  "献立": {
    "kana": "こんだて",
    "definition": "menu"
  },
  "研修": {
    "kana": "けんしゅう",
    "definition": "training"
  },
  "研磨": {
    "kana": "けんま",
    "definition": "polishing"
  },
  "絹布": {
    "kana": "けんぷ",
    "definition": "silk"
  },
  "県庁": {
    "kana": "けんちょう",
    "definition": "prefectural office"
  },
  "県立": {
    "kana": "けんりつ",
    "definition": "prefectural"
  },
  "肩章": {
    "kana": "けんしょう",
    "definition": "epaulets"
  },
  "双肩": {
    "kana": "そうけん",
    "definition": "two shoulders"
  },
  "比肩": {
    "kana": "ひけん",
    "definition": "comparable"
  },
  "見学": {
    "kana": "けんがく",
    "definition": "field trip"
  },
  "謙虚": {
    "kana": "けんきょ",
    "definition": "humble"
  },
  "謙譲": {
    "kana": "けんじょう",
    "definition": "Modesty"
  },
  "先賢": {
    "kana": "さきさとし",
    "definition": "wise man"
  },
  "軒数": {
    "kana": "けんすう",
    "definition": "Number of houses"
  },
  "派遣": {
    "kana": "はけん",
    "definition": "dispatch"
  },
  "険悪": {
    "kana": "けんあく",
    "definition": "danger"
  },
  "保険": {
    "kana": "ほけん",
    "definition": "insurance"
  },
  "顕著": {
    "kana": "けんちょ",
    "definition": "conspicuous"
  },
  "顕彰": {
    "kana": "けんしょう",
    "definition": "Commendation"
  },
  "元素": {
    "kana": "げんそ",
    "definition": "element"
  },
  "多元": {
    "kana": "たげん",
    "definition": "multiple"
  },
  "元祖": {
    "kana": "がんそ",
    "definition": "ancestor"
  },
  "元来": {
    "kana": "がんらい",
    "definition": "originally"
  },
  "原理": {
    "kana": "げんり",
    "definition": "principle"
  },
  "高原": {
    "kana": "こうげん",
    "definition": "Plateau"
  },
  "原型": {
    "kana": "げんけい",
    "definition": "prototype"
  },
  "模型": {
    "kana": "もけい",
    "definition": "model"
  },
  "典型": {
    "kana": "てんけい",
    "definition": "Typical"
  },
  "原色": {
    "kana": "げんしょく",
    "definition": "primary color"
  },
  "特色": {
    "kana": "とくしょく",
    "definition": "Features"
  },
  "物色": {
    "kana": "ぶっしょく",
    "definition": "looking for"
  },
  "色彩": {
    "kana": "しきさい",
    "definition": "color"
  },
  "色調": {
    "kana": "しきちょう",
    "definition": "tone"
  },
  "色欲": {
    "kana": "しょくよく",
    "definition": "lust"
  },
  "厳格": {
    "kana": "げんかく",
    "definition": "strict"
  },
  "厳重": {
    "kana": "げんじゅう",
    "definition": "severe"
  },
  "威厳": {
    "kana": "いげん",
    "definition": "majesty"
  },
  "荘厳": {
    "kana": "そうごん",
    "definition": "Solemnity"
  },
  "幻滅": {
    "kana": "げんめつ",
    "definition": "Disillusionment"
  },
  "幻覚": {
    "kana": "げんかく",
    "definition": "Hallucination"
  },
  "夢幻": {
    "kana": "むげん",
    "definition": "fantasy"
  },
  "減少": {
    "kana": "げんしょう",
    "definition": "Decrease"
  },
  "増減": {
    "kana": "ぞうげん",
    "definition": "increase or decrease"
  },
  "源泉": {
    "kana": "げんせん",
    "definition": "source"
  },
  "資源": {
    "kana": "しげん",
    "definition": "resource"
  },
  "玄米": {
    "kana": "げんまい",
    "definition": "brown rice"
  },
  "玄関": {
    "kana": "げんかん",
    "definition": "front door"
  },
  "幽玄": {
    "kana": "ゆうげん",
    "definition": "mystery"
  },
  "現象": {
    "kana": "げんしょう",
    "definition": "phenomenon"
  },
  "現在": {
    "kana": "げんざい",
    "definition": "the current"
  },
  "表現": {
    "kana": "ひょうげん",
    "definition": "Expression"
  },
  "言論": {
    "kana": "げんろん",
    "definition": "speech"
  },
  "宣言": {
    "kana": "せんげん",
    "definition": "declaration"
  },
  "伝言": {
    "kana": "でんごん",
    "definition": "message"
  },
  "無言": {
    "kana": "むごん",
    "definition": "silent"
  },
  "制限": {
    "kana": "せいげん",
    "definition": "limit"
  },
  "期限": {
    "kana": "きげん",
    "definition": "Deadline"
  },
  "個性": {
    "kana": "こせい",
    "definition": "Individuality"
  },
  "古代": {
    "kana": "こだい",
    "definition": "ancient times"
  },
  "古典": {
    "kana": "こてん",
    "definition": "classic"
  },
  "太古": {
    "kana": "たいこ",
    "definition": "ancient times"
  },
  "点呼": {
    "kana": "てんこ",
    "definition": "roll call"
  },
  "固定": {
    "kana": "こてい",
    "definition": "fixed"
  },
  "固有": {
    "kana": "こゆう",
    "definition": "Unique"
  },
  "孤児": {
    "kana": "こじ",
    "definition": "orphan"
  },
  "孤独": {
    "kana": "こどく",
    "definition": "loneliness"
  },
  "孤立": {
    "kana": "こりつ",
    "definition": "isolation"
  },
  "弧状": {
    "kana": "こじょう",
    "definition": "Arc"
  },
  "円弧": {
    "kana": "えんこ",
    "definition": "arc"
  },
  "戸籍": {
    "kana": "こせき",
    "definition": "family register"
  },
  "下戸": {
    "kana": "げこ",
    "definition": "lower door"
  },
  "故郷": {
    "kana": "こきょう",
    "definition": "hometown"
  },
  "事故": {
    "kana": "じこ",
    "definition": "accident"
  },
  "枯死": {
    "kana": "こし",
    "definition": "Withering"
  },
  "枯淡": {
    "kana": "こたん",
    "definition": "dullness"
  },
  "湖沼": {
    "kana": "こしょう",
    "definition": "lake"
  },
  "湖畔": {
    "kana": "こはん",
    "definition": "lakeside"
  },
  "誇示": {
    "kana": "こじ",
    "definition": "show off"
  },
  "誇張": {
    "kana": "こちょう",
    "definition": "exaggeration"
  },
  "雇用": {
    "kana": "こよう",
    "definition": "employment"
  },
  "雇員": {
    "kana": "こいん",
    "definition": "employee"
  },
  "解雇": {
    "kana": "かいこ",
    "definition": "dismissal"
  },
  "顧慮": {
    "kana": "こりょ",
    "definition": "consideration"
  },
  "顧問": {
    "kana": "こもん",
    "definition": "adviser"
  },
  "回顧": {
    "kana": "かいこ",
    "definition": "retrospective"
  },
  "鼓動": {
    "kana": "こどう",
    "definition": "heartbeat"
  },
  "鼓舞": {
    "kana": "こぶ",
    "definition": "Encouragement"
  },
  "太鼓": {
    "kana": "たいこ",
    "definition": "drum"
  },
  "五穀": {
    "kana": "ごこく",
    "definition": "five grains"
  },
  "五色": {
    "kana": "ごしき",
    "definition": "five colors"
  },
  "石塔": {
    "kana": "いしとう",
    "definition": "stone pagoda"
  },
  "互角": {
    "kana": "ごかく",
    "definition": "equal"
  },
  "互選": {
    "kana": "ごせん",
    "definition": "Mutual election"
  },
  "相互": {
    "kana": "そうご",
    "definition": "Mutual"
  },
  "午前": {
    "kana": "ごぜん",
    "definition": "morning"
  },
  "正午": {
    "kana": "しょうご",
    "definition": "noon"
  },
  "呉服": {
    "kana": "ごふく",
    "definition": "Kimono"
  },
  "後刻": {
    "kana": "ごこく",
    "definition": "Later"
  },
  "前後": {
    "kana": "ぜんご",
    "definition": "front and rear"
  },
  "午後": {
    "kana": "ごご",
    "definition": "afternoon"
  },
  "後続": {
    "kana": "こうぞく",
    "definition": "successor"
  },
  "後輩": {
    "kana": "こうはい",
    "definition": "one's junior"
  },
  "御璽": {
    "kana": "ぎょじ",
    "definition": "imperial seal"
  },
  "国璽": {
    "kana": "くにじ",
    "definition": "national seal"
  },
  "御者": {
    "kana": "ぎょしゃ",
    "definition": "driver"
  },
  "制御": {
    "kana": "せいぎょ",
    "definition": "control"
  },
  "御飯": {
    "kana": "ごはん",
    "definition": "rice"
  },
  "御用": {
    "kana": "ごよう",
    "definition": "order"
  },
  "御殿": {
    "kana": "ごてん",
    "definition": "palace"
  },
  "炊飯": {
    "kana": "すいはん",
    "definition": "rice cooker"
  },
  "赤飯": {
    "kana": "せきはん",
    "definition": "Red rice"
  },
  "悟性": {
    "kana": "ごせい",
    "definition": "understanding"
  },
  "悔悟": {
    "kana": "かいさとし",
    "definition": "remorse"
  },
  "碁石": {
    "kana": "ごいし",
    "definition": "Go stones"
  },
  "語学": {
    "kana": "ごがく",
    "definition": "Language"
  },
  "新語": {
    "kana": "しんご",
    "definition": "new word"
  },
  "国語": {
    "kana": "こくご",
    "definition": "national language"
  },
  "誤解": {
    "kana": "ごかい",
    "definition": "misunderstanding"
  },
  "正誤": {
    "kana": "せいご",
    "definition": "right or wrong"
  },
  "錯誤": {
    "kana": "さくご",
    "definition": "error"
  },
  "救護": {
    "kana": "きゅうご",
    "definition": "Relief"
  },
  "保護": {
    "kana": "ほご",
    "definition": "protection"
  },
  "交通": {
    "kana": "こうつう",
    "definition": "traffic"
  },
  "交番": {
    "kana": "こうばん",
    "definition": "police box"
  },
  "社交": {
    "kana": "しゃこう",
    "definition": "socializing"
  },
  "候補": {
    "kana": "こうほ",
    "definition": "candidate"
  },
  "光線": {
    "kana": "こうせん",
    "definition": "light rays"
  },
  "栄光": {
    "kana": "えいこう",
    "definition": "glory"
  },
  "観光": {
    "kana": "かんこう",
    "definition": "sightseeing"
  },
  "光沢": {
    "kana": "こうたく",
    "definition": "luster"
  },
  "潤沢": {
    "kana": "じゅんたく",
    "definition": "abundance"
  },
  "公平": {
    "kana": "こうへい",
    "definition": "fair"
  },
  "公私": {
    "kana": "こうし",
    "definition": "public and private"
  },
  "功績": {
    "kana": "こうせき",
    "definition": "achievement"
  },
  "成功": {
    "kana": "せいこう",
    "definition": "success"
  },
  "功徳": {
    "kana": "くどく",
    "definition": "Merit"
  },
  "効果": {
    "kana": "こうか",
    "definition": "effect"
  },
  "時効": {
    "kana": "じこう",
    "definition": "prescription"
  },
  "厚情": {
    "kana": "こうじょう",
    "definition": "courtesy"
  },
  "濃厚": {
    "kana": "のうこう",
    "definition": "Rich"
  },
  "口述": {
    "kana": "こうじゅつ",
    "definition": "dictation"
  },
  "開口": {
    "kana": "かいこう",
    "definition": "opening"
  },
  "口調": {
    "kana": "くちょう",
    "definition": "tone"
  },
  "口伝": {
    "kana": "くでん",
    "definition": "oral tradition"
  },
  "口唇": {
    "kana": "こうしん",
    "definition": "lip"
  },
  "趣向": {
    "kana": "しゅこう",
    "definition": "taste"
  },
  "坑道": {
    "kana": "こうどう",
    "definition": "tunnel"
  },
  "炭坑": {
    "kana": "たんこう",
    "definition": "coal mine"
  },
  "廃坑": {
    "kana": "はいこう",
    "definition": "abandoned mine"
  },
  "良好": {
    "kana": "りょうこう",
    "definition": "Good"
  },
  "孝心": {
    "kana": "たかしこころ",
    "definition": "filial devotion"
  },
  "不孝": {
    "kana": "ふこう",
    "definition": "unfilial"
  },
  "工場": {
    "kana": "こうじょう",
    "definition": "plant"
  },
  "加工": {
    "kana": "かこう",
    "definition": "processing"
  },
  "細工": {
    "kana": "さいく",
    "definition": "Workmanship"
  },
  "巧拙": {
    "kana": "こうせつ",
    "definition": "skill"
  },
  "巧妙": {
    "kana": "こうみょう",
    "definition": "clever"
  },
  "技巧": {
    "kana": "ぎこう",
    "definition": "finesse"
  },
  "幸福": {
    "kana": "こうふく",
    "definition": "happiness"
  },
  "不幸": {
    "kana": "ふこう",
    "definition": "Misfortune"
  },
  "広言": {
    "kana": "こうげん",
    "definition": "broad words"
  },
  "広義": {
    "kana": "こうぎ",
    "definition": "broadly defined"
  },
  "恒常": {
    "kana": "こうじょう",
    "definition": "constant"
  },
  "恒例": {
    "kana": "こうれい",
    "definition": "annual"
  },
  "恒久": {
    "kana": "こうきゅう",
    "definition": "permanent"
  },
  "抗争": {
    "kana": "こうそう",
    "definition": "conflict"
  },
  "抗議": {
    "kana": "こうぎ",
    "definition": "protest"
  },
  "対抗": {
    "kana": "たいこう",
    "definition": "opposition"
  },
  "拘束": {
    "kana": "こうそく",
    "definition": "Restraint"
  },
  "拘留": {
    "kana": "こうりゅう",
    "definition": "detention"
  },
  "拘置": {
    "kana": "こうち",
    "definition": "detention"
  },
  "控除": {
    "kana": "こうじょ",
    "definition": "deduction"
  },
  "控訴": {
    "kana": "こうそ",
    "definition": "appeal"
  },
  "攻守": {
    "kana": "こうしゅ",
    "definition": "offense and defense"
  },
  "専攻": {
    "kana": "せんこう",
    "definition": "Major"
  },
  "更新": {
    "kana": "こうしん",
    "definition": "update"
  },
  "更迭": {
    "kana": "こうてつ",
    "definition": "dismissal"
  },
  "変更": {
    "kana": "へんこう",
    "definition": "change"
  },
  "将校": {
    "kana": "しょうこう",
    "definition": "officer"
  },
  "学校": {
    "kana": "がっこう",
    "definition": "school"
  },
  "構造": {
    "kana": "こうぞう",
    "definition": "structure"
  },
  "結構": {
    "kana": "けっこう",
    "definition": "very well"
  },
  "江湖": {
    "kana": "こうこ",
    "definition": "Jianghu"
  },
  "港湾": {
    "kana": "こうわん",
    "definition": "port"
  },
  "漁港": {
    "kana": "ぎょこう",
    "definition": "fishing port"
  },
  "甲板": {
    "kana": "かんぱん",
    "definition": "deck"
  },
  "甲殻": {
    "kana": "こうかく",
    "definition": "shell"
  },
  "皇后": {
    "kana": "こうごう",
    "definition": "Empress"
  },
  "皇帝": {
    "kana": "こうてい",
    "definition": "emperor"
  },
  "皇室": {
    "kana": "こうしつ",
    "definition": "imperial family"
  },
  "硬貨": {
    "kana": "こうか",
    "definition": "coin"
  },
  "紅白": {
    "kana": "こうはく",
    "definition": "red and white"
  },
  "紅茶": {
    "kana": "こうちゃ",
    "definition": "black tea"
  },
  "紅葉": {
    "kana": "こうよう",
    "definition": "autumn leaves"
  },
  "真紅": {
    "kana": "しんく",
    "definition": "crimson"
  },
  "深紅": {
    "kana": "しんく",
    "definition": "crimson"
  },
  "絞殺": {
    "kana": "こうさつ",
    "definition": "strangulation"
  },
  "綱紀": {
    "kana": "こうき",
    "definition": "Discipline"
  },
  "綱領": {
    "kana": "こうりょう",
    "definition": "program"
  },
  "農耕": {
    "kana": "のうこう",
    "definition": "farming"
  },
  "思考": {
    "kana": "しこう",
    "definition": "thinking"
  },
  "参考": {
    "kana": "さんこう",
    "definition": "reference"
  },
  "肯定": {
    "kana": "こうてい",
    "definition": "positive"
  },
  "首肯": {
    "kana": "くびこう",
    "definition": "acknowledgment"
  },
  "航空": {
    "kana": "こうくう",
    "definition": "aviation"
  },
  "就航": {
    "kana": "しゅうこう",
    "definition": "In service"
  },
  "荒天": {
    "kana": "こうてん",
    "definition": "stormy weather"
  },
  "荒廃": {
    "kana": "こうはい",
    "definition": "devastation"
  },
  "荒涼": {
    "kana": "こうりょう",
    "definition": "desolate"
  },
  "講義": {
    "kana": "こうぎ",
    "definition": "lecture"
  },
  "聴講": {
    "kana": "ちょうこう",
    "definition": "attendance"
  },
  "貢献": {
    "kana": "こうけん",
    "definition": "contribution"
  },
  "購入": {
    "kana": "こうにゅう",
    "definition": "purchase"
  },
  "購買": {
    "kana": "こうばい",
    "definition": "purchase"
  },
  "購読": {
    "kana": "こうどく",
    "definition": "Subscribe"
  },
  "近郊": {
    "kana": "きんこう",
    "definition": "Suburbs"
  },
  "酵母": {
    "kana": "こうぼ",
    "definition": "yeast"
  },
  "鉱物": {
    "kana": "こうぶつ",
    "definition": "mineral"
  },
  "鉱山": {
    "kana": "こうざん",
    "definition": "mine"
  },
  "鉄鉱": {
    "kana": "てっこう",
    "definition": "iron ore"
  },
  "鋼鉄": {
    "kana": "こうてつ",
    "definition": "steel"
  },
  "鋼材": {
    "kana": "こうざい",
    "definition": "steel"
  },
  "製鋼": {
    "kana": "せいこう",
    "definition": "steel making"
  },
  "降参": {
    "kana": "こうさん",
    "definition": "Surrender"
  },
  "項目": {
    "kana": "こうもく",
    "definition": "item"
  },
  "事項": {
    "kana": "じこう",
    "definition": "matter"
  },
  "条項": {
    "kana": "じょうこう",
    "definition": "Clause"
  },
  "線香": {
    "kana": "せんこう",
    "definition": "incense"
  },
  "香車": {
    "kana": "きょうしゃ",
    "definition": "incense wheel"
  },
  "高低": {
    "kana": "こうてい",
    "definition": "high and low"
  },
  "高級": {
    "kana": "こうきゅう",
    "definition": "Luxury"
  },
  "最高": {
    "kana": "さいこう",
    "definition": "highest"
  },
  "剛健": {
    "kana": "ごうけん",
    "definition": "sturdiness"
  },
  "号泣": {
    "kana": "ごうきゅう",
    "definition": "crying"
  },
  "感泣": {
    "kana": "かんきゅう",
    "definition": "moved to tears"
  },
  "号令": {
    "kana": "ごうれい",
    "definition": "order"
  },
  "番号": {
    "kana": "ばんごう",
    "definition": "number"
  },
  "合同": {
    "kana": "ごうどう",
    "definition": "joint"
  },
  "合計": {
    "kana": "ごうけい",
    "definition": "total"
  },
  "結合": {
    "kana": "けつごう",
    "definition": "bond"
  },
  "合併": {
    "kana": "がっぺい",
    "definition": "merger"
  },
  "合宿": {
    "kana": "がっしゅく",
    "definition": "training camp"
  },
  "合点": {
    "kana": "がてん",
    "definition": "point"
  },
  "合戦": {
    "kana": "かっせん",
    "definition": "battle"
  },
  "拷問": {
    "kana": "ごうもん",
    "definition": "torture"
  },
  "豪遊": {
    "kana": "ごうゆう",
    "definition": "luxury"
  },
  "豪雨": {
    "kana": "ごうう",
    "definition": "heavy rain"
  },
  "克服": {
    "kana": "こくふく",
    "definition": "overcome"
  },
  "克己": {
    "kana": "かつき",
    "definition": "Katsumi"
  },
  "告示": {
    "kana": "こくじ",
    "definition": "notice"
  },
  "告白": {
    "kana": "こくはく",
    "definition": "confession"
  },
  "報告": {
    "kana": "ほうこく",
    "definition": "report"
  },
  "国際": {
    "kana": "こくさい",
    "definition": "international"
  },
  "国家": {
    "kana": "こっか",
    "definition": "nation"
  },
  "穀物": {
    "kana": "こくもつ",
    "definition": "grain"
  },
  "雑穀": {
    "kana": "ざっこく",
    "definition": "cereals"
  },
  "脱穀": {
    "kana": "だっこく",
    "definition": "threshing"
  },
  "酷似": {
    "kana": "こくじ",
    "definition": "close resemblance"
  },
  "冷酷": {
    "kana": "れいこく",
    "definition": "ruthless"
  },
  "残酷": {
    "kana": "ざんこく",
    "definition": "Cruelty"
  },
  "漆黒": {
    "kana": "しっこく",
    "definition": "jet black"
  },
  "暗黒": {
    "kana": "あんこく",
    "definition": "darkness"
  },
  "獄舎": {
    "kana": "ごくしゃ",
    "definition": "prison"
  },
  "疑獄": {
    "kana": "ぎごく",
    "definition": "scandal"
  },
  "腰痛": {
    "kana": "ようつう",
    "definition": "lower back pain"
  },
  "腰部": {
    "kana": "こしぶ",
    "definition": "waist"
  },
  "老骨": {
    "kana": "ろうほね",
    "definition": "old bones"
  },
  "骨髄": {
    "kana": "こつずい",
    "definition": "bone marrow"
  },
  "脳髄": {
    "kana": "のうずい",
    "definition": "brain"
  },
  "真髄": {
    "kana": "しんずい",
    "definition": "essence"
  },
  "今後": {
    "kana": "こんご",
    "definition": "from now on"
  },
  "今朝": {
    "kana": "けさ",
    "definition": "this morning"
  },
  "昨今": {
    "kana": "さっこん",
    "definition": "these days"
  },
  "今夕": {
    "kana": "こんせき",
    "definition": "this evening"
  },
  "困難": {
    "kana": "こんなん",
    "definition": "difficulty"
  },
  "貧困": {
    "kana": "ひんこん",
    "definition": "poverty"
  },
  "婚約": {
    "kana": "こんやく",
    "definition": "engagement"
  },
  "新婚": {
    "kana": "しんこん",
    "definition": "just married"
  },
  "懇切": {
    "kana": "こんせつ",
    "definition": "Kindness"
  },
  "昆虫": {
    "kana": "こんちゅう",
    "definition": "insect"
  },
  "昆布": {
    "kana": "こんぶ",
    "definition": "kelp"
  },
  "混合": {
    "kana": "こんごう",
    "definition": "mixture"
  },
  "混雑": {
    "kana": "こんざつ",
    "definition": "congestion"
  },
  "混迷": {
    "kana": "こんめい",
    "definition": "confusion"
  },
  "紺青": {
    "kana": "こんじょう",
    "definition": "dark blue"
  },
  "紺屋": {
    "kana": "こんや",
    "definition": "Konya"
  },
  "濃紺": {
    "kana": "のうこん",
    "definition": "dark blue"
  },
  "魂胆": {
    "kana": "こんたん",
    "definition": "spirit"
  },
  "霊魂": {
    "kana": "れいこん",
    "definition": "soul"
  },
  "商魂": {
    "kana": "しょうこん",
    "definition": "business spirit"
  },
  "佐幕": {
    "kana": "さまく",
    "definition": "Sabaku"
  },
  "補佐": {
    "kana": "ほさ",
    "definition": "Assistant"
  },
  "左翼": {
    "kana": "さよく",
    "definition": "left wing"
  },
  "左遷": {
    "kana": "させん",
    "definition": "relegation"
  },
  "尾翼": {
    "kana": "びよく",
    "definition": "tail"
  },
  "差異": {
    "kana": "さい",
    "definition": "difference"
  },
  "差別": {
    "kana": "さべつ",
    "definition": "discrimination"
  },
  "誤差": {
    "kana": "ごさ",
    "definition": "error"
  },
  "査察": {
    "kana": "ささつ",
    "definition": "inspection"
  },
  "調査": {
    "kana": "ちょうさ",
    "definition": "investigation"
  },
  "巡査": {
    "kana": "じゅんさ",
    "definition": "constable"
  },
  "砂糖": {
    "kana": "さとう",
    "definition": "sugar"
  },
  "土砂": {
    "kana": "どしゃ",
    "definition": "earth and sand"
  },
  "詐欺": {
    "kana": "さぎ",
    "definition": "scam"
  },
  "詐取": {
    "kana": "さしゅ",
    "definition": "fraud"
  },
  "詐称": {
    "kana": "さしょう",
    "definition": "impersonation"
  },
  "鎖国": {
    "kana": "さこく",
    "definition": "national isolation"
  },
  "連鎖": {
    "kana": "れんさ",
    "definition": "chain"
  },
  "封鎖": {
    "kana": "ふうさ",
    "definition": "blockade"
  },
  "座席": {
    "kana": "ざせき",
    "definition": "seat"
  },
  "座談": {
    "kana": "ざだん",
    "definition": "discussion"
  },
  "星座": {
    "kana": "せいざ",
    "definition": "sign"
  },
  "債務": {
    "kana": "さいむ",
    "definition": "debt"
  },
  "負債": {
    "kana": "ふさい",
    "definition": "liabilities"
  },
  "公債": {
    "kana": "こうさい",
    "definition": "public debt"
  },
  "催眠": {
    "kana": "さいみん",
    "definition": "hypnosis"
  },
  "開催": {
    "kana": "かいさい",
    "definition": "hold"
  },
  "主催": {
    "kana": "しゅさい",
    "definition": "organizer"
  },
  "再嫁": {
    "kana": "さいよめ",
    "definition": "remarriage"
  },
  "転嫁": {
    "kana": "てんか",
    "definition": "pass on"
  },
  "再選": {
    "kana": "さいせん",
    "definition": "re-election"
  },
  "最近": {
    "kana": "さいきん",
    "definition": "recently"
  },
  "夫妻": {
    "kana": "ふさい",
    "definition": "husband and wife"
  },
  "良妻": {
    "kana": "りょうさい",
    "definition": "good wife"
  },
  "宰領": {
    "kana": "さいりょう",
    "definition": "governor"
  },
  "宰相": {
    "kana": "さいしょう",
    "definition": "prime minister"
  },
  "主宰": {
    "kana": "しゅさい",
    "definition": "Presided over"
  },
  "彩色": {
    "kana": "さいしょく",
    "definition": "coloring"
  },
  "淡彩": {
    "kana": "たんさい",
    "definition": "light color"
  },
  "才能": {
    "kana": "さいのう",
    "definition": "talent"
  },
  "才覚": {
    "kana": "さいかく",
    "definition": "ingenuity"
  },
  "秀才": {
    "kana": "しゅうさい",
    "definition": "prodigy"
  },
  "採集": {
    "kana": "さいしゅう",
    "definition": "collection"
  },
  "採用": {
    "kana": "さいよう",
    "definition": "adoption"
  },
  "採光": {
    "kana": "さいこう",
    "definition": "lighting"
  },
  "栽培": {
    "kana": "さいばい",
    "definition": "Cultivation"
  },
  "盆栽": {
    "kana": "ぼんさい",
    "definition": "bonsai"
  },
  "歳末": {
    "kana": "さいまつ",
    "definition": "the end of the year"
  },
  "歳暮": {
    "kana": "せいぼ",
    "definition": "New Year's Eve"
  },
  "災害": {
    "kana": "さいがい",
    "definition": "disaster"
  },
  "災難": {
    "kana": "さいなん",
    "definition": "calamity"
  },
  "砕石": {
    "kana": "さいせき",
    "definition": "crushed stone"
  },
  "砕氷": {
    "kana": "さいこおり",
    "definition": "crushed ice"
  },
  "粉砕": {
    "kana": "ふんさい",
    "definition": "pulverization"
  },
  "祭礼": {
    "kana": "さいれい",
    "definition": "Festival"
  },
  "斎場": {
    "kana": "さいじょう",
    "definition": "Funeral hall"
  },
  "潔斎": {
    "kana": "きよしさい",
    "definition": "Kissai"
  },
  "書斎": {
    "kana": "しょさい",
    "definition": "study"
  },
  "細菌": {
    "kana": "さいきん",
    "definition": "bacteria"
  },
  "殺菌": {
    "kana": "さっきん",
    "definition": "sterilization"
  },
  "細心": {
    "kana": "さいしん",
    "definition": "meticulous"
  },
  "詳細": {
    "kana": "しょうさい",
    "definition": "detail"
  },
  "零細": {
    "kana": "れいさい",
    "definition": "very small"
  },
  "菜園": {
    "kana": "さいえん",
    "definition": "vegetable garden"
  },
  "菜食": {
    "kana": "さいしょく",
    "definition": "vegetarian diet"
  },
  "野菜": {
    "kana": "やさい",
    "definition": "vegetable"
  },
  "裁縫": {
    "kana": "さいほう",
    "definition": "sewing"
  },
  "裁判": {
    "kana": "さいばん",
    "definition": "trial"
  },
  "体裁": {
    "kana": "ていさい",
    "definition": "Appearance"
  },
  "際限": {
    "kana": "さいげん",
    "definition": "limit"
  },
  "交際": {
    "kana": "こうさい",
    "definition": "companionship"
  },
  "在留": {
    "kana": "ざいりゅう",
    "definition": "residence"
  },
  "在宅": {
    "kana": "ざいたく",
    "definition": "at home"
  },
  "存在": {
    "kana": "そんざい",
    "definition": "Existence"
  },
  "材木": {
    "kana": "ざいもく",
    "definition": "timber"
  },
  "材料": {
    "kana": "ざいりょう",
    "definition": "material"
  },
  "罪状": {
    "kana": "ざいじょう",
    "definition": "charges"
  },
  "犯罪": {
    "kana": "はんざい",
    "definition": "crime"
  },
  "謝罪": {
    "kana": "しゃざい",
    "definition": "apology"
  },
  "財産": {
    "kana": "ざいさん",
    "definition": "property"
  },
  "私財": {
    "kana": "しざい",
    "definition": "private property"
  },
  "財布": {
    "kana": "さいふ",
    "definition": "wallet"
  },
  "削除": {
    "kana": "さくじょ",
    "definition": "delete"
  },
  "削減": {
    "kana": "さくげん",
    "definition": "reduction"
  },
  "添削": {
    "kana": "てんさく",
    "definition": "correction"
  },
  "搾取": {
    "kana": "さくしゅ",
    "definition": "exploitation"
  },
  "圧搾": {
    "kana": "あっさく",
    "definition": "squeeze"
  },
  "策略": {
    "kana": "さくりゃく",
    "definition": "ruse"
  },
  "政策": {
    "kana": "せいさく",
    "definition": "policy"
  },
  "対策": {
    "kana": "たいさく",
    "definition": "measures"
  },
  "思索": {
    "kana": "しさく",
    "definition": "contemplation"
  },
  "鉄索": {
    "kana": "てつさく",
    "definition": "iron cable"
  },
  "錯覚": {
    "kana": "さっかく",
    "definition": "illusion"
  },
  "交錯": {
    "kana": "こうさく",
    "definition": "intersection"
  },
  "桜花": {
    "kana": "おうか",
    "definition": "cherry blossoms"
  },
  "観桜": {
    "kana": "かんさくら",
    "definition": "cherry blossom viewing"
  },
  "別冊": {
    "kana": "べっさつ",
    "definition": "separate volume"
  },
  "短冊": {
    "kana": "たんざく",
    "definition": "Tanzaku"
  },
  "刷新": {
    "kana": "さっしん",
    "definition": "renewal"
  },
  "増刷": {
    "kana": "ぞうさつ",
    "definition": "Reprint"
  },
  "察知": {
    "kana": "さっち",
    "definition": "Perception"
  },
  "考察": {
    "kana": "こうさつ",
    "definition": "consideration"
  },
  "摩擦": {
    "kana": "まさつ",
    "definition": "friction"
  },
  "表札": {
    "kana": "ひょうさつ",
    "definition": "nameplate"
  },
  "入札": {
    "kana": "にゅうさつ",
    "definition": "bid"
  },
  "殺到": {
    "kana": "さっとう",
    "definition": "rush"
  },
  "黙殺": {
    "kana": "もくさつ",
    "definition": "silence"
  },
  "相殺": {
    "kana": "そうさい",
    "definition": "Offset"
  },
  "雑談": {
    "kana": "ざつだん",
    "definition": "small talk"
  },
  "雑音": {
    "kana": "ざつおん",
    "definition": "noise"
  },
  "雑炊": {
    "kana": "ぞうすい",
    "definition": "rice porridge"
  },
  "雑兵": {
    "kana": "ざつへい",
    "definition": "common soldier"
  },
  "三流": {
    "kana": "さんりゅう",
    "definition": "third rate"
  },
  "再三": {
    "kana": "さいさん",
    "definition": "repeatedly"
  },
  "傘下": {
    "kana": "さんか",
    "definition": "affiliated"
  },
  "参加": {
    "kana": "さんか",
    "definition": "Participation"
  },
  "山脈": {
    "kana": "さんみゃく",
    "definition": "mountain range"
  },
  "高山": {
    "kana": "こうざん",
    "definition": "alpine"
  },
  "登山": {
    "kana": "とざん",
    "definition": "climbing"
  },
  "惨劇": {
    "kana": "さんげき",
    "definition": "Tragedy"
  },
  "悲惨": {
    "kana": "ひさん",
    "definition": "miserable"
  },
  "陰惨": {
    "kana": "いんさん",
    "definition": "gruesome"
  },
  "惨死": {
    "kana": "さんし",
    "definition": "Cruel death"
  },
  "惨殺": {
    "kana": "ざんさつ",
    "definition": "slaughter"
  },
  "散歩": {
    "kana": "さんぽ",
    "definition": "stroll"
  },
  "解散": {
    "kana": "かいさん",
    "definition": "dissolution"
  },
  "桟橋": {
    "kana": "さんばし",
    "definition": "pier"
  },
  "産業": {
    "kana": "さんぎょう",
    "definition": "industry"
  },
  "算数": {
    "kana": "さんすう",
    "definition": "arithmetic"
  },
  "予算": {
    "kana": "よさん",
    "definition": "budget"
  },
  "蚕糸": {
    "kana": "かいこいと",
    "definition": "silk thread"
  },
  "蚕食": {
    "kana": "さんしょく",
    "definition": "silkworm"
  },
  "養蚕": {
    "kana": "ようかいこ",
    "definition": "sericulture"
  },
  "賛成": {
    "kana": "さんせい",
    "definition": "agreement"
  },
  "賛同": {
    "kana": "さんどう",
    "definition": "agreement"
  },
  "称賛": {
    "kana": "しょうさん",
    "definition": "praise"
  },
  "酸味": {
    "kana": "さんみ",
    "definition": "acidity"
  },
  "酸素": {
    "kana": "さんそ",
    "definition": "oxygen"
  },
  "辛酸": {
    "kana": "しんさん",
    "definition": "bitterness"
  },
  "暫時": {
    "kana": "ざんじ",
    "definition": "for a while"
  },
  "暫定": {
    "kana": "ざんてい",
    "definition": "preliminary"
  },
  "残留": {
    "kana": "ざんりゅう",
    "definition": "residue"
  },
  "残念": {
    "kana": "ざんねん",
    "definition": "disappointing"
  },
  "敗残": {
    "kana": "はいざん",
    "definition": "defeat"
  },
  "仕事": {
    "kana": "しごと",
    "definition": "work"
  },
  "給仕": {
    "kana": "きゅうじ",
    "definition": "serving"
  },
  "伺候": {
    "kana": "うかがいそうろう",
    "definition": "visit"
  },
  "使役": {
    "kana": "しえき",
    "definition": "causative"
  },
  "使者": {
    "kana": "ししゃ",
    "definition": "messenger"
  },
  "刺激": {
    "kana": "しげき",
    "definition": "stimulation"
  },
  "司会": {
    "kana": "しかい",
    "definition": "host"
  },
  "司令": {
    "kana": "しれい",
    "definition": "command"
  },
  "史学": {
    "kana": "しがく",
    "definition": "history"
  },
  "歴史": {
    "kana": "れきし",
    "definition": "history"
  },
  "国史": {
    "kana": "くにし",
    "definition": "national history"
  },
  "嫡嗣": {
    "kana": "ちゃくつぐ",
    "definition": "legitimate heir"
  },
  "四角": {
    "kana": "しかく",
    "definition": "square"
  },
  "士官": {
    "kana": "しかん",
    "definition": "officer"
  },
  "武士": {
    "kana": "ぶし",
    "definition": "samurai"
  },
  "紳士": {
    "kana": "しんし",
    "definition": "gentleman"
  },
  "始終": {
    "kana": "しじゅう",
    "definition": "from beginning to end"
  },
  "姉妹": {
    "kana": "しまい",
    "definition": "sister"
  },
  "義妹": {
    "kana": "ぎまい",
    "definition": "sister-in-law"
  },
  "令妹": {
    "kana": "れいいもうと",
    "definition": "your younger sister"
  },
  "諸姉": {
    "kana": "しょあね",
    "definition": "older sisters"
  },
  "姿勢": {
    "kana": "しせい",
    "definition": "posture"
  },
  "容姿": {
    "kana": "ようし",
    "definition": "appearance"
  },
  "雄姿": {
    "kana": "ゆうし",
    "definition": "majestic figure"
  },
  "嫡孫": {
    "kana": "ちゃくまご",
    "definition": "legitimate grandchild"
  },
  "市民": {
    "kana": "しみん",
    "definition": "citizen"
  },
  "市況": {
    "kana": "しきょう",
    "definition": "market conditions"
  },
  "都市": {
    "kana": "とし",
    "definition": "City"
  },
  "師匠": {
    "kana": "ししょう",
    "definition": "Master"
  },
  "教師": {
    "kana": "きょうし",
    "definition": "teacher"
  },
  "医師": {
    "kana": "いし",
    "definition": "doctor"
  },
  "志望": {
    "kana": "しぼう",
    "definition": "Aspiration"
  },
  "有志": {
    "kana": "ゆうし",
    "definition": "Volunteer"
  },
  "寸志": {
    "kana": "すんし",
    "definition": "snippet"
  },
  "思想": {
    "kana": "しそう",
    "definition": "thought"
  },
  "相思": {
    "kana": "そうし",
    "definition": "mutual love"
  },
  "指示": {
    "kana": "しじ",
    "definition": "instructions"
  },
  "指導": {
    "kana": "しどう",
    "definition": "Guidance"
  },
  "屈指": {
    "kana": "くっし",
    "definition": "one of the best"
  },
  "支持": {
    "kana": "しじ",
    "definition": "support"
  },
  "支障": {
    "kana": "ししょう",
    "definition": "hinderance"
  },
  "支店": {
    "kana": "してん",
    "definition": "branch"
  },
  "支柱": {
    "kana": "しちゅう",
    "definition": "strut"
  },
  "円柱": {
    "kana": "えんちゅう",
    "definition": "Cylinder"
  },
  "電柱": {
    "kana": "でんちゅう",
    "definition": "utility pole"
  },
  "施設": {
    "kana": "しせつ",
    "definition": "institution"
  },
  "施政": {
    "kana": "しせい",
    "definition": "Administration"
  },
  "実施": {
    "kana": "じっし",
    "definition": "implementation"
  },
  "施主": {
    "kana": "せしゅ",
    "definition": "client"
  },
  "施療": {
    "kana": "しりょう",
    "definition": "Treatment"
  },
  "布施": {
    "kana": "ふせ",
    "definition": "Alms"
  },
  "枝葉": {
    "kana": "えだは",
    "definition": "branches and leaves"
  },
  "止宿": {
    "kana": "しやど",
    "definition": "lodging"
  },
  "静止": {
    "kana": "せいし",
    "definition": "Stationary"
  },
  "中止": {
    "kana": "ちゅうし",
    "definition": "cancel"
  },
  "死亡": {
    "kana": "しぼう",
    "definition": "death"
  },
  "死角": {
    "kana": "しかく",
    "definition": "blind spot"
  },
  "必死": {
    "kana": "ひっし",
    "definition": "Desperate"
  },
  "姓氏": {
    "kana": "せいし",
    "definition": "last name"
  },
  "某氏": {
    "kana": "ぼうし",
    "definition": "Mr."
  },
  "私立": {
    "kana": "しりつ",
    "definition": "private"
  },
  "私腹": {
    "kana": "しふく",
    "definition": "my own pocket"
  },
  "用紙": {
    "kana": "ようし",
    "definition": "paper"
  },
  "紫紺": {
    "kana": "しこん",
    "definition": "bluish purple"
  },
  "紫煙": {
    "kana": "しえん",
    "definition": "purple smoke"
  },
  "肢体": {
    "kana": "したい",
    "definition": "body"
  },
  "下肢": {
    "kana": "かし",
    "definition": "Lower extremities"
  },
  "脂肪": {
    "kana": "しぼう",
    "definition": "fat"
  },
  "油脂": {
    "kana": "ゆし",
    "definition": "Fats and oils"
  },
  "樹脂": {
    "kana": "じゅし",
    "definition": "resin"
  },
  "至当": {
    "kana": "しとう",
    "definition": "proper"
  },
  "冬至": {
    "kana": "とうじ",
    "definition": "winter solstice"
  },
  "視覚": {
    "kana": "しかく",
    "definition": "vision"
  },
  "注視": {
    "kana": "ちゅうし",
    "definition": "gaze"
  },
  "詩情": {
    "kana": "しじょう",
    "definition": "poetry"
  },
  "詩歌": {
    "kana": "しいか",
    "definition": "poetry"
  },
  "試験": {
    "kana": "しけん",
    "definition": "test"
  },
  "実験": {
    "kana": "じっけん",
    "definition": "experiment"
  },
  "霊験": {
    "kana": "れいけん",
    "definition": "miracle"
  },
  "追試": {
    "kana": "ついし",
    "definition": "make-up exam"
  },
  "雑誌": {
    "kana": "ざっし",
    "definition": "magazine"
  },
  "諮問": {
    "kana": "しもん",
    "definition": "consultation"
  },
  "資格": {
    "kana": "しかく",
    "definition": "Qualification"
  },
  "物資": {
    "kana": "ぶっし",
    "definition": "supplies"
  },
  "賜暇": {
    "kana": "たまものひま",
    "definition": "furlough"
  },
  "下賜": {
    "kana": "かし",
    "definition": "bestowed"
  },
  "恩賜": {
    "kana": "おんし",
    "definition": "Imperial gift"
  },
  "雌雄": {
    "kana": "しゆう",
    "definition": "male and female"
  },
  "雌伏": {
    "kana": "しふく",
    "definition": "lie down"
  },
  "飼育": {
    "kana": "しいく",
    "definition": "Breeding"
  },
  "飼料": {
    "kana": "しりょう",
    "definition": "feed"
  },
  "歯科": {
    "kana": "しか",
    "definition": "dentistry"
  },
  "乳歯": {
    "kana": "にゅうし",
    "definition": "deciduous teeth"
  },
  "義歯": {
    "kana": "ぎし",
    "definition": "Denture"
  },
  "事物": {
    "kana": "じぶつ",
    "definition": "things"
  },
  "無事": {
    "kana": "ぶじ",
    "definition": "safe"
  },
  "師事": {
    "kana": "しじ",
    "definition": "apprentice"
  },
  "事務": {
    "kana": "じむ",
    "definition": "clerical work"
  },
  "職務": {
    "kana": "しょくむ",
    "definition": "Duties"
  },
  "義務": {
    "kana": "ぎむ",
    "definition": "obligation"
  },
  "侍従": {
    "kana": "じじゅう",
    "definition": "chamberlain"
  },
  "侍女": {
    "kana": "じじょ",
    "definition": "maid"
  },
  "侍医": {
    "kana": "じい",
    "definition": "court physician"
  },
  "児童": {
    "kana": "じどう",
    "definition": "child"
  },
  "幼児": {
    "kana": "ようじ",
    "definition": "infant"
  },
  "字画": {
    "kana": "じかく",
    "definition": "stroke"
  },
  "活字": {
    "kana": "かつじ",
    "definition": "type"
  },
  "寺院": {
    "kana": "じいん",
    "definition": "temple"
  },
  "社寺": {
    "kana": "しゃじ",
    "definition": "shrines and temples"
  },
  "末寺": {
    "kana": "まつてら",
    "definition": "branch temple"
  },
  "慈愛": {
    "kana": "じあい",
    "definition": "affection"
  },
  "慈善": {
    "kana": "じぜん",
    "definition": "charity"
  },
  "慈悲": {
    "kana": "じひ",
    "definition": "mercy"
  },
  "持参": {
    "kana": "じさん",
    "definition": "bring"
  },
  "持続": {
    "kana": "じぞく",
    "definition": "Persistence"
  },
  "時候": {
    "kana": "じこう",
    "definition": "weather"
  },
  "当時": {
    "kana": "とうじ",
    "definition": "at that time"
  },
  "次元": {
    "kana": "じげん",
    "definition": "dimension"
  },
  "目次": {
    "kana": "もくじ",
    "definition": "table of contents"
  },
  "次第": {
    "kana": "しだい",
    "definition": "depend on"
  },
  "滋味": {
    "kana": "じみ",
    "definition": "Taste"
  },
  "滋養": {
    "kana": "じよう",
    "definition": "Nourishment"
  },
  "磁石": {
    "kana": "じしゃく",
    "definition": "magnet"
  },
  "示談": {
    "kana": "じだん",
    "definition": "settlement"
  },
  "自己": {
    "kana": "じこ",
    "definition": "self"
  },
  "利己": {
    "kana": "りこ",
    "definition": "selfishness"
  },
  "知己": {
    "kana": "ちき",
    "definition": "acquaintance"
  },
  "自由": {
    "kana": "じゆう",
    "definition": "freedom"
  },
  "自然": {
    "kana": "しぜん",
    "definition": "Nature"
  },
  "辞書": {
    "kana": "じしょ",
    "definition": "dictionary"
  },
  "辞職": {
    "kana": "じしょく",
    "definition": "resignation"
  },
  "式辞": {
    "kana": "しきじ",
    "definition": "address"
  },
  "式典": {
    "kana": "しきてん",
    "definition": "ceremony"
  },
  "形式": {
    "kana": "けいしき",
    "definition": "format"
  },
  "数式": {
    "kana": "すうしき",
    "definition": "formula"
  },
  "識別": {
    "kana": "しきべつ",
    "definition": "identification"
  },
  "知識": {
    "kana": "ちしき",
    "definition": "knowledge"
  },
  "車軸": {
    "kana": "しゃじく",
    "definition": "axle"
  },
  "執務": {
    "kana": "しつむ",
    "definition": "work"
  },
  "執筆": {
    "kana": "しっぴつ",
    "definition": "writing"
  },
  "確執": {
    "kana": "かくしつ",
    "definition": "feud"
  },
  "執念": {
    "kana": "しゅうねん",
    "definition": "tenacity"
  },
  "執心": {
    "kana": "しゅうしん",
    "definition": "obsession"
  },
  "我執": {
    "kana": "がしゅう",
    "definition": "self-obsession"
  },
  "失望": {
    "kana": "しつぼう",
    "definition": "disappointment"
  },
  "失敗": {
    "kana": "しっぱい",
    "definition": "Failure"
  },
  "消失": {
    "kana": "しょうしつ",
    "definition": "Disappearance"
  },
  "多湿": {
    "kana": "たしつ",
    "definition": "Humid"
  },
  "漆器": {
    "kana": "しっき",
    "definition": "lacquerware"
  },
  "乾漆": {
    "kana": "いぬいしつ",
    "definition": "dry lacquer"
  },
  "疾走": {
    "kana": "しっそう",
    "definition": "sprint"
  },
  "悪疾": {
    "kana": "あくしつ",
    "definition": "virulent disease"
  },
  "質問": {
    "kana": "しつもん",
    "definition": "question"
  },
  "質実": {
    "kana": "しつじつ",
    "definition": "Simplicity"
  },
  "質屋": {
    "kana": "しちや",
    "definition": "pawn shop"
  },
  "言質": {
    "kana": "げんち",
    "definition": "commitment"
  },
  "実践": {
    "kana": "じっせん",
    "definition": "practice"
  },
  "充実": {
    "kana": "じゅうじつ",
    "definition": "fullness"
  },
  "実に": {
    "kana": "じつに",
    "definition": "indeed"
  },
  "舎監": {
    "kana": "しゃかん",
    "definition": "housemaster"
  },
  "校舎": {
    "kana": "こうしゃ",
    "definition": "school building"
  },
  "写真": {
    "kana": "しゃしん",
    "definition": "photograph"
  },
  "描写": {
    "kana": "びょうしゃ",
    "definition": "description"
  },
  "映写": {
    "kana": "えいしゃ",
    "definition": "projection"
  },
  "射撃": {
    "kana": "しゃげき",
    "definition": "shooting"
  },
  "捨象": {
    "kana": "しゃしょう",
    "definition": "abstraction"
  },
  "取捨": {
    "kana": "しゅしゃ",
    "definition": "discard"
  },
  "喜捨": {
    "kana": "きしゃ",
    "definition": "charity"
  },
  "赦免": {
    "kana": "しゃめん",
    "definition": "pardon"
  },
  "恩赦": {
    "kana": "おんしゃ",
    "definition": "pardon"
  },
  "斜線": {
    "kana": "しゃせん",
    "definition": "diagonal line"
  },
  "煮沸": {
    "kana": "しゃふつ",
    "definition": "Boiling"
  },
  "会社": {
    "kana": "かいしゃ",
    "definition": "company"
  },
  "神社": {
    "kana": "じんじゃ",
    "definition": "shrine"
  },
  "謝絶": {
    "kana": "しゃぜつ",
    "definition": "Refusal"
  },
  "感謝": {
    "kana": "かんしゃ",
    "definition": "Gratitude"
  },
  "陳謝": {
    "kana": "ちんしゃ",
    "definition": "apology"
  },
  "車窓": {
    "kana": "しゃそう",
    "definition": "car window"
  },
  "同窓": {
    "kana": "どうそう",
    "definition": "Alumni"
  },
  "深窓": {
    "kana": "しんそう",
    "definition": "deep window"
  },
  "車輪": {
    "kana": "しゃりん",
    "definition": "Wheel"
  },
  "車庫": {
    "kana": "しゃこ",
    "definition": "garage"
  },
  "電車": {
    "kana": "でんしゃ",
    "definition": "train"
  },
  "遮断": {
    "kana": "しゃだん",
    "definition": "cut off"
  },
  "蛇腹": {
    "kana": "じゃばら",
    "definition": "bellows"
  },
  "蛇足": {
    "kana": "だそく",
    "definition": "superfluous"
  },
  "長蛇": {
    "kana": "ちょうだ",
    "definition": "long snake"
  },
  "邪悪": {
    "kana": "じゃあく",
    "definition": "evil"
  },
  "邪推": {
    "kana": "じゃすい",
    "definition": "unreasonable"
  },
  "正邪": {
    "kana": "せいじゃ",
    "definition": "right and wrong"
  },
  "借用": {
    "kana": "しゃくよう",
    "definition": "Borrowing"
  },
  "借金": {
    "kana": "しゃっきん",
    "definition": "debt"
  },
  "貸借": {
    "kana": "たいしゃく",
    "definition": "loan"
  },
  "爵位": {
    "kana": "しゃくい",
    "definition": "rank"
  },
  "酌量": {
    "kana": "しゃくりょう",
    "definition": "extenuating"
  },
  "晩酌": {
    "kana": "ばんしゃく",
    "definition": "evening drink"
  },
  "釈放": {
    "kana": "しゃくほう",
    "definition": "release"
  },
  "解釈": {
    "kana": "かいしゃく",
    "definition": "interpretation"
  },
  "自若": {
    "kana": "じじゃく",
    "definition": "young"
  },
  "老若": {
    "kana": "ろうにゃく",
    "definition": "old and young"
  },
  "寂滅": {
    "kana": "じゃくめつ",
    "definition": "annihilation"
  },
  "静寂": {
    "kana": "せいじゃく",
    "definition": "silence"
  },
  "閑寂": {
    "kana": "かんじゃく",
    "definition": "Silence"
  },
  "寂然": {
    "kana": "じゃくぜん",
    "definition": "deserted"
  },
  "弱点": {
    "kana": "じゃくてん",
    "definition": "weakness"
  },
  "弱小": {
    "kana": "じゃくしょう",
    "definition": "small and weak"
  },
  "主権": {
    "kana": "しゅけん",
    "definition": "sovereignty"
  },
  "坊主": {
    "kana": "ぼうず",
    "definition": "shaved"
  },
  "取材": {
    "kana": "しゅざい",
    "definition": "coverage"
  },
  "聴取": {
    "kana": "ちょうしゅ",
    "definition": "listening"
  },
  "守備": {
    "kana": "しゅび",
    "definition": "defense"
  },
  "保守": {
    "kana": "ほしゅ",
    "definition": "Maintenance"
  },
  "留守": {
    "kana": "るす",
    "definition": "absent"
  },
  "手腕": {
    "kana": "しゅわん",
    "definition": "skill"
  },
  "選手": {
    "kana": "せんしゅ",
    "definition": "player"
  },
  "朱肉": {
    "kana": "しゅにく",
    "definition": "red ink"
  },
  "朱筆": {
    "kana": "しゅひつ",
    "definition": "Red brush"
  },
  "殊勝": {
    "kana": "しゅしょう",
    "definition": "Praise"
  },
  "特殊": {
    "kana": "とくしゅ",
    "definition": "Special"
  },
  "狩猟": {
    "kana": "しゅりょう",
    "definition": "hunting"
  },
  "珠玉": {
    "kana": "しゅぎょく",
    "definition": "gem"
  },
  "珠算": {
    "kana": "しゅざん",
    "definition": "Arithmetic"
  },
  "真珠": {
    "kana": "しんじゅ",
    "definition": "pearl"
  },
  "種痘": {
    "kana": "しゅとう",
    "definition": "vaccination"
  },
  "種苗": {
    "kana": "たねなえ",
    "definition": "seeds and seedlings"
  },
  "痘苗": {
    "kana": "とうなえ",
    "definition": "vaccine"
  },
  "種類": {
    "kana": "しゅるい",
    "definition": "kinds"
  },
  "品種": {
    "kana": "ひんしゅ",
    "definition": "Breed"
  },
  "趣味": {
    "kana": "しゅみ",
    "definition": "hobby"
  },
  "飲酒": {
    "kana": "いんしゅ",
    "definition": "Drinking"
  },
  "洋酒": {
    "kana": "ようしゅ",
    "definition": "western liquor"
  },
  "首尾": {
    "kana": "しゅび",
    "definition": "success"
  },
  "首席": {
    "kana": "しゅせき",
    "definition": "Chief"
  },
  "自首": {
    "kana": "じしゅ",
    "definition": "surrender"
  },
  "儒学": {
    "kana": "じゅがく",
    "definition": "Confucianism"
  },
  "儒教": {
    "kana": "じゅきょう",
    "definition": "Confucianism"
  },
  "儒者": {
    "kana": "じゅしゃ",
    "definition": "Confucianism"
  },
  "受諾": {
    "kana": "じゅだく",
    "definition": "acceptance"
  },
  "受験": {
    "kana": "じゅけん",
    "definition": "exam"
  },
  "寿命": {
    "kana": "じゅみょう",
    "definition": "lifespan"
  },
  "長寿": {
    "kana": "ちょうじゅ",
    "definition": "longevity"
  },
  "米寿": {
    "kana": "べいじゅ",
    "definition": "Beiju"
  },
  "授与": {
    "kana": "じゅよ",
    "definition": "conferment"
  },
  "伝授": {
    "kana": "でんじゅ",
    "definition": "instruction"
  },
  "教授": {
    "kana": "きょうじゅ",
    "definition": "Professor"
  },
  "樹木": {
    "kana": "じゅもく",
    "definition": "trees"
  },
  "樹立": {
    "kana": "じゅりつ",
    "definition": "establishment"
  },
  "樹齢": {
    "kana": "じゅれい",
    "definition": "tree age"
  },
  "妙齢": {
    "kana": "みょうれい",
    "definition": "age"
  },
  "需要": {
    "kana": "じゅよう",
    "definition": "demand"
  },
  "需給": {
    "kana": "じゅきゅう",
    "definition": "supply and demand"
  },
  "収穫": {
    "kana": "しゅうかく",
    "definition": "harvest"
  },
  "収入": {
    "kana": "しゅうにゅう",
    "definition": "income"
  },
  "回収": {
    "kana": "かいしゅう",
    "definition": "collect"
  },
  "収賄": {
    "kana": "しゅうわい",
    "definition": "bribery"
  },
  "贈賄": {
    "kana": "ぞうわい",
    "definition": "bribery"
  },
  "周知": {
    "kana": "しゅうち",
    "definition": "well-known"
  },
  "周囲": {
    "kana": "しゅうい",
    "definition": "surroundings"
  },
  "円周": {
    "kana": "えんしゅう",
    "definition": "circumference"
  },
  "宗派": {
    "kana": "しゅうは",
    "definition": "denomination"
  },
  "改宗": {
    "kana": "かいしゅう",
    "definition": "conversion"
  },
  "宗家": {
    "kana": "そうけ",
    "definition": "head family"
  },
  "宗匠": {
    "kana": "しゅうたくみ",
    "definition": "master"
  },
  "就任": {
    "kana": "しゅうにん",
    "definition": "Inauguration"
  },
  "就寝": {
    "kana": "しゅうしん",
    "definition": "Going to bed"
  },
  "成就": {
    "kana": "じょうじゅ",
    "definition": "Accomplishment"
  },
  "修飾": {
    "kana": "しゅうしょく",
    "definition": "modification"
  },
  "修養": {
    "kana": "しゅうよう",
    "definition": "training"
  },
  "改修": {
    "kana": "かいしゅう",
    "definition": "Refurbishment"
  },
  "修繕": {
    "kana": "しゅうぜん",
    "definition": "repair"
  },
  "営繕": {
    "kana": "えいぜん",
    "definition": "Repair"
  },
  "愁傷": {
    "kana": "しゅうしょう",
    "definition": "sorrow"
  },
  "憂愁": {
    "kana": "ゆうしゅう",
    "definition": "melancholy"
  },
  "拾得": {
    "kana": "しゅうとく",
    "definition": "pick up"
  },
  "収拾": {
    "kana": "しゅうしゅう",
    "definition": "take control"
  },
  "秀逸": {
    "kana": "しゅういつ",
    "definition": "Excellence"
  },
  "優秀": {
    "kana": "ゆうしゅう",
    "definition": "excellence"
  },
  "秀峰": {
    "kana": "しゅうみね",
    "definition": "Shuho"
  },
  "霊峰": {
    "kana": "れいみね",
    "definition": "sacred mountain"
  },
  "連峰": {
    "kana": "れんぽう",
    "definition": "mountain range"
  },
  "秋季": {
    "kana": "しゅうき",
    "definition": "Autumn"
  },
  "晩秋": {
    "kana": "ばんしゅう",
    "definition": "late autumn"
  },
  "終了": {
    "kana": "しゅうりょう",
    "definition": "end"
  },
  "最終": {
    "kana": "さいしゅう",
    "definition": "Final"
  },
  "習得": {
    "kana": "しゅうとく",
    "definition": "learning"
  },
  "練習": {
    "kana": "れんしゅう",
    "definition": "training"
  },
  "習癖": {
    "kana": "しゅうへき",
    "definition": "Habit"
  },
  "病癖": {
    "kana": "びょうくせ",
    "definition": "sickness"
  },
  "潔癖": {
    "kana": "けっぺき",
    "definition": "cleanliness"
  },
  "悪臭": {
    "kana": "あくしゅう",
    "definition": "stink"
  },
  "俗臭": {
    "kana": "ぞくしゅう",
    "definition": "Vulgar"
  },
  "舟運": {
    "kana": "ふねうん",
    "definition": "boat transportation"
  },
  "舟航": {
    "kana": "ふねこう",
    "definition": "sailing"
  },
  "衆寡": {
    "kana": "しゅうか",
    "definition": "crowd"
  },
  "民衆": {
    "kana": "みんしゅう",
    "definition": "people"
  },
  "聴衆": {
    "kana": "ちょうしゅう",
    "definition": "audience"
  },
  "襲撃": {
    "kana": "しゅうげき",
    "definition": "raid"
  },
  "世襲": {
    "kana": "せしゅう",
    "definition": "Hereditary"
  },
  "週末": {
    "kana": "しゅうまつ",
    "definition": "weekend"
  },
  "毎週": {
    "kana": "まいしゅう",
    "definition": "every week"
  },
  "集合": {
    "kana": "しゅうごう",
    "definition": "set"
  },
  "集結": {
    "kana": "しゅうけつ",
    "definition": "rally"
  },
  "全集": {
    "kana": "ぜんしゅう",
    "definition": "complete works"
  },
  "醜態": {
    "kana": "しゅうたい",
    "definition": "abomination"
  },
  "美醜": {
    "kana": "びしゅう",
    "definition": "beauty and ugliness"
  },
  "住所": {
    "kana": "じゅうしょ",
    "definition": "address"
  },
  "安住": {
    "kana": "あんじゅう",
    "definition": "peaceful residence"
  },
  "充電": {
    "kana": "じゅうでん",
    "definition": "charging"
  },
  "補充": {
    "kana": "ほじゅう",
    "definition": "replenishment"
  },
  "十回": {
    "kana": "じゅうかい",
    "definition": "ten times"
  },
  "従事": {
    "kana": "じゅうじ",
    "definition": "engaged"
  },
  "従順": {
    "kana": "じゅうじゅん",
    "definition": "Obedience"
  },
  "服従": {
    "kana": "ふくじゅう",
    "definition": "Obedience"
  },
  "従容": {
    "kana": "しょうよう",
    "definition": "Obedience"
  },
  "柔軟": {
    "kana": "じゅうなん",
    "definition": "flexible"
  },
  "柔道": {
    "kana": "じゅうどう",
    "definition": "judo"
  },
  "懐柔": {
    "kana": "かいじゅう",
    "definition": "softness"
  },
  "柔和": {
    "kana": "にゅうわ",
    "definition": "meekness"
  },
  "柔弱": {
    "kana": "じゅうじゃく",
    "definition": "Weakness"
  },
  "渋滞": {
    "kana": "じゅうたい",
    "definition": "traffic jam"
  },
  "苦渋": {
    "kana": "くじゅう",
    "definition": "agony"
  },
  "獣類": {
    "kana": "けものるい",
    "definition": "beast"
  },
  "猛獣": {
    "kana": "もうじゅう",
    "definition": "fierce beast"
  },
  "鳥獣": {
    "kana": "ちょうじゅう",
    "definition": "bird and beast"
  },
  "縦横": {
    "kana": "たてよこ",
    "definition": "vertical and horizontal"
  },
  "縦断": {
    "kana": "じゅうだん",
    "definition": "longitudinal section"
  },
  "操縦": {
    "kana": "そうじゅう",
    "definition": "steering"
  },
  "重量": {
    "kana": "じゅうりょう",
    "definition": "weight"
  },
  "二重": {
    "kana": "にじゅう",
    "definition": "double"
  },
  "重畳": {
    "kana": "じゅうじょう",
    "definition": "superimposed"
  },
  "慎重": {
    "kana": "しんちょう",
    "definition": "cautious"
  },
  "銃砲": {
    "kana": "じゅうほう",
    "definition": "gun"
  },
  "銃弾": {
    "kana": "じゅうだん",
    "definition": "bullet"
  },
  "小銃": {
    "kana": "しょうじゅう",
    "definition": "rifle"
  },
  "宿泊": {
    "kana": "しゅくはく",
    "definition": "stay"
  },
  "宿題": {
    "kana": "しゅくだい",
    "definition": "homework"
  },
  "停泊": {
    "kana": "ていはく",
    "definition": "berth"
  },
  "淑女": {
    "kana": "しゅくじょ",
    "definition": "lady"
  },
  "貞淑": {
    "kana": "ていしゅく",
    "definition": "chastity"
  },
  "私淑": {
    "kana": "ししゅく",
    "definition": "Private"
  },
  "祝儀": {
    "kana": "しゅうぎ",
    "definition": "congratulatory gift"
  },
  "祝言": {
    "kana": "しゅうげん",
    "definition": "Congratulations"
  },
  "祝杯": {
    "kana": "しゅくはい",
    "definition": "toast"
  },
  "銀杯": {
    "kana": "ぎんぱい",
    "definition": "silver cup"
  },
  "縮小": {
    "kana": "しゅくしょう",
    "definition": "Shrink"
  },
  "縮図": {
    "kana": "しゅくず",
    "definition": "miniature"
  },
  "短縮": {
    "kana": "たんしゅく",
    "definition": "shortening"
  },
  "粛清": {
    "kana": "しゅくせい",
    "definition": "purge"
  },
  "静粛": {
    "kana": "せいしゅく",
    "definition": "silence"
  },
  "自粛": {
    "kana": "じしゅく",
    "definition": "self-restraint"
  },
  "私塾": {
    "kana": "しじゅく",
    "definition": "private school"
  },
  "熟練": {
    "kana": "じゅくれん",
    "definition": "proficiency"
  },
  "熟慮": {
    "kana": "じゅくりょ",
    "definition": "contemplation"
  },
  "成熟": {
    "kana": "せいじゅく",
    "definition": "mature"
  },
  "入荷": {
    "kana": "にゅうか",
    "definition": "Arrival"
  },
  "術策": {
    "kana": "じゅっさく",
    "definition": "trick"
  },
  "俊敏": {
    "kana": "しゅんびん",
    "definition": "agility"
  },
  "俊秀": {
    "kana": "としひで",
    "definition": "talent"
  },
  "俊才": {
    "kana": "しゅんさい",
    "definition": "genius"
  },
  "春季": {
    "kana": "しゅんき",
    "definition": "Spring"
  },
  "立春": {
    "kana": "りっしゅん",
    "definition": "Risshun"
  },
  "青春": {
    "kana": "せいしゅん",
    "definition": "youth"
  },
  "瞬間": {
    "kana": "しゅんかん",
    "definition": "moment"
  },
  "瞬時": {
    "kana": "しゅんじ",
    "definition": "instant"
  },
  "准将": {
    "kana": "じゅんしょう",
    "definition": "brigadier general"
  },
  "批准": {
    "kana": "ひじゅん",
    "definition": "ratification"
  },
  "因循": {
    "kana": "いんじゅん",
    "definition": "causation"
  },
  "旬刊": {
    "kana": "じゅんかん",
    "definition": "seasonally"
  },
  "殉死": {
    "kana": "じゅんし",
    "definition": "martyrdom"
  },
  "殉職": {
    "kana": "じゅんしょく",
    "definition": "martyrdom"
  },
  "殉難": {
    "kana": "じゅんなん",
    "definition": "martyrdom"
  },
  "準備": {
    "kana": "じゅんび",
    "definition": "Preparation"
  },
  "標準": {
    "kana": "ひょうじゅん",
    "definition": "standard"
  },
  "潤色": {
    "kana": "じゅんしょく",
    "definition": "embellishment"
  },
  "湿潤": {
    "kana": "しつじゅん",
    "definition": "wet"
  },
  "純真": {
    "kana": "じゅんしん",
    "definition": "innocence"
  },
  "純粋": {
    "kana": "じゅんすい",
    "definition": "pure"
  },
  "不純": {
    "kana": "ふじゅん",
    "definition": "impurity"
  },
  "純朴": {
    "kana": "じゅんぼく",
    "definition": "naive"
  },
  "素朴": {
    "kana": "そぼく",
    "definition": "Rustic"
  },
  "巡回": {
    "kana": "じゅんかい",
    "definition": "Patrol"
  },
  "巡業": {
    "kana": "じゅんぎょう",
    "definition": "tour"
  },
  "遵守": {
    "kana": "じゅんしゅ",
    "definition": "Compliance"
  },
  "順序": {
    "kana": "じゅんじょ",
    "definition": "order"
  },
  "順調": {
    "kana": "じゅんちょう",
    "definition": "going well"
  },
  "処罰": {
    "kana": "しょばつ",
    "definition": "punishment"
  },
  "処女": {
    "kana": "しょじょ",
    "definition": "virgin"
  },
  "初期": {
    "kana": "しょき",
    "definition": "initial"
  },
  "最初": {
    "kana": "さいしょ",
    "definition": "first time"
  },
  "所得": {
    "kana": "しょとく",
    "definition": "income"
  },
  "残暑": {
    "kana": "ざんしょ",
    "definition": "lingering summer heat"
  },
  "避暑": {
    "kana": "ひしょ",
    "definition": "summer vacation"
  },
  "庶民": {
    "kana": "しょみん",
    "definition": "common people"
  },
  "庶務": {
    "kana": "しょむ",
    "definition": "general affairs"
  },
  "緒戦": {
    "kana": "しょせん",
    "definition": "opening battle"
  },
  "由緒": {
    "kana": "ゆいしょ",
    "definition": "honorable history"
  },
  "端緒": {
    "kana": "たんしょ",
    "definition": "beginning"
  },
  "情緒": {
    "kana": "じょうしょ",
    "definition": "emotion"
  },
  "署長": {
    "kana": "しょちょう",
    "definition": "chief"
  },
  "書画": {
    "kana": "しょが",
    "definition": "calligraphy"
  },
  "書籍": {
    "kana": "しょせき",
    "definition": "books"
  },
  "読書": {
    "kana": "どくしょ",
    "definition": "reading"
  },
  "諸国": {
    "kana": "しょこく",
    "definition": "countries"
  },
  "諸般": {
    "kana": "しょはん",
    "definition": "Various"
  },
  "諸侯": {
    "kana": "しょこう",
    "definition": "feudal lords"
  },
  "王侯": {
    "kana": "おうこう",
    "definition": "prince"
  },
  "先般": {
    "kana": "せんぱん",
    "definition": "the other day"
  },
  "叙述": {
    "kana": "じょじゅつ",
    "definition": "description"
  },
  "叙景": {
    "kana": "じょけい",
    "definition": "narrative"
  },
  "叙勲": {
    "kana": "じょくん",
    "definition": "conferment of honor"
  },
  "陳述": {
    "kana": "ちんじゅつ",
    "definition": "statement"
  },
  "著述": {
    "kana": "ちょじゅつ",
    "definition": "Writing"
  },
  "女流": {
    "kana": "じょりゅう",
    "definition": "female style"
  },
  "少女": {
    "kana": "しょうじょ",
    "definition": "girl"
  },
  "天女": {
    "kana": "てんにょ",
    "definition": "celestial maiden"
  },
  "女房": {
    "kana": "にょうぼう",
    "definition": "wife"
  },
  "女婿": {
    "kana": "おんなむこ",
    "definition": "son-in-law"
  },
  "序幕": {
    "kana": "じょまく",
    "definition": "prologue"
  },
  "秩序": {
    "kana": "ちつじょ",
    "definition": "order"
  },
  "除数": {
    "kana": "じょすう",
    "definition": "divisor"
  },
  "解除": {
    "kana": "かいじょ",
    "definition": "lift"
  },
  "掃除": {
    "kana": "そうじ",
    "definition": "cleaning"
  },
  "傷害": {
    "kana": "しょうがい",
    "definition": "injury"
  },
  "負傷": {
    "kana": "ふしょう",
    "definition": "injury"
  },
  "感傷": {
    "kana": "かんしょう",
    "definition": "sentiment"
  },
  "償金": {
    "kana": "しょうきん",
    "definition": "compensation"
  },
  "弁償": {
    "kana": "べんしょう",
    "definition": "Compensation"
  },
  "代償": {
    "kana": "だいしょう",
    "definition": "Compensation"
  },
  "勝敗": {
    "kana": "しょうはい",
    "definition": "victory or defeat"
  },
  "優勝": {
    "kana": "ゆうしょう",
    "definition": "win"
  },
  "商売": {
    "kana": "しょうばい",
    "definition": "business"
  },
  "商業": {
    "kana": "しょうぎょう",
    "definition": "commercial"
  },
  "合唱": {
    "kana": "がっしょう",
    "definition": "Chorus"
  },
  "提唱": {
    "kana": "ていしょう",
    "definition": "Advocating"
  },
  "奨励": {
    "kana": "しょうれい",
    "definition": "Encouragement"
  },
  "推奨": {
    "kana": "すいしょう",
    "definition": "Recommendation"
  },
  "将来": {
    "kana": "しょうらい",
    "definition": "future"
  },
  "小心": {
    "kana": "しょうしん",
    "definition": "timid"
  },
  "多少": {
    "kana": "たしょう",
    "definition": "somewhat"
  },
  "尚早": {
    "kana": "しょうそう",
    "definition": "premature"
  },
  "高尚": {
    "kana": "こうしょう",
    "definition": "lofty"
  },
  "承知": {
    "kana": "しょうち",
    "definition": "know"
  },
  "承諾": {
    "kana": "しょうだく",
    "definition": "Consent"
  },
  "抄録": {
    "kana": "しょうろく",
    "definition": "abstract"
  },
  "抄訳": {
    "kana": "しょうやく",
    "definition": "abridged translation"
  },
  "招待": {
    "kana": "しょうたい",
    "definition": "invitation"
  },
  "招致": {
    "kana": "しょうち",
    "definition": "Invitation"
  },
  "招請": {
    "kana": "しょうせい",
    "definition": "invitation"
  },
  "掌中": {
    "kana": "しょうちゅう",
    "definition": "in hand"
  },
  "職掌": {
    "kana": "しょくしょう",
    "definition": "duties"
  },
  "車掌": {
    "kana": "しゃしょう",
    "definition": "conductor"
  },
  "昇降": {
    "kana": "しょうこう",
    "definition": "Lifting"
  },
  "昇進": {
    "kana": "しょうしん",
    "definition": "promotion"
  },
  "昭和": {
    "kana": "しょうわ",
    "definition": "Showa"
  },
  "昭示": {
    "kana": "しょうじ",
    "definition": "showing"
  },
  "沼沢": {
    "kana": "ぬまさわ",
    "definition": "Swamp"
  },
  "消滅": {
    "kana": "しょうめつ",
    "definition": "annihilation"
  },
  "費消": {
    "kana": "ひしょう",
    "definition": "consumption"
  },
  "消耗": {
    "kana": "しょうもう",
    "definition": "exhaustion"
  },
  "交渉": {
    "kana": "こうしょう",
    "definition": "negotiation"
  },
  "焼却": {
    "kana": "しょうきゃく",
    "definition": "incineration"
  },
  "燃焼": {
    "kana": "ねんしょう",
    "definition": "combustion"
  },
  "全焼": {
    "kana": "ぜんしょう",
    "definition": "burnt down"
  },
  "焦土": {
    "kana": "しょうど",
    "definition": "scorched earth"
  },
  "焦慮": {
    "kana": "しょうりょ",
    "definition": "anxiety"
  },
  "焦心": {
    "kana": "しょうしん",
    "definition": "focus"
  },
  "照会": {
    "kana": "しょうかい",
    "definition": "inquiry"
  },
  "症状": {
    "kana": "しょうじょう",
    "definition": "symptoms"
  },
  "炎症": {
    "kana": "えんしょう",
    "definition": "inflammation"
  },
  "重症": {
    "kana": "じゅうしょう",
    "definition": "serious"
  },
  "硝石": {
    "kana": "しょういし",
    "definition": "saltpeter"
  },
  "硝酸": {
    "kana": "しょうさん",
    "definition": "nitric acid"
  },
  "笑覧": {
    "kana": "しょうらん",
    "definition": "laughter"
  },
  "微笑": {
    "kana": "びしょう",
    "definition": "smile"
  },
  "談笑": {
    "kana": "だんしょう",
    "definition": "chatting"
  },
  "肖像": {
    "kana": "しょうぞう",
    "definition": "portrait"
  },
  "現像": {
    "kana": "げんぞう",
    "definition": "developing"
  },
  "想像": {
    "kana": "そうぞう",
    "definition": "imagination"
  },
  "不肖": {
    "kana": "ふしょう",
    "definition": "unworthy"
  },
  "衝突": {
    "kana": "しょうとつ",
    "definition": "collision"
  },
  "衝動": {
    "kana": "しょうどう",
    "definition": "impulse"
  },
  "折衝": {
    "kana": "せっしょう",
    "definition": "negotiation"
  },
  "詔勅": {
    "kana": "しょうちょく",
    "definition": "edict"
  },
  "詔書": {
    "kana": "しょうしょ",
    "definition": "edict"
  },
  "詳報": {
    "kana": "しょうほう",
    "definition": "detailed report"
  },
  "未詳": {
    "kana": "ひつじしょう",
    "definition": "unknown"
  },
  "象徴": {
    "kana": "しょうちょう",
    "definition": "symbol"
  },
  "対象": {
    "kana": "たいしょう",
    "definition": "subject"
  },
  "象眼": {
    "kana": "ぞうがん",
    "definition": "inlay"
  },
  "巨象": {
    "kana": "きょぞう",
    "definition": "giant elephant"
  },
  "賞罰": {
    "kana": "しょうばつ",
    "definition": "reward and punishment"
  },
  "賞与": {
    "kana": "しょうよ",
    "definition": "bonus"
  },
  "障害": {
    "kana": "しょうがい",
    "definition": "hindrance"
  },
  "故障": {
    "kana": "こしょう",
    "definition": "malfunction"
  },
  "正弦": {
    "kana": "せいげん",
    "definition": "sine"
  },
  "病棟": {
    "kana": "びょうとう",
    "definition": "ward"
  },
  "丈六": {
    "kana": "たけろく",
    "definition": "joroku"
  },
  "旅券": {
    "kana": "りょけん",
    "definition": "passport"
  },
  "債券": {
    "kana": "さいけん",
    "definition": "bond"
  },
  "乗数": {
    "kana": "じょうすう",
    "definition": "multiplier"
  },
  "乗車": {
    "kana": "じょうしゃ",
    "definition": "ride"
  },
  "冗談": {
    "kana": "じょうだん",
    "definition": "joke"
  },
  "冗長": {
    "kana": "じょうちょう",
    "definition": "redundant"
  },
  "冗費": {
    "kana": "じょうひ",
    "definition": "Redundant expense"
  },
  "剰余": {
    "kana": "じょうよ",
    "definition": "remainder"
  },
  "過剰": {
    "kana": "かじょう",
    "definition": "excess"
  },
  "余剰": {
    "kana": "よじょう",
    "definition": "surplus"
  },
  "城郭": {
    "kana": "じょうかく",
    "definition": "castle"
  },
  "輪郭": {
    "kana": "りんかく",
    "definition": "outline"
  },
  "落城": {
    "kana": "らくじょう",
    "definition": "falling castle"
  },
  "会場": {
    "kana": "かいじょう",
    "definition": "venue"
  },
  "入場": {
    "kana": "にゅうじょう",
    "definition": "admission"
  },
  "常備": {
    "kana": "じょうび",
    "definition": "Always ready"
  },
  "非常": {
    "kana": "ひじょう",
    "definition": "very"
  },
  "情報": {
    "kana": "じょうほう",
    "definition": "information"
  },
  "情熱": {
    "kana": "じょうねつ",
    "definition": "passion"
  },
  "条理": {
    "kana": "じょうり",
    "definition": "reason"
  },
  "条約": {
    "kana": "じょうやく",
    "definition": "Treaty"
  },
  "浄化": {
    "kana": "じょうか",
    "definition": "purification"
  },
  "清浄": {
    "kana": "せいじょう",
    "definition": "Purity"
  },
  "不浄": {
    "kana": "ふじょう",
    "definition": "impure"
  },
  "状況": {
    "kana": "じょうきょう",
    "definition": "situation"
  },
  "実況": {
    "kana": "じっきょう",
    "definition": "commentary"
  },
  "概況": {
    "kana": "がいきょう",
    "definition": "Overview"
  },
  "状態": {
    "kana": "じょうたい",
    "definition": "situation"
  },
  "白状": {
    "kana": "はくじょう",
    "definition": "confession"
  },
  "免状": {
    "kana": "めんじょう",
    "definition": "Diploma"
  },
  "畳語": {
    "kana": "たたみご",
    "definition": "collocation"
  },
  "譲渡": {
    "kana": "じょうと",
    "definition": "assignment"
  },
  "譲歩": {
    "kana": "じょうほ",
    "definition": "concession"
  },
  "醸造": {
    "kana": "じょうぞう",
    "definition": "brewing"
  },
  "醸成": {
    "kana": "じょうせい",
    "definition": "Foster"
  },
  "錠前": {
    "kana": "じょうまえ",
    "definition": "lock"
  },
  "錠剤": {
    "kana": "じょうざい",
    "definition": "tablet"
  },
  "手錠": {
    "kana": "てじょう",
    "definition": "handcuffs"
  },
  "嘱託": {
    "kana": "しょくたく",
    "definition": "contract"
  },
  "委嘱": {
    "kana": "いしょく",
    "definition": "Commissioned"
  },
  "植樹": {
    "kana": "しょくじゅ",
    "definition": "tree planting"
  },
  "植物": {
    "kana": "しょくぶつ",
    "definition": "plant"
  },
  "誤植": {
    "kana": "ごしょく",
    "definition": "typo"
  },
  "織機": {
    "kana": "しょっき",
    "definition": "loom"
  },
  "染織": {
    "kana": "せんしょく",
    "definition": "dyeing and weaving"
  },
  "紡織": {
    "kana": "ぼうしょく",
    "definition": "spinning and weaving"
  },
  "組織": {
    "kana": "そしき",
    "definition": "organization"
  },
  "就職": {
    "kana": "しゅうしょく",
    "definition": "find work"
  },
  "触媒": {
    "kana": "しょくばい",
    "definition": "catalyst"
  },
  "接触": {
    "kana": "せっしょく",
    "definition": "contact"
  },
  "食事": {
    "kana": "しょくじ",
    "definition": "meal"
  },
  "食料": {
    "kana": "しょくりょう",
    "definition": "food"
  },
  "会食": {
    "kana": "かいしょく",
    "definition": "dinner"
  },
  "断食": {
    "kana": "だんじき",
    "definition": "fasting"
  },
  "尻尾": {
    "kana": "しっぽ",
    "definition": "tail"
  },
  "伸縮": {
    "kana": "しんしゅく",
    "definition": "expansion and contraction"
  },
  "追伸": {
    "kana": "ついしん",
    "definition": "postscript"
  },
  "信用": {
    "kana": "しんよう",
    "definition": "credit"
  },
  "通信": {
    "kana": "つうしん",
    "definition": "communication"
  },
  "侵入": {
    "kana": "しんにゅう",
    "definition": "intrusion"
  },
  "侵害": {
    "kana": "しんがい",
    "definition": "infringement"
  },
  "寝室": {
    "kana": "しんしつ",
    "definition": "Bedroom"
  },
  "寝具": {
    "kana": "しんぐ",
    "definition": "bedding"
  },
  "審判": {
    "kana": "しんぱん",
    "definition": "referee"
  },
  "審議": {
    "kana": "しんぎ",
    "definition": "deliberation"
  },
  "不審": {
    "kana": "ふしん",
    "definition": "distrust"
  },
  "心身": {
    "kana": "しんしん",
    "definition": "mind and body"
  },
  "中心": {
    "kana": "ちゅうしん",
    "definition": "center"
  },
  "振動": {
    "kana": "しんどう",
    "definition": "vibration"
  },
  "不振": {
    "kana": "ふしん",
    "definition": "slump"
  },
  "新聞": {
    "kana": "しんぶん",
    "definition": "newspaper"
  },
  "見聞": {
    "kana": "けんぶん",
    "definition": "experience"
  },
  "聴聞": {
    "kana": "ちょうもん",
    "definition": "hearing"
  },
  "新郎": {
    "kana": "しんろう",
    "definition": "groom"
  },
  "森林": {
    "kana": "しんりん",
    "definition": "forest"
  },
  "森閑": {
    "kana": "しんかん",
    "definition": "silence"
  },
  "森厳": {
    "kana": "もりげん",
    "definition": "solemn"
  },
  "浸透": {
    "kana": "しんとう",
    "definition": "Penetration"
  },
  "深山": {
    "kana": "みやま",
    "definition": "deep mountain"
  },
  "深夜": {
    "kana": "しんや",
    "definition": "midnight"
  },
  "申告": {
    "kana": "しんこく",
    "definition": "report"
  },
  "申請": {
    "kana": "しんせい",
    "definition": "Application"
  },
  "神聖": {
    "kana": "しんせい",
    "definition": "sacred"
  },
  "神経": {
    "kana": "しんけい",
    "definition": "nerve"
  },
  "精神": {
    "kana": "せいしん",
    "definition": "spirit"
  },
  "臣下": {
    "kana": "しんか",
    "definition": "vassal"
  },
  "君臣": {
    "kana": "くんしん",
    "definition": "ruler and retainer"
  },
  "薪炭": {
    "kana": "しんたん",
    "definition": "firewood and charcoal"
  },
  "親族": {
    "kana": "しんぞく",
    "definition": "relatives"
  },
  "親友": {
    "kana": "しんゆう",
    "definition": "Close friend"
  },
  "肉親": {
    "kana": "にくしん",
    "definition": "immediate family"
  },
  "診察": {
    "kana": "しんさつ",
    "definition": "consultation"
  },
  "診療": {
    "kana": "しんりょう",
    "definition": "medical treatment"
  },
  "往診": {
    "kana": "おうしん",
    "definition": "house call"
  },
  "身体": {
    "kana": "しんたい",
    "definition": "body"
  },
  "単身": {
    "kana": "たんしん",
    "definition": "Single"
  },
  "進級": {
    "kana": "しんきゅう",
    "definition": "promotion"
  },
  "進言": {
    "kana": "しんげん",
    "definition": "advice"
  },
  "前進": {
    "kana": "ぜんしん",
    "definition": "advance"
  },
  "針路": {
    "kana": "しんろ",
    "definition": "course"
  },
  "運針": {
    "kana": "うんしん",
    "definition": "needle movement"
  },
  "秒針": {
    "kana": "びょうしん",
    "definition": "second hand"
  },
  "震動": {
    "kana": "しんどう",
    "definition": "shaking"
  },
  "震災": {
    "kana": "しんさい",
    "definition": "earthquake disaster"
  },
  "仁義": {
    "kana": "じんぎ",
    "definition": "Justice"
  },
  "仁術": {
    "kana": "ひとしじゅつ",
    "definition": "benevolence"
  },
  "仁王": {
    "kana": "におう",
    "definition": "Nio"
  },
  "尋問": {
    "kana": "じんもん",
    "definition": "interrogation"
  },
  "尋常": {
    "kana": "じんじょう",
    "definition": "normal"
  },
  "千尋": {
    "kana": "せんじん",
    "definition": "Chihiro"
  },
  "激甚": {
    "kana": "げきじん",
    "definition": "ferocious"
  },
  "幸甚": {
    "kana": "こうじん",
    "definition": "Koujin"
  },
  "迅速": {
    "kana": "じんそく",
    "definition": "Quick"
  },
  "陣頭": {
    "kana": "じんとう",
    "definition": "spearhead"
  },
  "陣痛": {
    "kana": "じんつう",
    "definition": "labor pains"
  },
  "円陣": {
    "kana": "えんじん",
    "definition": "circle"
  },
  "酢酸": {
    "kana": "さくさん",
    "definition": "acetic acid"
  },
  "図表": {
    "kana": "ずひょう",
    "definition": "Chart"
  },
  "図書": {
    "kana": "としょ",
    "definition": "books"
  },
  "壮図": {
    "kana": "そうと",
    "definition": "grand picture"
  },
  "吹奏": {
    "kana": "すいそう",
    "definition": "brass band"
  },
  "吹鳴": {
    "kana": "すいめい",
    "definition": "blowing sound"
  },
  "鼓吹": {
    "kana": "こすい",
    "definition": "admonition"
  },
  "垂直": {
    "kana": "すいちょく",
    "definition": "vertical"
  },
  "推進": {
    "kana": "すいしん",
    "definition": "Promotion"
  },
  "推薦": {
    "kana": "すいせん",
    "definition": "recommendation"
  },
  "自薦": {
    "kana": "じせん",
    "definition": "self-recommended"
  },
  "陸稲": {
    "kana": "りくとう",
    "definition": "upland rice"
  },
  "浴槽": {
    "kana": "よくそう",
    "definition": "bathtub"
  },
  "点滴": {
    "kana": "てんてき",
    "definition": "Infusion"
  },
  "炊事": {
    "kana": "すいじ",
    "definition": "cooking"
  },
  "自炊": {
    "kana": "じすい",
    "definition": "self catering"
  },
  "睡眠": {
    "kana": "すいみん",
    "definition": "sleep"
  },
  "熟睡": {
    "kana": "じゅくすい",
    "definition": "sound sleep"
  },
  "午睡": {
    "kana": "ごすい",
    "definition": "afternoon nap"
  },
  "精粋": {
    "kana": "せいすい",
    "definition": "the essence"
  },
  "衰弱": {
    "kana": "すいじゃく",
    "definition": "weakness"
  },
  "盛衰": {
    "kana": "せいすい",
    "definition": "ups and downs"
  },
  "老衰": {
    "kana": "ろうすい",
    "definition": "old age"
  },
  "未遂": {
    "kana": "みすい",
    "definition": "attempted"
  },
  "完遂": {
    "kana": "かんすい",
    "definition": "Accomplishment"
  },
  "酔漢": {
    "kana": "すいかん",
    "definition": "drunken man"
  },
  "麻酔": {
    "kana": "ますい",
    "definition": "anesthesia"
  },
  "心酔": {
    "kana": "しんすい",
    "definition": "Infatuation"
  },
  "追随": {
    "kana": "ついずい",
    "definition": "following"
  },
  "崇拝": {
    "kana": "すうはい",
    "definition": "worship"
  },
  "崇高": {
    "kana": "すうこう",
    "definition": "Sublime"
  },
  "数字": {
    "kana": "すうじ",
    "definition": "numbers"
  },
  "数量": {
    "kana": "すうりょう",
    "definition": "quantity"
  },
  "枢軸": {
    "kana": "すうじく",
    "definition": "pivot"
  },
  "枢要": {
    "kana": "すうよう",
    "definition": "pivotal"
  },
  "中枢": {
    "kana": "ちゅうすう",
    "definition": "center"
  },
  "寸暇": {
    "kana": "すんか",
    "definition": "spare time"
  },
  "世紀": {
    "kana": "せいき",
    "definition": "century"
  },
  "時世": {
    "kana": "じせい",
    "definition": "age"
  },
  "処世": {
    "kana": "しょせい",
    "definition": "death"
  },
  "是非": {
    "kana": "ぜひ",
    "definition": "I'd love to"
  },
  "是認": {
    "kana": "ぜにん",
    "definition": "approval"
  },
  "国是": {
    "kana": "こくぜ",
    "definition": "national policy"
  },
  "統制": {
    "kana": "とうせい",
    "definition": "control"
  },
  "優勢": {
    "kana": "ゆうせい",
    "definition": "superiority"
  },
  "情勢": {
    "kana": "じょうせい",
    "definition": "situation"
  },
  "改姓": {
    "kana": "かいせい",
    "definition": "Surname change"
  },
  "同姓": {
    "kana": "どうせい",
    "definition": "same surname"
  },
  "百姓": {
    "kana": "ひゃくしょう",
    "definition": "peasant"
  },
  "征服": {
    "kana": "せいふく",
    "definition": "conquest"
  },
  "遠征": {
    "kana": "えんせい",
    "definition": "expedition"
  },
  "性質": {
    "kana": "せいしつ",
    "definition": "nature"
  },
  "理性": {
    "kana": "りせい",
    "definition": "reason"
  },
  "男性": {
    "kana": "だんせい",
    "definition": "male"
  },
  "相性": {
    "kana": "あいしょう",
    "definition": "Compatibility"
  },
  "根性": {
    "kana": "こんじょう",
    "definition": "guts"
  },
  "成仏": {
    "kana": "じょうぶつ",
    "definition": "enlightenment"
  },
  "政治": {
    "kana": "せいじ",
    "definition": "politics"
  },
  "家政": {
    "kana": "かせい",
    "definition": "housekeeping"
  },
  "摂政": {
    "kana": "せっしょう",
    "definition": "regent"
  },
  "療治": {
    "kana": "りょうじ",
    "definition": "medical treatment"
  },
  "治安": {
    "kana": "ちあん",
    "definition": "security"
  },
  "自治": {
    "kana": "じち",
    "definition": "autonomy"
  },
  "整理": {
    "kana": "せいり",
    "definition": "arrangement"
  },
  "整列": {
    "kana": "せいれつ",
    "definition": "Alignment"
  },
  "調整": {
    "kana": "ちょうせい",
    "definition": "adjustment"
  },
  "流星": {
    "kana": "りゅうせい",
    "definition": "meteor"
  },
  "衛星": {
    "kana": "えいせい",
    "definition": "satellite"
  },
  "晴天": {
    "kana": "せいてん",
    "definition": "fine weather"
  },
  "晴雨": {
    "kana": "せいう",
    "definition": "rain or shine"
  },
  "訂正": {
    "kana": "ていせい",
    "definition": "correction"
  },
  "正直": {
    "kana": "しょうじき",
    "definition": "honest"
  },
  "清算": {
    "kana": "せいさん",
    "definition": "liquidation"
  },
  "清澄": {
    "kana": "きよしすみ",
    "definition": "clarification"
  },
  "利殖": {
    "kana": "りしょく",
    "definition": "profit"
  },
  "学殖": {
    "kana": "がくしょく",
    "definition": "knowledge"
  },
  "隆盛": {
    "kana": "りゅうせい",
    "definition": "prosperity"
  },
  "全盛": {
    "kana": "ぜんせい",
    "definition": "heyday"
  },
  "繁盛": {
    "kana": "はんじょう",
    "definition": "thriving"
  },
  "精米": {
    "kana": "せいまい",
    "definition": "Polished rice"
  },
  "精密": {
    "kana": "せいみつ",
    "definition": "precision"
  },
  "精進": {
    "kana": "しょうじん",
    "definition": "diligence"
  },
  "不精": {
    "kana": "ぶしょう",
    "definition": "Lazy"
  },
  "聖書": {
    "kana": "せいしょ",
    "definition": "Bible"
  },
  "声楽": {
    "kana": "せいがく",
    "definition": "vocal music"
  },
  "製靴": {
    "kana": "せいくつ",
    "definition": "shoemaking"
  },
  "製造": {
    "kana": "せいぞう",
    "definition": "manufacturing"
  },
  "製鉄": {
    "kana": "せいてつ",
    "definition": "iron making"
  },
  "鉄製": {
    "kana": "てっせい",
    "definition": "made of iron"
  },
  "西暦": {
    "kana": "せいれき",
    "definition": "AD"
  },
  "西部": {
    "kana": "せいぶ",
    "definition": "western"
  },
  "北西": {
    "kana": "ほくせい",
    "definition": "northwest"
  },
  "西国": {
    "kana": "にしこく",
    "definition": "Saigoku"
  },
  "東西": {
    "kana": "とうざい",
    "definition": "east and west"
  },
  "誠実": {
    "kana": "せいじつ",
    "definition": "sincerity"
  },
  "至誠": {
    "kana": "しせい",
    "definition": "Sincerity"
  },
  "誓約": {
    "kana": "せいやく",
    "definition": "Pledge"
  },
  "誓詞": {
    "kana": "せいし",
    "definition": "Oath"
  },
  "宣誓": {
    "kana": "せんせい",
    "definition": "oath"
  },
  "請求": {
    "kana": "せいきゅう",
    "definition": "Claim"
  },
  "請願": {
    "kana": "せいがん",
    "definition": "petition"
  },
  "普請": {
    "kana": "ふしん",
    "definition": "Construction"
  },
  "逝去": {
    "kana": "せいきょ",
    "definition": "passed away"
  },
  "急逝": {
    "kana": "きゅうせい",
    "definition": "Sudden death"
  },
  "長逝": {
    "kana": "ちょうせい",
    "definition": "long death"
  },
  "青天": {
    "kana": "せいてん",
    "definition": "blue sky"
  },
  "青銅": {
    "kana": "せいどう",
    "definition": "bronze"
  },
  "緑青": {
    "kana": "みどりあお",
    "definition": "patina"
  },
  "群青": {
    "kana": "ぐんじょう",
    "definition": "ultramarine blue"
  },
  "静穏": {
    "kana": "せいおん",
    "definition": "Serenity"
  },
  "安静": {
    "kana": "あんせい",
    "definition": "rest"
  },
  "静脈": {
    "kana": "じょうみゃく",
    "definition": "vein"
  },
  "斉唱": {
    "kana": "せいしょう",
    "definition": "singing in unison"
  },
  "税金": {
    "kana": "ぜいきん",
    "definition": "tax"
  },
  "免税": {
    "kana": "めんぜい",
    "definition": "duty free"
  },
  "関税": {
    "kana": "かんぜい",
    "definition": "tariff"
  },
  "隻手": {
    "kana": "せきて",
    "definition": "one hand"
  },
  "数隻": {
    "kana": "かずせき",
    "definition": "several ships"
  },
  "惜敗": {
    "kana": "せきはい",
    "definition": "close defeat"
  },
  "痛惜": {
    "kana": "つうせき",
    "definition": "sorrowful"
  },
  "愛惜": {
    "kana": "あいせき",
    "definition": "regret"
  },
  "斥候": {
    "kana": "せっこう",
    "definition": "scout"
  },
  "排斥": {
    "kana": "はいせき",
    "definition": "expulsion"
  },
  "昔時": {
    "kana": "むかしとき",
    "definition": "old times"
  },
  "今昔": {
    "kana": "こんじゃく",
    "definition": "past and present"
  },
  "解析": {
    "kana": "かいせき",
    "definition": "analysis"
  },
  "石材": {
    "kana": "せきざい",
    "definition": "stone material"
  },
  "宝石": {
    "kana": "ほうせき",
    "definition": "jewelry"
  },
  "石高": {
    "kana": "いしたか",
    "definition": "kokudaka"
  },
  "積載": {
    "kana": "せきさい",
    "definition": "loading"
  },
  "記載": {
    "kana": "きさい",
    "definition": "description"
  },
  "積雪": {
    "kana": "せきせつ",
    "definition": "snow cover"
  },
  "蓄積": {
    "kana": "ちくせき",
    "definition": "accumulation"
  },
  "責務": {
    "kana": "せきむ",
    "definition": "Obligation"
  },
  "責任": {
    "kana": "せきにん",
    "definition": "responsibility"
  },
  "職責": {
    "kana": "しょくせき",
    "definition": "responsibility"
  },
  "赤道": {
    "kana": "せきどう",
    "definition": "equator"
  },
  "赤貧": {
    "kana": "せきひん",
    "definition": "poverty"
  },
  "赤銅": {
    "kana": "しゃくどう",
    "definition": "red copper"
  },
  "切断": {
    "kana": "せつだん",
    "definition": "cutting"
  },
  "親切": {
    "kana": "しんせつ",
    "definition": "Kindness"
  },
  "切に": {
    "kana": "せつに",
    "definition": "earnestly"
  },
  "拙劣": {
    "kana": "せつれつ",
    "definition": "poor"
  },
  "拙速": {
    "kana": "せっそく",
    "definition": "hasty"
  },
  "接待": {
    "kana": "せったい",
    "definition": "Reception"
  },
  "直接": {
    "kana": "ちょくせつ",
    "definition": "directly"
  },
  "摂取": {
    "kana": "せっしゅ",
    "definition": "intake"
  },
  "折衷": {
    "kana": "せっちゅう",
    "definition": "eclectic"
  },
  "屈折": {
    "kana": "くっせつ",
    "definition": "refraction"
  },
  "設立": {
    "kana": "せつりつ",
    "definition": "Established"
  },
  "設備": {
    "kana": "せつび",
    "definition": "Facility"
  },
  "建設": {
    "kana": "けんせつ",
    "definition": "construction"
  },
  "窃盗": {
    "kana": "せっとう",
    "definition": "theft"
  },
  "窃取": {
    "kana": "せつしゅ",
    "definition": "theft"
  },
  "節約": {
    "kana": "せつやく",
    "definition": "savings"
  },
  "小説": {
    "kana": "しょうせつ",
    "definition": "novel"
  },
  "演説": {
    "kana": "えんぜつ",
    "definition": "speech"
  },
  "遊説": {
    "kana": "ゆうぜい",
    "definition": "campaign"
  },
  "雪辱": {
    "kana": "せつじょく",
    "definition": "revenge"
  },
  "降雪": {
    "kana": "こうせつ",
    "definition": "snowfall"
  },
  "絶妙": {
    "kana": "ぜつみょう",
    "definition": "Exquisite"
  },
  "絶食": {
    "kana": "ぜっしょく",
    "definition": "fasting"
  },
  "断絶": {
    "kana": "だんぜつ",
    "definition": "break"
  },
  "舌端": {
    "kana": "したはじ",
    "definition": "tip of tongue"
  },
  "弁舌": {
    "kana": "べんぜつ",
    "definition": "speech"
  },
  "筆舌": {
    "kana": "ひつぜつ",
    "definition": "writing"
  },
  "仙骨": {
    "kana": "せんほね",
    "definition": "sacrum"
  },
  "酒仙": {
    "kana": "さけせん",
    "definition": "Shusen"
  },
  "先方": {
    "kana": "せんぽう",
    "definition": "the other party"
  },
  "率先": {
    "kana": "そっせん",
    "definition": "initiative"
  },
  "千円": {
    "kana": "せんえん",
    "definition": [
      1,
      "000 yen"
    ]
  },
  "独占": {
    "kana": "どくせん",
    "definition": "monopoly"
  },
  "宣伝": {
    "kana": "せんでん",
    "definition": "propaganda"
  },
  "専門": {
    "kana": "せんもん",
    "definition": "specialty"
  },
  "専属": {
    "kana": "せんぞく",
    "definition": "Exclusive"
  },
  "専用": {
    "kana": "せんよう",
    "definition": "exclusive"
  },
  "戦争": {
    "kana": "せんそう",
    "definition": "war"
  },
  "苦戦": {
    "kana": "くせん",
    "definition": "struggle"
  },
  "論戦": {
    "kana": "ろんせん",
    "definition": "controversy"
  },
  "温泉": {
    "kana": "おんせん",
    "definition": "hot spring"
  },
  "浅薄": {
    "kana": "せんぱく",
    "definition": "superficial"
  },
  "浅学": {
    "kana": "せんがく",
    "definition": "superficial learning"
  },
  "深浅": {
    "kana": "しんせん",
    "definition": "Depth"
  },
  "洗濯": {
    "kana": "せんたく",
    "definition": "washing"
  },
  "洗練": {
    "kana": "せんれん",
    "definition": "sophistication"
  },
  "洗剤": {
    "kana": "せんざい",
    "definition": "soap"
  },
  "染色": {
    "kana": "せんしょく",
    "definition": "staining"
  },
  "染料": {
    "kana": "せんりょう",
    "definition": "dye"
  },
  "汚染": {
    "kana": "おせん",
    "definition": "pollution"
  },
  "沈潜": {
    "kana": "ちんせん",
    "definition": "immersion"
  },
  "旋回": {
    "kana": "せんかい",
    "definition": "Turning"
  },
  "旋律": {
    "kana": "せんりつ",
    "definition": "melody"
  },
  "周旋": {
    "kana": "しゅうせん",
    "definition": "mediation"
  },
  "線路": {
    "kana": "せんろ",
    "definition": "line"
  },
  "点線": {
    "kana": "てんせん",
    "definition": "dotted line"
  },
  "繊細": {
    "kana": "せんさい",
    "definition": "delicate"
  },
  "化繊": {
    "kana": "かせん",
    "definition": "chemical fiber"
  },
  "船舶": {
    "kana": "せんぱく",
    "definition": "vessel"
  },
  "乗船": {
    "kana": "じょうせん",
    "definition": "Boarding"
  },
  "選択": {
    "kana": "せんたく",
    "definition": "Selection"
  },
  "採択": {
    "kana": "さいたく",
    "definition": "adoption"
  },
  "選挙": {
    "kana": "せんきょ",
    "definition": "selection"
  },
  "当選": {
    "kana": "とうせん",
    "definition": "Election"
  },
  "遷延": {
    "kana": "せんえん",
    "definition": "delay"
  },
  "遷都": {
    "kana": "せんと",
    "definition": "capital transfer"
  },
  "変遷": {
    "kana": "へんせん",
    "definition": "change"
  },
  "銭湯": {
    "kana": "せんとう",
    "definition": "public bath"
  },
  "銑鉄": {
    "kana": "せんてつ",
    "definition": "pig iron"
  },
  "新鮮": {
    "kana": "しんせん",
    "definition": "fresh"
  },
  "以前": {
    "kana": "いぜん",
    "definition": "Before"
  },
  "空前": {
    "kana": "くうぜん",
    "definition": "unprecedented"
  },
  "善悪": {
    "kana": "ぜんあく",
    "definition": "good and evil"
  },
  "善処": {
    "kana": "ぜんしょ",
    "definition": "good deed"
  },
  "漸次": {
    "kana": "ぜんじ",
    "definition": "gradually"
  },
  "東漸": {
    "kana": "ひがしぜん",
    "definition": "eastward"
  },
  "全部": {
    "kana": "ぜんぶ",
    "definition": "all"
  },
  "全国": {
    "kana": "ぜんこく",
    "definition": "Nationwide"
  },
  "禅宗": {
    "kana": "ぜんしゅう",
    "definition": "Zen sect"
  },
  "禅寺": {
    "kana": "ぜんてら",
    "definition": "Zen temple"
  },
  "座禅": {
    "kana": "ざぜん",
    "definition": "Zazen"
  },
  "塑像": {
    "kana": "そぞう",
    "definition": "statue"
  },
  "彫塑": {
    "kana": "ちょうそ",
    "definition": "Sculpture"
  },
  "措置": {
    "kana": "そち",
    "definition": "Measure"
  },
  "措辞": {
    "kana": "そじ",
    "definition": "wording"
  },
  "挙措": {
    "kana": "きょそ",
    "definition": "behavior"
  },
  "狙撃": {
    "kana": "そげき",
    "definition": "sniper"
  },
  "疎密": {
    "kana": "そみつ",
    "definition": "sparse and dense"
  },
  "親疎": {
    "kana": "おやそ",
    "definition": "intimacy"
  },
  "礎石": {
    "kana": "そせき",
    "definition": "cornerstone"
  },
  "定礎": {
    "kana": "ていいしずえ",
    "definition": "Laying the foundation"
  },
  "祖父": {
    "kana": "そふ",
    "definition": "grandfather"
  },
  "祖述": {
    "kana": "そじゅつ",
    "definition": "ancestry"
  },
  "租税": {
    "kana": "そぜい",
    "definition": "tax"
  },
  "粗密": {
    "kana": "そみつ",
    "definition": "sparseness"
  },
  "粗野": {
    "kana": "そや",
    "definition": "crude"
  },
  "精粗": {
    "kana": "せいそ",
    "definition": "fine and rough"
  },
  "素材": {
    "kana": "そざい",
    "definition": "material"
  },
  "平素": {
    "kana": "へいそ",
    "definition": "usually"
  },
  "素顔": {
    "kana": "すがお",
    "definition": "real face"
  },
  "素手": {
    "kana": "すで",
    "definition": "bare hands"
  },
  "素性": {
    "kana": "すじょう",
    "definition": "identity"
  },
  "組成": {
    "kana": "そせい",
    "definition": "composition"
  },
  "改組": {
    "kana": "かいそ",
    "definition": "Reorganization"
  },
  "訴訟": {
    "kana": "そしょう",
    "definition": "lawsuit"
  },
  "告訴": {
    "kana": "こくそ",
    "definition": "complaint"
  },
  "哀訴": {
    "kana": "あいそ",
    "definition": "Complaint"
  },
  "阻止": {
    "kana": "そし",
    "definition": "blocking"
  },
  "阻害": {
    "kana": "そがい",
    "definition": "Inhibition"
  },
  "険阻": {
    "kana": "けんそ",
    "definition": "precipice"
  },
  "僧院": {
    "kana": "そういん",
    "definition": "monastery"
  },
  "高僧": {
    "kana": "こうそう",
    "definition": "high priest"
  },
  "尼僧": {
    "kana": "にそう",
    "definition": "nun"
  },
  "創造": {
    "kana": "そうぞう",
    "definition": "Creation"
  },
  "独創": {
    "kana": "どくそう",
    "definition": "originality"
  },
  "刀創": {
    "kana": "かたなそう",
    "definition": "knife wound"
  },
  "双方": {
    "kana": "そうほう",
    "definition": "both"
  },
  "無双": {
    "kana": "むそう",
    "definition": "Musou"
  },
  "倉庫": {
    "kana": "そうこ",
    "definition": "Warehouse"
  },
  "穀倉": {
    "kana": "こくそう",
    "definition": "granary"
  },
  "庫裏": {
    "kana": "こうら",
    "definition": "Kuri"
  },
  "喪失": {
    "kana": "そうしつ",
    "definition": "loss"
  },
  "壮健": {
    "kana": "そうけん",
    "definition": "Healthy"
  },
  "強壮": {
    "kana": "きょうそう",
    "definition": "Tonic"
  },
  "奏楽": {
    "kana": "そうらく",
    "definition": "musical instrument"
  },
  "合奏": {
    "kana": "がっそう",
    "definition": "ensemble"
  },
  "層雲": {
    "kana": "そううん",
    "definition": "stratus"
  },
  "高層": {
    "kana": "こうそう",
    "definition": "high rise"
  },
  "断層": {
    "kana": "だんそう",
    "definition": "fault"
  },
  "感想": {
    "kana": "かんそう",
    "definition": "thoughts"
  },
  "予想": {
    "kana": "よそう",
    "definition": "Predict"
  },
  "愛想": {
    "kana": "あいそう",
    "definition": "sociability"
  },
  "捜索": {
    "kana": "そうさく",
    "definition": "search"
  },
  "捜査": {
    "kana": "そうさ",
    "definition": "investigation"
  },
  "清掃": {
    "kana": "せいそう",
    "definition": "cleaning"
  },
  "挿入": {
    "kana": "そうにゅう",
    "definition": "insert"
  },
  "挿話": {
    "kana": "そうわ",
    "definition": "episode"
  },
  "節操": {
    "kana": "せっそう",
    "definition": "prudence"
  },
  "早期": {
    "kana": "そうき",
    "definition": "early"
  },
  "早晩": {
    "kana": "そうばん",
    "definition": "early evening"
  },
  "早速": {
    "kana": "さっそく",
    "definition": "right away"
  },
  "早急": {
    "kana": "さっきゅう",
    "definition": "quickly"
  },
  "争議": {
    "kana": "そうぎ",
    "definition": "dispute"
  },
  "紛争": {
    "kana": "ふんそう",
    "definition": "dispute"
  },
  "相当": {
    "kana": "そうとう",
    "definition": "Equivalent"
  },
  "相談": {
    "kana": "そうだん",
    "definition": "consultation"
  },
  "真相": {
    "kana": "しんそう",
    "definition": "truth"
  },
  "首相": {
    "kana": "しゅしょう",
    "definition": "prime minister"
  },
  "総合": {
    "kana": "そうごう",
    "definition": "Comprehensive"
  },
  "総括": {
    "kana": "そうかつ",
    "definition": "Summary"
  },
  "草案": {
    "kana": "そうあん",
    "definition": "draft"
  },
  "雑草": {
    "kana": "ざっそう",
    "definition": "weed"
  },
  "牧草": {
    "kana": "ぼくそう",
    "definition": "Grass"
  },
  "草稿": {
    "kana": "そうこう",
    "definition": "draft"
  },
  "原稿": {
    "kana": "げんこう",
    "definition": "Manuscript"
  },
  "投稿": {
    "kana": "とうこう",
    "definition": "post"
  },
  "荘重": {
    "kana": "そうちょう",
    "definition": "solemnity"
  },
  "別荘": {
    "kana": "べっそう",
    "definition": "Villa"
  },
  "葬儀": {
    "kana": "そうぎ",
    "definition": "funeral"
  },
  "埋葬": {
    "kana": "まいそう",
    "definition": "burial"
  },
  "会葬": {
    "kana": "かいそう",
    "definition": "Funeral"
  },
  "藻類": {
    "kana": "そうるい",
    "definition": "algae"
  },
  "海藻": {
    "kana": "かいそう",
    "definition": "seaweed"
  },
  "詞藻": {
    "kana": "しも",
    "definition": "word algae"
  },
  "装飾": {
    "kana": "そうしょく",
    "definition": "decoration"
  },
  "服飾": {
    "kana": "ふくしょく",
    "definition": "clothing"
  },
  "装置": {
    "kana": "そうち",
    "definition": "Device"
  },
  "服装": {
    "kana": "ふくそう",
    "definition": "clothes"
  },
  "変装": {
    "kana": "へんそう",
    "definition": "disguise"
  },
  "装束": {
    "kana": "しょうぞく",
    "definition": "costume"
  },
  "衣装": {
    "kana": "いしょう",
    "definition": "costume"
  },
  "競走": {
    "kana": "きょうそう",
    "definition": "race"
  },
  "送別": {
    "kana": "そうべつ",
    "definition": "farewell"
  },
  "放送": {
    "kana": "ほうそう",
    "definition": "broadcast"
  },
  "運送": {
    "kana": "うんそう",
    "definition": "Shipping"
  },
  "遭遇": {
    "kana": "そうぐう",
    "definition": "Encounter"
  },
  "遭難": {
    "kana": "そうなん",
    "definition": "Distress"
  },
  "霜害": {
    "kana": "しもがい",
    "definition": "frost damage"
  },
  "晩霜": {
    "kana": "ばんそう",
    "definition": "late frost"
  },
  "騒動": {
    "kana": "そうどう",
    "definition": "uproar"
  },
  "物騒": {
    "kana": "ぶっそう",
    "definition": "dangerous"
  },
  "増加": {
    "kana": "ぞうか",
    "definition": "gain"
  },
  "激増": {
    "kana": "げきぞう",
    "definition": "drastic increase"
  },
  "愛憎": {
    "kana": "あいぞう",
    "definition": "love and hate"
  },
  "臓器": {
    "kana": "ぞうき",
    "definition": "organs"
  },
  "心臓": {
    "kana": "しんぞう",
    "definition": "heart"
  },
  "蔵書": {
    "kana": "ぞうしょ",
    "definition": "collection of books"
  },
  "貯蔵": {
    "kana": "ちょぞう",
    "definition": "storage"
  },
  "土蔵": {
    "kana": "どぞう",
    "definition": "earthen storehouse"
  },
  "贈与": {
    "kana": "ぞうよ",
    "definition": "donation"
  },
  "贈呈": {
    "kana": "ぞうてい",
    "definition": "presentation"
  },
  "贈答": {
    "kana": "ぞうとう",
    "definition": "gift-giving"
  },
  "造船": {
    "kana": "ぞうせん",
    "definition": "shipbuilding"
  },
  "造花": {
    "kana": "ぞうか",
    "definition": "artificial flowers"
  },
  "促進": {
    "kana": "そくしん",
    "definition": "promotion"
  },
  "促成": {
    "kana": "そくせい",
    "definition": "Forcing"
  },
  "催促": {
    "kana": "さいそく",
    "definition": "Prompt"
  },
  "側近": {
    "kana": "そっきん",
    "definition": "entourage"
  },
  "側壁": {
    "kana": "そくへき",
    "definition": "side wall"
  },
  "即応": {
    "kana": "そくおう",
    "definition": "Immediate response"
  },
  "即席": {
    "kana": "そくせき",
    "definition": "instant"
  },
  "即興": {
    "kana": "そっきょう",
    "definition": "Improvisation"
  },
  "束縛": {
    "kana": "そくばく",
    "definition": "bondage"
  },
  "結束": {
    "kana": "けっそく",
    "definition": "unity"
  },
  "約束": {
    "kana": "やくそく",
    "definition": "promise"
  },
  "捕縛": {
    "kana": "ほばく",
    "definition": "capture"
  },
  "測量": {
    "kana": "そくりょう",
    "definition": "surveying"
  },
  "目測": {
    "kana": "もくそく",
    "definition": "eye measurement"
  },
  "推測": {
    "kana": "すいそく",
    "definition": "Guess"
  },
  "足跡": {
    "kana": "そくせき",
    "definition": "footprints"
  },
  "遠足": {
    "kana": "えんそく",
    "definition": "excursion"
  },
  "補足": {
    "kana": "ほそく",
    "definition": "supplement"
  },
  "敏速": {
    "kana": "びんそく",
    "definition": "Prompt"
  },
  "時速": {
    "kana": "じそく",
    "definition": "speed"
  },
  "俗事": {
    "kana": "ぞくじ",
    "definition": "worldly affairs"
  },
  "民俗": {
    "kana": "みんぞく",
    "definition": "folk customs"
  },
  "属性": {
    "kana": "ぞくせい",
    "definition": "attribute"
  },
  "従属": {
    "kana": "じゅうぞく",
    "definition": "Subordination"
  },
  "賊軍": {
    "kana": "ぞくぐん",
    "definition": "rebel army"
  },
  "盗賊": {
    "kana": "とうぞく",
    "definition": "bandit"
  },
  "連続": {
    "kana": "れんぞく",
    "definition": "continue"
  },
  "卒中": {
    "kana": "そっちゅう",
    "definition": "apoplexy"
  },
  "兵卒": {
    "kana": "へいそつ",
    "definition": "soldier"
  },
  "存続": {
    "kana": "そんぞく",
    "definition": "survival"
  },
  "既存": {
    "kana": "きぞん",
    "definition": "existing"
  },
  "保存": {
    "kana": "ほぞん",
    "definition": "keep"
  },
  "損失": {
    "kana": "そんしつ",
    "definition": "loss"
  },
  "欠損": {
    "kana": "けっそん",
    "definition": "defect"
  },
  "破損": {
    "kana": "はそん",
    "definition": "Corruption"
  },
  "村長": {
    "kana": "そんちょう",
    "definition": "village chief"
  },
  "村落": {
    "kana": "そんらく",
    "definition": "Village"
  },
  "農村": {
    "kana": "のうそん",
    "definition": "rural"
  },
  "他国": {
    "kana": "たこく",
    "definition": "other country"
  },
  "自他": {
    "kana": "じた",
    "definition": "oneself and others"
  },
  "多数": {
    "kana": "たすう",
    "definition": "many"
  },
  "雑多": {
    "kana": "ざった",
    "definition": "miscellaneous"
  },
  "太陽": {
    "kana": "たいよう",
    "definition": "Sun"
  },
  "丸太": {
    "kana": "まるた",
    "definition": "log"
  },
  "堕落": {
    "kana": "だらく",
    "definition": "depravity"
  },
  "妥当": {
    "kana": "だとう",
    "definition": "reasonable"
  },
  "妥結": {
    "kana": "だけつ",
    "definition": "conclusion"
  },
  "惰眠": {
    "kana": "だみん",
    "definition": "idleness"
  },
  "怠惰": {
    "kana": "たいだ",
    "definition": "laziness"
  },
  "打破": {
    "kana": "だは",
    "definition": "Defeat"
  },
  "乱打": {
    "kana": "らんだ",
    "definition": "Rumble"
  },
  "無駄": {
    "kana": "むだ",
    "definition": "waste"
  },
  "体格": {
    "kana": "たいかく",
    "definition": "physique"
  },
  "主体": {
    "kana": "しゅたい",
    "definition": "Subject"
  },
  "対立": {
    "kana": "たいりつ",
    "definition": "confrontation"
  },
  "絶対": {
    "kana": "ぜったい",
    "definition": "absolutely"
  },
  "反対": {
    "kana": "はんたい",
    "definition": "oppose"
  },
  "対句": {
    "kana": "ついく",
    "definition": "couplet"
  },
  "耐火": {
    "kana": "たいか",
    "definition": "fire resistance"
  },
  "忍耐": {
    "kana": "にんたい",
    "definition": "Patience"
  },
  "待機": {
    "kana": "たいき",
    "definition": "stand-by"
  },
  "怠慢": {
    "kana": "たいまん",
    "definition": "procrastination"
  },
  "態勢": {
    "kana": "たいせい",
    "definition": "Posture"
  },
  "容態": {
    "kana": "ようたい",
    "definition": "condition"
  },
  "泰然": {
    "kana": "たいぜん",
    "definition": "calm"
  },
  "泰斗": {
    "kana": "たいと",
    "definition": "Taito"
  },
  "安泰": {
    "kana": "あんたい",
    "definition": "peace of mind"
  },
  "滞在": {
    "kana": "たいざい",
    "definition": "stay"
  },
  "滞貨": {
    "kana": "たいか",
    "definition": "backlog"
  },
  "沈滞": {
    "kana": "ちんたい",
    "definition": "stagnation"
  },
  "胎児": {
    "kana": "たいじ",
    "definition": "fetus"
  },
  "受胎": {
    "kana": "じゅたい",
    "definition": "conception"
  },
  "母胎": {
    "kana": "ははたい",
    "definition": "mother's womb"
  },
  "貸与": {
    "kana": "たいよ",
    "definition": "loan"
  },
  "賃貸": {
    "kana": "ちんたい",
    "definition": "rent"
  },
  "退屈": {
    "kana": "たいくつ",
    "definition": "boring"
  },
  "進退": {
    "kana": "しんたい",
    "definition": "advancing and retreating"
  },
  "逮捕": {
    "kana": "たいほ",
    "definition": "arrest"
  },
  "逮夜": {
    "kana": "たいよる",
    "definition": "arrest night"
  },
  "隊列": {
    "kana": "たいれつ",
    "definition": "formation"
  },
  "部隊": {
    "kana": "ぶたい",
    "definition": "troop"
  },
  "代替": {
    "kana": "だいたい",
    "definition": "alternative"
  },
  "代理": {
    "kana": "だいり",
    "definition": "deputy"
  },
  "世代": {
    "kana": "せだい",
    "definition": "generation"
  },
  "現代": {
    "kana": "げんだい",
    "definition": "present day"
  },
  "代謝": {
    "kana": "たいしゃ",
    "definition": "metabolism"
  },
  "交代": {
    "kana": "こうたい",
    "definition": "replacement"
  },
  "灯台": {
    "kana": "とうだい",
    "definition": "lighthouse"
  },
  "舞台": {
    "kana": "ぶたい",
    "definition": "stage"
  },
  "落胆": {
    "kana": "らくたん",
    "definition": "Discouragement"
  },
  "問題": {
    "kana": "もんだい",
    "definition": "problem"
  },
  "滝川": {
    "kana": "たきがわ",
    "definition": "Takigawa"
  },
  "卓越": {
    "kana": "たくえつ",
    "definition": "Excellence"
  },
  "卓球": {
    "kana": "たっきゅう",
    "definition": "table tennis"
  },
  "食卓": {
    "kana": "しょくたく",
    "definition": "table"
  },
  "自宅": {
    "kana": "じたく",
    "definition": "one's home"
  },
  "帰宅": {
    "kana": "きたく",
    "definition": "going home"
  },
  "託宣": {
    "kana": "たくせん",
    "definition": "oracle"
  },
  "委託": {
    "kana": "いたく",
    "definition": "consignment"
  },
  "結託": {
    "kana": "けったく",
    "definition": "collusion"
  },
  "濁流": {
    "kana": "だくりゅう",
    "definition": "muddy stream"
  },
  "濁音": {
    "kana": "だくおん",
    "definition": "voiced sound"
  },
  "清濁": {
    "kana": "せいだく",
    "definition": "good and evil"
  },
  "諾否": {
    "kana": "だくひ",
    "definition": "acceptance or rejection"
  },
  "快諾": {
    "kana": "かいだく",
    "definition": "willing consent"
  },
  "調達": {
    "kana": "ちょうたつ",
    "definition": "Procurement"
  },
  "伝達": {
    "kana": "でんたつ",
    "definition": "transmission"
  },
  "奪回": {
    "kana": "だっかい",
    "definition": "recapture"
  },
  "奪取": {
    "kana": "だっしゅ",
    "definition": "seizure"
  },
  "争奪": {
    "kana": "そうだつ",
    "definition": "scramble"
  },
  "脱衣": {
    "kana": "だつい",
    "definition": "undressing"
  },
  "虚脱": {
    "kana": "きょだつ",
    "definition": "prostration"
  },
  "丹念": {
    "kana": "たんねん",
    "definition": "diligence"
  },
  "丹精": {
    "kana": "たんせい",
    "definition": "diligence"
  },
  "単独": {
    "kana": "たんどく",
    "definition": "Alone"
  },
  "単位": {
    "kana": "たんい",
    "definition": "unit"
  },
  "嘆息": {
    "kana": "たんそく",
    "definition": "Sigh"
  },
  "嘆願": {
    "kana": "たんがん",
    "definition": "petition"
  },
  "担当": {
    "kana": "たんとう",
    "definition": "responsible person"
  },
  "担架": {
    "kana": "たんか",
    "definition": "stretcher"
  },
  "負担": {
    "kana": "ふたん",
    "definition": "load"
  },
  "探求": {
    "kana": "たんきゅう",
    "definition": "exploration"
  },
  "探訪": {
    "kana": "たんぼう",
    "definition": "exploration"
  },
  "探知": {
    "kana": "たんち",
    "definition": "detection"
  },
  "濃淡": {
    "kana": "のうたん",
    "definition": "shade"
  },
  "冷淡": {
    "kana": "れいたん",
    "definition": "Indifference"
  },
  "炭鉱": {
    "kana": "たんこう",
    "definition": "coal mine"
  },
  "木炭": {
    "kana": "もくたん",
    "definition": "charcoal"
  },
  "石炭": {
    "kana": "せきたん",
    "definition": "coal"
  },
  "短所": {
    "kana": "たんしょ",
    "definition": "Cons"
  },
  "長短": {
    "kana": "ちょうたん",
    "definition": "long and short"
  },
  "端正": {
    "kana": "たんせい",
    "definition": "neat"
  },
  "末端": {
    "kana": "まったん",
    "definition": "end"
  },
  "極端": {
    "kana": "きょくたん",
    "definition": "extreme"
  },
  "鍛錬": {
    "kana": "たんれん",
    "definition": "training"
  },
  "団結": {
    "kana": "だんけつ",
    "definition": "unity"
  },
  "集団": {
    "kana": "しゅうだん",
    "definition": "group"
  },
  "布団": {
    "kana": "ふとん",
    "definition": "futon"
  },
  "弾劾": {
    "kana": "だんがい",
    "definition": "impeachment"
  },
  "弾圧": {
    "kana": "だんあつ",
    "definition": "repression"
  },
  "爆弾": {
    "kana": "ばくだん",
    "definition": "bomb"
  },
  "断定": {
    "kana": "だんてい",
    "definition": "assertion"
  },
  "判断": {
    "kana": "はんだん",
    "definition": "judgment"
  },
  "暖流": {
    "kana": "だんりゅう",
    "definition": "warm current"
  },
  "暖房": {
    "kana": "だんぼう",
    "definition": "heating"
  },
  "段落": {
    "kana": "だんらく",
    "definition": "paragraph"
  },
  "手段": {
    "kana": "しゅだん",
    "definition": "means"
  },
  "男女": {
    "kana": "だんじょ",
    "definition": "man and woman"
  },
  "長男": {
    "kana": "ちょうなん",
    "definition": "eldest son"
  },
  "美男": {
    "kana": "びなん",
    "definition": "handsome man"
  },
  "談話": {
    "kana": "だんわ",
    "definition": "discourse"
  },
  "談判": {
    "kana": "だんぱん",
    "definition": "Negotiation"
  },
  "通知": {
    "kana": "つうち",
    "definition": "notification"
  },
  "恥辱": {
    "kana": "ちじょく",
    "definition": "shame"
  },
  "無恥": {
    "kana": "むはじ",
    "definition": "Shameless"
  },
  "痴情": {
    "kana": "ちじょう",
    "definition": "passion"
  },
  "愚痴": {
    "kana": "ぐち",
    "definition": "complaints"
  },
  "稚魚": {
    "kana": "ちぎょ",
    "definition": "fry"
  },
  "稚拙": {
    "kana": "ちせつ",
    "definition": "childish"
  },
  "幼稚": {
    "kana": "ようち",
    "definition": "childish"
  },
  "遅刻": {
    "kana": "ちこく",
    "definition": "behind time"
  },
  "遅速": {
    "kana": "ちそく",
    "definition": "slow"
  },
  "築港": {
    "kana": "ちっこう",
    "definition": "harbor construction"
  },
  "改築": {
    "kana": "かいちく",
    "definition": "renovation"
  },
  "畜産": {
    "kana": "ちくさん",
    "definition": "Livestock"
  },
  "牧畜": {
    "kana": "ぼくちく",
    "definition": "livestock"
  },
  "家畜": {
    "kana": "かちく",
    "definition": "livestock"
  },
  "竹林": {
    "kana": "ちくりん",
    "definition": "bamboo grove"
  },
  "爆竹": {
    "kana": "ばくちく",
    "definition": "firecracker"
  },
  "貯蓄": {
    "kana": "ちょちく",
    "definition": "savings"
  },
  "逐次": {
    "kana": "ちくじ",
    "definition": "Sequential"
  },
  "窒息": {
    "kana": "ちっそく",
    "definition": "Choking"
  },
  "窒素": {
    "kana": "ちっそ",
    "definition": "nitrogen"
  },
  "茶色": {
    "kana": "ちゃいろ",
    "definition": "brown"
  },
  "番茶": {
    "kana": "ばんちゃ",
    "definition": "Bancha"
  },
  "喫茶": {
    "kana": "きっさ",
    "definition": "coffee shop"
  },
  "嫡流": {
    "kana": "ちゃくりゅう",
    "definition": "direct line"
  },
  "着用": {
    "kana": "ちゃくよう",
    "definition": "wear"
  },
  "着手": {
    "kana": "ちゃくしゅ",
    "definition": "start"
  },
  "土着": {
    "kana": "どちゃく",
    "definition": "indigenous"
  },
  "愛着": {
    "kana": "あいちゃく",
    "definition": "attachment"
  },
  "執着": {
    "kana": "しゅうちゃく",
    "definition": "obsession"
  },
  "中央": {
    "kana": "ちゅうおう",
    "definition": "center"
  },
  "中毒": {
    "kana": "ちゅうどく",
    "definition": "Addiction"
  },
  "仲介": {
    "kana": "ちゅうかい",
    "definition": "intermediary"
  },
  "仲裁": {
    "kana": "ちゅうさい",
    "definition": "arbitration"
  },
  "伯仲": {
    "kana": "はくちゅう",
    "definition": "Hakuchu"
  },
  "忠実": {
    "kana": "ちゅうじつ",
    "definition": "Faithful"
  },
  "忠勤": {
    "kana": "ちゅうきん",
    "definition": "loyalty"
  },
  "誠忠": {
    "kana": "まことただし",
    "definition": "Loyalty"
  },
  "抽象": {
    "kana": "ちゅうしょう",
    "definition": "abstract"
  },
  "昼夜": {
    "kana": "ちゅうや",
    "definition": "day and night"
  },
  "昼食": {
    "kana": "ちゅうしょく",
    "definition": "lunch"
  },
  "白昼": {
    "kana": "はくちゅう",
    "definition": "broad daylight"
  },
  "注入": {
    "kana": "ちゅうにゅう",
    "definition": "injection"
  },
  "虫類": {
    "kana": "むしるい",
    "definition": "Reptile"
  },
  "幼虫": {
    "kana": "ようちゅう",
    "definition": "Larva"
  },
  "害虫": {
    "kana": "がいちゅう",
    "definition": "pest"
  },
  "衷心": {
    "kana": "ちゅうしん",
    "definition": "devotion"
  },
  "苦衷": {
    "kana": "くちゅう",
    "definition": "agony"
  },
  "鋳造": {
    "kana": "ちゅうぞう",
    "definition": "casting"
  },
  "鋳鉄": {
    "kana": "ちゅうてつ",
    "definition": "cast iron"
  },
  "改鋳": {
    "kana": "かいい",
    "definition": "recasting"
  },
  "駐車": {
    "kana": "ちゅうしゃ",
    "definition": "Parking"
  },
  "駐在": {
    "kana": "ちゅうざい",
    "definition": "Resident"
  },
  "進駐": {
    "kana": "しんちゅう",
    "definition": "stationing"
  },
  "駐屯": {
    "kana": "ちゅうとん",
    "definition": "garrison"
  },
  "電池": {
    "kana": "でんち",
    "definition": "battery"
  },
  "貯金": {
    "kana": "ちょきん",
    "definition": "saving"
  },
  "丁数": {
    "kana": "ちょうかず",
    "definition": "number"
  },
  "落丁": {
    "kana": "らくちょう",
    "definition": "Missing page"
  },
  "兆候": {
    "kana": "ちょうこう",
    "definition": "signs"
  },
  "前兆": {
    "kana": "ぜんちょう",
    "definition": "omen"
  },
  "億兆": {
    "kana": "おくちょう",
    "definition": "billion trillion"
  },
  "帳簿": {
    "kana": "ちょうぼ",
    "definition": "ledger"
  },
  "通帳": {
    "kana": "つうちょう",
    "definition": "passbook"
  },
  "庁舎": {
    "kana": "ちょうしゃ",
    "definition": "Government building"
  },
  "弔問": {
    "kana": "ちょうもん",
    "definition": "condolences"
  },
  "弔辞": {
    "kana": "ちょうじ",
    "definition": "Condolences"
  },
  "主張": {
    "kana": "しゅちょう",
    "definition": "claim"
  },
  "彫刻": {
    "kana": "ちょうこく",
    "definition": "sculpture"
  },
  "時刻": {
    "kana": "じこく",
    "definition": "Times of Day"
  },
  "深刻": {
    "kana": "しんこく",
    "definition": "serious"
  },
  "木彫": {
    "kana": "きちょう",
    "definition": "wood carving"
  },
  "徴収": {
    "kana": "ちょうしゅう",
    "definition": "collection"
  },
  "特徴": {
    "kana": "とくちょう",
    "definition": "feature"
  },
  "懲罰": {
    "kana": "ちょうばつ",
    "definition": "punishment"
  },
  "懲戒": {
    "kana": "ちょうかい",
    "definition": "disciplinary action"
  },
  "懲役": {
    "kana": "ちょうえき",
    "definition": "imprisonment"
  },
  "挑戦": {
    "kana": "ちょうせん",
    "definition": "challenge"
  },
  "朝食": {
    "kana": "ちょうしょく",
    "definition": "breakfast"
  },
  "早朝": {
    "kana": "そうちょう",
    "definition": "early morning"
  },
  "潮流": {
    "kana": "ちょうりゅう",
    "definition": "tide"
  },
  "満潮": {
    "kana": "まんちょう",
    "definition": "high tide"
  },
  "町会": {
    "kana": "ちょうかい",
    "definition": "town council"
  },
  "眺望": {
    "kana": "ちょうぼう",
    "definition": "view"
  },
  "聴覚": {
    "kana": "ちょうかく",
    "definition": "hearing"
  },
  "傍聴": {
    "kana": "ぼうちょう",
    "definition": "hearing"
  },
  "腸炎": {
    "kana": "ちょうえん",
    "definition": "enteritis"
  },
  "調和": {
    "kana": "ちょうわ",
    "definition": "harmony"
  },
  "好調": {
    "kana": "こうちょう",
    "definition": "strong"
  },
  "超過": {
    "kana": "ちょうか",
    "definition": "Excess"
  },
  "入超": {
    "kana": "にゅうちょう",
    "definition": "surplus"
  },
  "跳躍": {
    "kana": "ちょうやく",
    "definition": "Leap"
  },
  "長女": {
    "kana": "ちょうじょ",
    "definition": "eldest daughter"
  },
  "長所": {
    "kana": "ちょうしょ",
    "definition": "Strong Points"
  },
  "成長": {
    "kana": "せいちょう",
    "definition": "growth"
  },
  "頂点": {
    "kana": "ちょうてん",
    "definition": "vertex"
  },
  "絶頂": {
    "kana": "ぜっちょう",
    "definition": "climax"
  },
  "鳥類": {
    "kana": "ちょうるい",
    "definition": "birds"
  },
  "野鳥": {
    "kana": "やちょう",
    "definition": "wild bird"
  },
  "勅語": {
    "kana": "ちょくご",
    "definition": "imperial rescript"
  },
  "勅使": {
    "kana": "ちょくし",
    "definition": "envoy"
  },
  "直径": {
    "kana": "ちょっけい",
    "definition": "diameter"
  },
  "直立": {
    "kana": "ちょくりつ",
    "definition": "upright"
  },
  "実直": {
    "kana": "じっちょく",
    "definition": "Honesty"
  },
  "直訴": {
    "kana": "じきそ",
    "definition": "direct appeal"
  },
  "直筆": {
    "kana": "じきひつ",
    "definition": "handwriting"
  },
  "沈黙": {
    "kana": "ちんもく",
    "definition": "silence"
  },
  "浮沈": {
    "kana": "ふちん",
    "definition": "ups and downs"
  },
  "珍客": {
    "kana": "ちんきゃく",
    "definition": "rare guest"
  },
  "珍重": {
    "kana": "ちんちょう",
    "definition": "prized"
  },
  "珍妙": {
    "kana": "ちんみょう",
    "definition": "curiosity"
  },
  "賃金": {
    "kana": "ちんぎん",
    "definition": "wage"
  },
  "運賃": {
    "kana": "うんちん",
    "definition": "fare"
  },
  "鎮座": {
    "kana": "ちんざ",
    "definition": "Enshrined"
  },
  "鎮静": {
    "kana": "ちんせい",
    "definition": "sedation"
  },
  "重鎮": {
    "kana": "じゅうちん",
    "definition": "heavyweight"
  },
  "陳列": {
    "kana": "ちんれつ",
    "definition": "display"
  },
  "開陳": {
    "kana": "かいちん",
    "definition": "disclosure"
  },
  "墜落": {
    "kana": "ついらく",
    "definition": "crash"
  },
  "墜死": {
    "kana": "ついし",
    "definition": "fall death"
  },
  "撃墜": {
    "kana": "げきつい",
    "definition": "shot down"
  },
  "追跡": {
    "kana": "ついせき",
    "definition": "tracking"
  },
  "旧跡": {
    "kana": "きゅうせき",
    "definition": "historic site"
  },
  "遺跡": {
    "kana": "いせき",
    "definition": "Remains"
  },
  "追放": {
    "kana": "ついほう",
    "definition": "banishment"
  },
  "訴追": {
    "kana": "そつい",
    "definition": "prosecution"
  },
  "痛快": {
    "kana": "つうかい",
    "definition": "Exciting"
  },
  "苦痛": {
    "kana": "くつう",
    "definition": "pain"
  },
  "心痛": {
    "kana": "しんつう",
    "definition": "heartache"
  },
  "通読": {
    "kana": "つうどく",
    "definition": "reading through"
  },
  "普通": {
    "kana": "ふつう",
    "definition": "usually"
  },
  "通夜": {
    "kana": "つや",
    "definition": "wake"
  },
  "釣果": {
    "kana": "ちょうか",
    "definition": "catch"
  },
  "釣魚": {
    "kana": "つりさかな",
    "definition": "game fish"
  },
  "釣艇": {
    "kana": "つりてい",
    "definition": "fishing boat"
  },
  "亭主": {
    "kana": "ていしゅ",
    "definition": "husband"
  },
  "料亭": {
    "kana": "りょうてい",
    "definition": "restaurant"
  },
  "低級": {
    "kana": "ていきゅう",
    "definition": "low class"
  },
  "停止": {
    "kana": "ていし",
    "definition": "Stop"
  },
  "停車": {
    "kana": "ていしゃ",
    "definition": "stop"
  },
  "調停": {
    "kana": "ちょうてい",
    "definition": "arbitration"
  },
  "偵察": {
    "kana": "ていさつ",
    "definition": "reconnaissance"
  },
  "探偵": {
    "kana": "たんてい",
    "definition": "Detective"
  },
  "貞操": {
    "kana": "ていそう",
    "definition": "chastity"
  },
  "貞節": {
    "kana": "ていせつ",
    "definition": "fidelity"
  },
  "進呈": {
    "kana": "しんてい",
    "definition": "presentation"
  },
  "堤防": {
    "kana": "ていぼう",
    "definition": "embankment"
  },
  "定価": {
    "kana": "ていか",
    "definition": "List price"
  },
  "安定": {
    "kana": "あんてい",
    "definition": "stable"
  },
  "決定": {
    "kana": "けってい",
    "definition": "decision"
  },
  "定石": {
    "kana": "じょうせき",
    "definition": "formula"
  },
  "定紋": {
    "kana": "ていもん",
    "definition": "fixed crest"
  },
  "必定": {
    "kana": "ひつじょう",
    "definition": "mandatory"
  },
  "定款": {
    "kana": "ていかん",
    "definition": "articles of incorporation"
  },
  "借款": {
    "kana": "しゃっかん",
    "definition": "loan"
  },
  "落款": {
    "kana": "らくかん",
    "definition": "signature"
  },
  "帝国": {
    "kana": "ていこく",
    "definition": "empire"
  },
  "底流": {
    "kana": "ていりゅう",
    "definition": "Undercurrent"
  },
  "海底": {
    "kana": "かいてい",
    "definition": "seabed"
  },
  "到底": {
    "kana": "とうてい",
    "definition": "absolutely"
  },
  "庭園": {
    "kana": "ていえん",
    "definition": "garden"
  },
  "校庭": {
    "kana": "こうてい",
    "definition": "schoolyard"
  },
  "弟妹": {
    "kana": "ていまい",
    "definition": "brother and sister"
  },
  "義弟": {
    "kana": "ぎてい",
    "definition": "brother-in-law"
  },
  "抵抗": {
    "kana": "ていこう",
    "definition": "resistance"
  },
  "抵触": {
    "kana": "ていしょく",
    "definition": "conflict"
  },
  "提案": {
    "kana": "ていあん",
    "definition": "suggestion"
  },
  "前提": {
    "kana": "ぜんてい",
    "definition": "premise"
  },
  "過程": {
    "kana": "かてい",
    "definition": "process"
  },
  "締結": {
    "kana": "ていけつ",
    "definition": "conclusion"
  },
  "改訂": {
    "kana": "かいてい",
    "definition": "revision"
  },
  "逓信": {
    "kana": "ていしん",
    "definition": "communication"
  },
  "逓送": {
    "kana": "ていそう",
    "definition": "forwarding"
  },
  "逓減": {
    "kana": "ていげん",
    "definition": "diminishing"
  },
  "邸宅": {
    "kana": "ていたく",
    "definition": "mansion"
  },
  "私邸": {
    "kana": "してい",
    "definition": "private residence"
  },
  "泥土": {
    "kana": "どろつち",
    "definition": "mud"
  },
  "雲泥": {
    "kana": "うんでい",
    "definition": "mud"
  },
  "拘泥": {
    "kana": "こうでい",
    "definition": "obsession"
  },
  "摘要": {
    "kana": "てきよう",
    "definition": "Summary"
  },
  "指摘": {
    "kana": "してき",
    "definition": "indicate"
  },
  "匹敵": {
    "kana": "ひってき",
    "definition": "comparable"
  },
  "的中": {
    "kana": "てきちゅう",
    "definition": "hitting the target"
  },
  "目的": {
    "kana": "もくてき",
    "definition": "the purpose"
  },
  "適宜": {
    "kana": "てきぎ",
    "definition": "appropriately"
  },
  "便宜": {
    "kana": "べんぎ",
    "definition": "convenience"
  },
  "適切": {
    "kana": "てきせつ",
    "definition": "appropriate"
  },
  "快適": {
    "kana": "かいてき",
    "definition": "comfortable"
  },
  "哲学": {
    "kana": "てつがく",
    "definition": "philosophy"
  },
  "先哲": {
    "kana": "さきさとし",
    "definition": "predecessor philosopher"
  },
  "徹宵": {
    "kana": "とおるしょう",
    "definition": "without sleep"
  },
  "徹底": {
    "kana": "てってい",
    "definition": "Thoroughness"
  },
  "徹夜": {
    "kana": "てつや",
    "definition": "all night"
  },
  "貫徹": {
    "kana": "かんてつ",
    "definition": "penetration"
  },
  "撤去": {
    "kana": "てっきょ",
    "definition": "Removal"
  },
  "撤回": {
    "kana": "てっかい",
    "definition": "withdraw"
  },
  "撤兵": {
    "kana": "てっぺい",
    "definition": "withdrawal"
  },
  "鉄道": {
    "kana": "てつどう",
    "definition": "railroad"
  },
  "典拠": {
    "kana": "てんきょ",
    "definition": "authority"
  },
  "天然": {
    "kana": "てんねん",
    "definition": "natural"
  },
  "雨天": {
    "kana": "うてん",
    "definition": "rain"
  },
  "展示": {
    "kana": "てんじ",
    "definition": "exhibition"
  },
  "店舗": {
    "kana": "てんぽ",
    "definition": "store"
  },
  "開店": {
    "kana": "かいてん",
    "definition": "Opening"
  },
  "添加": {
    "kana": "てんか",
    "definition": "addition"
  },
  "添付": {
    "kana": "てんぷ",
    "definition": "attached"
  },
  "回転": {
    "kana": "かいてん",
    "definition": "rotate"
  },
  "運転": {
    "kana": "うんてん",
    "definition": "drive"
  },
  "点火": {
    "kana": "てんか",
    "definition": "ignition"
  },
  "採点": {
    "kana": "さいてん",
    "definition": "scoring"
  },
  "伝統": {
    "kana": "でんとう",
    "definition": "tradition"
  },
  "殿堂": {
    "kana": "でんどう",
    "definition": "hall of fame"
  },
  "貴殿": {
    "kana": "きでん",
    "definition": "you"
  },
  "油田": {
    "kana": "ゆでん",
    "definition": "oil field"
  },
  "電報": {
    "kana": "でんぽう",
    "definition": "telegram"
  },
  "電鈴": {
    "kana": "でんれい",
    "definition": "electric bell"
  },
  "振鈴": {
    "kana": "しんすず",
    "definition": "hand bell"
  },
  "予鈴": {
    "kana": "よれい",
    "definition": "warning bell"
  },
  "吐露": {
    "kana": "とろ",
    "definition": "revelation"
  },
  "吐血": {
    "kana": "とけつ",
    "definition": "vomiting blood"
  },
  "塗布": {
    "kana": "とふ",
    "definition": "Application"
  },
  "塗装": {
    "kana": "とそう",
    "definition": "Painting"
  },
  "塗料": {
    "kana": "とりょう",
    "definition": "paint"
  },
  "徒歩": {
    "kana": "とほ",
    "definition": "on foot"
  },
  "徒労": {
    "kana": "とろう",
    "definition": "labor in vain"
  },
  "信徒": {
    "kana": "しんと",
    "definition": "follower"
  },
  "斗酒": {
    "kana": "とさけ",
    "definition": "lot of sake"
  },
  "渡航": {
    "kana": "とこう",
    "definition": "travel"
  },
  "渡河": {
    "kana": "とか",
    "definition": "river crossing"
  },
  "登壇": {
    "kana": "とうだん",
    "definition": "on stage"
  },
  "登校": {
    "kana": "とうこう",
    "definition": "going to school"
  },
  "登記": {
    "kana": "とうき",
    "definition": "registration"
  },
  "登城": {
    "kana": "とじょう",
    "definition": "Climb"
  },
  "帰途": {
    "kana": "きと",
    "definition": "on the way home"
  },
  "前途": {
    "kana": "ぜんと",
    "definition": "future"
  },
  "都会": {
    "kana": "とかい",
    "definition": "city"
  },
  "都心": {
    "kana": "としん",
    "definition": "city center"
  },
  "首都": {
    "kana": "しゅと",
    "definition": "capital"
  },
  "都合": {
    "kana": "つごう",
    "definition": "circumstances"
  },
  "土壌": {
    "kana": "どじょう",
    "definition": "soil"
  },
  "土木": {
    "kana": "どぼく",
    "definition": "civil engineering"
  },
  "国土": {
    "kana": "こくど",
    "definition": "land"
  },
  "粘土": {
    "kana": "ねんど",
    "definition": "clay"
  },
  "奴隷": {
    "kana": "どれい",
    "definition": "slave"
  },
  "怒号": {
    "kana": "どごう",
    "definition": "angry shout"
  },
  "激怒": {
    "kana": "げきど",
    "definition": "loose the temper"
  },
  "倒産": {
    "kana": "とうさん",
    "definition": "bankruptcy"
  },
  "圧倒": {
    "kana": "あっとう",
    "definition": "Overwhelm"
  },
  "党派": {
    "kana": "とうは",
    "definition": "party"
  },
  "政党": {
    "kana": "せいとう",
    "definition": "political party"
  },
  "徒党": {
    "kana": "ととう",
    "definition": "clique"
  },
  "冬季": {
    "kana": "とうき",
    "definition": "winter"
  },
  "越冬": {
    "kana": "えっとう",
    "definition": "Overwintering"
  },
  "凍結": {
    "kana": "とうけつ",
    "definition": "frozen"
  },
  "凍死": {
    "kana": "とうし",
    "definition": "freezing to death"
  },
  "冷凍": {
    "kana": "れいとう",
    "definition": "frozen"
  },
  "短刀": {
    "kana": "たんとう",
    "definition": "dagger"
  },
  "唐突": {
    "kana": "とうとつ",
    "definition": "brusqueness"
  },
  "島民": {
    "kana": "しまたみ",
    "definition": "islanders"
  },
  "半島": {
    "kana": "はんとう",
    "definition": "peninsula"
  },
  "列島": {
    "kana": "れっとう",
    "definition": "archipelago"
  },
  "悼辞": {
    "kana": "とうじ",
    "definition": "condolences"
  },
  "哀悼": {
    "kana": "あいとう",
    "definition": "mourning"
  },
  "追悼": {
    "kana": "ついとう",
    "definition": "mourning"
  },
  "投資": {
    "kana": "とうし",
    "definition": "investment"
  },
  "投下": {
    "kana": "とうか",
    "definition": "drop"
  },
  "暴投": {
    "kana": "ぼうとう",
    "definition": "wild pitch"
  },
  "搭載": {
    "kana": "とうさい",
    "definition": "powered by"
  },
  "搭乗": {
    "kana": "とうじょう",
    "definition": "Boarding"
  },
  "東国": {
    "kana": "ひがしくに",
    "definition": "eastern country"
  },
  "以東": {
    "kana": "いとう",
    "definition": "East"
  },
  "白桃": {
    "kana": "しろもも",
    "definition": "white peach"
  },
  "桜桃": {
    "kana": "おうとう",
    "definition": "Cherry peach"
  },
  "盗難": {
    "kana": "とうなん",
    "definition": "theft"
  },
  "盗用": {
    "kana": "とうよう",
    "definition": "Plagiarism"
  },
  "湯治": {
    "kana": "とうじ",
    "definition": "Hot spring cure"
  },
  "熱湯": {
    "kana": "ねっとう",
    "definition": "boiling water"
  },
  "電灯": {
    "kana": "でんとう",
    "definition": "light"
  },
  "点灯": {
    "kana": "てんとう",
    "definition": "lighting"
  },
  "当然": {
    "kana": "とうぜん",
    "definition": "Of course"
  },
  "必然": {
    "kana": "ひつぜん",
    "definition": "inevitable"
  },
  "当惑": {
    "kana": "とうわく",
    "definition": "bewilderment"
  },
  "等級": {
    "kana": "とうきゅう",
    "definition": "grade"
  },
  "平等": {
    "kana": "びょうどう",
    "definition": "equality"
  },
  "答弁": {
    "kana": "とうべん",
    "definition": "answer"
  },
  "問答": {
    "kana": "もんどう",
    "definition": "question and answer"
  },
  "製糖": {
    "kana": "せいとう",
    "definition": "Sugar manufacturing"
  },
  "統計": {
    "kana": "とうけい",
    "definition": "statistics"
  },
  "統帥": {
    "kana": "とうすい",
    "definition": "Commander"
  },
  "元帥": {
    "kana": "げんすい",
    "definition": "Marshal"
  },
  "到着": {
    "kana": "とうちゃく",
    "definition": "arrival"
  },
  "周到": {
    "kana": "しゅうとう",
    "definition": "meticulous"
  },
  "討伐": {
    "kana": "とうばつ",
    "definition": "subjugation"
  },
  "討論": {
    "kana": "とうろん",
    "definition": "discussion"
  },
  "謄写": {
    "kana": "とうしゃ",
    "definition": "mimeograph"
  },
  "豆腐": {
    "kana": "とうふ",
    "definition": "Tofu"
  },
  "納豆": {
    "kana": "なっとう",
    "definition": "natto"
  },
  "踏破": {
    "kana": "とうは",
    "definition": "traversed"
  },
  "踏襲": {
    "kana": "とうしゅう",
    "definition": "Following"
  },
  "逃走": {
    "kana": "とうそう",
    "definition": "escape"
  },
  "逃亡": {
    "kana": "とうぼう",
    "definition": "escape"
  },
  "逃避": {
    "kana": "とうひ",
    "definition": "escape"
  },
  "透写": {
    "kana": "とうしゃ",
    "definition": "Transparency"
  },
  "陶酔": {
    "kana": "とうすい",
    "definition": "euphoria"
  },
  "頭髪": {
    "kana": "とうはつ",
    "definition": "hair"
  },
  "白髪": {
    "kana": "しらが",
    "definition": "gray hair"
  },
  "整髪": {
    "kana": "せいはつ",
    "definition": "Hairdressing"
  },
  "頭部": {
    "kana": "とうぶ",
    "definition": "head"
  },
  "船頭": {
    "kana": "せんどう",
    "definition": "boatman"
  },
  "頭脳": {
    "kana": "ずのう",
    "definition": "brain"
  },
  "頭痛": {
    "kana": "ずつう",
    "definition": "headache"
  },
  "音頭": {
    "kana": "おんど",
    "definition": "Ondo"
  },
  "暴騰": {
    "kana": "ぼうとう",
    "definition": "soaring"
  },
  "沸騰": {
    "kana": "ふっとう",
    "definition": "boiling"
  },
  "闘争": {
    "kana": "とうそう",
    "definition": "struggle"
  },
  "闘志": {
    "kana": "とうし",
    "definition": "fighting spirit"
  },
  "戦闘": {
    "kana": "せんとう",
    "definition": "fight"
  },
  "動物": {
    "kana": "どうぶつ",
    "definition": "animal"
  },
  "動揺": {
    "kana": "どうよう",
    "definition": "upset"
  },
  "同情": {
    "kana": "どうじょう",
    "definition": "sympathy"
  },
  "混同": {
    "kana": "こんどう",
    "definition": "Confusion"
  },
  "同伴": {
    "kana": "どうはん",
    "definition": "companion"
  },
  "随伴": {
    "kana": "ずいはん",
    "definition": "attendant"
  },
  "伴奏": {
    "kana": "ばんそう",
    "definition": "accompaniment"
  },
  "伴食": {
    "kana": "はんしょく",
    "definition": "eating with a guest"
  },
  "母堂": {
    "kana": "ぼどう",
    "definition": "main hall"
  },
  "導入": {
    "kana": "どうにゅう",
    "definition": "introduction"
  },
  "洞穴": {
    "kana": "ほらあな",
    "definition": "cave"
  },
  "洞察": {
    "kana": "どうさつ",
    "definition": "insight"
  },
  "空洞": {
    "kana": "くうどう",
    "definition": "cavity"
  },
  "童話": {
    "kana": "どうわ",
    "definition": "fairy tale"
  },
  "童心": {
    "kana": "どうしん",
    "definition": "childhood"
  },
  "胴体": {
    "kana": "どうたい",
    "definition": "body"
  },
  "道路": {
    "kana": "どうろ",
    "definition": "road"
  },
  "道徳": {
    "kana": "どうとく",
    "definition": "moral"
  },
  "報道": {
    "kana": "ほうどう",
    "definition": "report"
  },
  "神道": {
    "kana": "しんとう",
    "definition": "Shinto"
  },
  "銅器": {
    "kana": "どうき",
    "definition": "Copperware"
  },
  "銅像": {
    "kana": "どうぞう",
    "definition": "bronze statue"
  },
  "隠匿": {
    "kana": "いんとく",
    "definition": "concealment"
  },
  "損得": {
    "kana": "そんとく",
    "definition": "profit and loss"
  },
  "徳義": {
    "kana": "とくぎ",
    "definition": "virtue"
  },
  "徳用": {
    "kana": "とくよう",
    "definition": "economy"
  },
  "特産": {
    "kana": "とくさん",
    "definition": "specialty"
  },
  "独特": {
    "kana": "どくとく",
    "definition": "peculiar"
  },
  "督促": {
    "kana": "とくそく",
    "definition": "reminder"
  },
  "督励": {
    "kana": "とくれい",
    "definition": "encouragement"
  },
  "篤農": {
    "kana": "あつしのう",
    "definition": "virtuous farmer"
  },
  "危篤": {
    "kana": "きとく",
    "definition": "critically ill"
  },
  "懇篤": {
    "kana": "こんあつし",
    "definition": "cordiality"
  },
  "毒薬": {
    "kana": "どくやく",
    "definition": "poison"
  },
  "毒舌": {
    "kana": "どくぜつ",
    "definition": "sharp tongue"
  },
  "独房": {
    "kana": "どくぼう",
    "definition": "solitary confinement"
  },
  "冷房": {
    "kana": "れいぼう",
    "definition": "cooling"
  },
  "僧房": {
    "kana": "そうぼう",
    "definition": "monastery"
  },
  "独立": {
    "kana": "どくりつ",
    "definition": "independence"
  },
  "独断": {
    "kana": "どくだん",
    "definition": "Arbitrary"
  },
  "音読": {
    "kana": "おんどく",
    "definition": "reading aloud"
  },
  "読点": {
    "kana": "とうてん",
    "definition": "reading point"
  },
  "凸版": {
    "kana": "とっぱん",
    "definition": "Letterpress"
  },
  "突然": {
    "kana": "とつぜん",
    "definition": "suddenly"
  },
  "突端": {
    "kana": "とったん",
    "definition": "tip"
  },
  "曇天": {
    "kana": "どんてん",
    "definition": "cloudy weather"
  },
  "鈍感": {
    "kana": "どんかん",
    "definition": "Insensitive"
  },
  "鈍角": {
    "kana": "どんかく",
    "definition": "obtuse angle"
  },
  "南北": {
    "kana": "なんぼく",
    "definition": "north and south"
  },
  "南端": {
    "kana": "なんたん",
    "definition": "south end"
  },
  "指南": {
    "kana": "しなん",
    "definition": "instruction"
  },
  "南無": {
    "kana": "なむ",
    "definition": "amen"
  },
  "軟化": {
    "kana": "なんか",
    "definition": "softening"
  },
  "軟弱": {
    "kana": "なんじゃく",
    "definition": "weak"
  },
  "硬軟": {
    "kana": "こうなん",
    "definition": "hardness"
  },
  "非難": {
    "kana": "ひなん",
    "definition": "condemnation"
  },
  "肉類": {
    "kana": "にくるい",
    "definition": "meat"
  },
  "肉薄": {
    "kana": "にくはく",
    "definition": "thin"
  },
  "乳児": {
    "kana": "にゅうじ",
    "definition": "infant"
  },
  "乳液": {
    "kana": "にゅうえき",
    "definition": "latex"
  },
  "入学": {
    "kana": "にゅうがく",
    "definition": "admission"
  },
  "尿素": {
    "kana": "にょうそ",
    "definition": "urea"
  },
  "任務": {
    "kana": "にんむ",
    "definition": "mission"
  },
  "妊娠": {
    "kana": "にんしん",
    "definition": "pregnancy"
  },
  "懐妊": {
    "kana": "かいにん",
    "definition": "pregnancy"
  },
  "不妊": {
    "kana": "ふにん",
    "definition": "infertility"
  },
  "忍者": {
    "kana": "にんじゃ",
    "definition": "Ninja"
  },
  "残忍": {
    "kana": "ざんにん",
    "definition": "brutality"
  },
  "認識": {
    "kana": "にんしき",
    "definition": "recognition"
  },
  "承認": {
    "kana": "しょうにん",
    "definition": "approval"
  },
  "否認": {
    "kana": "ひにん",
    "definition": "denial"
  },
  "熱病": {
    "kana": "ねつびょう",
    "definition": "fever"
  },
  "念願": {
    "kana": "ねんがん",
    "definition": "wish"
  },
  "信念": {
    "kana": "しんねん",
    "definition": "belief"
  },
  "断念": {
    "kana": "だんねん",
    "definition": "giving up"
  },
  "燃料": {
    "kana": "ねんりょう",
    "definition": "fuel"
  },
  "粘液": {
    "kana": "ねんえき",
    "definition": "mucus"
  },
  "粘着": {
    "kana": "ねんちゃく",
    "definition": "Adhesive"
  },
  "悩殺": {
    "kana": "のうさつ",
    "definition": "Bombshell"
  },
  "苦悩": {
    "kana": "くのう",
    "definition": "distress"
  },
  "煩悩": {
    "kana": "ぼんのう",
    "definition": "worldly desires"
  },
  "納入": {
    "kana": "のうにゅう",
    "definition": "delivery"
  },
  "納涼": {
    "kana": "のうりょう",
    "definition": "cool evening"
  },
  "収納": {
    "kana": "しゅうのう",
    "definition": "storage"
  },
  "納得": {
    "kana": "なっとく",
    "definition": "agreement"
  },
  "納屋": {
    "kana": "なや",
    "definition": "barn"
  },
  "納戸": {
    "kana": "なんど",
    "definition": "closet"
  },
  "効能": {
    "kana": "こうのう",
    "definition": "efficacy"
  },
  "首脳": {
    "kana": "しゅのう",
    "definition": "leader"
  },
  "農業": {
    "kana": "のうぎょう",
    "definition": "Agriculture"
  },
  "農具": {
    "kana": "のうぐ",
    "definition": "farm tools"
  },
  "酪農": {
    "kana": "らくのう",
    "definition": "dairy"
  },
  "把握": {
    "kana": "はあく",
    "definition": "grasp"
  },
  "把持": {
    "kana": "はじ",
    "definition": "Grasp"
  },
  "覇権": {
    "kana": "はけん",
    "definition": "hegemony"
  },
  "覇者": {
    "kana": "はしゃ",
    "definition": "Conqueror"
  },
  "制覇": {
    "kana": "せいは",
    "definition": "conquest"
  },
  "波浪": {
    "kana": "はろう",
    "definition": "waves"
  },
  "波及": {
    "kana": "はきゅう",
    "definition": "Ripple"
  },
  "電波": {
    "kana": "でんぱ",
    "definition": "radio waves"
  },
  "流派": {
    "kana": "りゅうは",
    "definition": "school"
  },
  "破産": {
    "kana": "はさん",
    "definition": "bankruptcy"
  },
  "撃破": {
    "kana": "げきは",
    "definition": "defeat"
  },
  "馬車": {
    "kana": "ばしゃ",
    "definition": "carriage"
  },
  "乗馬": {
    "kana": "じょうば",
    "definition": "horse riding"
  },
  "俳優": {
    "kana": "はいゆう",
    "definition": "actor"
  },
  "俳句": {
    "kana": "はいく",
    "definition": "haiku"
  },
  "俳味": {
    "kana": "はいあじ",
    "definition": "haiku flavor"
  },
  "廃止": {
    "kana": "はいし",
    "definition": "abolition"
  },
  "廃物": {
    "kana": "はいぶつ",
    "definition": "garbage"
  },
  "拝見": {
    "kana": "はいけん",
    "definition": "seeing"
  },
  "拝礼": {
    "kana": "はいれい",
    "definition": "Worship"
  },
  "排除": {
    "kana": "はいじょ",
    "definition": "exclusion"
  },
  "敗北": {
    "kana": "はいぼく",
    "definition": "defeat"
  },
  "腐敗": {
    "kana": "ふはい",
    "definition": "corruption"
  },
  "背後": {
    "kana": "はいご",
    "definition": "Behind"
  },
  "背景": {
    "kana": "はいけい",
    "definition": "background"
  },
  "腹背": {
    "kana": "ふくはい",
    "definition": "abdomen"
  },
  "肺臓": {
    "kana": "はいぞう",
    "definition": "lung"
  },
  "肺炎": {
    "kana": "はいえん",
    "definition": "pneumonia"
  },
  "同輩": {
    "kana": "どうはい",
    "definition": "peer"
  },
  "先輩": {
    "kana": "せんぱい",
    "definition": "upperclassman"
  },
  "交配": {
    "kana": "こうはい",
    "definition": "mating"
  },
  "心配": {
    "kana": "しんぱい",
    "definition": "anxiety"
  },
  "倍率": {
    "kana": "ばいりつ",
    "definition": "magnification"
  },
  "倍加": {
    "kana": "ばいか",
    "definition": "doubling"
  },
  "二倍": {
    "kana": "にばい",
    "definition": "Twice"
  },
  "培養": {
    "kana": "ばいよう",
    "definition": "culture"
  },
  "媒介": {
    "kana": "ばいかい",
    "definition": "intermediary"
  },
  "媒体": {
    "kana": "ばいたい",
    "definition": "medium"
  },
  "梅園": {
    "kana": "うめぞの",
    "definition": "Umezono"
  },
  "紅梅": {
    "kana": "こうばい",
    "definition": "red plum"
  },
  "買収": {
    "kana": "ばいしゅう",
    "definition": "Acquisition"
  },
  "売買": {
    "kana": "ばいばい",
    "definition": "buying and selling"
  },
  "売品": {
    "kana": "ばいひん",
    "definition": "Goods for sale"
  },
  "賠償": {
    "kana": "ばいしょう",
    "definition": "compensation"
  },
  "陪席": {
    "kana": "ばいせき",
    "definition": "attendant"
  },
  "陪食": {
    "kana": "ばいしょく",
    "definition": "dinner"
  },
  "陪審": {
    "kana": "ばいしん",
    "definition": "jury"
  },
  "伯叔": {
    "kana": "はくしゅく",
    "definition": "brothers"
  },
  "画伯": {
    "kana": "がはく",
    "definition": "painter"
  },
  "博識": {
    "kana": "はくしき",
    "definition": "extensive knowledge"
  },
  "博覧": {
    "kana": "はくらん",
    "definition": "Exposition"
  },
  "博労": {
    "kana": "ばくろう",
    "definition": "horse trader"
  },
  "博徒": {
    "kana": "ばくと",
    "definition": "Gambler"
  },
  "拍手": {
    "kana": "はくしゅ",
    "definition": "applause"
  },
  "拍車": {
    "kana": "はくしゃ",
    "definition": "spur"
  },
  "白刃": {
    "kana": "はくじん",
    "definition": "white blade"
  },
  "凶刃": {
    "kana": "きょうじん",
    "definition": "deadly blade"
  },
  "自刃": {
    "kana": "じじん",
    "definition": "self-blade"
  },
  "黒白": {
    "kana": "くろしろ",
    "definition": "black and white"
  },
  "舶来": {
    "kana": "はくらい",
    "definition": "imported"
  },
  "薄情": {
    "kana": "はくじょう",
    "definition": "heartless"
  },
  "薄謝": {
    "kana": "はくしゃ",
    "definition": "little apology"
  },
  "迫害": {
    "kana": "はくがい",
    "definition": "persecution"
  },
  "切迫": {
    "kana": "せっぱく",
    "definition": "urgency"
  },
  "漠然": {
    "kana": "ばくぜん",
    "definition": "vague"
  },
  "広漠": {
    "kana": "こうばく",
    "definition": "vastness"
  },
  "砂漠": {
    "kana": "さばく",
    "definition": "desert"
  },
  "原爆": {
    "kana": "げんばく",
    "definition": "atomic bomb"
  },
  "麦芽": {
    "kana": "ばくが",
    "definition": "malt"
  },
  "麦秋": {
    "kana": "ばくしゅう",
    "definition": "barley autumn"
  },
  "精麦": {
    "kana": "せいむぎ",
    "definition": "polished barley"
  },
  "八月": {
    "kana": "はちがつ",
    "definition": "August"
  },
  "八方": {
    "kana": "はっぽう",
    "definition": "Happo"
  },
  "衣鉢": {
    "kana": "ころもはち",
    "definition": "robe"
  },
  "肉芽": {
    "kana": "にくが",
    "definition": "granulation"
  },
  "吉祥": {
    "kana": "きちじょう",
    "definition": "auspicious"
  },
  "伐採": {
    "kana": "ばっさい",
    "definition": "deforestation"
  },
  "征伐": {
    "kana": "せいばつ",
    "definition": "subjugation"
  },
  "殺伐": {
    "kana": "さつばつ",
    "definition": "Slaughter"
  },
  "罰金": {
    "kana": "ばっきん",
    "definition": "fine"
  },
  "天罰": {
    "kana": "てんばつ",
    "definition": "divine punishment"
  },
  "選抜": {
    "kana": "せんばつ",
    "definition": "Selection"
  },
  "判定": {
    "kana": "はんてい",
    "definition": "judgement"
  },
  "A判": {
    "kana": "Aはん",
    "definition": "A size"
  },
  "半鐘": {
    "kana": "はんしょう",
    "definition": "fire bell"
  },
  "警鐘": {
    "kana": "けいしょう",
    "definition": "alarm bell"
  },
  "謀反": {
    "kana": "むほん",
    "definition": "rebellion"
  },
  "反物": {
    "kana": "たんもの",
    "definition": "Cloth"
  },
  "反省": {
    "kana": "はんせい",
    "definition": "introspection"
  },
  "帰省": {
    "kana": "きせい",
    "definition": "homecoming"
  },
  "省略": {
    "kana": "しょうりゃく",
    "definition": "omit"
  },
  "各省": {
    "kana": "かくしょう",
    "definition": "each province"
  },
  "帆船": {
    "kana": "はんせん",
    "definition": "sailing ship"
  },
  "帆走": {
    "kana": "はんそう",
    "definition": "sailing"
  },
  "搬入": {
    "kana": "はんにゅう",
    "definition": "Carry-in"
  },
  "運搬": {
    "kana": "うんぱん",
    "definition": "transportation"
  },
  "版画": {
    "kana": "はんが",
    "definition": "prints"
  },
  "共犯": {
    "kana": "きょうはん",
    "definition": "accomplice"
  },
  "侵犯": {
    "kana": "しんぱん",
    "definition": "infringement"
  },
  "班長": {
    "kana": "はんちょう",
    "definition": "group leader"
  },
  "繁茂": {
    "kana": "はんも",
    "definition": "thriving"
  },
  "藩主": {
    "kana": "はんしゅ",
    "definition": "feudal lord"
  },
  "廃藩": {
    "kana": "はいはん",
    "definition": "abolition of feudal domains"
  },
  "販売": {
    "kana": "はんばい",
    "definition": "sale"
  },
  "販路": {
    "kana": "はんろ",
    "definition": "sales channel"
  },
  "市販": {
    "kana": "しはん",
    "definition": "Commercially available"
  },
  "師範": {
    "kana": "しはん",
    "definition": "instructor"
  },
  "模範": {
    "kana": "もはん",
    "definition": "example"
  },
  "煩雑": {
    "kana": "はんざつ",
    "definition": "complicated"
  },
  "頒布": {
    "kana": "はんぷ",
    "definition": "distribution"
  },
  "頒価": {
    "kana": "はんか",
    "definition": "distribution price"
  },
  "晩夏": {
    "kana": "ばんか",
    "definition": "late summer"
  },
  "今晩": {
    "kana": "こんばん",
    "definition": "tonight"
  },
  "番組": {
    "kana": "ばんぐみ",
    "definition": "program"
  },
  "順番": {
    "kana": "じゅんばん",
    "definition": "order"
  },
  "野蛮": {
    "kana": "やばん",
    "definition": "savagery"
  },
  "卑近": {
    "kana": "ひきん",
    "definition": "common"
  },
  "卑屈": {
    "kana": "ひくつ",
    "definition": "servile"
  },
  "卑下": {
    "kana": "ひげ",
    "definition": "humiliation"
  },
  "否定": {
    "kana": "ひてい",
    "definition": "denial"
  },
  "適否": {
    "kana": "てきひ",
    "definition": "Suitability"
  },
  "安否": {
    "kana": "あんぴ",
    "definition": "safety"
  },
  "王妃": {
    "kana": "おうひ",
    "definition": "queen"
  },
  "悲劇": {
    "kana": "ひげき",
    "definition": "tragedy"
  },
  "批判": {
    "kana": "ひはん",
    "definition": "criticism"
  },
  "批評": {
    "kana": "ひひょう",
    "definition": "criticism"
  },
  "披見": {
    "kana": "ひけん",
    "definition": "presentation"
  },
  "披露": {
    "kana": "ひろう",
    "definition": "Show off"
  },
  "直披": {
    "kana": "ちょくひ",
    "definition": "directly"
  },
  "比較": {
    "kana": "ひかく",
    "definition": "comparison"
  },
  "比例": {
    "kana": "ひれい",
    "definition": "proportional"
  },
  "無比": {
    "kana": "むひ",
    "definition": "matchless"
  },
  "疲労": {
    "kana": "ひろう",
    "definition": "fatigue"
  },
  "疲弊": {
    "kana": "ひへい",
    "definition": "exhaustion"
  },
  "皮膚": {
    "kana": "ひふ",
    "definition": "Skin"
  },
  "完膚": {
    "kana": "かんぷ",
    "definition": "perfect skin"
  },
  "皮相": {
    "kana": "ひそう",
    "definition": "superficial"
  },
  "樹皮": {
    "kana": "じゅひ",
    "definition": "bark"
  },
  "碑銘": {
    "kana": "ひめい",
    "definition": "inscription"
  },
  "石碑": {
    "kana": "せきひ",
    "definition": "stone monument"
  },
  "秘密": {
    "kana": "ひみつ",
    "definition": "secret"
  },
  "秘書": {
    "kana": "ひしょ",
    "definition": "secretary"
  },
  "神秘": {
    "kana": "しんぴ",
    "definition": "mystery"
  },
  "罷業": {
    "kana": "ひぎょう",
    "definition": "Strike"
  },
  "罷免": {
    "kana": "ひめん",
    "definition": "dismissal"
  },
  "肥料": {
    "kana": "ひりょう",
    "definition": "fertilizer"
  },
  "施肥": {
    "kana": "しこえ",
    "definition": "Fertilization"
  },
  "被服": {
    "kana": "ひふく",
    "definition": "clothing"
  },
  "被告": {
    "kana": "ひこく",
    "definition": "defendant"
  },
  "費用": {
    "kana": "ひよう",
    "definition": "cost"
  },
  "消費": {
    "kana": "しょうひ",
    "definition": "consumption"
  },
  "旅費": {
    "kana": "りょひ",
    "definition": "travel expenses"
  },
  "避難": {
    "kana": "ひなん",
    "definition": "evacuation"
  },
  "飛躍": {
    "kana": "ひやく",
    "definition": "Leap"
  },
  "雄飛": {
    "kana": "ゆうひ",
    "definition": "Yuhi"
  },
  "備考": {
    "kana": "びこう",
    "definition": "remarks"
  },
  "末尾": {
    "kana": "まつび",
    "definition": "end"
  },
  "美術": {
    "kana": "びじゅつ",
    "definition": "art"
  },
  "賛美": {
    "kana": "さんび",
    "definition": "praise"
  },
  "鼻音": {
    "kana": "びいん",
    "definition": "nasal"
  },
  "鼻孔": {
    "kana": "びこう",
    "definition": "nostril"
  },
  "匹夫": {
    "kana": "ひきおっと",
    "definition": "coarse man"
  },
  "馬匹": {
    "kana": "うまひき",
    "definition": "horse"
  },
  "必要": {
    "kana": "ひつよう",
    "definition": "need"
  },
  "筆墨": {
    "kana": "ふですみ",
    "definition": "ink"
  },
  "白墨": {
    "kana": "はくぼく",
    "definition": "chalk"
  },
  "遺墨": {
    "kana": "いすみ",
    "definition": "writings"
  },
  "筆記": {
    "kana": "ひっき",
    "definition": "Writing"
  },
  "毛筆": {
    "kana": "もうひつ",
    "definition": "writing brush"
  },
  "数百": {
    "kana": "すうひゃく",
    "definition": "hundreds"
  },
  "目標": {
    "kana": "もくひょう",
    "definition": "the goal"
  },
  "氷点": {
    "kana": "ひょうてん",
    "definition": "freezing point"
  },
  "氷山": {
    "kana": "ひょうざん",
    "definition": "iceberg"
  },
  "結氷": {
    "kana": "けっぴょう",
    "definition": "freezing"
  },
  "漂着": {
    "kana": "ひょうちゃく",
    "definition": "washed ashore"
  },
  "漂白": {
    "kana": "ひょうはく",
    "definition": "bleaching"
  },
  "漂流": {
    "kana": "ひょうりゅう",
    "definition": "drifting"
  },
  "票決": {
    "kana": "ひょうけつ",
    "definition": "vote"
  },
  "投票": {
    "kana": "とうひょう",
    "definition": "vote"
  },
  "伝票": {
    "kana": "でんぴょう",
    "definition": "slip"
  },
  "表彰": {
    "kana": "ひょうしょう",
    "definition": "commendation"
  },
  "代表": {
    "kana": "だいひょう",
    "definition": "representative"
  },
  "評判": {
    "kana": "ひょうばん",
    "definition": "reputation"
  },
  "定評": {
    "kana": "ていひょう",
    "definition": "reputation"
  },
  "素描": {
    "kana": "そびょう",
    "definition": "sketch"
  },
  "点描": {
    "kana": "てんびょう",
    "definition": "stippling"
  },
  "病根": {
    "kana": "びょうこん",
    "definition": "root of disease"
  },
  "看病": {
    "kana": "かんびょう",
    "definition": "Nursing"
  },
  "疾病": {
    "kana": "しっぺい",
    "definition": "disease"
  },
  "秒速": {
    "kana": "びょうそく",
    "definition": "per second"
  },
  "寸秒": {
    "kana": "すんびょう",
    "definition": "seconds"
  },
  "品評": {
    "kana": "ひんぴょう",
    "definition": "evaluation"
  },
  "貧富": {
    "kana": "ひんぷ",
    "definition": "rich and poor"
  },
  "貧弱": {
    "kana": "ひんじゃく",
    "definition": "Poor"
  },
  "清貧": {
    "kana": "せいひん",
    "definition": "poverty"
  },
  "賓客": {
    "kana": "ひんきゃく",
    "definition": "guest"
  },
  "主賓": {
    "kana": "しゅひん",
    "definition": "guest of honor"
  },
  "来賓": {
    "kana": "らいひん",
    "definition": "guest"
  },
  "頻繁": {
    "kana": "ひんぱん",
    "definition": "frequent"
  },
  "機敏": {
    "kana": "きびん",
    "definition": "agility"
  },
  "瓶詰": {
    "kana": "びんづめ",
    "definition": "bottled"
  },
  "花瓶": {
    "kana": "かびん",
    "definition": "vase"
  },
  "不朽": {
    "kana": "ふきゅう",
    "definition": "immortality"
  },
  "老朽": {
    "kana": "ろうきゅう",
    "definition": "aging"
  },
  "腐朽": {
    "kana": "ふきゅう",
    "definition": "decay"
  },
  "不当": {
    "kana": "ふとう",
    "definition": "unfair"
  },
  "不利": {
    "kana": "ふり",
    "definition": "Unfavorable"
  },
  "不眠": {
    "kana": "ふみん",
    "definition": "insomnia"
  },
  "安眠": {
    "kana": "あんみん",
    "definition": "good sleep"
  },
  "付与": {
    "kana": "ふよ",
    "definition": "assignment"
  },
  "交付": {
    "kana": "こうふ",
    "definition": "delivery"
  },
  "給付": {
    "kana": "きゅうふ",
    "definition": "benefits"
  },
  "農夫": {
    "kana": "のうふ",
    "definition": "farmer"
  },
  "凡夫": {
    "kana": "ぼんおっと",
    "definition": "ordinary man"
  },
  "夫婦": {
    "kana": "ふうふ",
    "definition": "couple"
  },
  "工夫": {
    "kana": "くふう",
    "definition": "Ingenuity"
  },
  "主婦": {
    "kana": "しゅふ",
    "definition": "housewife"
  },
  "富強": {
    "kana": "ふきょう",
    "definition": "rich and strong"
  },
  "富裕": {
    "kana": "ふゆう",
    "definition": "Wealth"
  },
  "富貴": {
    "kana": "とみたかし",
    "definition": "Wealth"
  },
  "布陣": {
    "kana": "ふじん",
    "definition": "lineup"
  },
  "綿布": {
    "kana": "めんぷ",
    "definition": "cotton cloth"
  },
  "府県": {
    "kana": "ふけん",
    "definition": "Prefecture"
  },
  "首府": {
    "kana": "しゅふ",
    "definition": "capital"
  },
  "政府": {
    "kana": "せいふ",
    "definition": "government"
  },
  "扶助": {
    "kana": "ふじょ",
    "definition": "assistance"
  },
  "扶養": {
    "kana": "ふよう",
    "definition": "support"
  },
  "扶育": {
    "kana": "ふいく",
    "definition": "support"
  },
  "敷設": {
    "kana": "ふせつ",
    "definition": "Laying"
  },
  "普遍": {
    "kana": "ふへん",
    "definition": "Universal"
  },
  "浮薄": {
    "kana": "ふはく",
    "definition": "frivolity"
  },
  "父母": {
    "kana": "ふぼ",
    "definition": "parents"
  },
  "符号": {
    "kana": "ふごう",
    "definition": "sign"
  },
  "切符": {
    "kana": "きっぷ",
    "definition": "ticket"
  },
  "音符": {
    "kana": "おんぷ",
    "definition": "note"
  },
  "腐心": {
    "kana": "ふしん",
    "definition": "care"
  },
  "陳腐": {
    "kana": "ちんぷ",
    "definition": "banal"
  },
  "勝負": {
    "kana": "しょうぶ",
    "definition": "game"
  },
  "賦役": {
    "kana": "ふやく",
    "definition": "levy"
  },
  "月賦": {
    "kana": "げっぷ",
    "definition": "monthly installment"
  },
  "天賦": {
    "kana": "てんぷ",
    "definition": "talent"
  },
  "赴任": {
    "kana": "ふにん",
    "definition": "Assignment"
  },
  "附属": {
    "kana": "ふぞく",
    "definition": "attached"
  },
  "寄附": {
    "kana": "よりふ",
    "definition": "donation"
  },
  "侮辱": {
    "kana": "ぶじょく",
    "definition": "insult"
  },
  "軽侮": {
    "kana": "けいぶ",
    "definition": "contempt"
  },
  "舞踏": {
    "kana": "ぶとう",
    "definition": "Butoh"
  },
  "舞踊": {
    "kana": "ぶよう",
    "definition": "dance"
  },
  "封書": {
    "kana": "ふうしょ",
    "definition": "sealed letter"
  },
  "密封": {
    "kana": "みっぷう",
    "definition": "sealing"
  },
  "封筒": {
    "kana": "ふうとう",
    "definition": "envelope"
  },
  "郵袋": {
    "kana": "ゆうたい",
    "definition": "mail bag"
  },
  "伏線": {
    "kana": "ふくせん",
    "definition": "Foreshadowing"
  },
  "起伏": {
    "kana": "きふく",
    "definition": "ups and downs"
  },
  "潜伏": {
    "kana": "せんぷく",
    "definition": "hiding"
  },
  "副業": {
    "kana": "ふくぎょう",
    "definition": "Side job"
  },
  "正副": {
    "kana": "せいふく",
    "definition": "primary and secondary"
  },
  "復活": {
    "kana": "ふっかつ",
    "definition": "revival"
  },
  "報復": {
    "kana": "ほうふく",
    "definition": "Retaliation"
  },
  "幅員": {
    "kana": "ふくいん",
    "definition": "Width"
  },
  "振幅": {
    "kana": "しんぷく",
    "definition": "amplitude"
  },
  "全幅": {
    "kana": "ぜんぷく",
    "definition": "Width"
  },
  "洋服": {
    "kana": "ようふく",
    "definition": "clothes"
  },
  "福祉": {
    "kana": "ふくし",
    "definition": "welfare"
  },
  "福徳": {
    "kana": "ふくとく",
    "definition": "good fortune"
  },
  "腹案": {
    "kana": "ふくあん",
    "definition": "draft plan"
  },
  "空腹": {
    "kana": "くうふく",
    "definition": "Hunger"
  },
  "山腹": {
    "kana": "さんぷく",
    "definition": "mountainside"
  },
  "複数": {
    "kana": "ふくすう",
    "definition": "multiple"
  },
  "複雑": {
    "kana": "ふくざつ",
    "definition": "complicated"
  },
  "重複": {
    "kana": "ちょうふく",
    "definition": "duplication"
  },
  "転覆": {
    "kana": "てんぷく",
    "definition": "capsize"
  },
  "払暁": {
    "kana": "ふつぎょう",
    "definition": "dawn"
  },
  "払底": {
    "kana": "ふってい",
    "definition": "bottom out"
  },
  "沸点": {
    "kana": "ふってん",
    "definition": "boiling point"
  },
  "仏事": {
    "kana": "ぶつじ",
    "definition": "Buddhist memorial service"
  },
  "仏像": {
    "kana": "ぶつぞう",
    "definition": "Buddha statue"
  },
  "念仏": {
    "kana": "ねんぶつ",
    "definition": "nembutsu"
  },
  "物質": {
    "kana": "ぶっしつ",
    "definition": "material"
  },
  "食物": {
    "kana": "たべもの",
    "definition": "food"
  },
  "進物": {
    "kana": "しんもつ",
    "definition": "gifts"
  },
  "禁物": {
    "kana": "きんもつ",
    "definition": "forbidden"
  },
  "噴火": {
    "kana": "ふんか",
    "definition": "eruption"
  },
  "墳墓": {
    "kana": "ふんぼ",
    "definition": "tomb"
  },
  "古墳": {
    "kana": "こふん",
    "definition": "ancient tomb"
  },
  "義憤": {
    "kana": "ぎふん",
    "definition": "righteous indignation"
  },
  "興奮": {
    "kana": "こうふん",
    "definition": "excitement"
  },
  "粉末": {
    "kana": "ふんまつ",
    "definition": "powder"
  },
  "粉飾": {
    "kana": "ふんしょく",
    "definition": "embellishment"
  },
  "紛失": {
    "kana": "ふんしつ",
    "definition": "loss"
  },
  "丙種": {
    "kana": "ひのえたね",
    "definition": "Type C"
  },
  "併合": {
    "kana": "へいごう",
    "definition": "annexation"
  },
  "併用": {
    "kana": "へいよう",
    "definition": "combined use"
  },
  "兵器": {
    "kana": "へいき",
    "definition": "weapons"
  },
  "兵隊": {
    "kana": "へいたい",
    "definition": "soldiers"
  },
  "兵糧": {
    "kana": "ひょうろう",
    "definition": "provisions"
  },
  "板塀": {
    "kana": "いたべい",
    "definition": "wooden fence"
  },
  "平和": {
    "kana": "へいわ",
    "definition": "peace"
  },
  "弊害": {
    "kana": "へいがい",
    "definition": "Harm"
  },
  "旧弊": {
    "kana": "きゅうへい",
    "definition": "old school"
  },
  "並木": {
    "kana": "なみき",
    "definition": "row of trees"
  },
  "閉店": {
    "kana": "へいてん",
    "definition": "closed"
  },
  "閉口": {
    "kana": "へいこう",
    "definition": "annoyance"
  },
  "密閉": {
    "kana": "みっぺい",
    "definition": "airtight"
  },
  "米価": {
    "kana": "べいか",
    "definition": "rice price"
  },
  "米食": {
    "kana": "べいしょく",
    "definition": "rice meal"
  },
  "新米": {
    "kana": "しんまい",
    "definition": "novice"
  },
  "白米": {
    "kana": "はくまい",
    "definition": "white rice"
  },
  "壁画": {
    "kana": "へきが",
    "definition": "mural"
  },
  "別離": {
    "kana": "べつり",
    "definition": "separation"
  },
  "特別": {
    "kana": "とくべつ",
    "definition": "special"
  },
  "偏向": {
    "kana": "へんこう",
    "definition": "deflection"
  },
  "偏見": {
    "kana": "へんけん",
    "definition": "prejudice"
  },
  "偏食": {
    "kana": "へんしょく",
    "definition": "unbalanced diet"
  },
  "変化": {
    "kana": "へんか",
    "definition": "change"
  },
  "異変": {
    "kana": "いへん",
    "definition": "Incident"
  },
  "編集": {
    "kana": "へんしゅう",
    "definition": "edit"
  },
  "編成": {
    "kana": "へんせい",
    "definition": "Organization"
  },
  "長編": {
    "kana": "ちょうへん",
    "definition": "feature film"
  },
  "辺境": {
    "kana": "へんきょう",
    "definition": "frontier"
  },
  "周辺": {
    "kana": "しゅうへん",
    "definition": "neighborhood"
  },
  "海辺": {
    "kana": "うみべ",
    "definition": "seaside"
  },
  "岸辺": {
    "kana": "きしべ",
    "definition": "shore"
  },
  "返却": {
    "kana": "へんきゃく",
    "definition": "return"
  },
  "返事": {
    "kana": "へんじ",
    "definition": "reply"
  },
  "返礼": {
    "kana": "へんれい",
    "definition": "reciprocation"
  },
  "返済": {
    "kana": "へんさい",
    "definition": "pay back debt"
  },
  "救済": {
    "kana": "きゅうさい",
    "definition": "relief"
  },
  "便利": {
    "kana": "べんり",
    "definition": "convenience"
  },
  "簡便": {
    "kana": "かんべん",
    "definition": "convenience"
  },
  "便乗": {
    "kana": "びんじょう",
    "definition": "piggyback"
  },
  "郵便": {
    "kana": "ゆうびん",
    "definition": "Post"
  },
  "勉学": {
    "kana": "べんがく",
    "definition": "study"
  },
  "雄弁": {
    "kana": "ゆうべん",
    "definition": "eloquence"
  },
  "担保": {
    "kana": "たんぽ",
    "definition": "collateral"
  },
  "舗装": {
    "kana": "ほそう",
    "definition": "pavement"
  },
  "捕虜": {
    "kana": "ほりょ",
    "definition": "prisoner of war"
  },
  "歩道": {
    "kana": "ほどう",
    "definition": "sidewalk"
  },
  "進歩": {
    "kana": "しんぽ",
    "definition": "progress"
  },
  "歩合": {
    "kana": "ぶあい",
    "definition": "commission"
  },
  "穂状": {
    "kana": "すいじょう",
    "definition": "Spike"
  },
  "募金": {
    "kana": "ぼきん",
    "definition": "fund-raising"
  },
  "募集": {
    "kana": "ぼしゅう",
    "definition": "Recruitment"
  },
  "応募": {
    "kana": "おうぼ",
    "definition": "application"
  },
  "墓参": {
    "kana": "ぼさん",
    "definition": "visiting a grave"
  },
  "慕情": {
    "kana": "ぼじょう",
    "definition": "affection"
  },
  "敬慕": {
    "kana": "けいぼ",
    "definition": "adoration"
  },
  "思慕": {
    "kana": "しぼ",
    "definition": "admiration"
  },
  "暮春": {
    "kana": "くれはる",
    "definition": "late spring"
  },
  "薄暮": {
    "kana": "はくぼ",
    "definition": "twilight"
  },
  "母性": {
    "kana": "ぼせい",
    "definition": "maternal"
  },
  "祖母": {
    "kana": "そぼ",
    "definition": "grandmother"
  },
  "簿記": {
    "kana": "ぼき",
    "definition": "bookkeeping"
  },
  "俸給": {
    "kana": "ほうきゅう",
    "definition": "salary"
  },
  "報酬": {
    "kana": "ほうしゅう",
    "definition": "reward"
  },
  "応酬": {
    "kana": "おうしゅう",
    "definition": "reciprocation"
  },
  "奉納": {
    "kana": "ほうのう",
    "definition": "dedication"
  },
  "奉仕": {
    "kana": "ほうし",
    "definition": "service"
  },
  "信奉": {
    "kana": "しんぽう",
    "definition": "worship"
  },
  "国宝": {
    "kana": "こくほう",
    "definition": "national treasure"
  },
  "財宝": {
    "kana": "ざいほう",
    "definition": "treasure"
  },
  "崩壊": {
    "kana": "ほうかい",
    "definition": "collapse"
  },
  "抱負": {
    "kana": "ほうふ",
    "definition": "resolution"
  },
  "抱懐": {
    "kana": "ほうふところ",
    "definition": "embrace"
  },
  "介抱": {
    "kana": "かいほう",
    "definition": "taking care of"
  },
  "鉄棒": {
    "kana": "てつぼう",
    "definition": "horizontal bar"
  },
  "方角": {
    "kana": "ほうがく",
    "definition": "direction"
  },
  "陸曹": {
    "kana": "りくそう",
    "definition": "sergeant"
  },
  "鉄則": {
    "kana": "てっそく",
    "definition": "iron rule"
  },
  "変則": {
    "kana": "へんそく",
    "definition": "anomaly"
  },
  "砲撃": {
    "kana": "ほうげき",
    "definition": "bombardment"
  },
  "鉄砲": {
    "kana": "てっぽう",
    "definition": "gun"
  },
  "縫合": {
    "kana": "ほうごう",
    "definition": "suture"
  },
  "縫製": {
    "kana": "ほうせい",
    "definition": "Sewing"
  },
  "同胞": {
    "kana": "どうほう",
    "definition": "compatriot"
  },
  "細胞": {
    "kana": "さいぼう",
    "definition": "cell"
  },
  "芳香": {
    "kana": "ほうこう",
    "definition": "fragrance"
  },
  "芳紀": {
    "kana": "ほうき",
    "definition": "age"
  },
  "芳志": {
    "kana": "ほうし",
    "definition": "Yoshi"
  },
  "褒章": {
    "kana": "ほうしょう",
    "definition": "reward"
  },
  "褒美": {
    "kana": "ほうび",
    "definition": "reward"
  },
  "過褒": {
    "kana": "かほう",
    "definition": "exaggerated reward"
  },
  "訪問": {
    "kana": "ほうもん",
    "definition": "visit"
  },
  "来訪": {
    "kana": "らいほう",
    "definition": "visit"
  },
  "豊満": {
    "kana": "ほうまん",
    "definition": "voluptuous"
  },
  "豊富": {
    "kana": "ほうふ",
    "definition": "abundance"
  },
  "邦楽": {
    "kana": "ほうがく",
    "definition": "Japanese music"
  },
  "連邦": {
    "kana": "れんぽう",
    "definition": "Commonwealth"
  },
  "飽和": {
    "kana": "ほうわ",
    "definition": "saturation"
  },
  "飽食": {
    "kana": "ほうしょく",
    "definition": "gluttony"
  },
  "亡父": {
    "kana": "ぼうふ",
    "definition": "late father"
  },
  "亡命": {
    "kana": "ぼうめい",
    "definition": "exile"
  },
  "存亡": {
    "kana": "そんぼう",
    "definition": "life and death"
  },
  "亡者": {
    "kana": "もうじゃ",
    "definition": "the dead"
  },
  "傍線": {
    "kana": "ぼうせん",
    "definition": "sideline"
  },
  "路傍": {
    "kana": "ろぼう",
    "definition": "roadside"
  },
  "妨害": {
    "kana": "ぼうがい",
    "definition": "sabotage"
  },
  "脱帽": {
    "kana": "だつぼう",
    "definition": "hat off"
  },
  "無帽": {
    "kana": "むぼう",
    "definition": "no hat"
  },
  "忘却": {
    "kana": "ぼうきゃく",
    "definition": "oblivion"
  },
  "備忘": {
    "kana": "びぼう",
    "definition": "Memorandum"
  },
  "忙殺": {
    "kana": "ぼうさつ",
    "definition": "rush"
  },
  "多忙": {
    "kana": "たぼう",
    "definition": "busy"
  },
  "繁忙": {
    "kana": "はんぼう",
    "definition": "Busy"
  },
  "暴言": {
    "kana": "ぼうげん",
    "definition": "abusive language"
  },
  "横暴": {
    "kana": "おうぼう",
    "definition": "domineering"
  },
  "乱暴": {
    "kana": "らんぼう",
    "definition": "violence"
  },
  "暴露": {
    "kana": "ばくろ",
    "definition": "exposure"
  },
  "望郷": {
    "kana": "ぼうきょう",
    "definition": "nostalgia"
  },
  "所望": {
    "kana": "しょもう",
    "definition": "desired"
  },
  "某国": {
    "kana": "ぼうこく",
    "definition": "certain country"
  },
  "某所": {
    "kana": "ぼうしょ",
    "definition": "Somewhere"
  },
  "冒険": {
    "kana": "ぼうけん",
    "definition": "adventure"
  },
  "冒頭": {
    "kana": "ぼうとう",
    "definition": "beginning"
  },
  "感冒": {
    "kana": "かんぼう",
    "definition": "cold"
  },
  "紡錘": {
    "kana": "ぼうすい",
    "definition": "spindle"
  },
  "紡績": {
    "kana": "ぼうせき",
    "definition": "spinning"
  },
  "混紡": {
    "kana": "こんぼう",
    "definition": "Blend"
  },
  "成績": {
    "kana": "せいせき",
    "definition": "Grades"
  },
  "膨脹": {
    "kana": "ぼうちょう",
    "definition": "expansion"
  },
  "謀略": {
    "kana": "ぼうりゃく",
    "definition": "conspiracy"
  },
  "無謀": {
    "kana": "むぼう",
    "definition": "reckless"
  },
  "防備": {
    "kana": "ぼうび",
    "definition": "Defense"
  },
  "予防": {
    "kana": "よぼう",
    "definition": "prevention"
  },
  "北進": {
    "kana": "きたすすむ",
    "definition": "going north"
  },
  "北方": {
    "kana": "ほっぽう",
    "definition": "north"
  },
  "公僕": {
    "kana": "こうぼく",
    "definition": "public servant"
  },
  "撲殺": {
    "kana": "ぼくさつ",
    "definition": "bludgeoning"
  },
  "撲滅": {
    "kana": "ぼくめつ",
    "definition": "eradication"
  },
  "打撲": {
    "kana": "だぼく",
    "definition": "Bruise"
  },
  "牧場": {
    "kana": "ぼくじょう",
    "definition": "Ranch"
  },
  "牧師": {
    "kana": "ぼくし",
    "definition": "Pastor"
  },
  "遊牧": {
    "kana": "ゆうぼく",
    "definition": "nomadism"
  },
  "没収": {
    "kana": "ぼっしゅう",
    "definition": "confiscation"
  },
  "奔走": {
    "kana": "ほんそう",
    "definition": "scramble"
  },
  "奔放": {
    "kana": "ほんぽう",
    "definition": "wild"
  },
  "翻訳": {
    "kana": "ほんやく",
    "definition": "translation"
  },
  "翻刻": {
    "kana": "ほんこく",
    "definition": "Reprint"
  },
  "凡百": {
    "kana": "ぼんひゃく",
    "definition": "mediocre"
  },
  "平凡": {
    "kana": "へいぼん",
    "definition": "mediocre"
  },
  "凡例": {
    "kana": "はんれい",
    "definition": "Usage Guide"
  },
  "凡庸": {
    "kana": "ぼんよう",
    "definition": "mediocre"
  },
  "中庸": {
    "kana": "ちゅうよう",
    "definition": "moderation"
  },
  "旧盆": {
    "kana": "きゅうぼん",
    "definition": "old tray"
  },
  "悪魔": {
    "kana": "あくま",
    "definition": "devil"
  },
  "邪魔": {
    "kana": "じゃま",
    "definition": "obstacle"
  },
  "麻薬": {
    "kana": "まやく",
    "definition": "drug"
  },
  "埋没": {
    "kana": "まいぼつ",
    "definition": "burial"
  },
  "埋蔵": {
    "kana": "まいぞう",
    "definition": "reserve"
  },
  "枚数": {
    "kana": "まいすう",
    "definition": "Number of sheets"
  },
  "枚挙": {
    "kana": "まいきょ",
    "definition": "Enumeration"
  },
  "毎々": {
    "kana": "まいまい",
    "definition": "every time"
  },
  "天幕": {
    "kana": "てんまく",
    "definition": "tent"
  },
  "暗幕": {
    "kana": "あんまく",
    "definition": "blackout curtain"
  },
  "幕府": {
    "kana": "ばくふ",
    "definition": "Shogunate"
  },
  "幕末": {
    "kana": "ばくまつ",
    "definition": "Bakumatsu"
  },
  "幕僚": {
    "kana": "ばくりょう",
    "definition": "staff"
  },
  "膜質": {
    "kana": "まくしつ",
    "definition": "film quality"
  },
  "鼓膜": {
    "kana": "こまく",
    "definition": "eardrum"
  },
  "粘膜": {
    "kana": "ねんまく",
    "definition": "mucous membrane"
  },
  "抹殺": {
    "kana": "まっさつ",
    "definition": "erasure"
  },
  "抹消": {
    "kana": "まっしょう",
    "definition": "erasure"
  },
  "末代": {
    "kana": "まつだい",
    "definition": "last generation"
  },
  "末弟": {
    "kana": "まつおとうと",
    "definition": "youngest brother"
  },
  "繭糸": {
    "kana": "まゆいと",
    "definition": "cocoon thread"
  },
  "万国": {
    "kana": "ばんこく",
    "definition": "all countries"
  },
  "万端": {
    "kana": "ばんたん",
    "definition": "everything"
  },
  "万全": {
    "kana": "ばんぜん",
    "definition": "perfect"
  },
  "慢性": {
    "kana": "まんせい",
    "definition": "Chronic"
  },
  "自慢": {
    "kana": "じまん",
    "definition": "bragging"
  },
  "満員": {
    "kana": "まんいん",
    "definition": "full house"
  },
  "定員": {
    "kana": "ていいん",
    "definition": "Capacity"
  },
  "社員": {
    "kana": "しゃいん",
    "definition": "employee"
  },
  "満月": {
    "kana": "まんげつ",
    "definition": "full moon"
  },
  "満足": {
    "kana": "まんぞく",
    "definition": "satisfaction"
  },
  "充満": {
    "kana": "じゅうまん",
    "definition": "Charge"
  },
  "漫画": {
    "kana": "まんが",
    "definition": "comics"
  },
  "漫歩": {
    "kana": "まんぽ",
    "definition": "walk"
  },
  "散漫": {
    "kana": "さんまん",
    "definition": "Distraction"
  },
  "味覚": {
    "kana": "みかく",
    "definition": "taste"
  },
  "未来": {
    "kana": "みらい",
    "definition": "future"
  },
  "未満": {
    "kana": "みまん",
    "definition": "less than"
  },
  "魅惑": {
    "kana": "みわく",
    "definition": "fascination"
  },
  "密約": {
    "kana": "みつやく",
    "definition": "secret agreement"
  },
  "厳密": {
    "kana": "げんみつ",
    "definition": "strict"
  },
  "脈絡": {
    "kana": "みゃくらく",
    "definition": "context"
  },
  "動脈": {
    "kana": "どうみゃく",
    "definition": "artery"
  },
  "妙案": {
    "kana": "みょうあん",
    "definition": "clever idea"
  },
  "奇妙": {
    "kana": "きみょう",
    "definition": "strange"
  },
  "国民": {
    "kana": "こくみん",
    "definition": "the people"
  },
  "夢中": {
    "kana": "むちゅう",
    "definition": "obsessed"
  },
  "悪夢": {
    "kana": "あくむ",
    "definition": "nightmare"
  },
  "無理": {
    "kana": "むり",
    "definition": "unreasonableness"
  },
  "無礼": {
    "kana": "ぶれい",
    "definition": "rude"
  },
  "矛盾": {
    "kana": "むじゅん",
    "definition": "Contradiction"
  },
  "霧笛": {
    "kana": "むてき",
    "definition": "foghorn"
  },
  "濃霧": {
    "kana": "のうむ",
    "definition": "dense fog"
  },
  "栄誉": {
    "kana": "えいよ",
    "definition": "honor"
  },
  "命令": {
    "kana": "めいれい",
    "definition": "order"
  },
  "迷路": {
    "kana": "めいろ",
    "definition": "maze"
  },
  "迷惑": {
    "kana": "めいわく",
    "definition": "bothersome"
  },
  "低迷": {
    "kana": "ていめい",
    "definition": "stagnation"
  },
  "銘柄": {
    "kana": "めいがら",
    "definition": "Brand"
  },
  "鳴動": {
    "kana": "めいどう",
    "definition": "Rumbling"
  },
  "悲鳴": {
    "kana": "ひめい",
    "definition": "scream"
  },
  "雷鳴": {
    "kana": "らいめい",
    "definition": "thunder"
  },
  "滅亡": {
    "kana": "めつぼう",
    "definition": "extinction"
  },
  "絶滅": {
    "kana": "ぜつめつ",
    "definition": "extinction"
  },
  "免許": {
    "kana": "めんきょ",
    "definition": "driver licence"
  },
  "免除": {
    "kana": "めんじょ",
    "definition": "Exemption"
  },
  "放免": {
    "kana": "ほうめん",
    "definition": "release"
  },
  "綿糸": {
    "kana": "めんし",
    "definition": "cotton thread"
  },
  "製糸": {
    "kana": "せいし",
    "definition": "spinning"
  },
  "綿密": {
    "kana": "めんみつ",
    "definition": "meticulous"
  },
  "純綿": {
    "kana": "じゅんめん",
    "definition": "pure cotton"
  },
  "模倣": {
    "kana": "もほう",
    "definition": "imitation"
  },
  "規模": {
    "kana": "きぼ",
    "definition": "scale"
  },
  "妄信": {
    "kana": "もうしん",
    "definition": "false belief"
  },
  "妄想": {
    "kana": "もうそう",
    "definition": "Delusion"
  },
  "迷妄": {
    "kana": "めいもう",
    "definition": "Delusion"
  },
  "妄言": {
    "kana": "もうげん",
    "definition": "nonsense"
  },
  "毛髪": {
    "kana": "もうはつ",
    "definition": "hair"
  },
  "不毛": {
    "kana": "ふもう",
    "definition": "barren"
  },
  "猛烈": {
    "kana": "もうれつ",
    "definition": "fierce"
  },
  "勇猛": {
    "kana": "ゆうもう",
    "definition": "Bravery"
  },
  "盲点": {
    "kana": "もうてん",
    "definition": "blind spot"
  },
  "盲従": {
    "kana": "もうじゅう",
    "definition": "blind obedience"
  },
  "網膜": {
    "kana": "もうまく",
    "definition": "retina"
  },
  "漁網": {
    "kana": "りょうあみ",
    "definition": "fishing net"
  },
  "木石": {
    "kana": "ぼくせき",
    "definition": "wood stone"
  },
  "木造": {
    "kana": "もくぞう",
    "definition": "wooden"
  },
  "暗黙": {
    "kana": "あんもく",
    "definition": "implicit"
  },
  "目前": {
    "kana": "もくぜん",
    "definition": "in front of you"
  },
  "戻入": {
    "kana": "れいにゅう",
    "definition": "return"
  },
  "返戻": {
    "kana": "へんれい",
    "definition": "return"
  },
  "紋章": {
    "kana": "もんしょう",
    "definition": "coat of arms"
  },
  "指紋": {
    "kana": "しもん",
    "definition": "fingerprint"
  },
  "波紋": {
    "kana": "はもん",
    "definition": "ripples"
  },
  "門戸": {
    "kana": "もんこ",
    "definition": "door"
  },
  "門閥": {
    "kana": "もんばつ",
    "definition": "clan"
  },
  "財閥": {
    "kana": "ざいばつ",
    "definition": "zaibatsu"
  },
  "派閥": {
    "kana": "はばつ",
    "definition": "faction"
  },
  "夜半": {
    "kana": "やはん",
    "definition": "midnight"
  },
  "野猿": {
    "kana": "のざる",
    "definition": "wild monkey"
  },
  "野性": {
    "kana": "やせい",
    "definition": "wild"
  },
  "災厄": {
    "kana": "さいやく",
    "definition": "calamity"
  },
  "役所": {
    "kana": "やくしょ",
    "definition": "Government office"
  },
  "役目": {
    "kana": "やくめ",
    "definition": "role"
  },
  "荷役": {
    "kana": "かやく",
    "definition": "cargo handling"
  },
  "役務": {
    "kana": "えきむ",
    "definition": "Service"
  },
  "兵役": {
    "kana": "へいえき",
    "definition": "military service"
  },
  "薬剤": {
    "kana": "やくざい",
    "definition": "drug"
  },
  "薬局": {
    "kana": "やっきょく",
    "definition": "pharmacy"
  },
  "火薬": {
    "kana": "かやく",
    "definition": "gunpowder"
  },
  "通訳": {
    "kana": "つうやく",
    "definition": "interpretation"
  },
  "躍動": {
    "kana": "やくどう",
    "definition": "dynamism"
  },
  "躍起": {
    "kana": "やっき",
    "definition": "rushing"
  },
  "愉快": {
    "kana": "ゆかい",
    "definition": "Pleasure"
  },
  "愉悦": {
    "kana": "ゆえつ",
    "definition": "pleasure"
  },
  "油井": {
    "kana": "ゆい",
    "definition": "oil well"
  },
  "市井": {
    "kana": "しせい",
    "definition": "public"
  },
  "天井": {
    "kana": "てんじょう",
    "definition": "ceiling"
  },
  "石油": {
    "kana": "せきゆ",
    "definition": "oil"
  },
  "癒着": {
    "kana": "ゆちゃく",
    "definition": "adhesion"
  },
  "治癒": {
    "kana": "ちゆ",
    "definition": "healing"
  },
  "平癒": {
    "kana": "へいゆ",
    "definition": "recovery"
  },
  "諭旨": {
    "kana": "ゆし",
    "definition": "admonition"
  },
  "教諭": {
    "kana": "きょうゆ",
    "definition": "teacher"
  },
  "説諭": {
    "kana": "せつゆ",
    "definition": "preaching"
  },
  "輸送": {
    "kana": "ゆそう",
    "definition": "shipping"
  },
  "運輸": {
    "kana": "うんゆ",
    "definition": "transportation"
  },
  "優柔": {
    "kana": "ゆうじゅう",
    "definition": "indecisiveness"
  },
  "武勇": {
    "kana": "ぶゆう",
    "definition": "valor"
  },
  "友好": {
    "kana": "ゆうこう",
    "definition": "friendship"
  },
  "友情": {
    "kana": "ゆうじょう",
    "definition": "friendship"
  },
  "幽境": {
    "kana": "ゆうさかい",
    "definition": "secluded place"
  },
  "幽霊": {
    "kana": "ゆうれい",
    "definition": "ghost"
  },
  "幽谷": {
    "kana": "ゆうこく",
    "definition": "ghost valley"
  },
  "悠然": {
    "kana": "ゆうぜん",
    "definition": "Leisurely"
  },
  "悠長": {
    "kana": "ゆうちょう",
    "definition": "leisurely"
  },
  "悠々": {
    "kana": "ゆう",
    "definition": "Leisurely"
  },
  "憂慮": {
    "kana": "ゆうりょ",
    "definition": "concern"
  },
  "有益": {
    "kana": "ゆうえき",
    "definition": "beneficial"
  },
  "所有": {
    "kana": "しょゆう",
    "definition": "possession"
  },
  "特有": {
    "kana": "とくゆう",
    "definition": "peculiar"
  },
  "有無": {
    "kana": "うむ",
    "definition": "presence or absence"
  },
  "利益": {
    "kana": "りえき",
    "definition": "profit"
  },
  "猶予": {
    "kana": "ゆうよ",
    "definition": "Grace"
  },
  "由来": {
    "kana": "ゆらい",
    "definition": "Origin"
  },
  "経由": {
    "kana": "けいゆ",
    "definition": "via"
  },
  "理由": {
    "kana": "りゆう",
    "definition": "reason"
  },
  "事由": {
    "kana": "じゆう",
    "definition": "reason"
  },
  "裕福": {
    "kana": "ゆうふく",
    "definition": "Wealth"
  },
  "余裕": {
    "kana": "よゆう",
    "definition": "room"
  },
  "誘致": {
    "kana": "ゆうち",
    "definition": "attract"
  },
  "合致": {
    "kana": "がっち",
    "definition": "match"
  },
  "誘惑": {
    "kana": "ゆうわく",
    "definition": "temptation"
  },
  "遊離": {
    "kana": "ゆうり",
    "definition": "release"
  },
  "交遊": {
    "kana": "こうゆう",
    "definition": "companionship"
  },
  "遊山": {
    "kana": "ゆうやま",
    "definition": "hiking"
  },
  "郵送": {
    "kana": "ゆうそう",
    "definition": "mail"
  },
  "郵券": {
    "kana": "ゆうけん",
    "definition": "postage"
  },
  "融解": {
    "kana": "ゆうかい",
    "definition": "melting"
  },
  "融和": {
    "kana": "ゆうわ",
    "definition": "reconciliation"
  },
  "金融": {
    "kana": "きんゆう",
    "definition": "Finance"
  },
  "予定": {
    "kana": "よてい",
    "definition": "schedule"
  },
  "予備": {
    "kana": "よび",
    "definition": "spare"
  },
  "余暇": {
    "kana": "よか",
    "definition": "Leisure"
  },
  "休暇": {
    "kana": "きゅうか",
    "definition": "holiday"
  },
  "残余": {
    "kana": "ざんよ",
    "definition": "residue"
  },
  "与党": {
    "kana": "よとう",
    "definition": "ruling party"
  },
  "関与": {
    "kana": "かんよ",
    "definition": "involvement"
  },
  "預金": {
    "kana": "よきん",
    "definition": "deposit"
  },
  "預託": {
    "kana": "よたく",
    "definition": "escrow"
  },
  "容器": {
    "kana": "ようき",
    "definition": "container"
  },
  "形容": {
    "kana": "けいよう",
    "definition": "adjective"
  },
  "擁護": {
    "kana": "ようご",
    "definition": "advocacy"
  },
  "擁立": {
    "kana": "ようりつ",
    "definition": "support"
  },
  "抱擁": {
    "kana": "ほうよう",
    "definition": "hug"
  },
  "様式": {
    "kana": "ようしき",
    "definition": "style"
  },
  "模様": {
    "kana": "もよう",
    "definition": "pattern"
  },
  "洋楽": {
    "kana": "ようがく",
    "definition": "Western music"
  },
  "海洋": {
    "kana": "かいよう",
    "definition": "ocean"
  },
  "溶解": {
    "kana": "ようかい",
    "definition": "dissolution"
  },
  "溶液": {
    "kana": "ようえき",
    "definition": "solution"
  },
  "使用": {
    "kana": "しよう",
    "definition": "use"
  },
  "窯業": {
    "kana": "ようぎょう",
    "definition": "ceramic industry"
  },
  "羊毛": {
    "kana": "ようもう",
    "definition": "wool"
  },
  "綿羊": {
    "kana": "めんよう",
    "definition": "cotton sheep"
  },
  "牧羊": {
    "kana": "まきひつじ",
    "definition": "sheep farming"
  },
  "落葉": {
    "kana": "おちば",
    "definition": "defoliation"
  },
  "要旨": {
    "kana": "ようし",
    "definition": "gist"
  },
  "趣旨": {
    "kana": "しゅし",
    "definition": "Effect"
  },
  "要点": {
    "kana": "ようてん",
    "definition": "main point"
  },
  "重要": {
    "kana": "じゅうよう",
    "definition": "important"
  },
  "謡曲": {
    "kana": "ようきょく",
    "definition": "Noh song"
  },
  "民謡": {
    "kana": "みんよう",
    "definition": "folk song"
  },
  "歌謡": {
    "kana": "かよう",
    "definition": "Song"
  },
  "陽光": {
    "kana": "ようこう",
    "definition": "sunlight"
  },
  "陰陽": {
    "kana": "いんよう",
    "definition": "yin and yang"
  },
  "養育": {
    "kana": "よういく",
    "definition": "upbringing"
  },
  "休養": {
    "kana": "きゅうよう",
    "definition": "rest"
  },
  "養豚": {
    "kana": "ようとん",
    "definition": "pig farming"
  },
  "抑圧": {
    "kana": "よくあつ",
    "definition": "suppression"
  },
  "抑制": {
    "kana": "よくせい",
    "definition": "Suppression"
  },
  "欲望": {
    "kana": "よくぼう",
    "definition": "desire"
  },
  "食欲": {
    "kana": "しょくよく",
    "definition": "appetite"
  },
  "無欲": {
    "kana": "むよく",
    "definition": "unselfish"
  },
  "浴場": {
    "kana": "よくじょう",
    "definition": "bathhouse"
  },
  "翌春": {
    "kana": "よくしゅん",
    "definition": "next spring"
  },
  "羅列": {
    "kana": "られつ",
    "definition": "listing"
  },
  "網羅": {
    "kana": "もうら",
    "definition": "cover"
  },
  "裸身": {
    "kana": "らしん",
    "definition": "naked body"
  },
  "裸体": {
    "kana": "らたい",
    "definition": "nudity"
  },
  "来歴": {
    "kana": "らいれき",
    "definition": "history"
  },
  "雷雨": {
    "kana": "らいう",
    "definition": "thunderstorm"
  },
  "魚雷": {
    "kana": "ぎょらい",
    "definition": "torpedo"
  },
  "落語": {
    "kana": "らくご",
    "definition": "rakugo"
  },
  "集落": {
    "kana": "しゅうらく",
    "definition": "Village"
  },
  "乱戦": {
    "kana": "らんせん",
    "definition": "melee"
  },
  "混乱": {
    "kana": "こんらん",
    "definition": "confusion"
  },
  "反乱": {
    "kana": "はんらん",
    "definition": "rebellion"
  },
  "産卵": {
    "kana": "さんらん",
    "definition": "laying eggs"
  },
  "欄干": {
    "kana": "らんかん",
    "definition": "balustrade"
  },
  "空欄": {
    "kana": "くうらん",
    "definition": "empty field"
  },
  "濫伐": {
    "kana": "らんばつ",
    "definition": "reckless deforestation"
  },
  "濫費": {
    "kana": "らんぴ",
    "definition": "overspending"
  },
  "濫用": {
    "kana": "らんよう",
    "definition": "abuse"
  },
  "勝利": {
    "kana": "しょうり",
    "definition": "victory"
  },
  "吏員": {
    "kana": "りいん",
    "definition": "official"
  },
  "官吏": {
    "kana": "かんり",
    "definition": "official"
  },
  "能吏": {
    "kana": "のうり",
    "definition": "power official"
  },
  "履歴": {
    "kana": "りれき",
    "definition": "history"
  },
  "弊履": {
    "kana": "へいり",
    "definition": "our shoes"
  },
  "理科": {
    "kana": "りか",
    "definition": "Science"
  },
  "表裏": {
    "kana": "おもてうら",
    "definition": "front and back"
  },
  "里程": {
    "kana": "りてい",
    "definition": "Mileage"
  },
  "離別": {
    "kana": "りべつ",
    "definition": "separation"
  },
  "陸橋": {
    "kana": "りっきょう",
    "definition": "overpass"
  },
  "着陸": {
    "kana": "ちゃくりく",
    "definition": "landing"
  },
  "律動": {
    "kana": "りつどう",
    "definition": "rhythm"
  },
  "律儀": {
    "kana": "りちぎ",
    "definition": "discipline"
  },
  "引率": {
    "kana": "いんそつ",
    "definition": "lead"
  },
  "比率": {
    "kana": "ひりつ",
    "definition": "ratio"
  },
  "能率": {
    "kana": "のうりつ",
    "definition": "efficiency"
  },
  "立案": {
    "kana": "りつあん",
    "definition": "Planning"
  },
  "略称": {
    "kana": "りゃくしょう",
    "definition": "Abbreviation"
  },
  "計略": {
    "kana": "けいりゃく",
    "definition": "ruse"
  },
  "侵略": {
    "kana": "しんりゃく",
    "definition": "invasion"
  },
  "流動": {
    "kana": "りゅうどう",
    "definition": "flow"
  },
  "電流": {
    "kana": "でんりゅう",
    "definition": "current"
  },
  "流布": {
    "kana": "るふ",
    "definition": "dissemination"
  },
  "流転": {
    "kana": "るてん",
    "definition": "change"
  },
  "流罪": {
    "kana": "るざい",
    "definition": "exile"
  },
  "留学": {
    "kana": "りゅうがく",
    "definition": "study abroad"
  },
  "保留": {
    "kana": "ほりゅう",
    "definition": "on hold"
  },
  "硫安": {
    "kana": "りゅうあん",
    "definition": "ammonium sulfate"
  },
  "硫酸": {
    "kana": "りゅうさん",
    "definition": "sulfuric acid"
  },
  "隆起": {
    "kana": "りゅうき",
    "definition": "uplift"
  },
  "興隆": {
    "kana": "こうりゅう",
    "definition": "rise"
  },
  "旅情": {
    "kana": "りょじょう",
    "definition": "traveling mood"
  },
  "虜囚": {
    "kana": "とりこしゅう",
    "definition": "captive"
  },
  "了解": {
    "kana": "りょうかい",
    "definition": "roger that"
  },
  "完了": {
    "kana": "かんりょう",
    "definition": "completion"
  },
  "校了": {
    "kana": "こうりょう",
    "definition": "proofreading"
  },
  "僚友": {
    "kana": "りょうゆう",
    "definition": "colleague"
  },
  "官僚": {
    "kana": "かんりょう",
    "definition": "Officials"
  },
  "同僚": {
    "kana": "どうりょう",
    "definition": "colleague"
  },
  "両親": {
    "kana": "りょうしん",
    "definition": "parents"
  },
  "両立": {
    "kana": "りょうりつ",
    "definition": "coexistence"
  },
  "千両": {
    "kana": "せんりょう",
    "definition": "1000 Ryo"
  },
  "寮母": {
    "kana": "りょうぼ",
    "definition": "dormitory mother"
  },
  "料金": {
    "kana": "りょうきん",
    "definition": "price"
  },
  "料理": {
    "kana": "りょうり",
    "definition": "cooking"
  },
  "涼味": {
    "kana": "りょうみ",
    "definition": "cool taste"
  },
  "猟師": {
    "kana": "りょうし",
    "definition": "hunter"
  },
  "渉猟": {
    "kana": "わたるりょう",
    "definition": "wading"
  },
  "療養": {
    "kana": "りょうよう",
    "definition": "recuperation"
  },
  "治療": {
    "kana": "ちりょう",
    "definition": "treatment"
  },
  "糧食": {
    "kana": "かてしょく",
    "definition": "provisions"
  },
  "糧道": {
    "kana": "りょうどう",
    "definition": "sustenance"
  },
  "良心": {
    "kana": "りょうしん",
    "definition": "conscience"
  },
  "優良": {
    "kana": "ゆうりょう",
    "definition": "Excellent"
  },
  "量産": {
    "kana": "りょうさん",
    "definition": "mass production"
  },
  "陵墓": {
    "kana": "りょうはか",
    "definition": "mausoleum"
  },
  "領土": {
    "kana": "りょうど",
    "definition": "territory"
  },
  "要領": {
    "kana": "ようりょう",
    "definition": "the point"
  },
  "緑茶": {
    "kana": "りょくちゃ",
    "definition": "Green Tea"
  },
  "緑陰": {
    "kana": "みどりいん",
    "definition": "green shade"
  },
  "新緑": {
    "kana": "しんりょく",
    "definition": "fresh green"
  },
  "倫理": {
    "kana": "りんり",
    "definition": "ethics"
  },
  "絶倫": {
    "kana": "ぜつりん",
    "definition": "unequaled"
  },
  "林業": {
    "kana": "りんぎょう",
    "definition": "forestry"
  },
  "林立": {
    "kana": "りんりつ",
    "definition": "forest"
  },
  "山林": {
    "kana": "さんりん",
    "definition": "forest"
  },
  "臨時": {
    "kana": "りんじ",
    "definition": "Temporary"
  },
  "臨床": {
    "kana": "りんしょう",
    "definition": "clinical"
  },
  "輪番": {
    "kana": "りんばん",
    "definition": "rotation"
  },
  "隣室": {
    "kana": "りんしつ",
    "definition": "next room"
  },
  "隣接": {
    "kana": "りんせつ",
    "definition": "adjacent"
  },
  "近隣": {
    "kana": "きんりん",
    "definition": "neighborhood"
  },
  "塁審": {
    "kana": "るいしん",
    "definition": "base umpire"
  },
  "敵塁": {
    "kana": "てきるい",
    "definition": "enemy fortress"
  },
  "土塁": {
    "kana": "どるい",
    "definition": "earthworks"
  },
  "累計": {
    "kana": "るいけい",
    "definition": "Cumulative"
  },
  "累積": {
    "kana": "るいせき",
    "definition": "Accumulation"
  },
  "類型": {
    "kana": "るいけい",
    "definition": "typology"
  },
  "類似": {
    "kana": "るいじ",
    "definition": "Similar"
  },
  "疑似": {
    "kana": "ぎじ",
    "definition": "pseudo"
  },
  "令嬢": {
    "kana": "れいじょう",
    "definition": "daughter"
  },
  "愛嬢": {
    "kana": "あいじょう",
    "definition": "beloved daughter"
  },
  "用例": {
    "kana": "ようれい",
    "definition": "example"
  },
  "冷却": {
    "kana": "れいきゃく",
    "definition": "cooling"
  },
  "寒冷": {
    "kana": "かんれい",
    "definition": "cold"
  },
  "精励": {
    "kana": "せいれい",
    "definition": "diligence"
  },
  "礼儀": {
    "kana": "れいぎ",
    "definition": "courtesy"
  },
  "謝礼": {
    "kana": "しゃれい",
    "definition": "reward"
  },
  "礼賛": {
    "kana": "らいさん",
    "definition": "Praise"
  },
  "礼拝": {
    "kana": "れいはい",
    "definition": "worship"
  },
  "隷書": {
    "kana": "れいしょ",
    "definition": "slave book"
  },
  "隷属": {
    "kana": "れいぞく",
    "definition": "slavery"
  },
  "零下": {
    "kana": "れいか",
    "definition": "below zero"
  },
  "零落": {
    "kana": "れいらく",
    "definition": "downfall"
  },
  "霊感": {
    "kana": "れいかん",
    "definition": "inspiration"
  },
  "悪霊": {
    "kana": "あくりょう",
    "definition": "evil spirit"
  },
  "死霊": {
    "kana": "しりょう",
    "definition": "ghost"
  },
  "端麗": {
    "kana": "たんれい",
    "definition": "elegant"
  },
  "美麗": {
    "kana": "みれい",
    "definition": "beautiful"
  },
  "還暦": {
    "kana": "かんれき",
    "definition": "60th birthday"
  },
  "歴訪": {
    "kana": "れきほう",
    "definition": "visiting"
  },
  "経歴": {
    "kana": "けいれき",
    "definition": "Career"
  },
  "列車": {
    "kana": "れっしゃ",
    "definition": "train"
  },
  "劣等": {
    "kana": "れっとう",
    "definition": "inferiority"
  },
  "卑劣": {
    "kana": "ひれつ",
    "definition": "Messy"
  },
  "優劣": {
    "kana": "ゆうれつ",
    "definition": "Superiority or inferiority"
  },
  "烈火": {
    "kana": "れっか",
    "definition": "raging fire"
  },
  "壮烈": {
    "kana": "そうれつ",
    "definition": "fierce"
  },
  "廉価": {
    "kana": "れんか",
    "definition": "inexpensive"
  },
  "清廉": {
    "kana": "せいれん",
    "definition": "integrity"
  },
  "恋慕": {
    "kana": "れんぼ",
    "definition": "affection"
  },
  "失恋": {
    "kana": "しつれん",
    "definition": "broken heart"
  },
  "試練": {
    "kana": "しれん",
    "definition": "ordeal"
  },
  "連合": {
    "kana": "れんごう",
    "definition": "union"
  },
  "関連": {
    "kana": "かんれん",
    "definition": "connection"
  },
  "連絡": {
    "kana": "れんらく",
    "definition": "contact"
  },
  "精錬": {
    "kana": "せいれん",
    "definition": "smelting"
  },
  "炉辺": {
    "kana": "ろへん",
    "definition": "fireside"
  },
  "暖炉": {
    "kana": "だんろ",
    "definition": "fireplace"
  },
  "露店": {
    "kana": "ろてん",
    "definition": "stall"
  },
  "雨露": {
    "kana": "あめつゆ",
    "definition": "rain and dew"
  },
  "労働": {
    "kana": "ろうどう",
    "definition": "labor"
  },
  "実働": {
    "kana": "じつどう",
    "definition": "actual work"
  },
  "廊下": {
    "kana": "ろうか",
    "definition": "hall"
  },
  "回廊": {
    "kana": "かいろう",
    "definition": "corridor"
  },
  "画廊": {
    "kana": "がろう",
    "definition": "gallery"
  },
  "朗読": {
    "kana": "ろうどく",
    "definition": "recitation"
  },
  "楼閣": {
    "kana": "ろうかく",
    "definition": "pavilion"
  },
  "鐘楼": {
    "kana": "かねろう",
    "definition": "bell tower"
  },
  "望楼": {
    "kana": "ぼうろう",
    "definition": "Watchtower"
  },
  "浪費": {
    "kana": "ろうひ",
    "definition": "waste"
  },
  "放浪": {
    "kana": "ほうろう",
    "definition": "wandering"
  },
  "漏電": {
    "kana": "ろうでん",
    "definition": "leakage"
  },
  "疎漏": {
    "kana": "そろう",
    "definition": "careless"
  },
  "脱漏": {
    "kana": "だつろう",
    "definition": "Omission"
  },
  "老翁": {
    "kana": "ろうおきな",
    "definition": "old man"
  },
  "老巧": {
    "kana": "ろうこう",
    "definition": "veteran skill"
  },
  "長老": {
    "kana": "ちょうろう",
    "definition": "elder"
  },
  "老婆": {
    "kana": "ろうば",
    "definition": "old woman"
  },
  "六月": {
    "kana": "ろくがつ",
    "definition": "June"
  },
  "録音": {
    "kana": "ろくおん",
    "definition": "recording"
  },
  "記録": {
    "kana": "きろく",
    "definition": "record"
  },
  "実録": {
    "kana": "じつろく",
    "definition": "real record"
  },
  "論証": {
    "kana": "ろんしょう",
    "definition": "argument"
  },
  "論理": {
    "kana": "ろんり",
    "definition": "logic"
  },
  "和解": {
    "kana": "わかい",
    "definition": "settlement"
  },
  "和服": {
    "kana": "わふく",
    "definition": "Japanese clothes"
  },
  "和尚": {
    "kana": "おしょう",
    "definition": "priest"
  },
  "話題": {
    "kana": "わだい",
    "definition": "topic"
  },
  "惑星": {
    "kana": "わくせい",
    "definition": "planet"
  },
  "湾入": {
    "kana": "わんにゅう",
    "definition": "entering the bay"
  },
  "腕章": {
    "kana": "わんしょう",
    "definition": "armband"
  },
  "敏腕": {
    "kana": "としうで",
    "definition": "dexterity"
  }
};