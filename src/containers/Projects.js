import React, { Component } from 'react';
import { Section, Divider, PortfolioList, PortfolioListItem, PortfolioListFilter } from '../component/Index'
import autobind from 'autobind-decorator';

class Projects extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    showFilter: false,
    projects: [...Array(10).keys()],
    selectedTags :[]
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

export default Projects;