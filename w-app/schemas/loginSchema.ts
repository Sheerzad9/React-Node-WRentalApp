import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Syöttämäsi sähköposti on virheellinen")
    .required("Pakollinen kenttä"),
  password: yup
    .string()
    .min(5, "Salasanan on oltava vähintään 5-merkin pituinen")
    .required("Pakollinen kenttä"),
});
