import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';
import Login from '../interfaces/loginInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async add(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async checkUser(login: Login): Promise<Login[]> {
    const { username, password } = login;
    const query = `SELECT * FROM Trybesmith.Users 
    WHERE username='${username}' AND password='${password}'`;

    const [rows] = await this.connection.execute(query);
    
    return rows as Login[];
  }
}