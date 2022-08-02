import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const productController = new ProductController();

router.post('/', productController.add);

router.get('/', productController.getAll);

export default router;
