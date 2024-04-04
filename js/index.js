//----------- search box (S) ------------------
const searchBox = document.querySelector(".search_box");
const searchBoxInput = searchBox.querySelector("input");

searchBoxInput.onclick = () => {
  searchBox.classList.add("active");
};

window.addEventListener("click", function (e) {
  const insideSearchBox = searchBox.contains(e.target);
  if (!insideSearchBox) {
    searchBox.classList.remove("active");
  }
});

const randomNum = Math.floor(Math.random() * 10);
const hotIssue = document.querySelectorAll(".hot_issue li");
const randomHotIssue = hotIssue[randomNum].querySelector("a").innerText;

searchBoxInput.placeholder = randomHotIssue;
//----------- search box (E) ------------------
//----------- nav depth (S) ------------------
const navMenus = document.querySelectorAll(".nav_depth1 > li");
const navMenuDepth2 = document.querySelectorAll(".nav_depth1 > li > .depth2");

navMenus.forEach((navMenu) => {
  navMenu.addEventListener("click", function () {
    const navClickDepth2 = this.querySelector(".depth2");
    const noneClickDepth2 = Array.from(navMenuDepth2).filter(
      (depth2) => depth2 !== navClickDepth2
    );
    if (navClickDepth2.classList.contains("active")) {
      navClickDepth2.classList.remove("active");
    } else {
      noneClickDepth2.forEach((depth2) => {
        depth2.classList.remove("active");
      });
      navClickDepth2.classList.add("active");
    }
  });
});
//----------- nav depth (E) ------------------
//----------- main banner (S) ------------------
const mainSwiper = new Swiper(".main_banner > .swiper", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

let sw = 0;
const pauseBtn = document.querySelector(".btn_pause");

pauseBtn.addEventListener("click", function () {
  if (sw === 0) {
    this.classList.add("active");
    mainSwiper.autoplay.stop();
    sw = 1;
  } else {
    this.classList.remove("active");
    mainSwiper.autoplay.start();
    sw = 0;
  }
});
//----------- main banner (E) ------------------
//----------- main content (S) ------------------
const mainLeftBox = document.querySelector(".main_content .left_box");
const mainRightBox = document.querySelector(".main_content .right_box");

mainRightBox.addEventListener("mouseover", function () {
  mainLeftBox.classList.add("active");
});
mainRightBox.addEventListener("mouseout", function () {
  mainLeftBox.classList.remove("active");
});
//----------- main content (E) ------------------
//----------- todays deal (S) ------------------
const dealSwiper = new Swiper(".todays_deal > .swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 100,
  initialSlide: 1,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//----------- todays deal (E) ------------------
//----------- last banner (S) ------------------
const lastSwiper = new Swiper(".last_banner > .swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//----------- last banner (E) ------------------
//----------- brand story (S) ------------------
const brandStorys = document.querySelectorAll(".brand_story li");
const brandStory1 = document.querySelector(".brand_story .item1");

document.addEventListener("DOMContentLoaded", function () {
  brandStory1.classList.add("active");
  // fixed_icons
  iconOpen();
  document.querySelector(".btn_up").classList.add("is-up");
});
brandStorys.forEach((brandStory) => {
  brandStory.addEventListener("mouseover", function () {
    brandStory1.classList.remove("active");
    this.classList.add("active");
  });
  brandStory.addEventListener("mouseout", function () {
    this.classList.remove("active");
    brandStory1.classList.add("active");
  });
});
//----------- brand story (E) ------------------
//----------- footer dropdown (S) ------------------
const ftRightMenu = document.querySelector("footer .top_box .right >li");

ftRightMenu.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
});
//----------- footer dropdown (E) ------------------
//----------- fixed_icons (S) ------------------
const iconBox = document.querySelector(".fixed_icons > div");
const btnUp = document.querySelector(".btn_up");
const iconOpen = () => {
  iconBox.classList.add("is-open");
  document.querySelector(".btn_more").classList.add("active");
};

document.querySelector(".btn_more").addEventListener("click", function () {
  if (iconBox.classList.contains("is-open")) {
    iconBox.classList.remove("is-open");
    this.classList.remove("active");
  } else {
    iconOpen();
  }
});

btnUp.onclick = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 1020) {
    document.querySelector(".btn_up").classList.remove("is-up");
  } else {
    document.querySelector(".btn_up").classList.add("is-up");
  }

  if (window.scrollY >= 1000) {
    document.querySelector(".todays_deal .swiper").style.transition =
      "bottom 0.5s";
    document.querySelector(".todays_deal .swiper").style.bottom = "0";
  } else {
    document.querySelector(".todays_deal .swiper").style.transition =
      "bottom 0.5s";
    document.querySelector(".todays_deal .swiper").style.bottom = "-100px";
  }

  if (window.scrollY >= 2000) {
    document.querySelector(".best_seller > ul").style.transition =
      "bottom 0.5s";
    document.querySelector(".best_seller > ul").style.bottom = "0";
  } else {
    document.querySelector(".best_seller > ul").style.transition =
      "bottom 0.5s";
    document.querySelector(".best_seller > ul").style.bottom = "-100px";
  }

  if (window.scrollY >= 3100) {
    document.querySelector(".last_banner").style.transition = "bottom 0.5s";
    document.querySelector(".last_banner").style.bottom = "0";
  } else {
    document.querySelector(".last_banner").style.transition = "bottom 0.5s";
    document.querySelector(".last_banner").style.bottom = "-100px";
  }

  if (window.scrollY >= 3800) {
    document.querySelector(".brand_story").style.transition = "bottom 0.5s";
    document.querySelector(".brand_story").style.bottom = "0";
  } else {
    document.querySelector(".brand_story").style.transition = "bottom 0.5s";
    document.querySelector(".brand_story").style.bottom = "-100px";
  }
});
//----------- fixed_icons (E) ------------------
