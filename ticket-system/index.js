/**
 * 1.座位数量
 * 2.
*/
const seatsObject = {
  areas: ['A', 'B', 'C', 'D'],
  firstSeatsNumber: 50,
  lastSeatNumber: 100,
  // 公差
  tolerance: 2,
  // 座位编号对象 7800
  seatsSerialNumberObj: null,
  // 初始化座位编号对象
  initseatsSerialNumberObj() {
    const seatsSerialNumberObj = {};
    let count = 0;
    const rows = (this.lastSeatNumber - this.firstSeatsNumber) / this.tolerance + 1;
    this.areas.map((item) => {
      for (let i = 1; i <= rows; i += 1) {
        const colums = this.firstSeatsNumber + (i - 1) * this.tolerance;
        for (let j = 1; j <= colums; j += 1) {
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
  allSeats: [],
  availableSeats: [],
  bookedSeats: [],
  getRandomNumber(range) {
    return Math.ceil(Math.random() * range) - 1;
  },
  initSeats() {
    const { seatsSerialNumberObj } = seatsObject;
    const allSeats = Object.keys(seatsSerialNumberObj);
    this.allSeats = allSeats;
    this.availableSeats = allSeats;
    this.bookedSeats = [];
    console.log('allSeats :', allSeats);
  },
  bookSeats(number) {
    if (number < 1 || number > 5) {
      return console.log('数量只允许1～5');
    }
    if (this.availableSeats.length < number) {
      return console.log('剩余数量不足');
    }
    const bookSeatsResult = {};
    for (let i = 1; i <= number; i += 1) {
      // 获取随机数
      const randomNumber = this.getRandomNumber(this.availableSeats.length);
      // 在可预定的座位中获取随机座位编号
      const randomSeatNumber = this.availableSeats[randomNumber];
      // 该座位已经被预订，更新已预订座位
      this.bookedSeats.push(randomSeatNumber);
      // 该座位不可被其他人预订，更新可预定座位
      this.availableSeats.splice(randomNumber, 1);
      // 获取该座位位置信息
      Object.assign(bookSeatsResult,
        {
          [randomSeatNumber]: seatsObject.seatsSerialNumberObj[randomSeatNumber],
        });
    }
    return bookSeatsResult;
  },
};
// seatsObject.initseatsSerialNumberObj();
seatsObject.initseatsSerialNumberObj();
bookSystem.initSeats();
console.log('object', bookSystem.bookSeats(1));
console.log('object', bookSystem.bookSeats(1));
console.log('object', bookSystem.bookSeats(1));
