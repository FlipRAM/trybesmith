import connection from '../models/connection';
import UserModel from '../models/userModel';
import User from '../interfaces/userInterface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async add(user: User): Promise<User> {
    return this.model.add(user);
  }
}