import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

export default class Home extends Component {
	render () {
		return <>
			<p>ceritanya ini Home</p>
			<Link to="/menu">
				Menu
			</Link>
		</>
	}
}