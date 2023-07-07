import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Theme";
//ctx
import { UserProvider } from "./contexts";
import { ViewportProvider } from "./contexts/viewport"; // will be used in the future
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ViewportProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Router>
              <App />
            </Router>
          </CssBaseline>
        </ThemeProvider>
      </ViewportProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\`\` Welcome \`\`\`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
\`\`                          \`\`
\`\`                          \`\`
\`\`         \`\`\`\`\`\`\`\`\`\`       \`\`
\`\`        \`      \`\`\`        \`\`
\`\`             \`\`\`          \`\`
\`\`            \`\`\`           \`\`
\`\`                          \`\`
\`\`         \`\`\`              \`\`
\`\`        \`\`\`      \`        \`\`
\`\`       \`\`\`\`\`\`\`\`\`\`         \`\`
\`\`                          \`\`
\`\`                          \`\`
\`\`                          \`\`
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\` to my site \`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
`);

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker.register("/service-worker.js");
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
