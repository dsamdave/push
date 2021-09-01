import Blog from './components/Blog';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import "./style/index.scss"
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router , route, Switch} from 'react-router-dom'
import Home from './Pages/Home';

const App = () => {
  const [blogs, setblog] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setblog(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
    })
    
  }, [])
  


  return (
    <div className="app">
      <Router>
          <Navbar title="Logo" end="Home" start="About" />
      
        <Switch>
          
          <route path="/about">
             <About />
          </route>
          <route path="/contact">
            <Contact />
          </route>
          <route  path="/" exact>
            <Home />
          </route>
         </Switch>
      </Router>
     </div>
  );
}



export default App;
