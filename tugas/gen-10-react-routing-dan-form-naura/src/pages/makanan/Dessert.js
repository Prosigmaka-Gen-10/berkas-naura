import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Dessert() {
	return <>
		<Link to='/menu/makanan/dessert/001'>
			<img src="https://cdn.tasteatlas.com//Images/Dishes/77a8cc44cb5e41aabb41f7a0cf3a3dc2.jpg?w=905&h=510" width="400" />
		</Link>

		<Link to='/menu/makanan/dessert/002'>
			<img src="https://cdn.tasteatlas.com//images/dishes/d86797bdaf964fd9a570c93ae3d5bb48.jpg?w=905&h=510" width="400" />
		</Link>

		<Outlet />
	</>
}