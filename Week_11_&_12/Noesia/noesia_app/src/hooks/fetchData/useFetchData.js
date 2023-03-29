import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from "react-query";

import { API_URL } from '../../services/API_URL';

export function useFetchGet(endpoint, query, dataToSend) {
  return useQuery(query, async () =>
     await axios.get(`${API_URL}/${endpoint}`, { headers: 
      {
        'Content-Type': 'application/json',
        'Authorization': dataToSend
      }
    })
    .then(response => response.data)
  );
}

export function useFetchPost(endpoint) {
  const postData = async (dataToSend) => {
    const response = await axios.post(`${API_URL}/${endpoint}`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (endpoint.includes('users')) {
      localStorage.setItem('Authorization_token', response.headers.authorization);
    }
      return response.data;
    };

  return useMutation(postData);
}

export function useFetchDelete(endpoint) {
  const deleteData = async (dataToSend) => {
    const response = await axios.delete(`${API_URL}/${endpoint}`, {
      headers: {
        Authorization: dataToSend,
      },
    });
    return response.data;
  };
  
  return useMutation(deleteData);
}

export function useFetchDeleteWithID(endpoint) {
  const deleteData = async (id) => {
    const response = await axios.delete(`${API_URL}/${endpoint}/${id}`);
    return response.data;
  };
  
  return useMutation(deleteData);
}

export function useFetchPut(endpoint, auth_token) {
  const putData = async (dataToSend) => {
    const response = await axios.put(`${API_URL}/${endpoint}`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth_token,
      },
    });
    return response.data;
  };

  return useMutation(putData);
}

export function useFetchPatch(endpoint, auth_token) {
  const patchData = async (dataToSend) => {
    const response = await axios.patch(`${API_URL}/${endpoint}`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth_token,
      },
    });
    return response.data;
  };

  return useMutation(patchData);
}