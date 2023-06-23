// Switch hero image to dark mode on click

const heroImage = document.querySelector("img");

heroImage.onclick = () => {
  const mySrc = heroImage.getAttribute("src");
  if (mySrc === "images/hero-image.png") {
    heroImage.setAttribute("src", "images/hero-image-dark.png");
  } else {
    heroImage.setAttribute("src", "images/hero-image.png");
  }
};