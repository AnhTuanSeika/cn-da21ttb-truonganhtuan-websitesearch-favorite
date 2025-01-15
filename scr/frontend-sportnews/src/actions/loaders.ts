// import queryString from 'query-string';
import queryString from "query-string";
import {
  getArticeByBusiness,
  getArticeByEntertainment,
  getArticeByHealth,
  getArticeByPolitic,
  getArticeBySearch,
  getArticeBySport,
  getArticeBysportt,
  getArticeByTechnology,
} from "./article.api";

export const homepageLoader = async () => {
  try {
    const data = await getArticeBySport();

    return data;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const politicLoader = async () => {
  try {
    const data = await getArticeByPolitic();
    //
    return {
      data,
      title: "CHÍNH TRỊ",
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const businessLoader = async () => {
  try {
    const data = await getArticeByBusiness();

    return {
      data,
      title: "KINH DOANH",
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const entertainmentLoader = async () => {
  try {
    const data = await getArticeByEntertainment();

    return {
      data,
      title: "GIẢI TRÍ",
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const technologyLoader = async () => {
  try {
    const data = await getArticeByTechnology();

    return {
      data,
      title: "CÔNG NGHỆ",
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const sportLoader = async () => {
  try {
    const data = await getArticeBysportt();

    return {
      data,
      title: "THỂ THAO",
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const healthLoader = async () => {
  try {
    const data = await getArticeByHealth();

    return {
      data,
      title: "SỨC KHỎE",
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const searchLoader = async ({ request }: any) => {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");

    const search = queryString.stringify({q: query});

    const data = await getArticeBySearch(search);

    return data;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
