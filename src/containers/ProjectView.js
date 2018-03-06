import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Section, Divider, Tags } from '../component/Index'
import autobind from 'autobind-decorator';

class ProjectView extends Component{

  constructor(props) {
    super(props);
  }

  state = {
  };


  render() {
    return (
      <div>
        <Section  background="/assets/images/projects-6.jpg" theme="dark" alpha={60} parallax >
          <div className="js-height-full container">
            <div className="home-content">
              <div className="home-text">
                <h1 className="hs-line-8 no-transp font-alt mb-50 mb-xs-30">Branding / Design / Photography</h1>
                <h2 className="hs-line-14 font-alt mb-50 mb-xs-30"> Creative Project</h2>
              </div>
            </div>
            <div className="local-scroll">
              <a href="#about" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon" /></a>
            </div>
          </div>
        </Section>

        <Section alpha="70" type="light" >
           <div className="container">
             <div className="section-text">
               <div className="row">
                 <div className="col-md-3 mb-sm-50 mb-xs-30">
                   <Tags />
                   <div className="work-detail">
                     <h5 className="font-alt mt-0 mb-20">Project Details</h5>
                     <div className="work-full-detail">
                       <p><strong>Client:</strong>Envato Users</p>
                       <p><strong>Date:</strong>1th Februery, 2014</p>
                      {/* <p><strong>Link:</strong><a href="#" target="_blank">www.rhythm.bestlooker.pro</a></p>*/}
                     </div>
                   </div>
                 </div>
                 <div className="col-md-9 col-sm-6 mb-sm-50 mb-xs-30">
                   Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
                   Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
                 </div>
                 <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">

                 </div>
               </div>
               <div className="row">


               </div>
             </div>
           </div>
        </Section>


        <Divider/>
        <div className="work-navigation clearfix">
          <NavLink to="/project/1" className="work-prev"><span><i className="fa fa-chevron-left" />&nbsp;Previous</span></NavLink>
          <NavLink to="/projects" className="work-all"><span><i className="fa fa-times" />&nbsp;All works</span></NavLink>
          <NavLink to="/project/2" className="work-next"><span>Next&nbsp;<i className="fa fa-chevron-right" /></span></NavLink>
        </div>
      </div>
    );
  }
}

export default ProjectView;