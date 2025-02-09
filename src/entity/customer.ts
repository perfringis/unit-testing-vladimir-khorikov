import { Product } from './product';
import { IStore } from './store';

export class Customer {
  public purchase(store: IStore, product: Product, quantity: number): boolean {
    if (store.hasEnoughInventory(product, quantity)) {
      store.removeInventory(product, quantity);
      return true;
    }
    return false;
  }
}
