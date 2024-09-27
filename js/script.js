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

// Movie & Series Section ---Movie Owl Carousel
$(".movie-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Movie & Series Section ---Series Owl Carousel
// $(".series-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: false,
//   dots: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

//Top Rated Section
// const tab = document.querySelector(".vs-tabs");
// const badges = tab.querySelectorAll(".vs-tab");
// const icons = document.querySelectorAll(".vs-icon span");

// // Event listener for tab clicks
// badges.forEach((badge) => {
//   badge.addEventListener("click", () => {
//     tab.querySelector(".vs-tab-active").classList.remove("vs-tab-active");
//     badge.classList.add("vs-tab-active");

//     badge.scrollIntoView({
//       block: "center",
//       behavior: "smooth",
//     });
//   });
// });

// // Event listener for arrow clicks
// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     tab.scrollTop += icon.classList.contains("vs-bottom-arrow") ? 100 : -100; // Scroll up or down
//     updateIcons(); // Update arrow visibility after scrolling
//   });
// });

// // Update arrow visibility based on scroll position
// function updateIcons() {
//   const scrolled_height = tab.scrollTop;
//   icons[0].parentElement.classList.toggle(
//     "vs-icon-hide",
//     scrolled_height === 0
//   ); // Hide up arrow if at top
//   icons[1].parentElement.classList.toggle(
//     "vs-icon-hide",
//     tab.scrollHeight - (tab.clientHeight + scrolled_height) <= 0 // Hide down arrow if at bottom
//   );
// }

// // Initial visibility check
// updateIcons();

// // Scroll event to update arrows
// tab.addEventListener("scroll", updateIcons);
//version 3

// const tab = document.querySelector(".vs-tabs");
// const badges = tab.querySelectorAll(".vs-tab");
// const icons = document.querySelectorAll(".vs-icon span");
// const { clientHeight, scrollHeight } = tab;

// // Event listener for tab clicks
// badges.forEach((badge) => {
//   badge.addEventListener("click", () => {
//     tab.querySelector(".vs-tab-active").classList.remove("vs-tab-active");
//     badge.classList.add("vs-tab-active");

//     badge.scrollIntoView({
//       block: "center", // Center the active tab vertically
//       behavior: "smooth",
//     });
//   });
// });

// // Event listener for arrow clicks
// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     tab.scrollTop += icon.classList.contains("vs-bottom-arrow") ? 100 : -100; // Scroll up or down
//     updateIcons(); // Update arrow visibility after scrolling
//   });
// });

// // Update arrow visibility based on scroll position
// function updateIcons() {
//   const scrolled_height = tab.scrollTop;
//   icons[0].parentElement.classList.toggle("vs-icon-hide", scrolled_height <= 1); // Hide up arrow if at top
//   icons[1].parentElement.classList.toggle(
//     "vs-icon-hide",
//     scrollHeight - (clientHeight + scrolled_height) <= 1 // Hide down arrow if at bottom
//   );
// }

// // Initial visibility check
// updateIcons();

// // Scroll event to update arrows
// tab.addEventListener("scroll", updateIcons);

//version2:

// const tab = document.querySelector(".vs-tabs"),
//   badges = tab.querySelectorAll(".vs-tab"),
//   icons = document.querySelectorAll(".vs-icon span"),
//   { clientWidth, scrollWidth } = tab;

// badges.forEach((badge) => {
//   badge.addEventListener("click", () => {
//     tab.querySelector(".vs-tab-active").classList.remove("vs-tab-active");
//     badge.classList.add("vs-tab-active");

//     // badge.scrollIntoView({
//     //   inline: "center",
//     // });
//   });
// });

// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     tab.style = "";
//     tab.scrollTop += icon.classList.contains("vs-top-arrow") ? 300 : -300;
//   });
// });

// tab.addEventListener("scroll", (e) => {
//   updateIcons(e.target.scrollTop);
// });

// tab.addEventListener("wheel", (e) => {
//   tab.style.scrollBehavior = "auto";
//   tab.scrollTop += e.deltaX;
// });

// function updateIcons(scrolled_width) {
//   icons[0].parentElement.classList.toggle("hide", scrolled_width <= 1);
//   icons[1].parentElement.classList.toggle(
//     "vs-icon-hide",
//     scrollWidth - (clientWidth + scrolled_width) <= 1
//   );
// }

//Admin Panel Sidebar
