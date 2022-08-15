import * as yup from "yup";
import { useTranslation } from "react-i18next";

const { t } = useTranslation()

export default yup.object({
  email: yup
    .string()
    .email(t("AUTH.INVALID_EMAIL"))
    .required(t("AUTH.REQUIRED_EMAIL")),

  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});