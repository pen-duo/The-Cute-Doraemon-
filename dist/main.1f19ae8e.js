// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "/*\u4F60\u597D\u9762\u8BD5\u5B98,\u6211\u53EB\u5C0F\u5F6D\n*\u63A5\u4E0B\u6765,\u6211\u8981\u7ED9\u60A8\u5236\u4F5C\u4E00\u4E2A\u53EF\u7231\u7684\u591A\u5566A\u68A6\n*\u9996\u5148\u6211\u51C6\u5907\u5C06\u9875\u9762\u80CC\u666F\u6539\u6210\u597D\u770B\u7684\u989C\u8272\n*/\n html {\n  width: 100%;\n  height: 100%;\n  background-color: #fc3;\n}\n/* \u7B2C\u4E00\u6B65,\u5148\u6765\u5236\u4F5C\u4E00\u4E2A\u5C0F\u53EE\u5F53\u7684\u53EF\u7231\u84DD\u8111\u888B\n*/\n.doraemon {\n  width: 500px;\n  height: 610px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.head {\n  width: 384px;\n  height: 358px;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  position: absolute;\n  left: 63px;\n  top: 20px;\n  overflow: hidden;\n  background-color: #0097e3;\n  z-index: 3;\n}\n/* \u7B2C\u4E8C\u6B65,\u5C0F\u53EE\u5F53\u7684\u773C\u775B\u900F\u9732\u7740\u667A\u6167\u7684\u5149\u8292\n*/\n.eye-wrap {\n  position: absolute;\n}\n.eye-wrap.left {\n  left: 73px;\n  top: 35px;\n  width: 87px;\n  height: 106px;\n}\n.eye-wrap.right {\n  left: 157px;\n  top: 42px;\n  height: 110px;\n  width: 88px;\n}\n\n.eye {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  position: absolute;\n  overflow: hidden;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  animation:eye-close 6s 5s infinite;\n}\n/*\u4E00\u95EA\u4E00\u95EA\u4EAE\u6676\u6676,\u563B\u563B\n*/\n@keyframes eye-close {\n  0%, 3%, 6%, 100% {\n    height:100%;\n  }\n  1.5%, 4.5% {\n    height:5%;\n  }\n}\n/*\u54CE\u5440,\u5C0F\u53EE\u5F53\u7684\u773C\u775B\u91CC\u597D\u50CF\u5C11\u4E86\u70B9\u4EC0\u4E48,\u6211\u4EEC\u7ED9\u4ED6\u52A0\u4E0A\u53BB\u5427\n*/\n.pupil {\n  position: absolute;\n  width: 25px;\n  height: 35px;\n  background-color: #000;\n  border-radius: 50%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.pupil:after {\n  display: block;\n  content: '';\n  width: 7px;\n  height: 14px;\n  background-color: #fff;\n  z-index: 2;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;  \n}\n/*\u5C0F\u53EE\u5F53\u7684\u53EF\u7231\u7EA2\u9F3B\u5B50\u5927\u5BB6\u8FD8\u6CA1\u5FD8\u8BB0\u5427\n*/\n.nose {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  background-color: #e40224;\n  position: absolute;\n  left: 115px;\n  top: 123px;\n  z-index: 3;\n}\n/*\u4F5C\u4E3A\u4E00\u53EA\u65E0\u6240\u4E0D\u80FD\u7684\u732B\u54AA,\u9738\u6C14\u7684\u80E1\u987B\u662F\u4E0D\u80FD\u5C11\u7684\n*/\n.mustache-list {\n  position: absolute;\n  z-index: 3;\n}\n.mustache-list li {\n  width: 90px;\n  height: 5px;\n  background-color: #000;\n  position: relative;\n}\n.mustache-list li:first-child {\n  -webkit-transform: rotate(15deg);\n  top: -1.75em;\n}\n.mustache-list li:last-child {\n  -webkit-transform: rotate(-15deg);\n  top: 1.75em;\n}\n.mustache-list.left {\n  -webkit-transform: rotate(15deg);\n  top: 165px;\n  left: -5px;\n}\n.mustache-list.right {\n  -webkit-transform: scaleX(-1.4) rotate(0deg);\n  top: 188px;\n  right: 65px;\n}\n/*\u9F3B\u5B50\u4E2D\u95F4\u597D\u50CF\u5C11\u4E86\u70B9\u4EC0\u4E48\u5462\n*/\n.nose:after {\n  display: block;\n  content: '';\n  background-color: #fff;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  left: 11px;\n  top: 11px;\n}\n/*\u5C0F\u53EE\u5F53\u62E5\u6709\u4E00\u5F20\u5927\u5927\u7684\u5634\u5DF4,\u7528\u6765\u5403\u7F8E\u5473\u7684\u94DC\u9523\u70E7\n*/\n.mouth {\n  width: 340px;\n  height: 280px;\n  background-color:#fff;\n  border-radius: 50%;\n  left: 7px;\n  top: 85px;\n  position: absolute;\n  border: 2px solid  #000;\n  z-index: 1;\n  overflow: hidden;\n  -webkit-transform: rotate(5deg);\n}\n.philtrum {\n  position: absolute;\n  min-height: 150px;\n  min-width:50px;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  border-top-color:transparent;\n  border-right-color:transparent;\n  border-bottom-color:transparent;\n  left: 126px;\n  top: 60px;\n  z-index: 5;\n}\n.lips {\n  width: 285px;\n  height: 200px;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  margin-left: 5px;\n  position: relative;\n  z-index: 3;\n  -webkit-transform: rotate(-10deg);\n}\n.lips:before {\n  display: block;\n  content: '';\n  width: 305px;\n  height: 105px;\n  background-color:#fff;\n  position: absolute;\n  left: -2px;\n}\n.dimple {\n  width: 50px;\n  height: 50px;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 6;\n  top: 105px;\n  left: 9px;\n  border-right-color:transparent;\n  border-bottom-color:transparent;\n  -webkit-transform: rotate(10deg);\n}\n/*\u563B\u563B,\u5C0F\u53EE\u5F53\u4E5F\u7231\u7EA2\u9886\u5DFE\n*/\n.necklace {\n  width: 255px;\n  height: 80px;\n  background-color: #d9011a;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  position: absolute;\n  left: 123px;\n  top: 305px;\n  -webkit-transform: rotate(2deg);\n  z-index: 2;\n}\n/*\u5C0F\u53EE\u5F53\u7684logo\u6211\u4EEC\u4E5F\u8981\u7ED9\u4ED6\u52A0\u4E0A\u53BB\n*/\n.drop {\n  width: 55px;\n  height: 55px;\n  border: 2px solid  #000;\n  background-color: #f5cc07;\n  border-radius: 50%;\n  position: absolute;\n  top:68px;\n  left: 50px;\n  overflow: hidden;\n}\n.drop:before {\n  display: block;\n  content: '';\n  position: absolute;\n  width: 17px;\n  height: 8px;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  background-color: #665a4c;\n  left: .5em;\n  top: 25px;\n  z-index: 3;\n}\n.drop:after {\n  display: block;\n  content: '';\n  border-radius: 50%;\n  border: 2px solid  #000;\n  border-top-color:transparent;\n  border-bottom-color:transparent;\n  border-right-color:transparent;\n  min-width: 35px;\n  min-height: 35px;\n  position: absolute;\n  bottom: -4px;\n  left: 15px;\n  -webkit-transform: rotate(-17deg);\n}\n.drop-line {\n  position: absolute;\n  left: -140%;\n  top:10px;\n  min-width: 170px;\n  min-height: 170px;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  border-left-color:transparent;\n  border-bottom-color:transparent;\n  border-right-color:transparent;\n}\n.drop-line:nth-of-type(2) {\n  top:18px;\n}\n/*\u63A5\u4E0B\u6765,\u6211\u4EEC\u6765\u5236\u4F5C\u5C0F\u53EE\u5F53\u7684\u8EAB\u4F53\n*/\n.body {\n  width: 250px;\n  height: 280px;\n  position: absolute;\n  left: 120px;\n  top: 255px;\n  z-index: 1;\n  \n}\n.trunk {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-color: #0097e3;\n  border: 2px solid  #000;\n  border-right-color:transparent;\n  border-bottom-color:transparent;\n}\n.stomach {\n  width: 175px;\n  height: 145px;\n  position: absolute;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  left:10px;\n  top:95px;\n  -webkit-transform: rotate(15deg);\n  overflow: hidden;\n  z-index: 1;\n}\n.pocket {\n  position: absolute;\n  width: 90%;\n  height: 90%;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  top: .5em;\n  left: .5em;\n}\n.pocket:after {\n  content: '';\n  position: absolute;\n  left: -25px;\n  top: -10px;\n  border: 2px solid #000;\n  display: inline-block;\n  min-width: 169px;\n  -webkit-transform: rotate(-10deg);\n  min-height: 65px;\n  padding: 0.5em;\n  border-radius: 50%;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  background-color: #fff;\n}\n.arm {\n  background-color: #0097e3;\n}\n.hand {\n  display: block;\n  content: '';\n  width: 70px;\n  height: 70px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  z-index: -1;\n  border: 2px solid  #000;\n  top: 175px;\n  left: 270px;\n}\n.arm.right:before {\n  display: block;\n  content: '';\n  width: 50px;\n  height: 55px;\n  background-color: #0097e3;\n  position: absolute;\n  top:0;\n  left: -10px;\n  z-index: 3;  \n  -webkit-transform: rotate(30deg);\n}\n.arm.right:after {\n  display: block;\n  content: '';\n  width: 40px;\n  height: 95px;\n  background-color: #0097e3;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  -webkit-transform: rotate(-7deg);\n  position: absolute;\n  top: 6px;\n  left:-12px;\n}\n/*\u5C0F\u53EE\u5F53\u7684\u53F3\u624B\u81C2*/\n.arm.right {\n  position: absolute;\n  width: 70px;\n  height: 120px;\n  border-radius: 40%;\n  right: -55px;\n  border: 2px solid  #000;\n  background-color: #0097e3;\n  top:90px;\n  -webkit-transform: rotate(-30deg);\n  z-index: 1;\n}\n/*\u5C0F\u53EE\u5F53\u7684\u5DE6\u624B\u81C2*/\n.arm.left {\n  z-index: -1;\n  position: absolute;\n  border-radius: 50%;\n  width: 45px;\n  height: 65px;\n  top:85px;\n  left:-15px;\n  border: 2px solid  #000;\n  -webkit-transform: rotate(15deg);\n}\n.trunk:before {\n  display: block;\n  content: '';\n  width: 20px;\n  height: 20px;\n  background-color: #0097e3;\n  position: absolute;\n  top:85px;\n  left:0;\n  z-index: 3;\n}\n.trunk:after {\n  display: block;\n  content: '';\n  width: 110px;\n  height: 145px;\n  background-color: #0097e3;\n  position: absolute;\n  top: 110px;\n  left:1px;\n  -webkit-transform: rotate(15deg);\n}\n.footer {\n  \n}\n/*\u5C0F\u53EE\u5F53\u7684\u5DE6\u811A*/\n.leg.left {\n  width: 120px;\n  height: 110px;\n  background-color: #0097e3;\n  position: absolute;\n  border: 2px solid  #000;\n  left: 95px;\n  top: 430px;\n}\n.foot {\n  width: 105px;\n  height: 160px;\n  background-color: #fff;\n  position: absolute;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  z-index: 10;\n}\n.leg.left .foot {\n  -webkit-transform:rotate(-30deg);\n  left:-4em;\n  top: -1.5em; \n}\n/*\u5C0F\u53EE\u5F53\u7684\u53F3\u811A*/\n\n.leg.right + .foot {\n  -webkit-transform:rotate(-40deg);\n  left:206px;\n  top: 450px;\n  width: 125px;\n  height: 150px;\n}\n.leg.left:before {\n  display: block;\n  content: '';\n  min-width: 45px;\n  min-height: 45px;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  position: absolute;\n  left:-10px;\n  top:-10px;\n  background-color: #0097e3;\n  border-left-color:transparent;\n  border-right-color:transparent;\n  border-bottom-color:transparent;\n}\n.leg.left:after {\n  display: block;\n  content: '';\n  min-width: 140px;\n  min-height: 140px;\n  border-radius: 50%;\n  border: 2px solid  #000;\n  background-color: #fc3;\n  position: absolute;\n  top:98px;\n  left:8px;\n  border-left-color:transparent;\n  border-right-color:transparent;\n  border-bottom-color:transparent;\n  z-index:3;\n}\n.right-padding {\n  position: absolute;\n  z-index: 8;\n  top:455px;\n  left: 288px;\n}\n.right-padding:before {\n  display: block;\n  content: '';\n  width: 30px;\n  height: 30px;\n  background-color: #0097e3;\n  border: 2px solid  #000;\n  border-left-color:transparent;\n  border-right-color:transparent;\n  border-bottom-color:transparent;\n  position: absolute;\n  left:0;\n  top:0;\n  z-index: -1;\n  -webkit-transform:rotate(-15deg);\n}\n.leg.right {\n  width: 75px;\n  height: 160px;\n  border: 2px solid  #000;\n  border-radius: 50%;\n  background-color: #0097e3;\n  position: absolute;\n  left: 290px;\n  top: 410px;\n  -webkit-transform:rotate(20deg);\n}\n\n";
var temp;
var string2 = "";
var n = -1; // step();

var resizeTimer = null;

window.onresize = function () {
  resizeTimer = resizeTimer ? null : setTimeout(doResize, 0);
};

var run = function run() {
  n++;

  if (string[n] === "\n") {
    // 如果是回车,就不照搬
    string2 += "</br>";
  } else if (string[n] === " ") {
    string2 += "&nbsp;";
  } else {
    // 如果不是回车,就照搬
    string2 += string[n];
  }

  html.innerHTML = string2;
  style.innerHTML = string.substring(0, n + 1);
  window.scrollTo(0, 99999);
  html.scrollTo(0, 99999); // console.log(style.innerHTML);

  if (n + 1 < string.length) {
    step();
  }
};

var openStep;
var time = 10;

var step = function step() {
  openStep = setTimeout(function () {
    run();
  }, time);
};

$(".begin").on("click", function () {
  step();
  $(this).hide();
});
$(".begin").on("click", function () {
  step();
  $(this).hide();
});

function doResize() {
  if (document.body.clientWidth < 600) {
    step = null;
    location.reload();
  }
}

$(".btnPause").on("click", function () {
  window.clearInterval(openStep);
});
$(".btnPlay").on("click", function () {
  openStep = setTimeout(function () {
    run();
  }, time);
});
$(".btnSlow").on("click", function () {
  window.clearInterval(openStep);
  time = 100;
  openStep = setTimeout(function () {
    run();
  }, time);
});
$(".btnNormal").on("click", function () {
  window.clearInterval(openStep);
  time = 50;
  openStep = setTimeout(function () {
    run();
  }, time);
});
$(".btnFast").on("click", function () {
  window.clearInterval(openStep);
  time = 10;
  openStep = setTimeout(function () {
    run();
  }, time);
});
$(".btnPreview").on("click", function () {
  // $("head").remove("#style");
  window.clearInterval(openStep);
  var $style = $("<style></style>");
  $style.append("* {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    \n    ol,\n    ul {\n      list-style-type: none;\n    }\n    \n    body,\n    html {\n      width: 100%;\n      height: 100%;\n      background-color: #fc3;\n    }\n    \n    .doraemon {\n      width: 500px;\n      height: 610px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n    }\n    \n    .head {\n      width: 384px;\n      height: 358px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      position: absolute;\n      left: 63px;\n      top: 20px;\n      overflow: hidden;\n      background-color: #0097e3;\n      z-index: 3;\n    }\n    \n    .eye-wrap {\n      position: absolute;\n    }\n    \n    .eye-wrap.left {\n      left: 73px;\n      top: 35px;\n      width: 87px;\n      height: 106px;\n    }\n    \n    .eye-wrap.right {\n      left: 157px;\n      top: 42px;\n      height: 110px;\n      width: 88px;\n    }\n    \n    .eye {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      background-color: #fff;\n      border-radius: 50%;\n      border: 2px solid #000;\n      position: absolute;\n      overflow: hidden;\n      z-index: 3;\n      width: 100%;\n      height: 100%;\n      animation: eye-close 6s 5s infinite;\n    }\n    \n    @keyframes eye-close {\n    \n      0%,\n      3%,\n      6%,\n      100% {\n        height: 100%;\n      }\n    \n      1.5%,\n      4.5% {\n        height: 5%;\n      }\n    }\n    \n    .pupil {\n      position: absolute;\n      width: 25px;\n      height: 35px;\n      background-color: #000;\n      border-radius: 50%;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n    }\n    \n    .pupil:after {\n      display: block;\n      content: '';\n      width: 7px;\n      height: 14px;\n      background-color: #fff;\n      z-index: 2;\n      border-radius: 50%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n    }\n    \n    .nose {\n      width: 58px;\n      height: 58px;\n      border-radius: 50%;\n      border: 2px solid #000;\n      background-color: #e40224;\n      position: absolute;\n      left: 115px;\n      top: 123px;\n      z-index: 3;\n    }\n    \n    .mustache-list {\n      position: absolute;\n      z-index: 3;\n    }\n    \n    .mustache-list li {\n      width: 90px;\n      height: 5px;\n      background-color: #000;\n      position: relative;\n    }\n    \n    .mustache-list li:first-child {\n      -webkit-transform: rotate(15deg);\n      top: -1.75em;\n    }\n    \n    .mustache-list li:last-child {\n      -webkit-transform: rotate(-15deg);\n      top: 1.75em;\n    }\n    \n    .mustache-list.left {\n      -webkit-transform: rotate(15deg);\n      top: 165px;\n      left: -5px;\n    }\n    \n    .mustache-list.right {\n      -webkit-transform: scaleX(-1.4) rotate(0deg);\n      top: 188px;\n      right: 65px;\n    }\n    \n    .nose:after {\n      display: block;\n      content: '';\n      background-color: #fff;\n      border-radius: 50%;\n      width: 22px;\n      height: 22px;\n      position: absolute;\n      left: 11px;\n      top: 11px;\n    }\n    \n    .mouth {\n      width: 340px;\n      height: 280px;\n      background-color: #fff;\n      border-radius: 50%;\n      left: 7px;\n      top: 85px;\n      position: absolute;\n      border: 2px solid #000;\n      z-index: 1;\n      overflow: hidden;\n      -webkit-transform: rotate(5deg);\n    }\n    \n    .philtrum {\n      position: absolute;\n      min-height: 150px;\n      min-width: 50px;\n      border-radius: 50%;\n      border: 2px solid #000;\n      border-top-color: transparent;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n      left: 126px;\n      top: 60px;\n      z-index: 5;\n      /*\n      height: 115px;\n      width:2px;\n      background-color: #000;\n      left: 131px;\n      top: 85px;\n      z-index: 5;\n      -webkit-transform: rotate(-5deg);\n      */\n    }\n    \n    .lips {\n      width: 285px;\n      height: 200px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      margin-left: 5px;\n      position: relative;\n      z-index: 3;\n      -webkit-transform: rotate(-10deg);\n    }\n    \n    .lips:before {\n      display: block;\n      content: '';\n      width: 305px;\n      height: 105px;\n      background-color: #fff;\n      position: absolute;\n      left: -2px;\n    }\n    \n    .dimple {\n      width: 50px;\n      height: 50px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      position: absolute;\n      z-index: 6;\n      top: 105px;\n      left: 9px;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n      -webkit-transform: rotate(10deg);\n    }\n    \n    .necklace {\n      width: 255px;\n      height: 80px;\n      background-color: #d9011a;\n      border: 2px solid #000;\n      border-radius: 50%;\n      position: absolute;\n      left: 123px;\n      top: 305px;\n      -webkit-transform: rotate(2deg);\n      z-index: 2;\n    }\n    \n    .drop {\n      width: 55px;\n      height: 55px;\n      border: 2px solid #000;\n      background-color: #f5cc07;\n      border-radius: 50%;\n      position: absolute;\n      top: 68px;\n      left: 50px;\n      overflow: hidden;\n    }\n    \n    .drop:before {\n      display: block;\n      content: '';\n      position: absolute;\n      width: 17px;\n      height: 8px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      background-color: #665a4c;\n      left: .5em;\n      top: 25px;\n      z-index: 3;\n    }\n    \n    .drop:after {\n      display: block;\n      content: '';\n      border-radius: 50%;\n      border: 2px solid #000;\n      border-top-color: transparent;\n      border-bottom-color: transparent;\n      border-right-color: transparent;\n      min-width: 35px;\n      min-height: 35px;\n      position: absolute;\n      bottom: -4px;\n      left: 15px;\n      -webkit-transform: rotate(-17deg);\n    }\n    \n    .drop-line {\n      position: absolute;\n      left: -140%;\n      top: 10px;\n      min-width: 170px;\n      min-height: 170px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      border-left-color: transparent;\n      border-bottom-color: transparent;\n      border-right-color: transparent;\n    }\n    \n    .drop-line:nth-of-type(2) {\n      top: 18px;\n    }\n    \n    .body {\n      width: 250px;\n      height: 280px;\n    \n    \n      position: absolute;\n      left: 120px;\n      top: 255px;\n      z-index: 1;\n    \n    }\n    \n    .trunk {\n      border-radius: 50%;\n      width: 100%;\n      height: 100%;\n      position: relative;\n      background-color: #0097e3;\n      border: 2px solid #000;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n    }\n    \n    .stomach {\n      width: 175px;\n      height: 145px;\n      position: absolute;\n      background-color: #fff;\n      border-radius: 50%;\n      border: 2px solid #000;\n      left: 10px;\n      top: 95px;\n      -webkit-transform: rotate(15deg);\n      overflow: hidden;\n      z-index: 1;\n    }\n    \n    .pocket {\n      position: absolute;\n      width: 90%;\n      height: 90%;\n      border: 2px solid #000;\n      border-radius: 50%;\n      top: .5em;\n      left: .5em;\n    }\n    \n    .pocket:after {\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: -10px;\n      border: 2px solid #000;\n      display: inline-block;\n      min-width: 169px;\n      -webkit-transform: rotate(-10deg);\n      min-height: 65px;\n      padding: 0.5em;\n      border-radius: 50%;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      border-left-color: transparent;\n      background-color: #fff;\n    }\n    \n    .arm {\n      background-color: #0097e3;\n    }\n    \n    .hand {\n      display: block;\n      content: '';\n      width: 70px;\n      height: 70px;\n      background-color: #fff;\n      border-radius: 50%;\n      position: absolute;\n      z-index: -1;\n      border: 2px solid #000;\n      top: 175px;\n      left: 270px;\n    }\n    \n    .arm.right:before {\n      display: block;\n      content: '';\n      width: 50px;\n      height: 55px;\n      background-color: #0097e3;\n      position: absolute;\n      top: 0;\n      left: -10px;\n      z-index: 3;\n      -webkit-transform: rotate(30deg);\n    }\n    \n    .arm.right:after {\n      display: block;\n      content: '';\n      width: 40px;\n      height: 95px;\n      background-color: #0097e3;\n      border-radius: 50%;\n      border: 2px solid #000;\n      border-top-color: transparent;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n      -webkit-transform: rotate(-7deg);\n      position: absolute;\n      top: 6px;\n      left: -12px;\n    }\n    \n    .arm.right {\n      position: absolute;\n      width: 70px;\n      height: 120px;\n      border-radius: 40%;\n      right: -55px;\n      border: 2px solid #000;\n      background-color: #0097e3;\n      top: 90px;\n      -webkit-transform: rotate(-30deg);\n      z-index: 1;\n    }\n    \n    .arm.left {\n      z-index: -1;\n      position: absolute;\n      border-radius: 50%;\n      width: 45px;\n      height: 65px;\n      top: 85px;\n      left: -15px;\n      border: 2px solid #000;\n      -webkit-transform: rotate(15deg);\n    }\n    \n    .trunk:before {\n      display: block;\n      content: '';\n      width: 20px;\n      height: 20px;\n      background-color: #0097e3;\n      position: absolute;\n      top: 85px;\n      left: 0;\n      z-index: 3;\n    }\n    \n    .trunk:after {\n      display: block;\n      content: '';\n      width: 110px;\n      height: 145px;\n      background-color: #0097e3;\n      position: absolute;\n      top: 110px;\n      left: 1px;\n      -webkit-transform: rotate(15deg);\n    }\n    \n    .footer {}\n    \n    .leg.left {\n      width: 120px;\n      height: 110px;\n      background-color: #0097e3;\n      position: absolute;\n      border: 2px solid #000;\n      left: 95px;\n      top: 430px;\n    }\n    \n    .foot {\n      width: 105px;\n      height: 160px;\n      background-color: #fff;\n      position: absolute;\n      border: 2px solid #000;\n      border-radius: 50%;\n      z-index: 10;\n    }\n    \n    .leg.left .foot {\n      -webkit-transform: rotate(-30deg);\n      left: -4em;\n      top: -1.5em;\n    }\n    \n    .leg.right+.foot {\n      -webkit-transform: rotate(-40deg);\n      left: 206px;\n      top: 450px;\n      width: 125px;\n      height: 150px;\n    }\n    \n    .leg.left:before {\n      display: block;\n      content: '';\n      min-width: 45px;\n      min-height: 45px;\n      border-radius: 50%;\n      border: 2px solid #000;\n      position: absolute;\n      left: -10px;\n      top: -10px;\n      background-color: #0097e3;\n      border-left-color: transparent;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n    }\n    \n    .leg.left:after {\n      display: block;\n      content: '';\n      min-width: 140px;\n      min-height: 140px;\n      border-radius: 50%;\n      border: 2px solid #000;\n      background-color: #fc3;\n      position: absolute;\n      top: 98px;\n      left: 8px;\n      border-left-color: transparent;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n      z-index: 3;\n    }\n    \n    .right-padding {\n      position: absolute;\n      z-index: 8;\n      top: 455px;\n      left: 288px;\n    }\n    \n    .right-padding:before {\n      display: block;\n      content: '';\n      width: 30px;\n      height: 30px;\n      background-color: #0097e3;\n      border: 2px solid #000;\n      border-left-color: transparent;\n      border-right-color: transparent;\n      border-bottom-color: transparent;\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: -1;\n      -webkit-transform: rotate(-15deg);\n    }\n    \n    .leg.right {\n      width: 75px;\n      height: 160px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      background-color: #0097e3;\n      position: absolute;\n      left: 290px;\n      top: 410px;\n      -webkit-transform: rotate(20deg);\n    }");
  $("#html").empty().append($style);
});
},{}],"C:/Users/彭梦豪/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58583" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/彭梦豪/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map