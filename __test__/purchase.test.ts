import { Customer } from 'src/entity/customer';
import { Product } from 'src/entity/product';
import { Store } from 'src/entity/store';

describe('classical school of testing - Purchase', () => {
  test('purchase succeeds when enough inventory', () => {
    // arrange
    const store: Store = new Store();
    store.addInventory(Product.shampoo, 10);
    const customer: Customer = new Customer();

    // act
    const success: boolean = customer.purchase(store, Product.shampoo, 5);

    // assert
    expect(success).toBe(true);
    expect(store.getInventory(Product.shampoo)).toBe(5);
  });

  test('purchase fails when not enough inventory', () => {
    // arrange
    const store: Store = new Store();
    store.addInventory(Product.shampoo, 10);
    const customer: Customer = new Customer();

    // act
    const success: boolean = customer.purchase(store, Product.shampoo, 15);

    // assert
    expect(success).toBe(false);
    expect(store.getInventory(Product.shampoo)).toBe(10);
  });
});
