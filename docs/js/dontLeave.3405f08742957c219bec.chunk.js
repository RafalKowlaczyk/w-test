!function(n){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],r=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),n=s(s.s=e[0]))}return n}var r={},o={2:0},a=[];function s(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=n,s.c=r,s.d=function(n,t,e){s.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,t){if(1&t&&(n=s(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)s.d(e,r,function(t){return n[t]}.bind(null,r));return e},s.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(t,"a",t),t},s.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([13,0]),e()}({13:function(n,t,e){"use strict";e.r(t);var r=e(0),o=(e(14),e(8)),a=new(e.n(o).a);r(document).ready((function(){a.start({countdown:!0,startValues:{seconds:180}}),r("#countdownExample .values").html(a.getTimeValues().toString()),a.addEventListener("secondsUpdated",(function(n){r("#countdownExample .values").html(a.getTimeValues().toString())})),a.addEventListener("targetAchieved",(function(n){r(".values").addClass("flashing")}))}))},14:function(n,t,e){n.exports='<!DOCTYPE html>\n<html lang="pl">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>PROMOCJA</title>\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"\n        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">\n</head>\n\n<body>\n    <div class="container" style="background-color: #DFE2E5; overflow: hidden;">\n        <div class="row justify-content-center">\n            <div class="col-12 col-lg-8 p-5 bg-light">\n                <h1 class="text-center">Jeszcze lepsza okacja!</h1>\n                <h2 class="text-center" style="color: #000;">Przez najbliższe:</h2>\n                <div class="row">\n                    <div class="col-12">\n                        <div id="countdownExample">\n                            <div class="values"></div>\n                        </div>\n                    </div>\n                </div>\n                <p class="text-center">Arthroflex <br> o 2x wyższym stężeniu składników aktywnych</p>\n                <img class="img-fluid w-50 d-block mx-auto" src="'+e(2)+'"\n                    alt="product box">\n\n                <br>\n                <br>\n                <h4 class="text-center"><b><s>317zł</s> 141zł</b></h4>\n                <p class="text-center">Zamów <u>dzisiaj</u> i oszczędź 276 zł, otrzymaj darmową wysyłkę i gwarancję\n                    satysfakcji. Jutro promocja przepada.</p>\n                <div class="row justify-content-center">\n                    <a href="./shipping-form.html">\n                        <button class="btn btn-success px-5 py-3 my-4">DODAJ DO KOSZYKA</button>\n                    </a>\n                </div>\n                <div class="row justify-content-center">\n                    <img class="my-3" src="xxxHTMLLINKxxx0.039557080231901190.9992103699381574xxx" alt="">\n                </div>\n                <div class="footer" style="font-size: 16px; text-align: center;">\n                    <br>\n                    <a href="#">Polityka Prywatności</a> | <a href="#">Regulamin</a> | <a href="#">Kontakt</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>'},2:function(n,t){n.exports="img/arthroflex_mockup_gauss_970.png"}});