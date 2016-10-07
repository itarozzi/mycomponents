import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './component-detail.html';


function distinct(collection, field) {
  return _.uniq(collection.find({}, {
    sort: {[field]: 1}, fields: {id_: 1,[field]: 1}
  }).map(x => x[field]), true);
}


Template.registerHelper('selectedComponent', function () {
  const selectedId = Session.get('selectedComponentDetailId')
  console.log("@@@@@@1 " + selectedId);
  const selectedComponent = ComponentsCollection.findOne(new Meteor.Collection.ObjectID(selectedId));
  console.log("@@@@@@2 " + selectedComponent);
  return selectedComponent;
  }
);


Template.selectCategory.helpers({
  getCategories: function () {
    return distinct(ComponentsCollection, 'category');
  },
  isSelected: function () {
    return (ComponentsCollection.findOne({_id: new Meteor.Collection.ObjectID( Session.get('selectedComponentDetailId'))}).category == this) ? 'selected' : '';
  }
});

Template.selectType.helpers({
  getTypes: function () {
    return distinct(ComponentsCollection, 'type');
  },
  isSelected: function () {
    return (ComponentsCollection.findOne({_id: new Meteor.Collection.ObjectID( Session.get('selectedComponentDetailId'))}).type == this) ? 'selected' : '';
  }
});

Template.componentDetail.events({
  "click #foo": function(event, template){

  }
});
