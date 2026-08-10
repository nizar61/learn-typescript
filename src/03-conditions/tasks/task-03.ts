/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const Name: string = "Raka Saputra"
const Usage: number = 124

console.log("Name user: ", Name)
console.log("Monthly Usage: ", Usage)

if(
    Usage <= 50
){
    console.log("Recomendation package: Basic")
}else if(
    Usage >= 50 && Usage <= 150 
){
    console.log("Recomendation package: Standart")
}else if(
    Usage >= 150
){
    console.log("Recomendation package: Premium")
}

