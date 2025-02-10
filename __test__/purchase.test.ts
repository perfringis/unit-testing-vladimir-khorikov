import { Customer } from 'src/entity/customer';
import { Product } from 'src/entity/product';
import { Store } from 'src/entity/store';

describe('move init code to private factory methods - test', () => {
  test('purchase succeeds when enough inventory', () => {
    // arrange
    const store: Store = createStoreWithInventory(Product.shampoo, 10);
    const customer: Customer = createCustomer();

    // act
    const success: boolean = customer.purchase(store, Product.shampoo, 5);

    // assert
    expect(success).toBe(true);
    expect(store.getInventory(Product.shampoo)).toBe(5);
  });

  test('purchase fails when not enough inventory', () => {
    // arrange
    const store: Store = createStoreWithInventory(Product.shampoo, 10);
    const customer: Customer = createCustomer();

    // act
    const success: boolean = customer.purchase(store, Product.shampoo, 15);

    // assert
    expect(success).toBe(false);
    expect(store.getInventory(Product.shampoo)).toBe(10);
  });

  const createStoreWithInventory = (
    product: Product,
    quantity: number,
  ): Store => {
    const store: Store = new Store();
    store.addInventory(product, quantity);
    return store;
  };

  const createCustomer = (): Customer => {
    return new Customer();
  };
});
