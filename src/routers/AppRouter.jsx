// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// stylesheet
import "../scss/styles.scss";

// // Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
import HomePage from "../pages/HomePage";
// import PageCharacters from "../pages/PageCharacters";
// import PageContact from "../pages/PageContact";
// import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;