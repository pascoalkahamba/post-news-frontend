export interface LanguageDetailsI {
  language: string;
  pictue: string;
}
export interface CreateAccountI {
  name: string;
  email: string;
  password: string;
}

export interface UserLoggedI {
  user: {
    id: number;
    email: string;
    name: string;
  };
  userToken: string;
}

export interface ErrorMessage {
  message: string;
  stattus: number;
}

export interface SuccessMessageI {
  message: string;
}
