//Navbar Scrolling
const stickyNav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    stickyNav.classList.add("navbar-scrolled");
  } else if (window.scrollY < 40) {
    stickyNav.classList.remove("navbar-scrolled");
  }
});

// Search bar
let dropdownBtn = document.getElementById("drop-text");
let dropdownList = document.getElementById("drop-list");
let dropdownIcon = document.getElementById("drop-icon");
let dropKeyword = document.getElementById("drop-keyword");
let searchInput = document.getElementById("search-input");
let dropListItems = document.querySelectorAll(".dropdown-list-item");

//show dropdwon list on click on dropdown btn
dropdownBtn.onclick = function () {
  //rotate arrow icon
  if (dropdownList.classList.contains("show")) {
    dropdownIcon.style.rotate = "0deg";
  } else {
    dropdownIcon.style.rotate = "-180deg";
  }
  dropdownList.classList.toggle("show");
};

//hide dropdown list when clicked outside dropdwon btn
window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "drop-keyword" &&
    e.target.id !== "drop-icon"
  ) {
    dropdownList.classList.remove("show");
    dropdownIcon.style.rotate = "0deg";
  }
};

for (item of dropListItems) {
  item.onclick = function (e) {
    //change dropdwon btn text on click on selected list item
    dropKeyword.innerText = e.target.innerText;

    //change input placeholder text on selected list item
    searchInput.placeholder = "Search in " + e.target.innerText + "...";
  };
}

//Carousel Hero Section ---Home Page
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true, // Pause on mouse hover
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
    slideBy: 4, // Number of items to slide at once
  });
});
