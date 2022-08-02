import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import Order from '../interfaces/orderInterface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    return this.model.getAll();
  }
}