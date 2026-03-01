const words = [
  // UNIT – KANJI THỜI GIAN & HOẠT ĐỘNG

  { jp: "今", r: "コン (kon) / いま (ima)", m: "Kim / Bây giờ" },
  { jp: "今日", r: "きょう (kyou)", m: "Hôm nay" },
  { jp: "今年", r: "ことし (kotoshi)", m: "Năm nay" },
  { jp: "今月", r: "こんげつ (kongetsu)", m: "Tháng này" },
  { jp: "今週", r: "こんしゅう (konshuu)", m: "Tuần này" },
  { jp: "今", r: "いま (ima)", m: "Bây giờ" },

  { jp: "来", r: "ライ (rai) / きます (kimasu)", m: "Lai / Đến" },
  { jp: "来週", r: "らいしゅう (raishuu)", m: "Tuần sau" },
  { jp: "来月", r: "らいげつ (raigetsu)", m: "Tháng sau" },
  { jp: "来年", r: "らいねん (rainen)", m: "Năm sau" },
  { jp: "来日", r: "らいにち (rainichi)", m: "Đến Nhật Bản" },
  { jp: "来ます", r: "きます (kimasu)", m: "Đến" },

  { jp: "帰", r: "キ (ki) / かえります (kaerimasu)", m: "Quy / Trở về" },
  { jp: "帰国", r: "きこく (kikoku)", m: "Về nước" },
  { jp: "帰ります", r: "かえります (kaerimasu)", m: "Trở về" },

  { jp: "会", r: "カイ (kai) / あいます (aimasu)", m: "Hội / Gặp" },
  { jp: "会見", r: "かいけん (kaiken)", m: "Hội họp" },
  { jp: "国会", r: "こっかい (kokkai)", m: "Quốc hội" },
  { jp: "会います", r: "あいます (aimasu)", m: "Gặp" },

  { jp: "社", r: "シャ (sha)", m: "Xã" },
  { jp: "会社", r: "かいしゃ (kaisha)", m: "Công ty" },
  { jp: "社会", r: "しゃかい (shakai)", m: "Xã hội" },

  { jp: "聞", r: "ブン (bun) / ききます (kikimasu)", m: "Văn / Nghe" },
  { jp: "新聞", r: "しんぶん (shinbun)", m: "Báo" },
  { jp: "聞きます", r: "ききます (kikimasu)", m: "Nghe / Hỏi" },

  { jp: "読", r: "ドク (doku) / よみます (yomimasu)", m: "Độc / Đọc" },
  { jp: "読み物", r: "よみもの (yomimono)", m: "Sách / Tạp chí" },
  { jp: "読みます", r: "よみます (yomimasu)", m: "Đọc" },

  { jp: "書", r: "ショ (sho) / かきます (kakimasu)", m: "Thư / Viết" },
  { jp: "書き物", r: "かきもの (kakimono)", m: "Tài liệu" },
  { jp: "読書", r: "どくしょ (dokusho)", m: "Đọc sách" },
  { jp: "書きます", r: "かきます (kakimasu)", m: "Viết" },

  { jp: "話", r: "ワ (wa) / はなします (hanashimasu)", m: "Thoại / Nói chuyện" },
  { jp: "話", r: "はなし (hanashi)", m: "Câu chuyện" },
  { jp: "会話", r: "かいわ (kaiwa)", m: "Hội thoại" },
  { jp: "話します", r: "はなします (hanashimasu)", m: "Nói chuyện" }
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
