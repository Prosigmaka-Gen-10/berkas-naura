import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Menu() {
    return <>
        <p>Ini Menu</p>

        <Link to="/">
            Kembali ke Home
        </Link>
        <hr />
        <nav>
            <Link to='/menu/form'>
                Form Handling
            </Link>
            <span> </span>
            <Link to='/menu/pakaian'>
                Pakaian
            </Link>
            <span> </span>
            <Link to='/menu/makanan'>
                Makanan
            </Link>
        </nav>

        <Outlet />
    </>
}