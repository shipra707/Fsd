// // 
// const data = [
//   {
//     productID: 'A',
//     productName: 'TV',
//     price: 400,
//     manufacturingDate: '20-09-2025',
//     color: 'Red'
//   },
//   {
//     productID: 'B',
//     productName: 'Monitor',
//     price: 400,
//     manufacturingDate: '20-09-2025',
//     color: 'Black'
//   },
//   {
//     productID: 'C',
//     productName: 'TV',
//     price: 400,
//     manufacturingDate: '20-09-2025',
//     color: 'Red'
//   },
//   {
//     productID: 'D',
//     productName: 'Phone',
//     price: 800,
//     manufacturingDate: '20-09-2025',
//     color: 'Red'
//   }
// ];

// Use map() to create a new array containing only the product name and price
const productSummaries = data.map(product => ({
  name: product.productName,
  cost: product.price
}));
const data = [
  {
    productID: 'A',
    productName: 'TV',
    price: 400,
    manufacturingDate: '20-09-2025',
    color: 'Red'
  },
  {
    productID: 'B',
    productName: 'Monitor',
    price: 400,
    manufacturingDate: '20-09-2025',
    color: 'Black'
  },
  {
    productID: 'C',
    productName: 'TV',
    price: 400,
    manufacturingDate: '20-09-2025',
    color: 'Red'
  },
  {
    productID: 'D',
    productName: 'Phone',
    price: 800, // This item will be filtered out
    manufacturingDate: '20-09-2025',
    color: 'Red'
  }
];
const affordableProducts = data.filter(product => product.price < 600);

console.log(affordableProducts);