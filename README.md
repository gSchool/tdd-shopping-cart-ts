# Shopping Carts with Typescript

You have been hired as a developer at Ali Snobba - a snobby online store where customers purchase high-end merchandise like Gooey Baton handbags and Lolex watches. Your job is to implement a shopping cart that stores items while customers are in the process of ordering.

## Setup

1. Clone this repository.
1. Run `npm install`. 
1. Submit the link to your work when completed.

Your task is to use tests to develop the remaining features of the shopping cart described below. Your workflow should look like this:

* Write a failing test.
* Write just enough code to make it green.
* Refactor to improve the code (the test stays green).
* Make a new commit each time you have a passing test.
* Repeat.

> Note: Configuring the project for Typescript-style imports requires adjusting settings in `package.json and tsconfig.json`. See code for details.


## Stories and Acceptance Criteria

Ali Snobba has given you the following criteria to determine completeness of your project. Note that there are no code implementation details. So you must collaborate with your partner on how best to implement the application.

`As a shopper, I want to have a shopping cart, so I can store items until I am ready to checkout.`

1. Given that I a new shopper, when I begin shopping, then I expect my cart to be empty.
1. Given I have an empty cart, when I add an Item, then I expect the price to reflect the sum of all the Items in my cart.
1. Given I have an empty cart, when I add items, then I expect it to see an itemized list of the items along with their price and quantity.
1. Given I have cart with one item, when I add more of that item, then I expect to see its quantity updated on the itemized list.
1. Given I have a cart with items, when I remove an item, then I expect the cart to display the updated itemized list.
1. Given I have one item in my cart with a quantity of 3, when I remove one, then I expect the cart to have 2 of that item.

## Stretch Goals

A coupon is an object that has an item name and a price. The price on a coupon is deducted from the price of the item.

As a customer, I want to apply a coupon to my order, so I can take advantage of current sales.

* Given I have a cart with items, when there are 2 of the same item in the cart, then those items are discounted as 2 for the price of 1.
* Given I have a cart of items, when an item is on sale, then it receives a 25% discount.
* Given I have multiple coupons, when any items match the coupon, then the coupon discounts can be applied multiple times to the same items.
* Given I have a coupon for my cart, when no item matches the coupon, then the coupon discount is not applied.

## Your task

As a developer, your task is to implement the following user story, following the TDD workflow:

- Write (failing) tests before writing any code
- Only write code in response to failing test
- Make tests pass with simplest code possible
- After getting each test to pass, refactor your code and tests to be as concise as possible


## Tips

- Use [es6 getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) to simplify your task.
- Use [es6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of String concatenation
- Use [map, filter, and reduce](https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter) to avoid looping

## Resources

- [Typescript Handbook]https://www.typescriptlang.org/docs/handbook/2)
