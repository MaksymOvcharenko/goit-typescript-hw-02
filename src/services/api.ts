import axios from "axios";
interface Image{
  
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;

}
interface Response{
   
  total: number;
  total_pages: number;
  results: Image[];

}
export const fetchData = async (ApiKey:string, query:string, page:number): Promise<Response> => {
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
