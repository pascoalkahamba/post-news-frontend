import { z } from "zod";

const schema = z.object({
  validateCode: z
    .string()
    .min(6, "O codigo de verificação deve ser igual a seis números.")
    .max(6, "O codigo de verificação deve ser igual a seis números."),
});

export default schema;
