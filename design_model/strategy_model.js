const validMethods = {
  isTelephone: (() => {
    const regExp = /^1[0-9]{9}[0-9]$/;
    return (value, info) => (regExp.test(Number(value)) ? true : info());
  })(),

  noNull(value, info) {
    return value ? true : info();
  },

  maxLen(value, info, maxLength) {
    return value.length < maxLength ? true : info();
  },
};

const validtor = {
  // 缓存校验规则函数
  cache: [],
  addValidFun(method, value, log, param) {
    // 失败处理函数
    const info = () => {
      console.log('log :', log);
    };
    this.cache.push(() => validMethods[method](value, info, param));
  },
  start() {
    return this.cache.every(item => item());
  },
};

validtor.addValidFun('noNull', 'tbl', '姓名不能为空');
validtor.addValidFun('maxLen', 'tbl467', '姓名不能超过5个字符', 5);
validtor.addValidFun('isTelephone', '17688784322', '手机号码格式不对');
console.log('校验是否通过', validtor.start());
