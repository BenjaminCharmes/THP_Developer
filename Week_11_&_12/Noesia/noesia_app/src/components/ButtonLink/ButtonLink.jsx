// React router
import { Link } from 'react-router-dom'

// SCSS
import './ButtonLink.scss'

export default function Button({content, path}) {
  return (
    <div className='button-link'>
        <Link to={path}>
          <button>
            <span>
              {content}
            </span>
          </button>
        </Link>
    </div>
  )
}
