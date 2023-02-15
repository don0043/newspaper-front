import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NewPost from "./components/NewPost/NewPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            {/*<Route path="/register" element={<Register/>}/>*/}
            <Route path="/new-post" element={<NewPost/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
