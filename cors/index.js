const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const img = new Image();
img.crossOrigin = 'anonymous';
img.onload = function load() {
  context.drawImage(this, 0, 0);
  context.getImageData(0, 0, this.width, this.height);
};
img.src = 'https://avatars3.githubusercontent.com/u/496048?s=120&v=4';
document.body.appendChild(canvas);
