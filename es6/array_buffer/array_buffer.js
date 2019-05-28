const ele = document.getElementById("input");
const img = document.getElementsByTagName("img")[0];
console.log("ele", ele);
ele.addEventListener("change", ele => {
  const file = ele.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("loadend", res => {
    console.log("res", res.currentTarget.result);
    const dataUrl = res.currentTarget.result;
    console.log("typeof ", dataUrl);
    // img.src = dataUrl;
  });
  reader.readAsArrayBuffer(file);
  // reader.readAsDataURL(file);
});
// const buffer = new ArrayBuffer(16);
// // const x1 = new Uint8Array(buffer);
// const x1 = new Uint8Array(buffer);
// x1.forEach((element,index) => {
//   x1[index] = index
// });
// // for (const item of x1) {
// //   console.log('item', item)
// //   // x1[item] = index
// // }
// console.log("x1", x1);
// const x2 = new Uint16Array(buffer)
// console.log('x2 :', x2);
// const str = '我'
// const buffer= new ArrayBuffer(2)
// const x1 = new Uint16Array(buffer)
// x1[0] = str.charCodeAt(0)
// console.log('x1 :', x1);
// console.log('object', String.fromCharCode(x1[0]))
const buffer = new ArrayBuffer(2);
const x1 = new Uint8Array(buffer);
x1[0] = 0x0;
x1[1] = 0x1;
console.log("x1 :", x1);
const x2 = new DataView(buffer);
console.log("x2", x2.getInt16(0));
console.log("x2", x2.getInt16(0,true));
