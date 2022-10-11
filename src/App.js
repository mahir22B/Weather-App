import { useState } from "react";
import "./App.css";
import HeaderButtons from "./components/HeaderButtons";
import Weather from "./components/Weather";

function App() {
  const [place, setPlace] = useState(["NEW YORK", 43, -75]);

  return (
    <div className="App">
      <HeaderButtons setPlace={setPlace} />
      <Weather place={place} />
    </div>
  );
}

export default App;
