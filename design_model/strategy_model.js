const validMethods = {
  isTelephone: (() => {
    const regExp = /^1[0-9]{9}[0-9]$/;
    return (value, log) => regExp.test(Number(value));
  })(),

  noNull(value, log) {
    return Boolean(value);
  },

  maxLen(value, log, maxLength) {
    console.log('object', value, log, maxLength);
    return value.length < maxLength;
  },
};

const validtor = {
  cache: [],
  addValidFun(method, value, log, param) {
    this.cache.push(() => validMethods[method](value, log, param));
  },
  start() {
    return this.cache.map(item => item());
  },
};

validtor.addValidFun('noNull', 'tbl', '姓名不能为空');
validtor.addValidFun('maxLen', 'tbl', '姓名不能超过5个字符', 5);
validtor.addValidFun('isTelephone', '17688784322', '手机号码格式不对', 5);
// function
console.log('object', validtor.start());
