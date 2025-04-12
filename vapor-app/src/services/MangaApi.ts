import { User } from "../types/User";
import { LogInResponse } from "../types/LogInResponse";

const API_URL = "http://localhost:5030";

export const getAllMangas = async () => {
  try {
    const response = await fetch(`${API_URL}/Manga`);
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
  } catch (error: any) {
    return {
      success: false,
      errorText: error.message,
    };
  }
};

export const getManga = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/Manga/${id}`);
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      const errorText = await response.text();
      return { sucess: false, errorText: errorText };
    }
  } catch (error: any) {
    return { sucess: false, errorText: error.message };
  }
};

export const logIn = async (user: User): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/Account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data: LogInResponse = await response.json();
    if (response.ok) {
      localStorage.setItem("accessToken", data.tokens);
      localStorage.setItem("username", user.username);
      return { success: true };
    } else {
      const errorList: string[] = Object.values(data.errors).flat() as string[];
      const error = errorList.pop();
      return {
        success: false,
        errorText: error,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      errorText: error.message,
    };
  }
};
