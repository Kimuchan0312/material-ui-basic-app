import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import PaginationButton from "./components/PaginationButton";

function App() {
  return (
    <div>
      <SearchAppBar />
      <HomePage />
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "1rem" }}>
        <PaginationButton />
      </div>
    </div>
  );
}

export default App;
