import dayjs from 'dayjs';
import { Delivery } from './delivery';

export class DeliveryService {
  public isDeliveryValid(delivery: Delivery): boolean {
    const now = dayjs();
    const expiration = delivery.getDate();

    if (expiration.isAfter(now)) {
      return true;
    }
    return false;
  }
}
