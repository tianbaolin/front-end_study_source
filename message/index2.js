// window.addEventListener('storage',(event)=>{
//   console.log('event', event)
// })
// window.onhashchange = function() {
//   console.log(window.location.hash);
// };
// console.log("object", window.parent.location.href);
// let href = window.parent.location.href;
// window.parent.location.href = `${href}#123`
// window.parent.src += "#aaa";
// window.onchange = function (event) {
//   console.log('event', event)
// }
window.onmessage = event => {
  console.log("event2", event.data);
  // console.log("event2", event);
  let source = event.source;
  setTimeout(() => {
    source.postMessage("hello 1", "*");
  }, 1000);
};
