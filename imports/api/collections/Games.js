import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

import Game from '../../phaser/Game'

export default Games = new Mongo.Collection('games')

if (Meteor.isServer){
	Meteor.publish('games', () => Games.find({}))
}

Meteor.methods({
	'games.create'(){
		Games.insert(
			new Game()
		)
	}
});
