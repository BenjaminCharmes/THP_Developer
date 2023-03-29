// Hooks
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useFetchPost } from '../../hooks/fetchData/useFetchData';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import Button from '../../components/Button/Button'

// Assets
import LoginImg from '../../assets/images/login.webp';

// SCSS
import './Login.scss'

const Login = () => {

  const navigate = useNavigate();

  const { mutate: logInUser, isLoading, isSuccess, isError, error } = useFetchPost('users/sign_in');

  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = { "user": formData }
    logInUser(formDataToSend, {
      onSuccess: () => {
        navigate("/");
      }
    })
  }

  return (
    <>
      <div className='login'>
        <div className="login-wrapper">
          <div className="login-form">
            <form action="" onSubmit={handleSubmit}>
              <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
              <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
              <Button type="submit" content="Se connecter"/>
              {isLoading && <p>Loading ...</p>}
              {isError && <p>Une erreur s'est produite : {error.message}</p>}
              {isSuccess && <p>Connection réussie!</p>}
            </form>
          </div>
          <div className="login-side">
            <img src={LoginImg} alt="Image d'une pyramide dans une jungle" />
            <ButtonLink content="Créer un nouveau compte" path="/inscription"/>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Login
