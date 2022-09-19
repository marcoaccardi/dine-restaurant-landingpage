import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' component={<Home />} />
          <Route exact path='/booking' component={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
