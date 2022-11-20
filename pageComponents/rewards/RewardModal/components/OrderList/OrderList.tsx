import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IOrder } from '@models';
import { OrderListItem } from '..';

export default function OrderList({ orders }: { orders: IOrder[] }) {
    return (
    <>
        { orders.map((order: IOrder) => <OrderListItem key={uuidv4()} order={order} rewardAmount={order.reward ? order.reward : 0} />) }
    </>
  );
}