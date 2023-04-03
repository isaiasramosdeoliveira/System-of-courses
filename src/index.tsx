import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import StyleGlobal from "./global/Container/StyleGlobal";
import { RecoilRoot } from "recoil";
import ThemeGlobal from "./global/themes/ThemeGlobal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeGlobal>
        <StyleGlobal />
        <RouterProvider router={router} />
      </ThemeGlobal>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
