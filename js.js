// ==UserScript==
// @name         优酷去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://v.youku.com/v_show/*
// @grant        none
// ==/UserScript==

(function() {
    let iframe=document.getElementById("link4");
    console.log(iframe.value);
    let regex=new RegExp("src='(.+)' ");
    let href=iframe.value.match(regex)[1];
    if(href!=null)
    {
        let div=document.getElementById("bpmodule-playpage-paction");
        let ul=div.getElementsByTagName("ul")[0];
        let li= document.createElement("li");
        let a=document.createElement("a");
        a.href=href;
        a.target="_blank";
        a.style.color="white";
        a.style.whiteSpace="nowrap";
        a.style.verticalAlign='middle';
        a.innerHTML="<span class='text'><b>X</b>  去广告</span>"

        li.appendChild(a);
        ul.appendChild(li);
    }
})();
