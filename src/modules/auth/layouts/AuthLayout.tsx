import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Grid, Typography } from "@mui/material";
import { FlagTranslate } from "../../../UI/FlagTranslate";

interface Props{
  children: ReactJSXElement | ReactJSXElement[];
  title:string
}

export const AuthLayout = ({ children, title = "HILA" }:Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
        minHeight: "100vh",
        backgroundSize:"100% 100%",
        backgroundImage:"url('https://vaovatravel.com/wp-content/uploads/2022/06/YPO-Colombia-2022-419-1-1-scaled.jpg')",
        padding: 4 
      }}
    >
      <Grid
        item
        className="box-shadow animate__animated animate__fadeIn animate__faster"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "primary.light",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <FlagTranslate />
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
