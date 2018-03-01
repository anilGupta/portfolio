import React, { Component } from 'react';
import { Section, Divider, ProgressBar} from '../component/Index';
const skills = [
  { title: 'PHP', value: 90 },
  { title: 'MySql', value: 65 },
  { title: 'Mongodb', value: 60 },
  { title: 'CSS3', value: 70 },
  { title: 'JS/jQuery', value: 95 },
  { title: 'JS/ MV* Pattern', value: 90},
  { title: 'Bootstrap/Foundation', value: 80 },
  { title: 'LESS/SASS', value: 85 },
  { title: 'SVN/GIT', value: 85 },
  { title: 'Grunt/Gulp/Webpack', value: 75},
  { title: 'Symfony 1.x, 2.x', value: 90 },
  { title: 'WordPress', value: 85 },
  { title: 'OpenCart', value: 80 },
  { title: 'ExpressJS/LoopbackJS', value: 75 },
  { title: 'ReactJS', value: 90},
  { title: 'KnockoutJS', value: 85 },
  { title: 'AngularJS 1.X', value: 90 },
  { title: 'Tumblr', value: 85},
  { title: 'Photoshop', value: 50 }
]

class Home extends Component{
  render() {

    const skillCollection = [
      skills.slice(0, Math.round(skills.length/2)),
      skills.slice(Math.round(skills.length/2), skills.length)
    ];

    return (
      <div>
        <Section>
          <div className="col-sm-3">
            <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Skills</h2>
          </div>

          <div className="col-sm-9">
            <div className="section-text mb-50 mb-xs-30">
              Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
              Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
              consectetur fermentum nibh volutpat, accumsan purus.
            </div>
            <div className="row">
              {skillCollection.map(items=>
                 <div className="col-sm-6 mb-sm-50 mb-xs-30">
                   {items.map(item => <ProgressBar {...item} />)}
                 </div>
              )}
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Home;