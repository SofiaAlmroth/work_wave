import axios from "axios";
import { ApiResponse } from "../types";

const API_BASE_URL = "https://randomuser.me/api/";
const SEED = "myseed";
const USERS = 100;
export const PAGE_SIZE = 12;

export async function getUsers() {
  const url = `${API_BASE_URL}?results=${USERS}&seed=${SEED}`;
  const response = await axios.get<ApiResponse>(url);
  return response?.data?.results || [];
}
