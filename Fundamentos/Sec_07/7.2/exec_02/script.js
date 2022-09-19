const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let clientInfo = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, `;
  clientInfo += `Telefone: ${order.phoneNumber}, Endereço: ${order.address.street}, `;
  clientInfo += `${order.address.number}, AP: ${order.address.apartment}`;
  return clientInfo;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  const newObject = {
    name: 'Luiz Silva',
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
    },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
    payment: {
      total: 50,
    },
};
const result = Object.assign({}, order, newObject);
let clientInfo = `Olá ${result.name}, o total do seu pedido de ${Object.keys(result.order.pizza)} `
clientInfo += `e ${result.order.drinks.coke.type} é de R$${result.payment.total},00`
return clientInfo;
};

console.log(orderModifier(order));