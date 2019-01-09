const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const FamilyDetailView = require('./views/family_detail_view.js');
const FamilyView = require('./views/family_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  // only use . for classes e.g. nav.#blah, don't need it if using and id as they are specific

  const familyView = new FamilyView(selectElement);
  familyView.bindEvents();

  const familyDetailView = new FamilyDetailView();
  familyDetailView.bindEvents();


  // this const creates this.data we use in the model and calls bind events
  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();


});
