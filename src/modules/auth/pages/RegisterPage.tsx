import React, { useState, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import { useTranslation } from "react-i18next";

export const RegisterPage = () => {
  const { t } = useTranslation();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout title={t("AUTH.CREATE_ACCOUNT")}>
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              fullWidth
              label={t("AUTH.FULL_NAME")}
              name="displayName"
              placeholder={t("AUTH.FULL_NAME")}
              type="text"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              fullWidth
              label={t("AUTH.EMAIL")}
              name="email"
              placeholder="correo@google.com"
              type="email"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              fullWidth
              label={t("AUTH.PASSWORD")}
              name="password"
              placeholder={t("AUTH.PASSWORD")}
              type="password"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid> */}

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                {t("AUTH.REGISTER")}
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>{t("AUTH.ALREADY_ACCOUNT")}</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              {t("AUTH.LOGIN")}
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
