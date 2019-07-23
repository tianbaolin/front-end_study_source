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
    const seatsSerialNumberObj = {};
    let count = 0;
    // 每个区域都多少行座位
    const rows = (this.lastSeatNumber - this.firstSeatsNumber) / this.tolerance + 1;
    this.areas.map((item) => {
      for (let i = 1; i <= rows; i += 1) {
        const colums = this.firstSeatsNumber + (i - 1) * this.tolerance;
        for (let j = 1; j <= colums; j += 1) {
          // 每个座位编号count与 [area,row,colum] 对应起来
          const serialNumber = { [count]: [item, i, j] };
          count += 1;
          Object.assign(seatsSerialNumberObj, serialNumber);
        }
      }
      this.seatsSerialNumberObj = seatsSerialNumberObj;
      return true;
    });
    // 单个区域数量
    // const singleAreaSeatNumber = (this.firstSeatsNumber + this.lastSeatNumber) * rows / 2;
    // const totolSeats = singleAreaSeatNumber * this.areas.length;
    // console.log('object', totolSeats);
    // return totolSeats;
  },
};
const bookSystem = {
  // 所有座位编号数组
  allSeats: [],
  // 可预定座位编号数组
  availableSeats: [],
  // 已预定座位编号数组
  bookedSeats: [],
  // 在[0，range) 之间随机获取size个整数
  getRandomNumberArr(range, size) {
    const randomNumberArray = [];
    const randomSerialArray = [...Array(range).keys()];
    for (let i = 1; i <= size; i += 1) {
      const randomNumber = Math.floor(Math.random() * randomSerialArray.length);
      randomNumberArray.push(randomSerialArray[randomNumber]);
      randomSerialArray.splice(randomNumber, 1);
    }
    return randomNumberArray;
  },
  // 初始化
  init() {
    // 初始化座位信息
    seatsObject.initseatsSerialNumberObj();
    const { seatsSerialNumberObj } = seatsObject;
    const allSeats = Object.keys(seatsSerialNumberObj);
    this.allSeats = allSeats;
    this.availableSeats = allSeats;
    this.bookedSeats = [];
  },
  bookSeats(number) {
    if (number < 1 || number > 5) {
      return console.log('数量只允许1～5');
    }
    if (this.availableSeats.length < number) {
      return console.log('剩余数量不足');
    }
    // 获取随机数
    const randomNumberArr = this.getRandomNumberArr(this.availableSeats.length, number);
    // 在可预定的座位中获取随机座位编号
    const randomSeatNumberArr = randomNumberArr.map(item => this.availableSeats[item]);
    // 该座位已经被预订，更新已预订座位
    this.bookedSeats.push(...randomSeatNumberArr);
    // 该座位不可被其他人预订，更新可预定座位
    this.availableSeats = this.availableSeats.filter(item => randomSeatNumberArr.indexOf(item) === -1);
    // 获取该座位位置信息
    const bookSeatsResult = randomSeatNumberArr.map(item => ({
      [item]: seatsObject.seatsSerialNumberObj[item],
    }));
    return bookSeatsResult;
  },
};
bookSystem.init();
console.log('object', bookSystem.bookSeats(5));
console.log('object', bookSystem.bookSeats(3));
console.log('object', bookSystem.bookSeats(2));
console.log('bookedSeats', bookSystem.bookedSeats);
