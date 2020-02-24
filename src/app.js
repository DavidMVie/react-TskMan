import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


import Header from './components/Header';
import Footer from './components/Footer'
import DashboardPage from './components/DashboardPage'

class App extends React.Component {

  render() {
    return (
      <div className="content">
        <Header />
        <DashboardPage />
        <Footer />
      </div>
    )
  }  
}

ReactDOM.render(<App />, document.getElementById('root'))