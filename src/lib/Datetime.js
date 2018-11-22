export default class Datetime {
  constructor(date) {
    this.date = date ? date : new Date();

    this.monthNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];

    this.weekNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  }

  hours() {
    return this.formatUnitOfTime(this.date.getHours());
  }

  minutes() {
    return this.formatUnitOfTime(this.date.getMinutes());
  }

  seconds() {
    return this.formatUnitOfTime(this.date.getSeconds());
  }

  dayOfWeek() {
    return this.weekNames[this.date.getDay()];
  }

  dayOfMonth() {
    return this.formatUnitOfTime(this.date.getUTCDate());
  }

  month() {
    return this.monthNames[this.date.getMonth()];
  }

  year() {
    return `${this.date.getFullYear()}`;
  }

  formatUnitOfTime(unitOfTime) {
    return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
  }

  static toDateString(date) {
    var datetime = new Datetime(date);

    return `${datetime.dayOfWeek()}. ${datetime.dayOfMonth()} ${datetime.month()} ${datetime.year()}`;
  }

  static toTimeString(date) {
    var datetime = new Datetime(date);

    return `${datetime.hours()}:${datetime.minutes()}:${datetime.seconds()}`;
  }
}
