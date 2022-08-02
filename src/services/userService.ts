import connection from '../models/connection';
import UserModel from '../models/userModel';
import User from '../interfaces/userInterface';
import Login from '../interfaces/loginInterface';
import jwt from '../auth/jwtValidation';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async add(user: User): Promise<User> {
    return this.model.add(user);
  }

  public async checkUser(login: Login): Promise<string> {
    const user = await this.model.checkUser(login);

    if (user.length !== 0) {
      const token = jwt.makeTokenLogin(login);
      
      return token;
    }

    return '';
  }
}