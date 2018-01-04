global.PIXI = require('phaser-ce/build/custom/pixi')
global.p2 = require('phaser-ce/build/custom/p2')
global.Phaser = require('phaser-ce')

class Player extends Phaser.Sprite {
	constructor({game, x, y, asset}){
		super(game, x, y, asset)
		this.game.add.existing(this)
		this.anchor.setTo(0.5)
		this.game.physics.arcade.enable(this)
		this.cursors = this.game.input.keyboard.createCursorKeys()
		this.game.camera.follow(this)
		this.body.drag.x = 200
		this.body.drag.y = 100
		this.body.collideWorldBounds = true
	}

	create(){
	}

	update(){
		this.cursors.up.isDown ? (
			this.game.physics.arcade.accelerationFromRotation(this.rotation, 900, this.body.acceleration)
		) : (
			this.body.acceleration.set(0)
		)



		if (this.cursors.left.isDown) this.body.angularVelocity = -200
		if (this.cursors.right.isDown) this.body.angularVelocity = 200
		if (!this.cursors.left.isDown && !this.cursors.right.isDown)
			this.body.angularVelocity = 0
	}
}

export default Player
