const words = [
  // NHÀ CỬA – CON NGƯỜI
  { jp: "家", r: "いえ (ie)", m: "Căn nhà" },
  { jp: "部屋", r: "へや (heya)", m: "Căn phòng" },
  { jp: "デパート", r: "デパート (depa-to)", m: "Trung tâm thương mại" },
  { jp: "美術館", r: "びじゅつかん (bijutsukan)", m: "Bảo tàng mỹ thuật" },
  { jp: "家族", r: "かぞく (kazoku)", m: "Gia đình" },
  { jp: "恋人", r: "こいびと (koibito)", m: "Người yêu" },
  { jp: "友達", r: "ともだち (tomodachi)", m: "Bạn bè" },
  { jp: "ゲーム", r: "ゲーム (ge-mu)", m: "Game" },
  { jp: "ルームメイト", r: "ルームメイト (ru-mumeito)", m: "Bạn cùng phòng" },

  // ĐỘNG TỪ
  { jp: "会います", r: "あいます (aimasu)", m: "Gặp" },
  { jp: "作ります", r: "つくります (tsukurimasu)", m: "Làm / Nấu" },
  { jp: "買い物します", r: "かいものします (kaimonoshimasu)", m: "Mua sắm" },
  { jp: "食事します", r: "しょくじします (shokujishimasu)", m: "Ăn / Dùng bữa" },
  { jp: "登ります", r: "のぼります (noborimasu)", m: "Leo" },
  { jp: "入ります", r: "はいります (hairimasu)", m: "Đi vào / Bước vào" },
  { jp: "遊びます", r: "あそびます (asobimasu)", m: "Chơi" },
  { jp: "借ります", r: "かります (karimasu)", m: "Mượn" },

  // DANH TỪ KHÁC
  { jp: "風", r: "かぜ (kaze)", m: "Cảm lạnh" },
  { jp: "服", r: "ふく (fuku)", m: "Quần áo" },
  { jp: "絵", r: "え (e)", m: "Bức tranh" },
  { jp: "景色", r: "けしき (keshiki)", m: "Phong cảnh" },
  { jp: "自転車", r: "じてんしゃ (jitensha)", m: "Xe đạp" },
  { jp: "写真を取ります", r: "しゃしんをとります (shashin wo torimasu)", m: "Chụp ảnh" },

  // TÍNH TỪ
  { jp: "面白い", r: "おもしろい (omoshiroi)", m: "Thú vị" },
  { jp: "忙しい", r: "いそがしい (isogashii)", m: "Bận" },
  { jp: "暇", r: "ひま (hima)", m: "Rảnh" },
  { jp: "気持ちがいい", r: "きもちがいい (kimochi ga ii)", m: "Cảm thấy dễ chịu" },
  { jp: "高い", r: "たかい (takai)", m: "Đắt / Cao" },
  { jp: "安い", r: "やすい (yasui)", m: "Rẻ" },
  { jp: "楽しい", r: "たのしい (tanoshii)", m: "Vui vẻ" },
  { jp: "難しい", r: "むずかしい (muzukashii)", m: "Khó" },
  { jp: "簡単", r: "かんたん (kantan)", m: "Dễ dàng" },
  { jp: "欲しい", r: "ほしい (hoshii)", m: "Muốn" },
  { jp: "好き", r: "すき (suki)", m: "Thích" },
  { jp: "嫌い", r: "きらい (kirai)", m: "Ghét" },

  // THỜI GIAN
  { jp: "今日", r: "きょう (kyou)", m: "Hôm nay" },
  { jp: "明日", r: "あした (ashita)", m: "Ngày mai" },
  { jp: "明後日", r: "あさって (asatte)", m: "Ngày kia (sau ngày mai)" },
  { jp: "昨日", r: "きのう (kinou)", m: "Ngày hôm qua" },
  { jp: "一昨日", r: "おととい (ototoi)", m: "Hôm kia" },
  { jp: "先週", r: "せんしゅう (senshuu)", m: "Tuần trước" },
  { jp: "先月", r: "せんげつ (sengetsu)", m: "Tháng trước" },
  { jp: "今朝", r: "けさ (kesa)", m: "Sáng nay" },
  { jp: "今晩", r: "こんばん (konban)", m: "Tối nay" },
  { jp: "今度", r: "こんど (kondo)", m: "Lần tới / Lần sau" },
  { jp: "今年", r: "ことし (kotoshi)", m: "Năm nay" },
  { jp: "来年", r: "らいねん (rainen)", m: "Năm sau" },
  { jp: "去年", r: "きょねん (kyonen)", m: "Năm trước" },

  // KHÁC
  { jp: "天気", r: "てんき (tenki)", m: "Thời tiết" },
  { jp: "どうして", r: "どうして (doushite)", m: "Tại sao?" },
  { jp: "洗濯します", r: "せんたくします (sentakushimasu)", m: "Giặt giũ" },
  { jp: "掃除します", r: "そうじします (soujishimasu)", m: "Dọn dẹp" }
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
