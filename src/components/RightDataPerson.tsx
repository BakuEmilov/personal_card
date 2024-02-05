import { rightData } from "@/constants/personData";
import TextData from "@/ui/TextData";
import React from "react";

const RightDataPerson = () => {
  return (
    <div>
      <TextData label="ИИН" value={rightData.inn} />

      <TextData label="№ паспорта" value={rightData.passportNumber} />

      <TextData label="Дата выдачи" value={rightData.dateOfIssue} />

      <TextData label="Дата оканчания" value={rightData.endDate} />
    </div>
  );
};

export default RightDataPerson;
