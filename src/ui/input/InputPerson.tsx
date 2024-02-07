import React from "react";
import { Input } from "antd";

type IInput = {
  className?: string;
  placeholder?: string;
};

const InputPerson: React.FC<IInput> = ({ className, placeholder }) => {
  return <Input className={className} placeholder={placeholder} />;
};

export default InputPerson;
