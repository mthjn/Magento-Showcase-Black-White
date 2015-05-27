var msg      = document.getElementById("yellowmsg"),
    cross   = document.getElementById("closeyellow");
    //console.log(msg + '  ' + cross);

if (document.cookie.indexOf("closedmessage") >= 0) {
  console.log("hello again");
  msg.className = 'disabled';
}

window.addEventListener("load", function(){
  cross.onclick = function(e) {
        msg.className = 'disabled';

        var expiry = new Date();
        expiry.setDate(expiry.getDate() + 60); // 1 Min
        document.cookie = "closedmessage=yes; expires=" + expiry.toUTCString();
        console.log("setting the cookie");
    }
});


//latest arrival posh
  var latest0 = document.getElementById("latest-0");
  var latest1 = document.getElementById("latest-1");
  var latest2 = document.getElementById("latest-2");
  var latest3 = document.getElementById("latest-3");
  var latest4 = document.getElementById("latest-4");

  latest0.onmouseover = function(e) {
    var slidein = document.getElementById("h2-latest-0");
    slidein.className = "slideactive";
  }
  latest0.onmouseout = function(e) {
    var slidein = document.getElementById("h2-latest-0");
    slidein.className = "slidein";
  }
  latest1.onmouseover = function(e) {
    var slidein = document.getElementById("h2-latest-1");
    slidein.className = "slideactive";
  }
  latest1.onmouseout = function(e) {
    var slidein = document.getElementById("h2-latest-1");
    slidein.className = "slidein";
  }
  latest2.onmouseover = function(e) {
    var slidein = document.getElementById("h2-latest-2");
    slidein.className = "slideactive";
  }
  latest2.onmouseout = function(e) {
    var slidein = document.getElementById("h2-latest-2");
    slidein.className = "slidein";
  }
  latest3.onmouseover = function(e) {
    var slidein = document.getElementById("h2-latest-3");
    slidein.className = "slideactive";
  }
  latest3.onmouseout = function(e) {
    var slidein = document.getElementById("h2-latest-3");
    slidein.className = "slidein";
  }
  latest4.onmouseover = function(e) {
    var slidein = document.getElementById("h2-latest-4");
    slidein.className = "slideactive";
  }
  latest4.onmouseout = function(e) {
    var slidein = document.getElementById("h2-latest-4");
    slidein.className = "slidein";
  }
