import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Config from '../constants/Config';
import FlareAnimation from '../component/FlareAnimation';
import Menu from '../component/Menu';

class Header extends Component{

  constructor(props) {
    super(props);
    this.mobileNavEl = null;
    this.desktopNavEl = null;
    this.navBar = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  state = {
     scrolled: false,
     small: false,
     open: false,
  };

  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.init()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  init(){
     const size = `${$(this.navBar).height()}px`;
     $(this.mobileNavEl).css({
          width: size,
          height: size,
          lineHeight : size
     })
  }

  handleScroll() {
    const scrollTop = $(window).scrollTop() > 10;
          if(this.state.scrolled != scrollTop) {
            this.setState({
              scrolled: scrollTop
            });
          }
  }


  toggleMobileMenu(){
    const $target =  $(this.desktopNavEl);
    this.setState({
       open : !this.state.open
    });
    this.state.open ? $target.slideUp("slow") : $target.slideDown('slow')
  }

  render(){
     const { width, light } = this.props,
           { scrolled, open, transparent, dark} = this.state,
             small  = width < 768;

     return <header>
       <nav className={`main-nav stick-fixed ${dark? 'dark': ''} ${light ? 'light': ''} ${scrolled ? 'js-transparent small-height': transparent ? 'js-transparent': 'transparent'} ${small ? 'mobile-on': ''}`} ref={el => { el ? this.navBar = el: null}}>
         <FlareAnimation bottom light>
           <div className="full-wrapper relative clearfix">
             <div className="nav-logo-wrap local-scroll">
               <NavLink to="/" className={`logo ${scrolled ? 'small-height': ''}`} >
                 <img src={`/assets/images/${(scrolled || light) ? 'logo-dark': 'logo-light'}.png`} alt="home page" />
               </NavLink>
             </div>
             {small
               ? <Menu small={small} {...this.props} />
               : <div className={`inner-nav desktop-nav ${open ? 'js-opened js-active': ''}`} ref={el => { el ? this.desktopNavEl = el: null}}>
                 <ul className="clearlist">
                   {Config.menu.map(({id, name, url}) =>
                     <li key={id} >
                       <NavLink to={url} activeClassName={'active'} className="mn-has-sub" exact={true} >
                         {(url === '/download-cv' && !small) ? <span className="btn btn-mod btn-circle"><i className="fa fa-cloud-download"/> {name}</span>: name}
                       </NavLink>
                     </li>
                   )}
                 </ul>
               </div>
             }
           </div>
         </FlareAnimation>
       </nav>
     </header>
  }
};
export default Header;