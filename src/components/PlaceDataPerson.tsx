import { placeOfBirth, placeOfResidence } from "@/constants/personData";
import TextData from "@/ui/textData/TextData";
import React from "react";

const PlaceDataPerson = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/3 m-4 p-4">
        <h1 className="font-medium text-lg mb-4">Место рождения:</h1>

        <TextData label="Страна" value={placeOfBirth.country} />
        <TextData label="Область" value={placeOfBirth.area} />
        <TextData
          label="Районы областей"
          value={placeOfBirth.districtsOfTheRegions}
        />
        <TextData label="Город" value={placeOfBirth.city} />
        <TextData label="Село" value={placeOfBirth.village} />
        <TextData label="Улица" value={placeOfBirth.street} />
        <TextData label="Район города" value={placeOfBirth.areaOfTheCity} />
      </div>
      <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/3 m-4 p-4">
        <h1 className="font-medium text-lg mb-4">Место прописки:</h1>

        <TextData label="Страна" value={placeOfResidence.country} />
        <TextData label="Область" value={placeOfResidence.area} />
        <TextData
          label="Районы областей"
          value={placeOfResidence.districtsOfTheRegions}
        />
        <TextData label="Город" value={placeOfResidence.city} />
        <TextData label="Село" value={placeOfResidence.village} />
        <TextData label="Улица" value={placeOfResidence.street} />
        <TextData label="Район города" value={placeOfResidence.areaOfTheCity} />
      </div>
      <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/3 m-4 p-4">
        <h1 className="font-medium text-lg mb-4">Место проживания:</h1>

        <TextData label="Страна" value={placeOfResidence.country} />
        <TextData label="Область" value={placeOfResidence.area} />
        <TextData
          label="Районы областей"
          value={placeOfResidence.districtsOfTheRegions}
        />
        <TextData label="Город" value={placeOfResidence.city} />
        <TextData label="Село" value={placeOfResidence.village} />
        <TextData label="Улица" value={placeOfResidence.street} />
        <TextData label="Район города" value={placeOfResidence.areaOfTheCity} />
      </div>
    </div>
  );
};

export default PlaceDataPerson;
