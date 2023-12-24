import './css/app.css';
import './fonts/Girloy/stylesheet.css';

import Header from './components/header/Header';
import Current from './components/current/Current';
import Categories from './components/categories/Categories';
import Bestsellers from './components/bestsellers/Bestsellers';
import News from './components/news/News.jsx';
import Auction from './components/auction/auction';
import Addresses from './components/addresses/Addresses';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className="app">
      <Header />
      <Current />
      <Categories />
      <Bestsellers />
      <News />
      <Auction />
      <Addresses />
      <Footer />
    </main>
  );
}

export default App;
