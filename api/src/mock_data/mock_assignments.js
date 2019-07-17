var ASSIGNMENTS = [
  {
    orderID: '12345',
    storeName: 'Publix',
    storeID: '001',
    date: '02-01-2020',
    orderTime: '12:33',
    deliveryTime: 'ASAP',
    buyerAddress: '123 North St S, Atlanta, GA 30312',
    price: '15.00',
    numItems: '5'
  },
  {
    orderID: '24680',
    storeName: 'Publix',
    storeID: '001',
    date: '02-01-2020',
    orderTime: '12:01',
    deliveryTime: 'ASAP',
    buyerAddress: '123 North St S, Atlanta, GA 30312',
    price: '2.33',
    numItems: '1'
  },
  {
    orderID: '98765',
    storeName: 'Kroger',
    storeID: '002',
    date: '02-01-2020',
    orderTime: '3:45',
    deliveryTime: 'ASAP',
    buyerAddress: '123 North St S, Atlanta, GA 30312',
    price: '13.56',
    numItems: '3'
  },
  {
    orderID: '29384',
    storeName: 'Publix',
    storeID: '001',
    date: '02-01-2020',
    orderTime: '5:00',
    deliveryTime: '3 hrs',
    buyerAddress: '123 North St S, Atlanta, GA 30312',
    price: '12.12',
    numItems: '15'
  },
  {
    orderID: '44444',
    storeName: 'Costco',
    storeID: '003',
    date: '02-01-2020',
    orderTime: '8:00',
    deliveryTime: '12 hrs',
    buyerAddress: '123 North St S, Atlanta, GA 30312',
    price: '4.43',
    numItems: '3'
  }
];

const ITEMS = [
  {
    quantity: 5,
    item: {
      id: '011',
      type: 'produce',
      name: 'Fuji Apple',
      price: '1.10',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 3,
    item: {
      id: '032',
      type: 'produce',
      name: 'Pear',
      price: '1.19',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 2,
    item: {
      id: '013',
      type: 'produce',
      name: 'Red Bell Pepper',
      price: '0.79',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 1,
    item: {
      id: '013',
      type: 'meat',
      name: 'Ground Beef',
      price: '4.98',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 1,
    item: {
      id: '013',
      type: 'Others',
      name: 'Mixed Nuts',
      price: '3.50',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 2,
    item: {
      id: '013',
      type: 'canned goods',
      name: 'Tomato Soup',
      price: '3.50',
      expiration: 'Dec-2020'
    }
  }
];

module.exports = {
  ASSIGNMENTS,
  ITEMS
};
