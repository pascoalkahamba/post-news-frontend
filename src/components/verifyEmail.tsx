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
                <FormLabel>Nome do Usuário: </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o codigo de verificação enviado no seu email"
                    {...field}
                    className=" rounded-full p-2"
                    maxLength={6}
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
