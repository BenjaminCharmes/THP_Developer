import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ResetPasswordPage() {
  const BASE_URL = 'http://localhost:3000/'
  const [email, setEmail] = useState(null)
  const navigate = useNavigate()

  
  async function sendMail(e) {
    e.preventDefault()
    let payload = {
      "user": {
        "email": email
      }
    }
    try {
      axios.post(`${BASE_URL}users/password`, payload)
    } catch (error) {
      console.error(error)
    }
    navigate('/login')
  }

  return (
    <form>
      <label>
        email:
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <button type='submit' onClick={sendMail}>
        Send verification email
      </button>
    </form>
  )
}
