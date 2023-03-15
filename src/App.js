
// import "./App.css";

import { BrowserRouter, Routes,Route , Link } from "react-router-dom";
import Navbar from "./screens/Navbar";
import SideDrower from "./screens/SideDrower"
import VideoPlayer from "./screens/VideoPlayer"
import Login from "./loginScreens/Login"
import SignUp from "./loginScreens/SignUp";
import Main from "./screens/Main";
import Test from "./screens/TestApi"

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BrowserRouter>
      {/* <SideDrower/> */}
    <Routes>
      <Route path ="/VideoPlayer/:id" element={<VideoPlayer/>} />
      <Route path ="/" element={ <Main />} />
      <Route path ="/login" element={ <Login />} />
      <Route path ="/signup" element={ <SignUp />} />
      <Route path ="/test" element={ <Test />} />

    </Routes>
    {/* <Link to="/"></Link> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
