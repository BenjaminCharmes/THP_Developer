// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchPost } from "../../hooks/fetchData/useFetchData";

// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import Button from '../../components/Button/Button'

// Assets
import RGPD from '../../assets/pdf/RGPD_Noesia.pdf';
import RegisterImg from '../../assets/images/register.webp';

// SCSS
import './Register.scss'

const Register = () => {

  const navigate = useNavigate();

  const { mutate: registerUser, isLoading, isSuccess, isError, error } = useFetchPost('users');

  const localStorageDoorPassed = localStorage.getItem('is_door_passed');

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_door_passed: localStorageDoorPassed ? true : false,
    accept_rgpd: false,
  });
  
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.password_confirmation && formData.accept_rgpd) {
      setIsPasswordInvalid(false);
      localStorage.removeItem('is_door_passed');
      const { password_confirmation, accept_rgpd, ...DataWithoutPasswordConfirmation } = formData;
      const dataToSend = { user: DataWithoutPasswordConfirmation };
      registerUser(dataToSend);
    } else {
      setIsPasswordInvalid(true);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/connexion');
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <div className="register">
        <div className="register-wrapper">
          <div className="register-form">
            <form action="" onSubmit={handleSubmit}>
              <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/><br />
              <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/><br />
              <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/><br />
              <input type="password" name='password_confirmation' placeholder='Confirmer votre mot de passe' value={formData.password_confirmation} onChange={handleChange}/><br />
              <div className="rgpd">
                <input type="checkbox" name="accept_rgpd" id="accept_rgpd" checked={formData.accept_rgpd} onChange={handleChange} />
                <small>
                  Veuillez accepter la politique de confidentialité RGPD. Pour en savoir plus sur la
                  gestion de vos données personnelles et pour exercer vos droits, reportez-vous à
                  la <a href={RGPD}>politique de confidentialité.</a>
                </small><br />
              </div> 
              <Button type="submit" content="S'inscrire"/>
              {isLoading && <p>Loading ...</p>}
              {isError && <p>Une erreur s'est produite : {error.message}</p>}
              {isSuccess && <p>Inscription réussie!</p>}
              {isPasswordInvalid && <p>Les mots de passe ne correspondent pas.</p>}
            </form> 
          </div>
          <div className="register-side">
            <img src={RegisterImg} alt="Image d'une pyramide dans une jungle" />
            <ButtonLink content="J'ai déjà un compte" path="/connexion"/>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Register;
