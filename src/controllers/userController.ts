import { Request, Response } from 'express';
import UserService from '../services/userService';
import jwt from '../auth/jwtValidation';
import User from '../interfaces/userInterface';
import Login from '../interfaces/loginInterface';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public add = async (req: Request, res: Response) => {
    const user = req.body;
    const token = jwt.makeTokenUser(user as User);

    await this.userService.add(user);
    res.status(201).json({ token });
  };

  public checkUser = async (req: Request, res: Response) => {
    const login = req.body;
    const { username, password } = login;
    
    if (!username) return res.status(400).json({ message: '"username" is required' });
    
    if (!password) return res.status(400).json({ message: '"password" is required' });

    const token = await this.userService.checkUser(login as Login);

    if (token === '') return res.status(401).json({ message: 'Username or password invalid' });

    return res.status(200).json({ token });
  };
}