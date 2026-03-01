const words = [
  // PHƯƠNG TIỆN – ĐỊA ĐIỂM
  { jp: "車", r: "kuruma", m: "Xe ô tô" },
  { jp: "電車", r: "densha", m: "Tàu điện" },
  { jp: "飛行機", r: "hikouki", m: "Máy bay" },
  { jp: "駅", r: "eki", m: "Nhà ga" },
  { jp: "町", r: "machi", m: "Thị trấn" },
  { jp: "歩いて", r: "aruite", m: "Đi bộ" },
  { jp: "温泉", r: "onsen", m: "Suối nước nóng" },
  { jp: "川", r: "kawa", m: "Con sông" },
  { jp: "教会", r: "kyoukai", m: "Nhà thờ" },
  { jp: "お城", r: "oshiro", m: "Thành / Lâu đài" },
  { jp: "神社", r: "jinja", m: "Đền / Miếu thờ" },
  { jp: "お寺", r: "otera", m: "Chùa" },
  { jp: "新幹線", r: "shinkansen", m: "Tàu shinkansen" },
  { jp: "山", r: "yama", m: "Núi" },
  { jp: "ビル", r: "biru", m: "Tòa nhà" },
  { jp: "緑", r: "midori", m: "Cây xanh" },
  { jp: "北", r: "kita", m: "Phía Bắc" },
  { jp: "南", r: "minami", m: "Phía Nam" },
  { jp: "西", r: "nishi", m: "Phía Tây" },
  { jp: "東", r: "higashi", m: "Phía Đông" },
  { jp: "真ん中", r: "mannaka", m: "Trung tâm" },

  // TÍNH TỪ
  { jp: "新しい", r: "atarashii", m: "Mới" },
  { jp: "古い", r: "furui", m: "Cũ" },
  { jp: "大きい", r: "ookii", m: "To" },
  { jp: "小さい", r: "chiisai", m: "Nhỏ" },
  { jp: "高い", r: "takai", m: "Cao" },
  { jp: "低い", r: "hikui", m: "Thấp" },
  { jp: "賑やか", r: "nigiyaka", m: "Nhộn nhịp" },
  { jp: "静か", r: "shizuka", m: "Yên tĩnh" },
  { jp: "綺麗", r: "kirei", m: "Đẹp / Sạch" },
  { jp: "有名", r: "yuumei", m: "Nổi tiếng" },
  { jp: "多い", r: "ooi", m: "Nhiều" },
  { jp: "少ない", r: "sukunai", m: "Ít" },

  // THỜI TIẾT
  { jp: "雨", r: "ame", m: "Mưa" },
  { jp: "雪", r: "yuki", m: "Tuyết" },
  { jp: "天気がいい", r: "tenki ga ii", m: "Trời đẹp" },
  { jp: "天気が悪い", r: "tenki ga warui", m: "Trời xấu" },
  { jp: "一年中", r: "ichinenjuu", m: "Quanh năm / Trong 1 năm" },

  // ĐỒ ĂN – HƯƠNG VỊ
  { jp: "メロン", r: "meron", m: "Dưa vàng" },
  { jp: "温かい", r: "atatakai", m: "Ấm" },
  { jp: "涼しい", r: "suzushii", m: "Mát mẻ" },
  { jp: "暑い", r: "atsui", m: "Nóng (thời tiết)" },
  { jp: "寒い", r: "samui", m: "Lạnh (thời tiết)" },
  { jp: "熱い", r: "atsui", m: "Nóng (đồ ăn)" },
  { jp: "冷たい", r: "tsumetai", m: "Lạnh (đồ ăn)" },
  { jp: "美味しい", r: "oishii", m: "Ngon" },
  { jp: "甘い", r: "amai", m: "Ngọt" },
  { jp: "辛い", r: "karai", m: "Cay" },
  { jp: "苦い", r: "nigai", m: "Đắng" },
  { jp: "酸っぱい", r: "suppai", m: "Chua" },
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
