import z from "zod";

export const registerSchema = z.object({
  fullname: z
    .string({
      required_error: "Nombre es requerido",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "Solo puede contener letras",
    })
    .min(3)
    .max(50),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Correo Electronico invalido",
    }),
  passwd: z
    .string()
    .min(8, {
      message: "la contrasena deber ser mayor a 8 digitos",
    })
    .max(35),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Correo Electronico invalido" }),
  passwd: z.string().min(8, {
    message: "La contrasena debe ser mayor a 8 digitos",
  }),
});
