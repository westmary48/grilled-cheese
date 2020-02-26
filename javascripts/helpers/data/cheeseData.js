const cheese = [
  {
    id: 'cheese1',
    type: 'cheddar',
    color: '#F5DEB3',
    price: 1
  },
  {
    id: 'cheese2',
    type: 'blue',
    color: 'white',
    price: 0.50
  },
  {
    id: 'cheese3',
    type: 'feta',
    color: '#DEB887',
    price: 2
  },
  {
    id: 'cheese4',
    type: 'gouda',
    color: '#764d41',
    price: 3
  }
];

let selectedCheeseId = '';

const setSelectedCheese = (cheeseId) => {
  selectedCheeseId = cheeseId;
  console.log('selectedCheeseId', selectedCheeseId);
};

const getCheese = () => {
  return cheese;
};

export default { setSelectedCheese, getCheese };
