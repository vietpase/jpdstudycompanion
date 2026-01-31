const words = [
  // UNIT 2 – SỐ ĐẾM
  { jp: "一", r: "いち (ichi)", m: "Một" },
  { jp: "二", r: "に (ni)", m: "Hai" },
  { jp: "三", r: "さん (san)", m: "Ba" },
  { jp: "四", r: "よん (yon)", m: "Bốn" },
  { jp: "五", r: "ご (go)", m: "Năm" },
  { jp: "六", r: "ろく (roku)", m: "Sáu" },
  { jp: "七", r: "なな (nana)", m: "Bảy" },
  { jp: "八", r: "はち (hachi)", m: "Tám" },
  { jp: "九", r: "きゅう (kyuu)", m: "Chín" },
  { jp: "十", r: "じゅう (juu)", m: "Mười" },
  { jp: "百", r: "ひゃく (hyaku)", m: "Trăm" },

  // ĐƠN VỊ SỐ LỚN & TIỀN TỆ
  { jp: "千", r: "せん (sen)", m: "Nghìn" },
  { jp: "万", r: "まん (man)", m: "Vạn" },
  { jp: "円", r: "えん (en)", m: "Yên (đơn vị tiền Nhật)" },
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
