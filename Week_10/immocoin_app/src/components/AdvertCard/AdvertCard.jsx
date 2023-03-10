export default function AdvertCard({ advert }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [content, setContent] = useState({
    front: { backgroundImage: `src/assets/images/${advert.picture_url}` },
    back: {
      title: advert.title,
      description: advert.description,
      price: advert.price,
      category: advert.category,
      room: advert.room,
      surface: advert.surface,
      address: advert.address, 
      city: advert.city, 
      zip_code: advert.zip_code, 
      garden: advert.garden, 
      garage: advert.garage, 
      picture_url: advert.picture_url,
      user_id: advert.user_id
    },
  });

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <div className='card' onClick={handleFlip}>
        { isFlipped ? (
          <div className='card-back'>
            <h2>{content.back.title}</h2>
            <p>{content.back.description}</p>
            <p>Price: {content.back.price}</p>
            <p>Category: {content.back.category}</p>
            <p>Room: {content.back.room}</p>
            <p>Surface: {content.back.surface}</p>
            <p>Address: {content.back.address}</p>
            <p>City: {content.back.city}</p>
            <p>Zip_code: {content.back.zip_code}</p>
            <p>Garage: {content.back.garage}</p>
            <p>Garden: {content.back.garden}</p>
          </div>
        ) : (
            <img src={content.front.backgroundImage} alt={content.back.description}/>   
        )};    
     </div>
    </>
  )
}

import React, { useState } from 'react'

import './AdvertCard.scss'