import React from 'react'

import Game from '../../../phaser/Game'
import { styles } from './styles'

class GameWindow extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		// Create the GAME INSTANCE

		this.GAME = new Game()
	}

	componentWillUnmount(){
		// Destroy the GAME INSTANCE
		this.GAME = null
	}

	render(){
		let visible = this.props.visible
		let style = {}
		style = visible ? {...styles} : {...styles, display: 'none'}

		return <div id="game-window" style={style}></div>
	}
}

export default GameWindow
