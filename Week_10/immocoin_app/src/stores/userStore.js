function userAtom() {

  return atom({
    auth_token: null,
    user: {
      id: null,
      username: null,
      email: null
    },
    loading: false,
    hasErrors: false,
    authenticated: false,
    logged: false
  });
} 
  
export default userAtom();

import { atom } from 'jotai'