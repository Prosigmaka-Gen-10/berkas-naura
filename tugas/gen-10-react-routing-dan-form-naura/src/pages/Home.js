import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

export default class Home extends Component {
	render() {
		return <>
			<h3>ceritanya ini Home</h3>
			<Link to="/test">
				Parameter
			</Link>
			<span> </span>
			<Link to="/menu">
				Menu
			</Link>
		</>
	}
}