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

// Create a new div element
var divElement = document.createElement('div');

// Set the innerHTML of the new div with the clustrmapsScriptContent
divElement.innerHTML = clustrmapsScriptContent;

// Apply additional styles to the new div
divElement.style.left = '-24px';

// Append the new div to the element with id 'visitor-container'
document.getElementById('visitor-container').appendChild(divElement);
