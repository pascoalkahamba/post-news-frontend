import AccountForm from "@/components/accountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-news | Criar Conta",
  description: "Page to user creates your account on the website.",
};

export default async function CreatedAccount() {
  const userLogged = await fetch("https://github.com/PascoalKahamba", {
    next: {
      revalidate: 3000,
    },
    cache: "force-cache",
  });

  console.log("userLogged", userLogged);
  return <AccountForm />;
}
