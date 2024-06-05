import AccountForm from "@/components/accountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-news | Criar Conta",
  description: "Page to user creates your account on the website.",
};

export default async function CreatedAccount() {
  return <AccountForm />;
}
