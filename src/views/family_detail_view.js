

const PubSub = require('../helpers/pub_sub.js');

const FamilyDetailView = function() {

};

FamilyDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('SelectedFamily:ready', (event) => {
  this.render(event.detail);
  })
};


FamilyDetailView.prototype.render = function (family) {
  const familyDiv = document.querySelector('#family-info');
  const infoPara = document.createElement('p');
  const list = this.createList(family);

  infoPara.textContent = `The ${family.name} family can be described as ${family.description}`;
  list.textContent = 'instruments include:',

  familyDiv.innerHTML = '';
  familyDiv.appendChild(infoPara);
  familyDiv.appendChild(list);
};

FamilyDetailView.prototype.createList = function (family) {
  const instrumentList = document.createElement('ul');
  family.instruments.forEach((instrument) => {
    const instrumentLi = document.createElement('li');
    instrumentLi.textContent = instrument;
    instrumentList.appendChild(instrumentLi);
  })
  return instrumentList;
};

module.exports = FamilyDetailView;



// refactoring
//
// FamilyDetailView.prototype.addElement = function (type, text) {
//   const element = document.createElement(type);
//   element.textContent = text;
//   return element;
// };
//
// const infoPara = this.addElement('p', family.description);
