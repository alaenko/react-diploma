import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Page404 from './components/Page404';
import About from './components/About';



export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="container">
          <div className="col">
            <section class="top-sales">
            <Switch>
              <Route path="/contacts" component={Contacts} />
              <Route path="/about" component={About} />
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
