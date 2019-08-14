// const canvas = document.createElement('canvas');
// const context = canvas.getContext('2d');

// const img = new Image();
// img.crossOrigin = 'anonymous';
// img.onload = function load() {
//   context.drawImage(this, 0, 0);
//   context.getImageData(0, 0, this.width, this.height);
// };
// img.src = 'https://avatars3.githubusercontent.com/u/496048?s=120&v=4';
// document.body.appendChild(canvas);
const img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJ22BlP9YqLQtH8zNmwAwZxUl8WO7IqIhwHhJeZSNGE6jXDXi';
img.width = 300;
img.height = 200;
//
img.setAttribute('crossOrigin', 'Anonymous');
function getBase64Image(img) {
  // Create an empty canvas element
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  // Copy the image contents to the canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  // 获取图片类型数组数据（二进制）
  // const data = ctx.getImageData(0, 0, img.width, img.height);
  // console.log('data', data);

  // document.body.appendChild(canvas);
  // const dataURL = canvas.toDataURL('image/png');
  // const data = ctx.getImageData(0, 0, img.width, img.height);
  const blob = canvas.toBlob((blobObj) => {
    const imgUrl = URL.createObjectURL(blobObj);
    console.log('imgUrl :', imgUrl);
    downloadImg(imgUrl);
    const dom = document.getElementById('img');
    dom.onload = function name() {
      console.log('load :', 'load');
      URL.revokeObjectURL(blobObj);
    };
    dom.src = imgUrl;
  });
  // const url = URL.createObjectURL(data);
  // console.log('url :', url);
  // return dataURL;
}
img.onload = function load() {
  const image = getBase64Image(img);
  // console.log('image', image);
  // document.getElementById('img').src = image;
};

function downloadImg(dataUrl) {
  const aLink = document.createElement('a');
  aLink.download = 'fileName.png'; // 文件名后缀需要和dataurl表示的相同，否则可能乱码
  aLink.href = dataUrl;
  aLink.click();
}
