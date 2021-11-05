import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IOrderPort } from "src/domain/adapters/order.port";
import { OrderMapper } from "..//../infrastructure/mapper/order.mapper";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { OrderTrack } from "..//../domain/entities/order.entity";
import { OrderModel } from "..//../domain/models/order.model";

@Injectable()
export class OrderRepository implements IOrderPort {
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