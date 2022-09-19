import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/booking' element={<Booking />} />
      </Routes>
      {/* <Footer />S */}
    </Router>
  );
};

export default App;
