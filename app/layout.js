import { createElement } from "react";

export default function RootLayout({ children }) {
  return createElement(
    "html",
    { lang: "ko" },
    createElement("body", null, children)
  );
}
