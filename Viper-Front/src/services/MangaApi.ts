import { useNavigate } from "react-router-dom";
import { Manga } from "../types/Manga";
import { User } from "../types/User";
import { LogInResponse } from "../types/LogInResponse";

const API_URL = "http://localhost:5030";

export const getAllMangas = async (): Promise<Manga[]> => {
  const response = await fetch(`${API_URL}/Manga`);
  if (!response.ok) {
    console.log(response.text);
  }
  const data: Manga[] = await response.json();

  return data;
};

export const getManga = async (id: string): Promise<Manga> => {
  const response = await fetch(`${API_URL}/Manga/${id}`);
  if (!response.ok) {
    console.log(response.text);
  }

  const data: Manga = await response.json();

  return data;
};

export const logIn = async (user: User): Promise<any> => {
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
  } else {
    console.log("USAO SAM OVDE ALE ALE");
    const errorList: string[] = Object.values(data.errors).flat() as string[];
    const error = errorList.pop();
    return error;
  }
};
