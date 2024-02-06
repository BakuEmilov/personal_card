import { leftData } from "@/constants/personData";
import TextData from "@/ui/textData/TextData";
import React from "react";

const LeftDataPerson = () => {
  return (
    <div className="">
      <TextData label="Пол" value={leftData.gender} />

      <TextData label="Дата рождения" value={leftData.dateOfBirth} />

      <TextData label="Номер телефона" value={leftData.phoneNumber} />
      
      <TextData label="Email" value={leftData.email} />
    </div>
  );
};

export default LeftDataPerson;
