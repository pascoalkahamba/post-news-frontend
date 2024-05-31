import { appAxios } from "@/axios";
import { CreateAccountI } from "../interfaces/index";

export async function createAccount({ email, name, password }: CreateAccountI) {
  const userCreated = await appAxios.post<CreateAccountI>("/user", {
    email,
    name,
    password,
  });

  return userCreated;
}
