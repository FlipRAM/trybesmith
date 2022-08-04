import { Router } from 'express';
import ProductController from '../controllers/productController';
import ProductMiddleware from '../middlewares/productMiddleware';

const router = Router();

const productController = new ProductController();
const productMiddleware = new ProductMiddleware();

router.post('/', productMiddleware.checkName, productMiddleware.checkAmount, productController.add);

router.get('/', productController.getAll);

export default router;
