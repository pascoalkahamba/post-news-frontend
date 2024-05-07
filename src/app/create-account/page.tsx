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
import { Input } from "@/components/ui/input";
import { DataCreateAccountProps } from "@/@types";
import schema from "@/schemas/create-account-schema";
import Link from "next/link";

export default function CreateAccount() {
  const form = useForm<DataCreateAccountProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<DataCreateAccountProps> = async (
    { email, password, username },
    event
  ) => {
    event?.preventDefault();

    console.log("email ", email);
    console.log("password ", password);
    console.log("username ", username);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex justify-center items-center py-12"
      >
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-300 w-[35%]">
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

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-blue-600 rounded-full hover:bg-blue-500 mt-3"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
