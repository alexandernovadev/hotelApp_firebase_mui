// import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layouts/AuthLayout";
import { useFormik } from "formik";

import { useTranslation } from "react-i18next";
import * as yup from "yup";

export const LoginPage = () => {
  const { t } = useTranslation();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("AUTH.INVALID_EMAIL"))
      .required(t("AUTH.REQUIRED_EMAIL")),

    password: yup
      .string()
      .min(8, t("AUTH.PASSWORD_ERROR"))
      .required(t("AUTH.PASSWORD_REQUIRED")),
  });

  const onGoogleSignIn = () => {};

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthLayout title={t("AUTH.LOGIN")}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              error={touched.email && Boolean(errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label={t("AUTH.EMAIL")}
              name="email"
              onChange={handleChange}
              placeholder="correo@google.com"
              type="email"
              value={values.email}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              error={touched.password && Boolean(errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={t("AUTH.PASSWORD")}
              name="password"
              onChange={handleChange}
              placeholder={t("AUTH.PASSWORD")}  
              type="password"
              value={values.password}
              variant="standard"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                {t("AUTH.CREATE_ACCOUNT")}  
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              {t("AUTH.CREATE_ACCOUNT")}
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
