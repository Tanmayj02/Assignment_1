import { HomePage } from "./Component/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Component/User/UserCardComponent/CardFooter/ShowUserDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/user/:username" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
