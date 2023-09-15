import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Etunimen oltava vähintään 2 merkkiä")
    .required("Pakollinen kenttä"),
  lastname: yup
    .string()
    .min(2, "Sukunimen oltava vähintään 2 merkkiä")
    .required("Pakollinen kenttä"),
  email: yup
    .string()
    .email("Syöttämäsi sähköposti on virheellinen")
    .required("Pakollinen kenttä"),
  date_of_birth: yup
    .date()
    .typeError("Syötä päivä muodossa PP.MM.VVVV")
    .required()
    .min("1950-01-01", "Syötä edes realistinen aika....")
    .max(
      "2005-01-01",
      "Sinun on oltava vähintään 18-vuotias luodaksesi profiili"
    ),
});
