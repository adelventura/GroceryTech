const PAYMENT_METHODS = [
  {
    paymentName: 'Visa',
    accountNumber: 453433338,
    routingNumber: 475782796,
    default: true
  },
  {
    paymentName: 'Amex',
    accountNumber: 548461883,
    routingNumber: 936566668,
    default: false
  },
  {
    paymentName: 'Check',
    accountNumber: 852932841,
    routingNumber: 547162669,
    default: false
  }
];

module.exports = PAYMENT_METHODS;
