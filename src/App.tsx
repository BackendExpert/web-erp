import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginReg/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}