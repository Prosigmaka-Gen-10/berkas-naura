import store from "./store"
import { useSelector } from 'react-redux'

export default function ComponentB() {
    const umurSaya = useSelector(state => state.orang.umur)

    function handleUbahAlamat() {
        store.dispatch({
            type: 'ubahAlamat',
            value: 'bogor'
        })
    }

    return <>
        component B
        umur saya: {umurSaya}
        <br />
        <br />
        <button onClick={handleUbahAlamat}>ubah alamat saya</button>
    </>
}