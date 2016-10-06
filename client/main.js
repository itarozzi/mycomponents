import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Session.setDefault('selectedComponentDetailId', '');

Template.componentsList.helpers({
  create: function(){

  },
  rendered: function(){
  },
  destroyed: function(){
  },
  componentsNr: function() {
    return 11;
  },
  components() {
    return ComponentsCollection.find({});
  },
  componentsCount() {
    return ComponentsCollection.find({}).count();
  }
});

Template.componentsList.events({
  "click .table-row": function(event, template){
    let  selectedId = '';

    if (typeof selectedId === 'string' || selectedId instanceof String) {
      selectedId = "s" + event.currentTarget.id;

    } else {
      selectedId = event.currentTarget.id._id;
    }

    console.log("ROW Click" + selectedId);
    Session.set('selectedComponentDetailId', selectedId);
  }
});


Template.componentsRow.helpers({
  isDetailVisible() {

    const currentId = this._id;
    const selId = Session.get('selectedComponentDetailId');

    

    return selId === currentId ? true : false;
  }
});
