import { useState } from 'react'
import './FormUser.css'
import { useParams } from 'react-router-dom'
import ListUser from './ListarUsuario'

function Atualizar(){
    const { id } = useParams()
    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf_cnpj, setCpfCnpj] = useState('')

    async function Atualizar(){
        
        if(name=== "" || email==="" || password === "" || cpf_cnpj === ""){
            alert("Preencha todos os campos")
            return
        }
        
        // integrar com a vossa API

        let api = await fetch("http://localhost:8081/user/"+id,{
            method:"PUT",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password": password,
                "cpf_cnpj":cpf_cnpj,
                "is_active":1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        let resposta = await api.json()
        if(api.ok){
            window.location.href = "/listar-user"
            return
        }

        alert("Erro ao atualizar!!");

    }

    return(
        <div>
            <form>
                <h2>Atualizar cadastro</h2>
                <label htmlFor='name'>Nome:</label>
                <input 
                type='text' 
                id='name'
                name='name'
                onChange={(e)=> setNome(e.target.value)}
                /><br/>

                <label htmlFor='name'>Email:</label>
                <input 
                type='email' 
                id='email' 
                name='email'
                onChange={(e)=> setEmail(e.target.value)}
                /><br/>

                <label htmlFor='name'>Senha:</label>
                <input 
                type='password'
                id='senha' 
                name='senha'
                onChange={(e) => setPassword(e.target.value)}
                /><br/>

                <label htmlFor='name'>CPF / CNPJ:</label>
                <input 
                type='text' 
                id='cpf_cnpj' 
                name='cpf_cnpj'
                onChange={(e) => setCpfCnpj(e.target.value)}
                /><br/>
                        
                <input type='button' value="Atualizar" onClick={Atualizar}/>
            </form>
        </div>
    )
}

export default Atualizar