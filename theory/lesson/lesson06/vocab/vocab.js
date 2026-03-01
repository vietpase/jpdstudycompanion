const words = [
  { jp: "カラオケ", r: "カラオケ (karaoke)", m: "Karaoke" },
  { jp: "コンサート", r: "コンサート (konsa-to)", m: "Buổi hòa nhạc" },
  { jp: "試合", r: "しあい (shiai)", m: "Cuộc thi đấu / Trận đấu" },
  { jp: "野球", r: "やきゅう (yakyuu)", m: "Bóng chày" },
  { jp: "地図", r: "ちず (chizu)", m: "Bản đồ" },
  { jp: "ドライブ", r: "ドライブ (doraibu)", m: "Sự lái xe / Đi dạo bằng xe" },
  { jp: "チケット", r: "チケット (chiketto)", m: "Vé" },
  { jp: "水着", r: "みずぎ (mizugi)", m: "Đồ bơi" },
  { jp: "焼肉", r: "やきにく (yakiniku)", m: "Thịt nướng" },
  { jp: "ラーメン", r: "ラーメン (ra-men)", m: "Mì ramen" },
  { jp: "映画館", r: "えいがかん (eigakan)", m: "Rạp chiếu phim" },
  { jp: "地下鉄", r: "ちかてつ (chikatetsu)", m: "Tàu điện ngầm" },
  { jp: "歌手", r: "かしゅ (kashu)", m: "Ca sĩ" },
  { jp: "ジャズ", r: "ジャズ (jazu)", m: "Nhạc jazz" },
  { jp: "コース", r: "コース (ko-su)", m: "Bữa ăn đầy đủ / Khóa / Lộ trình" },
  { jp: "ツアー", r: "ツアー (tsua-)", m: "Chuyến du lịch" },

  { jp: "遠い", r: "とおい (tooi)", m: "Xa" },
  { jp: "近い", r: "ちかい (chikai)", m: "Gần" },
  { jp: "早い", r: "はやい (hayai)", m: "Nhanh / Sớm" },
  { jp: "遅い", r: "おそい (osoi)", m: "Chậm / Muộn" },
  { jp: "広い", r: "ひろい (hiroi)", m: "Rộng rãi" },
  { jp: "狭い", r: "せまい (semai)", m: "Chật hẹp" },

  { jp: "今週", r: "こんしゅう (konshuu)", m: "Tuần này" },
  { jp: "来週", r: "らいしゅう (raishuu)", m: "Tuần sau" },
  { jp: "今月", r: "こんげつ (kongetsu)", m: "Tháng này" },
  { jp: "来月", r: "らいげつ (raigetsu)", m: "Tháng sau" },

  { jp: "用事", r: "ようじ (youji)", m: "Việc bận" },
  { jp: "残念", r: "ざんねん (zannen)", m: "Đáng tiếc" },
  { jp: "食べ物", r: "たべもの (tabemono)", m: "Đồ ăn" },
  { jp: "飲み物", r: "のみもの (nomimono)", m: "Đồ uống" },
  { jp: "食べ放題", r: "たべほうだい (tabehoudai)", m: "Ăn buffet / Ăn thoải mái" },
  { jp: "季節", r: "きせつ (kisetsu)", m: "Mùa trong năm" },
  { jp: "コメディ", r: "コメディ (comedi)", m: "Hài kịch" },
  { jp: "全部", r: "ぜんぶ (zenbu)", m: "Tất cả / Toàn bộ" },
  { jp: "お好み焼き", r: "おこのみやき (okonomiyaki)", m: "Bánh xèo Nhật Bản" },
  { jp: "すき焼き", r: "すきやき (sukiyaki)", m: "Lẩu thịt bò" }
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
