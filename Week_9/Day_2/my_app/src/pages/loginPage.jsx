import React from 'react'
import { useState } from 'react'
import { useUserStore } from '../contexts/UserContext'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

export const LoginPage = observer(() => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const userStore = useUserStore()
  
  function handleLogin () {
    const loginData = {
      "user": {
        "email": email,
        "password": password
      }
    };
    userStore.loginUser(loginData)
  }

  if (userStore.loading) {
    return (
      <p>Loading...</p>
    )
  }
  
  if (userStore.hasErrors) {
    return (
      <div>
        <p>Unable to login.</p>
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={handleLogin}>
          Se connecter
        </button>
        <Link to="/resetpassword">forgotten password</Link>
      </div>
    )
  }
  
  if (!userStore.hasErrors && !userStore.loading) {
    return (
      <div>
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={handleLogin}>
          Se connecter
        </button>
        <Link to="/resetpassword">forgotten password</Link>
      </div>
    )
  }
})
