import moment from "moment";

import { IOrder } from "@models";

export const getOrdersTotalReward = (orders: IOrder[]) => {        
    return sumArray(orders.map((order: IOrder) => calculateReward(order.amount)));
}

export const getOrdersWithMonths = (orders: IOrder[], startDate: Date, startDateMonth: number, endDateMonth: number) => {
    return getOrdersWithinDateRange(orders, moment(startDate).add(startDateMonth, 'M'), moment(startDate).add(endDateMonth, 'M'));
}

export const getOrdersWithinThreeMonthsTotalReward = (orders: IOrder[], startDate: Date) => {
    const ordersInDateRange: IOrder[] = getOrdersWithinThreeMonths(orders, startDate);
    return sumArray(ordersInDateRange.map((order: IOrder) => calculateReward(order.amount)));
}

export const calculateOrdersReward = (orders: IOrder[]): IOrder[] => { 
    return orders.map((order: IOrder) => ({...order, reward: calculateReward(order.amount)})); 
}

export const getOrdersWithinThreeMonths = (orders: IOrder[], startDate: Date) => {
    return getOrdersWithinDateRange(orders, moment(startDate, "MM/DD/YYYY"), moment(startDate, "MM/DD/YYYY").add(3, 'M'));
}

export const getOrdersWithinDateRange = (orders: IOrder[], startDate: moment.Moment, endDate: moment.Moment) => {
    return orders.filter((order: IOrder) => withinRange(moment(order.date, "YYYY-MM-DD"), startDate, endDate));
}

export const withinRange = (compareDate: moment.Moment, startDate: moment.Moment, endDate: moment.Moment) => {
    return compareDate.isBetween(startDate, endDate) || compareDate.isSame(startDate, 'day') || compareDate.isSame(endDate, 'day');
}

export const sumArray = (array: number[]): number => {    
    return array.reduce((a, b) => { return a + b; }, 0);
}

//A customer receives 2 points for every dollar spent over $100 in each transaction, 
//plus 1 point for every dollar spent over $50 in each transaction
//(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
export const calculateReward = (amount: number) => {
    amount = Math.floor(amount); 

    let totalPoints: number = 0;
    
    if (amount > 100) {    
        const amountOver100: number = amount - 100;    
        const pointsOver100: number = amountOver100 * 2;

        totalPoints = totalPoints + pointsOver100;

        if (amount > 50) {
            const amountOver50: number = amount - amountOver100 - 50;    
            const pointsOver50: number = amountOver50 * 1;

            totalPoints = totalPoints + pointsOver50;
        }
    } else {
        if (amount > 50) {
            const amountOver50: number = amount - 50;    
            const pointsOver50: number = amountOver50 * 1;
    
            totalPoints = totalPoints + pointsOver50;
        }
    }

    return totalPoints;
}
