import { useEffect, useState } from "react";
import TextData from "@/ui/textData/TextData";

interface PlaceData {
  id: number;
  entrant: number;
  country: string;
  region: string;
  city: string;
  village: string;
  district: string;
  street: string;
  city_district: string;
}

const RightPlace = () => {
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        const response = await fetch(
          "https://utask.kstu.kg/api/v1/place-residense/",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3Mzg5MTIwLCJpYXQiOjE3MDczMDI3MjAsImp0aSI6IjQ2NmIzN2UwZmQ2OTRjY2Y4NDk5YWFhYmZhZjczMWMzIiwidXNlcl9pZCI6NDAwfQ.3KOEbrqFSXZVlP2xGkVKRDLCEr1mg0g-DyJquqjyNoY",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch place data");
        }

        const data: PlaceData[] = await response.json();
        if (data.length > 0) {
          setPlaceData(data[0]);
        } else {
          throw new Error("No place data available");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlaceData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!placeData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="bg-zinc-200 rounded-xl shadow-lg p-4">
        <h1 className="font-medium text-lg mb-4">Место проживания:</h1>

        <TextData label="Страна" value={placeData.country} />
        <TextData label="Область" value={placeData.region} />
        <TextData label="Районы областей" value={placeData.district} />
        <TextData label="Город" value={placeData.city} />
        <TextData label="Село" value={placeData.village} />
        <TextData label="Улица" value={placeData.street} />
        <TextData label="Район города" value={placeData.city_district} />
      </div>
    </div>
  );
};

export default RightPlace;
