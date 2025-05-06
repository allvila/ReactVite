import { useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: 'hsaushi265168',
      name: 'Lucas',
      idade: 20,
      email: 'lucas@email.com',
    },
    {
      id: 'yuewqkls38584',
      name: 'Melissa',
      idade: 19,
      email: 'melisasa@email.com',
    },
  ];

  return (
  <div className='container'>
     <form>
        <h1>Cadastro de Usuários </h1>
        <input placeholder="Nome" name="name" type="text" /> {/* <-- Linha corrigida */}
        <input placeholder="Idade" name= 'idade' type = 'number'/>
       <input placeholder="Email" name= 'email' type = 'email'/>
      <button>CADASTRAR</button>
    </form>

      {users.map((user) => (

        <div key={user.id} className='usuario-card'>

          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.idade}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} ></img>
          </button>

        </div>


      ))}

    

  </div>
  )
}

export default Home
