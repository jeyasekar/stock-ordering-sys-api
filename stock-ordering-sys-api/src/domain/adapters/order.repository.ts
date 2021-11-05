import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IOrderRepository } from "src/domain/adapters/iorder.repository";
import { OrderMapper } from "src/infrastructure/mapper/order.mapper";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { OrderTrack } from "src/domain/entities/order.entity";
import { OrderModel } from "src/domain/models/order.model";

@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(@InjectRepository(OrderTrack) private OrderRepository: Repository<OrderTrack>) {
        console.log('OrderRepository created')
    }
    async fetchOrders(): Promise<OrderModel[]> {
        const allOrders = await this.OrderRepository.find()
        return OrderMapper.toDomains(allOrders)
    }
    async addOrder(order: OrderModel): Promise<OrderModel> {
        throw new Error("Method not implemented.");
    }
}