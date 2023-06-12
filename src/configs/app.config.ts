export const AppConfig = {
  apiBase: process.env.NEXT_PUBLIC_API_BASE,
  enableApiMockup: !!parseInt(process.env.NEXT_PUBLIC_ENABLE_API_MOCKUP || "0"),
};

/**
 * apiBase: endpoint API mà chúng ta sẽ gọi tới.
 * enableApiMockup: trả về giá trị boolean cho biết có đang sử dụng data mockup thay vì gọi đến API hay không.
 */
