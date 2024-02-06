import { headerPerson } from "@/constants/personData";
import TextData from "@/ui/textData/TextData";
import React, { useState } from "react";

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
