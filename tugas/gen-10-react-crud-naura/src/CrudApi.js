import axios from "axios"
import { useEffect, useState } from "react"

import Spinner from './Spinner'

export default function CrudApi() {
    const originalForm = {
        title: '',
        author: '',
        release: ''
    }

    const [products, setProducts] = useState([])
    const [formInput, setFormInput] = useState({ ...originalForm })
    const [isLoading, setIsLoading] = useState(true)

    async function getProductList() {
        try {
            setIsLoading(true)
            const response = await axios.get('http://localhost:3010/products')

            console.log(response.data)
            setProducts(response.data)

            console.log('saya harusnya diakhir jalannya')
        } catch (err) {
            console.log(err)
            alert('Terjadi masalah saat memproses data')
        } finally {
            setIsLoading(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formInput.id) {
            updateProduct()
        }
        else {
            createProduct()
        }

        setFormInput({ ...originalForm })
    }

    function createProduct() {
        setIsLoading(true)
        axios
            .post('http://localhost:3010/products', formInput)
            .then(() => {
                getProductList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah saat memproses data')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function updateProduct() {
        setIsLoading(true)
        axios
            .put('http://localhost:3010/products/' + formInput.id, formInput)
            .then(() => {
                getProductList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah saat memproses data')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function deleteProduct(productId) {
        setIsLoading(true)
        axios
            .delete('http://localhost:3010/products/' + productId)
            .then(() => {
                getProductList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah saat memproses data')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function handleInput(event, propTitle) {
        const currentFormInput = { ...formInput }
        currentFormInput[propTitle] = event.target.value
        setFormInput(currentFormInput)
    }

    function prepareUpdate(product) {
        setFormInput({ ...product })
    }

    useEffect(() => {
        getProductList()
    }, [])

    if (isLoading) return <Spinner />

    return <>
        <form onSubmit={event => handleSubmit(event)}>
            <h2>Form Buku:</h2>

            <label>
                Judul Buku:
                <input
                    type="text"
                    value={formInput.title}
                    onChange={event => handleInput(event, 'title')} />
            </label>

            <br /><br />

            <label>
                Penulis:
                <input
                    type="text"
                    value={formInput.author}
                    onChange={event => handleInput(event, 'author')} />
            </label>

            <br /><br />

            <label>
                Tahun Terbit:
                <input
                    type="number" min="1900" max="2099" step="1"
                    value={formInput.release}
                    onChange={event => handleInput(event, 'release')} />
            </label>

            <br /><br />

            <button>
                Submit
            </button>
        </form>

        <br /><hr /><br />

        <h2>Daftar Buku:</h2>
        <ul>
            {products.map(product =>
                <li key={product.id}>
                    {product.title} | {product.author} | {product.release}

                    &nbsp;&nbsp;
                    <button onClick={() => prepareUpdate(product)}>
                        Update
                    </button>

                    &nbsp;&nbsp;
                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>
    </>
}