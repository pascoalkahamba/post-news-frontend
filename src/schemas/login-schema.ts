import { z } from "zod";

const schema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter mais de seis caracteres"),
});

export default schema;
