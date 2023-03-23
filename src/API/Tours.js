import axios from "axios";
//import { BASE_URL } from "../config/Config";

export const getTours = async () => {
  const URL = "https://course-api.com/react-tours-project";
  try {
    const response=await axios.get(URL)
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error)
    return error.response.status
  }
};
