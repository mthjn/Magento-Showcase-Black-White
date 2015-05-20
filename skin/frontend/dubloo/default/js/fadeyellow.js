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
