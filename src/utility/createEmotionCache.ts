import createCache from "@emotion/cache";
/**
 * key: dùng để định danh tên của cache được tạo ra và được sử dụng để đảm bảo rằng mỗi lần tạo một cache mới với các tùy chọn giống nhau, cache được trả về là duy nhất và tương ứng với các tùy chọn đó.
 * prepend: giá trị true giúp các MUI styles được chuyển lên đầu và load trước. Như trong docs của MUI:
 */
const createEmotionCache = () => {
  return createCache({ key: "mui-style", prepend: true });
};

export default createEmotionCache;
