import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// App をレンダリング（必要に応じて <h1>Hello, world!!</h1> にしてもOK）
root.render(<App />);

// もし App がまだないなら、代わりに以下でも動くよ
// root.render(<h1>Hello, world!!</h1>);
