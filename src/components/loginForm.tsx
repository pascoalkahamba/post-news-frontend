"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FcGoogle } from "react-icons/fc";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { DataLoginProps } from "@/@types";
import schema from "@/schemas/login-schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createAccount, loginAccount } from "@/server";
import { useCookies } from "react-cookie";

export default function LoginForm() {
  const { push } = useRouter();
  const form = useForm<DataLoginProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const {
    formState: { isSubmitSuccessful, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<DataLoginProps> = async (
    { email, password },
    event
  ) => {
    event?.preventDefault();

    const logged = await loginAccount({ email, password });
    console.log("email ", email);
    console.log("password ", password);
    console.log("user logged", logged);

    if (logged.user) {
      push("/");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex w-[50%] justify-center items-center"
      >
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-300 w-[85%]">
          <h1 className="text-center font-bold text-2xl">Post News</h1>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha: </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Digite a senha"
                    {...field}
                    className=" rounded-full p-2"
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email: </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o email"
                    {...field}
                    className=" rounded-full p-2"
                  />
                </FormControl>
                <div className="flex justify-between items-center">
                  <FormMessage className="text-red-500" />
                  <Link
                    href="/forgot-password"
                    className="italic text-blue-600 text-sm"
                  >
                    Esqueceu a senha
                  </Link>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-blue-600 rounded-full hover:bg-blue-500 my-2"
          >
            Entrar
          </Button>
          <div className="flex justify-center items-center gap-2">
            <div className="border-t-2 border-slate-400 border-solid w-52"></div>
            <p>ou</p>
            <div className="border-t-2 border-slate-400 border-solid w-52"></div>
          </div>
          <Button
            type="submit"
            className="bg-blue-400 rounded-full hover:bg-blue-300 my-2 flex justify-center items-center gap-2"
          >
            <FcGoogle />
            Entrar com uma conta google
          </Button>
          <div className="flex justify-center items-center">
            <div className="border-t-2 border-slate-400 border-solid w-56"></div>

            <div className="border-t-2 border-slate-400 border-solid w-56"></div>
          </div>
          <p className=" flex items-center justify-center gap-1">
            Não tem uma conta ainda?
            <Link href="/createAccount" className="text-blue-600">
              Criar uma conta agora
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
