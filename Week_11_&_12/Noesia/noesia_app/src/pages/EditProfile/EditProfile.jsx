// Hooks
import { useState, useEffect } from 'react'
import { useFetchGet, useFetchPatch } from '../../hooks/fetchData/useFetchData';
import { useNavigate } from "react-router-dom";

// Components
import Button from '../../components/Button/Button'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

// Assets
import ProfileImg from "../../assets/images/background.webp"

// SCSS
import './EditProfile.scss'

const EditProfile = () => {

  const navigate = useNavigate();

  // User
  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useFetchGet('member-data', 'user', auth_token);
  const current_user = data?.user;
  const { mutate: updateUser, isSuccess: updateUserSuccess } = useFetchPatch(`users`, auth_token);

  const [formData, setFormData] = useState({
    id: current_user?.id,
    username: current_user?.username,
    email: current_user?.email,
    password: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const [formPasswordData, setFormPasswordData] = useState({
    actual_password: '',
    new_password: '',
    new_password_confirmation: '',
  });
  
  const handlePasswordChange = (e) => {
    setFormPasswordData({
      ...formPasswordData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { actual_password, new_password, new_password_confirmation } = formPasswordData;
    let updatedFormData = { ...formData };
    if (new_password === '') {
      updatedFormData.password = actual_password;
    } else {
      if (new_password === new_password_confirmation) {
        updatedFormData.password = new_password;
      }
    }
    setFormData(updatedFormData);
    updateUser(updatedFormData);
  };  

  useEffect(() => {
    if (updateUserSuccess) {
      navigate(`/profil/${current_user?.id}`)
    }
  }, [updateUserSuccess]);

  return (
    <div className='edit'>
      <div className="edit-wrapper">
        <div className="edit-form">
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/>
            <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
            <input type="password" name='actual_password' placeholder='Mot de passe actuel' value={formPasswordData.actual_password} onChange={handlePasswordChange}/>
            {/* <input type="password" name='new_password' placeholder='Nouveau mot de passe' value={formPasswordData.new_password} onChange={handlePasswordChange}/> */}
            {/* <input type="password" name='new_password_confirmation' placeholder='Confirmer le mot de passe' value={formPasswordData.new_password_confirmation} onChange={handlePasswordChange}/> */}
            <Button type="submit" content="Editer le profil"/>            {isLoading && <p>Loading ...</p>}
            {isError && <p>Une erreur s'est produite : {error.message}</p>}
          </form>
        </div>
        <div className="edit-side">
          <img src={ProfileImg} alt='Photo de profil' />
          <ButtonLink content="Retour au profil" path={`/profil/${current_user?.id}`}/>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
