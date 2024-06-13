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
import ButtonSumit from "./buttonSubmit";
import { toast } from "react-toastify";
import { confirmEmail } from "@/server";

export default function VerifyEmail() {
  const form = useForm<DataVerifyEmailProps>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const {
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = form;

  const { push } = useRouter();

  const onSubmit: SubmitHandler<DataVerifyEmailProps> = async (
    { validateCode },
    event
  ) => {
    event?.preventDefault();

    const userCreated = await confirmEmail(+validateCode);

    if (userCreated.email) {
      push("/");
      reset();
      console.log("Conta criada.");
      toast.success("Conta criada com sucesso.");
      return;
    }

    toast.error("código de verificação errado.");
    toast.info("Enviamos o código de verificação no seu email");
    toast.info("O código de verificação expira após cinco minutos.");
    console.log("validateCode ", validateCode);
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
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}
