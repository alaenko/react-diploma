import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderWithRouter from './components/Header';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Page404 from './components/Page404';
import About from './components/About';
import Banner from './components/Banner';
import Home from './components/Home';
import PageCatalog from './components/PageCatalog';
import CatalogItem from './components/CatalogItem';



export default function App() {
  return (
    <Router>
      <div>
        <HeaderWithRouter />
        <main className="container">
          <div className="col">
            <section className="top-sales">
            <Banner />
            <Switch>
              <Route path="/products/:id.html" component={CatalogItem} />
              <Route path="/about.html" component={About} />
              <Route path="/catalog.html" component={PageCatalog} />
              <Route path="/contacts.html" component={Contacts} />
              <Route path="/" component={Home} exact/>
              <Route component={Page404} />
            </Switch>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
