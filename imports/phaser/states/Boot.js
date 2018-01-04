global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

class Boot extends Phaser.State {
	constructor(){
		super()
	}
	init() {
	}

	preload(){
		this.load.image('bg', 'sprites/debug-bg.png')
		this.load.image('ship', 'sprites/ship.png')
	}

	create(){
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.state.start('Play')
	}
}

export default Boot
