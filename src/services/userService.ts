import axios from "axios";
import { ApiResponse } from "../types";

const API_BASE_URL = "https://randomuser.me/api/";
const SEED = "myseed";
const USERS = 100;
export const PAGE_SIZE = 12;

export function getUsers() {
  const url = `${API_BASE_URL}?results=${USERS}&seed=${SEED}`;
  console.log("users", url);
  return axios.get<ApiResponse>(url);
}
