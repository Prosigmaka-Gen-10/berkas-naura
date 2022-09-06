import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

export default function Others() {
    const params = useParams()

    return <>
        <h3>parameter dinamis</h3>

        <p>{params.others}</p>

        <span> </span>
        <Link to="/">
            Kembali ke Home
        </Link>
    </>
}