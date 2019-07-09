// window.setInterval(()=>{
//     console.log('object', Date.now())
// },1000)
const notificationState = window.Notification.permission;
console.log('object', notificationState);
if (notificationState !== 'granted') {
  window.Notification.requestPermission((res) => {
    console.log('res', res);
  });
} else {
  const notify = new Notification('消息测试', {
    body: '清明时节雨纷纷',
    icon: 'https://smt-web-stg.pingan.com.cn:10443/nantong/images/logo/logo-new.png',
  });
  notify.onclick = function onclick(res) {
    console.log('onclick', res);
    window.open('https://www.baidu.com');
  };
  notify.onshow = function onshow(res) {
    console.log('onshow', res);
  };
  notify.onclose = function onclose(res) {
    console.log('onclose', res);
  };
}
// let href = 'https://smt-web-stg.pingan.com.cn:10443/nantong/images/logo/logo-new.png'
// let image = new Image()
// image.crossOrigin = "Anonymous";
// image.onload = (res)=>{
//     console.log('Imageonload', res)
//     console.log('image :', image);
//     let canvas = document.createElement('canvas')
//     canvas.width = 300;
//     canvas.height = 300;
//     document.body.appendChild(canvas)
//     let context = canvas.getContext('2d')
//     console.log('context', context)
//     context.drawImage(image,0,0);
//     console.log('canvas', canvas)
//     let url = canvas.toDataURL('image/png')
//     console.log('url', url)
// }
// image.src = href
// let a = document.createElement('a')
// a.href = './logo-new.png'
// a.download = 'hello'
// a.click()
