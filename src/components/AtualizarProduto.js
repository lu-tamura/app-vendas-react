import { useState } from 'react'
import './FormUser.css'
import { useParams } from 'react-router-dom'

function FormProductUpdate(){
    const {id} = useParams()
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [user, setUser] = useState('')

    async function updateProduct(){
        
        // integrar com a vossa API

        let api = await fetch("http://localhost:8081/produto/"+id,{
            method:"PUT",
            body:JSON.stringify({
                "preco":preco,
                "quantidade": quantidade,
                "user":user,
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        let resposta = await api.json()
        if(api.ok){
            window.location.href= "/list-products"
            return
        }

        alert("Erro ao fazer atualização do produto!!");

    }

    return(
        <div>
            <form>

                <label htmlFor='name'>Preço:</label>
                <input 
                type='text'
                id='preco' 
                name='preco'
                onChange={(e) => setPreco(e.target.value)}
                /><br/>

                <label htmlFor='name'>Quantidade:</label>
                <input 
                type='text' 
                id='quantidade' 
                name='quantidade'
                onChange={(e) => setQuantidade(e.target.value)}
                /><br/>
            
            <label htmlFor='name'>User:</label>
                <input 
                type='text' 
                id='user' 
                name='user'
                onChange={(e) => setUser(e.target.value)}
                /><br/>

                <input type='button' value="Atualizar" onClick={updateProduct}/>
            </form>
        </div>
    )
}

export default FormProductUpdate