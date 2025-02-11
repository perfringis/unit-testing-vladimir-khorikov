import dayjs from 'dayjs';
import { Delivery } from 'src/entity/delivery';
import { DeliveryService } from 'src/entity/delivery.service';

describe('DeliveryTests', () => {
  // In opposition to C# and xUnit test lib.
  // In node.js and Jest it is possible to generate test data and parametrized them for the test.
  test.each([
    [dayjs().add(-1, 'day'), false],
    [dayjs().add(0, 'day'), false],
    [dayjs().add(1, 'day'), false],
    [dayjs().add(2, 'day').add(1, 'minute'), true],
  ])('can detect an invalid delivery date', (daysFromNow, expected) => {
    const spt: DeliveryService = new DeliveryService();
    const delivery: Delivery = new Delivery(daysFromNow);

    const isValid: boolean = spt.isDeliveryValid(delivery);

    expect(isValid).toBe(expected);
  });
});
