// SCSS
import './ButtonDoor.scss'

export default function ButtonDoor({content, onClick}) {
  return (
    <div className='button-door'>
      <button onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {content}
      </button> 
    </div>
  )
}
