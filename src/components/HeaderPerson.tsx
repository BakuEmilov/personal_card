import { headerPerson } from "@/constants/personData";
import TextData from "@/ui/TextData";
import React from "react";

const HeaderPerson = () => {
  return (
    <div>
      <TextData label="Фамилия" value={headerPerson.surName} />

      <TextData label="Имя" value={headerPerson.name} />

      <TextData label="Отчество" value={headerPerson.middleName} />
    </div>
  );
};

export default HeaderPerson;
