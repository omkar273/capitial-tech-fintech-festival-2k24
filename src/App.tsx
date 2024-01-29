import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./features/landingpage/landing_page";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
