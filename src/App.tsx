import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginUser from "./components/LoginSignup/loginUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}