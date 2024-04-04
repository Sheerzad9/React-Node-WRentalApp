"use client";

import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { modalActions } from "@/store/modal-slice";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/registerSchema";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFormSubmit = async (values: any, actions: any) => {
    console.log("Arvot: ", values);
    console.log("Actions: ", actions);
  };

  const { values, handleBlur, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      date_of_birth: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleFormSubmit,
  });

  const fieldHasErrors = (fieldName: string): boolean => (errors as any)[fieldName] && (touched as any)[fieldName];

  return (
    <div className="bg-blob-img md:h-full md:w-full relative flex rounded-2xl">
      <div className="sm:w-full m-16 md:justify-center mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full items-center flex flex-col w-full"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-10">Rekisteröidy</h2>
          <div className="mb-4 flex flex-col sm:flex-row gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold">Etunimi</label>
              <input
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                  fieldHasErrors("firstname") && "border-2 border-rose-500"
                }`}
                id="firstname"
                type="text"
                placeholder="etunimi"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldHasErrors("firstname") && <p className="text-rose-400 text-xs">{errors.firstname}</p>}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold">Sukunimi</label>
              <input
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                  fieldHasErrors("lastname") && "border-2 border-rose-500"
                }`}
                id="lastname"
                type="text"
                placeholder="sukunimi"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldHasErrors("lastname") && <p className="text-rose-400 text-xs">{errors.lastname}</p>}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold">Sähköposti</label>
              <input
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                  fieldHasErrors("email") && "border-2 border-rose-500"
                }`}
                id="email"
                type="email"
                placeholder="oma@sähköposti.fi"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldHasErrors("email") && <p className="text-rose-400 text-xs">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold">Syntymäpäivä</label>
              <input
                type="date"
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                  fieldHasErrors("date_of_birth") && "border-2 border-rose-500"
                }`}
                id="date_of_birth"
                value={values.date_of_birth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldHasErrors("date_of_birth") && <p className="text-rose-400 text-xs">{errors.date_of_birth}</p>}
            </div>
          </div>
          <div>
            <div className="mb-12 flex align-middle">
              <div>
                <label className="block text-gray-700 text-sm font-bold">Salasana</label>
                <input
                  type="password"
                  className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                    fieldHasErrors("password") && "border-2 border-rose-500"
                  }`}
                  id="password"
                  placeholder="*************"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {fieldHasErrors("password") && <p className="text-rose-400 text-xs">{errors.password}</p>}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10 flex-col w-full">
            <button
              className="bg-button-primary rounded-full text-white font-extrabold py-2 px-4  focus:outline-none focus:shadow-outline duration-300 ease-in-out hover:bg-[#fb923c]"
              type="submit"
            >
              Rekisteröidy
            </button>
            <div className="flex justify-center w-full">
              <button
                className="inline-block align-baseline font-bold text-xs sm:text-sm text-blue-500 hover:text-blue-800"
                onClick={() => dispatch(modalActions.setFormView({ formView: true }))}
              >
                Onko sinulla jo tili?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
