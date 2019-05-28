// window.localStorage.setItem('name','tian baolin')
// window.onload = function (event) {
// console.log('window :', event);
// }
let iframe = window.open("http://localhost:5500/message/index2.html", "index2");
console.log("iframe :", iframe);
// let iframe = document.querySelector("iframe");
// iframe.name = '123'
// // console.log('iframe', iframe)
// iframe.onload = function(event) {
// iframe.src = "http://127.0.0.1:5500/message/index2.html#aaa";
// iframe.src += "#aaa";
// let iwindow = iframe.contentWindow;
iframe.window.postMessage("hello 2", "*");
// };
window.onmessage = function(event) {
  console.log("event1 :", event.data);
  let source = event.source;
  setTimeout(() => {
    source.postMessage("hello 2", "*");
  }, 1000);
};
// window.onhashchange = function (event) {
//   console.log('event', event)
// }
