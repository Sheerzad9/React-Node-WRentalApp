"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store/modal-slice";
import { RootState } from "../../../store";
import Modal from "react-modal";
import LoginForm from "@/components/Forms/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm";

const RegisterModal: React.FC = () => {
  const { showRegisterModal: showModal, showLoginForm } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  useEffect((): any => {
    showModal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
  }, [showModal]);

  const handleModalClosing = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div>
      <Modal
        className="max-h-max max-w-sm md:max-w-lg lg:max-w-2xl mx-auto my-12 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg"
        isOpen={showModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleModalClosing}
        ariaHideApp={false}
      >
        {showLoginForm ? <LoginForm /> : <RegisterForm />}
      </Modal>
    </div>
  );
};

export default RegisterModal;
