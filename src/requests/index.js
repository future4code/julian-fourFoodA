import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

const token = window.localStorage.getItem("token");

/**
export const login = async (body) => {
  const response = await axios.post(`${baseUrl}/login`, body);
  localStorage.setItem('token', response.data.token);
  alert('blau')
  return response.data;
}
*/


export const signUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    alert("Usuário cadastrado com sucesso!")
    return response.data;
  } catch (error) {
    alert("Algo deu errado, tente novamente.")
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
    alert("Endereço cadastrado com sucesso")
    return response.data;
  } catch (error) {
    alert("Tente novamente")
    return error.response;
    
  }
}

export const getFullAddress = async () => {
  const response = await axios.get(`${baseUrl}/profile/address`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getProfile = async () => {
  try {
    const response = await axios.get(`${baseUrl}/profile`, {
      headers: {
        auth: token
      }
    });
    return response.data.user;
  } catch (error) {
    return error.response;
  }
}

/**export const updateProfile = async (body) => {
  const response = await axios.put(`${baseUrl}/profile`, body, {
    headers: {
      auth: token
    }
  });
  return response.data
}
*/

export const getRestaurants = async () => {

  const response = await axios.get(`${baseUrl}/restaurants`, {
    headers: {
      auth: token
    }
  });
  return response.data
}

export const getRestaurantDetail = async (restaurantId) => {
  const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const placeOrder = async (body, restaurantId) => {
  const response = await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, body, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getActiveOrder = async () => {
  const response = await axios.get(`${baseUrl}/active-order`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getOrdersHistory = async () => {
  const response = await axios.get(`${baseUrl}/orders/history`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

