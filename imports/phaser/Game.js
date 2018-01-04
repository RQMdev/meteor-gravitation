global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

import Boot from './states/Boot'
import Play from './states/Play'

class Game extends Phaser.Game {
	constructor(){
		super(1200, 600, Phaser.AUTO, 'game-window', null)
		// this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
		this.state.add('Boot', Boot, false)
		this.state.add('Play', Play, false)
		this.state.start('Boot')
	}

	create(){
	}
}

export default Game
