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



const signInContainer = document.querySelector(".sign-in-container");
const signModal = document.querySelector(".sign-modal");
const overlay = document.querySelector(".overlay");
const closeModalSignIn = document.querySelector(".close-modal_sign_in");
const closeModalSignUp = document.querySelector(".close-modal_sign_up");
const signInBtn = document.querySelector(".login-btn");
const signUpBtn = document.querySelector(".signup-btn");

const toggleModal = (modal, action) => {
  modal.classList[action]("hidden");
  overlay.classList[action]("hidden");
};

signInBtn.addEventListener("click", () =>
  toggleModal(signInContainer, "remove")
);
signUpBtn.addEventListener("click", () => toggleModal(signModal, "remove"));
closeModalSignIn.addEventListener("click", () =>
  toggleModal(signInContainer, "add")
);
closeModalSignUp.addEventListener("click", () => toggleModal(signModal, "add"));

// Sign Up Validation and store data in local storage
function saveFormData() {
  let name, email, password;
  name = document.querySelector("#username").value;
  email = document.querySelector("#user-email").value;
  password = document.querySelector("#user-password").value;
  // console.log(name + email + password);

  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Duplicate Data");
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
    });

    localStorage.setItem("users", JSON.stringify(user_records));
  }
}

// Check Form Data for Login

function checkLoginFormData() {
  let email = document.querySelector("#sign-email").value;
  let password = document.querySelector("#sign-pass").value;

  // Retrieve user records from localStorage
  let user_record = JSON.parse(localStorage.getItem("users")) || [];

  // Check for admin credentials stored in localStorage
  let adminEmail = "ahmadi";
  let adminPassword = "123";

  // Check if the entered email and password match the admin credentials
  if (email === adminEmail && password === adminPassword) {
    alert("Login Successful");
    window.location.href = "admin-panel.html";
    return; // Exit the function after redirection
  }

  // Check for user credentials in localStorage
  if (
    user_record.some(
      (user) => user.email === email && user.password === password
    )
  ) {
    alert("Login Successful");
    let current_user = user_record.find(
      (user) => user.email === email && user.password === password
    );
    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href = "user-profile.html";
  } else {
    alert("Login Failed");
  }
}
//Logout event
function logout() {
  localStorage.removeItem("name");
  window.location.href = "index.html";
}

// Validation form check
const form = document.querySelector(".sign-form"); // Fixed selector
const email = document.querySelector("#sign-email");
const password = document.querySelector("#sign-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  validateInputs(); // Call the validation function
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".form-error");

  errorDisplay.innerText = message;
  inputControl.classList.add("form-error");
  inputControl.classList.remove("form-success"); // Corrected spelling
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".form-error");

  errorDisplay.innerText = "";
  inputControl.classList.add("form-success"); // Ensure class names are consistent
  inputControl.classList.remove("form-error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else {
    setSuccess(password);
  }
};

// Validation Sign Up Form
const signUpForm = document.querySelector(".sign-up-form");
const signUpName = document.querySelector("#username");
const signUpEmail = document.querySelector("#user-email");
const signUpPassword = document.querySelector("#user-password");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs2();
});

const validateInputs2 = () => {
  const userNameSignUpValue = signUpName.value.trim();
  const emailSignUpValue = signUpEmail.value.trim();
  const passwordSignUpValue = signUpPassword.value.trim();

  if (userNameSignUpValue === "") {
    setError(signUpName, "Name is required");
  } else {
    setSuccess(signUpName);
  }

  if (emailSignUpValue === "") {
    setError(signUpEmail, "Email is required");
  } else if (!isValidEmail(emailSignUpValue)) {
    setError(signUpEmail, "Provide a valid email address");
  } else {
    setSuccess(signUpEmail);
  }

  if (passwordSignUpValue === "") {
    setError(signUpPassword, "Password is required");
  } else if (passwordSignUpValue.length < 8) {
    setError(signUpPassword, "Password must be at least 8 characters.");
  } else {
    setSuccess(signUpPassword);
  }
};
// Catalog Page

// Movie data array
const movies = [
  {
    title: "Interstellar",
    genre: "Action/Movie",
    rating: 7.4,
    image: "img/poster1.jpg",
  },
  {
    title: "Inception",
    genre: "Sci-Fi/Thriller",
    rating: 8.8,
    image: "img/mv-it3.jpg",
  },
  {
    title: "The Dark Knight",
    genre: "Action/Crime",
    rating: 9.0,
    image: "img/mv-it4.jpg",
  },
  {
    title: "Avatar",
    genre: "Fantasy/Adventure",
    rating: 7.8,
    image: "img/mv-it2.jpg",
  },
  {
    title: "Titanic",
    genre: "Romance/Drama",
    rating: 7.8,
    image: "img/mv-item11.jpg",
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi/Action",
    rating: 8.7,
    image: "img/mv-item12.jpg",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy/Adventure",
    rating: 8.8,
    image: "img/mv-item4.jpg",
  },
  {
    title: "Forrest Gump",
    genre: "Drama/Romance",
    rating: 8.8,
    image: "img/mv-item2.jpg",
  },
];

// Function to add movie content to existing HTML
const addMovieContent = () => {
  const movieItemsContainer = document.querySelectorAll(
    ".movie-items-container .row .col-xs-12.col-md-4.col-lg-3"
  );

  movieItemsContainer.forEach((item, index) => {
    if (index < movies.length) {
      item.querySelector("img").src = movies[index].image;
      item.querySelector("img").alt = movies[index].title;
      item.querySelector("h4").textContent = movies[index].title;
      item.querySelector(".catalog-card-subtitle").textContent =
        movies[index].genre;
      item.querySelector(
        ".catalog-card-rate"
      ).innerHTML = `<i class="fa-solid fa-star"></i> ${movies[index].rating}`;
    }
  });
};

// Call the function to add movie content
addMovieContent();

// Top Rated Section
const tabItems = Array.from(document.querySelectorAll(".tab-item"));

const videoPlayer = document.getElementById("videoPlayer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateTabs() {
  // Hide all items
  tabItems.forEach((item) => (item.style.display = "none"));

  // Show the selected item at the top
  tabItems[currentIndex].style.display = "flex";
  tabItems[currentIndex].classList.add("selected");

  // Show the next 4 items
  for (let i = 1; i <= 4; i++) {
    const index = (currentIndex + i) % tabItems.length;
    tabItems[index].style.display = "flex";
    tabItems[index].classList.remove("selected");
  }

  // Update video player source
  const videoUrl = tabItems[currentIndex].getAttribute("data-video");
  videoPlayer.src = videoUrl;
}

// Click event for Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % tabItems.length; // Move to the next item
  updateTabs();
});

// Click event for Previous button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + tabItems.length) % tabItems.length; // Move to the previous item
  updateTabs();
});

// Click event for tab items
tabItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index; // Set current index to the clicked item
    updateTabs();
  });
});

// Initialize the tabs
updateTabs();
