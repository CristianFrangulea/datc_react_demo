import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Course from './pages/Course';

const App = () => {
  
  return (
    <BrowserRouter>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/course" component={Course} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
