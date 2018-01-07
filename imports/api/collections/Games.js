import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

import Game from '../../phaser/Game'

export default Games = new Mongo.Collection('games')

if (Meteor.isServer){
	Meteor.publish('games', () => Games.find({}))
}

Meteor.methods({
	'Games.create'(){
		let GamesArray = Games.find({}).fetch();
		gameId = GamesArray.length === 0 ?
		Games.insert({}) : GamesArray[0]._id;
		return gameId
	},

	'Games.newPlayer'(gameId){
		// Ad a new Player Object into the Game
		Games.update({_id: gameId}, { $push: {players: {id: this.userId}}})
	},

	'Games.removePlayer'(gameId){
		// Remove the Player from the Game
		Games.update({_id: gameId}, { $pull: {players: {id: this.userId}}})
	}
});
