

//切换为dark 默认加载light 
(function setdarktheme() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = 'text/css';
    if (typeof theme !== "undefined" && theme == 'dark')
        link.href = "../assets/css/dark.css"
    else
        link.href = "../assets/css/light.css"

    let head = document.getElementsByTagName('head')[0]; // 获取head元素 
    head.appendChild(link);  // 将link标签添加到head元素中 
})();


//自定义字体
function setCustomFontFamily() {
    if (typeof customFontFamily !== 'undefined')
        document.body.style.fontFamily = customFontFamily;
}

function InitConfig() {

    setCustomFontFamily();
}

