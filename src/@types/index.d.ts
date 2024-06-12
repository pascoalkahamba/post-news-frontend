import { z } from "zod";
import forgotPasswordSchema from "@/schemas/forgot-password-schema";
import loginSchema from "@/schemas/login-schema";
import verifyEmailSchema from "@/schemas/verify-email";
import createAccountSchema from "@/schemas/create-account-schema";
import { CreateAccountI } from "@/interfaces";

/*----------------- Data Schemas -----------------*/
type DataForgotPasswordProps = z.infer<typeof forgotPasswordSchema>;
type DataCreateAccountProps = z.infer<typeof createAccountSchema>;
type DataLoginProps = z.infer<typeof loginSchema>;
type DataVerifyEmailProps = z.infer<typeof verifyEmailSchema>;

type LoginAccountI = Omit<CreateAccountI, "name">;
type UserCreatedI = Omit<CreateAccountI, "password">;
