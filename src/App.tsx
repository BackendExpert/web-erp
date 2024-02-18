import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/loginSignup/login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}