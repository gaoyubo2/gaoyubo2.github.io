//获取当前IP地址和浏览器标识
function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var clustrmapsScriptContent = '<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=243&t=n&d=ZK6ZxX0n7UkTgDHG19-IlHSQfFiUGP1SAJMk1pmxZLQ&co=2d78ad&cmo=3acc3a&cmn=ff5353&ct=ffffff"></script>';
// var clustrmapsScriptContent = '<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=ZK6ZxX0n7UkTgDHG19-IlHSQfFiUGP1SAJMk1pmxZLQ"></script>';

document.getElementById('visitor-container').innerHTML = clustrmapsScriptContent
