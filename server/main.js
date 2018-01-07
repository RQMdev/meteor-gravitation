import { Meteor } from 'meteor/meteor'
// import
import Games from '../imports/api/collections/Games'

Meteor.startup(() => {
  // Delete old instances of Games
  Games.remove({})
});

// Users Publication
Meteor.publish('userData', function(){
  return Meteor.users.find({_id: this.userId});
});

Meteor.publish('usersOnline', function(){
  return Meteor.users.find({"status.online": true},
    {fields: {username: 1, status: 1} });
});
