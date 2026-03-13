const contentArea = document.getElementById("contentArea");
const backBtn = document.getElementById("backBtn");
const homeFixedSection = document.getElementById("homeFixedSection");

const juniorSemesters = [
  "國一上", "國一下", "國二上", "國二下", "國三上", "國三下"
];

const gsatChapters = [
  "數與式", "多項式", "指數與對數", "直線與圓",
  "函數圖形", "三角比", "平面向量", "機率統計"
];

const astChapters = [
  "數列級數", "排列組合", "機率", "矩陣",
  "二次曲線", "微積分基礎", "空間向量", "複數"
];

const juniorTopics = {
  "國一上": ["正負數", "數線", "絕對值", "整數四則", "一元一次方程式"],
  "國一下": ["二元一次聯立方程式", "直角坐標", "比例", "線型函數初步", "幾何基本概念"],
  "國二上": ["乘法公式", "多項式", "平方根", "畢氏定理", "一次函數"],
  "國二下": ["因式分解", "二次方根運算", "等差數列", "幾何證明", "統計圖表"],
  "國三上": ["相似形", "圓的性質", "二次函數", "機率", "資料分析"],
  "國三下": ["總複習", "會考常考題型", "函數整合", "幾何整合", "統計與機率整合"]
};

const chapterNotes = {
  "數與式": ["整數、分數、根式的基本運算", "代數式化簡與因式觀念", "常見恆等式整理"],
  "多項式": ["多項式加減乘除", "餘式與因式關係", "圖形與代數意義連結"],
  "指數與對數": ["指數律", "對數定義", "指數與對數方程式的轉換"],
  "直線與圓": ["斜率與直線方程式", "點、線、圓的圖形關係", "圓的標準式與幾何意義"],
  "函數圖形": ["函數定義", "圖形判讀", "平移、伸縮與對稱"],
  "三角比": ["銳角三角比", "特殊角", "應用題中的長度與高度"],
  "平面向量": ["向量表示", "內積概念", "向量與幾何圖形的結合"],
  "機率統計": ["平均數與標準差初步", "古典機率", "表格與圖表判讀"],
  "數列級數": ["等差等比數列", "前 n 項和", "遞迴與規律觀察"],
  "排列組合": ["加法乘法原理", "排列", "組合與重複情況分析"],
  "機率": ["條件機率", "獨立事件", "期望值基本觀念"],
  "矩陣": ["矩陣運算", "反矩陣初步", "線性方程組連結"],
  "二次曲線": ["拋物線", "橢圓", "雙曲線的圖形與標準式"],
  "微積分基礎": ["極限直觀", "導數的變化率意義", "面積累積概念"],
  "空間向量": ["三維坐標", "空間直線與平面", "夾角與距離"],
  "複數": ["複數四則", "幾何表示", "極式初步"]
};

function showBackButton() {
  backBtn.classList.remove("hidden");
}

function hideBackButton() {
  backBtn.classList.add("hidden");
}

function hideHomeFixedSection() {
  if (homeFixedSection) {
    homeFixedSection.classList.add("hidden");
  }
}

function showHomeFixedSection() {
  if (homeFixedSection) {
    homeFixedSection.classList.remove("hidden");
  }
}

function goHome() {
  hideBackButton();
  showHomeFixedSection();
  contentArea.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCurriculumTab(type) {
  const juniorPanel = document.getElementById("curriculumJunior");
  const seniorPanel = document.getElementById("curriculumSenior");
  const juniorBtn = document.getElementById("tabJuniorBtn");
  const seniorBtn = document.getElementById("tabSeniorBtn");

  if (!juniorPanel || !seniorPanel || !juniorBtn || !seniorBtn) return;

  if (type === "junior") {
    juniorPanel.classList.add("active");
    seniorPanel.classList.remove("active");
    juniorBtn.classList.add("active");
    seniorBtn.classList.remove("active");
  } else {
    seniorPanel.classList.add("active");
    juniorPanel.classList.remove("active");
    seniorBtn.classList.add("active");
    juniorBtn.classList.remove("active");
  }
}

function showJuniorPage() {
  showBackButton();
  hideHomeFixedSection();

  const buttons = juniorSemesters.map(semester => {
    return `<button class="card-btn" onclick="showJuniorSemester('${semester}')">${semester}</button>`;
  }).join("");

  contentArea.innerHTML = `
    <section class="panel">
      <div class="section-title">
        <h2>國中數學</h2>
        <p>六學期重點整理入口，先建立觀念整理頁，之後再慢慢擴充例題與題庫。</p>
      </div>
      <div class="grid-buttons">
        ${buttons}
      </div>
    </section>
  `;
}

function showJuniorSemester(semester) {
  showBackButton();
  hideHomeFixedSection();

  const topics = (juniorTopics[semester] || []).map((topic, index) => {
    return `
      <div class="info-card">
        <div class="info-label">重點 ${index + 1}</div>
        <div class="info-title">${topic}</div>
        <div class="info-text">
          這裡可以放入這個單元的核心觀念、常見錯誤、公式整理與重點提醒。
        </div>
      </div>
    `;
  }).join("");

  contentArea.innerHTML = `
    <section class="panel">
      <div class="section-title">
        <h2>${semester}</h2>
        <p>目前先做觀念整理版面，之後可再加入題型分類、練習題與教學影片。</p>
      </div>

      <div class="split-layout">
        <div>
          ${topics}
        </div>

        <aside class="side-panel">
          <h3>後續可新增</h3>
          <ul>
            <li>章節例題</li>
            <li>常錯題提醒</li>
            <li>講義下載區</li>
            <li>影片教學按鈕</li>
            <li>小測驗與複習單</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function showSeniorPage() {
  showBackButton();
  hideHomeFixedSection();

  contentArea.innerHTML = `
    <section class="panel">
      <div class="section-title">
        <h2>高中數學</h2>
        <p>先分成學測與分科，再各自進入章節按鈕與重點整理頁面。</p>
      </div>

      <div class="grid-buttons">
        <button class="card-btn" onclick="showTrackPage('學測')">學測</button>
        <button class="card-btn" onclick="showTrackPage('分科')">分科</button>
      </div>
    </section>
  `;
}

function showTrackPage(track) {
  showBackButton();
  hideHomeFixedSection();

  const chapters = track === "學測" ? gsatChapters : astChapters;

  const buttons = chapters.map(chapter => {
    return `<button class="card-btn" onclick="showChapterDetail('${track}','${chapter}')">${chapter}</button>`;
  }).join("");

  contentArea.innerHTML = `
    <section class="panel">
      <div class="section-title">
        <h2>${track}重點整理</h2>
        <p>點選章節後，進入各章數學重點整理與說明內容。</p>
      </div>
      <div class="grid-buttons">
        ${buttons}
      </div>
    </section>
  `;
}

function showChapterDetail(track, chapter) {
  showBackButton();
  hideHomeFixedSection();

  const notes = (chapterNotes[chapter] || []).map((item, index) => {
    return `
      <div class="info-card">
        <div class="info-label">觀念 ${index + 1}</div>
        <div class="info-title">${item}</div>
        <div class="info-text">
          這裡可以補上公式整理、圖形解讀、觀念說明與考試常見題型提醒。
        </div>
      </div>
    `;
  }).join("");

  contentArea.innerHTML = `
    <section class="panel">
      <div class="section-title">
        <span class="track-badge">${track}</span>
        <h2>${chapter}</h2>
        <p>本頁先放章節觀念整理，之後可再加例題解析、練習題與考點歸納。</p>
      </div>

      <div class="split-layout">
        <div>
          ${notes}
        </div>

        <aside class="side-panel">
          <h3>本章建議版型</h3>
          <ul>
            <li>基本定義與觀念整理</li>
            <li>公式總表</li>
            <li>常見錯誤整理</li>
            <li>題型分類</li>
            <li>延伸補充與學習提醒</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}