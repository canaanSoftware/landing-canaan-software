// Close the navbar on click outside
$(() => {
  $(document).click((event) => {
    $(".navbar-collapse").collapse("hide");
  });
});

//Get the button
let backToTopBtn = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

window.onscroll = () => {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

backToTopBtn.addEventListener("click", backToTop);
