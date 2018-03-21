import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectIfNeeded } from "../actions/workActions";
import { fetchSkillIfNeed, fetchTagsIfNeeded } from "../actions/userActions";
import { Section, Divider, PortfolioList, PortfolioListItem, PortfolioListFilter, Spinner } from '../component/Index';
import autobind from 'autobind-decorator';


@connect(
  state =>{ return {user: state.user, work: state.work}},
  dispatch => ( bindActionCreators({
    fetchProjectIfNeeded,
    fetchSkillIfNeed,
    fetchTagsIfNeeded
  }, dispatch))
)
class Projects extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    showFilter: false,
    projects: [...Array(10).keys()],
    selectedTags :[]
  };

  fetchData(props){
    const { fetchProjectIfNeeded, fetchTagsIfNeeded } = props;
    fetchProjectIfNeeded();
    fetchTagsIfNeeded();
  }


  componentWillMount(){
    this.fetchData(this.props);
  }

  @autobind
  toggleFilter(){
    this.setState({
      showFilter: !this.state.showFilter
    })
  }

  @autobind
  handleFilterAction(operation, tag){
    const { selectedTags } = this.state;
    operation == 'add' ? selectedTags.push(tag): selectedTags.splice(tag, 1)
    this.setState({
      selectedTags: selectedTags,
      showFilter: false
    })
  }

  render() {
    const { work: { projects, projectsLoading }, user: { tags, tagsLoading} } = this.props,
          { showFilter, selectedTags } = this.state;

          if(projectsLoading || tagsLoading){
            return <Spinner />
          }

          return (
            <div>
              <Section type="light">
                <div className="relative">
                  <PortfolioListFilter collection={tags} toggleFilter={this.toggleFilter} open={showFilter} selectedTags={selectedTags} filterAction={this.handleFilterAction} />
                  <Divider/>
                  <PortfolioList>
                    {projects.map((item, key) => <PortfolioListItem data={item} key={key} loop={key} />)}
                  </PortfolioList>
                </div>
              </Section>
            </div>
          );
  }
}

export default Projects;