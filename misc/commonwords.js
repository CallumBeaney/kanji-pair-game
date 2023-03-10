const commonWords = {
  "悪意": {
    "kana": "あくい",
    "definition": "malice"
  },
  "握力": {
    "kana": "あくりょく",
    "definition": "Grip strength"
  },
  "圧力": {
    "kana": "あつりょく",
    "definition": "pressure"
  },
  "気圧": {
    "kana": "きあつ",
    "definition": "barometric pressure"
  },
  "明暗": {
    "kana": "めいあん",
    "definition": "light and dark"
  },
  "案文": {
    "kana": "あんぶん",
    "definition": "draft"
  },
  "案内": {
    "kana": "あんない",
    "definition": "guidance"
  },
  "以上": {
    "kana": "いじょう",
    "definition": "that's all"
  },
  "以内": {
    "kana": "いない",
    "definition": "Within"
  },
  "偉大": {
    "kana": "いだい",
    "definition": "Great"
  },
  "偉人": {
    "kana": "いじん",
    "definition": "great man"
  },
  "威力": {
    "kana": "いりょく",
    "definition": "power"
  },
  "一尉": {
    "kana": "いちい",
    "definition": "captain"
  },
  "大尉": {
    "kana": "たいい",
    "definition": "Captain"
  },
  "意見": {
    "kana": "いけん",
    "definition": "opinion"
  },
  "意味": {
    "kana": "いみ",
    "definition": "meaning"
  },
  "決意": {
    "kana": "けつい",
    "definition": "determination"
  },
  "行為": {
    "kana": "こうい",
    "definition": "action"
  },
  "作為": {
    "kana": "さくい",
    "definition": "act"
  },
  "緯度": {
    "kana": "いど",
    "definition": "latitude"
  },
  "違法": {
    "kana": "いほう",
    "definition": "illegal"
  },
  "名医": {
    "kana": "めいい",
    "definition": "excellent doctor"
  },
  "域内": {
    "kana": "いきない",
    "definition": "within the region"
  },
  "地域": {
    "kana": "ちいき",
    "definition": "region"
  },
  "発育": {
    "kana": "はついく",
    "definition": "development"
  },
  "一隅": {
    "kana": "いちぐう",
    "definition": "corner"
  },
  "一族": {
    "kana": "いちぞく",
    "definition": "clan"
  },
  "一度": {
    "kana": "いちど",
    "definition": "one time"
  },
  "一座": {
    "kana": "いちざ",
    "definition": "troupe"
  },
  "第一": {
    "kana": "だいいち",
    "definition": "first"
  },
  "一般": {
    "kana": "いっぱん",
    "definition": "General"
  },
  "同一": {
    "kana": "どういつ",
    "definition": "identical"
  },
  "統一": {
    "kana": "とういつ",
    "definition": "unification"
  },
  "一俵": {
    "kana": "いちたわら",
    "definition": "a bale"
  },
  "引力": {
    "kana": "いんりょく",
    "definition": "attraction"
  },
  "院内": {
    "kana": "いんない",
    "definition": "Inside the hospital"
  },
  "陰気": {
    "kana": "いんき",
    "definition": "gloom"
  },
  "韻文": {
    "kana": "いんぶん",
    "definition": "verse"
  },
  "気宇": {
    "kana": "きう",
    "definition": "spirit"
  },
  "風雲": {
    "kana": "ふううん",
    "definition": "wind and cloud"
  },
  "上映": {
    "kana": "じょうえい",
    "definition": "Screening"
  },
  "泳法": {
    "kana": "えいほう",
    "definition": "swimming style"
  },
  "水泳": {
    "kana": "すいえい",
    "definition": "swimming"
  },
  "衛生": {
    "kana": "えいせい",
    "definition": "Hygiene"
  },
  "一円": {
    "kana": "いちえん",
    "definition": "one yen"
  },
  "炎上": {
    "kana": "えんじょう",
    "definition": "burst into flames"
  },
  "縁日": {
    "kana": "えんにち",
    "definition": "fair"
  },
  "塩分": {
    "kana": "えんぶん",
    "definition": "salt"
  },
  "汚名": {
    "kana": "おめい",
    "definition": "stigma"
  },
  "欧文": {
    "kana": "おうぶん",
    "definition": "European language"
  },
  "王子": {
    "kana": "おうじ",
    "definition": "prince"
  },
  "一億": {
    "kana": "いちおく",
    "definition": "100 million"
  },
  "屋上": {
    "kana": "おくじょう",
    "definition": "rooftop"
  },
  "屋外": {
    "kana": "おくがい",
    "definition": "outdoors"
  },
  "恩人": {
    "kana": "おんじん",
    "definition": "benefactor"
  },
  "気温": {
    "kana": "きおん",
    "definition": "temperature"
  },
  "発音": {
    "kana": "はつおん",
    "definition": "pronunciation"
  },
  "下水": {
    "kana": "げすい",
    "definition": "sewage"
  },
  "上下": {
    "kana": "じょうげ",
    "definition": "up and down"
  },
  "文化": {
    "kana": "ぶんか",
    "definition": "culture"
  },
  "仮面": {
    "kana": "かめん",
    "definition": "mask"
  },
  "佳作": {
    "kana": "かさく",
    "definition": "honorable mention"
  },
  "佳人": {
    "kana": "かじん",
    "definition": "good person"
  },
  "作家": {
    "kana": "さっか",
    "definition": "Writer"
  },
  "本家": {
    "kana": "ほんけ",
    "definition": "Head family"
  },
  "分家": {
    "kana": "ぶんけ",
    "definition": "branch family"
  },
  "作詞": {
    "kana": "さくし",
    "definition": "lyrics"
  },
  "発火": {
    "kana": "はっか",
    "definition": "ignition"
  },
  "菓子": {
    "kana": "かし",
    "definition": "sweets"
  },
  "日課": {
    "kana": "にっか",
    "definition": "daily routine"
  },
  "過度": {
    "kana": "かど",
    "definition": "excessive"
  },
  "風雅": {
    "kana": "ふうが",
    "definition": "Elegance"
  },
  "法会": {
    "kana": "ほうかい",
    "definition": "puja"
  },
  "明快": {
    "kana": "めいかい",
    "definition": "clarity"
  },
  "絵本": {
    "kana": "えほん",
    "definition": "picture book"
  },
  "地階": {
    "kana": "ちかい",
    "definition": "basement"
  },
  "外出": {
    "kana": "がいしゅつ",
    "definition": "Go out"
  },
  "海外": {
    "kana": "かいがい",
    "definition": "abroad"
  },
  "除外": {
    "kana": "じょがい",
    "definition": "Exclusion"
  },
  "外科": {
    "kana": "げか",
    "definition": "surgery"
  },
  "外題": {
    "kana": "げだい",
    "definition": "external subject"
  },
  "外道": {
    "kana": "がいどう",
    "definition": "heresy"
  },
  "大概": {
    "kana": "たいがい",
    "definition": "generally"
  },
  "拡大": {
    "kana": "かくだい",
    "definition": "expansion"
  },
  "格子": {
    "kana": "こうし",
    "definition": "lattice"
  },
  "発覚": {
    "kana": "はっかく",
    "definition": "Revelation"
  },
  "角度": {
    "kana": "かくど",
    "definition": "angle"
  },
  "内閣": {
    "kana": "ないかく",
    "definition": "Cabinet"
  },
  "大学": {
    "kana": "だいがく",
    "definition": "university"
  },
  "分割": {
    "kana": "ぶんかつ",
    "definition": "Split"
  },
  "一喝": {
    "kana": "いっかつ",
    "definition": "drink"
  },
  "一括": {
    "kana": "いっかつ",
    "definition": "bulk"
  },
  "活力": {
    "kana": "かつりょく",
    "definition": "vitality"
  },
  "生活": {
    "kana": "せいかつ",
    "definition": "life"
  },
  "渇水": {
    "kana": "かっすい",
    "definition": "drought"
  },
  "刊行": {
    "kana": "かんこう",
    "definition": "Publication"
  },
  "発刊": {
    "kana": "はっかん",
    "definition": "Publication"
  },
  "一巻": {
    "kana": "いっかん",
    "definition": "one volume"
  },
  "寛大": {
    "kana": "かんだい",
    "definition": "generosity"
  },
  "換気": {
    "kana": "かんき",
    "definition": "ventilation"
  },
  "出棺": {
    "kana": "しゅっかん",
    "definition": "leaving the coffin"
  },
  "発汗": {
    "kana": "はっかん",
    "definition": "sweating"
  },
  "一覧": {
    "kana": "いちらん",
    "definition": "list"
  },
  "生還": {
    "kana": "せいかん",
    "definition": "survived"
  },
  "年鑑": {
    "kana": "ねんかん",
    "definition": "yearbook"
  },
  "人間": {
    "kana": "にんげん",
    "definition": "human"
  },
  "館内": {
    "kana": "かんない",
    "definition": "Inside the hall"
  },
  "眼力": {
    "kana": "がんりき",
    "definition": "eye power"
  },
  "顔面": {
    "kana": "がんめん",
    "definition": "face"
  },
  "基地": {
    "kana": "きち",
    "definition": "base"
  },
  "分岐": {
    "kana": "ぶんき",
    "definition": "branch"
  },
  "発揮": {
    "kana": "はっき",
    "definition": "Exhibit"
  },
  "机上": {
    "kana": "きじょう",
    "definition": "desktop"
  },
  "気体": {
    "kana": "きたい",
    "definition": "gas"
  },
  "気候": {
    "kana": "きこう",
    "definition": "climate"
  },
  "元気": {
    "kana": "げんき",
    "definition": "well"
  },
  "気配": {
    "kana": "けはい",
    "definition": "sign"
  },
  "気泡": {
    "kana": "きほう",
    "definition": "air bubbles"
  },
  "水泡": {
    "kana": "すいほう",
    "definition": "blisters"
  },
  "発泡": {
    "kana": "はっぽう",
    "definition": "Foaming"
  },
  "紀行": {
    "kana": "きこう",
    "definition": "travelogue"
  },
  "風紀": {
    "kana": "ふうき",
    "definition": "public morals"
  },
  "偽名": {
    "kana": "ぎめい",
    "definition": "pseudonym"
  },
  "意義": {
    "kana": "いぎ",
    "definition": "significance"
  },
  "吉日": {
    "kana": "きちじつ",
    "definition": "lucky day"
  },
  "大吉": {
    "kana": "だいきち",
    "definition": "Daikichi"
  },
  "面詰": {
    "kana": "めんきつ",
    "definition": "masking"
  },
  "脚本": {
    "kana": "きゃくほん",
    "definition": "screenplay"
  },
  "行脚": {
    "kana": "あんぎゃ",
    "definition": "pilgrimage"
  },
  "逆上": {
    "kana": "ぎゃくじょう",
    "definition": "frenzy"
  },
  "子息": {
    "kana": "しそく",
    "definition": "son"
  },
  "法廷": {
    "kana": "ほうてい",
    "definition": "court"
  },
  "出廷": {
    "kana": "しゅってい",
    "definition": "appearing in court"
  },
  "地球": {
    "kana": "ちきゅう",
    "definition": "earth"
  },
  "究明": {
    "kana": "きゅうめい",
    "definition": "clarification"
  },
  "給水": {
    "kana": "きゅうすい",
    "definition": "water supply"
  },
  "去年": {
    "kana": "きょねん",
    "definition": "last year"
  },
  "巨大": {
    "kana": "きょだい",
    "definition": "gigantic"
  },
  "大漁": {
    "kana": "たいりょう",
    "definition": "big catch"
  },
  "京風": {
    "kana": "きょうふう",
    "definition": "Kyoto style"
  },
  "上京": {
    "kana": "じょうきょう",
    "definition": "going to Tokyo"
  },
  "凶作": {
    "kana": "きょうさく",
    "definition": "bad harvest"
  },
  "協力": {
    "kana": "きょうりょく",
    "definition": "cooperation"
  },
  "境地": {
    "kana": "きょうち",
    "definition": "precinct"
  },
  "境内": {
    "kana": "けいだい",
    "definition": "precincts"
  },
  "地峡": {
    "kana": "ちきょう",
    "definition": "isthmus"
  },
  "狂気": {
    "kana": "きょうき",
    "definition": "Insanity"
  },
  "度胸": {
    "kana": "どきょう",
    "definition": "courage"
  },
  "興行": {
    "kana": "こうぎょう",
    "definition": "box office"
  },
  "曲面": {
    "kana": "きょくめん",
    "definition": "curved surface"
  },
  "名曲": {
    "kana": "めいきょく",
    "definition": "famous song"
  },
  "極上": {
    "kana": "ごくじょう",
    "definition": "superb"
  },
  "出勤": {
    "kana": "しゅっきん",
    "definition": "attendance at work"
  },
  "勤行": {
    "kana": "つとむぎょう",
    "definition": "devotion"
  },
  "均一": {
    "kana": "きんいつ",
    "definition": "Uniform"
  },
  "襟度": {
    "kana": "えりど",
    "definition": "degree of collar"
  },
  "銀行": {
    "kana": "ぎんこう",
    "definition": "Bank"
  },
  "水銀": {
    "kana": "すいぎん",
    "definition": "mercury"
  },
  "地区": {
    "kana": "ちく",
    "definition": "district"
  },
  "上空": {
    "kana": "じょうくう",
    "definition": "sky"
  },
  "発掘": {
    "kana": "はっくつ",
    "definition": "Excavation"
  },
  "薫風": {
    "kana": "くんぷう",
    "definition": "fragrant breeze"
  },
  "大群": {
    "kana": "たいぐん",
    "definition": "Horde"
  },
  "刑法": {
    "kana": "けいほう",
    "definition": "criminal law"
  },
  "啓発": {
    "kana": "けいはつ",
    "definition": "enlightenment"
  },
  "人形": {
    "kana": "にんぎょう",
    "definition": "doll"
  },
  "地帯": {
    "kana": "ちたい",
    "definition": "zone"
  },
  "敬意": {
    "kana": "けいい",
    "definition": "respect"
  },
  "景気": {
    "kana": "けいき",
    "definition": "economy"
  },
  "風景": {
    "kana": "ふうけい",
    "definition": "scenery"
  },
  "年譜": {
    "kana": "ねんぷ",
    "definition": "Chronology"
  },
  "経文": {
    "kana": "きょうもん",
    "definition": "Sutra"
  },
  "文芸": {
    "kana": "ぶんげい",
    "definition": "literature"
  },
  "傑作": {
    "kana": "けっさく",
    "definition": "masterpiece"
  },
  "分裂": {
    "kana": "ぶんれつ",
    "definition": "division"
  },
  "水晶": {
    "kana": "すいしょう",
    "definition": "crystal"
  },
  "明月": {
    "kana": "めいげつ",
    "definition": "bright moon"
  },
  "圏内": {
    "kana": "けんない",
    "definition": "within range"
  },
  "圏外": {
    "kana": "けんがい",
    "definition": "Out of service area"
  },
  "文章": {
    "kana": "ぶんしょう",
    "definition": "sentence"
  },
  "憲法": {
    "kana": "けんぽう",
    "definition": "Constitution"
  },
  "人権": {
    "kana": "じんけん",
    "definition": "human rights"
  },
  "権力": {
    "kana": "けんりょく",
    "definition": "power"
  },
  "努力": {
    "kana": "どりょく",
    "definition": "effort"
  },
  "能力": {
    "kana": "のうりょく",
    "definition": "ability"
  },
  "力量": {
    "kana": "りきりょう",
    "definition": "competence"
  },
  "力作": {
    "kana": "りきさく",
    "definition": "hard work"
  },
  "馬力": {
    "kana": "ばりき",
    "definition": "horsepower"
  },
  "献上": {
    "kana": "けんじょう",
    "definition": "presentation"
  },
  "文献": {
    "kana": "ぶんけん",
    "definition": "Literature"
  },
  "一献": {
    "kana": "いっこん",
    "definition": "one drink"
  },
  "人絹": {
    "kana": "じんけん",
    "definition": "rayon"
  },
  "見地": {
    "kana": "けんち",
    "definition": "point of view"
  },
  "賢人": {
    "kana": "けんじん",
    "definition": "sage"
  },
  "賢明": {
    "kana": "けんめい",
    "definition": "wise"
  },
  "一軒": {
    "kana": "いっけん",
    "definition": "one"
  },
  "遣外": {
    "kana": "けんそと",
    "definition": "dispatched abroad"
  },
  "分遣": {
    "kana": "ふんけん",
    "definition": "detachment"
  },
  "元日": {
    "kana": "がんじつ",
    "definition": "the first day of the year"
  },
  "水源": {
    "kana": "すいげん",
    "definition": "water source"
  },
  "言行": {
    "kana": "げんこう",
    "definition": "words and deeds"
  },
  "言上": {
    "kana": "げんうえ",
    "definition": "speech"
  },
  "限度": {
    "kana": "げんど",
    "definition": "limit"
  },
  "個人": {
    "kana": "こじん",
    "definition": "individual"
  },
  "一個": {
    "kana": "いっこ",
    "definition": "one"
  },
  "戸外": {
    "kana": "こがい",
    "definition": "outdoors"
  },
  "故意": {
    "kana": "こい",
    "definition": "intentionally"
  },
  "湖水": {
    "kana": "こすい",
    "definition": "lake water"
  },
  "誇大": {
    "kana": "こだい",
    "definition": "Exaggeration"
  },
  "功名": {
    "kana": "こうみょう",
    "definition": "achievement"
  },
  "効力": {
    "kana": "こうりょく",
    "definition": "efficacy"
  },
  "厚生": {
    "kana": "こうせい",
    "definition": "public welfare"
  },
  "人口": {
    "kana": "じんこう",
    "definition": "population"
  },
  "向上": {
    "kana": "こうじょう",
    "definition": "improvement"
  },
  "好意": {
    "kana": "こうい",
    "definition": "Good feeling"
  },
  "孝行": {
    "kana": "こうこう",
    "definition": "Filial piety"
  },
  "人工": {
    "kana": "じんこう",
    "definition": "artificial"
  },
  "工面": {
    "kana": "くめん",
    "definition": "money"
  },
  "大工": {
    "kana": "だいく",
    "definition": "carpenter"
  },
  "行幸": {
    "kana": "ぎょうこう",
    "definition": "visit"
  },
  "広大": {
    "kana": "こうだい",
    "definition": "vast"
  },
  "構内": {
    "kana": "こうない",
    "definition": "premises"
  },
  "洪水": {
    "kana": "こうずい",
    "definition": "flood"
  },
  "出港": {
    "kana": "しゅっこう",
    "definition": "Departure"
  },
  "地殻": {
    "kana": "ちかく",
    "definition": "crust"
  },
  "法皇": {
    "kana": "ほうおう",
    "definition": "pope"
  },
  "硬度": {
    "kana": "こうど",
    "definition": "hardness"
  },
  "生硬": {
    "kana": "なまこう",
    "definition": "raw hard"
  },
  "大綱": {
    "kana": "たいこう",
    "definition": "outline"
  },
  "耕作": {
    "kana": "こうさく",
    "definition": "Cultivation"
  },
  "耕地": {
    "kana": "こうち",
    "definition": "cultivated land"
  },
  "行進": {
    "kana": "こうしん",
    "definition": "march"
  },
  "旅行": {
    "kana": "りょこう",
    "definition": "trip"
  },
  "行列": {
    "kana": "ぎょうれつ",
    "definition": "queue"
  },
  "行政": {
    "kana": "ぎょうせい",
    "definition": "Administration"
  },
  "修行": {
    "kana": "しゅぎょう",
    "definition": "training"
  },
  "行火": {
    "kana": "あんか",
    "definition": "line fire"
  },
  "年貢": {
    "kana": "ねんぐ",
    "definition": "annual tribute"
  },
  "郊外": {
    "kana": "こうがい",
    "definition": "Suburbs"
  },
  "香水": {
    "kana": "こうすい",
    "definition": "perfume"
  },
  "香気": {
    "kana": "こうき",
    "definition": "aroma"
  },
  "号外": {
    "kana": "ごうがい",
    "definition": "Extra"
  },
  "文豪": {
    "kana": "ぶんごう",
    "definition": "great writer"
  },
  "克明": {
    "kana": "こくめい",
    "definition": "Katsuaki"
  },
  "外国": {
    "kana": "がいこく",
    "definition": "foreign country"
  },
  "地獄": {
    "kana": "じごく",
    "definition": "hell"
  },
  "骨子": {
    "kana": "こっし",
    "definition": "skeleton"
  },
  "今日": {
    "kana": "きょう",
    "definition": "today"
  },
  "今年": {
    "kana": "こんねん",
    "definition": "this year"
  },
  "今上": {
    "kana": "きんじょう",
    "definition": "now"
  },
  "根気": {
    "kana": "こんき",
    "definition": "perseverance"
  },
  "大佐": {
    "kana": "たいさ",
    "definition": "Colonel"
  },
  "再度": {
    "kana": "さいど",
    "definition": "again"
  },
  "最大": {
    "kana": "さいだい",
    "definition": "maximum"
  },
  "妻子": {
    "kana": "さいし",
    "definition": "wife and child"
  },
  "人材": {
    "kana": "じんざい",
    "definition": "human resources"
  },
  "著作": {
    "kana": "ちょさく",
    "definition": "writing"
  },
  "豊作": {
    "kana": "ほうさく",
    "definition": "good harvest"
  },
  "作業": {
    "kana": "さぎょう",
    "definition": "work"
  },
  "作用": {
    "kana": "さよう",
    "definition": "action"
  },
  "動作": {
    "kana": "どうさ",
    "definition": "motion"
  },
  "昨日": {
    "kana": "きのう",
    "definition": "yesterday"
  },
  "昨年": {
    "kana": "さくねん",
    "definition": "last year"
  },
  "冊子": {
    "kana": "さっし",
    "definition": "booklet"
  },
  "殺人": {
    "kana": "さつじん",
    "definition": "murder"
  },
  "殺生": {
    "kana": "せっしょう",
    "definition": "killing"
  },
  "散文": {
    "kana": "さんぶん",
    "definition": "prose"
  },
  "生産": {
    "kana": "せいさん",
    "definition": "production"
  },
  "出産": {
    "kana": "しゅっさん",
    "definition": "childbirth"
  },
  "出仕": {
    "kana": "しゅつし",
    "definition": "go to work"
  },
  "名刺": {
    "kana": "めいし",
    "definition": "name card"
  },
  "風刺": {
    "kana": "ふうし",
    "definition": "satire"
  },
  "上司": {
    "kana": "じょうし",
    "definition": "boss"
  },
  "嗣子": {
    "kana": "つぐこ",
    "definition": "heir"
  },
  "年始": {
    "kana": "ねんし",
    "definition": "the beginning of the year"
  },
  "子孫": {
    "kana": "しそん",
    "definition": "descendants"
  },
  "女子": {
    "kana": "じょし",
    "definition": "girls"
  },
  "帽子": {
    "kana": "ぼうし",
    "definition": "hat"
  },
  "金子": {
    "kana": "かねこ",
    "definition": "Kaneko"
  },
  "扇子": {
    "kana": "せんす",
    "definition": "fan"
  },
  "様子": {
    "kana": "ようす",
    "definition": "state"
  },
  "意匠": {
    "kana": "いしょう",
    "definition": "design"
  },
  "意思": {
    "kana": "いし",
    "definition": "intention"
  },
  "氏名": {
    "kana": "しめい",
    "definition": "family name"
  },
  "紙面": {
    "kana": "しめん",
    "definition": "space"
  },
  "視力": {
    "kana": "しりょく",
    "definition": "eyesight"
  },
  "詩人": {
    "kana": "しじん",
    "definition": "poets"
  },
  "試作": {
    "kana": "しさく",
    "definition": "Trial production"
  },
  "誌面": {
    "kana": "しめん",
    "definition": "magazine"
  },
  "日誌": {
    "kana": "にっし",
    "definition": "diary"
  },
  "資本": {
    "kana": "しほん",
    "definition": "capital"
  },
  "文字": {
    "kana": "もじ",
    "definition": "letter"
  },
  "磁気": {
    "kana": "じき",
    "definition": "magnetism"
  },
  "自分": {
    "kana": "じぶん",
    "definition": "myself"
  },
  "意識": {
    "kana": "いしき",
    "definition": "consciousness"
  },
  "地軸": {
    "kana": "ちじく",
    "definition": "earth's axis"
  },
  "室内": {
    "kana": "しつない",
    "definition": "indoors"
  },
  "湿度": {
    "kana": "しつど",
    "definition": "humidity"
  },
  "湿地": {
    "kana": "しっち",
    "definition": "marsh"
  },
  "本質": {
    "kana": "ほんしつ",
    "definition": "essence"
  },
  "人質": {
    "kana": "ひとじち",
    "definition": "hostage"
  },
  "実力": {
    "kana": "じつりょく",
    "definition": "real ability"
  },
  "発射": {
    "kana": "はっしゃ",
    "definition": "firing"
  },
  "大赦": {
    "kana": "たいしゃ",
    "definition": "amnesty"
  },
  "斜面": {
    "kana": "しゃめん",
    "definition": "slope"
  },
  "大蛇": {
    "kana": "おろち",
    "definition": "Serpent"
  },
  "蛇行": {
    "kana": "だこう",
    "definition": "meandeling"
  },
  "尺度": {
    "kana": "しゃくど",
    "definition": "measure"
  },
  "釈明": {
    "kana": "しゃくめい",
    "definition": "explanation"
  },
  "若年": {
    "kana": "じゃくねん",
    "definition": "youth"
  },
  "主人": {
    "kana": "しゅじん",
    "definition": "master"
  },
  "法主": {
    "kana": "ほうしゅ",
    "definition": "Hoshu"
  },
  "水痘": {
    "kana": "すいとう",
    "definition": "Chickenpox"
  },
  "人種": {
    "kana": "じんしゅ",
    "definition": "Race"
  },
  "年齢": {
    "kana": "ねんれい",
    "definition": "age"
  },
  "囚人": {
    "kana": "しゅうじん",
    "definition": "prisoner"
  },
  "秋分": {
    "kana": "しゅうぶん",
    "definition": "autumnal equinox"
  },
  "終日": {
    "kana": "しゅうじつ",
    "definition": "all day"
  },
  "臭気": {
    "kana": "しゅうき",
    "definition": "odor"
  },
  "衆生": {
    "kana": "しゅじょう",
    "definition": "sentient beings"
  },
  "襲名": {
    "kana": "しゅうめい",
    "definition": "name succession"
  },
  "重大": {
    "kana": "じゅうだい",
    "definition": "Serious"
  },
  "外泊": {
    "kana": "がいはく",
    "definition": "sleepover"
  },
  "祝日": {
    "kana": "しゅくじつ",
    "definition": "holiday"
  },
  "一杯": {
    "kana": "いっぱい",
    "definition": "a cup of"
  },
  "出荷": {
    "kana": "しゅっか",
    "definition": "shipping"
  },
  "出入": {
    "kana": "しゅつにゅう",
    "definition": "going in and out"
  },
  "出現": {
    "kana": "しゅつげん",
    "definition": "Appearance"
  },
  "提出": {
    "kana": "ていしゅつ",
    "definition": "Submission"
  },
  "出納": {
    "kana": "すいとう",
    "definition": "Accounting"
  },
  "一瞬": {
    "kana": "いっしゅん",
    "definition": "for a moment"
  },
  "上旬": {
    "kana": "じょうじゅん",
    "definition": "early"
  },
  "一巡": {
    "kana": "いちじゅん",
    "definition": "one round"
  },
  "遵法": {
    "kana": "じゅんぽう",
    "definition": "compliance"
  },
  "暑気": {
    "kana": "しょき",
    "definition": "hot weather"
  },
  "署名": {
    "kana": "しょめい",
    "definition": "signature"
  },
  "本籍": {
    "kana": "ほんせき",
    "definition": "Domicile"
  },
  "助力": {
    "kana": "じょりょく",
    "definition": "assistance"
  },
  "女人": {
    "kana": "にょにん",
    "definition": "woman"
  },
  "徐行": {
    "kana": "じょこう",
    "definition": "slow down"
  },
  "名勝": {
    "kana": "めいしょう",
    "definition": "scenic spot"
  },
  "大将": {
    "kana": "たいしょう",
    "definition": "General"
  },
  "大小": {
    "kana": "だいしょう",
    "definition": "big and small"
  },
  "少年": {
    "kana": "しょうねん",
    "definition": "boy"
  },
  "抄本": {
    "kana": "しょうほん",
    "definition": "extract"
  },
  "上昇": {
    "kana": "じょうしょう",
    "definition": "rise"
  },
  "渉外": {
    "kana": "しょうがい",
    "definition": "external affairs"
  },
  "照明": {
    "kana": "しょうめい",
    "definition": "illumination"
  },
  "名称": {
    "kana": "めいしょう",
    "definition": "name"
  },
  "証明": {
    "kana": "しょうめい",
    "definition": "Proof"
  },
  "障子": {
    "kana": "しょうじ",
    "definition": "shoji"
  },
  "上弦": {
    "kana": "じょうげん",
    "definition": "first string"
  },
  "地上": {
    "kana": "ちじょう",
    "definition": "ground"
  },
  "上人": {
    "kana": "しょうにん",
    "definition": "Shonin"
  },
  "上棟": {
    "kana": "じょうとう",
    "definition": "construction"
  },
  "外郭": {
    "kana": "がいかく",
    "definition": "outline"
  },
  "城内": {
    "kana": "じょうない",
    "definition": "inside the castle"
  },
  "場内": {
    "kana": "じょうない",
    "definition": "inside the hall"
  },
  "日常": {
    "kana": "にちじょう",
    "definition": "everyday life"
  },
  "人情": {
    "kana": "にんじょう",
    "definition": "humanity"
  },
  "風情": {
    "kana": "ふぜい",
    "definition": "Atmosphere"
  },
  "蒸気": {
    "kana": "じょうき",
    "definition": "vapor"
  },
  "蒸発": {
    "kana": "じょうはつ",
    "definition": "evaporation"
  },
  "触発": {
    "kana": "しょくはつ",
    "definition": "inspiration"
  },
  "風聞": {
    "kana": "ふうぶん",
    "definition": "Rumor"
  },
  "浸水": {
    "kana": "しんすい",
    "definition": "Flooding"
  },
  "水深": {
    "kana": "すいしん",
    "definition": "water depth"
  },
  "大臣": {
    "kana": "だいじん",
    "definition": "Minister"
  },
  "薪水": {
    "kana": "たきぎみず",
    "definition": "cooking"
  },
  "地震": {
    "kana": "じしん",
    "definition": "earthquake"
  },
  "人道": {
    "kana": "じんどう",
    "definition": "humanity"
  },
  "人員": {
    "kana": "じんいん",
    "definition": "personnel"
  },
  "成人": {
    "kana": "せいじん",
    "definition": "adult"
  },
  "甚大": {
    "kana": "じんだい",
    "definition": "huge"
  },
  "尽力": {
    "kana": "じんりょく",
    "definition": "Effort"
  },
  "地図": {
    "kana": "ちず",
    "definition": "map"
  },
  "意図": {
    "kana": "いと",
    "definition": "intention"
  },
  "水稲": {
    "kana": "すいとう",
    "definition": "paddy rice"
  },
  "水槽": {
    "kana": "すいそう",
    "definition": "water tank"
  },
  "水滴": {
    "kana": "すいてき",
    "definition": "water droplets"
  },
  "一滴": {
    "kana": "いってき",
    "definition": "one drop"
  },
  "水分": {
    "kana": "すいぶん",
    "definition": "moisture"
  },
  "水陸": {
    "kana": "すいりく",
    "definition": "land and water"
  },
  "海水": {
    "kana": "かいすい",
    "definition": "seawater"
  },
  "粋人": {
    "kana": "すいじん",
    "definition": "man of the world"
  },
  "遂行": {
    "kana": "すいこう",
    "definition": "carry out"
  },
  "随行": {
    "kana": "ずいこう",
    "definition": "accompanying"
  },
  "随意": {
    "kana": "ずいい",
    "definition": "at will"
  },
  "年数": {
    "kana": "ねんすう",
    "definition": "number of years"
  },
  "人数": {
    "kana": "にんずう",
    "definition": "Number of people"
  },
  "寸法": {
    "kana": "すんぽう",
    "definition": "size"
  },
  "出世": {
    "kana": "しゅっせ",
    "definition": "promotion"
  },
  "制度": {
    "kana": "せいど",
    "definition": "system"
  },
  "勢力": {
    "kana": "せいりょく",
    "definition": "power"
  },
  "姓名": {
    "kana": "せいめい",
    "definition": "first and last name"
  },
  "出征": {
    "kana": "しゅっせい",
    "definition": "go to war"
  },
  "性分": {
    "kana": "しょうぶん",
    "definition": "nature"
  },
  "治水": {
    "kana": "ちすい",
    "definition": "flood control"
  },
  "明星": {
    "kana": "みょうじょう",
    "definition": "morning star"
  },
  "正面": {
    "kana": "しょうめん",
    "definition": "front"
  },
  "生涯": {
    "kana": "しょうがい",
    "definition": "lifetime"
  },
  "発生": {
    "kana": "はっせい",
    "definition": "occurrence"
  },
  "先生": {
    "kana": "せんせい",
    "definition": "teacher"
  },
  "生滅": {
    "kana": "しょうめつ",
    "definition": "life and death"
  },
  "一生": {
    "kana": "いっしょう",
    "definition": "lifetime"
  },
  "誕生": {
    "kana": "たんじょう",
    "definition": "birth"
  },
  "生殖": {
    "kana": "せいしょく",
    "definition": "reproduction"
  },
  "盛大": {
    "kana": "せいだい",
    "definition": "big"
  },
  "精力": {
    "kana": "せいりょく",
    "definition": "vitality"
  },
  "聖人": {
    "kana": "せいじん",
    "definition": "saint"
  },
  "名声": {
    "kana": "めいせい",
    "definition": "fame"
  },
  "誠意": {
    "kana": "せいい",
    "definition": "sincerity"
  },
  "青年": {
    "kana": "せいねん",
    "definition": "youth"
  },
  "一斉": {
    "kana": "いっせい",
    "definition": "All at once"
  },
  "席上": {
    "kana": "せきじょう",
    "definition": "seat"
  },
  "出席": {
    "kana": "しゅっせき",
    "definition": "attendance"
  },
  "昔日": {
    "kana": "むかしにち",
    "definition": "old days"
  },
  "昔年": {
    "kana": "むかしねん",
    "definition": "old days"
  },
  "析出": {
    "kana": "せきしゅつ",
    "definition": "Precipitation"
  },
  "分析": {
    "kana": "ぶんせき",
    "definition": "analysis"
  },
  "面積": {
    "kana": "めんせき",
    "definition": "area"
  },
  "発赤": {
    "kana": "はつあか",
    "definition": "Redness"
  },
  "一切": {
    "kana": "いっさい",
    "definition": "nothing at all"
  },
  "摂生": {
    "kana": "せっせい",
    "definition": "regimen"
  },
  "説明": {
    "kana": "せつめい",
    "definition": "explanation"
  },
  "仙人": {
    "kana": "せんにん",
    "definition": "Hermit"
  },
  "泉水": {
    "kana": "いずみみず",
    "definition": "fountain"
  },
  "洗面": {
    "kana": "せんめん",
    "definition": "washbasin"
  },
  "潜水": {
    "kana": "せんすい",
    "definition": "diving"
  },
  "鮮明": {
    "kana": "せんめい",
    "definition": "clear"
  },
  "疎外": {
    "kana": "そがい",
    "definition": "Alienation"
  },
  "文庫": {
    "kana": "ぶんこ",
    "definition": "Paperback"
  },
  "壮大": {
    "kana": "そうだい",
    "definition": "magnificent"
  },
  "一掃": {
    "kana": "いっそう",
    "definition": "sweep away"
  },
  "操作": {
    "kana": "そうさ",
    "definition": "operation"
  },
  "総意": {
    "kana": "そうい",
    "definition": "consensus"
  },
  "走行": {
    "kana": "そうこう",
    "definition": "running"
  },
  "内臓": {
    "kana": "ないぞう",
    "definition": "internal organs"
  },
  "側面": {
    "kana": "そくめん",
    "definition": "side"
  },
  "速度": {
    "kana": "そくど",
    "definition": "speed"
  },
  "風俗": {
    "kana": "ふうぞく",
    "definition": "manners and customs"
  },
  "続出": {
    "kana": "ぞくしゅつ",
    "definition": "one after another"
  },
  "続行": {
    "kana": "ぞっこう",
    "definition": "Continue"
  },
  "存分": {
    "kana": "ぞんぶん",
    "definition": "fully"
  },
  "尊大": {
    "kana": "そんだい",
    "definition": "arrogance"
  },
  "本尊": {
    "kana": "ほんぞん",
    "definition": "principal image"
  },
  "惰気": {
    "kana": "だき",
    "definition": "dullness"
  },
  "駄作": {
    "kana": "ださく",
    "definition": "bad work"
  },
  "人体": {
    "kana": "じんたい",
    "definition": "human body"
  },
  "風体": {
    "kana": "ふうてい",
    "definition": "body of wind"
  },
  "一対": {
    "kana": "いっつい",
    "definition": "pair"
  },
  "台地": {
    "kana": "だいち",
    "definition": "plateau"
  },
  "一台": {
    "kana": "いちだい",
    "definition": "One"
  },
  "台風": {
    "kana": "たいふう",
    "definition": "typhoon"
  },
  "大胆": {
    "kana": "だいたん",
    "definition": "Bold"
  },
  "大衆": {
    "kana": "たいしゅう",
    "definition": "public"
  },
  "題名": {
    "kana": "だいめい",
    "definition": "Title"
  },
  "出題": {
    "kana": "しゅつだい",
    "definition": "questions"
  },
  "宅地": {
    "kana": "たくち",
    "definition": "Residential land"
  },
  "拓本": {
    "kana": "たくほん",
    "definition": "Rubbed copy"
  },
  "達人": {
    "kana": "たつじん",
    "definition": "Master"
  },
  "脱出": {
    "kana": "だっしゅつ",
    "definition": "escape"
  },
  "淡水": {
    "kana": "たんすい",
    "definition": "Freshwater"
  },
  "生誕": {
    "kana": "せいたん",
    "definition": "birth"
  },
  "団地": {
    "kana": "だんち",
    "definition": "apartment complex"
  },
  "壇上": {
    "kana": "だんじょう",
    "definition": "on the podium"
  },
  "文壇": {
    "kana": "ぶんだん",
    "definition": "literary world"
  },
  "弾力": {
    "kana": "だんりょく",
    "definition": "elasticity"
  },
  "男子": {
    "kana": "だんし",
    "definition": "boy"
  },
  "知人": {
    "kana": "ちじん",
    "definition": "acquaintance"
  },
  "地下": {
    "kana": "ちか",
    "definition": "underground"
  },
  "天地": {
    "kana": "てんち",
    "definition": "heaven and earth"
  },
  "地面": {
    "kana": "じめん",
    "definition": "Ground"
  },
  "地元": {
    "kana": "じもと",
    "definition": "local"
  },
  "逐一": {
    "kana": "ちくいち",
    "definition": "point by point"
  },
  "嫡子": {
    "kana": "ちゃくし",
    "definition": "legitimate child"
  },
  "抽出": {
    "kana": "ちゅうしゅつ",
    "definition": "extract"
  },
  "注意": {
    "kana": "ちゅうい",
    "definition": "Note"
  },
  "発注": {
    "kana": "はっちゅう",
    "definition": "order"
  },
  "著名": {
    "kana": "ちょめい",
    "definition": "prominent"
  },
  "帳面": {
    "kana": "ちょうめん",
    "definition": "notebook"
  },
  "張力": {
    "kana": "ちょうりょく",
    "definition": "tension"
  },
  "挑発": {
    "kana": "ちょうはつ",
    "definition": "provocation"
  },
  "風潮": {
    "kana": "ふうちょう",
    "definition": "trend"
  },
  "大腸": {
    "kana": "だいちょう",
    "definition": "colon"
  },
  "頂上": {
    "kana": "ちょうじょう",
    "definition": "the top"
  },
  "通行": {
    "kana": "つうこう",
    "definition": "passage"
  },
  "内偵": {
    "kana": "ないてい",
    "definition": "inside detective"
  },
  "呈上": {
    "kana": "ていじょう",
    "definition": "Presentation"
  },
  "子弟": {
    "kana": "してい",
    "definition": "children"
  },
  "弟子": {
    "kana": "でし",
    "definition": "apprentice"
  },
  "大抵": {
    "kana": "たいてい",
    "definition": "usually"
  },
  "程度": {
    "kana": "ていど",
    "definition": "degree"
  },
  "日程": {
    "kana": "にってい",
    "definition": "schedule"
  },
  "邸内": {
    "kana": "ていない",
    "definition": "inside the mansion"
  },
  "摘発": {
    "kana": "てきはつ",
    "definition": "exposed"
  },
  "敵意": {
    "kana": "てきい",
    "definition": "hostility"
  },
  "適度": {
    "kana": "てきど",
    "definition": "moderate"
  },
  "哲人": {
    "kana": "てつじん",
    "definition": "philosopher"
  },
  "発展": {
    "kana": "はってん",
    "definition": "development"
  },
  "本店": {
    "kana": "ほんてん",
    "definition": "head office"
  },
  "転出": {
    "kana": "てんしゅつ",
    "definition": "moving out"
  },
  "田地": {
    "kana": "たち",
    "definition": "field"
  },
  "水田": {
    "kana": "すいでん",
    "definition": "paddy field"
  },
  "電気": {
    "kana": "でんき",
    "definition": "electricity"
  },
  "発電": {
    "kana": "はつでん",
    "definition": "power generation"
  },
  "風鈴": {
    "kana": "ふうりん",
    "definition": "wind chime"
  },
  "途上": {
    "kana": "とじょう",
    "definition": "en route"
  },
  "都度": {
    "kana": "つど",
    "definition": "Each time"
  },
  "法度": {
    "kana": "ほうど",
    "definition": "law"
  },
  "支度": {
    "kana": "したく",
    "definition": "getting ready"
  },
  "土地": {
    "kana": "とち",
    "definition": "land"
  },
  "怒気": {
    "kana": "どき",
    "definition": "anger"
  },
  "名刀": {
    "kana": "めいとう",
    "definition": "famous sword"
  },
  "唐本": {
    "kana": "とうほん",
    "definition": "Karamoto"
  },
  "上級": {
    "kana": "じょうきゅう",
    "definition": "Advanced"
  },
  "等分": {
    "kana": "とうぶん",
    "definition": "equal division"
  },
  "糖分": {
    "kana": "とうぶん",
    "definition": "sugar content"
  },
  "謄本": {
    "kana": "とうほん",
    "definition": "certified copy"
  },
  "大豆": {
    "kana": "だいず",
    "definition": "soy"
  },
  "透明": {
    "kana": "とうめい",
    "definition": "transparent"
  },
  "年頭": {
    "kana": "ねんとう",
    "definition": "beginning of the year"
  },
  "頭上": {
    "kana": "ずじょう",
    "definition": "overhead"
  },
  "匿名": {
    "kana": "とくめい",
    "definition": "Anonymous"
  },
  "得意": {
    "kana": "とくい",
    "definition": "good at"
  },
  "読本": {
    "kana": "どくほん",
    "definition": "reader"
  },
  "内外": {
    "kana": "ないがい",
    "definition": "inside and outside"
  },
  "内容": {
    "kana": "ないよう",
    "definition": "content"
  },
  "家内": {
    "kana": "かない",
    "definition": "wife"
  },
  "内裏": {
    "kana": "だいり",
    "definition": "Imperial Palace"
  },
  "参内": {
    "kana": "さんだい",
    "definition": "palace visit"
  },
  "縄文": {
    "kana": "じょうもん",
    "definition": "Jomon"
  },
  "二分": {
    "kana": "にぶん",
    "definition": "dichotomy"
  },
  "日時": {
    "kana": "にちじ",
    "definition": "date and time"
  },
  "日光": {
    "kana": "にっこう",
    "definition": "sunlight"
  },
  "毎日": {
    "kana": "まいにち",
    "definition": "every day"
  },
  "連日": {
    "kana": "れんじつ",
    "definition": "consecutive days"
  },
  "平日": {
    "kana": "へいじつ",
    "definition": "weekday"
  },
  "休日": {
    "kana": "きゅうじつ",
    "definition": "holiday"
  },
  "尿意": {
    "kana": "にょうい",
    "definition": "urge to urinate"
  },
  "任意": {
    "kana": "にんい",
    "definition": "Any"
  },
  "年代": {
    "kana": "ねんだい",
    "definition": "age"
  },
  "豊年": {
    "kana": "ほうねん",
    "definition": "good year"
  },
  "派生": {
    "kana": "はせい",
    "definition": "derivation"
  },
  "排気": {
    "kana": "はいき",
    "definition": "exhaust"
  },
  "輩出": {
    "kana": "はいしゅつ",
    "definition": "produce"
  },
  "配分": {
    "kana": "はいぶん",
    "definition": "Allocation"
  },
  "一拍": {
    "kana": "いっぱく",
    "definition": "one beat"
  },
  "拍子": {
    "kana": "ひょうし",
    "definition": "time signature"
  },
  "明白": {
    "kana": "めいはく",
    "definition": "Obvious"
  },
  "爆発": {
    "kana": "ばくはつ",
    "definition": "explosion"
  },
  "発芽": {
    "kana": "はつが",
    "definition": "germination"
  },
  "発祥": {
    "kana": "はっしょう",
    "definition": "Origin"
  },
  "発明": {
    "kana": "はつめい",
    "definition": "invention"
  },
  "突発": {
    "kana": "とっぱつ",
    "definition": "sudden"
  },
  "発作": {
    "kana": "ほっさ",
    "definition": "seizure"
  },
  "発端": {
    "kana": "ほったん",
    "definition": "beginning"
  },
  "発起": {
    "kana": "ほっき",
    "definition": "initiating"
  },
  "判明": {
    "kana": "はんめい",
    "definition": "found out"
  },
  "大判": {
    "kana": "おおばん",
    "definition": "large format"
  },
  "半分": {
    "kana": "はんぶん",
    "definition": "half"
  },
  "半面": {
    "kana": "はんめん",
    "definition": "half"
  },
  "大半": {
    "kana": "たいはん",
    "definition": "majority"
  },
  "内省": {
    "kana": "ないせい",
    "definition": "introspection"
  },
  "出帆": {
    "kana": "しゅっぱん",
    "definition": "set sail"
  },
  "搬出": {
    "kana": "はんしゅつ",
    "definition": "carrying out"
  },
  "出版": {
    "kana": "しゅっぱん",
    "definition": "publication"
  },
  "番人": {
    "kana": "ばんにん",
    "definition": "guardian"
  },
  "蛮行": {
    "kana": "ばんこう",
    "definition": "brutality"
  },
  "蛮人": {
    "kana": "ばんにん",
    "definition": "barbarian"
  },
  "肥大": {
    "kana": "ひだい",
    "definition": "Hypertrophy"
  },
  "飛行": {
    "kana": "ひこう",
    "definition": "flight"
  },
  "尾行": {
    "kana": "びこう",
    "definition": "tailing"
  },
  "気孔": {
    "kana": "きこう",
    "definition": "stomata"
  },
  "筆力": {
    "kana": "ひつりょく",
    "definition": "writing power"
  },
  "標本": {
    "kana": "ひょうほん",
    "definition": "specimen"
  },
  "表面": {
    "kana": "ひょうめん",
    "definition": "surface"
  },
  "発表": {
    "kana": "はっぴょう",
    "definition": "announcement"
  },
  "病気": {
    "kana": "びょうき",
    "definition": "disease"
  },
  "作品": {
    "kana": "さくひん",
    "definition": "the work"
  },
  "上品": {
    "kana": "じょうひん",
    "definition": "Classy"
  },
  "頻度": {
    "kana": "ひんど",
    "definition": "frequency"
  },
  "頻発": {
    "kana": "ひんぱつ",
    "definition": "Frequent"
  },
  "婦人": {
    "kana": "ふじん",
    "definition": "Woman"
  },
  "分布": {
    "kana": "ぶんぷ",
    "definition": "distribution"
  },
  "浮力": {
    "kana": "ふりょく",
    "definition": "buoyancy"
  },
  "武力": {
    "kana": "ぶりょく",
    "definition": "force"
  },
  "文武": {
    "kana": "ぶんぶ",
    "definition": "literary and military"
  },
  "部分": {
    "kana": "ぶぶん",
    "definition": "part"
  },
  "本部": {
    "kana": "ほんぶ",
    "definition": "headquarters"
  },
  "水筒": {
    "kana": "すいとう",
    "definition": "Water bottle"
  },
  "風袋": {
    "kana": "ふうたい",
    "definition": "Tare"
  },
  "風力": {
    "kana": "ふうりょく",
    "definition": "wind power"
  },
  "強風": {
    "kana": "きょうふう",
    "definition": "strong wind"
  },
  "中風": {
    "kana": "ちゅうぶう",
    "definition": "moderate wind"
  },
  "覆面": {
    "kana": "ふくめん",
    "definition": "mask"
  },
  "人物": {
    "kana": "じんぶつ",
    "definition": "person"
  },
  "分解": {
    "kana": "ぶんかい",
    "definition": "Disassembly"
  },
  "分別": {
    "kana": "ふんべつ",
    "definition": "Separation"
  },
  "分銅": {
    "kana": "ふんどう",
    "definition": "weight"
  },
  "五分": {
    "kana": "ごぶ",
    "definition": "Five minutes"
  },
  "分泌": {
    "kana": "ぶんぴつ",
    "definition": "secretion"
  },
  "噴出": {
    "kana": "ふんしゅつ",
    "definition": "spurt"
  },
  "噴水": {
    "kana": "ふんすい",
    "definition": "fountain"
  },
  "発憤": {
    "kana": "はっぷん",
    "definition": "be inspired"
  },
  "奮発": {
    "kana": "ふんぱつ",
    "definition": "spurred"
  },
  "内紛": {
    "kana": "ないふん",
    "definition": "infighting"
  },
  "文学": {
    "kana": "ぶんがく",
    "definition": "literature"
  },
  "作文": {
    "kana": "さくぶん",
    "definition": "composition"
  },
  "平面": {
    "kana": "へいめん",
    "definition": "Plane"
  },
  "米作": {
    "kana": "べいさく",
    "definition": "Rice farming"
  },
  "壁面": {
    "kana": "へきめん",
    "definition": "wall surface"
  },
  "大変": {
    "kana": "たいへん",
    "definition": "hard"
  },
  "便法": {
    "kana": "べんぽう",
    "definition": "expedient"
  },
  "日歩": {
    "kana": "ひぶ",
    "definition": "daily walk"
  },
  "墓地": {
    "kana": "ぼち",
    "definition": "cemetery"
  },
  "名簿": {
    "kana": "めいぼ",
    "definition": "roster"
  },
  "年俸": {
    "kana": "ねんぽう",
    "definition": "annual salary"
  },
  "本俸": {
    "kana": "ほんぽう",
    "definition": "full pay"
  },
  "内包": {
    "kana": "ないほう",
    "definition": "connotation"
  },
  "奉行": {
    "kana": "ぶぎょう",
    "definition": "magistrate"
  },
  "方法": {
    "kana": "ほうほう",
    "definition": "Method"
  },
  "地方": {
    "kana": "ちほう",
    "definition": "region"
  },
  "法曹": {
    "kana": "ほうそう",
    "definition": "legal profession"
  },
  "法則": {
    "kana": "ほうそく",
    "definition": "law"
  },
  "法律": {
    "kana": "ほうりつ",
    "definition": "law"
  },
  "文法": {
    "kana": "ぶんぽう",
    "definition": "grammar"
  },
  "大砲": {
    "kana": "たいほう",
    "definition": "Cannon"
  },
  "胞子": {
    "kana": "ほうし",
    "definition": "spore"
  },
  "本邦": {
    "kana": "ほんぽう",
    "definition": "Japan"
  },
  "人望": {
    "kana": "じんぼう",
    "definition": "popularity"
  },
  "大望": {
    "kana": "たいぼう",
    "definition": "ambition"
  },
  "本望": {
    "kana": "ほんもう",
    "definition": "long-cherished wish"
  },
  "膨大": {
    "kana": "ぼうだい",
    "definition": "huge"
  },
  "出没": {
    "kana": "しゅつぼつ",
    "definition": "Haunting"
  },
  "出奔": {
    "kana": "しゅつほん",
    "definition": "running away"
  },
  "本来": {
    "kana": "ほんらい",
    "definition": "originally"
  },
  "翻意": {
    "kana": "ほんい",
    "definition": "change of mind"
  },
  "凡人": {
    "kana": "ぼんじん",
    "definition": "ordinary person"
  },
  "盆地": {
    "kana": "ぼんち",
    "definition": "basin"
  },
  "魔法": {
    "kana": "まほう",
    "definition": "magic"
  },
  "大枚": {
    "kana": "たいまい",
    "definition": "large sheet"
  },
  "毎度": {
    "kana": "まいど",
    "definition": "every time"
  },
  "一抹": {
    "kana": "いちまつ",
    "definition": "a touch"
  },
  "本末": {
    "kana": "ほんまつ",
    "definition": "real intention"
  },
  "末子": {
    "kana": "まっし",
    "definition": "youngest son"
  },
  "万一": {
    "kana": "まんいち",
    "definition": "just in case"
  },
  "魅力": {
    "kana": "みりょく",
    "definition": "charm"
  },
  "無名": {
    "kana": "むめい",
    "definition": "nameless"
  },
  "名誉": {
    "kana": "めいよ",
    "definition": "honor"
  },
  "有名": {
    "kana": "ゆうめい",
    "definition": "famous"
  },
  "名字": {
    "kana": "みょうじ",
    "definition": "surname"
  },
  "本名": {
    "kana": "ほんみょう",
    "definition": "real name"
  },
  "大名": {
    "kana": "だいみょう",
    "definition": "feudal lord"
  },
  "生命": {
    "kana": "せいめい",
    "definition": "life"
  },
  "明日": {
    "kana": "あした",
    "definition": "tomorrow"
  },
  "光明": {
    "kana": "こうみょう",
    "definition": "light"
  },
  "灯明": {
    "kana": "とうみょう",
    "definition": "lantern"
  },
  "面会": {
    "kana": "めんかい",
    "definition": "meeting"
  },
  "方面": {
    "kana": "ほうめん",
    "definition": "Direction"
  },
  "文盲": {
    "kana": "もんもう",
    "definition": "illiteracy"
  },
  "大木": {
    "kana": "たいぼく",
    "definition": "large tree"
  },
  "面目": {
    "kana": "めんぼく",
    "definition": "honor"
  },
  "野外": {
    "kana": "やがい",
    "definition": "outdoors"
  },
  "分野": {
    "kana": "ぶんや",
    "definition": "field"
  },
  "厄年": {
    "kana": "やくどし",
    "definition": "unlucky year"
  },
  "訳文": {
    "kana": "やくぶん",
    "definition": "translation"
  },
  "輸出": {
    "kana": "ゆしゅつ",
    "definition": "export"
  },
  "唯一": {
    "kana": "ゆいいつ",
    "definition": "Only"
  },
  "勇気": {
    "kana": "ゆうき",
    "definition": "courage"
  },
  "風致": {
    "kana": "ふうち",
    "definition": "scenery"
  },
  "誘発": {
    "kana": "ゆうはつ",
    "definition": "trigger"
  },
  "雄大": {
    "kana": "ゆうだい",
    "definition": "Grandeur"
  },
  "余地": {
    "kana": "よち",
    "definition": "room"
  },
  "曜日": {
    "kana": "ようび",
    "definition": "day of week"
  },
  "日曜": {
    "kana": "にちよう",
    "definition": "Sunday"
  },
  "洋風": {
    "kana": "ようふう",
    "definition": "Western style"
  },
  "用意": {
    "kana": "ようい",
    "definition": "preparation"
  },
  "本旨": {
    "kana": "ほんし",
    "definition": "main idea"
  },
  "養子": {
    "kana": "ようし",
    "definition": "adopted child"
  },
  "翌年": {
    "kana": "よくねん",
    "definition": "following year"
  },
  "来年": {
    "kana": "らいねん",
    "definition": "next year"
  },
  "雷名": {
    "kana": "かみなりめい",
    "definition": "thunder name"
  },
  "欄外": {
    "kana": "らんがい",
    "definition": "margin"
  },
  "履行": {
    "kana": "りこう",
    "definition": "fulfillment"
  },
  "裏面": {
    "kana": "うらめん",
    "definition": "back side"
  },
  "分離": {
    "kana": "ぶんり",
    "definition": "Separation"
  },
  "陸地": {
    "kana": "りくち",
    "definition": "land"
  },
  "流行": {
    "kana": "りゅうこう",
    "definition": "trend"
  },
  "留意": {
    "kana": "りゅうい",
    "definition": "keep in mind"
  },
  "粒子": {
    "kana": "りゅうし",
    "definition": "particle"
  },
  "寮生": {
    "kana": "りょうせい",
    "definition": "boarding student"
  },
  "度量": {
    "kana": "どりょう",
    "definition": "magnificence"
  },
  "人倫": {
    "kana": "にんりん",
    "definition": "humanity"
  },
  "一輪": {
    "kana": "いちりん",
    "definition": "One wheel"
  },
  "分類": {
    "kana": "ぶんるい",
    "definition": "classification"
  },
  "法令": {
    "kana": "ほうれい",
    "definition": "Law"
  },
  "例外": {
    "kana": "れいがい",
    "definition": "exception"
  },
  "例年": {
    "kana": "れいねん",
    "definition": "every year"
  },
  "励行": {
    "kana": "れいこう",
    "definition": "enforcement"
  },
  "麗人": {
    "kana": "れいじん",
    "definition": "beauty"
  },
  "暦年": {
    "kana": "こよみねん",
    "definition": "calendar year"
  },
  "列外": {
    "kana": "れつそと",
    "definition": "out of line"
  },
  "路上": {
    "kana": "ろじょう",
    "definition": "on the street"
  },
  "露出": {
    "kana": "ろしゅつ",
    "definition": "exposure"
  },
  "労力": {
    "kana": "ろうりょく",
    "definition": "effort"
  },
  "明朗": {
    "kana": "めいろう",
    "definition": "Cheerful"
  },
  "老人": {
    "kana": "ろうじん",
    "definition": "old man"
  },
  "六法": {
    "kana": "ろっぽう",
    "definition": "six laws"
  },
  "枠内": {
    "kana": "わくない",
    "definition": "within the limits of"
  },
  "湾内": {
    "kana": "わんない",
    "definition": "in the bay"
  },
  "腕力": {
    "kana": "わんりょく",
    "definition": "strength"
  }
};