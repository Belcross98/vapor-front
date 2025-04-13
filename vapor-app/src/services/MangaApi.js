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
    };
  }
};

export const getManga = async (id) => {
  try {
    const response = await fetch(`${API_URL}/Manga/${id}`);
    return await responseHandler(response);
  } catch (error) {
    return { sucess: false, errorText: error.message };
  }
};

export const searchManga = async (query) => {
  try {
    const response = await fetch(`${API_URL}/Manga?MangaName=${query}`);
    return await responseHandler(response);
  } catch (error) {
    return { success: false, errorText: error.message };
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
    return await responseHandler(response, true);
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
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
    return await responseHandler(response, true);
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
    };
  }
};
