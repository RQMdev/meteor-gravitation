global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

class Boot extends Phaser.State {
	init() {
	}

	preload(){
		console.log('boot.preload() called!')
		this.load.image('bg', 'meteor://imports/assets/img/debug-grid-1920x1920.png')
	}

	create(){
		this.background = this.add.tileSprite(0, 0, 1920, 1920, 'bg')
	}
}

export default Boot
