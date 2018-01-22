(function (_window) {
    // 计算dpr
    var navigatorUserAgent = navigator.userAgent;
    var iPhone = navigatorUserAgent.indexOf("iPhone");
    if (iPhone > -1) {
        var dpr = Number(window.devicePixelRatio),
            one_dpr = 1 / dpr;
    } else {
        var dpr = 1,
            one_dpr = 1;
    }
    var writeText = "<meta name=\"viewport\" content=\"width=device-width,initial-scale=" + one_dpr + ",maximum-scale=" + one_dpr + ",minimum-scale=" + one_dpr + ",user-scalable=no\">\n        <meta name=\"'flexible\" content=\"initial-dpr=" + dpr + "\">";
    document.write(writeText);
    // 计算字体大小
    var html = document.getElementsByTagName("html");
    var F0 = 75;
    html[0].setAttribute("data-dpr", dpr);
    var getFontSize = function getFontSize() {
        var windowWidth = window.innerWidth;
        console.log(html[0].style.fontSize = F0 * windowWidth / 750 + "px");
    };
    // 初始化
    getFontSize();
    _window.addEventListener("resize", getFontSize, false);
})(window); 
