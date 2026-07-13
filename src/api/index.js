import axios from "axios";
import queryString from "query-string";
const httpClient = axios.create({
  baseURL: "https://gutendex.com/",
});
export const getAllBooks = (options) => {
  return httpClient.get(`/books`);
};
