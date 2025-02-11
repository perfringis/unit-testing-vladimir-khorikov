import dayjs from 'dayjs';
import { Delivery } from 'src/entity/delivery';
import { DeliveryService } from 'src/entity/delivery.service';

describe('DeliveryTests', () => {
  test.each([
    [-1, false],
    [0, false],
    [1, false],
    [2, true],
  ])('can detect an invalid delivery date', (daysFromNow, expected) => {
    const spt: DeliveryService = new DeliveryService();
    const pastDate: dayjs.Dayjs = dayjs().add(daysFromNow, 'day');
    const delivery: Delivery = new Delivery(pastDate);

    const isValid: boolean = spt.isDeliveryValid(delivery);

    expect(isValid).toBe(expected);
  });
});
