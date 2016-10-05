import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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
