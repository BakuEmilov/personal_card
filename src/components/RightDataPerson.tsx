import { rightData } from "@/constants/personData";
import TextData from "@/ui/TextData";
import React from "react";

const RightDataPerson = () => {
  return (
    <div>
      <TextData className="p-2" label="ИИН" value={rightData.inn} />

      <TextData
        className="p-2"
        label="№ паспорта"
        value={rightData.passportNumber}
      />

      <TextData
        className="p-2"
        label="Дата выдачи"
        value={rightData.dateOfIssue}
      />

      <TextData
        className="p-2"
        label="Дата оканчания"
        value={rightData.endDate}
      />
    </div>
  );
};

export default RightDataPerson;
