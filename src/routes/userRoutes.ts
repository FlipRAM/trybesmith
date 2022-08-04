import { Router } from 'express';
import UserController from '../controllers/userController';
import UserMiddleware from '../middlewares/userMiddleware';

const router = Router();

const userController = new UserController();
const userMiddleware = new UserMiddleware();

router.post(
  '/',
  userMiddleware.checkUsername,
  userMiddleware.checkClasse,
  userMiddleware.checkLevel,
  userMiddleware.checkPassword,
  userController.add,
);

export default router;
