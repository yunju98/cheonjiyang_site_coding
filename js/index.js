$(function () {
  //----------- search box (S) ------------------
  $(".search_box input").click(() => {
    $(".search_box").addClass("active");
  });
  $(document).on("click", function (e) {
    let $searchBox = $(".search_box");

    if (!$searchBox.is(e.target) && $searchBox.has(e.target).length === 0) {
      $(".search_box").removeClass("active");
    }
  });
  // 0부터 100 사이의 랜덤 숫자를 생성합니다.
  let randomNum = Math.floor(Math.random() * 10);
  let randomHotIssue = $(".hot_issue")
    .find("li")
    .eq(randomNum)
    .children()
    .text();
  // 생성된 랜덤 숫자를 HTML 요소에 표시합니다.
  $(".randomInput").attr("placeholder", randomHotIssue);
  //----------- search box (E) ------------------
  //----------- nav depth (S) ------------------
  $(".nav_depth1 > li").click(function () {
    let navDepth2 = $(this).find("ul");

    if (navDepth2.hasClass("active")) {
      navDepth2.removeClass("active");
    } else {
      $(".nav_depth1 > li").find("ul").removeClass("active");
      navDepth2.addClass("active");
    }
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
  $(".btn_pause").click(function () {
    if (sw === 0) {
      $(".btn_pause").addClass("active");
      mainSwiper.autoplay.stop();
      sw = 1;
    } else {
      $(".btn_pause").removeClass("active");
      mainSwiper.autoplay.start();
      sw = 0;
    }
  });
  //----------- main banner (E) ------------------
  //----------- main content (S) ------------------
  $(".main_content .right_box").mouseover(() => {
    $(".main_content .left_box").addClass("active");
  });
  $(".main_content .right_box").mouseout(() => {
    $(".main_content .left_box").removeClass("active");
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
  $(".brand_story .item1").addClass("active");
  $(".brand_story li").mouseover(function () {
    $(".brand_story .item1").removeClass("active");
    $(this).addClass("active");
  });
  $(".brand_story li").mouseout(function () {
    $(this).removeClass("active");
    $(".brand_story .item1").addClass("active");
  });
  //----------- brand story (E) ------------------
  //----------- footer dropdown (S) ------------------
  $("footer .top_box .right >li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
  //----------- footer dropdown (E) ------------------
  //----------- fixed_icons (S) ------------------
  $(document).ready(function () {
    iconOpen();
    $(".btn_up").addClass("is-up");
  });
  $(".btn_more").click(function () {
    if ($(".fixed_icons > div").hasClass("is-open")) {
      $(".fixed_icons > div").removeClass("is-open");
      $(this).removeClass("active");
    } else {
      iconOpen();
    }
  });
  $(".btn_up").click(() => {
    $("html").animate({ scrollTop: 0 }, 500);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1020) {
      $(".btn_up").removeClass("is-up");
    } else {
      $(".btn_up").addClass("is-up");
    }
  });
  //----------- fixed_icons (E) ------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".todays_deal .swiper").stop().animate({ bottom: 0 }, 500);
    } else {
      $(".todays_deal .swiper").stop().animate({ bottom: "-100px" }, 500);
    }
    if ($(this).scrollTop() >= 2000) {
      $(".best_seller > ul").stop().animate({ bottom: 0 }, 500);
    } else {
      $(".best_seller > ul").stop().animate({ bottom: "-100px" }, 500);
    }
    if ($(this).scrollTop() >= 3100) {
      $(".last_banner").stop().animate({ bottom: 0 }, 500);
    } else {
      $(".last_banner").stop().animate({ bottom: "-100px" }, 500);
    }
    if ($(this).scrollTop() >= 3700) {
      $(".brand_story").stop().animate({ bottom: 0 }, 500);
    } else {
      $(".brand_story").stop().animate({ bottom: "-100px" }, 500);
    }
  });
});

const iconOpen = () => {
  $(".fixed_icons > div").addClass("is-open");
  $(".btn_more").addClass("active");
};
