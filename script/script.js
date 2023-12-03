var offArray = new Array();
offArray[0] = "assets/off_image1.webp";
offArray[1] = "assets/off_image2.webp";
offArray[2] = "assets/off_image3.webp";

var onArray = new Array();
onArray[0] = "assets/on_image1.webp";
onArray[1] = "assets/on_image2.webp";
onArray[2] = "assets/on_image3.webp";

var check = 0;
window.onload = function () {
  onImage();

  var objimg = document.getElementById("on");
  objimg.addEventListener("touchstart", (event) => {
    var cnt = document.getElementById("count");
    cnt.innerHTML = parseInt(cnt.innerHTML) + 1;
    if (check == 0) {
      startStopwatch();
      check = 1;
    }
    offImage();
  });
  objimg.addEventListener("touchend", onImage);
};

async function onImage() {
  var onimgNum = Math.floor(Math.random() * 3);
  var offimgNum = Math.floor(Math.random() * 3);
  var onimg = document.getElementById("on");
  var offimg = document.getElementById("off");

  onimg.src = onArray[onimgNum];
  offimg.src = offArray[offimgNum];
  offimg.style.visibility = "hidden";
}

function offImage() {
  var offimg = document.getElementById("off");
  offimg.style.visibility = "visible";
}

function click() {}

function startStopwatch() {
  var elapsedTimeText = document.getElementById("time");
  var second = 1;
  elapsedTimeIntervalRef = setInterval(() => {
    time = 30 - second;
    // time = timeAndDateHandling.getElapsedTime(startTime);
    elapsedTimeText.innerHTML = "00" + " : " + zeroPad(time, 10);
    if (time == 0) {
      gotoPage();
    }
    second = second + 1;
  }, 1000);
}

function zeroPad(nr, base) {
  var len = String(base).length - String(nr).length + 1;
  return len > 0 ? new Array(len).join("0") + nr : nr;
}
function gotoPage() {
  var cnt = document.getElementById("count");
  localStorage.setItem("count", cnt.innerHTML);
  location.href = "./done.html";
}
