
import './App.css';
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";




// used then importing links


const App = () => {

  return (
      <div>

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/game" element={<GamePage/>}/>

          </Routes>
        </BrowserRouter>
      </div>

  );
};

export default App;

