import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectIfNeeded, filterProject, toggleFilter } from "../actions/workActions";
import { fetchSkillIfNeed, fetchTagsIfNeeded } from "../actions/userActions";
import { Section, Divider, PortfolioList, PortfolioListItem, PortfolioListFilter, Spinner } from '../component/Index';
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


  componentWillMount(){
    this.fetchData(this.props)
  }

  @autobind
  toggleFilter(){

  }

  @autobind
  handleFilterAction(operation, tag){
    const { filterProject } = this.props;
       filterProject(tag, operation);
  }

  render() {
    const { work: { projects, projectsLoading, filterTags, showFilterTags }, user: { tags, tagsLoading}, toggleFilter, match } = this.props;

          if(projectsLoading || tagsLoading){
            return <Spinner />
          }

    return (
            <div>
              <Section type="light">
                <div className="relative">
                  <PortfolioListFilter collection={tags} toggleFilter={toggleFilter} open={showFilterTags} filterTags={filterTags} filterAction={this.handleFilterAction} />
                  <Divider/>
                  <PortfolioList>
                    {projects.filter(item => item._thumbnail).map((item, key) => <PortfolioListItem data={item} key={key} loop={key} />)}
                  </PortfolioList>
                </div>
              </Section>
            </div>
          );
  }
}

export default Projects;