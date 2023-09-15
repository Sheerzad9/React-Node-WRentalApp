"use client";

import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { modalActions } from "@/store/modal-slice";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-blob-img md:h-full md:w-full relative flex">
      <div className="sm:w-full m-16 md:justify-center mx-auto px-6">
        <form className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full items-center flex flex-col w-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-10">
            Kirjaudu sisään
          </h2>
          <div className="mb-4 flex flex-col sm:flex-row gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold">
                Etunimi
              </label>
              <input
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300`}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold">
                Sukunimi
              </label>
              <input
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline duration-300`}
              />
            </div>
          </div>
          <div className="mb-12 flex flex-col sm:flex-row gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold">
                Sähköposti
              </label>
              <input
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline duration-300`}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold">
                Syntymäpäivä
              </label>
              <input
                type="date"
                className={`shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline duration-300`}
              />
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
                onClick={() =>
                  dispatch(modalActions.setFormView({ formView: true }))
                }
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
