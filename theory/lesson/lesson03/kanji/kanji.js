const words = [
  // UNIT 3 – THỨ, NGÀY, THỜI GIAN
  { jp: "月曜日", r: "げつようび (getsuyoubi)", m: "Thứ hai" },
  { jp: "月", r: "つき (tsuki)", m: "Mặt trăng / Tháng" },

  { jp: "火曜日", r: "かようび (kayoubi)", m: "Thứ ba" },
  { jp: "火", r: "か (ka)", m: "Lửa" },

  { jp: "水曜日", r: "すいようび (suiyoubi)", m: "Thứ tư" },
  { jp: "水", r: "みず (mizu)", m: "Nước" },

  { jp: "木曜日", r: "もくようび (mokuyoubi)", m: "Thứ năm" },
  { jp: "木", r: "き (ki)", m: "Cây / Gỗ" },

  { jp: "金曜日", r: "きんようび (kinyoubi)", m: "Thứ sáu" },
  { jp: "お金", r: "おかね (okane)", m: "Tiền" },

  { jp: "土曜日", r: "どようび (doyoubi)", m: "Thứ bảy" },
  { jp: "土", r: "つち (tsuchi)", m: "Đất" },

  { jp: "日曜日", r: "にちようび (nichiyoubi)", m: "Chủ nhật" },
  { jp: "先生の日", r: "せんせいのひ (sensei no hi)", m: "Ngày giáo viên" },

  { jp: "何曜日", r: "なんようび (nanyoubi)", m: "Thứ mấy" },
  { jp: "何日", r: "なんにち (nannichi)", m: "Ngày mấy" },
  { jp: "何月", r: "なんがつ (nangatsu)", m: "Tháng mấy" },
  { jp: "何時何分", r: "なんじなんぷん (nanji nanpun)", m: "Mấy giờ mấy phút" },
  { jp: "何年", r: "なんねん (nannen)", m: "Năm mấy" },

  { jp: "時間", r: "じかん (jikan)", m: "Thời gian" },
  {
    jp: "生年月日",
    r: "せいねんがっぴ (seinen gappi)",
    m: "Ngày tháng năm sinh",
  },

  { jp: "人間", r: "にんげん (ningen)", m: "Con người" },
  { jp: "分かります", r: "わかります (wakarimasu)", m: "Hiểu" },
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
