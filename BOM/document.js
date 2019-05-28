// const a = {
//   b: function name(params) {
//     console.log("this", this);
//     console.log("window", window);
//     console.log("self", self);
//     console.log("globalThis", globalThis);
//   }
// };
// a.b();
// console.log("window :", window);
// console.log('Window :', Window);
// console.log("window.Window", window.Window);
// console.log("object", window.__proto__);
// console.assert(window instanceof Window, true);
// console.assert(window instanceof EventTarget, true);
// console.assert(window instanceof Object, "object");
// window.onbeforeunload = function(params) {
//   alert("hello");
// };
// window.onbeforeunload = function(e) {
//   // e = e || window.event;
//   console.log("e :", e);
//   // 兼容IE8和Firefox 4之前的版本
//   // if (e) {
//   //   e.returnValue = "关闭提示";
//   // }

//   // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
//   return "关闭提示";
// };
// window.onpagehide = function(e) {
//   console.log("e", e);
// };
// let window2 = window.open("http://127.0.0.1:5500/BOM/index2.html");
// console.log("window2 :", window2);
// setInterval(() => {
//   // console.log("window2", window2.parent);
//   // console.log("closed", window2.closed);
// }, 1000);
// window.resizeTo(1000,800);
// console.log('object :', console);
// window.onload = event => {
//   console.log("window", event);
// };
// document.onreadystatechange = function(event) {
//   console.log("onreadystatechange :", document.readyState);
// };
// document.body.onload = function(event) {
//   console.log("body onload", event);
// };

// document.onvisibilitychange = function(event) {
//   console.log("Visibility of page has changed!", document.visibilityState);
//   if( document.visibilityState ==='hidden'){
//     setInterval(() => {
//       console.log('object :', 'hello');
//     }, 1000);
//   }
// };
// document.body.onblur = function(event) {
//   console.log("event :", event);
// };
let app = document.getElementsByTagName("div");
console.log("app", app);
let [attribute] = app[0].attributes;
console.log("app", app[0].attributes);
// let a = document.createDocumentFragment("div");
// console.log("a", [a]);
setTimeout(() => {
  app[0].remove();
}, 2000);
