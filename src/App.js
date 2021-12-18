import './App.css';
import HeaderR from './Components/Header/Header';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import SimpleBottomNavigation from "./Components/MainNavigation"
import { Container } from '@material-ui/core';
function App() {
  return (
    <BrowserRouter>
      <HeaderR />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" component={Trending} exact></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/series" component={Series}></Route>
            <Route path="/search" component={Search}></Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
