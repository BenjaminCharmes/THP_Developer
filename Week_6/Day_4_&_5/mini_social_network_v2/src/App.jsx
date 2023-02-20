import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'
import { Register } from './pages/Register/Register'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useSetAtom } from 'jotai'
import { tokenAtom, uidAtom } from './atoms/atoms'

function App() {

  const setToken = useSetAtom(tokenAtom)
  const setUid = useSetAtom(uidAtom)

  useEffect(() => {
    setToken(Cookies.get('token'))
    setUid(Cookies.get('uid'))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
