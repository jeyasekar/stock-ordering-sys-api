import { Optional } from "typescript-optional";
import { OrderModel } from "src/domain/models/order.model";

export interface IOrderRepository {
    fetchOrders(): Promise<OrderModel[]>;

    addOrder(order: OrderModel): Promise<OrderModel>;

}