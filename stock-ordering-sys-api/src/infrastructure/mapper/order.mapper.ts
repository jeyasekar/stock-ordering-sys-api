import { OrderTrack } from "src/domain/entities/order.entity"
import { OrderModel } from "..//../domain/models/order.model"
import { Optional } from "typescript-optional"

export class OrderMapper {
    static toDomain(repoEntity: OrderTrack): Optional<OrderModel> {
        if (!repoEntity) {
            return Optional.empty<OrderModel>()
        }

        const orderModel: OrderModel = new OrderModel(
            repoEntity.orderId,
            repoEntity.orderPlacedBy,
            repoEntity.description,
            repoEntity.orderedDate,
            repoEntity.orderTotalPrice
        )

        return Optional.of(orderModel)
    }
    static toDomains(repoEntities: OrderTrack[]): OrderModel[] {
        const orderModels = new Array<OrderModel>()
        repoEntities.forEach(
            re => {
                const orderModel = this.toDomain(re)
                orderModels.push(orderModel.get())
            }
        )
        return orderModels;
    }
}