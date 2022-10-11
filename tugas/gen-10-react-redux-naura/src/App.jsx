import store from "./store"

import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"
import ComponentD from "./ComponentD"

export default function App() {
  function tampilkanStore() {
    console.log(store.getState())
  }

  function handleUbahNama() {
    store.dispatch({
      type: 'ubahNama',
      value: 'bambang'
    })
  }

  return <>
    <h1>hello world</h1>
    <button onClick={tampilkanStore}>tampilkan isi store</button>
    <br />
    <br />
    <button onClick={handleUbahNama}>ubah nama</button>

    <br /><hr /><br />

    <ComponentA />

    <br /><hr /><br />

    <ComponentB />

    <br /><hr /><br />

    <ComponentC />

    <br /><hr /><br />

    <ComponentD />
  </>
}