import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function NewPasswordPage() {
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const BASE_URL = 'http://localhost:3000/'
  const token = searchParams.get('reset_token')


  async function newPassword() {
    if (password !== passwordConfirmation) {
      return (
        <p>Passwords don't match</p>
      )
    } else {
      let payload = {
        "user": {
          "password": password,
          "password_confirmation": passwordConfirmation,
          "reset_password_token": token
        }
      }
      try {
        axios.put(`${BASE_URL}users/password`, payload)
      } catch(error) {
        console.error(error)
      }
      navigate('/login')
    }
  }

  if (!token) {
    return (
      <div>
        <p>Nous n'avons pas trouvé cette adresse</p>
      </div>
    )
  }

  return (
    <form>
      <label>
        New password:
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        New password confirmation:
        <input type="password" name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)} />
      </label>
      <button type='submit' onClick={newPassword}>
        Validate
      </button>
    </form>
  )
}
