/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const Room: number = 650000;
const Service: number = 120000;
console.log("price room: ", Room, " service price: ", Service);

const Night: number = 4;

const Total: number = (Room * Night) + (Service * Night); 
console.log("nights stayed: ", Night);
console.log("Real Total: ", Total);

const member: boolean = true; 
console.log("free breakfast: ", Night > 3 || member);

const result = member ? "yes" : "no";
console.log("Discount Member: ", result);

console.log("tax: 11%");

if (member) {
    console.log("discount: 12%");
    const besarDiskon: number = Total * 0.12; 
    const besarPajak: number = Total * 0.11;
    const finalPayment: number = Total - besarDiskon + besarPajak;
    
    console.log("final payment: ", finalPayment.toFixed(0));
} else {
    const besarPajak: number = Total * 0.11;
    const finalPayment: number = Total + besarPajak;
    
    console.log("final payment: ", finalPayment.toFixed(0));
}

