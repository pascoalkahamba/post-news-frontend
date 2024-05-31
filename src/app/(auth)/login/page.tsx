import LoginForm from "@/components/loginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-news | Fazer Login",
  description: "Page to user take loging to your account.",
};

export default async function LoginAccount() {
  const userLogged = await fetch("https://github.com/PascoalKahamba", {
    next: {
      revalidate: 3000,
    },
    cache: "force-cache",
  });

  console.log("userLogged", userLogged);
  return <LoginForm />;
}