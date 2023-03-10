export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  const [formData, setFormData] = useState(
    {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
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
    if (formData.password === formData.passwordConfirmation) {
      const { passwordConfirmation, ...formDataWithoutpasswordConfirmation } = formData
      const formDataToSent = {"user": formDataWithoutpasswordConfirmation}
      try {
        const response = await authAPI.register(formDataToSent, setUser);
        navigate('/sign_in', { replace: true });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Les mots de passe ne correspondent pas.");
    }  
    
  }

  return (

    <div className='register'>
      <Navbar />
      <section className="signup">
        <div className="container">
          <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Inscription</h2>
                <form action="" className="register-form" id="register-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="username" id="username" placeholder="Nom de compte" onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label><i className="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label><i className="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label><i className="zmdi zmdi-lock-outline"></i></label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmer le mot de passe" onChange={handleChange}/>
                  </div>
                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="S'inscrire"/>
                  </div>
                </form>
              </div>
            <div className="signup-image">
              <figure><img src="src/assets/images/signup-image.jpg" alt="sing up image"/></figure>
              <Link to="/sign_in" className="signup-image-link">Je suis déjà inscrit.</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )

}


import React, { useState } from 'react'
import { useAtom } from 'jotai';
import { Link, useNavigate } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { authAPI } from '../../services/fetchData'

import userAtom from '../../stores/userStore';
import './Register.scss'