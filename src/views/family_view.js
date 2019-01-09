
const PubSub = require('../helpers/pub_sub.js');

const FamilyView = function(element) {
  this.element = element;
};

FamilyView.prototype.bindEvents = function () {
  PubSub.subscribe('Instrument:families-ready', (event) => {
    this.populate(event.detail);
    console.log(event.detail);
  });

  this.element.addEventListener('change', (event) => {
  const selectedIndex = event.target.value;
  PubSub.publish('Instrument:family-selected', selectedIndex);
});


FamilyView.prototype.populate = function (instrumentFamilyData) {
  // const selectElement = document.querySelector('#instrument-families')

  instrumentFamilyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = family.name;
    this.element.appendChild(option);
  })
  };
};



module.exports = FamilyView;
