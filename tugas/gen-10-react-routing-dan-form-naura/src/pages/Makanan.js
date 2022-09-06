import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Makanan () {
	return <>
		<p>Makanan</p>

        <nav>
            <Link to='/menu/makanan/appetizer'>
                Appetizer
            </Link>
            <span> </span>
            <Link to='/menu/makanan/maincourse'>
                Main Course
            </Link>
            <span> </span>
            <Link to='/menu/makanan/dessert'>
                Dessert
            </Link>
        </nav>

        <Outlet />
	</>
}