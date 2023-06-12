import Axios from "axios";
import { configure } from "axios-hooks";
import LRU from "lru-cache";
import { AppConfig } from "./app.config";

const axios = Axios.create({
  baseURL: AppConfig.apiBase,
});

const cache = new LRU({ max: 10 });

// request interceptor to add token to request headers
axios.interceptors.request.use(
  async (config) => {
    // Implement function to get token
    const token = {
      accessToken: "my-access-token",
      refreshToken: "my-refresh-token",
    };

    if (token?.accessToken) {
      config.headers.Authorization = `Bearer ${token?.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Implement logic here

    return Promise.reject(error);
  }
);

configure({ axios, cache });
/**
 * Giải thích:

Chúng ta sẽ lấy end point từ app config để dùng làm baseURL mặc định khi gọi đi.
Sử dụng LRU cache để lưu trữ tạm thời các kết quả phản hồi từ các yêu cầu axios trước đó để tránh việc gửi lại các yêu cầu giống nhau và giảm thiểu thời gian chờ đợi phản hồi từ server.
axios.interceptors.request: đây là nơi chúng ta sẽ thêm vào access_token để gửi đi, các bạn sẽ không cần phải thêm access token vào mỗi khi tạo các request khác nhau.
axios.interceptors.response: mình sẽ xử lý việc dùng refresh_token để lấy access_token mới khi hết hạn. Chúng ta sẽ quay trở lại 2 interceptors này khi cấu hình xác thực ở Phần 2.
 */
