/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
// Primitive Types
const Hours: number = 7;
const Minutes: number = 35;
const PricePerHour: number = 8000;

// Arithmetic Operators
const TotalMinutes: number = (Hours * 60) + Minutes;
const RemainingMinutes: number = TotalMinutes % 60;

// Assignment Operator
let BilledHours: number = Hours;

if (RemainingMinutes > 0) {
    BilledHours++;
}

// Arithmetic Operator
const PaymentBeforeDiscount: number = BilledHours * PricePerHour;

// Comparison Operator
const DiscountRequirement: boolean = TotalMinutes > 300;

// Ternary Operator
const Discount: number = DiscountRequirement
    ? PaymentBeforeDiscount * 15 / 100
    : 0;

// Arithmetic Operator
const FinalPayment: number = PaymentBeforeDiscount - Discount;

// Output
console.log("=== Internet Cafe ===");
console.log("Total Playing Time :", TotalMinutes, "minutes");
console.log("Remaining Minutes :", RemainingMinutes, "minutes");
console.log("Billed Hours :", BilledHours, "hours");
console.log("Payment Before Discount : Rp", PaymentBeforeDiscount);
console.log("Discount :", DiscountRequirement);
console.log("Discount Amount : Rp", Discount);
console.log("Final Payment : Rp", FinalPayment);
