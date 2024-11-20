const products = [
  {
    id: 101,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    inStock: true,
    ratings: 4.5,
  },
  {
    id: 102,
    name: "Laptop",
    price: 1199.99,
    category: "Computers",
    inStock: false,
    ratings: 4.7,
  },
  {
    id: 103,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Accessories",
    inStock: true,
    ratings: 4.3,
  },
  {
    id: 104,
    name: "Smartwatch",
    price: 149.99,
    category: "Wearables",
    inStock: true,
    ratings: 4.2,
  },
  {
    id: 105,
    name: "Gaming Console",
    price: 499.99,
    category: "Gaming",
    inStock: true,
    ratings: 4.8,
  },
];

// 1.Write a function that returns an array of all product names in uppercase.
// const a=products.map(b=>b.name.toUpperCase())
// console.log(a);
//[
// 'SMARTPHONE',
//'LAPTOP',
//'WIRELESS HEADPHONES',
//'SMARTWATCH',
//'GAMING CONSOLE'
// ]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2.Write a function that logs each product's name and price to the console.
// function kumar (products){
//     products.forEach(e=>{console.log(`Name:-${products.name} Price:-${products.price}`);
// })
// }
// products.forEach(product => {
//   console.log(`Product: ${product.name}, Price: $${product.price}`);
// });
//Product: Smartphone, Price: $699.99
//Product: Laptop, Price: $1199.99
//Product: Wireless Headphones, Price: $199.99
//Product: Smartwatch, Price: $149.99
//Product: Gaming Console, Price: $499.99

// 3.Write a function that returns an array of products that are in stock.
//  let x =products.filter(a=>a.inStock==true)
//  let y=x.map(a=>a.name)
//  console.log(y);

// 4.Write a function that finds the first product with a rating higher than 4.5

// let x=products.find(a=>a.ratings>4.5)
// let y=x.name
// console.log(y);

// 5.Write a function that returns the index of the first product in the "Gaming"
// let v=products.findIndex(a=>a.category=="gaming")
// console.log();

// let a = products.findIndex((product) => product.category === "Gaming");

// console.log(a);

// 6.Write a function that checks if all products are in stock.
// let a=products.every(a=>a.inStock)
// console.log(a);
//false
// 7.Write a function that checks if any product has a price lower than $200.
//  let a=products.every(a=>a.price<200)
//  console.log(a);
 //false