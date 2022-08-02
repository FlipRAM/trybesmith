import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const productController = new ProductController();

router.post('/products', productController.add);

export default router;
