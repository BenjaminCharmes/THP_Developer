import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = "https://immocoin-api.fly.dev";

async function getFetch(endpoint, data) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': data
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function postFetch(endpoint, data) {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function deleteFetch(endpoint, data) {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': data
      }
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const authAPI = {
  register: async (data, setUser) => {
      try {
        const response = await postFetch('users', data);
        setUser((user) => ({
          ...user,
          user: {
            id: response.data.user.id,
            username: response.data.user.username,
            email: response.data.user.email
          },
      }));
    } catch (error) {
      throw error;
    }
  },

  login:  async (data, setUser) => {
    try {
      const response = await postFetch('users/sign_in', data);
      const auth_token = response.headers.authorization.split(' ')[1]
      if (response.data.user) {
        setUser((user) => ({
          ...user,
          auth_token: auth_token,
          user: {
            email: response.data.user.email
          },
          loading: false,
          hasErrors: false,
          authenticated: true
        }));
        Cookies.set('auth_token', auth_token)
      } else {
        throw new Error('invalid password or email');
      }
    } catch (error) {
      setUser((user) => ({
        ...user,
        loading: false,
        hasErrors: true,
        authenticated: false
      }));
      console.error(error);
      throw error;
    }
  },

  logout: async (data) => {
    try {
      await deleteFetch('users/sign_out', data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  loginWithToken: async (data, setUser) => {
    try {
      const response = await getFetch('member-data', data);
      const auth_token = Cookies.get('auth_token')
      setUser((user) => ({
        ...user,
        auth_token: auth_token,
        user: {
          id: response.data.user.id,
          username: response.data.user.username,
          email: response.data.user.email
        },
        authenticated: true,
        logged: true
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

