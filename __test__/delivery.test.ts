import dayjs from 'dayjs';
import { Delivery } from 'src/entity/delivery';
import { DeliveryService } from 'src/entity/delivery.service';

describe('DeliveryTests', () => {
  // delivery with invalid date should be considered invalid <- better test name
  // delivery with past date should be considered invalid <- even better test name
  // delivery with past date should be invalid <- better but has anti-pattern "should"
  // delivery with past date is invalid <- best test name
  test('isDeliveryValid_InvalidDate_ReturnsFalse', () => {
    const spt: DeliveryService = new DeliveryService();
    const pastDate: dayjs.Dayjs = dayjs().add(-1, 'day');
    const delivery: Delivery = new Delivery(pastDate);

    const isValid: boolean = spt.isDeliveryValid(delivery);

    expect(isValid).toBe(false);
  });
});
