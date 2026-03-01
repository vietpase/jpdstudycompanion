const words = [
  // UNIT – KANJI ĐỊA DANH & CON NGƯỜI

  { jp: "京", r: "キョウ (kyou)", m: "Kinh" },
  { jp: "東京", r: "とうきょう (toukyou)", m: "Tokyo" },
  { jp: "東", r: "ひがし (higashi)", m: "Phía Đông" },

  { jp: "名", r: "メイ (mei) / な (na)", m: "Danh" },
  { jp: "名人", r: "めいじん (meijin)", m: "Danh nhân" },
  { jp: "前", r: "ゼン (zen) / まえ (mae)", m: "Tiền / Phía trước" },
  { jp: "名前", r: "なまえ (namae)", m: "Tên" },
  { jp: "前日", r: "ぜんじつ (zenjitsu)", m: "Mấy hôm trước" },
  { jp: "前", r: "まえ (mae)", m: "Phía trước / Đằng trước" },

  { jp: "国", r: "コク (koku) / くに (kuni)", m: "Quốc / Đất nước" },
  { jp: "国語", r: "こくご (kokugo)", m: "Quốc ngữ" },

  { jp: "男", r: "ダン (dan) / おとこ (otoko)", m: "Nam / Đàn ông" },
  { jp: "男の人", r: "おとこのひと (otoko no hito)", m: "Người đàn ông" },

  { jp: "女", r: "ジョ (jo) / おんな (onna)", m: "Nữ / Phụ nữ" },
  { jp: "女の人", r: "おんなのひと (onna no hito)", m: "Người phụ nữ" },
  { jp: "男女", r: "だんじょ (danjo)", m: "Nam nữ" },

  { jp: "区", r: "く (ku)", m: "Khu" },
  { jp: "市", r: "シ (shi) / いち (ichi)", m: "Thị / Thành phố" },
  { jp: "ホーチミン市", r: "ホーチミンし (Ho Chi Minh shi)", m: "Thành phố Hồ Chí Minh" }
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
