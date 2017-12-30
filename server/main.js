import { Meteor } from 'meteor/meteor'
// import

Meteor.startup(() => {
  // code to run on server at startup
});

// Users Publication
Meteor.publish('userData', function(){
  return Meteor.users.find({_id: this.userId});
});

Meteor.publish('usersOnline', function(){
  return Meteor.users.find({"status.online": true},
    {fields: {username: 1, status: 1} });
});
