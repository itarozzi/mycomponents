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
