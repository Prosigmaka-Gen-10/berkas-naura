import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Dessert2() {
    return <>
        <h3>Cheesecake</h3>
        <Link to='/menu/makanan/dessert/002/detail2'>
            <button>detail</button>
        </Link>

        <Outlet />
    </>
}