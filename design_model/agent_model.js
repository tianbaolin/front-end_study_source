// 代理模式
const setImage = (function setImage() {
  const img = document.createElement('img');
  img.setAttribute('width', '100%');
  document.body.append(img);
  return (src) => {
    img.src = src;
  };
}());

const proxy = (function proxy() {
  const agentImg = new Image();
  agentImg.onload = function onload() {
    setImage(this.src);
  };
  return (src) => {
    setImage('./loading.svg');
    agentImg.src = src;
  };
}());
proxy('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564257861681&di=c58b7d690ea881f8bb5cbd64ac1d4071&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FWEXNzi4C88ES0HvQ45n11w%3D%3D%2F1059471812357010242.jpg');
