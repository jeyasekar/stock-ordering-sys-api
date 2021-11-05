import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderRepository } from "src/domain/adapters/order.repository";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";



@Controller()
export class OrderController {
    constructor(
        private OrderRepository: OrderRepository,
        private logger: WinstonLoggerService,) {
        this.logger.setContext(OrderController.name);
        console.log('orders service controller created')
    }

    @Get('/all')
    fetchOrders() {
        this.logger.info('in fetchMasterData info', { key: 'value' });
        this.logger.error('in fetchMasterData error', { key: 'value' });
        this.logger.debug('in fetchMasterData debug', { key: 'value' });
        this.logger.warn('in fetchMasterData warn');
        console.log('orders service controller fetchOrders method')
        //throw new HttpException("err string", HttpStatus.FORBIDDEN);
        console.log('orders service controller fetchOrders method')
        return this.OrderRepository.fetchOrders()

    }
}