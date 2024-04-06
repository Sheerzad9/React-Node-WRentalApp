"use client";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { userActions } from "@/store/user-slice";
import { modalActions } from "@/store/modal-slice";
import { loginSchema } from "@/schemas/loginSchema";
import { useFormik } from "formik";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@/store/user-slice";
import { AppDispatch } from "@/store";
import { loadSpinnerActions } from "@/store/loadspinner-slice";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const supabase = createClientComponentClient();

  const handleLoginFormSubmit = async (values: { email: string; password: string }, actions: any) => {
    dispatch(loadSpinnerActions.showLoadSpinner());
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    dispatch(loadSpinnerActions.hideLoadSpinner());

    if (error) {
      setFieldError("password", "Sähköposti tai salasana on virheellinen.");
      return;
    }

    const user: User = {
      isLoggedin: true,
      id: data.user.id,
      email: data.user.email!,
      firstname: data.user.user_metadata["firstname"],
      lastname: data.user.user_metadata["lastname"],
      profilePicUrl: null,
    };

    dispatch(userActions.setUser(user));
    dispatch(modalActions.closeModal());
  };

  const { values, handleBlur, touched, errors, handleChange, handleSubmit, isValid, dirty, setFieldError } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleLoginFormSubmit,
  });

  const emailHasErrors = errors.email && touched.email;
  const passwordHasErrors = errors.password && touched.password;

  return (
    <div className="bg-blob-img md:h-full md:w-full relative flex rounded-2xl">
      <div className="sm:w-full m-16 md:justify-center mx-auto sm:m-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full items-center flex flex-col w-full"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-10">Kirjaudu sisään</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Sähköposti</label>
            <input
              className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                emailHasErrors && "border-2 border-rose-500"
              }`}
              id="email"
              type="email"
              placeholder="oma@sähköposti.fi"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {emailHasErrors && <p className="text-rose-400 text-xs">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Salasana</label>
            <input
              className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline duration-300 ${
                passwordHasErrors && "border-2 border-rose-500"
              }`}
              id="password"
              type="password"
              placeholder="*************"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {passwordHasErrors && <p className="text-rose-400 text-xs">{errors.password}</p>}
          </div>
          <div className="flex items-center gap-10 flex-col w-full">
            <button
              className="bg-button-primary rounded-full text-white font-extrabold py-2 px-4  focus:outline-none focus:shadow-outline duration-300 ease-in-out hover:bg-[#fb923c]"
              type="submit"
            >
              Kirjaudu sisään
            </button>
            <div className="flex justify-around w-full">
              <a className="inline-block align-baseline font-bold text-xs sm:text-sm text-blue-500 hover:text-blue-800" href="#">
                Salasana unohtunut?
              </a>
              <button
                className="inline-block align-baseline font-bold text-xs sm:text-sm text-blue-500 hover:text-blue-800"
                onClick={() => dispatch(modalActions.setFormView({ formView: false }))}
              >
                Rekisteröidy nyt
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
