import dotenv from 'dotenv';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import Login from '../interfaces/loginInterface';
import User from '../interfaces/userInterface';

dotenv.config();
const secret: Secret = 'felipe';
const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const makeTokenUser = (user: User): string => {
  const validData = {
    username: user.username,
    classe: user.classe,
    level: user.level,
  };
  const token = jwt.sign({ data: validData }, secret, jwtConfig);

  return token;
};

const makeTokenLogin = (login: Login): string => {
  const validData = {
    username: login.username,
  };
  const token = jwt.sign({ data: validData }, secret, jwtConfig);

  return token;
};

export default { makeTokenUser, makeTokenLogin };