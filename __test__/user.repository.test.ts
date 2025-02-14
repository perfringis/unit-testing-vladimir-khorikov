import { User } from 'src/entity/user';
import { UserRepository } from 'src/repository/user.repository';

describe('UserRepositoryTests', () => {
  test('getById executes correct SQL code', () => {
    const spt = new UserRepository();
    const user: User = spt.getById(5);
    expect(spt.lastExecutedSqlStatement).toBe(
      'SELECT * FROM dbo.[User] WHERE User.ID = 5',
    );
  });
});
