const words = [
  { jp: "私", r: "わたし (watashi)", m: "Tôi" },
  { jp: "私立", r: "しりつ (shiritsu)", m: "Tư lập" },
  { jp: "あの人", r: "あのひと (ano hito)", m: "Người kia" },
  { jp: "タイ人", r: "タイじん (tai jin)", m: "Người Thái" },
  { jp: "三人", r: "さんにん (sannin)", m: "Ba người" },
  { jp: "一才", r: "いっさい (issai)", m: "Một tuổi" },
  { jp: "大学", r: "だいがく (daigaku)", m: "Đại học" },
  { jp: "大学生", r: "だいがくせい (daigakusei)", m: "Sinh viên đại học" },
  { jp: "学生", r: "がくせい (gakusei)", m: "Học sinh / Sinh viên" },
  { jp: "先生", r: "せんせい (sensei)", m: "Thầy / Cô giáo" },
  { jp: "学校", r: "がっこう (gakkou)", m: "Trường học" },
  { jp: "先生の日", r: "せんせいのひ (sensei no hi)", m: "Ngày Nhà giáo" },
  { jp: "三日", r: "みっか (mikka)", m: "Ngày mồng 3" },
  { jp: "本", r: "ほん (hon)", m: "Sách" },
  { jp: "日本", r: "にほん (nihon)", m: "Nhật Bản" },
  { jp: "日本人", r: "にほんじん (nihonjin)", m: "Người Nhật" },
  {
    jp: "日本語学校",
    r: "にほんごがっこう (nihongo gakkou)",
    m: "Trường tiếng Nhật",
  },
  { jp: "一月", r: "いちがつ (ichigatsu)", m: "Tháng 1" },
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
