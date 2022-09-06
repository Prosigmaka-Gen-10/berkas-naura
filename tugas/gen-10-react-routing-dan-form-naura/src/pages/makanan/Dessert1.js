import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Dessert1() {
    return <>
        <h3>Namagashi</h3>
        <Link to='/menu/makanan/dessert/001/detail1'>
            <button>detail</button>
        </Link>

        <Outlet />
    </>
}