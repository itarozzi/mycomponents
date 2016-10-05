import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  if (ComponentsCollection.find().count() === 0) {
    var dummycomponents = [{
      category: 'Transistor',
      code: 'BC857',
      description: 'a test transistor'
    },
    {
      category: 'Microcontroller',
      code: 'AT Tiny81',
      description: 'a test Microcontroller'

    }];

    while (dummycomponents.length > 0) {
      ComponentsCollection.insert(dummycomponents.pop());
    }
    console.log('Added fixtures');
  }
});
