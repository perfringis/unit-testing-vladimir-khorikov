import { Calculator } from 'src/entity/calculator';

describe('Shared object for unit test', () => {
  let spt: Calculator;

  beforeEach(() => {
    spt = new Calculator();
  });

  afterEach(() => {
    // jest don't have a cleanup method
  });

  test('sum of two numbers', () => {
    // arrange
    const first: number = 10;
    const second: number = 20;

    // act
    const result: number = spt.sum(first, second);

    // assert
    expect(result).toBe(30);
  });
});
