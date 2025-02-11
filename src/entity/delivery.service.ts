import dayjs from 'dayjs';
import { Delivery } from './delivery';

export class DeliveryService {
  public isDeliveryValid(delivery: Delivery): boolean {
    const now = dayjs().add(2, 'day');
    const expiration = delivery.getDate();

    if (expiration.isBefore(now)) {
      return false;
    }
    return true;
  }
}
