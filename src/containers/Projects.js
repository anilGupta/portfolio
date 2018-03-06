import React, { Component } from 'react';
import { Section, Divider, PortfolioList, PortfolioListItem, PortfolioListFilter } from '../component/Index'
import autobind from 'autobind-decorator';

class Projects extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    showFilter: false,
    projects: [...Array(10).keys()]
  };

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

  render() {
    const { showFilter, projects } = this.state;

    return (
      <div>
        <Section type="light">
          <div className="relative">
            <PortfolioListFilter toggleFilter={this.toggleFilter} open={showFilter} />
            <button className="btn btn-border" onClick={this.filterProjects}>temp filter</button>
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