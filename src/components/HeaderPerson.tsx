import { useEffect, useState } from "react";
import TextData from "@/ui/textData/TextData";

interface HeaderData {
  id: number;
  user: null | any;
  first_name: string;
  surname: string;
  last_name: string;
  number_phone: string;
  email: string;
}

const HeaderPerson: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await fetch("https://utask.kstu.kg/api/v1/entrant/", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3Mzg5MTIwLCJpYXQiOjE3MDczMDI3MjAsImp0aSI6IjQ2NmIzN2UwZmQ2OTRjY2Y4NDk5YWFhYmZhZjczMWMzIiwidXNlcl9pZCI6NDAwfQ.3KOEbrqFSXZVlP2xGkVKRDLCEr1mg0g-DyJquqjyNoY",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch header data");
        }

        const data: HeaderData[] = await response.json();
        if (data.length > 0) {
          setHeaderData(data[0]); 
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchHeaderData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!headerData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <TextData label="Фамилия" value={headerData.surname} />
      <TextData label="Имя" value={headerData.first_name} />
      <TextData label="Отчество" value={headerData.last_name} />
      <TextData label="Номер телефона" value={headerData.number_phone} />
      <TextData label="Email" value={headerData.email} />
    </div>
  );
};

export default HeaderPerson;
