import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Header, Footer } from '../component/Index';
import { Home, About, Contact, Projects} from './Index';

class App extends Component{
    render() {
        return (
          <div className="appear-animate">
               <div className="page" id="top">
                 <Header/>
                 <div>
                   <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/about" component={About} />
                     <Route path="/contact-us" component={Contact} />
                     <Route path="/projects" component={Projects} />
                   </Switch>
                   <Footer/>
                 </div>
               </div>
          </div>
        );
    }
}

export default App;