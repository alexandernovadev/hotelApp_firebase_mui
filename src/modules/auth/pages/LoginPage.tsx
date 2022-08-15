import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {

  const onSubmit = ()=>{}
  const onGoogleSignIn = ()=>{}

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
        
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
        
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
            
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
           
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
