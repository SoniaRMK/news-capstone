import { BrowserRouter, Route } from 'react-router-dom';
// import Search from './Search';
import SearchLandingPage from '../pages/SearchLandingPage';
import Homepage from '../pages/Homepage';
import TopNav from './TopNav';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='container Header flex-column'>
      <h1 className='Header__title text-center'>
        <a href='/'>POLITICO</a>
      </h1>
      <BrowserRouter>
        <TopNav />
        <Route exact path='/search/:searchTerm'>
          <SearchLandingPage />
        </Route>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default Header;
