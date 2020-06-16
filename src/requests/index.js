import axios from 'axios';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA';

const token = window.localStorage.getItem('token');

/**
export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    localStorage.setItem('token', response.data.token);
    alert('blau')
    return response.data;
  } catch (error) {
    alert('bleu')
    return error.response;
  }
}
*/

export const signUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const addAddress = async (body) => {
  try {
    const response = await axios.put(`${baseUrl}/address`, body, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const getFullAddress = async () => {
  try {
    const response = await axios.get(`${baseUrl}/profile/address`, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const getProfile = async () => {
  try {
    const response = await axios.get(`${baseUrl}/profile`, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const updateProfile = async (body) => {
  try {
    const response = await axios.put(`${baseUrl}/profile`, body, {
      headers: {
        auth: token
      }
    });
    return response.data
  } catch (error) {
    return error.response;
  }
}

export const getRestaurants = async () => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants`, {
      headers: {
        auth: token
      }
    });
    return response.data
  } catch (error) {
    return error.response;
  }
}

export const getRestaurantDetail = async (restaurantId) => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const placeOrder = async (body, restaurantId) => {
  try {
    const response = await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, body, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const getActiveOrder = async () => {
  try {
    const response = await axios.get(`${baseUrl}/active-order`, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export const getOrdersHistory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/orders/history`, {
      headers: {
        auth: token
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}