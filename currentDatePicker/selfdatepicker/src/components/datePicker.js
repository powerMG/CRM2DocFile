class DatePickerFactory {
  constructor(options) {
    this.maxDay = options?.maxDay || 30;
    this.dataInfo = {};
  }
  initData() {
    let _nowDate = new Date();
    let _firstKey = this.getDate(_nowDate);
    this.dataInfo[_firstKey] = 0;
    for (let i = 1; i <= this.maxDay; i++) {
      let _addNum = i * 24 * 60 * 60 * 1000;
      let _nextDate = new Date(_nowDate.getTime() + _addNum);
      let _nextKey = this.getDate(_nextDate);
      this.dataInfo[_nextKey] = 0;
    }
    console.log(this.dataInfo);
  }
  assignDate(dateInfo) {
    return Object.assign(this.dataInfo, dateInfo);
  }
  getDate(_nowDate) {
    let _nowYears = _nowDate.getFullYear();
    let _nowMonth = _nowDate.getMonth() + 1;
    let _nowDay = _nowDate.getDate();
    return `${_nowYears}/${_nowMonth}/${_nowDay}`;
  }
}
export default new DatePickerFactory();
