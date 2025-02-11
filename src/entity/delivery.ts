import dayjs from 'dayjs';

export class Delivery {
  private date: dayjs.Dayjs;

  constructor(date: dayjs.Dayjs) {
    this.date = date;
  }

  getDate(): dayjs.Dayjs {
    return this.date;
  }
}
