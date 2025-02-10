import { Calculator } from 'src/entity/calculator';

describe('AAA template for unit testing', () => {
  test('sum of two numbers', () => {
    // arrange
    const first: number = 10;
    const second: number = 20;
    const calculator: Calculator = new Calculator();

    // act
    const result: number = calculator.sum(first, second);

    // assert
    expect(result).toBe(30);
  });
});
