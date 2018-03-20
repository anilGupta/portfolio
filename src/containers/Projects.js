import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectIfNeeded } from "../actions/workActions";
import { Section, Divider, PortfolioList, PortfolioListItem, PortfolioListFilter } from '../component/Index';
import autobind from 'autobind-decorator';


@connect(
  state =>{ return {user: state.user}},
  dispatch => ( bindActionCreators({
    fetchProjectIfNeeded
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
    const { fetchProjectIfNeeded } = props;
    fetchProjectIfNeeded();
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
  filterProjects(){
    const items =  Math.floor(Math.random() * 15) + 1;
    this.setState({
      projects: [...Array(items).keys()]
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
    const { showFilter, projects, selectedTags } = this.state;

    return (
      <div>
        <Section type="light">
          <div className="relative">
            <PortfolioListFilter toggleFilter={this.toggleFilter} open={showFilter} selectedTags={selectedTags} filterAction={this.handleFilterAction} />
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
import {bindActionCreators} from "redux/index";
import {connect} from "react-redux";

export default Projects;