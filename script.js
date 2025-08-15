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
    desc: "これは日本のパビリオンです。"
  },
  usa: {
    title: "アメリカ館",
    img: "", // ← 画像なしにしたい場合は空文字でOK
    desc: "最新の技術と文化を体験できます！"
  },
  germany: {
    title: "ドイツ館",
    img: "germany.jpg",
    desc: "環境と持続可能性をテーマにしています。"
  },
  saudi: {
    title: "サウジアラビア館",
    img: "saudi.jpg",
    desc: "海と観光をテーマにしています。"
  }
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