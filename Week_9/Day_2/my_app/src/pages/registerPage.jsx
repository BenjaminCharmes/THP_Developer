import { observer } from 'mobx-react-lite'
import React from 'react'
import { useState } from 'react'
import { useUserStore } from '../contexts/UserContext'

export const RegisterPage = observer(() => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const userStore = useUserStore()
  
  function handleRegister () {
    if (password === passwordConfirmation) {
      const registerData = {
        "user": {
          "email": email,
          "password": password,
          "password_confirmation": passwordConfirmation
        }
      };
      userStore.register(registerData)
    } else {
      return (
        <div>
          les mots de passes ne correspondent pas.
        </div>
      )
    }
  }

  if (userStore.loading) {
    return (
      <p>Loading...</p>
    )
  }
  
  if (userStore.hasErrors) {
    return (
      <p>Unable to register.</p>
    )
  }
  
  return (
    <form>
      <label>
        email:
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        password:
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        password confirmation:
        <input type="password" name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)} />
      </label>
      <button type='submit' onClick={handleRegister}>
        S'inscrire
      </button>
    </form>
  )
})
