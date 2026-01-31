const words = [
  // ĐỒ ĂN – NƯỚC UỐNG
  { jp: "くだもの", r: "kudamono", m: "Trái cây" },
  { jp: "いちご", r: "ichigo", m: "Trái dâu" },
  { jp: "りんご", r: "ringo", m: "Trái táo" },
  { jp: "すいか", r: "suika", m: "Trái dưa hấu" },
  { jp: "バナナ", r: "banana", m: "Trái chuối" },
  { jp: "てんぷら", r: "tenpura", m: "Đồ chiên (tempura)" },
  { jp: "にく", r: "niku", m: "Thịt" },
  { jp: "ぶた", r: "buta", m: "Con heo" },
  { jp: "ぶたにく", r: "butaniku", m: "Thịt heo" },
  { jp: "にわとり", r: "niwatori", m: "Con gà" },
  { jp: "とりにく", r: "toriniku", m: "Thịt gà" },
  { jp: "うし", r: "ushi", m: "Con bò" },
  { jp: "ぎゅうにく", r: "gyuuniku", m: "Thịt bò" },
  { jp: "たべもの", r: "tabemono", m: "Đồ ăn" },
  { jp: "ごはん", r: "gohan", m: "Cơm" },
  { jp: "さかな", r: "sakana", m: "Cá" },
  { jp: "やさい", r: "yasai", m: "Rau" },
  { jp: "りょうり", r: "ryouri", m: "Món ăn" },
  { jp: "カレーライス", r: "karee raisu", m: "Cơm cà ri" },
  { jp: "スープ", r: "suupu", m: "Súp" },
  { jp: "ぎゅうどん", r: "gyuudon", m: "Cơm bò" },
  { jp: "とんかつ", r: "tonkatsu", m: "Thịt heo chiên xù" },
  { jp: "ハンバーグ", r: "hanbaagu", m: "Hamburger" },
  { jp: "のみもの", r: "nomimono", m: "Thức uống" },
  { jp: "コーヒー", r: "koohii", m: "Cà phê" },
  { jp: "こうちゃ", r: "koucha", m: "Trà đen" },
  { jp: "おちゃ", r: "ocha", m: "Trà" },
  { jp: "ミルク", r: "miruku", m: "Sữa (pha chế)" },
  { jp: "ビール", r: "biiru", m: "Bia" },
  { jp: "ジュース", r: "juusu", m: "Nước ép" },
  { jp: "ワイン", r: "wain", m: "Rượu vang" },
  { jp: "おさけ", r: "osake", m: "Rượu sake" },
  { jp: "ぎゅうにゅう", r: "gyuunyuu", m: "Sữa tươi" },
  { jp: "ドイツ", r: "doitsu", m: "Nước Đức" },
  { jp: "フランス", r: "furansu", m: "Nước Pháp" },

  // TỪ VỰNG BÀI 3 – HỖN HỢP
  { jp: "ごぜん", r: "gozen", m: "AM" },
  { jp: "ごご", r: "gogo", m: "PM" },
  { jp: "ぎんこう", r: "ginkou", m: "Ngân hàng" },
  { jp: "たいいくかん", r: "taiikukan", m: "Nhà thi đấu" },
  { jp: "としょかん", r: "toshokan", m: "Thư viện" },
  { jp: "びょういん", r: "byouin", m: "Bệnh viện" },
  { jp: "ゆうびんきょく", r: "yuubinkyoku", m: "Bưu điện" },
  { jp: "じゅぎょう", r: "jugyou", m: "Giờ học" },
  { jp: "べんきょう", r: "benkyou", m: "Học" },
  { jp: "テスト", r: "tesuto", m: "Kiểm tra" },
  { jp: "やすみ", r: "yasumi", m: "Nghỉ ngơi" },
  { jp: "じかん", r: "jikan", m: "Thời gian" },
  { jp: "スケジュール", r: "sukejuuru", m: "Thời khóa biểu" },
  { jp: "アルバイト", r: "arubaito", m: "Làm thêm" },
  { jp: "パーティー", r: "paatii", m: "Bữa tiệc" },
  { jp: "バーベキュー", r: "baabekyuu", m: "Tiệc BBQ" },
  { jp: "はなび", r: "hanabi", m: "Pháo hoa" },
  { jp: "はなみ", r: "hanami", m: "Ngắm hoa" },
  { jp: "ホームステイ", r: "hoomusutei", m: "Homestay" },
  { jp: "おまつり", r: "omatsuri", m: "Lễ hội" },
  { jp: "うみ", r: "umi", m: "Biển" },
  { jp: "こうえん", r: "kouen", m: "Công viên" },
  { jp: "さくら", r: "sakura", m: "Hoa anh đào" },
  { jp: "すし", r: "sushi", m: "Sushi" },
  { jp: "バイク", r: "baiku", m: "Xe máy" },
  { jp: "ひこうき", r: "hikouki", m: "Máy bay" },
  { jp: "ふね", r: "fune", m: "Tàu thủy" },
  { jp: "でんしゃ", r: "densha", m: "Tàu điện" },
  { jp: "ちかてつ", r: "chikatetsu", m: "Tàu điện ngầm" },
  { jp: "しんかんせん", r: "shinkansen", m: "Tàu cao tốc" },
  { jp: "バス", r: "basu", m: "Xe buýt" },
  { jp: "タクシー", r: "takushii", m: "Taxi" },
  { jp: "じてんしゃ", r: "jitensha", m: "Xe đạp" },
  { jp: "あるいて", r: "aruite", m: "Đi bộ" },

  // THỜI GIAN
  { jp: "あさ", r: "asa", m: "Buổi sáng" },
  { jp: "ひる", r: "hiru", m: "Buổi trưa" },
  { jp: "ごご", r: "gogo", m: "Buổi chiều" },
  { jp: "ばん", r: "ban", m: "Buổi tối" },
  { jp: "よる", r: "yoru", m: "Buổi tối" },
  { jp: "きょう", r: "kyou", m: "Hôm nay" },
  { jp: "あした", r: "ashita", m: "Ngày mai" },
  { jp: "あさって", r: "asatte", m: "Ngày mốt" },
  { jp: "こんばん", r: "konban", m: "Tối nay" },
  { jp: "こんや", r: "konya", m: "Tối nay" },
  { jp: "ひるやすみ", r: "hiruyasumi", m: "Nghỉ trưa" },

  // ĐỘNG TỪ & LIÊN QUAN
  { jp: "おべんとう", r: "obentou", m: "Cơm hộp" },
  { jp: "いちねん", r: "ichinen", m: "1 năm" },
  { jp: "はる", r: "haru", m: "Mùa xuân" },
  { jp: "なつ", r: "natsu", m: "Mùa hè" },
  { jp: "あき", r: "aki", m: "Mùa thu" },
  { jp: "ふゆ", r: "fuyu", m: "Mùa đông" },
  { jp: "ゴールデンウィーク", r: "gooruden wiiku", m: "Tuần lễ vàng" },
  { jp: "いきます", r: "ikimasu", m: "Đi" },
  { jp: "きます", r: "kimasu", m: "Đến" },
  { jp: "かえります", r: "kaerimasu", m: "Về" },
  { jp: "たべます", r: "tabemasu", m: "Ăn" },
  { jp: "のみます", r: "nomimasu", m: "Uống" },
  { jp: "みます", r: "mimasu", m: "Xem" },
  { jp: "します", r: "shimasu", m: "Làm / chơi" },
  { jp: "ねます", r: "nemasu", m: "Ngủ" },
  { jp: "おきます", r: "okimasu", m: "Thức dậy" },
  { jp: "はたらきます", r: "hatarakimasu", m: "Làm việc" },
  { jp: "ききます", r: "kikimasu", m: "Nghe" },
  { jp: "かいます", r: "kaimasu", m: "Mua" },
  { jp: "よみます", r: "yomimasu", m: "Đọc" },
  { jp: "なつやすみ", r: "natsuyasumi", m: "Nghỉ hè" },
  { jp: "サラダ", r: "sarada", m: "Salad" },
  { jp: "チーズ", r: "chiizu", m: "Phô mai" },
  { jp: "インターネット", r: "intaanetto", m: "Internet" },
  { jp: "コンビニ", r: "konbini", m: "Cửa hàng tiện lợi" },
  { jp: "やすみます", r: "yasumimasu", m: "Nghỉ ngơi" },
  { jp: "まいにち", r: "mainichi", m: "Mỗi ngày" },
  { jp: "まいばん", r: "maiban", m: "Mỗi tối" },
  { jp: "まいあさ", r: "maiasa", m: "Mỗi sáng" },
];

let i = 0;

function render() {
  const card = document.querySelector(".card");
  card.classList.remove("fade");
  void card.offsetWidth;
  card.classList.add("fade");

  jp.innerText = words[i].jp;
  reading.innerText = words[i].r;
  meaning.innerText = words[i].m;
  meaning.classList.add("hidden");
}

function toggleMeaning() {
  meaning.classList.toggle("hidden");
}

function nextWord() {
  i = (i + 1) % words.length;
  render();
}

function prevWord() {
  i--;
  if (i < 0) i = words.length - 1;
  render();
}
function toggleList() {
  const list = document.getElementById("wordList");
  list.classList.toggle("hidden");
}

function renderList() {
  const list = document.getElementById("wordList");

  list.innerHTML = `
    <div class="list-header">
      <span>#</span>
      <span>Japanese</span>
      <span>Romaji</span>
      <span>Meaning</span>
    </div>
  `;

  words.forEach((w, index) => {
    const row = document.createElement("div");
    row.className = "list-row";
    row.innerHTML = `
      <span class="stt">${index + 1}</span>
      <span>${w.jp}</span>
      <span>${w.r}</span>
      <span>${w.m}</span>
    `;
    list.appendChild(row);
  });
}

render();
renderList();
