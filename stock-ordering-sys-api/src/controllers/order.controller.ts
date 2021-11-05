import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderRepository } from "src/domain/adapters/order.repository";



@Controller()
export class OrderController {
    constructor(
        private OrderRepository: OrderRepository,

    ) {
        console.log('orders service controller created')
    }

    @Get('/all')
    fetchOrders() {
        console.log('orders service controller fetchOrders method')

        return this.OrderRepository.fetchOrders()

    }
}