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


  const handleChangeE = (e:any,valie) => {
    console.log("Vamos a ver hp", e);
    console.log("Vamos ==== ", valie);
    
  }
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      description: "",
      country: "",
      logo: "",
      department: "",
      municipality: "",
      type_hotel: "",
      score: 2,
      roomtypes: {},
      images: [],
    },
    // validationSchema,
    onSubmit: (values) => {
      console.log("Save hotel is: ", values);
    },
  });
  /**
  helperText={touched.name && errors.name}
  error={touched.name && Boolean(errors.name)}
  onChange={handleChange}
  value={values.name}
   */
  return (
    <HotelLayout title={t("HOTEL.SAVE_HOTEL")}>
      <form onSubmit={handleSubmit} aria-label="submit-form">
        <Grid container>
          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0020/6116/brand.gif?itok=3ZNfeNrU"
              sx={{ width: 160, height: 160, border: "1px solid black" }}
            />
            <Button variant="outlined" component="label" sx={{ mt: 1 }}>
              <Typography sx={{ px: 2, mx: 1 }}>
                {t("COMMON.UPLOAD")}
              </Typography>
              <PhotoCamera />
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>

          <Grid item xs={12} sm={8} sx={{ p: 2 }}>
            <TextField
              autoComplete="off"
              fullWidth
              label={t("HOTEL.NAME_HOTEL")}
              name="name"
              inputProps={{ "data-testid": "name_hotel" }}
              placeholder="Hotel Decameron"
              type="text"
              helperText={touched.name && errors.name}
              error={touched.name && Boolean(errors.name)}
              onChange={handleChange}
              value={values.name}
              sx={{ my: 2 }}
              variant="standard"
            />
            <TextField
              helperText={touched.description && errors.description}
              error={touched.description && Boolean(errors.description)}
              onChange={handleChange}
              value={values.description}
              name="description"
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
              <InputLabel id="country_field">{t("HOTEL.COUNTRY")}</InputLabel>
              <Select
                labelId="country_field"
                id="country_field-select"
                name="country"
                value={values.country}
                label={t("HOTEL.COUNTRY")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Colombia'}>Colombia</MenuItem>
                <MenuItem value={'Mexico'}>Mexico</MenuItem>
                <MenuItem value={'Estado Unidos'}>Estados Unidos</MenuItem>
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
                name="department"
                labelId="department-field"
                id="department-field-select-helper"
                value={values.department}
                label={t("HOTEL.DEPARTMENT")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Cundinamarca'}>Cundinamarca</MenuItem>
                <MenuItem value={'Huila'}>Huila</MenuItem>
                <MenuItem value={'Guaviare'}>Guaviare</MenuItem>
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
                name="municipality"
                labelId="municipality-label"
                id="municipality-label-select-helper"
                value={values.municipality}
                label={t("HOTEL.MUNICIPALITY")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'La Santillana'}>La Santillana</MenuItem>
                <MenuItem value={'Unidos Altos'}>Unidos Altos</MenuItem>
                <MenuItem value={'San Pablo'}>San Pablo</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={8} sx={{ p: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="typeroom-label">
                {t("HOTEL.TYPE_HOTEL")}
              </InputLabel>
              <Select
                name="type_hotel"
                labelId="typeroom-label"
                id="typeroom-label-select-helper"
                value={values.type_hotel}
                label={t("HOTEL.TYPE_ROOM")}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={3}>3 Estrellas</MenuItem>
                <MenuItem value={4}>4 Estrellas</MenuItem>
                <MenuItem value={5}>5 Estrellas</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <InputLabel id="score">{t("HOTEL.SCORE")}</InputLabel>
            <Rating 
            name="score"
            value={+values.score}
            onChange={handleChange}
            precision={0.5} />
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
              <Typography sx={{ px: 2, mx: 1 }}>
                {t("COMMON.UPLOAD")}
              </Typography>
              <PhotoCamera />
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>

          {/* {Array.from({ length: 8 }).map((i) => ( */}

          <Grid item xs={4} sm={4} sx={{ p: 1 }}>
            <img
              src="https://mui.com/static/images/avatar/1.jpg"
              style={{ borderRadius: "12px", width: "100%", height: 220 }}
              alt=""
            />
          </Grid>
          {/* ))} */}

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
