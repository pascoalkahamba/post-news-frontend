import AccountForm from "@/components/accountForm";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Post-news | Criar Conta",
  description: "Page to user creates your account on the website.",
};

export default function CreatedAccount() {
  const cookiesStore = cookies();

  console.log(cookiesStore.get("validateCode"));
  return <AccountForm />;
}
