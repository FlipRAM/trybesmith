import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../interfaces/productInterface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async add(product: Product): Promise<Product> {
    return this.model.add(product);
  }

  public async getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
}