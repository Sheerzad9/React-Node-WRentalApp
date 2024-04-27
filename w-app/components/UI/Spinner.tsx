import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Spinner: React.FC = () => {
  const { spinner } = useSelector((state: RootState) => state);

  if (!spinner.showSpinner) return <></>;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="border-t-4 border-b-4 border-accent rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-spin"></div>
    </div>
  );
};

export default Spinner;
