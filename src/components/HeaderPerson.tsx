import { headerPerson } from "@/constants/personData";
import TextData from "@/ui/TextData";
import React from "react";

const HeaderPerson = () => {
  return (
    <div>
      <TextData className="p-2" label="Фамилия" value={headerPerson.surName} />

      <TextData className="p-2" label="Имя" value={headerPerson.name} />

      <TextData
        className="p-2"
        label="Отчество"
        value={headerPerson.middleName}
      />
    </div>
  );
};

export default HeaderPerson;
