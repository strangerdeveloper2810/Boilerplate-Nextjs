import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";

import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/light-theme-option";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const lightTheme = createTheme(lightThemeOptions);

function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;

/**
 * Giải thích

Ở trên chúng ta sử dụng CacheProvider để truyền cache của chúng ta tạo vào hệ thống Emotion. Nếu để ý các bạn có thể thấy chúng ta sử dụng createEmotionCache ở cả 2 file: _document.tsx và _app.tsx. Tùy vào từng file sẽ có mục đích riêng:
Trong _document.tsx: được sử dụng để xây dựng các CSS inline cho trang web của chúng ta. Việc sử dụng inline CSS sẽ giảm thời gian tải trang bằng cách tránh các yêu cầu CSS không cần thiết. Bằng cách đó, Emotion cache giúp tăng tốc độ tải trang và cải thiện SEO.
Trong _app.tsx: được sử dụng để xử lý tất cả các style của ứng dụng. Khi tải một trang mới, các style được lưu trữ trong cache sẽ được sử dụng lại, giúp tăng tốc độ tải trang và cải thiện trải nghiệm người dùng.
Đặt tag CSSBaseline phía trên tag Component để đảm bảo rằng các style của trang web được áp dụng đúng cách và không bị ghi đè hoặc ảnh hưởng bởi các style khác.
 */
