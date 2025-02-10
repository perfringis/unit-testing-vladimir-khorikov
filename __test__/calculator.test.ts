import { Calculator } from 'src/entity/calculator';

describe('AAA template for unit testing', () => {
  test('sum of two numbers', () => {
    // arrange
    const first: number = 10;
    const second: number = 20;
    const spt = new Calculator();

    // act
    const result: number = spt.sum(first, second);

    // assert
    expect(result).toBe(30);
  });
});
