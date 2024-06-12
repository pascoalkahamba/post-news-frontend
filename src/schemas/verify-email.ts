import { z } from "zod";

const schema = z.object({
  validateCode: z
    .string()
    .min(6, "O codigo de verificação deve ser igual a seis caracteres.")
    .max(6, "O codigo de verificação deve ser igual a seis caracteres."),
});

export default schema;
