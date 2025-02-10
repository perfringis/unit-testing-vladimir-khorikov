import { Customer } from 'src/entity/customer';
import { Product } from 'src/entity/product';
import { Store } from 'src/entity/store';

describe('Move code to init function', () => {
  let store: Store;
  let spt: Customer;

  beforeEach(() => {
    store = new Store();
    store.addInventory(Product.shampoo, 10);
    spt = new Customer();
  });

  test('purchase succeeds when enough inventory', () => {
    // arrange

    // act
    const success: boolean = spt.purchase(store, Product.shampoo, 5);

    // assert
    expect(success).toBe(true);
    expect(store.getInventory(Product.shampoo)).toBe(5);
  });

  test('purchase fails when not enough inventory', () => {
    // arrange

    // act
    const success: boolean = spt.purchase(store, Product.shampoo, 15);

    // assert
    expect(success).toBe(false);
    expect(store.getInventory(Product.shampoo)).toBe(10);
  });
});
