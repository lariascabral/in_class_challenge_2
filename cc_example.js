// Task 1

let products = [
    {name: "Notebook", price: 5, category: "Stationary"} ,
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name:"Desk Chair", price: 150, category: "Furniture"} ,
] ;

function getProductsByCategory(products, category) {
    return products.filter(product => products.category === category) ;
} ;

console.log(getProductsByCategory(products, "Electronics")) ;

// Task 2

