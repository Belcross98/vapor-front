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

export const logIn = async (user) => {
  try {
    const response = await fetch(`${API_URL}/Account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("accessToken", data.tokens);
      localStorage.setItem("username", user.username);
      return { success: true };
    } else {
      const errorList = Object.values(data.errors).flat();
      const error = errorList.pop();
      return {
        success: false,
        errorText: error,
      };
    }
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
    };
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
    return responseHandler(response);
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

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("accessToken", data.tokens);
      localStorage.setItem("username", username);
      return { success: true, data: data };
    } else {
      let error = "An error occurred during registration.";
      if (data.errors) {
        const errorList = Object.values(data.errors).flat();
        error = errorList.pop();
      } else {
        const errorList = data.map((err) => err.description);
        error = errorList.pop();
      }

      return {
        success: false,
        errorText: error,
      };
    }
  } catch (error) {
    return {
      success: false,
      errorText: error.message,
    };
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
