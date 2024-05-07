import axios from "axios";
import { ApiResponse } from "../types";

const API_ENDPOINT = "https://randomuser.me/api/?results=10&seed=myseed";

function userUrl(id?: string) {
  if (id) return `https://randomuser.me/api/?seed=myseed&nat=us&id=${id}`;

  return API_ENDPOINT;
}

export function getUsers() {
  return axios.get<ApiResponse>(userUrl());
}

export function getUserById(id: string) {
  return axios.get<ApiResponse>(userUrl(id));
}
