// ポップアップ要素を取得
const popup = document.getElementById("popup");
const title = document.getElementById("popup-title");
const img = document.getElementById("popup-img");
const desc = document.getElementById("popup-desc");
const closeBtn = document.getElementById("close-btn");

// 表示する内容（必要に応じて追加できる）
const data = {
  japan: {
    title: "日本館",
    img: "japan.jpg",
    desc: "藻のキティちゃんが可愛い。朝晩は予約なしで開放中"
  },
  usa: {
    title: "アメリカ館",
    img: "", // ← 画像なしにしたい場合は空文字でOK
    desc: "月の石はすごいし展示もすごいけどまあまあ並ぶ"
  },
  germany: {
    title: "ドイツ館",
    img: "germany.jpg",
    desc: "パビリオン列に並べれば早い。閉まってたら前で座って待機！パビリオン満足度高！ビール好きはレストランで白ビール飲むべし、ビール飲まない人はただ高いソーセージ食べるだけになるから微妙かも"
  },
  saudi: {
    title: "サウジアラビア館",
    img: "saudi.jpg",
    desc: "日中並んでるけど夜はすぐ入れるよ。石油国の展示は豪華！レストランは並ぶ難易度高いしめっっちゃ待つけど超美味しい、パビリオンの最後にカフェあるからサウジコーヒー飲んでね"
  },
  france: {
    title: "フランス館" ,
    img: "france.jpg",
    desc: "ハイブラおしゃれ空間、映え用！パンはルクアの下で買えます。列は意外と進みがいいらしいよ"
  },
};

// 各 <area> にクリックイベントを設定
document.querySelectorAll("area").forEach((area) => {
  area.addEventListener("click", (event) => {
    event.preventDefault();

    const key = area.dataset.pavilion;
    const content = data[key];

    if (content) {
      title.textContent = content.title;
      desc.textContent = content.desc;

      // 画像がある場合だけ表示
      if (content.img) {
        img.src = content.img;
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }

      popup.classList.remove("hidden");
      popup.style.display = "block";
    }
  });
});

// 閉じるボタン処理
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});