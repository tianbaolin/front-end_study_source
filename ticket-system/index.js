// 在node环境下执行即可，可在命令行工具中交互

const readline = require('readline');

// 座位对象
const seatsObject = {
  // 区域划分
  areas: ['A', 'B', 'C', 'D'],
  // 第一排数量
  firstSeatsNumber: 50,
  // 最后一排数量
  lastSeatNumber: 100,
  // 公差
  tolerance: 2,
  // 座位编号对象 编号从0-7799 每个编号对应 有 区域，行，列数组 [area,row,colum]来精确定位
  seatsSerialNumberObj: null,
  // 初始化座位编号对象
  initseatsSerialNumberObj() {
    // 临时座位编号对象
    const seatsSerialNumberTempObj = {};
    let count = 0;
    // 每个区域都多少行座位
    const rows = (this.lastSeatNumber - this.firstSeatsNumber) / this.tolerance + 1;
    this.areas.map((item) => {
      for (let i = 1; i <= rows; i += 1) {
        // 每一行座位数，列数
        const colums = this.firstSeatsNumber + (i - 1) * this.tolerance;
        for (let j = 1; j <= colums; j += 1) {
          // 每个座位编号count与 [area,row,colum] 对应起来
          const serialNumber = { [count]: [item, i, j] };
          count += 1;
          Object.assign(seatsSerialNumberTempObj, serialNumber);
        }
      }
      this.seatsSerialNumberObj = seatsSerialNumberTempObj;
      return true;
    });
  },
};


// 订票系统
const bookSystem = {
  // 所有座位编号数组
  allSeats: [],
  // 可预定座位编号数组
  availableSeats: [],
  // 已预定座位编号数组
  bookedSeats: [],
  // 票价
  ticketPrice: 0,
  // 数据说明
  tips: null,
  // 购买数量限制
  ticksNumberLimit: [1, 5],
  // 在[0，range) 之间随机获取size个整数
  getRandomNumberArr(range, size) {
    // 随机数字存储器
    const randomNumberArray = [];
    // 生成 0～range-1 数字组成的数组，作为初始的种子数组
    const randomSerialArray = [...Array(range).keys()];
    for (let i = 1; i <= size; i += 1) {
      // 生成一个区间在[0,randomSerialArray.length)随机整数数字
      const randomNumber = Math.floor(Math.random() * randomSerialArray.length);
      // 更新随机数字存储器
      randomNumberArray.push(randomSerialArray[randomNumber]);
      // 更新种子数组
      randomSerialArray.splice(randomNumber, 1);
    }
    return randomNumberArray;
  },
  // 分配座位
  distributeSeats(number) {
    // 获取随机数
    const randomNumberArr = this.getRandomNumberArr(this.availableSeats.length, number);
    // 在可预定的座位中获取随机座位编号
    const randomSeatNumberArr = randomNumberArr.map(item => this.availableSeats[item]);
    // 该座位已经被预订，更新已预订座位
    this.bookedSeats.push(...randomSeatNumberArr);
    // 该座位不可被其他人预订，更新可预定座位
    randomNumberArr.map((item) => {
      // 已经预订的座位编号置为null
      this.availableSeats[item] = null;
      return item;
    });
    // 过滤掉座位编号为null的座位
    this.availableSeats = this.availableSeats.filter(item => item !== null);
    // 获取该座位详尽位置信息
    const bookSeatsResult = randomSeatNumberArr.map(item => ({
      [item]: seatsObject.seatsSerialNumberObj[item],
    }));
    return bookSeatsResult;
  },
  // 购票前预处理
  bookTicketsPreProcess(number) {
    console.log('number :', number);
    if (number % 1 !== 0) {
      console.log('数量只允许整数');
      return false;
    }
    if (number < this.ticksNumberLimit[0] || number > this.ticksNumberLimit[1]) {
      console.log('数量只允许1～5');
      return false;
    }
    // 座位数量不够
    if (this.availableSeats.length < number) {
      console.log('剩余数量不足');
      return false;
    }
    return true;
  },
  // 购票
  bookTickets(number) {
    const num = Number(number);
    const preProcessResult = this.bookTicketsPreProcess(num);
    if (preProcessResult === false) {
      return '预订失败';
    }
    const bookSeatsRes = this.distributeSeats(num);
    const totolPrice = num * this.ticketPrice;
    return {
      totolPrice,
      tickets: JSON.stringify(bookSeatsRes),
      tips: this.tips,
    };
  },
  // 初始化
  init() {
    // 初始化座位信息
    seatsObject.initseatsSerialNumberObj();
    const { seatsSerialNumberObj } = seatsObject;
    const allSeats = Object.keys(seatsSerialNumberObj);
    // 座位编号初始化
    this.allSeats = allSeats;
    // 可预定座位编号初始化
    this.availableSeats = allSeats;
    // 已预订座位编号初始化
    this.bookedSeats = [];
    //  一张票500元
    this.ticketPrice = 500;
    this.ticksNumberLimit = [1, 5];
    this.tips = '门票以 {序号:[区域，排，列]}的方式给出。序号从0开始';
  },
};

// 初始化系统
bookSystem.init();
// 订票

// 创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 交互式输入
const question = function question() {
  rl.question('请输入购票数量:', (answer) => {
    const bookRes = bookSystem.bookTickets(answer);
    console.log('预订结果', bookRes);
    question();
  });
};
question();
