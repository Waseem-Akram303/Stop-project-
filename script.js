let startvalue = 0;
var stopvalue = 0;
var resetvalue = 0;
var count = 0;
var timer = false;
var sec = 0;
var mint = 0;
var hour = 0;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  count = 0;
  sec = 0;
  mint = 0;
  hour = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("mint").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      mint = mint + 1;
      sec = 0;
    }
    if (mint == 60) {
      hour = hour + 1;
      mint = 0;
      sec = 0;
    }
    var hourString = hour;
    var mintString = mint;
    var secString = sec;
    var countString = count;
    if (hour < 10) {
      hourString = "0" + hourString;
    }
    if (mint < 10) {
      mintString = "0" + mintString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("mint").innerHTML = mint;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
    setTimeout("stopwatch()", 10);
  }
}
