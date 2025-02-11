// Task 1

let products = [
    {name: "Notebook", price: 5, category: "Stationary"} ,
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name:"Desk Chair", price: 150, category: "Furniture"} ,
] ;

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category) ;
} ;

console.log(getProductsByCategory(products, "Electronics")) ;


// Task 2

console.log("Before discounts:", products)

console.log("*".repeat(20))

function applyDiscount(products, discountRate) {
    return products.map(product => ({
         ...product,
         price: product.price - (product.price * discountRate)
    }
    
    ))
}

console.log("After discounts:", applyDiscount(products, 0.1))


// Task 3

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale) => total + sale, 0)
} ;

console.log(`Total Revenue 2024: $${calculateTotalRevenue(sales)}`) ;


// Task 4

let employee = {name: "John Doe", salary: 50000, position: "Manager"} ;

function UpdateSalary(employee, percentageIncrease) {
    return employee.salary += employee.salary * percentageIncrease ;
}

console.log(`Updated employee salary: $${UpdateSalary(employee, 0.1)}`);