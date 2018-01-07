global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

import Player from '../sprites/Player'

class Play extends Phaser.State {
	constructor(){
		super()
	}
	init() {
	}

	preload(){
	}

	create(){

		this.game.add.tileSprite(0, 0, 1920, 1920, 'bg')
		this.game.world.setBounds(0, 0, 1920, 1920)
		// Group
		this.players = this.add.group()
		// Players Generations

	}

	addPlayer(){
		this.player = new Player({
			game: this.game,
			x: 300,
			y: 300,
			asset: 'ship',
		});
	}
}

export default Play
