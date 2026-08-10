/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Bument has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number siness Rules
 * An order is ready to ship only if:
 * - Payof orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
/**
 * The warehouse checks customer orders before shipping.
 */

const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let readyToShip: number = 0;
let unpaidOrders: number = 0;
let waitingForStock: number = 0;

console.log("Orders Ready to Ship:");

for (const order of orders) {

  if (order.paid && order.stockAvailable) {
    readyToShip++;
    console.log(order.id);
  }
}

console.log("unpaid orders:");

for (const order of orders) {

   if (!order.paid) {
    unpaidOrders++;
    console.log(order.id);
  }
}

console.log("aiting for stock:");

for (const order of orders) {
  if (!order.stockAvailable) {
    waitingForStock++;
    console.log(order.id);
  }
}


console.log("\n=== Order Summary ===");
console.log("Ready to Ship:", readyToShip);
console.log("Unpaid Orders:", unpaidOrders);
console.log("Waiting for Stock:", waitingForStock);