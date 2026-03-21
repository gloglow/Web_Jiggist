import { z } from "zod";

export const createSignUpSchema = (t: (key: string) => string) =>
  z
    .object({
      full_name: z.string().min(1, t("fullNameValidation")),
      email: z.email(t("emailValidation")),
      password: z.string().min(6, t("passwordValidation")),
      confirm_password: z.string(),
      terms: z.literal(true, {
        message: t("termsOfServiceValidation"),
      })
    })
    .refine((data) => data.password === data.confirm_password, {
      message: t("confirmPasswordValidation"),
      path: ["confirm_password"],
    });

export type SignUpForm = z.infer<ReturnType<typeof createSignUpSchema>>;