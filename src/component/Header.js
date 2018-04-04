import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Config from '../constants/Config';

class Header extends Component{

  constructor(props) {
    super(props);
    this.mobileNavEl = null;
    this.desktopNavEl = null;
    this.navBar = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  state = {
     scrolled: false,
     small: false,
     open: false,
  };

  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.handleScroll();
    this.init()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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

  handleResize(){
    const small = $(window).width() <= 1024;
    if(this.state.small != small) {
      this.setState({
        small: small
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
     const { scrolled, small, open, transparent, dark} = this.state;
     return <header>
       <nav className={`main-nav stick-fixed ${dark? 'dark': ''} ${scrolled ? 'js-transparent small-height': transparent ? 'js-transparent': 'transparent'} ${small ? 'mobile-on': ''}`} ref={el => { el ? this.navBar = el: null}}>
         <div className="full-wrapper relative clearfix">
           <div className="nav-logo-wrap local-scroll">
             <NavLink to="/" className={`logo ${scrolled ? 'small-height': ''}`} >
               <img src="/assets/images/logo.png" alt="home page" />
             </NavLink>
           </div>
           <div className={`mobile-nav ${scrolled ? 'small-height': ''}`} ref={el => { el ? this.mobileNavEl = el: null}} onClick={this.toggleMobileMenu}>
             <i className="fa fa-bars" />
           </div>
           <div className={`inner-nav desktop-nav ${open ? 'js-opened js-active': ''}`} ref={el => { el ? this.desktopNavEl = el: null}}>
             <ul className="clearlist">
               {Config.menu.map(({id, name, url}) =>
                 <li key={id} >
                   <NavLink to={url} activeClassName={'active'} className="mn-has-sub" >
                     {(url == '/download-cv' && !small) ? <span className="btn btn-mod btn-circle"><i className="fa fa-cloud-download"/> {name}</span>: name}
                   </NavLink>
                 </li>
               )}
             </ul>
           </div>
         </div>
       </nav>
     </header>
  }
};
export default Header;