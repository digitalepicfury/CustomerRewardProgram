# CustomerRewardProgram

Video Code Walkthrough:
http://digitalfury.me/desktop/customerRewardProgram.html

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

Interview coding assignment below:

A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

Make up a data set to best demonstrate your solution

**Here is the dataset:**

[https://github.com/digitalepicfury/CustomerRewardProgram/blob/main/src/api/orders/orders.json](https://github.com/digitalepicfury/CustomerRewardProgram/blob/main/pages/api/order/orders.json)

# View the App

**Here is a link to view the deployed app:**

https://customer-reward-program.vercel.app/products

# Guide

The app contains a home screen which displays the products for sale. You can add those products to your cart. To view the cart click on the cart icon. Pressing the checkout button will create an order with the items you added to your cart. The rewards tile under [Account -> My Account -> Rewards](https://github.com/digitalepicfury/CustomerRewardProgram/blob/main/README.md#rewards-program-tile) is used to calculate rewards within a 3 month date range and additionally display the rewards accumulated monthly. The time machine will allow you to change the order's date.

# Testing

I would reccomend going to [Account -> My Account -> Rewards](https://github.com/digitalepicfury/CustomerRewardProgram/blob/main/README.md#rewards-program-tile)  and use 08/31/2020 as the startDate to get the correct range to display the example. The mock data best fits this range (August, September, October).

![reward-date-range](https://user-images.githubusercontent.com/64053527/91760915-bb1d3a80-eb99-11ea-970d-ed7c13d95b15.png)

# Navigating the App

## Drop Down

You can access the drop down menu by clicking on account:

![access-drop-down](https://user-images.githubusercontent.com/64053527/91761486-9bd2dd00-eb9a-11ea-8c16-e761494865e0.png)

It will display two options:

![drop-down-menu](https://user-images.githubusercontent.com/64053527/91761487-9c6b7380-eb9a-11ea-8ed4-6d6be7292545.png)

**Home:**
Will take you back to the home page displaying the products.

![products-screen](https://user-images.githubusercontent.com/64053527/91762438-f8ce9300-eb9a-11ea-90f8-f9270f2aae69.png)

**Account:**
Will take you to the account screen to goto orders, rewards, and access the time machine feature.

![account-screen](https://user-images.githubusercontent.com/64053527/91762964-23b8e700-eb9b-11ea-9760-d7dfe1d1e6fb.png)

## Time Machine

When creating order's typically today's date is used for the order's date. The Time Machine will allow you to change today's date to any date of your choice. When you create an order that date you chose will be the order's date. This allows you to create data for testing the Rewards feature.

###### I would recommend selecting this date: 08/31/2020 to match the test order data.

![time-machine-preview](https://user-images.githubusercontent.com/64053527/91751800-fd8b4b00-eb8a-11ea-8e16-ebe7d13df2c5.png)

## Orders Tile

This tile will take you to the orders screen to view all orders in the system.

![orders-tile](https://user-images.githubusercontent.com/64053527/91752563-23651f80-eb8c-11ea-860d-71ffb7346d56.png)

## Orders Screen

This screen will display all of the orders currently in the system.

![order-preview](https://user-images.githubusercontent.com/64053527/91752701-5dcebc80-eb8c-11ea-8baa-903caf7679a7.png)

## Rewards Program Tile

This will take you to the rewards screen to view all rewards or rewards by 3 month date range:

![reward-program-tile](https://user-images.githubusercontent.com/64053527/91752564-23fdb600-eb8c-11ea-80c0-b50906a04efd.png)

## Rewards Screen

**Total Rewards Tile:**
This tile will display the total rewards allocated since lifetime of the account. 

![total-rewards-tile](https://user-images.githubusercontent.com/64053527/91753129-1137b100-eb8d-11ea-8e59-080f36748fd6.png)

**All Orders Rewards Modal:**
When you press the view button on the **Total Rewards Tile** it will display all of the orders and the rewards earned for each order.

![rewards-all-list](https://user-images.githubusercontent.com/64053527/91763926-fae52180-eb9b-11ea-9ce3-ccd5ed134f77.png)

**Monthly Rewards Tile:**
This tile will only display the rewards earned between the startDate and endDate date range selected. The endDate is locked to 3 months from the startDate.

![monthly-rewards-tile](https://user-images.githubusercontent.com/64053527/91753128-1137b100-eb8d-11ea-9942-1bf4ecffc4b3.png)

**Monthly Rewards Modal:**
The rewards will be seperated out in one month increments displaying the total rewards for each of the 3 months.

![monthly-rewards-list](https://user-images.githubusercontent.com/64053527/91764192-7ba41d80-eb9c-11ea-9419-8c627365735b.png)

# Create Order Process

## Time Machine

When creating order's typically today's date is used for the order's date. You will want to change this date to control the orders date.

**View Guide:** https://github.com/digitalepicfury/CustomerRewardProgram/blob/main/README.md#time-machine

## Add To Cart

You can easily add items to the cart by going to the **home** (products screen) and pressing the "Add To Cart" button.

![products-add-to-cart](https://user-images.githubusercontent.com/64053527/91764840-9925b700-eb9d-11ea-9118-a3ab8fa33430.png)

When you press "Add To Cart" it will display a dialog. Press ok to the notice an item was added to the cart.

![cart-dialog](https://user-images.githubusercontent.com/64053527/91764839-9925b700-eb9d-11ea-9ac6-a448d1f1df26.png)

 If you want to view the items you have in your cart you can press on the cart icon:

![cart-button](https://user-images.githubusercontent.com/64053527/91765074-00dc0200-eb9e-11ea-82da-ca67d47d6fca.png)

## Checkout Cart

When you press the checkout button the order will be created with the order date set as the date selected on the time machine feature. The cart will clear out.

![cart-checkout](https://user-images.githubusercontent.com/64053527/91765273-4ac4e800-eb9e-11ea-89e8-ab36ac85372e.png)

Press OK on the dialog. You can always view your order under [Account -> My Account -> Orders](https://github.com/digitalepicfury/CustomerRewardProgram/blob/main/README.md#orders-tile)

![order-created-dialog](https://user-images.githubusercontent.com/64053527/91765451-a42d1700-eb9e-11ea-96de-7e193c43b364.png)

