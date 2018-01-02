import React from 'react'
import Phaser from 'phaser'

// global.PIXI = require('phaser-ce/build/custom/pixi')
// global.p2 = require('phaser-ce/build/custom/p2')
// global.Phaser = require('phaser-ce')
// global.GAME = null;
// // import Game from '../../../phaser/Game'
// 	if (typeof global.GAME !== undefined) {
// 		global.GAME = new Phaser.Game(500, 500, Phaser.AUTO, 'game-window', null)
// 	}
//
const GameWindow = () => {
	const GAME = new Phaser.Game(500, 500, Phaser.AUTO, 'game-window', null)

	return <div id="game-window">Game!</div>
}


export default GameWindow
