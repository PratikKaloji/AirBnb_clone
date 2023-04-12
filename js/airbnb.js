// creating dropDownMenu click event for the login an sign up

let dropDownButton = document.getElementsByClassName("item1");

let dropdownbutton2 = dropDownButton[2];
let dropDownMenu = document.getElementsByClassName("dropdownMenu");
// console.log(dropDownMenu);
let val;
dropdownbutton2.addEventListener("click", e => {
  e.stopPropagation();
  e.preventDefault();

  val = dropdownbutton2.classList.toggle("active");
  if (val === true) {
    dropDownMenu[0].style.display = "block";
    val = false;
    // console.log(val, "inside if condition");
  } else {
    dropDownMenu[0].style.display = "none";
    // console.log(val, "inside if else");
  }
});

let bdy = window;
// console.log(bdy);

bdy.addEventListener("click", e => {
  e.stopPropagation();
  e.preventDefault();
  if (val === false) {
    dropDownMenu[0].style.display = "none";
    dropdownbutton2.classList.remove("active");
    // val = true;
    // console.log(val, "inside if bdy");
  }
});

//----------------------------------------------------------

// clicking on the navigation center div to open the access

let searchContainer = document.getElementsByClassName("search_container");

let searchDiv = document.getElementsByClassName("search");

let access = document.getElementById("access-Section");

let insideSearchContainer = document.getElementsByClassName(
  "inside-search-section"
);

let carouselsection = document.getElementsByClassName("car-Section");

let navbarsection = document.getElementById("_navbar_section");

// let item2;
let item;

searchContainer[0].addEventListener("click", e => {
  e.stopPropagation();
  e.preventDefault();
  item = searchContainer[0].classList.toggle("present");
  // let item2 = searchContainer[0].classList.toggle("present");
  if (item === true) {
    searchContainer[0].style.display = "none";

    access.style.display = "block";

    insideSearchContainer[0].style.display = "block";

    // vanishing the carousel section

    console.log(carouselsection);
    carouselsection[0].style.display = "none";

    //removing border bottom of the navnbar section

    console.log(navbarsection);
    navbarsection.style.borderBottom = "none";

    item = false;
  }
  // } else {
  //   searchContainer[0].style.display = "block";

  //   access.style.display = "none";

  //   insideSearchContainer[0].style.display = "none";

  //   carouselsection[0].style.display = "block";
  //   navbarsection.style.borderBottom = "block";

  // }
});

//to close the access the below is the code

let bod = window;
bod.addEventListener("click", e => {
  e.stopPropagation();
  e.preventDefault();
  if (item === false) {
    searchContainer[0].style.display = "flex";

    access.style.display = "none";

    insideSearchContainer[0].style.display = "none";
    // searchContainer[0].classList.remove("present");

    console.log(item);
    carouselsection[0].style.display = "block";
    navbarsection.style.borderBottom = "block";
  }
});
