const words = [
  { jp: "います", r: "います (imasu)", m: "Có (sự tồn tại của người/động vật)" },
  { jp: "あります", r: "あります (arimasu)", m: "Có (sự tồn tại của đồ vật)" },

  { jp: "改札", r: "かいさつ (kaisatsu)", m: "Cổng soát vé" },
  { jp: "交番", r: "こうばん (kouban)", m: "Đồn cảnh sát" },
  { jp: "自動販売機", r: "じどうはんばいき (jidouhanbaiki)", m: "Máy bán hàng tự động" },
  { jp: "バスてい", r: "バスてい (basutei)", m: "Điểm chờ xe bus" },
  { jp: "ポスト", r: "ポスト (posuto)", m: "Thùng thư / Hòm thư" },
  { jp: "花", r: "はな (hana)", m: "Hoa" },

  { jp: "上", r: "うえ (ue)", m: "Phía trên" },
  { jp: "下", r: "した (shita)", m: "Phía dưới" },
  { jp: "後ろ", r: "うしろ (ushiro)", m: "Phía sau" },
  { jp: "前", r: "まえ (mae)", m: "Phía trước" },
  { jp: "中", r: "なか (naka)", m: "Bên trong" },
  { jp: "外", r: "そと (soto)", m: "Bên ngoài" },
  { jp: "左", r: "ひだり (hidari)", m: "Bên trái" },
  { jp: "右", r: "みぎ (migi)", m: "Bên phải" },
  { jp: "間", r: "あいだ (aida)", m: "Ở giữa" },
  { jp: "近く", r: "ちかく (chikaku)", m: "Ở gần" },
  { jp: "隣", r: "となり (tonari)", m: "Bên cạnh" },
  { jp: "横", r: "よこ (yoko)", m: "Bên cạnh (chiều ngang)" },

  { jp: "椅子", r: "いす (isu)", m: "Cái ghế" },
  { jp: "テーブル", r: "テーブル (te-buru)", m: "Cái bàn" },
  { jp: "電子レンジ", r: "でんしレンジ (denshi renji)", m: "Lò vi sóng" },
  { jp: "冷蔵庫", r: "れいぞうこ (reizouko)", m: "Tủ lạnh" },
  { jp: "砂糖", r: "さとう (satou)", m: "Đường" },
  { jp: "塩", r: "しお (shio)", m: "Muối" },
  { jp: "醤油", r: "しょうゆ (shouyu)", m: "Xì dầu" },
  { jp: "箸", r: "はし (hashi)", m: "Đôi đũa" },
  { jp: "スプーン", r: "スプーン (supu-n)", m: "Thìa" },
  { jp: "ナイフ", r: "ナイフ (naifu)", m: "Dao" },
  { jp: "フォーク", r: "フォーク (fo-ku)", m: "Dĩa" },
  { jp: "手", r: "て (te)", m: "Tay" },
  { jp: "台所", r: "だいどころ (daidokoro)", m: "Phòng bếp" },
  { jp: "たばこ", r: "たばこ (tabako)", m: "Thuốc lá" },
  { jp: "電話", r: "でんわ (denwa)", m: "Điện thoại" },
  { jp: "窓", r: "まど (mado)", m: "Cửa sổ" },
  { jp: "ギター", r: "ギター (gita-)", m: "Guitar" },

  { jp: "洗います", r: "あらいます (araimasu)", m: "Rửa" },
  { jp: "書きます", r: "かきます (kakimasu)", m: "Viết / Vẽ" },
  { jp: "切ります", r: "きります (kirimasu)", m: "Cắt" },
  { jp: "手伝います", r: "てつだいます (tetsudaimasu)", m: "Giúp" },
  { jp: "入れます", r: "いれます (iremasu)", m: "Cho vào (+ に)" },
  { jp: "出します", r: "だします (dashimasu)", m: "Bỏ ra / Lấy ra (+ から)" },
  { jp: "教えます", r: "おしえます (oshiemasu)", m: "Chỉ dạy" },
  { jp: "電話を掛けます", r: "でんわをかけます (denwa wo kakemasu)", m: "Gọi điện" },
  { jp: "歌います", r: "うたいます (utaimasu)", m: "Hát" },
  { jp: "吸います", r: "すいます (suimasu)", m: "Hút" },
  { jp: "話します", r: "はなします (hanashimasu)", m: "Nói chuyện" },
  { jp: "弾きます", r: "ひきます (hikimasu)", m: "Chơi (nhạc cụ)" },
  { jp: "持ちます", r: "もちます (mochimasu)", m: "Mang theo / Cầm" },
  { jp: "開けます", r: "あけます (akemasu)", m: "Mở" },
  { jp: "閉めます", r: "しめます (shimemasu)", m: "Đóng" },
  { jp: "貸します", r: "かします (kashimasu)", m: "Cho mượn" },
  { jp: "聞きます", r: "ききます (kikimasu)", m: "Nghe / Hỏi" },
  { jp: "取ります", r: "とります (torimasu)", m: "Lấy" }
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
