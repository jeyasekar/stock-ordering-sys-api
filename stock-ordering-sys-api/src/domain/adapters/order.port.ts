import { Optional } from "typescript-optional";
import { OrderModel } from "src/domain/models/order.model";

export interface IOrderPort {
    fetchOrders(): Promise<OrderModel[]>;

    addOrder(order: OrderModel): Promise<OrderModel>;

}