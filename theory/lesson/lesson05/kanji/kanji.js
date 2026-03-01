const words = [
  // 先
  { jp: "先", r: "sen / saki", m: "Tiên (trước)" },
  { jp: "先生", r: "sensei", m: "Giáo viên" },
  { jp: "先日", r: "senjitsu", m: "Ngày trước" },
  { jp: "先に", r: "sakini", m: "Sớm hơn, trước" },
  { jp: "先にかえります。", r: "sakini kaerimasu", m: "Tôi xin phép về trước" },

  // 週
  { jp: "週", r: "shuu", m: "Chu (tuần)" },
  { jp: "先週", r: "senshuu", m: "Tuần trước" },
  { jp: "週間", r: "shuukan", m: "~ tuần (khoảng thời gian)" },

  // 毎
  { jp: "毎", r: "mai", m: "Mỗi" },
  { jp: "毎日", r: "mainichi", m: "Hàng ngày" },
  { jp: "毎週", r: "maishuu", m: "Hàng tuần" },
  { jp: "毎月", r: "maitsuki", m: "Hàng tháng" },
  { jp: "毎年", r: "maitoshi", m: "Hàng năm" },

  // 午
  { jp: "午", r: "go", m: "Ngọ" },
  { jp: "午前", r: "gozen", m: "A.M., giờ sáng" },

  // 後
  { jp: "後", r: "go / ato / ushiro", m: "Hậu (sau)" },
  { jp: "午後", r: "gogo", m: "P.M., giờ chiều" },
  { jp: "後ろ", r: "ushiro", m: "Phía sau (vị trí)" },
  { jp: "後", r: "ato", m: "Sau đó, sau khi (thời gian)" },

  // 見
  { jp: "見", r: "ken / mi", m: "Kiến (nhìn)" },
  { jp: "見学", r: "kengaku", m: "Kiến tập" },
  { jp: "見ます", r: "mimasu", m: "Nhìn" },

  // 食
  { jp: "食", r: "shoku / ta", m: "Thực (ăn)" },
  { jp: "食べます", r: "tabemasu", m: "Ăn" },
  { jp: "食事", r: "shokuji", m: "Dùng bữa" },

  // 飲
  { jp: "飲", r: "in / no", m: "Ẩm (uống)" },
  { jp: "飲食", r: "inshoku", m: "Ẩm thực, ăn uống" },
  { jp: "飲みます", r: "nomimasu", m: "Uống" },

  // 買
  { jp: "買", r: "bai / ka", m: "Mãi (mua)" },
  { jp: "買います", r: "kaimasu", m: "Mua" },

  // 物
  { jp: "物", r: "butsu / mono", m: "Vật" },
  { jp: "買い物", r: "kaimono", m: "Mua sắm" },
  { jp: "食べ物", r: "tabemono", m: "Đồ ăn" },
  { jp: "飲み物", r: "nomimono", m: "Đồ uống" },
  { jp: "人物", r: "jinbutsu", m: "Nhân vật" },
  { jp: "見物", r: "kenbutsu", m: "Ngắm cảnh" },

  // 行
  { jp: "行", r: "kou / gyou / i", m: "Hàng / Hành (đi)" },
  { jp: "行きます", r: "ikimasu", m: "Đi" },
  { jp: "行", r: "gyou", m: "Dòng kẻ" },

  // 休
  { jp: "休", r: "kyuu / yasu", m: "Hưu (nghỉ)" },
  { jp: "休み", r: "yasumi", m: "Nghỉ (danh từ)" },
  { jp: "休日", r: "kyuujitsu", m: "Ngày nghỉ" },
  { jp: "休みます", r: "yasumimasu", m: "Nghỉ (động từ)" }
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
