import {
  IHeaderPerson,
  ILeftData,
  IPlaceOfBirth,
  IPlaceOfRegistration,
  IPlaceOfResidence,
  IRightData,
} from "@/types";

export const headerPerson: IHeaderPerson = {
  profileImage: "/profile.png",
  surName: "Эмилов",
  name: "Байыр",
  middleName: "Тынчтыкович",
};

export const leftData: ILeftData = {
  gender: "Мужской",
  dateOfBirth: "11.02.2006",
  phoneNumber: "+996 707 76 38 96",
  email: "emilovbaku530@gmail.com",
};

export const rightData: IRightData = {
  inn: "123456789012",
  passportNumber: "12345678",
  dateOfIssue: "11.02.21",
  endDate: "11.02.28",
};

export const placeOfBirth: IPlaceOfBirth = {
  country: "Кыргызстан",
  area: "Ысык-Кол",
  districtsOfTheRegions: "",
  city: "Каракол",
  village: "",
  street: "Искакова №89",
  areaOfTheCity: "Заречье",
};

export const placeOfRegistration: IPlaceOfRegistration = {
  country: "Кыргызстан",
  area: "Ысык-Кол",
  districtsOfTheRegions: "Тюп",
  city: "",
  village: "Сан-Таш",
  street: "Шабдан Баатыр",
  areaOfTheCity: "",
};

export const placeOfResidence: IPlaceOfResidence = {
  country: "Кыргызстан",
  area: "Чуй",
  districtsOfTheRegions: "",
  city: "Бишкек",
  village: "",
  street: "Тыналиева 14/2",
  areaOfTheCity: "Джал 29",
};
