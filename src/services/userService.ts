import axios from "axios";
import { ApiResponse } from "../types";

const API_ENDPOINT = "https://randomuser.me/api/?results=100&seed=myseed";

export function getUsers() {
  return axios.get<ApiResponse>(API_ENDPOINT);
}
