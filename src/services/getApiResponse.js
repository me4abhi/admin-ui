import axios from "axios";

const getApiResponse = async (API) => {
  try {
    const response = await axios.get(API);
    return response;
  } catch (error) {
    throw error;
  }
};

export default getApiResponse;
