//Image slider
let count = 0;
let images = [];
let time = 2000;

images[0] = "https://img6.hkrtcdn.com/15645/bnr_1564495_o.jpg";
images[1] = "https://img10.hkrtcdn.com/15640/bnr_1563949_o.jpg";
images[2] = "https://img6.hkrtcdn.com/15538/bnr_1553705_o.jpg";
images[3] = "https://img8.hkrtcdn.com/15641/bnr_1564057_o.jpg";
images[4] = "https://img8.hkrtcdn.com/14853/bnr_1485287_o.jpg";
images[5] = "https://img6.hkrtcdn.com/15632/bnr_1563185_o.png";

function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  setTimeout("slidingShows()", time);
}
window.onload = slidingShows;
