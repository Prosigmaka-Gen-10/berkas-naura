import store from "./store"
import { useSelector } from 'react-redux'

export default function ComponentC() {
    const alamat = useSelector(state => state.alamat.alamat)

    function handleUbahPekerjaan() {
        store.dispatch({
            type: 'ubahPekerjaan',
            value: 'swasta'
        })
    }

    return <>
        component C
        alamat saya: {alamat}
        <br />
        <br />
        <button onClick={handleUbahPekerjaan}>ubah pekerjaan saya</button>
    </>
}