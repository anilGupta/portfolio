import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { initialize } from '../actions/appActions';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { Header, Footer, BgEffect } from '../component/Index';
import { Home, About, Contact, Projects, ProjectView} from './Index';

@connect(
  state =>{ return {app: state.app}},
  dispatch => ( bindActionCreators({
      initialize
  }, dispatch))
)
class App extends Component{

  constructor(props){
    super(props);
  }

  state = {
    routeChange : false
  };

  componentWillReceiveProps(prevProps) {
    if (this.props.location !== prevProps.location) {
       this.setState()
    }
  }

  @autobind
  toggleMenu(){
     this.state({
       routeChange: !this.state.routeChange
     })
  }
    

    render() {
        const { openMenu } =this.state;
        return (
          <div className="appear-animate">
               <div className="page" id="top">
                 <Header routeChange={}/>
                 <div>
                   <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/about" component={About} />
                     <Route path="/contact-us" component={Contact} />
                     <Route path="/projects/:tagId?" component={Projects} />
                     <Route path="/project/:id" component={ProjectView} />
                   </Switch>
                   <Footer/>
                 </div>
               </div>
               {/*<BgEffect />*/}
          </div>
        );
    }
}

export default App;