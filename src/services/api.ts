import axios from "axios";

// CHANGE THIS IP

const API_URL = "http://192.168.21.187:5000/api";

const api = axios.create({
  baseURL: API_URL,

  timeout: 60000,

  headers: {
    "Content-Type": "application/json",
  },
});

export async function sendChatMessage(
  message: string,

  history: any[] = [],
) {
  try {
    const response = await api.post(
      "/chat",

      {
        message,

        history,
      },
    );

    return response.data;
  } catch (error: any) {
    console.log("CHAT API ERROR:", error.response?.data || error.message);

    throw error;
  }
}

export default api;
