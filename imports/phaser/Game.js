global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

class Game extends Phaser.Game {
	constructor(){
		super(500, 500, Phaser.AUTO, 'game-window', null)
	}
}

export default Game
