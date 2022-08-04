import { Router } from 'express';
import OrderController from '../controllers/orderController';
import OrderMiddleware from '../middlewares/orderMiddleware';

const router = Router();

const orderController = new OrderController();
const orderMiddleware = new OrderMiddleware();

router.get('/', orderController.getAll);

router.post('/', orderMiddleware.checkToken, orderMiddleware.checkProduct, orderController.add);

export default router;
