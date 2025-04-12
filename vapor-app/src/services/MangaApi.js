
const API_URL = "http://localhost:5030";

export const getAllMangas = async () => {
  try {
    const response = await fetch(`${API_URL}/Manga?PageSize=20`);
    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        data: data,
      };
    } else {
      const errorText = await response.text();
      return {
        success: false,
        errorText: errorText,
      };
    }
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
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      const errorText = await response.text();
      return { sucess: false, errorText: errorText };
    }
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
