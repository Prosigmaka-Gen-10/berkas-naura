import { useState } from "react"

export default function FormHandling() {
    const [nama, setNama] = useState()
    const [hari, setHari] = useState('selasa')
    const [gender, setGender] = useState('p')
    const [bday, setBday] = useState('2004-10-05')

    function handleInputNama(eventTerserah) {
        setNama(eventTerserah.target.value)
    }

    function handleSubmit() {
        const payload = {
            namaSaya: nama,
            hariIni: hari,
            gender: gender,
            bday: bday
        }

        console.log(payload)
    }

    return <>
        <label>
            Nama Anda: <br />
            <input type="text" onChange={handleInputNama} value={nama} />
        </label>

        <br />
        <br />

        <label>
            Hari: <br />
            <select onChange={event => setHari(event.target.value)} value={hari}>
                <option value="senin">Senin</option>
                <option value="selasa">Selasa</option>
                <option value="rabu">Rabu</option>
                <option value="kamis">Kamis</option>
                <option value="jumat">Jumat</option>
            </select>
        </label>

        <br />
        <br />


        Jenis Kelamin: <br />
        <label>
            <input
                type="radio"
                value="l"
                name="gender"
                onChange={event => setGender(event.target.value)}
                checked={gender === 'l' ? true : false} />
            Laki laki
        </label>
        &nbsp;&nbsp;
        <label>
            <input
                type="radio"
                value="p"
                name="gender"
                onChange={event => setGender(event.target.value)}
                checked={gender === 'p' ? true : false} />
            Perempuan
        </label>

        <br />
        <br />

        <label>
            Tanggal Lahir: <br />
            <input
                type="date"
                value={bday}
                name="bday"
                onChange={event => setBday(event.target.value)} />

        </label>

        <br />
        <br />

        <button onClick={handleSubmit}>
            submit
        </button>
    </>
}