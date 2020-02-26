import cheeseData from '../helpers/data/cheeseData.js';
import util from '../helpers/util.js';

const selectCheese = (e) => {
  const cheeseId = e.target.id;
  cheeseData.setSelectedCheese(cheeseId);
}

const radioButtonEvent = (e) => {
  const radioButtons = document.getElementsByClassName('cheeseRadio');
  for(let i=0; i<radioButtons.length; i++){
    radioButtons[i].addEventListener('click', selectCheese);
  }
}

const makeCheeseRadioButtons = () => {
  const allCheese = cheeseData.getCheese();
  let domString = '';

  allCheese.forEach((cheese) => {
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input cheeseRadio" type="radio" name="exampleRadios" id="${cheese.id}">`;
    domString += `<label class="form-check-label" for="${cheese.id}">${cheese.type}</label>`;
    domString += '</div>';
  });
  util.printToDom('cheese-container', domString);
  radioButtonEvent();
}


export default { makeCheeseRadioButtons }
