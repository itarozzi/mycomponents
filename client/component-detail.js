import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './component-detail.html';

Session.setDefault('selectedComponentDetailId', '');

function distinct(collection, field) {
  return _.uniq(collection.find({}, {
    sort: {[field]: 1}, fields: {id_: 1,[field]: 1}
  }).map(x => x[field]), true);
}

Template.selectCategory.helpers({
  create: function(){
  },
  rendered: function(){
  },
  destroyed: function(){
  },
  catNameId: function () {

    return distinct(ComponentsCollection, 'category');
    // var data = ComponentsCollection.find().fetch();
    // var distinctData = _.uniq(data, false, function(d) {return d.category});
    // return _.pluck(distinctData, "category");


// , find({}, {
    //   fields: {
    //     category: 1,
    //     _id: 1
    //   }
    // }));
  },
  isSelected: function () {
    //return Session.equals('selectedHouseId', this._id) ? 'selected' : '';
  }
});

Template.componentDetail.events({
  "click #foo": function(event, template){

  }
});
