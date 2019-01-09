const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function (event) {

  PubSub.publish('Instrument:families-ready', this.data);
  PubSub.subscribe('Instrument:family-selected', (event) => {
    const index = event.detail;
    const familySelected = this.selectFamily(index);
    PubSub.publish('SelectedFamily:ready', familySelected);

  })
};


  InstrumentFamilies.prototype.selectFamily = function (index) {
  return this.data[index];
};


module.exports = InstrumentFamilies;
