"use client";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store/modal-slice";
import { RootState } from "../../../store";
import Modal from "react-modal";

const RegisterModal: React.FC = () => {
  const showModal = useSelector(
    (state: RootState) => state.modal.showRegisterModal
  );
  const dispatch = useDispatch();

  const handleModalClosing = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div>
      <Modal
        className="h-[250px] w-lg mx-auto my-48 bg-slate-400"
        isOpen={showModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleModalClosing}
      >
        <p>Modal text!</p>
        <button onClick={handleModalClosing}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default RegisterModal;
