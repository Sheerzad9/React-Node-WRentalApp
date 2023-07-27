import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store/modal-slice";
import { RootState } from "../../../store";
import ReactModal from "react-modal";

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
      <ReactModal
        isOpen={showModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleModalClosing}
      >
        <p>Modal text!</p>
        <button onClick={handleModalClosing}>Close Modal</button>
      </ReactModal>
    </div>
  );
};

export default RegisterModal;
