import { appAxios } from "@/axios";
import { CreateAccountI } from "../interfaces/index";
import { LoginAccountI } from "@/@types";

export async function createAccount({ email, name, password }: CreateAccountI) {
  const userCreated = await appAxios.post<CreateAccountI>("/user", {
    email,
    name,
    password,
  });

  return userCreated;
}

export async function loginAccount({ email, password }: LoginAccountI) {
  const userLogged = await appAxios.post<LoginAccountI>("user/login", {
    email,
    password,
  });

  return userLogged;
}
