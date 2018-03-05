import React, { Component } from 'react';
import { Section, Divider, PortfolioList, PortfolioListItem, PortfolioListFilter } from '../component/Index'
import autobind from 'autobind-decorator';

class Projects extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    showFilter: false
  }

  @autobind
  toggleFilter(){
     this.setState({
       showFilter: !this.state.showFilter
     })
  }


  render() {

    const items = [...Array(7).keys()],
          { showFilter } = this.state;

    return (
      <div>
        <Section type="light">
          <div className="relative">
            <PortfolioListFilter toggleFilter={this.toggleFilter} open={showFilter} />
            <PortfolioList>
              {items.map((item, key) => <PortfolioListItem data={item} key={key} loop={key} />)}
            </PortfolioList>
          </div>
        </Section>
      </div>
    );
  }
}

export default Projects;