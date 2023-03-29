// React router
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {

  const auth_token = localStorage.getItem('Authorization_token');
  const logged = auth_token ? true : false;

  return (
    <>
      <div>
        {
          logged ? <Outlet /> : <Navigate to="connexion" /> 
        }
      </div>
    </>
  )
}
