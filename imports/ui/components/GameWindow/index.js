import React from 'react'

import Game from '../../../phaser/Game'

class GameWindow extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.GAME = new Game()
	}

	componentWillUnmout() {
		this.GAME = undefined;
	}

	render() {
		let visible = this.props.visible;
		let style = {};
		style = visible ? {display: 'block'} : {display: 'none'}

		return (
			<div id="game-window" style={style}></div>
		);
	}
}

export default GameWindow
