import store from "./store"
import { useSelector } from 'react-redux'

export default function ComponentD() {
    const pekerjaan = useSelector(state => state.pekerjaan.pekerjaan)

    return <>
        component D
        pekerjaan saya: {pekerjaan}
    </>
}