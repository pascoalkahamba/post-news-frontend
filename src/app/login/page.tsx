"use client";
import { DataLoginProps } from "@/@types";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "@/schemas/login-schema";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<DataLoginProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleFormSubmit: SubmitHandler<DataLoginProps> = (
    { email, password },
    event
  ) => {
    event?.preventDefault();

    console.log(email, password);
  };

  return (
    <section onSubmit={handleSubmit(handleFormSubmit)}>
      <p>Login</p>
    </section>
  );
}
