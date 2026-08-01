/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

type Purchase = {
    Product: string;
    Price: number;
    Quantity: number;
}

const Costomer : Purchase [] = [
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
    Product: "Monitor Stand",
    Price: 420000,
    Quantity: 1,
  },
];

const Total1: number = Costomer[0].Price * Costomer[0].Quantity
const Total2: number = Costomer[1].Price * Costomer[1].Quantity
const Total3: number = Costomer[2].Price * Costomer[2].Quantity
const Total: number = Total1 + Total2 + Total3

const Member: Boolean = true
const DiscountM = Member ? Total * 0.10 : 0
const Voucher: Boolean = true
const PriceVoucher: number = 100000 
const Vat: number = (Total - DiscountM - PriceVoucher)*0.11
const FinalPayment = Total - DiscountM - PriceVoucher + Vat

const Point: number = Math.floor((Total - DiscountM - PriceVoucher)/50000)
const Ongkir = Member || Total - DiscountM - PriceVoucher > 1500000 ? "Free shipping" : "Pay shipping costs = 10.000"


console.log("CUSTOMER PURCHASE")
console.log(Costomer)
console.log("Total: ", Total)
console.log("Discount member ", DiscountM, ": ", Member)
console.log("Discount vocher ", Voucher, "bernilai: ", PriceVoucher)
console.log("Total after discount: ", Total - DiscountM - PriceVoucher)
console.log("Final Payment: ", FinalPayment)
console.log("Reward Point/50.000: ", Point)
console.log("Free  shipping? ", Ongkir)