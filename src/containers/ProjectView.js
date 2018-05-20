import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectIfNeeded } from "../actions/workActions";
import autobind from 'autobind-decorator';
import { Section, Divider, Tags, Spinner, FloatTexts, WordAnimation } from '../component/Index';



@connect(
  state =>{ return {user: state.user, work: state.work}},
  dispatch => ( bindActionCreators({
    fetchProjectIfNeeded
  }, dispatch))
)
class ProjectView extends Component{

  constructor(props) {
    super(props);
  }

  fetchData(props){
     const { fetchProjectIfNeeded } = props;
             fetchProjectIfNeeded();
  }

  componentWillMount(){
     this.fetchData(this.props);
  }


  render() {

    const { work: { allProjects=[], projectsLoading }, match: { params: { id}} } = this.props,
            activeProject = allProjects.find(project => project.id == id);

            if(projectsLoading || !activeProject){
              return <Spinner />
            }

            const { name, summery, tags, _images, _thumbnail, clientName } = activeProject;




    return (
      <div>
        <Section background={'/assets/bg/2.jpeg'} theme="dark" alpha={70} parallax className={'blurry'} >
          <div className="js-height-full container">
            <div className="home-content">
              <div className="home-text">
                <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                  <FloatTexts>{name}</FloatTexts>
                </h2>
                <h1 className="hs-line-8 no-transp font-alt mb-50 mb-xs-30">
                  <WordAnimation>{tags.map(item => item.name).join(" / ")}</WordAnimation>
                </h1>
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
                   <Tags collection={tags} />
                   <div className="work-detail">
                     <h5 className="font-alt mt-0 mb-20">Project Details</h5>
                     <div className="work-full-detail">
                       <p><strong>Client:</strong>{clientName}</p>
                       <p><strong>Date:</strong>1th Februery, 2014</p>
                      {/* <p><strong>Link:</strong><a href="#" target="_blank">www.rhythm.bestlooker.pro</a></p>*/}
                     </div>
                   </div>
                 </div>
                 <div className="col-md-9 col-sm-6 mb-sm-50 mb-xs-30">{summery}</div>
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