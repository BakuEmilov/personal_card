"use client";

import { headerPerson } from "@/constants/personData";
import Image from "next/image";
import React from "react";

const ImagePerson = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={headerPerson.profileImage}
        alt="profile"
        width={200}
        height={200}
        className="border-black border-2 rounded-full"
      />
    </div>
  );
};

export default ImagePerson;
