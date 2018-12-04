import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { initialize } from '../actions/appActions';
import { connect } from 'react-redux';
import { Header, Footer, BgEffect } from '../component/Index';
import { Home, About, Contact, Projects, ProjectView} from './Index';
import autobind from 'autobind-decorator';
import Config from '../constants/Config';
import ReactGA from 'react-ga';

ReactGA.initialize(Config.googleTrackingId);

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
    openMenu : false
  };

  componentWillMount(){
    this.props.initialize();
    const { history} = this.props;
            history.listen(({ pathname})=>{
              ReactGA.pageview(pathname);
            });
            ReactGA.pageview(location.pathname);
  }

  componentWillReceiveProps(prevProps) {
    if (this.props.location !== prevProps.location) {
       this.setState({ openMenu: false})
    }
  }

  @autobind
  toggleMenu(){
    this.setState({
       openMenu: !this.state.openMenu
     })
  }

  render() {
      const { openMenu } =this.state,
            { app, history: {location: { pathname}} } = this.props,
              light =  pathname.includes('projects');

    return (
        <div className={`appear-animate ${app.model ? '': 'non-model'}`}>
             <div className="page" id="top">
               <Header toggleMenu={this.toggleMenu} openMenu={openMenu} {...app} light={light}/>
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
           <BgEffect  />
        </div>
      );
  }
}

export default App;