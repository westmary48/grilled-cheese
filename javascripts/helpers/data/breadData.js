const breads = [
  {
    id: 'bread1',
    type: 'wheat',
    color: '#F5DEB3',
    price: 1
  },
  {
    id: 'bread2',
    type: 'white',
    color: 'white',
    price: 0.50
  },
  {
    id: 'bread3',
    type: 'banana',
    color: '#DEB887',
    price: 2
  },
  {
    id: 'bread4',
    type: 'sourdough',
    color: '#764d41',
    price: 3
  }
];

let selectedBreadId = '';

const setSelectedBread = (breadId) => {
  selectedBreadId = breadId;
  console.log('selectedBreadId', selectedBreadId);
};

const getBreads = () => {
  return breads;
};

export default { setSelectedBread, getBreads };
