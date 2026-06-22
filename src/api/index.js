import axios from "axios";
import queryString from "query-string";
const httpClient = axios.create({
  baseURL: "https://fakerapi.it/api/v2",
});
export const getAllBooks = (options) => {
  return httpClient.get(`/books`);
};
