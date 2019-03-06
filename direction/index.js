let checkPlatform = function () {
    let  message = {code:0,msg:"android"};
    if (/android/i.test(navigator.userAgent)) {
    }
    else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      message.code = 1;
      message.msg = "ios";
    }else{
      message.code = 2;
      message.msg = "unknown";
    }
    return message;
  };
  let nativeDirection = function (callback) {
    let platform = checkPlatform().code;
    //Android IOS
    let event = platform === 0 ? 'deviceorientationabsolute':(platform === 1 ? 'deviceorientation': null);
    if(event && 'on'+event in window){
      setTimeout(function () {
          window.addEventListener(event,function (data) {
            //IOS 和 Android
            let direction = Number(data.webkitCompassHeading);
            console.log(direction)
            callback(direction);
          } , false);
      },200)
    }else{
      console.log("您的浏览器不支持(DeviceOrientation)");
    }
  };
  nativeDirection(function(data){
      document.getElementById('div').innerHTML = data
  })