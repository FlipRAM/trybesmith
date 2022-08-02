import { Request, Response } from 'express';
import UserService from '../services/userService';
import makeToken from '../auth/jwtValidation';
import User from '../interfaces/userInterface';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public add = async (req: Request, res: Response) => {
    const user = req.body;
    const token = makeToken(user as User);

    await this.userService.add(user);
    res.status(201).json({ token });
  };
}