// back tot top

let backToTopBtn = document.querySelector(".back-to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// top nav menu

let menuItems = document.getElementsByClassName("menu-item");

Array.from(menuItems).forEach((item, index) => {
  item.onclick = (e) => {
    let currMenu = document.querySelector(".menu-item.active");
    currMenu.classList.remove("active");
    item.classList.add("active");
  };
});

// food category

let foodMenuList = document.querySelector(".food-item-wrap");

let foodCategory = document.querySelector(".food-category");

let categories = foodCategory.querySelectorAll("button");

Array.from(categories).forEach((item, index) => {
  item.onclick = (e) => {
    let currCat = foodCategory.querySelector("button.active");
    currCat.classList.remove("active");
    e.target.classList.add("active");
    foodMenuList.classList =
      "food-item-wrap " + e.target.getAttribute("data-food-type");
  };
});

// on scroll animation

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elToShow = document.querySelectorAll(".play-on-scroll");

isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

loop = () => {
  elToShow.forEach((item, index) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });

  scroll(loop);
};

loop();

// All Sweet Modal
var body = document.body;

var sweetModal = document.getElementById("my-sweet-Modal");
var allSweet = document.getElementById("all-sweet");
var closesweet = document.getElementById("close-sweet");
allSweet.addEventListener("click", function () {
  sweetModal.style.display = "block";
});

closesweet.onclick = function () {
  sweetModal.style.display = "none";
};

// All veg Modal
var vegModal = document.getElementById("my-veg-Modal");
var allveg = document.getElementById("all-veg");
var closeveg = document.getElementById("close-veg");
allveg.addEventListener("click", function () {
  vegModal.style.display = "block";
});
closeveg.onclick = function () {
  vegModal.style.display = "none";
};

// All breakfast Modal
//var body= document.getElementById("body");
var breakfastModal = document.getElementById("my-breakfast-Modal");
var allbreakfast = document.getElementById("all-breakfast");
var closebreakfast = document.getElementById("close-breakfast");
allbreakfast.addEventListener("click", function () {
  breakfastModal.style.display = "block";
});
closebreakfast.onclick = function () {
  breakfastModal.style.display = "none";
};

// All chat Modal
//var body= document.getElementById("body");
var chatModal = document.getElementById("my-chat-Modal");
var allchat = document.getElementById("all-chat");
var closeChat = document.getElementById("close-chat");
allchat.addEventListener("click", function () {
  chatModal.style.display = "block";
});
closeChat.onclick = function () {
  chatModal.style.display = "none";
};

// Window close
window.onclick = function (event) {
  if (event.target == sweetModal) {
    sweetModal.style.display = "none";
  }
  if (event.target == vegModal) {
    vegModal.style.display = "none";
  }
  if (event.target == breakfastModal) {
    breakfastModal.style.display = "none";
  }
  if (event.target == chatModal) {
    chatModal.style.display = "none";
  }
};

// mobile nav

let bottomNavItems = document.querySelectorAll(".mb-nav-item");

let bottomMove = document.querySelector(".mb-move-item");

bottomNavItems.forEach((item, index) => {
  item.onclick = (e) => {
    console.log("object");
    let crrItem = document.querySelector(".mb-nav-item.active");
    crrItem.classList.remove("active");
    item.classList.add("active");
    bottomMove.style.left = index * 25 + "%";
  };
});
