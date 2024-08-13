import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";
import FileUpload from "./components/FileUpload";
import OnClickEvent from "./components/OnClickEvent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/update" element={<ProfileUpdate />} />
          <Route path="/file" element={<FileUpload />} />
          <Route path="/click" element={<OnClickEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
