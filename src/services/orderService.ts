import { JwtPayload } from 'jsonwebtoken';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';
import Order from '../interfaces/orderInterface';

interface CreatedOrder {
  userId: number,
  productsIds: number[],
}

export default class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    return this.model.getAll();
  }

  public async add(token: JwtPayload, productsIds: number[]): Promise<CreatedOrder> {
    const { data: { username } } = token;

    const user = await this.model.getIdByUsername(username);
    const userId = user[0].id as number;

    const orderId = await this.model.add(userId);

    if (productsIds.length === 1) await this.productModel.update(orderId, productsIds[0]);

    if (productsIds.length > 1) {
      await productsIds.forEach(async (product: number) => {
        await this.productModel.update(orderId, product);
      });
    }

    return { userId, productsIds };
  }
}