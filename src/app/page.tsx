"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import HeaderPerson from "@/components/HeaderPerson";
import ImagePerson from "@/components/ImagePerson";
import LeftDataPerson from "@/components/LeftDataPerson";
import PlaceDataPerson from "@/components/PlaceDataPerson";
import RightDataPerson from "@/components/RightDataPerson";
import PrintButton from "@/ui/PrintButton";

import "./globals.css";

export default function Home() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="max-w-[1100px] m-auto">
      <div className="flex justify-end">
        <PrintButton onClick={handlePrint} />
      </div>
      <div ref={componentRef}>
        <div className="flex">
          <div className="bg-zinc-200 rounded-xl shadow-lg m-4 p-4">
            <ImagePerson />
          </div>
          <div className="flex items-center bg-zinc-200 rounded-xl shadow-lg w-full m-4 p-4">
            <HeaderPerson />
          </div>
        </div>

        <div className="left-right flex flex-col md:flex-row">
          <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/2 m-4 p-4">
            <LeftDataPerson />
          </div>

          <div className="bg-zinc-200 rounded-xl shadow-lg md:w-1/2 m-4 p-4">
            <RightDataPerson />
          </div>
        </div>

        <div>
          <PlaceDataPerson />
        </div>
      </div>
    </div>
  );
}
