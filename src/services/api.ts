import axios from "axios";

export const fetchData = async (ApiKey, query, page) => {
  const BaseURL = "https://api.unsplash.com/search/photos";
  const response = await axios.get(`${BaseURL}?client_id=${ApiKey}`, {
    params: {
      query: query,
      client_id: "mq7ZxVWJVhP1ave3bX0cmTxKRM8CAZLl8PZN4xe2Pl0",
      per_page: "10",
      page: page,
    },
  });
  return response.data;
};
