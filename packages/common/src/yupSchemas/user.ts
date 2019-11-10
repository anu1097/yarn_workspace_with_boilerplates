import * as yup from "yup";

export const EMAIL_NOT_LONG_ENOUGH = "email must be at least 3 characters";
export const PASSWORD_NOT_LONG_ENOUGH = "password must be at least 3 characters";
export const INVALID_EMAIL = "email must be a valid email";

export const registerEmailSchema = yup
	.string()
	.min(3, EMAIL_NOT_LONG_ENOUGH)
	.max(255)
	.email(INVALID_EMAIL)
	.required();

export const registerPasswordSchema = yup
	.string()
	.min(3, PASSWORD_NOT_LONG_ENOUGH)
	.max(255)
	.required();

export const userValidationSchema = yup.object().shape({
	email: registerEmailSchema,
	password: registerPasswordSchema,
});