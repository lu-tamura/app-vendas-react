import { useState } from 'react'
import './FormProduto.css'

function FormProduct(){
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [user, setUser] = useState('')

    async function cadastroProduct(){
        
        if(preco=== "" || quantidade==="" || user === ""){
            alert("Preencha todos os campos")
            return
        }
        
        // integrar com a vossa API

        let api = await fetch("http://localhost:8081/produto/save",{
            method:"POST",
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
            alert("Cadastro Realizado!")
            return
        }

        alert("Erro ao fazer o cadastro!!");

    }

    return(
        <div>
            <form>
                <h2>Cadastra-se</h2>
                <label htmlFor='name'>Preço:</label>
                <input 
                type='text' 
                id='preco' 
                name='preco'
                onChange={(e)=> setPreco(e.target.value)}
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
                        
                <input type='button' value="Cadastrar Produto" onClick={cadastroProduct}/>
            </form>
        </div>
    )
}

export default FormProduct