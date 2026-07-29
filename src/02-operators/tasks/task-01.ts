/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

type cafetaria = {
MenuName: string;
Price: number;
Amount: number;
};

const purchasedItems: cafetaria[] = [
    {
        MenuName: "Fride rice",
        Price: 18000,
        Amount: 3,
    },
    {   MenuName: "Bottles of minerla water",
        Price: 5000,
        Amount: 2,
    }
];

const TotalFood: number = purchasedItems[0].Amount * purchasedItems[0].Price
const TotalDrink: number = purchasedItems[1].Amount * purchasedItems[1].Price
const TotalPayment: number = TotalFood + TotalDrink - 10000

console.log(purchasedItems)
console.log("Total Price Food:",TotalFood)
console.log("Total Price Drink:",TotalDrink)
console.log("Total Payment:",TotalPayment)

