import { Product } from './product';
import { Store } from './store';

export class Customer {
  public purchase(store: Store, product: Product, quantity: number): boolean {
    if (store.hasEnoughInventory(product, quantity)) {
      return true;
    }
    return false;
  }
}
