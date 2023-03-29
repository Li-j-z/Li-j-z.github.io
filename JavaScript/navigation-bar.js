var time;
var normar_title=document.title;
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
         clearTimeout(time);        
         document.title = '拜拜喽~~';
    } else {
        document.title = '欢迎回到Lijz的魔方小站';
        time=setTimeout(function(){ document.title = normar_title; }, 3000);
}
});
