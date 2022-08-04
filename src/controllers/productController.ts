import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public add = async (req: Request, res: Response) => {
    const product = req.body;
    const { name } = product;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    if (typeof name !== 'string') {
      return res.status(422).json({ message: '"name" must be a string' });
    }

    if (name.length < 3) {
      return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    }

    const productCreated = await this.productService.add(product);
    res.status(201).json(productCreated);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}