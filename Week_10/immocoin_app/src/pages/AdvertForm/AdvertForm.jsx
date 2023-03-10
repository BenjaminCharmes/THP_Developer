export default function AdvertForm() {
  const navigate = useNavigate();
  const current_user = useAtomValue(userAtom)
  const current_user_id = current_user.user.id

  const [formData, setFormData] = useState(
    {
      title: "",
      price: 0,
      description: "",
      category: "",
      room: 0,
      surface: 0,
      address: "",
      city: "",
      zip_code: "",
      garden: 0,
      garage: 0,
      picture_url: "",
      user_id: current_user_id,
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
    console.log(formData)
    try {
      const response = await advertAPI.postAdvert(formData);
      navigate('/annonces', { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar />
      <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Votre annonce</h2>
                        <form action="" className="register-form" id="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="title" id="title" placeholder="Titre de l'annonce" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="description" id="description" placeholder="Description" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="category" id="category" placeholder="Catégorie" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="number" name="price" id="price" placeholder="Prix (€)" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="number" name="room" id="room" placeholder="Nombre de piéce" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="number" name="garden" id="garden" placeholder="Jardin" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="number" name="garage" id="garage" placeholder="Nombre de garage" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="number" name="surface" id="surface" placeholder="Surface (m²)" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="address" id="address" placeholder="Adresse" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="city" id="city" placeholder="Ville" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="zip_code" id="zip_code" placeholder="Code postal" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="picture_url" id="picture_url" placeholder="Liens de la photo" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="checkbox" name="garden" id="garden" placeholder="Jardin" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="checkbox" name="garage" id="garage" placeholder="Garage" onChange={handleChange}/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Poster votre annonce"/>
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

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom'

import userAtom from '../../stores/userStore';
import { advertAPI } from '../../services/fetchAdverts';

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import './AdvertForm.scss';


