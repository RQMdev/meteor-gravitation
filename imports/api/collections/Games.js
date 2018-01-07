import { Mongo } from 'meteor/mongo'

export default Games = new Mongo.Collection('games')

if (Meteor.isClient){
	Meteor.publish('games', () => Games.find({}))
}
