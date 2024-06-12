import LoginForm from "@/components/loginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-news | Fazer Login",
  description: "Page to user take loging to your account.",
};

export default function LoginAccount() {
  return <LoginForm />;
}
