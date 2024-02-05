// TextData.js
import React from "react";

type ITextData = {
  label: string;
  value: string;
  className?: string;
};

const TextData: React.FC<ITextData> = ({ label, value, className }) => {
  return (
    <div className={`${className} p-2`}>
      <span className="font-medium">{label}:&nbsp;</span>
      <span>{value}</span>
    </div>
  );
};

export default TextData;
