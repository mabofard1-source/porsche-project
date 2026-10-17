// ==========================================
// 1. TAYCAN BACKGROUND CHANGE ON FIRST SCROLL (TO WHITE)
// ==========================================
// تتفعل الخلفية البيضاء بمجرد السكرول لأول مرة وتتخطى منطقة الهيرو (80px)
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    document.body.classList.add("scrolled-bg");
  } else {
    document.body.classList.remove("scrolled-bg");
  }
});

// ==========================================
// 2. REVEAL ANIMATIONS ON SCROLL
// ==========================================
// إظهار السكاشن والعناصر بتأثير سلس أثناء التصفح
const revealElements = document.querySelectorAll(".reveal-on-scroll");
if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ==========================================
// 3. HIGHLIGHTS CAROUSEL SCROLL NAVIGATION
// ==========================================
// تحريك كروت بورش لليمين واليسار بالسهمين
const highlightsCarousel = document.getElementById("highlightsCarousel");
const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight");

if (slideLeft && highlightsCarousel) {
  slideLeft.addEventListener("click", () => {
    highlightsCarousel.scrollBy({ left: -320, behavior: "smooth" });
  });
}

if (slideRight && highlightsCarousel) {
  slideRight.addEventListener("click", () => {
    highlightsCarousel.scrollBy({ left: 320, behavior: "smooth" });
  });
}

// ==========================================
// 4. INTERACTIVE COLOR PICKER FOR PORSCHE
// ==========================================
// تغيير صورة السيارة التفاعلية عند اختيار لون من الألوان
const colorSwatches = document.querySelectorAll(".color-swatch");
const carInteractiveImg = document.getElementById("carInteractiveImg");

colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", function () {
    colorSwatches.forEach((s) => s.classList.remove("active"));
    this.classList.add("active");

    const newImgSrc = this.getAttribute("data-img");
    if (carInteractiveImg && newImgSrc) {
      carInteractiveImg.style.opacity = "0";
      setTimeout(() => {
        carInteractiveImg.src = newImgSrc;
        carInteractiveImg.style.opacity = "1";
      }, 200);
    }
  });
});

// ==========================================
// 5. ELECTRIC SPORT SOUND ENGINE SIMULATOR
// ==========================================
// محاكي صوت المحرك الكهربائي وعداد السرعة عند الضغط المطول
const holdSoundBtn = document.getElementById("holdSoundBtn");
const speedGaugeVal = document.getElementById("speedGaugeVal");
let soundInterval;
let currentSpeed = 0;

if (holdSoundBtn && speedGaugeVal) {
  // أحداث الماوس للكمبيوتر
  holdSoundBtn.addEventListener("mousedown", startSoundEngine);
  holdSoundBtn.addEventListener("mouseup", stopSoundEngine);
  holdSoundBtn.addEventListener("mouseleave", stopSoundEngine);

  // أحداث اللمس للموبايل
  holdSoundBtn.addEventListener("touchstart", startSoundEngine);
  holdSoundBtn.addEventListener("touchend", stopSoundEngine);
}

function startSoundEngine(e) {
  e.preventDefault();
  clearInterval(soundInterval);
  soundInterval = setInterval(() => {
    if (currentSpeed < 250) {
      currentSpeed += 5;
      speedGaugeVal.textContent = currentSpeed;
    }
  }, 25);
}

function stopSoundEngine() {
  clearInterval(soundInterval);
  soundInterval = setInterval(() => {
    if (currentSpeed > 0) {
      currentSpeed -= 10;
      if (currentSpeed < 0) currentSpeed = 0;
      speedGaugeVal.textContent = currentSpeed;
    } else {
      clearInterval(soundInterval);
    }
  }, 15);
}
