const words = [
  // ĐẤT NƯỚC
  { jp: "くに", r: "kuni", m: "Đất nước" },
  { jp: "にほん", r: "nihon", m: "Nhật Bản" },
  { jp: "ベトナム", r: "betonamu", m: "Việt Nam" },
  { jp: "かんこく", r: "kankoku", m: "Hàn Quốc" },
  { jp: "ちゅうごく", r: "chuugoku", m: "Trung Quốc" },
  { jp: "アメリカ", r: "amerika", m: "Mỹ" },
  { jp: "イギリス", r: "igirisu", m: "Anh" },
  { jp: "インド", r: "indo", m: "Ấn Độ" },
  { jp: "インドネシア", r: "indoneshia", m: "Indonesia" },
  { jp: "マレーシア", r: "mareeshia", m: "Malaysia" },
  { jp: "フィリピン", r: "firipin", m: "Philippines" },
  { jp: "タイ", r: "tai", m: "Thái Lan" },
  { jp: "イタリア", r: "itaria", m: "Italia" },
  { jp: "オーストラリア", r: "oosutoraria", m: "Úc" },
  { jp: "ロシア", r: "roshia", m: "Nga" },
  { jp: "ブラジル", r: "burajiru", m: "Brazil" },

  // NGHỀ NGHIỆP
  { jp: "きょうし", r: "kyoushi", m: "Giáo viên" },
  { jp: "せんせい", r: "sensei", m: "Giáo viên" },
  { jp: "がくせい", r: "gakusei", m: "Học sinh" },
  { jp: "だいがく", r: "daigaku", m: "Trường Đại học" },
  { jp: "こうこう", r: "koukou", m: "Trường cấp 3" },
  { jp: "がっこう", r: "gakkou", m: "Trường học" },
  { jp: "かいしゃいん", r: "kaishain", m: "Nhân viên công ty" },
  { jp: "ぎんこういん", r: "ginkouin", m: "Nhân viên ngân hàng" },
  { jp: "エンジニア", r: "enjineia", m: "Kỹ sư" },
  { jp: "いしゃ", r: "isha", m: "Bác sĩ" },
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
