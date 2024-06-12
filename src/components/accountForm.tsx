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
import { useQuery } from "@tanstack/react-query";
import { createAccount } from "@/server";
import ButtonSumit from "./buttonSubmit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AccountForm() {
  const form = useForm<DataCreateAccountProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const notifyError = () => toast.error("email already exist!");

  const {
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = form;

  const { push } = useRouter();

  const onSubmit: SubmitHandler<DataCreateAccountProps> = async (
    { email, password, username },
    event
  ) => {
    event?.preventDefault();

    const userCreated = await createAccount({
      email: email,
      name: username,
      password: password,
    });

    if (userCreated.email) {
      toast.success("Conta criada com sucesso.");
      push("/login");
      reset();
      console.log("All good");
      return;
    }

    console.log("Something got wrong");
    notifyError();

    console.log("user data ", userCreated);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex justify-center items-center py-12"
      >
        <div
          className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-300 w-[35%]"
          data-aos="fade-right"
          data-aos-duration="1400"
        >
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
          <ButtonSumit
            isDirty={isDirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}
