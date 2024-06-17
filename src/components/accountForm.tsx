"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DataCreateAccountProps } from "@/@types";
import schema from "@/schemas/create-account-schema";
import Link from "next/link";
import { createAccount } from "@/server";
import ButtonSumit from "./buttonSubmit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { CreateAccountI } from "@/interfaces";

export default function AccountForm() {
  const { data, isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: (newUser: CreateAccountI) => createAccount(newUser),
  });

  const form = useForm<DataCreateAccountProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const {
    reset,
    formState: { isDirty, isValid },
  } = form;

  const { push } = useRouter();

  const onSubmit: SubmitHandler<DataCreateAccountProps> = async (
    { email, password, username },
    event
  ) => {
    event?.preventDefault();

    mutate({
      email,
      password,
      name: username,
    });

    if (isSuccess) {
      toast.success("Dados enviados com sucesso.");
      toast.info("enviamos um codigo de confirmação no seu email.");
      push("/confirmEmail");
      reset();
      console.log("user data", data);
      return;
    }

    if (isError) {
      console.log("Something got wrong");
      toast.error("Email já cadastrado.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex w-[50%] justify-center items-center"
      >
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-300 w-[85%]">
          <h1 className="text-center font-bold text-2xl">Criar Conta</h1>
          <p className=" flex items-center justify-center gap-1">
            Já tens uma conta?
            <Link href="/login" className="text-blue-400">
              fazer login
            </Link>
          </p>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Usuário: </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o nome do usuário"
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
                    type="password"
                    placeholder="Digite a senha"
                    {...field}
                    className="rounded-full p-2"
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

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <ButtonSumit
            target="Cadastrar"
            targetLoading="Cadastrando..."
            isDirty={isDirty}
            isValid={isValid}
            isPending={isPending}
          />
        </div>
      </form>
    </Form>
  );
}
