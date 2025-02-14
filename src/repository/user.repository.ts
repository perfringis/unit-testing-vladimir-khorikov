import { User } from 'src/entity/user';

export class UserRepository {
  lastExecutedSqlStatement: string;

  public getById(id: number): User {
    this.lastExecutedSqlStatement = `SELECT * FROM dbo.[User] WHERE User.ID = ${id}`;

    return new User();
  }
}
