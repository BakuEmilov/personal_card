import TextData from "@/ui/TextData";
import React from "react";

const PlaceDataPerson = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/3 m-4 p-4">
        <h1 className="font-medium text-lg mb-4">Место рождения:</h1>

        <TextData label="Страна" value="" />
        <TextData label="Область" value="" />
        <TextData label="Районы областей" value="" />
        <TextData label="Город" value="" />
        <TextData label="Село" value="" />
        <TextData label="Улица" value="" />
        <TextData label="Район города" value="" />
      </div>
      <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/3 m-4 p-4">
        <h1 className="font-medium text-lg mb-4">Место прописки:</h1>

        <TextData label="Страна" value="" />
        <TextData label="Область" value="" />
        <TextData label="Районы областей" value="" />
        <TextData label="Город" value="" />
        <TextData label="Село" value="" />
        <TextData label="Улица" value="" />
        <TextData label="Район города" value="" />
      </div>
      <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/3 m-4 p-4">
        <h1 className="font-medium text-lg mb-4">Место проживания:</h1>

        <TextData label="Страна" value="" />
        <TextData label="Область" value="" />
        <TextData label="Районы областей" value="" />
        <TextData label="Город" value="" />
        <TextData label="Село" value="" />
        <TextData label="Улица" value="" />
        <TextData label="Район города" value="" />
      </div>
    </div>
  );
};

export default PlaceDataPerson;
