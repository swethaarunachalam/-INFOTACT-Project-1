
import Navbar from "./components/Navbar";

import Home from "./pages/Home.jsx";
import Footer from "./pages/Footer.jsx";
import Services from "./components/Services.jsx";
import CurrentNew from "./components/CurrentNew.jsx";
import BookService from "./pages/BookService.jsx";
import SalonWomen from "./components/SalonWomen.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import HomeRepair from "./components/HomeRepair.jsx";
import SalonMen from "./components/SalonMen.jsx";
import MassageMen from "./components/MassageMen.jsx";
import CleaningPest from "./components/CleaningPest.jsx";



const App = () => {
  return (
    <>
      <Navbar />

      <Home />
      <BookService />
      <CurrentNew />
      <Services />
      <SalonWomen />
      <AdminPanel />
      <HomeRepair />
      <CleaningPest />
      <MassageMen />
      <SalonMen />
      <Footer />
    </>
  );
};

export default App;
