// Task 1

let products = [
    {name: "Notebook", price: 5, category: "Stationary"} ,
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name:"Desk Chair", price: 150, category: "Furniture"} ,
] ;

// function getProductsByCategory(products, category) {
//     return products.filter(product => product.category === category) ;
// } ;

// console.log(getProductsByCategory(products, "Electronics")) ;

// Task 2

// console.log("Before discounts:", products)

// console.log("*".repeat(20))

function applyDiscount(products, discountRate) {
    return products.map(product => ({
         ...product,
         price: product.price - (product.price * discountRate)
    }
    
    ))
}

console.log("After discounts:", applyDiscount(products, 0.1))