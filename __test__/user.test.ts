import { User } from 'src/entity/user';

describe('UserTest', () => {
  test('test', () => {
    const spt = new User();

    spt.name = 'John Smith';

    expect(spt.name).toBe('John Smith');
  });
});
