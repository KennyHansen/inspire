function TimeService(){
    this.startTime = function(){
        debugger
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        if (h > 12 ) h -= 12;
        document.getElementById('time').innerHTML =
        '<h1>' + h + ":" + m + '</h1>';
        console.log(s)
        setTimeout(this.startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
}
