export default function Adverts() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [adverts, setAdverts] = useState([]);
  const [searchCity, setSearchCity] = useState(null);
  const galleryRef = useRef(null);
console.log(adverts)
  const handleChange = (e) => {
    e.target.value ? setSearchCity({
      [e.target.name]: e.target.value,
    }) : setSearchCity(
      null
    )
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await advertAPI.getAdverts();
        setAdverts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [adverts]);

  const handleMouseMove = e => {
    const gallery = galleryRef.current;
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
    const maxX = gallery.scrollWidth - window.innerWidth;
    const maxY = gallery.scrollHeight - window.innerHeight;
    const panX = maxX * mousePosition.x * -1;
    const panY = maxY * mousePosition.y * -1;
    gallery.style.transform = `translate(${panX}px, ${panY}px)`;
  };

  return (

    <div className='adverts' onMouseMove={handleMouseMove}>
      <div className='gallery' ref={galleryRef}>
        {searchCity === null ? (
          adverts.map(advert => (
            <AdvertCard advert={advert} key={advert.id}/>
          ))
        ) : (
          adverts.filter(advert => advert.city.toUpperCase() == searchCity.city.toUpperCase()).map(advert => (
            <AdvertCard advert={advert} key={advert.id}/>
          ))
        )}
      </div>
      <div className="signin-form">
        <form action="" className="register-form" id="login-form">
            <div className="form-group">
                <input type="text" name="city" id="city" placeholder="Localisation" onChange={handleChange}/>
            </div>
        </form>
      </div>
      <Link to="/" id='home-link' className='meta-link'>
        <span>
          Get back to Home
        </span>
      </Link>  
    </div>
  )
}


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import AdvertCard from '../../components/AdvertCard/AdvertCard'

import { advertAPI } from '../../services/fetchAdverts'

import './Adverts.scss';
