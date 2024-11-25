import $ from "jquery";
import "./style.css";
import "./styles.scss";

//for the option styling
$(".option").on("click", function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

//custom boostrap style for project modal
$("#demostorebtn").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("demostore"));
  myModal.show();
});
$("#profilebtn").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("portfolio"));
  myModal.show();
});
$("#kingsbtn").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("kingsclean"));
  myModal.show();
});
$("#wiibtn").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("wiiapp"));
  myModal.show();
});
$("#rokonotebtn").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("rokonote"));
  myModal.show();
});
//////////////////////////

//for tools styling
$(".card_card").each(function () {
  let $pointer = $(this).find(".pointer");
  $(this).on("mousemove", function (event) {
    let pointerX = event.pageX - $(this).offset().left - $pointer.width() / 2;
    let pointerY = event.pageY - $(this).offset().top - $pointer.height() / 2;
    $pointer.css({
      left: pointerX + "px",
      top: pointerY + "px",
      backgroundImage: `hsl(${$(this).css("--hue")}, ${$(this).css(
        "--saturation"
      )}, ${$(this).css("--lightness")})`,
    });
    let boxWidth = $(this).width();
    let boxHeight = $(this).height();
    let gradientX = (pointerX / boxWidth) * 100;
    let gradientY = (pointerY / boxHeight) * 100;
    let hue = parseFloat($(this).css("--hue"));
    let saturation = parseFloat($(this).css("--saturation"));
    let lightness = parseFloat($(this).css("--lightness"));

    $(this).find(".border-top").css({ display: "block" });
    $(this).find(".border-bottom").css({ display: "block" });
    $(this).find(".pointer").css({
      display: "block",
    });
    $(this).css(
      "backgroundImage",
      `linear-gradient(45deg, hsl(${hue}, ${saturation}%, 50%), hsl(${
        (hue + gradientX) % 360
      }, ${saturation}%, ${lightness + (gradientY / 100) * 50}%))`
    );
    let borderColor = $(this).css("--border-color");
    if (pointerX <= boxWidth / 2) {
      $(this).css({
        borderLeftColor: borderColor,
        borderRightColor: "transparent",
      });
    } else {
      $(this).css({
        borderLeftColor: "transparent",
        borderRightColor: borderColor,
      });
    }
  });

  $(this).on("mouseleave", function () {
    $(this).css({
      borderColor: "transparent",
      border: "transparent",
      backgroundImage: "none",
    });
    $(this)
      .find(".border-top, .border-bottom, .pointer")
      .css({ display: "none" });
  });
});

$(".card_card").on("mousemove", function (event) {
  let pointerX = event.pageX - $(this).offset().left;
  let width = $(this).width();
  $(this)
    .find(".border-top")
    .css({ left: (pointerX / width) * 75 + "%" });
  $(this)
    .find(".border-bottom")
    .css({ left: (pointerX / width) * 75 + "%" });
});
////////////////////////////////////////////////

///vanilla for headers theme and drop down
const themeButton = document.querySelector(".theme");
const themeSelect = document.querySelector(".themeselect");
const themeRadio = document.getElementsByName("theme");
const bodyColor = document.querySelector(".bodycolor");
const menuButton = document.getElementById("header-dropdown");
const dropdown = document.querySelector("#dropdown");
const close = document.querySelector(".close");
const stackRow = document.getElementById("stack");
const arrowBack = document.querySelector(".arrowleft");
const arrowForward = document.querySelector(".arrowright");

themeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  if (themeSelect.style.display === "block") {
    themeSelect.style.display = "none";
  } else {
    themeSelect.style.display = "block";
  }
});

themeRadio.forEach((element) => {
  element.addEventListener("change", (e) => {
    let themeValue;
    themeValue = e.target.value;
    //dropdown.classList = `dropdown ${themeValue}`
    bodyColor.classList = themeValue;
  });
});

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.style.display = "block";
  close.addEventListener("click", () => {
    dropdown.style.display = "none";
  });
});

stackRow.addEventListener("mouseover", () => {
  if (arrowBack.style.display === "block") {
    arrowBack.style.display = "none";
    arrowForward.style.display = "none";
  } else {
    arrowBack.style.display = "block";
    arrowForward.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  const screen = window.innerWidth;
  if (screen >= 1000) {
    dropdown.style.display = "block";
  }

  if (screen < 1000) {
    dropdown.style.display = "";
  }
});

document.addEventListener("click", () => {
  if (themeSelect.style.display === "block") {
    themeSelect.style.display = "none";
  }
});
