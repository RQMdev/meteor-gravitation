import { Meteor } from 'meteor/meteor'

Meteor.publish('userData', function(){
  return Meteor.users.find({_id: this.userId}); 
});

Meteor.publish('userData', function(){
  return Meteor.users.find({_id: this.userId},
    {fields: {}});
});
