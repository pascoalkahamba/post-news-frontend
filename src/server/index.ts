import { appAxios } from "@/axios";
import { CreateAccountI, UserLoggedI } from "../interfaces/index";
import { LoginAccountI, UserCreatedI } from "@/@types";

export async function createAccount({ email, name, password }: CreateAccountI) {
  const response = await appAxios.post<CreateAccountI>("/user", {
    email,
    name,
    password,
  });

  const userCreated: UserCreatedI = response.data;

  return userCreated;
}

export async function loginAccount({ email, password }: LoginAccountI) {
  const response = await appAxios.post<LoginAccountI>("/user/login", {
    email,
    password,
  });

  const userLogged: UserLoggedI = response.data as unknown as UserLoggedI;

  return userLogged;
}
