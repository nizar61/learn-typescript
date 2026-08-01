/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const PreMeter: number = 25640;
const CurMeter: number = 25892;
const Price: number = 1650;

const SPanel: boolean = true;
const Mode: boolean = false;

const Consumption: number = CurMeter - PreMeter;
console.log("Energy Consumption:", Consumption, "kWh");

const ElectricityBill: number = Consumption * Price;
console.log("Electricity Bill:", ElectricityBill);

const SolarDiscount: number = SPanel ? ElectricityBill * 0.20 : 0;
const ModeDiscount: number = Mode ? ElectricityBill * 0.05 : 0;

const FinalBill: number = ElectricityBill - SolarDiscount - ModeDiscount;
console.log("Final Bill:", FinalBill);

const GreenEnergy: string = SPanel && Mode && Consumption < 300 ? "Eligible for Green Energy Program" : "Not Eligible for Green Energy Program";

console.log("Green Energy:", GreenEnergy);

