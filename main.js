import $ from "jquery";
import "./style.css";
import "./styles.scss";

$(document).ready(function () {
  // Use .on() for better compatibility
  $(document).on("click", ".thumbnail", function () {
    const fullImgSrc = $(this).data("full");
    $("#popup-img").attr("src", fullImgSrc);
    $("#popup").css("display", "flex");
  });

  // Click anywhere to close the modal
  $("#popup").on("click", function () {
    $(this).fadeOut();
  });
});

$(".projects").css({
  "font-weight": "700",
  color: "white",
});

$(".projectscover > div").on("click", function () {
  // Get the target section from the data attribute
  const targetSection = $(this).data("target");

  // Hide all sections with a sliding effect
  $(".section").slideUp();

  // Show the target section with a sliding effect
  $(targetSection).slideDown();

  // Reset the styles for all divs
  $(".projectscover > div").css({
    "font-weight": "500",
    color: "rgba(211, 211, 211, 0.575)",
  });

  // Highlight the clicked div
  $(this).css({
    "font-weight": "700",
    color: "white",
  });

  // Move the .moveline under the clicked element
  const $moveline = $(".moveline");
  const $this = $(this);
  const leftPosition = $this.position().left;
  const elementWidth = $this.outerWidth();

  // Move the .moveline under the clicked element
  $moveline.css({
    left: leftPosition + "px",
    width: elementWidth + "px",
  });
});

//auto display the project section
$("#projectsection").css({
  display: "block",
});

$(".contact, .detailscancel ").on("click", function () {
  const $contactDetails = $(".contantsdetails");
  $contactDetails.slideToggle();
});

//for the option styling
$(".option").on("click", function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

//custom boostrap style for project modal
$("#clancirclebtn, #clanseemore").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("clancircle"));
  myModal.show();
});
$("#bloginbtn, #blogitseemore").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("blogit"));
  myModal.show();
});
$("#demostorebtn, #demoseemore").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("demostore"));
  myModal.show();
});
$("#profilebtn, #profileseemore").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("portfolio"));
  myModal.show();
});

$("#wiibtn, #wiiseemore").on("click", function () {
  const myModal = new bootstrap.Modal(document.getElementById("wiiapp"));
  myModal.show();
});
$("#rokonotebtn, #rokoseemore").on("click", function () {
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
