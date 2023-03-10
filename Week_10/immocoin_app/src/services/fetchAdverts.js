import axios from 'axios';

const API_URL = "https://immocoin-api.fly.dev";

async function getFetch(endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`)
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function postFetch(endpoint, data) {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data)
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const advertAPI = {
  getAdverts: async () => {
    try {
      const response = await getFetch('advertisements');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postAdvert: async (data) => {
    try {
      const response = await postFetch('advertisements', data)
    } catch (error) {
      throw error;
    }
  }
};
