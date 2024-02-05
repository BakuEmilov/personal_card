import React from "react";
import { CiSaveDown2 } from "react-icons/ci";

type IButton = {
  onClick?: () => void;
  className?: string;
};

const PrintButton: React.FC<IButton> = ({ onClick, className }) => {
  return (
    <button className={`${className} m-4`} onClick={onClick}>
      <CiSaveDown2 size={40}/>
    </button>
  );
};

export default PrintButton;
