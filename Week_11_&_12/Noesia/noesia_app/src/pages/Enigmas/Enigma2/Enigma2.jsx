import React from 'react';

import Carousel from '../../../components/Carousel/Carousel';
import CarouselCard from '../../../components/CarouselCard/CarouselCard';
import Sun from '../../../components/Sun/Sun';
import CardImg01 from '../../../assets/images/discover01.webp';
import CardImg02 from '../../../assets/images/discover02.webp';
import CardImg03 from '../../../assets/images/discover03.webp';
import CardImg04 from '../../../assets/images/discover04.webp';

import './Enigma2.scss';

export default function Enigma2() {

  const CARDS = 4;
  const images = [CardImg01, CardImg02, CardImg03, CardImg04];

  return (
    <>
      <div className='enigma2'>
        <div className='enigma2-top'>
          <Sun fireCount={20} />
        </div>
        <div className='enigma2-bottom'>
          <div className='enigma2-bottom-left'>
            <div className='buttons'>
              Buttons
            </div>
          </div>
          <div className='enigma2-bottom-right'>
          <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
              <CarouselCard img={images[i]} key={i}/>
            ))}
          </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
