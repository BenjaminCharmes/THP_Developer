export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSent = { "user": formData }
    try {
      const response = await authAPI.login(formDataToSent, setUser);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  }

  return (
    <div className='login'>
      <Navbar />
      <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                  <div className="signin-image">
                      <figure><img src="./src/assets/images/signin-image.jpg" alt="sing up image" /></figure>
                      <Link to="/register" className="signup-image-link">Créer un compte</Link>
                  </div>
                  <div className="signin-form">
                      <h2 className="form-title">Se connecter</h2>
                      <form action="" className="register-form" id="login-form" onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label><i className="zmdi zmdi-account material-icons-name"></i></label>
                              <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label><i className="zmdi zmdi-lock"></i></label>
                              <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange}/>
                          </div>
                          <div className="form-group form-button">
                              <input type="submit" name="signin" id="signin" className="form-submit" value="Se connecter"/>
                          </div>
                      </form>
                  </div>
                </div>
            </div>
        </section>
      <Footer />
    </div>
  )

}


import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import { authAPI } from '../../services/fetchData'
import userAtom from '../../stores/userStore';

import './Login.scss'

