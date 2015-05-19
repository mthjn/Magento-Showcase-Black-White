var msg      = document.getElementById("yellowmsg"),
    cross   = document.getElementById("closeyellow");
    console.log(msg + '  ' + cross);

window.addEventListener("load", function(){
  cross.onclick = function(e) {
        msg.className = 'disabled';
        // add cookie
    }
});
