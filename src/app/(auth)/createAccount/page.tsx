import AccountForm from "@/components/accountForm";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Post-news | Criar Conta",
  description: "Page to user creates your account on the website.",
};

export default function CreatedAccount() {
  const cookiesStore = cookies();

  console.log(cookiesStore.get("validateCode"));
  return (
    <section className="w-full h-svh flex p-5 justify-center bg-blue-300">
      <div
        className="flex justify-center gap-2 bg-blue-400 w-[90%] rounded-2xl"
        data-aos="fade-right"
        data-aos-duration="1400"
      >
        <div className="w-[60%] rounded-2xl">
          <Image
            src="/img/createAccount.jpg"
            width={300}
            height={300}
            alt="create account picture"
            className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <AccountForm />
      </div>
    </section>
  );
}
