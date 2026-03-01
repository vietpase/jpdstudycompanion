const words = [
  // UNIT – KANJI ĐỜI SỐNG & KÍCH THƯỚC

  { jp: "寺", r: "ジ (ji) / てら (tera)", m: "Tự / Chùa" },
  { jp: "お寺", r: "おてら (otera)", m: "Ngôi chùa" },

  { jp: "言", r: "ゲン (gen) / いいます (iimasu)", m: "Ngôn / Nói" },
  { jp: "言語", r: "げんご (gengo)", m: "Ngôn ngữ" },
  { jp: "言います", r: "いいます (iimasu)", m: "Nói" },

  { jp: "貝", r: "かい (kai)", m: "Vỏ sò" },
  { jp: "貝", r: "かい (kai)", m: "Vỏ sò" },

  { jp: "田", r: "デン (den) / た (ta)", m: "Điền / Ruộng" },
  { jp: "水田", r: "すいでん (suiden)", m: "Ruộng lúa nước" },
  { jp: "田中さん", r: "たなかさん (Tanaka-san)", m: "Tên người Nhật" },

  { jp: "力", r: "リョク (ryoku) / ちから (chikara)", m: "Lực / Sức mạnh" },
  { jp: "水力", r: "すいりょく (suiryoku)", m: "Thủy lực" },
  { jp: "火力", r: "かりょく (karyoku)", m: "Hỏa lực" },
  { jp: "力", r: "ちから (chikara)", m: "Sức mạnh" },

  { jp: "門", r: "モン (mon)", m: "Môn / Cổng" },
  { jp: "大学の門", r: "だいがくのもん (daigaku no mon)", m: "Cổng trường đại học" },

  { jp: "肉", r: "にく (niku)", m: "Nhục / Thịt" },
  { jp: "肉", r: "にく (niku)", m: "Thịt" },

  { jp: "料", r: "リョウ (ryou)", m: "Liệu / Phí" },
  { jp: "料金", r: "りょうきん (ryoukin)", m: "Tiền phí" },
  { jp: "料理", r: "りょうり (ryouri)", m: "Món ăn" },

  { jp: "理", r: "リ (ri)", m: "Lý" },
  { jp: "料理", r: "りょうり (ryouri)", m: "Món ăn" },

  { jp: "野", r: "ヤ (ya) / の (no)", m: "Dã / Đồng ruộng" },
  { jp: "野菜", r: "やさい (yasai)", m: "Rau" },
  { jp: "野", r: "の (no)", m: "Cánh đồng" },

  { jp: "半", r: "ハン (han) / なかば (nakaba)", m: "Bán / Một nửa" },
  { jp: "半ば", r: "なかば (nakaba)", m: "Ở giữa" },
  { jp: "半年", r: "はんとし (hantoshi)", m: "Nửa năm" },
  { jp: "半月", r: "はんつき (hantsuki)", m: "Nửa tháng" },
  { jp: "半日", r: "はんにち (hannichi)", m: "Nửa ngày" },
  { jp: "半分", r: "はんぶん (hanbun)", m: "Một nửa" },
  { jp: "七時半", r: "しちじはん (shichiji han)", m: "7 giờ 30" },

  { jp: "大", r: "ダイ / タイ (dai / tai) / おおきい (ookii)", m: "Đại / To" },
  { jp: "大きい", r: "おおきい (ookii)", m: "To" },
  { jp: "大学生", r: "だいがくせい (daigakusei)", m: "Sinh viên đại học" },
  { jp: "大人", r: "おとな (otona)", m: "Người lớn" },
  { jp: "大会", r: "たいかい (taikai)", m: "Đại hội" },
  { jp: "大半", r: "たいはん (taihan)", m: "Phần lớn" },

  { jp: "小", r: "ショウ / コ (shou / ko) / ちいさい (chiisai)", m: "Tiểu / Nhỏ" },
  { jp: "小さい", r: "ちいさい (chiisai)", m: "Bé, nhỏ" },
  { jp: "小人", r: "こびと (kobito)", m: "Người lùn" },
  { jp: "小学校", r: "しょうがっこう (shougakkou)", m: "Trường tiểu học" }
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
