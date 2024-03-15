import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProductInfo from "./pages/ProductInfo/indexs";
import Apps from "./video/Apps";

// import ProductInfo from "./pages/Productinfo";
function App() {
  const { loading } = useSelector(state => state.loaders);
  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedPage><Home /></ProtectedPage>} />
          <Route path="/product/:id" element={<ProtectedPage><ProductInfo /></ProtectedPage>} />
          <Route path="/profile" element={<ProtectedPage><Profile /></ProtectedPage>} />
          <Route path="/admin" element={<ProtectedPage><Admin/></ProtectedPage>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/video/:roomID" element={<Apps/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
