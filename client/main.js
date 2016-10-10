import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


function distinct(collection, field, filter) {
  if (filter) {
      console.log("@@@@@@@@@@");
     return _.uniq(collection.find(filter, {
      sort: {[field]: 1}, fields: {id_: 1,[field]: 1}
    }).map(x => x[field]), true);

  } else {
    return _.uniq(collection.find({}, {
      sort: {[field]: 1}, fields: {id_: 1,[field]: 1}
    }).map(x => x[field]), true);

  }
}



Template.filterComponents.helpers({
  getCategories: function (cat) {
    list = (distinct(ComponentsCollection, 'category'));
    return list;
  },
  isCatSelected: function (type) {
      return (Session.get('filterCategory') == this) ? 'selected' : '';
  },

  getTypes: function () {
    const cat = Session.get('filterCategory');
    const filter = {};
    if (cat == "--ALL--") {
      console.log('D1');
    } else {
      console.log('D2');
      filter.category = cat;
    }

    console.log("@@@ > " + cat);

    return distinct(ComponentsCollection, 'type', filter);
  },
  isTypeSelected: function () {
    return (Session.get('filterType') == this) ? 'selected' : '';
  }
});


Template.filterComponents.events({
  "change #filterCategory": function(event, template){
    const cat = event.currentTarget.value;
    Session.set ('filterCategory', cat );

  },
  "change #filterType": function(event, template){

    const type = event.currentTarget.value;
    Session.set ('filterType', type );
  }

});


Template.componentsList.helpers({
  components() {
    const filterCat = Session.get('filterCategory');
    const filterType = Session.get('filterType');

    console.log("FILTER : " + filterCat + " - " + filterType);
    var filter = {
    };

    if (filterCat != '--ALL--') {
      filter.category = filterCat;
    }
    if (filterType != '--ALL--') {
      filter.type = filterType;
    }
    return ComponentsCollection.find(filter, {sort: {category: 1}});
  },
  componentsCount() {
    return ComponentsCollection.find({}).count();
  }
});

Template.componentsList.events({
  "click .table-row": function(event, template){
    let  selectedId = event.currentTarget.id;

    console.log("ROW Click" + selectedId);


    Session.set('selectedComponentDetailId', (Session.equals("selectedComponentDetailId", selectedId) ? '' : selectedId));
  }
});


Template.componentsRow.helpers({
  isDetailVisible() {

    const currentId = this._id._str;
    const selId = Session.get('selectedComponentDetailId');

    return selId === currentId ? true : false;
  }
});
