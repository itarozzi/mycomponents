import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'





ComponentsCollection = new Mongo.Collection('components',  {
    idGeneration: 'MONGO',
     transform: (v) => {
              if(v._id._str) { v.id = v._id._str }
              else { v.id = v._id }
              return v
    }
  }
)
