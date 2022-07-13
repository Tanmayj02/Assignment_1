import "./App.css";
import { HomePage } from "./Component/HomePage";
import { Taskify } from "./Testing/Taskify";
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
        ;{/* <Taskify />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;

// <Container fluid>
//   <Card>
//     <Link to="/user"> Go here</Link>
//     <Card.Img src={url} className="imageheader" />
//   </Card>
// </Container>
// <Routes>
//   <Route path="/user" element={<About />} />
// </Routes>
