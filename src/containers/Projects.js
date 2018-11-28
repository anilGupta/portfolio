import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchProjectIfNeeded, filterProject, toggleFilter } from "../actions/workActions";
import { fetchSkillIfNeed, fetchTagsIfNeeded } from "../actions/userActions";
import { Section, Divider, MasonryList, PortfolioListItem, PortfolioListFilter, Spinner } from '../component/Index';
import autobind from 'autobind-decorator';



@connect(
  state =>{ return {user: state.user, work: state.work}},
  dispatch => ( bindActionCreators({
    fetchProjectIfNeeded,
    fetchSkillIfNeed,
    fetchTagsIfNeeded,
    filterProject,
    toggleFilter
  }, dispatch))
)
class Projects extends Component{

  constructor(props) {
    super(props);
  }

  fetchData(props){
    const { fetchProjectIfNeeded, fetchTagsIfNeeded } = props;
    return Promise.all[fetchProjectIfNeeded(), fetchTagsIfNeeded()]
  }

  state={
     pageNo: 1,
     pageLimit: 9
  }

  componentWillMount(){
    this.fetchData(this.props)
  }

  @autobind
  toggleFilter(){
  }

  @autobind
  handleFilterAction(operation, tag){
    const { filterProject } = this.props;
       filterProject(tag, operation).then(() => {
          this.setState({
             pageNo : 1
          });
       });
  }

  @autobind
  loadNext(){
     this.setState({
        pageNo : this.state.pageNo + 1
     })
  }

  render() {
    const { work: { projects, projectsLoading, filterTags, showFilterTags }, user: { tags, tagsLoading}, toggleFilter, match: { params } } = this.props,
          { pageNo, pageLimit } = this.state,
            totalItems = pageNo * pageLimit,
            tagId = params && params.tagId ? params.tagId: false;
            if(projectsLoading || tagsLoading){
              return <Spinner />
            }

            const filterProjects =   tagId ? projects.filter(({_tags=[]}) => {
                const matchTags = _tags.filter(tag => tag.code === tagId) || [];
                      return matchTags.length
                  }) : projects,
                  activeProject = filterProjects.slice(0, totalItems);


            return (
                    <div>
                      <Section type="light">
                        <div className="relative mt-xs-40">
                          {tagId && <div className="reset-filter"> <NavLink to={`/projects`} >RESET "{tagId}"</NavLink></div>}
                          <PortfolioListFilter collection={tags} toggleFilter={toggleFilter} open={showFilterTags} filterTags={filterTags} filterAction={this.handleFilterAction} />
                          <Divider/>
                          <MasonryList id="work-grid" className="project-list" itemSelector="project-item" items={activeProject.length}>
                            {activeProject.map((item, key) => <PortfolioListItem data={item} key={key} loop={key} />)}
                          </MasonryList>
                          <hr />
                          {totalItems < projects.length ?  <button className="btn btn-mod btn-medium btn-gray btn-full" onClick={this.loadNext}> Load More</button> : null }
                        </div>
                      </Section>
                    </div>
                  );
          }
}

export default Projects;