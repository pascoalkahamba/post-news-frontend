import { appAxios } from "@/axios";
import {
  CreateAccountI,
  SuccessMessageI,
  UserLoggedI,
} from "../interfaces/index";
import { LoginAccountI, UserCreatedI } from "@/@types";

export async function createAccount({ email, name, password }: CreateAccountI) {
  const response = await appAxios.post<CreateAccountI>(
    "/user",
    {
      email,
      name,
      password,
    },
    { withCredentials: true }
  );

  const userCreated: SuccessMessageI =
    response.data as unknown as SuccessMessageI;

  return userCreated;
}

export async function loginAccount({ email, password }: LoginAccountI) {
  const response = await appAxios.post<LoginAccountI>(
    "/user/login",
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  const userLogged: UserLoggedI = response.data as unknown as UserLoggedI;

  return userLogged;
}

export async function confirmEmail(validateCode: number | string) {
  const response = await appAxios.post<UserCreatedI>(
    "/user/verifyEmail",
    {
      validateCode,
    },
    { withCredentials: true }
  );

  const userCreated = response.data;

  return userCreated;
}
