const questionList = [
    //q1
    {
        question: "そのかばん_____だれ_____ですか。",
        answers: [
            "は、の",
            "は、も",
            "の、は"
        ],
        correct: "は、の"
    },
    
    //q2
    {
        question: "_____はとしょかんです。",
        answers: [
            "それの",
            "その",
            "そこ"
        ],
        correct: "そこ"
    },
    
    //q3
    {
        question: "それ_____わたし_____本です。",
        answers: [
            "は、の",
            "も、も",
            "は、は"
        ],
        correct: "は、の"
    },
    
    //q4
    {
        question: "わたし_____しゅみ_____テニス_____サッカーです。",
        answers: [
            "の、は、X",
            "は、も、と",
            "の、は、と"
        ],
        correct: "の、は、と"
    },
    
    //q5
    {
        question: "あの_____かばん_____だれのですか。",
        answers: [
            "X、は",
            "は、に",
            "の、まで"
        ],
        correct: "X、は"
    },

    //q6
    {
        question: "わたし_____日本人です。あなた_____日本人ですか",
        answers: [
            "は、も",
            "も、と",
            "と、を"
        ],
        correct: "は、も"
    },

    //q7
    {
        question: "きむらさんのたんじょうびは______ですか。",
        answers: [
            "なに",
            "どちら",
            "いつ"
        ],
        correct: "いつ"
    },

    //q8
    {
        question: "お______はなんですか。",
        answers: [
            "しごと",
            "いつ",
            "くに"
        ],
        correct: "しごと"
    },

    //q9
    {
        question: "A: あなたは________ですか。\nB: 21さいです。",
        answers: [
            "なん",
            "なんさい",
            "だれ"
        ],
        correct: "なんさい"
    },

    //q10
    {
        question: "あのひとのなまえは_____ですか。",
        answers: [
            "いつ",
            "なに",
            "なん"
        ],
        correct: "なん"
    },

    //q11
    {
        question: "A: はやしさんのくには_____ですか。\nB: はい、_____です。",
        answers: [
            "イタリア",
            "イタリア語",
            "イタリア人"
        ],
        correct: "イタリア"
    },

    //q12
    {
        question: "A: おくには_____ですか。\nB: 日本です。",
        answers: [
            "どちら",
            "なん",
            "だれ"
        ],
        correct: "どちら"
    },

    //q13
    {
        question: "きむらさんのペンは_____ですか。",
        answers: [
            "どこの",
            "いつ",
            "なんじ"
        ],
        correct: "どこの"
    },

    //q14
    {
        question: "A: エスカレーターは_____ですか。\nB: あそこです。",
        answers: [
            "いつ",
            "なんじ",
            "どこ"
        ],
        correct: "どこ"
    },

    //q15
    {
        question: "A: いしだ先生_____日本人ですか。\nB: はい, 日本人です。",
        answers: [
            "と",
            "は",
            "も"
        ],
        correct: "は"
    },
    
    //q16
    {
        question: "わたしの________はTOYOTAです。",
        answers: [
            "ほん",
            "かいしゃ",
            "がくせい"
        ],
        correct: "かいしゃ"
    },
    
    //q17
    {
        question: "おたんじょうびは______ですか。",
        answers: [
            "いつ",
            "だれ",
            "どこ"
        ],
        correct: "いつ"
    },
    
    //q18
    {
        question: "ここ_____がっこうです。",
        answers: [
            "は",
            "も",
            "の"
        ],
        correct: "は"
    },
    
    //q19
    {
        question: "あなたのさいふはどこ_____ですか。",
        answers: [
            "の",
            "も",
            "と"
        ],
        correct: "の"
    },
    
    //q20
    {
        question: "ランさんは________ですか。",
        answers: [
            "カメラ",
            "かいしゃいん",
            "これ"
        ],
        correct: "かいしゃいん"
    },
    
    //q21
    {
        question: "せんせいは______ですか。",
        answers: [
            "何",
            "いつ",
            "どこ"
        ],
        correct: "どこ"
    },

    //q22
    {
        question: "パンを________",
        answers: [
            "ください。",
            "はい。",
            "いいえ。"
        ],
        correct: "ください。"
    },
    
    //q23
    {
        question: "わたし_____ぎんこういんじゃありません。",
        answers: [
        "は",
        "で",
        "が"
        ],
        correct: "は"
    },
    
    //q24
    {
        question: "Tháng 7 trong tiếng Nhật đọc là gì?",
        answers: ["なながつ", "しちがつ", "しがつ", "くがつ"],
        correct: "しちがつ"
    },
    
    //q25
    {
        question: "「九月」đọc là:",
        answers: ["きゅうがつ", "くがつ", "きゅうげつ", "ここのがつ"],
        correct: "くがつ"
    },
    
    //q26
    {
        question: "Câu hỏi “Tháng mấy?” trong tiếng Nhật là:",
        answers: ["なんにちですか", "なんようびですか", "なんがつですか", "なんじですか"],
        correct: "なんがつですか"
    },
    
    //q27
    {
        question: "Ngày mùng 1 trong tiếng Nhật là:",
        answers: ["いちにち", "ついたち", "いっぴ", "はつか"],
        correct: "ついたち"
    },
    
    //q28
    {
        question: "「はつか」là ngày nào?",
        answers: ["Ngày 14", "Ngày 20", "Ngày 24", "Ngày 2"],
        correct: "Ngày 20"
    },
    
    //q29
    {
        question: "Thứ bảy trong tiếng Nhật là:",
        answers: ["きんようび", "にちようび", "どようび", "もくようび"],
        correct: "どようび"
    },
    
    //q30
    {
        question: "4 giờ đọc là:",
        answers: ["よじ", "しじ", "よんじ", "よじかん"],
        correct: "よじ"
    },
    
    //q31
    {
        question: "7 giờ đọc là:",
        answers: ["ななじ", "しちじ", "ななじかん", "しちかん"],
        correct: "しちじ"
    },
    
    //q32
    {
        question: "「ごご」dùng để chỉ:",
        answers: ["Buổi sáng", "Buổi trưa", "Buổi chiều / tối", "Ban đêm"],
        correct: "Buổi chiều / tối"
    },
    
    //q33
    {
        question: "3 giờ rưỡi viết đúng là:",
        answers: ["さんじはん", "さんじぷん", "さんじごじゅっぷん", "さんじよんじ"],
        correct: "さんじはん"
    },
    //q34
    {
        question: "10 phút đọc là:",
        answers: ["じゅうふん", "じゅっぷん", "じゅうぷん", "じっぷん"],
        correct: "じゅっぷん"
    },
    //q35
    {
        question: "20 tuổi trong tiếng Nhật đọc là:",
        answers: ["ni jyuu sai", "ni jyuu ssai", "hatachi", "hassyai"],
        correct: "hatachi"
    },
    //q36
    {
        question: "Tầng 1 đọc là:",
        answers: ["いちかい", "いっかい", "ひとかい", "いちがい"],
        correct: "いっかい"
    },
    //q37
    {
        question: "Tầng 3 đọc đúng là:",
        answers: ["さんかい", "さんがい", "みっかい", "さんけい"],
        correct: "さんがい"
    },
    //q38
    {
        question: "300 đọc là:",
        answers: ["さんひゃく", "さんびゃく", "さんぴゃく", "さんびゃっく"],
        correct: "さんびゃく"
    },
    //q39
    {
        question: "Từ lịch sự của 「ここ」là:",
        answers: ["そこ", "あそこ", "こちら", "どこ"],
        correct: "こちら"
    },
    //q40
    {
        question: "Câu nào dùng đúng 「この」?",
        answers: ["このです", "このほん", "このはほん", "このそれ"],
        correct: "このほん"
    },
    //q41
    {
        question: "「あれ」dùng khi:",
        answers: ["Vật ở gần người nói", "Vật ở gần người nghe", "Vật ở xa cả hai", "Vật không xác định"],
        correct: "Vật ở xa cả hai"
    },
    //q42
    {
        question: "Hỏi giá tiền dùng mẫu câu nào?",
        answers: ["これはなんですか", "これはどこですか", "これはいくらですか", "これはだれのですか"],
        correct: "これはいくらですか"
    },
    //q43
    {
        question: "「学校は9時から3時までです。」có nghĩa là:",
        answers: ["Trường học lúc 9 giờ", "Trường học đến 3 giờ", "Trường học từ 9 giờ đến 3 giờ", "Trường học lúc 3 giờ"],
        correct: "Trường học từ 9 giờ đến 3 giờ"
    },
    //q44
    {
        question: "Từ くに có nghĩa là gì?",
        answers: ["Thành phố", "Đất nước", "Trường học", "Con người"],
        correct: "Đất nước"
    },
    //q45
    {
        question: "にほん là nước nào?",
        answers: ["Trung Quốc", "Hàn Quốc", "Nhật Bản", "Thái Lan"],
        correct: "Nhật Bản"
    },
    //q46
    {
        question: "Từ nào sau đây có nghĩa là Việt Nam?",
        answers: ["タイ", "ベトナム", "インド", "ロシア"],
        correct: "ベトナム"
    },
    //q47
    {
        question: "かいしゃいん nghĩa là gì?",
        answers: ["Giáo viên", "Sinh viên", "Nhân viên công ty", "Nhân viên ngân hàng"],
        correct: "Nhân viên công ty"
    },
    //q48
    {
        question: "いしゃ là nghề gì?",
        answers: ["Giáo viên", "Kỹ sư", "Bác sĩ", "Học sinh"],
        correct: "Bác sĩ"
    },
    //q49
    {
        question: "スポーツ có nghĩa là gì?",
        answers: ["Âm nhạc", "Thể thao", "Du lịch", "Nghệ thuật"],
        correct: "Thể thao"
    },
    //q50
    {
        question: "Từ nào là bóng đá?",
        answers: ["テニス", "スキー", "サッカー", "バレーボール"],
        correct: "サッカー"
    },
    //q51
    {
        question: "りょこう nghĩa là gì?",
        answers: ["Nấu ăn", "Đi bộ", "Đi du lịch", "Chụp ảnh"],
        correct: "Đi du lịch"
    },
    //q52
    {
        question: "トイレ / おてあらい là gì?",
        answers: ["Cửa hàng", "Nhà vệ sinh", "Quầy thông tin", "Nhà hàng"],
        correct: "Nhà vệ sinh"
    },
    //q53
    {
        question: "スーパー có nghĩa là gì?",
        answers: ["Siêu thị", "Quán cà phê", "Trường học", "Bưu điện"],
        correct: "Siêu thị"
    },
    //q54
    {
        question: "けいたいでんわ là gì?",
        answers: ["Máy tính", "Điện thoại di động", "Máy ảnh", "Tivi"],
        correct: "Điện thoại di động"
    },
    //q55
    {
        question: "ほん nghĩa là gì?",
        answers: ["Báo", "Tạp chí", "Sách", "Tập"],
        correct: "Sách"
    },
    //q56
    {
        question: "とけい là đồ vật nào?",
        answers: ["Đồng hồ", "Bàn", "Ghế", "Cặp"],
        correct: "Đồng hồ"
    },
    //q57
    {
        question: "くるま / じどうしゃ là gì?",
        answers: ["Xe đạp", "Xe buýt", "Xe ô tô", "Xe máy"],
        correct: "Xe ô tô"
    },
    //q58
    {
        question: "くだもの có nghĩa là gì?",
        answers: ["Rau", "Trái cây", "Thịt", "Cơm"],
        correct: "Trái cây"
    },
    //q59
    {
        question: "ぶたにく là gì?",
        answers: ["Thịt bò", "Thịt gà", "Thịt heo", "Cá"],
        correct: "Thịt heo"
    },
    //q60
    {
        question: "ごはん nghĩa là gì?",
        answers: ["Mì", "Cơm", "Bánh mì", "Cháo"],
        correct: "Cơm"
    },
    //q61
    {
        question: "コーヒー là gì?",
        answers: ["Trà", "Nước ép", "Cà phê", "Sữa"],
        correct: "Cà phê"
    },
    //q62
    {
        question: "おさけ nghĩa là gì?",
        answers: ["Bia", "Rượu sake", "Rượu vang", "Nước ngọt"],
        correct: "Rượu sake"
    },
    //q63
    {
        question: "でんしゃ là phương tiện nào?",
        answers: ["Xe buýt", "Taxi", "Tàu điện", "Máy bay"],
        correct: "Tàu điện"
    },
    //q64
    {
        question: "ひこうき nghĩa là gì?",
        answers: ["Tàu thủy", "Xe máy", "Máy bay", "Tàu điện ngầm"],
        correct: "Máy bay"
    },
    //q65
    {
        question: "あした là ngày nào?",
        answers: ["Hôm nay", "Ngày mai", "Ngày mốt", "Tối nay"],
        correct: "Ngày mai"
    },
    //q66
    {
        question: "たべます nghĩa là gì?",
        answers: ["Uống", "Xem", "Ăn", "Nghe"],
        correct: "Ăn"
    },
    //q67
    {
        question: "のみます có nghĩa là gì?",
        answers: ["Ăn", "Ngủ", "Uống", "Đi"],
        correct: "Uống"
    },
    //q68
    {
        question: "まいにち nghĩa là gì?",
        answers: ["Mỗi sáng", "Mỗi tối", "Mỗi ngày", "Hôm nay"],
        correct: "Mỗi ngày"
    }
];