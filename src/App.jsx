import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProjContainer from "./components/ProjContainer";

function App() {
  return (
    <>
      <div className="h-[100vh]">
        <Header />
        <LandingPage />
      </div>
      <ProjContainer/>
    </>
  );
}

export default App;
