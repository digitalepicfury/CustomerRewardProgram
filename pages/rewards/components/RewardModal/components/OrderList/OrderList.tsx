import React from 'react';

import { IOrder } from '@models';
import { OrderListItem } from '..';

export default function OrderList({ orders }: { orders: IOrder[] }) {
    return (
    <>
        { orders.map((order: IOrder) => <OrderListItem order={order} rewardAmount={order.reward ? order.reward : 0} />) }
    </>
  );
}