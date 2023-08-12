import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/login";
import Signup from "./components/signup";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/videos"element={<Videos />}/>
        <Route path="/upload"element={<Upload />}/>
        <Route path="/login"element={<Login />}/>
        <Route path="/signup"element={<Signup />}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
