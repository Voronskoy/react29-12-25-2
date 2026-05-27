import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import TextSizeWrapper from "./components/TextSizeWrapper/TextSizeWrapper";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import HerosPage from "./pages/HerosPage";
import ListPage from "./pages/ListPage";
import PlayList from './components/PlayList/PlayList';
import GamesList from './components/GamesList/GamesList';
import QuotesList from './components/QuotesList/QuotesList';
import CampPage from './pages/CampPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <TextSizeWrapper>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/heroes" element={<HerosPage />} />
                <Route path="/camp" element={<CampPage />} />
              <Route path="/list" element={<ListPage />}>
                <Route index element={<Navigate to='quote' replace/>}/>
                <Route path="play" element={<PlayList/>} />
              
                <Route path="quote" element={<QuotesList/>}/>
              </Route>
            </Routes>
          </main>
        </TextSizeWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
