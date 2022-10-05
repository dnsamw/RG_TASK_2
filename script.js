//Image Loop
var imgArray = [
    "./images/pasta_stock_1.png",
    "./images/pasta_stock_2.png",
    "./images/pasta_stock_3.png",
  ],
  curIndex = 0;
imgDuration = 4000;

function slideShow() {
  document.getElementById("coverimg").className += "fadeOut";
  setTimeout(function () {
    document.getElementById("coverimg").src = imgArray[curIndex];
    document.getElementById("coverimg").className = "";
  }, 1500);
  curIndex++;
  if (curIndex == imgArray.length) {
    curIndex = 0;
  }
  setTimeout(slideShow, imgDuration);
}
slideShow();
