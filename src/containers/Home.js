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

        <Section background="/assets/images/section-bg-1.jpg" id="home" alpha="90" type="dark">
          <div className="home-content">
            <div className="home-text">
              <div className="row mt-60 mt-xs-20">
                <div className="col-sm-6">
                  <img src="" alt="" className="hover-white"/>
                </div>

                <div className="col-sm-6 col-lg-5 align-center pt-20 pt-lg-0 mb-xs-30 col-lg-offset-1">
                  <div className="hs-line-15 font-alt">Anil Gupta</div>
                  <h1 className="hs-line-4 font-alt mb-40 mb-xs-20">FullStack Developer</h1>
                  <div className="section-text white mb-70 mb-xs-40 text-justify">
                    <p><span className="dropcap font-alt">M</span>y name is Anil Gupta, a create full stack developer from India. I am a creative, highly motivated web developer with over 6+ years of experience working with HTML, CSS, JavaScript, NodeJS, PHP, and related technologies.</p>
                    <p>I thrive in a challenging, fast-paced environment. I have multiple years of experience managing a web development team within a small creative firm. </p>
                    <hr className="white mb-30" />
                      <div>
                        <h4 className="font-alt mt-0 mb-20">Profile</h4>
                        <div><strong>Age:</strong>28</div>
                        <div><strong>Address:</strong>Antophill, Mumbai, India</div>
                        <div><strong>Phone:</strong>+91 9870675742</div>
                        <div><strong>Email:</strong><a href="#">_anil@mail.com</a></div>
                        <div> <strong>Status:</strong>Available</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

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
                   {items.map((item, key) => <ProgressBar  key={key} {...item} />)}
                 </div>
              )}
            </div>
          </div>
        </Section>
        <Divider/>
      </div>
    );
  }
}

export default Home;