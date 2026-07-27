/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

// Define Product Type
type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number;
  averageRating: number;
  isDiscounted: boolean;
};

// Product Data
const product1: Product = {
  productCode: "PRD001",
  productName: "Mechanical Keyboard RGB",
  sellingPrice: 850000,
  stockQuantity: 20,
  productWeight: 1.2,
  averageRating: 4.8,
  isDiscounted: true,
};

const product2: Product = {
  productCode: "PRD002",
  productName: "Wireless Gaming Mouse",
  sellingPrice: 350000,
  stockQuantity: 35,
  productWeight: 0.3,
  averageRating: 4.6,
  isDiscounted: false,
};

const product3: Product = {
  productCode: "PRD003",
  productName: "27 Inch Monitor",
  sellingPrice: 2450000,
  stockQuantity: 12,
  productWeight: 4.8,
  averageRating: 4.9,
  isDiscounted: true,
};

// Display Product Data
console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);