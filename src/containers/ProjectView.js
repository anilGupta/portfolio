import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectIfNeeded } from "../actions/workActions";
import { togglePhotoGallery } from "../actions/appActions";
import autobind from 'autobind-decorator';
import { Section, Divider, Tags, Spinner, FloatTexts, WordAnimation, FlareAnimation, LineAnimation, ProjectSlider, MasonryList } from '../component/Index';
import Masonry from 'react-masonry-component';
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipe} from 'react-photoswipe';


@connect(
  state =>{ return {user: state.user, work: state.work, app: state.app}},
  dispatch => ( bindActionCreators({
    fetchProjectIfNeeded,
    togglePhotoGallery
  }, dispatch))
)
class ProjectView extends Component{

  constructor(props) {
    super(props);
    this.togglePhotoSwipe = this.togglePhotoSwipe.bind(this);
  }

  static defaultProps={
    pagination : [
      { title: 'PREVIOUS', icon: 'chevron-left', className: 'work-prev'},
      { title: 'ALL', icon: 'times', className: 'work-all'},
      { title: 'NEXT', icon: 'chevron-right', className: 'work-next'}
    ],
    res : [
      'Developing new user-facing features using React.js',
      'Building reusable components and front-end libraries for future use',
      'Translating designs and wireframes into high quality code',
      'Optimizing components for maximum performance across a vast array of web-capable devices and browsers'
    ]
  };

  state = {
     isOpen: false,
     index : 1
  };

  fetchData(props){
     const { fetchProjectIfNeeded } = props;
             fetchProjectIfNeeded();
  }

  componentWillMount(){
     this.fetchData(this.props);
  }

  @autobind
  goToProject(direction, id){
     const { work: { allProjects }, history } = this.props,
             index = allProjects.findIndex(item => item.id == id);
             switch(direction){
               case "ALL": history.push("/projects"); break;
               case "PREVIOUS": index > 0 && history.push(`/project/${allProjects[index - 1].id}`); break;
               case "NEXT": index < allProjects.length - 1 && history.push(`/project/${allProjects[index + 1].id}`); break;
             }
  }

  @autobind
  togglePhotoSwipe(index){
     this.setState({
       isOpen :  !this.state.isOpen,
       index
     });
     this.props.togglePhotoGallery(!this.state.isOpen)
  }

  @autobind
  getPhotoSwipeItems(items){
     return items.map(item => {
       const url=  item && item.url ? item.url.replace("download/", "") : false;
       return {
         src: `${url}.jpg`,
         w: item.width ? item.width: 600,
         h: item.height? item.height: 800,
         title: item.title
       }
     })
  }


  render() {

    const { work: { allProjects=[], projectsLoading }, match: { params: { id}}, pagination, app: { width }, res  } = this.props,
            activeProject = allProjects.find(project => project.id == id),
            small = width < 768;
            if(projectsLoading || !activeProject){
              return <Spinner />
            }

            const { name, summery, _tags, _images, _thumbnail, clientName, responsibility=[], role, teamSize } = activeProject,
                  { isOpen, index } = this.state,
                    galleryImages = _images.filter(item => typeof item.url === 'string' && item.url );
                    console.log(activeProject);


    return (
      <div>
        <Section background={'/assets/images/section-bg-1.jpg'} theme="dark" alpha="90" type="dark" parallax={2} >
          <div className="container">
            <div className="home-content">
              <div className="home-text">
                <h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
                  <FloatTexts>{name}</FloatTexts>
                </h2>
                <h1 className="hs-line-8 no-transp font-alt mb-50 mb-xs-30">
                  <WordAnimation key={id}>{summery}</WordAnimation>
                </h1>
              </div>
            </div>
            <div className="local-scroll">
              <a href="#" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon" /></a>
            </div>
          </div>
        </Section>

        <Section alpha="70" type="light" >
           <div className="">
             <div className="section-text">
               <div className="row">
                 <div className="col-md-9 col-sm-6 mb-sm-50 mb-xs-30">
                   <h3 className="blog-item-title font-alt mb-10"><a href="#">Description</a></h3>
                   <p>
                     <LineAnimation key={id}>
                       {summery}
                     </LineAnimation>
                   </p>

                   <h3 className="blog-item-title font-alt mb-10"><a href="#">Responsibility</a></h3>
                   <hr className="mt-0 mb-30"/>
                   <ul className="list-items">
                     {responsibility.map((r, i) => <li key={i}><LineAnimation dealy={i * 0.4}  key={`${id}-${i}`}>{r}</LineAnimation></li>)}
                   </ul>

                   <h5 className="blog-item-title font-alt mb-10"><a href="#">Other Screens</a></h5>
                   <hr className="mt-0 mb-20"/>
                   <MasonryList className="row grid-small-gutter clearfix font-alt hover-white hide-titles masonry"  id="work-screen-grid" key={id} itemSelector="project-item-thumb" >
                     {galleryImages.map((item, key) => {
                       const url=  item && item.url ? item.url.replace("download/", "") : false;
                       return <div className={`col-xs-${small ? '6': '2'} project-item-thumb`} key={key}>
                         <div className="work-grid-thumb">
                           <img src={`${url}l.jpg`} alt="" onClick={this.togglePhotoSwipe.bind(this, key)} />
                         </div>
                       </div>
                     })}
                   </MasonryList>
                   {/*{small
                     ? <ProjectSlider collection={galleryImages}  onClick={this.togglePhotoSwipe}/>
                     :
                   }*/}

                 </div>
                 <div className="col-md-3 mb-sm-50 mb-xs-30">
                   <Tags collection={_tags} />
                   <div className="work-detail">
                     <h5 className="widget-title font-alt">Project Details</h5>
                     <div className="work-full-detail">
                       <p><strong>Role:</strong>{role}</p>
                       <p><strong>Client:</strong>{clientName}</p>
                       <p><strong>Team Size:</strong>{teamSize}</p>

                       {/* <p><strong>Link:</strong><a href="#" target="_blank">www.rhythm.bestlooker.pro</a></p>*/}
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <PhotoSwipe isOpen={isOpen} items={this.getPhotoSwipeItems(galleryImages)} options={{ index, closeOnScroll: false, modal: true  }} onClose={this.togglePhotoSwipe}/>
               </div>
             </div>
           </div>
        </Section>


        <Divider/>
        <div className="work-navigation clearfix">
          {pagination.map((item, key) =>{
            return  <NavLink key={key} to="#" className={`${item.className} relative`} onClick={this.goToProject.bind(this, item.title, activeProject.id)}><span><i className={`fa fa-${item.icon}`} />&nbsp;{item.title}</span></NavLink>
          })}
        </div>
      </div>
    );
  }
}

export default ProjectView;