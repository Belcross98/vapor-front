import responseHandler from "./ResponseHandler";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllMangas = async () => {
  try {
    const response = await fetch(`${API_URL}/Manga?PageSize=500`);
    return await responseHandler(response);
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
      data: error,
    };
  }
};

export const getManga = async (id) => {
  try {
    const response = await fetch(`${API_URL}/Manga/${id}`);
    return await responseHandler(response);
  } catch (error) {
    return { sucess: false, errorText: error.message, data: error };
  }
};

export const searchManga = async (query) => {
  try {
    const response = await fetch(`${API_URL}/Manga?MangaName=${query}`);
    return await responseHandler(response);
  } catch (error) {
    return { success: false, errorText: error.message, data: error };
  }
};

export const createReview = async (mangaId, comment, rating) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${API_URL}/Review`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mangaId: mangaId,
        comment: comment,
        rating: rating,
      }),
    });
    return await responseHandler(response);
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
      data: error,
    };
  }
};

export const logIn = async (user) => {
  try {
    const response = await fetch(`${API_URL}/Account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const loginResponse = await responseHandler(response);
    if (loginResponse.success) {
      localStorage.setItem("accessToken", loginResponse.data.tokens);
      localStorage.setItem("username", loginResponse.data.username);
    }
    return loginResponse;
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
      data: error,
    };
  }
};

export const registerUser = async (email, username, password) => {
  try {
    const response = await fetch(`${API_URL}/Account/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });
    const registerResponse = await responseHandler(response);
    if (registerResponse.success) {
      localStorage.setItem("accessToken", registerResponse.data.tokens);
      localStorage.setItem("username", registerResponse.data.username);
    }
    return registerResponse;
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
      data: error,
    };
  }
};
