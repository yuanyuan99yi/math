const contentArea = document.getElementById("contentArea");
const backBtn = document.getElementById("backBtn");
const homeFixedSection = document.getElementById("homeFixedSection");

const juniorSemesters = [
  "國一上", "國一下", "國二上", "國二下", "國三上", "國三下"
];

const gsatChapters = [
  "數與式",
  "直線與圓",
  "多項式",
  "數列級數",
  "排列組合與機率",
  "數據分析",
  "三角比",
  "三角函數",
  "指數與對數",
  "平面向量",
  "空間向量",
  "空間中的線與面",
  "條件機率與貝氏定理",
  "圓錐曲線",
  "矩陣"
];

const astChapters = [
  "數列級數",
  "排列組合",
  "機率",
  "矩陣",
  "二次曲線",
  "微積分基礎",
  "空間向量",
  "複數"
];

const juniorTopics = {
  "國一上": ["正負數", "數線", "絕對值", "整數四則", "一元一次方程式"],
  "國一下": ["二元一次聯立方程式", "直角坐標", "比例", "線型函數初步", "幾何基本概念"],
  "國二上": ["乘法公式", "多項式", "平方根", "畢氏定理", "一次函數"],
  "國二下": ["因式分解", "二次方根運算", "等差數列", "幾何證明", "統計圖表"],
  "國三上": ["相似形", "圓的性質", "二次函數", "機率", "資料分析"],
  "國三下": ["總複習", "會考常考題型", "函數整合", "幾何整合", "統計與機率整合"]
};

const genericChapterNotes = {
  "多項式": ["多項式加減乘除", "餘式與因式關係", "圖形與代數意義連結"],
  "數列級數": ["等差等比數列", "前 n 項和", "遞迴與規律觀察"],
  "排列組合與機率": ["加法乘法原理", "排列", "組合", "機率初步"],
  "數據分析": ["平均數", "中位數", "標準差概念", "圖表判讀"],
  "三角比": ["銳角三角比", "特殊角", "高與長度應用"],
  "三角函數": ["正弦餘弦圖形", "週期概念", "圖形變化"],
  "指數與對數": ["指數律", "對數定義", "指數與對數方程式轉換"],
  "平面向量": ["向量表示", "內積概念", "幾何應用"],
  "空間向量": ["三維坐標", "空間向量表示", "距離與夾角"],
  "空間中的線與面": ["直線方程式", "平面方程式", "平行垂直判斷"],
  "條件機率與貝氏定理": ["條件機率", "乘法公式", "貝氏定理基本觀念"],
  "圓錐曲線": ["拋物線", "橢圓", "雙曲線"],
  "矩陣": ["矩陣運算", "反矩陣初步", "矩陣與方程組"]
};

function showBackButton() {
  if (backBtn) backBtn.classList.remove("hidden");
}

function hideBackButton() {
  if (backBtn) backBtn.classList.add("hidden");
}

function hideHomeFixedSection() {
  if (homeFixedSection) homeFixedSection.classList.add("hidden");
}

function showHomeFixedSection() {
  if (homeFixedSection) homeFixedSection.classList.remove("hidden");
}

function scrollToTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goHome() {
  hideBackButton();
  showHomeFixedSection();
  if (contentArea) contentArea.innerHTML = "";
  scrollToTopSmooth();
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

function renderSubBackButton(label, onClickFn) {
  return `
    <div class="sub-back-wrap">
      <button class="sub-back-btn" onclick="${onClickFn}">${label}</button>
    </div>
  `;
}

function showJuniorPage() {
  showBackButton();
  hideHomeFixedSection();

  const buttons = juniorSemesters.map((semester) => {
    return `<button class="card-btn" onclick="showJuniorSemester('${semester}')">${semester}</button>`;
  }).join("");

  if (contentArea) {
    contentArea.innerHTML = `
      <section class="panel">
        ${renderSubBackButton("← 返回主頁", "goHome()")}
        <div class="section-title">
          <h2>國中數學</h2>
          <p>六學期重點整理入口，先建立觀念整理頁，之後再慢慢擴充例題與題庫。</p>
        </div>
        <div class="grid-buttons equal-buttons">
          ${buttons}
        </div>
      </section>
    `;
  }

  scrollToTopSmooth();
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

  if (contentArea) {
    contentArea.innerHTML = `
      <section class="panel">
        ${renderSubBackButton("← 返回國中數學", "showJuniorPage()")}
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

  scrollToTopSmooth();
}

function showSeniorPage() {
  showBackButton();
  hideHomeFixedSection();

  if (contentArea) {
    contentArea.innerHTML = `
      <section class="panel">
        ${renderSubBackButton("← 返回主頁", "goHome()")}
        <div class="section-title">
          <h2>高中數學</h2>
          <p>先分成學測與分科，再各自進入章節按鈕與重點整理頁面。</p>
        </div>

        <div class="grid-buttons equal-buttons">
          <button class="card-btn" onclick="showTrackPage('學測')">學測</button>
          <button class="card-btn" onclick="showTrackPage('分科')">分科</button>
        </div>
      </section>
    `;
  }

  scrollToTopSmooth();
}

function showTrackPage(track) {
  showBackButton();
  hideHomeFixedSection();

  const chapters = track === "學測" ? gsatChapters : astChapters;

  const buttons = chapters.map((chapter) => {
    return `<button class="card-btn" onclick="showChapterDetail('${track}','${chapter}')">${chapter}</button>`;
  }).join("");

  if (contentArea) {
    contentArea.innerHTML = `
      <section class="panel">
        ${renderSubBackButton(`← 返回高中數學`, "showSeniorPage()")}
        <div class="section-title">
          <h2>${track}重點整理</h2>
          <p>點選章節後，進入各章數學重點整理與說明內容。</p>
        </div>
        <div class="grid-buttons equal-buttons chapter-button-grid">
          ${buttons}
        </div>
      </section>
    `;
  }

  scrollToTopSmooth();
}

function showChapterDetail(track, chapter) {
  showBackButton();
  hideHomeFixedSection();

  if (track === "學測" && chapter === "數與式") {
    renderGsatNumberAndExpression();
    return;
  }

  if (track === "學測" && chapter === "直線與圓") {
    renderGsatLineAndCircle();
    return;
  }

  const notes = (genericChapterNotes[chapter] || ["本章基本定義", "公式整理", "常見題型提醒"]).map((item, index) => {
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

  if (contentArea) {
    contentArea.innerHTML = `
      <section class="panel">
        ${renderSubBackButton(`← 返回${track}章節列表`, `showTrackPage('${track}')`)}
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

  scrollToTopSmooth();
}

function renderGsatNumberAndExpression() {
  if (!contentArea) return;

  contentArea.innerHTML = `
    <section class="panel">
      ${renderSubBackButton("← 返回學測章節列表", "showTrackPage('學測')")}
      <div class="section-title">
        <span class="track-badge">學測</span>
        <h2>數與式</h2>
        <p>先把最核心的代數觀念整理清楚，這一章是後續多項式、函數、方程式與不等式的基礎。</p>
      </div>

      <div class="chapter-hero-grid">
        <div class="chapter-hero-card">
          <h3>本章學習核心</h3>
          <p>數與式重點不只是計算，而是要看懂式子的結構，知道什麼時候該化簡、什麼時候該拆解，並能穩定處理代數運算。</p>
        </div>
        <div class="chapter-hero-card">
          <h3>常見失分原因</h3>
          <p>符號出錯、分配律錯誤、因式觀念不清、根式與分式化簡不完整，都是這一章最常見的失分點。</p>
        </div>
      </div>

      <div class="rich-section-grid">
        <div>
          <div class="info-card">
            <div class="info-label">一、基本定義</div>
            <div class="info-title">先理解數的分類與代數式的結構</div>
            <div class="info-text">
              要熟悉整數、有理數、無理數、實數的基本概念，也要知道代數式中的項、係數、次方與絕對值代表什麼意思。
            </div>
          </div>

          <div class="info-card">
            <div class="info-label">二、公式整理</div>
            <div class="info-title">乘法公式與恆等式要能辨認並靈活使用</div>
            <div class="info-text">
              例如平方差、完全平方公式，不只要背下來，還要知道題目是在考「展開」還是「逆向因式化」。
            </div>
          </div>

          <div class="info-card">
            <div class="info-label">三、分式與根式</div>
            <div class="info-title">化簡時要注意定義域與完整性</div>
            <div class="info-text">
              分式要留意分母不能為零，根式運算則要把同類根式、分母有理化、最簡根式整理清楚。
            </div>
          </div>

          <div class="info-card">
            <div class="info-label">四、常見題型</div>
            <div class="info-title">化簡、比較大小、代值、結構判讀</div>
            <div class="info-text">
              常見題目會把化簡和代值結合，也會利用絕對值、根式、分式去考你對式子整體結構的掌握程度。
            </div>
          </div>
        </div>

        <aside class="side-panel">
          <h3>本章重點提醒</h3>
          <ul>
            <li>先看式子結構，再決定運算方向。</li>
            <li>化簡時要同時注意符號與限制條件。</li>
            <li>不要急著展開，有時保留結構更好算。</li>
            <li>代值前先整理，通常會比較不容易算錯。</li>
            <li>這一章是很多章節的起點，基礎一定要穩。</li>
          </ul>
        </aside>
      </div>

      <div class="panel inner-panel">
        <div class="section-title">
          <h2>學生快速掌握方式</h2>
          <p>可以先用這個順序整理自己的筆記與練習。</p>
        </div>
        <div class="student-grid">
          <div class="student-card">
            <div class="student-num">01</div>
            <h3>先背清楚公式</h3>
            <p>先把常見公式與性質背熟，至少看到題目時能立刻辨認出來。</p>
          </div>
          <div class="student-card">
            <div class="student-num">02</div>
            <h3>再練化簡穩定度</h3>
            <p>分式、根式、指數式都要多練，避免只懂觀念但手算不穩。</p>
          </div>
          <div class="student-card">
            <div class="student-num">03</div>
            <h3>最後做整合題</h3>
            <p>把化簡、代值、比較大小與應用題混在一起練，效果最好。</p>
          </div>
        </div>
      </div>
    </section>
  `;

  scrollToTopSmooth();
}

function renderGsatLineAndCircle() {
  if (!contentArea) return;

  contentArea.innerHTML = `
    <section class="panel">
      ${renderSubBackButton("← 返回學測章節列表", "showTrackPage('學測')")}
      <div class="section-title">
        <span class="track-badge">學測</span>
        <h2>直線與圓</h2>
        <p>這一章要把座標、方程式、圖形關係整合起來，重點不只是公式，而是圖形與代數之間的轉換能力。</p>
      </div>

      <div class="chapter-hero-grid">
        <div class="chapter-hero-card">
          <h3>本章學習核心</h3>
          <p>要能看懂直線方程式、圓方程式與圖形位置關係，並能利用代數方法判斷交點、距離與切線條件。</p>
        </div>
        <div class="chapter-hero-card">
          <h3>常見失分原因</h3>
          <p>斜率觀念不穩、方程式整理錯誤、圖形位置判讀不清楚、代數計算和幾何意義無法連結，都是常見問題。</p>
        </div>
      </div>

      <div class="rich-section-grid">
        <div>
          <div class="info-card">
            <div class="info-label">一、直線基本觀念</div>
            <div class="info-title">斜率、截距、兩點式、一般式都要熟</div>
            <div class="info-text">
              同一條直線可以用不同形式表示，重點是要知道每種形式適合在哪種題目使用，並能快速互相轉換。
            </div>
          </div>

          <div class="info-card">
            <div class="info-label">二、圓的方程式</div>
            <div class="info-title">標準式與圓心半徑的幾何意義最重要</div>
            <div class="info-text">
              看到圓的方程式，要能立刻找出圓心與半徑，也要會由條件反推圓方程式。
            </div>
          </div>

          <div class="info-card">
            <div class="info-label">三、位置關係</div>
            <div class="info-title">交點、相切、相離都要用圖形去想</div>
            <div class="info-text">
              直線和圓、圓和圓之間的位置關係，建議先畫圖理解，再配合方程式與判別條件整理。
            </div>
          </div>

          <div class="info-card">
            <div class="info-label">四、常見題型</div>
            <div class="info-title">切線、弦、距離、交點與軌跡問題</div>
            <div class="info-text">
              這一章常和二次方程式、向量、幾何觀念整合，題目常要求你同時具備代數整理與圖形理解能力。
            </div>
          </div>
        </div>

        <aside class="side-panel">
          <h3>本章重點提醒</h3>
          <ul>
            <li>先畫圖，再下手列式，會更不容易亂掉。</li>
            <li>直線方程式形式很多，要練習快速轉換。</li>
            <li>看到圓方程式要先抓圓心和半徑。</li>
            <li>切線題通常會連到距離或重根觀念。</li>
            <li>交點問題常是幾何與代數的整合重點。</li>
          </ul>
        </aside>
      </div>

      <div class="panel inner-panel">
        <div class="section-title">
          <h2>學生快速掌握方式</h2>
          <p>建議先從圖形想法出發，再補代數整理。</p>
        </div>
        <div class="student-grid">
          <div class="student-card">
            <div class="student-num">01</div>
            <h3>先熟悉方程式形式</h3>
            <p>直線與圓的基本方程式形式要先練熟，看到就能辨認。</p>
          </div>
          <div class="student-card">
            <div class="student-num">02</div>
            <h3>再練位置關係判讀</h3>
            <p>交點、相切、平行、垂直這些關係要搭配圖形一起練習。</p>
          </div>
          <div class="student-card">
            <div class="student-num">03</div>
            <h3>最後做整合題</h3>
            <p>把直線、圓、距離、切線、交點混合練習，才會真正穩定。</p>
          </div>
        </div>
      </div>
    </section>
  `;

  scrollToTopSmooth();
}