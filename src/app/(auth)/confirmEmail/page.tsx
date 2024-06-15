import VerifyEmail from "@/components/verifyEmail";
import Image from "next/image";
import React from "react";

export default function ConfirmEmail() {
  return (
    <section className="w-full h-svh flex p-5 justify-center bg-blue-300">
      <div
        className="flex justify-center gap-2 bg-blue-400 w-[90%] rounded-2xl"
        data-aos="fade-right"
        data-aos-duration="1400"
      >
        <div className="w-[60%] rounded-2xl">
          <Image
            src="/img/confirmEmail.jpg"
            width={300}
            height={300}
            alt="create account picture"
            className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <VerifyEmail />{" "}
      </div>
    </section>
  );
}
