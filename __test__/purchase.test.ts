import { Customer } from 'src/entity/customer';
import { Product } from 'src/entity/product';

describe('london school of testing - purchase', () => {
  test('purchase succeeds when enough inventory', () => {
    // arrange
    const storeMock = {
      addInventory: jest.fn(),
      getInventory: jest.fn(),
      hasEnoughInventory: jest.fn().mockReturnValue(true),
      removeInventory: jest.fn(),
    };
    const customer: Customer = new Customer();

    // act
    const success: boolean = customer.purchase(storeMock, Product.shampoo, 5);

    // assert
    expect(success).toBe(true);
    expect(storeMock.removeInventory).toHaveBeenCalledWith(Product.shampoo, 5);
    expect(storeMock.removeInventory).toHaveBeenCalledTimes(1);
  });

  test('purchase fails when not enough inventory', () => {
    // arrange
    const storeMock = {
      addInventory: jest.fn(),
      getInventory: jest.fn(),
      hasEnoughInventory: jest.fn().mockReturnValue(false),
      removeInventory: jest.fn(),
    };
    const customer: Customer = new Customer();

    // act
    const success: boolean = customer.purchase(storeMock, Product.shampoo, 5);

    // assert
    expect(success).toBe(false);
    expect(storeMock.removeInventory).not.toHaveBeenCalled();
  });
});
