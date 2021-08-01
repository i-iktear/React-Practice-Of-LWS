import React from "react";
// import "./Functional Components/styled component/assets/css/dark.css";
import Tutorial from "./Functional Components/styled component/Tutorial";
import GlobalStyle from "./Functional Components/styled component/styles/Global.styles";

export default function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Tutorial />
    </div>
  );
}
