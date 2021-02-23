// depth2 = document.querySelectorAll(".depth2");
// depth1List = document.querySelectorAll(".depth1_list");
// depth2Info = document.querySelectorAll(".depth2_info");
// depth2Listbox = document.querySelectorAll(".depth2_listbox");

// depth1List[0].addEventListener("mouseover", function () {
//   depth2[0].classList.add("on");
//   depth2Info[0].classList.add("on");
//   depth2Listbox[0].classList.add("on");

//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });

// depth1List[1].addEventListener("mouseover", function () {
//   depth2[1].classList.add("on");
//   depth2Info[1].classList.add("on");
//   depth2Listbox[1].classList.add("on");

//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });


// depth1List[2].addEventListener("mouseover", function () {
//   depth2[2].classList.add("on");
//   depth2Info[2].classList.add("on");
//   depth2Listbox[2].classList.add("on");

//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });

// depth1List[3].addEventListener("mouseover", function () {
//   depth2[3].classList.add("on");
//   depth2Info[3].classList.add("on");
//   depth2Listbox[3].classList.add("on");

//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
// });

// depth2[0].addEventListener("mouseleave", function () {
//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
// })


// depth2[1].addEventListener("mouseleave", function () {
//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
// });

// depth2[2].addEventListener("mouseleave", function () {
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
// });

// depth2[3].addEventListener("mouseleave", function () {
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });


// scroll event dom
const headerTop = document.querySelector(".header_top");
const headerInfo2 = document.querySelectorAll(".header_info2");
const slider = document.querySelector(".slider");
const headerHeight = headerTop.getBoundingClientRect().height;
const sliderHeight = slider.getBoundingClientRect().height;
const depth1 = document.querySelector(".depth1");
const contentTop = document.querySelector(".content_top");
const faBars = document.querySelector(".fa-bars");


// gnb & contentTop display show or none 
document.addEventListener('scroll', scrollEvent);

function scrollEvent() {
    if (window.scrollY > headerHeight) {
      // headerTop.style.display = "none"
      // headerInfo2[0].classList.add("show");
      // headerInfo2[1].classList.add("show");
      // faBars.classList.add("show");
  } else {
      // headerTop.style.display = "flex";
      // headerInfo2[0].classList.remove("show");
      // headerInfo2[1].classList.remove("show");  
      // faBars.classList.remove("show");
  }

 if (window.scrollY > sliderHeight / 2) {
    contentTop.classList.add("show");
  } else {
    contentTop.classList.remove("show")
  }
}

scrollEvent();


// search icon click event
const searchIcon = document.querySelectorAll(".fa-search");
const headerBottom = document.querySelector(".header_bottom");
const faTimes = document.querySelectorAll(".fa-times");
const headerNav = document.querySelector(".header_nav");

searchIcon[0].addEventListener("click", searchShow);
searchIcon[1].addEventListener("click", searchShow);

function searchShow() {
  headerBottom.classList.add("show");
}

// nav bar click event 
faBars.addEventListener("click", () => {
  faTimes[0].classList.add("show");
  faBars.classList.add("show");
  headerNav.classList.add("show");
});

faTimes[0].addEventListener("click", () => {
  faTimes[0].classList.remove("show");
  faBars.classList.remove("show");
  headerNav.classList.remove("show");

});


// search input close
faTimes[1].addEventListener("click", () => {
headerBottom.classList.remove("show");
});


// content_top click event
const wrap = document.querySelector(".wrap");
contentTop.addEventListener("click", () => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: wrap.offsetTop
  });
})

