import { placeOfBirth, placeOfResidence } from "@/constants/personData";
import TextData from "@/ui/textData/TextData";
import React from "react";
import LeftPlace from "./LeftPlace";
import CenterPlace from "./CenterPlace";
import RightPlace from "./RightPlace";

const PlaceDataPerson = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 m-4 p-4">
        <LeftPlace />
      </div>
      <div className="md:w-1/3 m-4 p-4">
        <CenterPlace />
      </div>
      <div className="md:w-1/3 m-4 p-4">
        <RightPlace />
      </div>
    </div>
  );
};

export default PlaceDataPerson;
