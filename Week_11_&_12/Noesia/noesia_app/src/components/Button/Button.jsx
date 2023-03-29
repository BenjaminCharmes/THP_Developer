// SCSS
import './Button.scss';

export default function Button({content, onClick}) {
  return (
    <div className='button' onClick={onClick}>
      <button>
        <span>
          {content}
        </span>
      </button> 
    </div>
  )
}
