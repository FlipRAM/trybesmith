import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public add = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.add(product);
    res.status(201).json(productCreated);
  };
}