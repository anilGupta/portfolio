import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectIfNeeded } from "../actions/workActions";
import autobind from 'autobind-decorator';
import { Section, Divider, Tags, Spinner, FloatTexts, WordAnimation, FlareAnimation } from '../component/Index';
import Masonry from 'react-masonry-component';
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipe} from 'react-photoswipe';


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

  static defaultProps={
    pagination : [
      { title: 'PREVIOUS', icon: 'chevron-left', className: 'work-prev'},
      { title: 'ALL', icon: 'times', className: 'work-all'},
      { title: 'NEXT', icon: 'chevron-right', className: 'work-next'}
    ],
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
     })
  }

  @autobind
  getPhotoSwipeItems(items){
     return items.map(item => {
       const url=  item && item.url ? item.url.replace("download/", "") : false;
       return {
         src: `${url}l.jpg`,
         w: 1224,
         h: 1024,
         title: item.title
       }
     })
  }


  render() {

    const { work: { allProjects=[], projectsLoading }, match: { params: { id}}, pagination } = this.props,
            activeProject = allProjects.find(project => project.id == id);

            if(projectsLoading || !activeProject){
              return <Spinner />
            }



            const { name, summery, tags, _images, _thumbnail, clientName } = activeProject,
                  { isOpen, index } = this.state,
                    galleryImages = [..._images, ..._images, ..._images].concat();

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
                 <div className="col-md-9 col-sm-6 mb-sm-50 mb-xs-30">
                   <h3 className="blog-item-title font-alt mb-10"><a href="#">Description</a></h3>
                   <hr className="mt-0 mb-30"/>
                   <p>
                     {summery}
                   </p>

                   <h5 className="blog-item-title font-alt mb-10"><a href="#">Other Screens</a></h5>
                   <FlareAnimation dark >
                      <hr className="mt-0 mb-20"/>
                   </FlareAnimation>

                   <Masonry
                     className="row grid-small-gutter clearfix font-alt hover-white hide-titles masonry"
                     id="work-screen-grid"
                     options={{}}
                   >{galleryImages.map((item, key) => {
                     const url=  item && item.url ? item.url.replace("download/", "") : false;
                     return <div className="col-xs-2" key={key}>
                       <div className="work-grid-thumb">
                         <FlareAnimation dark >
                            <img src={`${url}m.jpg`} alt="" onClick={this.togglePhotoSwipe.bind(this, key)} />
                         </FlareAnimation>
                       </div>
                     </div>
                   })}</Masonry>
                 </div>
                 <div className="col-md-3 mb-sm-50 mb-xs-30">
                   <Tags collection={tags} />
                   <div className="work-detail">
                     <h5 className="widget-title font-alt">Project Details</h5>
                     <div className="work-full-detail">
                       <p><strong>Client:</strong>{clientName}</p>
                       <p><strong>Date:</strong>1th Februery, 2014</p>
                       {/* <p><strong>Link:</strong><a href="#" target="_blank">www.rhythm.bestlooker.pro</a></p>*/}
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <PhotoSwipe isOpen={isOpen} items={this.getPhotoSwipeItems(galleryImages)} options={{ index }} onClose={this.togglePhotoSwipe}/>
               </div>
             </div>
           </div>
        </Section>


        <Divider/>
        <div className="work-navigation clearfix">
          {pagination.map((item, key) =>{
            return  <NavLink key={key} to="#" className={item.className} onClick={this.goToProject.bind(this, item.title, activeProject.id)}><span><i className={`fa fa-${item.icon}`} />&nbsp;{item.title}</span></NavLink>
          })}
        </div>
      </div>
    );
  }
}

export default ProjectView;