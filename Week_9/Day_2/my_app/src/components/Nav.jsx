import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../contexts/UserContext'

const Nav = observer(() => {
  const userStore = useUserStore()
  console.log(userStore)

  const Logout = () => {
    userStore.logoutUser()
  }

  if (userStore.authenticated) {
    return (
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/article/write'>Écrire un article</Link>
        <button type="submit" onClick={Logout}>se déconnecter</button>
      </div>
    )
  } 

  if (!userStore.authenticated) {
    return (
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/login'>Se connecter</Link>
        <Link to='/register'>S'inscrire</Link>
      </div>
    )
  }
})

export default Nav