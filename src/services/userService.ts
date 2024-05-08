import axios from "axios";
import { ApiResponse } from "../types";

const API_BASE_URL = "https://randomuser.me/api/";
const SEED = "myseed";
const USERS = 100;
export const PAGE_SIZE = 10;

export function getUsers() {
  const url = `${API_BASE_URL}?results=${USERS}&seed=${SEED}`;
  console.log("users", url);
  return axios.get<ApiResponse>(url);
}

// export function getPaginatedUsers(page: number) {
//   const url = `${API_BASE_URL}?page=${page}&results=${PAGE_SIZE}&seed=${SEED}`;
//   console.log("paginatedusers", url);
//   return axios.get<ApiResponse>(url);
// }
