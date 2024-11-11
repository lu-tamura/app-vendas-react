import FormProductUpdate from './FormProductUpdate';
import './ListUser.css'
import { useState, useEffect } from 'react'

function ListProducts() {

    const [products, setProduct] = useState([]);

    async function listProducts() {
        const api = await fetch("http://localhost:8081/produto/list")
        const resposta = await api.json()

        if (api.ok) {
            setProduct(resposta)
        } else {
            alert("Erro")
            return false
        }

    }

    function updateProduct(id){
        window.location.href= "/update-product/" + id
    }

    useEffect(() => {
        listProducts()
    }, []);


    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>PREÇO</th>
                    <th>QUANTIDADE</th>
                    <th>Atualizar</th>
                </tr>
                <tbody>
                    {products.map((products) => (
                        <tr>
                            <th>{products.id}</th>
                            <th>{products.preco}</th>
                            <th>{products.quantidade}</th>
                            <input type='button' value="Atualizar" onClick={() => updateProduct(products.id)} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListProducts