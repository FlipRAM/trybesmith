import dotenv from 'dotenv';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import User from '../interfaces/userInterface';

dotenv.config();
const secret: Secret = process.env.JWT_SECRET || 'felipe';
const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const makeToken = (user: User): string => {
  const validData = {
    username: user.username,
    classe: user.classe,
    level: user.level,
  };
  const token = jwt.sign({ data: validData }, secret, jwtConfig);

  return token;
};

export default makeToken;