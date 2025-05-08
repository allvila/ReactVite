import { useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({

    name: '',

    age: '',

    email: ''

  });



  async function getUsers() {

    try {

      const usersFromApi = await api.get('/usuarios');

      setUsers(usersFromApi.data);

    } catch (error) {

      console.error("Erro ao buscar usuários:", error.message);

    }

  }



 

  const handleDelete = async (id) => {

    try {

      await api.delete(`/usuarios/${id}`);

      await getUsers();

    } catch (error) {

      console.error("Erro ao deletar usuário:", error.message);

    }

  };



  useEffect(() => {

    getUsers();

  }, []);



  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post('/usuarios', formData);

      await getUsers();

      setFormData({ name: '', age: '', email: '' });

    } catch (error) {

      console.error("Erro ao cadastrar usuário:", error.message);

    }

  };



  return (

    <div className='container'>

      <form onSubmit={handleSubmit}>

        <h1>Cadastro de Usuários</h1>

        <input placeholder="Nome" name="name" type="text" value={formData.name} onChange={handleChange} />

        <input placeholder="Idade" name="age" type="number" value={formData.age} onChange={handleChange} />

        <input placeholder="Email" name="email" type="email" value={formData.email} onChange={handleChange} />

        <button type="submit">CADASTRAR</button>

      </form>



      {users.map((user) => (

        <div key={user.id} className='usuario-card'>

          <div>

            <p>Nome: {user.name}</p>

            <p>Idade: {user.age}</p>

            <p>Email: {user.email}</p>

          </div>

          <button onClick={() => handleDelete(user.id)}>

            <img src={Trash} alt="Delete" />

          </button>

        </div>

      ))}

    </div>

  );

}



export default Home; crie um readmi para mim
