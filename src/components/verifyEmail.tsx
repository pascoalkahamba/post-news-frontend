"use client";
import { DataVerifyEmailProps } from "@/@types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import schema from "@/schemas/verify-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import ButtonSumit from "./buttonSubmit";
import { toast } from "react-toastify";
import { confirmEmail } from "@/server";

export default function VerifyEmail() {
  const { data, isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: (validateCode: string | number) => {
      return confirmEmail(validateCode);
    },
  });

  const form = useForm<DataVerifyEmailProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const {
    reset,
    formState: { isDirty, isValid },
  } = form;

  const { push } = useRouter();

  const onSubmit: SubmitHandler<DataVerifyEmailProps> = async (
    { validateCode },
    event
  ) => {
    event?.preventDefault();

    mutate(+validateCode);

    if (isSuccess) {
      push("/");
      reset();
      console.log("Conta criada.", data);
      toast.success("Conta criada com sucesso.");
      return;
    }

    if (isError) {
      toast.error("código de verificação errado.");
      toast.info("Enviamos o código de verificação no seu email");
      toast.info("O código de verificação expira após cinco minutos.");
      console.log("validateCode ", validateCode);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex w-[50%] justify-center items-center"
      >
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-300 w-[85%] h-[37%]">
          <h1 className="text-center font-bold text-2xl">
            Verificação da cota
          </h1>

          <FormField
            control={form.control}
            name="validateCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de verificação: </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Digite o codigo de verificação"
                    {...field}
                    className="rounded-full p-2"
                    maxLength={6}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <ButtonSumit
            isDirty={isDirty}
            target="Verificar"
            targetLoading="Verificando..."
            className="self-center p-4"
            isValid={isValid}
            isPending={isPending}
          />
        </div>
      </form>
    </Form>
  );
}
