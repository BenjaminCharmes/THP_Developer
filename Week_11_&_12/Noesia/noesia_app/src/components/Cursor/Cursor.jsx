// Hooks
import { useEffect } from 'react'

// SCSS
import './Cursor.scss'

export default function Cursor() {

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', "top: "+(e.pageY - 10)+"px; left: " + (e.pageX - 10) +"px")
        });

        document.addEventListener('click', () => {
            cursor.classList.add('expand');
            setTimeout(() => {
                cursor.classList.remove('expand');
            }, 500);
        });
    }, []);

  return (
    <div className='cursor' />
  )
}
