import { z } from "zod";

const schema = z.object({
  email: z.string().email("Digite um email válido"),
});

export default schema;
