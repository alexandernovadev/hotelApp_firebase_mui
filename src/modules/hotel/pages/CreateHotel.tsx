import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import HotelLayout from "../layout/HotelLayout";
import * as yup from "yup";
import { useFormik } from "formik";
import { PhotoCamera } from "@mui/icons-material";

export const CreateHotel = () => {
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

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Creac hoter is ", values);
    },
  });
  /**
  helperText={touched.email && errors.email}
  error={touched.email && Boolean(errors.email)}
  onChange={handleChange}
  value={values.email}
   */
  return (
    <HotelLayout title={t("HOTEL.SAVE_HOTEL")}>
      <form onSubmit={handleSubmit} aria-label="submit-form">
        <Grid container>
          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0020/6116/brand.gif?itok=3ZNfeNrU"
              sx={{ width: 160, height: 160, border:'1px solid black' }}
            />
             <Button variant="outlined" component="label" sx={{mt:1}}>
              <Typography sx={{ px: 2, mx: 1 }}>{t("COMMON.UPLOAD")}</Typography>
              <PhotoCamera />
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>

          <Grid item xs={12} sm={8} sx={{ p: 2 }}>
            <TextField
              autoComplete="off"
              fullWidth
              label={t("HOTEL.NAME_HOTEL")}
              name="name_hotel"
              inputProps={{ "data-testid": "name_hotel" }}
              placeholder="Hotel Decameron"
              type="text"
              sx={{ my: 2 }}
              variant="standard"
            />
            <TextField
              variant="standard"
              id="outlined-multiline-static"
              label={t("HOTEL.DESCRIPTION")}
              multiline
              rows={4}
              fullWidth
              sx={{ my: 2 }}
              placeholder={t("HOTEL.PLACEHOLDER_DESC")}
            />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="country_field">
                {t("HOTEL.COUNTRY")}
              </InputLabel>
              <Select
                labelId="country_field"
                id="country_field-select"
                value="{age}"
                label={t("HOTEL.COUNTRY")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="department-field">
                {t("HOTEL.DEPARTMENT")}
              </InputLabel>
              <Select
                labelId="department-field"
                id="department-field-select-helper"
                value="{age}"
                label={t("HOTEL.DEPARTMENT")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="municipality-label">
              {t("HOTEL.MUNICIPALITY")}
              </InputLabel>
              <Select
                labelId="municipality-label"
                id="municipality-label-select-helper"
                value="{age}"
                label={t("HOTEL.MUNICIPALITY")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={8} sx={{ p: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="typeroom-label">
              {t("HOTEL.TYPE_ROOM")}
              </InputLabel>
              <Select
                labelId="typeroom-label"
                id="typeroom-label-select-helper"
                value="{age}"
                label={t("HOTEL.TYPE_ROOM")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={4}>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <InputLabel id="scrore">{t("HOTEL.SCORE")}</InputLabel>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Grid>

          <Grid item xs={12} sm={12} sx={{ p: 2 }}>
            <Divider textAlign="left">{t("HOTEL.ROOM_AVAILABLE")}</Divider>
          </Grid>

          <Grid item xs={4} sm={4} sx={{ p: 2 }}>
            <FormControlLabel
              sx={{ pt: 2 }}
              control={<Checkbox defaultChecked />}
              label={t("HOTEL.TWO_TWIN_BEDROOM")}
            />
          </Grid>
          <Grid item xs={8} sm={8} sx={{ p: 2 }}>
            <TextField
              fullWidth
              label=""
              name="twotwingNumber"
              placeholder="5"
              type="number"
              sx={{ my: 2, width: "40%" }}
              variant="standard"
            />
          </Grid>

          <Grid item xs={4} sm={4} sx={{ p: 2 }}>
            <FormControlLabel
              sx={{ pt: 2 }}
              control={<Checkbox defaultChecked />}
              label={t("HOTEL.SIMPLE_BEDROOM")}
            />
          </Grid>
          <Grid item xs={8} sm={8} sx={{ p: 2 }}>
            <TextField
              fullWidth
              label=""
              name="simpleRoomNumber"
              placeholder="5"
              type="number"
              sx={{ my: 2, width: "40%" }}
              variant="standard"
            />
          </Grid>

          <Grid item xs={4} sm={4} sx={{ p: 2 }}>
            <FormControlLabel
              sx={{ pt: 2 }}
              control={<Checkbox defaultChecked />}
              label={t("HOTEL.ONE_QUEEN_BEDROOM")}
            />
          </Grid>
          <Grid item xs={8} sm={8} sx={{ p: 2 }}>
            <TextField
              fullWidth
              label=""
              name="onequeenbedroomNumber"
              placeholder="5"
              type="number"
              sx={{ my: 2, width: "40%" }}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={8} sx={{ p: 2 }}>
            <Divider textAlign="left">{t("HOTEL.IMAGE_GALLERY")}</Divider>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <Button variant="outlined" component="label">
              <Typography sx={{ px: 2, mx: 1 }}>{t("COMMON.UPLOAD")}</Typography>
              <PhotoCamera />
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>

          {Array.from({ length: 8 }).map((i) => (
            <Grid item xs={4} sm={4} sx={{ p: 1 }} key={i}>
              <img

                src="https://mui.com/static/images/avatar/1.jpg"
                style={{ borderRadius: "12px" , width:'100%', height:220}}
                alt=""
              />
            </Grid>
          ))}

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {/* <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid> */}

            <Grid item xs={12} sm={6} sx={{ p: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={status === "checking"}
                fullWidth
              >
                {t("HOTEL.SAVE_HOTEL")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </HotelLayout>
  );
};
