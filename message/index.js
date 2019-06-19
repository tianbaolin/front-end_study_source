// window.localStorage.setItem('name','tian baolin')
// window.onload = function (event) {
// console.log('window :', event);
// }
// let iframe = window.open("http://localhost:5500/message/index2.html", "index2");
// console.log("iframe :", iframe);
// let iframe = document.querySelector("iframe");
// iframe.name = '123'
// // console.log('iframe', iframe)
// iframe.onload = function(event) {
// iframe.src = "http://127.0.0.1:5500/message/index2.html#aaa";
// iframe.src += "#aaa";
// let iwindow = iframe.contentWindow;
// iframe.window.postMessage("hello 2", "*");
// };
// window.onmessage = function(event) {
//   console.log("event1 :", event.data);
//   let source = event.source;
//   setTimeout(() => {
//     source.postMessage("hello 2", "*");
//   }, 1000);
// };
window.onhashchange = function (event) {
  console.log('event', event)
}
window.onload = event => {
  console.log("readyState8", document.readyState);
  console.log("window9", event);
  console.log("readyState10", document.readyState);
};
console.log("readyState1", document.readyState);
document.addEventListener("DOMContentLoaded", event => {
  console.log("readyState5", document.readyState);
  console.log("doc6", event);
  console.log("readyState7", document.readyState);
});
document.addEventListener("readystatechange", event => {
  console.log("readyState2", document.readyState);
  console.log("readystatechange3 :", event);
  console.log("readyState4", document.readyState);
});
console.log('over', 'over')
// let a = 0
// do{
//   fetch("https://pingan.smart-city.site/nantong/jsapi/demo", { mode: "cors" })
//   .then(res => {
//     console.log("res", res);
//     return res.json();
//     // console.log("res", res.json());
//   }).then(res=>{
//     console.log('res', res)
//   })
//   .catch(err => {
//     console.log("err", err);
//   });
//   a++
// }while (a<1000)
