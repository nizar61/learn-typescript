/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 *
 **/

type Shopping = {
    Product: string;
    Price: number;
    Quantity: number;
};

const Member: boolean = true;

const ShoppingCart: Shopping[] = [
    {
        Product: "Mechanical Keyboard",
        Price: 850000,
        Quantity: 1,
    },
    {
        Product: "Wireless Mouse",
        Price: 275000,
        Quantity: 2,
    },
    {
        Product: "Mouse Pad",
        Price: 120000,
        Quantity: 1,
    },
];

// Subtotal setiap produk
const Total1: number = ShoppingCart[0].Price * ShoppingCart[0].Quantity;
const Total2: number = ShoppingCart[1].Price * ShoppingCart[1].Quantity;
const Total3: number = ShoppingCart[2].Price * ShoppingCart[2].Quantity;

// Subtotal belanja
const TotalPayment: number = Total1 + Total2 + Total3;

// Menghitung jumlah item dengan increment operator
let TotalItem: number = 0;

TotalItem++;
TotalItem++;

TotalItem++;
TotalItem++;

// Variabel
let Discount: number = 0;
let Shipping: number = 20000;

// Diskon
if (TotalPayment > 1000000) {
    Discount = TotalPayment * 10 / 100;
}

// Ongkir
if (Member) {
    Shipping = 0;
}

// Pembayaran akhir
const FinalPayment: number = TotalPayment - Discount + Shipping;

// Output
console.log("=== Shopping Summary ===");
console.log("Subtotal :", TotalPayment);
console.log("Total Item :", TotalItem);
console.log("Discount :", Discount);
console.log("Shipping :", Shipping);
console.log("Final Payment :", FinalPayment);