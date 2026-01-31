const words = [
  // SỞ THÍCH
  { jp: "もういちど", r: "mou ichido", m: "Lặp lại lần nữa" },
  { jp: "たんじょうび", r: "tanjoubi", m: "Sinh nhật" },
  { jp: "スポーツ", r: "supootsu", m: "Thể thao" },
  { jp: "ピンポン", r: "pinpon", m: "Bóng bàn" },
  { jp: "バレーボール", r: "bareebooru", m: "Bóng chuyền" },
  { jp: "テニス", r: "tenisu", m: "Quần vợt" },
  { jp: "スキー", r: "sukii", m: "Trượt tuyết" },
  { jp: "サッカー", r: "sakkaa", m: "Đá banh" },
  { jp: "えいが", r: "eiga", m: "Xem phim" },
  { jp: "どくしょ", r: "dokusho", m: "Đọc sách" },
  { jp: "おんがく", r: "ongaku", m: "Nghe nhạc" },
  { jp: "え", r: "e", m: "Vẽ tranh" },
  { jp: "りょこう", r: "ryokou", m: "Đi du lịch" },
  { jp: "バスケットボール", r: "basukettobooru", m: "Bóng rổ" },
  { jp: "やきゅう", r: "yakyuu", m: "Bóng chày" },
  { jp: "ゴルフ", r: "gorufu", m: "Đánh golf" },
  { jp: "すいえい", r: "suiei", m: "Bơi lội" },
  { jp: "りょうり", r: "ryouri", m: "Nấu ăn" },
  { jp: "しゃしん", r: "shashin", m: "Chụp ảnh" },
  { jp: "つり", r: "tsuri", m: "Câu cá" },
  { jp: "ドライブ", r: "doraibu", m: "Lái xe" },
  { jp: "カラオケ", r: "karaoke", m: "Karaoke" },
  { jp: "しゅみ", r: "shumi", m: "Sở thích" },

  // NƠI CHỐN
  { jp: "インフォメーション", r: "infomeeshon", m: "Quầy thông tin" },
  { jp: "エレベーター", r: "erebeetaa", m: "Thang máy" },
  { jp: "エスカレーター", r: "esukareetaa", m: "Thang cuốn" },
  { jp: "かいだん", r: "kaidan", m: "Thang bộ" },
  { jp: "きつえんじょ", r: "kitsuenjo", m: "Khu vực hút thuốc" },
  { jp: "トイレ", r: "toire", m: "Nhà vệ sinh" },
  { jp: "おてあらい", r: "otearai", m: "Nhà vệ sinh" },
  { jp: "レジ", r: "reji", m: "Thu ngân" },
  { jp: "きっさてん", r: "kissaten", m: "Quán nước" },
  { jp: "スーパー", r: "suupaa", m: "Siêu thị" },
  { jp: "ひゃくえんショップ", r: "hyakuen shoppu", m: "Cửa hàng 100 yên" },
  { jp: "レストラン", r: "resutoran", m: "Nhà hàng" },
  { jp: "ちか", r: "chika", m: "Tầng hầm" },

  // ĐỒ VẬT
  { jp: "カメラ", r: "kamera", m: "Máy ảnh" },
  { jp: "けいたいでんわ", r: "keitai denwa", m: "Điện thoại di động" },
  { jp: "でんしじしょ", r: "denshi jisho", m: "Từ điển điện tử" },
  { jp: "パソコン", r: "pasokon", m: "Máy tính xách tay" },
  { jp: "くつ", r: "kutsu", m: "Giày" },
  { jp: "けしゴム", r: "keshigomu", m: "Cục tẩy" },
  { jp: "ペン", r: "pen", m: "Bút" },
  { jp: "トイレットペーパー", r: "toiretto peepaa", m: "Giấy vệ sinh" },
  { jp: "ほん", r: "hon", m: "Sách" },
  { jp: "あぶら", r: "abura", m: "Dầu ăn" },
  { jp: "ケーキ", r: "keeki", m: "Bánh gato" },
  { jp: "こめ", r: "kome", m: "Gạo" },
  { jp: "たまご", r: "tamago", m: "Trứng" },
  { jp: "パン", r: "pan", m: "Bánh mì" },
  { jp: "みず", r: "mizu", m: "Nước" },
  { jp: "てんいん", r: "tenin", m: "Nhân viên bán hàng" },
  { jp: "〜や", r: "~ya", m: "Cửa hàng (… shop)" },
  { jp: "かばん", r: "kaban", m: "Cặp" },
  { jp: "ズボン", r: "zubon", m: "Quần tây" },
  { jp: "Tシャツ", r: "tiishatsu", m: "Áo thun" },
  { jp: "とけい", r: "tokei", m: "Đồng hồ" },
  { jp: "えんぴつ", r: "enpitsu", m: "Bút chì" },
  { jp: "ボールペン", r: "boorupen", m: "Bút bi" },
  { jp: "シャープペンシル", r: "shaapu penshiru", m: "Bút chì bấm" },
  { jp: "つくえ", r: "tsukue", m: "Cái bàn" },
  { jp: "しんぶん", r: "shinbun", m: "Báo" },
  { jp: "かぎ", r: "kagi", m: "Chìa khóa" },
  { jp: "めいし", r: "meishi", m: "Danh thiếp" },
  { jp: "いす", r: "isu", m: "Cái ghế" },
  { jp: "ざっし", r: "zasshi", m: "Tạp chí" },
  { jp: "くるま", r: "kuruma", m: "Ô tô" },
  { jp: "じどうしゃ", r: "jidousha", m: "Ô tô" },
  { jp: "ノート", r: "nooto", m: "Tập" },
  { jp: "テレビ", r: "terebi", m: "Tivi" },
  { jp: "カード", r: "kaado", m: "Thẻ" },
  { jp: "じしょ", r: "jisho", m: "Từ điển" },
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
