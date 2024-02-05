import { leftData } from "@/constants/personData";
import TextData from "@/ui/TextData";
import React from "react";

const LeftDataPerson = () => {
  return (
    <div className="">
      <TextData className="p-2" label="Пол" value={leftData.gender} />

      <TextData
        className="p-2"
        label="Дата рождения"
        value={leftData.dateOfBirth}
      />

      <TextData
        className="p-2"
        label="Номер телефона"
        value={leftData.phoneNumber}
      />
      <TextData className="p-2" label="Email" value={leftData.email} />
    </div>
  );
};

export default LeftDataPerson;
