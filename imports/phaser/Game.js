global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

import Boot from './states/Boot'

class Game extends Phaser.Game {
	constructor(){
		super(1200, 600, Phaser.AUTO, 'game-window', null)
		this.state.add('Boot', Boot, true)
		this.state.start('Boot')
	}

	create(){
		this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
	}
}

export default Game
