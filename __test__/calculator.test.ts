import { Calculator } from 'src/entity/calculator';

describe('AAA template for unit testing', () => {
  test('sum of two numbers', () => {
    const first: number = 10;
    const second: number = 20;
    const spt = new Calculator();

    const result: number = spt.sum(first, second);

    expect(result).toBe(30);
  });
});
