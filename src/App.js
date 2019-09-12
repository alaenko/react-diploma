import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Page404 from './components/Page404';
import About from './components/About';
import Banner from './components/Banner';
import Home from './components/Home';
import Catalog from './components/Catalog';



export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="container">
          <div className="col">
            <section className="top-sales">
            <Banner />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/" component={Home} />
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
