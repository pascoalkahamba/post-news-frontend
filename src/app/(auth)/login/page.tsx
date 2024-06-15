import LoginForm from "@/components/loginForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Post-news | Fazer Login",
  description: "Page to user take loging to your account.",
};

export default function LoginAccount() {
  return (
    <section className="w-full h-svh flex p-5 justify-center bg-blue-300">
      <div
        className="flex justify-center gap-2 bg-blue-400 w-[90%] rounded-2xl"
        data-aos="fade-right"
        data-aos-duration="1400"
      >
        <div className="w-[60%] rounded-2xl">
          <Image
            src="/img/login.jpg"
            width={300}
            height={300}
            alt="create account picture"
            className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
