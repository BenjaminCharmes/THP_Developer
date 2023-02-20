import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useSetAtom} from 'jotai'
import { tokenAtom, uidAtom } from '../../atoms/atoms'

export const DisconnectButton = () => {
  const navigate = useNavigate();

  const setToken  = useSetAtom(tokenAtom);
  const setUid = useSetAtom(uidAtom);


  const handleClick = () => {
    Cookies.remove("token")
    setToken(null)
    setUid(null)
    navigate("/")
  };

  return (
    <button onClick={handleClick}>Deconnexion</button>
  )
}
