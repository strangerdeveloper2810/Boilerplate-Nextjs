\_document.tsx: mục đích lưu trữ tất cả các CSS được tạo ra bởi Emotion vào trong cache và sử dụng lại chúng cho các request tiếp theo giúp giảm thiểu thời gian render và tối ưu hóa hiệu suất của ứng dụng. Ngoài ra giúp tránh việc tạo ra các CSS trùng lặp giúp giảm dung lượng tải trang và cải thiện hiệu suất.

app.tsx: giúp tối ưu hóa hiệu suất của ứng dụng bằng cách giảm thiểu thời gian tạo mới các CSS và sử dụng lại các CSS đã được tạo ra trước đó. Khi chúng ta sử dụng Emotion để tạo các style cho các component trong ứng dụng, mỗi lần component được render lại, Emotion sẽ tạo ra các CSS mới tương ứng với các thay đổi trong component đó. Việc sử dụng Emotion cache trong \_app.tsx giúp lưu trữ các CSS đã được tạo ra trước đó, giảm thiểu việc tạo mới các CSS và cải thiện hiệu suất của ứng dụng.

link hướng dẫn: https://viblo.asia/p/cung-minh-tao-boilerplate-cho-du-an-nextjs-v12-phan-1-mui-v5-emotion-cache-va-axios-hooks-GyZJZnk2Jjm#_5-cai-dat-va-cau-hinh-axios-hooks-8
