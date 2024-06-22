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
import { Input } from "@/components/ui/input";
import { DataLoginProps, LoginAccountI } from "@/@types";
import schema from "@/schemas/login-schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginAccount } from "@/server";
import ButtonSumit from "./buttonSubmit";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { data, isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: (user: LoginAccountI) => loginAccount(user),
  });
  const { push } = useRouter();
  const form = useForm<DataLoginProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    reset,
    formState: { isValid, isDirty, errors },
  } = form;

  const onSubmit: SubmitHandler<DataLoginProps> = async (
    { email, password },
    event
  ) => {
    event?.preventDefault();

    mutate({ email, password });

    if (isError) {
      toast.error("Email ou seja errada.");
      console.log("error ", data);
      return;
    }

    if (isSuccess) {
      toast.success("Login feito com sucesso.");
      console.log("uer data ", data);
      localStorage.setItem("token", JSON.stringify(data.userToken));
      reset();
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
          <h1 className="text-center font-bold text-2xl">Entrar na Conta</h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email: </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Digite o email"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha: </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite a senha"
                    type="password"
                    {...field}
                    className=" rounded-full p-2"
                  />
                </FormControl>
                <div className="flex justify-between items-center">
                  <FormMessage className="text-red-500" />
                  {!errors.password?.message && (
                    <Link
                      href="/forgot-password"
                      className="italic text-blue-600 text-sm"
                    >
                      Esqueceu a senha
                    </Link>
                  )}
                </div>
              </FormItem>
            )}
          />
          <ButtonSumit
            isDirty={isDirty}
            isPending={isPending}
            isValid={isValid}
            target="Enviar"
            targetLoading="Enviando..."
          />

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
