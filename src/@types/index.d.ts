import { z } from "zod";
import forgotPasswordSchema from "@/schemas/forgot-password-schema";
import loginSchema from "@/schemas/login-schema";
import createAccountSchema from "@/schemas/create-account-schema";

/*----------------- Data Schemas -----------------*/
type DataForgotPasswordProps = z.infer<typeof forgotPasswordSchema>;
type DataCreateAccountProps = z.infer<typeof createAccountSchema>;
type DataLoginProps = z.infer<typeof loginSchema>;
