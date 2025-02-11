import { Database } from 'src/entity/database';

// in jest we can't test classes like in xunit for c#
describe('CustomerTests', () => {
  let database;

  beforeEach(() => {
    database = new Database();
  });

  afterEach(() => {
    // jest does not have a built-in way to reset the state of a class
  });

  test('purchase succeeds when enough inventory', () => {
    // use database variable here
  });
});
