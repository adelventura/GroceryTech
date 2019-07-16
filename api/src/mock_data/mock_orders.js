const ORDERS = [
  {
    buyerID: 1234,
    storeName: 'Publix',
    orderID: 22345,
    date: '12-12-2019',
    totalPrice: 54.2,
    totalItems: 5,
    delivered: false
  },
  {
    buyerID: 1234,
    storeName: 'Publix',
    orderID: 24680,
    date: '02-02-2020',
    totalPrice: 5.99,
    totalItems: 1,
    delivered: true
  },
  {
    storeName: 'Kroger',
    buyerID: 1234,
    orderID: 98765,
    date: '02-01-2020',
    totalPrice: 33.87,
    totalItems: 3,
    delivered: true
  },
  {
    storeName: 'Publix',
    buyerID: 1234,
    orderID: 29384,
    date: '02-22-2020',
    totalPrice: 102.33,
    totalItems: 15,
    delivered: true
  },
  {
    storeName: 'Costco',
    buyerID: 2221,
    orderID: 44444,
    date: '03-08-2020',
    totalPrice: 15.0,
    totalItems: 3,
    delivered: true
  }
];

module.exports = ORDERS;
