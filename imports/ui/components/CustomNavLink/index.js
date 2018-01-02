import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { styles } from './styles'

const CustomNavLink = ({label, exact, to, style = styles.link, activeStyle = styles.active}) => (
	<NavLink
		exact={exact}
		to={to}
		style={style}
		activeStyle={activeStyle}
	>{label}</NavLink>
);

CustomNavLink.propTypes = {
	label: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	exact: PropTypes.bool,
	style: PropTypes.object,
	activeStyle: PropTypes.object,
}

export default CustomNavLink
