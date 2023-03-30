window.onkeydown = window.onkeyup = window.onkeypress = function () {
            window.event.returnValue = false;
            return false;
        };
var h = window.innerHeight,
            w = window.innerWidth;
        window.onresize = function () {
            if (h != window.innerHeight || w != window.innerWidth) {
                window.location = "https://www.baidu.com";
            }
        };

window.oncontextmenu = function() {  
    event.preventDefault(); 
    return false;  
}
 setInterval(function () {
            check()
        }, 1000);
        var check = function () {
            function doCheck(a) {
                if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
                    (function () { }
                    ["constructor"]("debugger")())
                } else {
                    (function () { }
                    ["constructor"]("debugger")())
                }
                doCheck(++a)
            }
            try {
                doCheck(0)
            } catch (err) { }
        };
        check(); 
