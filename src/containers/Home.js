import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { fetchBrandIfNeeded, fetchSkillIfNeed } from "../actions/userActions";
import { Section, Divider, ProgressBar, Spinner, BrandsList, FloatTexts } from '../component/Index';

@connect(
  state =>{ return {user: state.user}},
  dispatch => ( bindActionCreators({
    fetchBrandIfNeeded,
    fetchSkillIfNeed
  }, dispatch))
)
class Home extends Component{

  constructor(props) {
    super(props);
  }

  fetchData(props){
     const { fetchBrandIfNeeded, fetchSkillIfNeed } = props;
             fetchBrandIfNeeded();
             fetchSkillIfNeed()
  }

  componentWillMount(){
     this.fetchData(this.props);
  }

  render() {

    const { user: { brands, skills, brandsLoading, skillsLoading}, user } = this.props;

    if((brandsLoading || skillsLoading) && !brands.length){
      return <Spinner />
    }

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
                  <div className="hs-line-15 font-alt">
                    <FloatTexts>ANIL GUPTA <br /> just a tech</FloatTexts>
                  </div>
                  <h1 className="hs-line-4 font-alt mb-40 mb-xs-20">FullStack Developer</h1>
                  <div className="section-text white mb-70 mb-xs-40 text-justify">
                    <p><span className="dropcap font-alt">M</span>y name is Anil Gupta, I am a creative, highly motivated software engineer with over 7+ years of experience working with  JavaScript, NodeJS, PHP, and related technologies.</p>
                    <p>I thrive in a challenging, fast-paced environment. An enthusiastic team player with phenomenal time management skills and a can-do attitude </p>
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
        <Section type='light'>
          <div className="section-text">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-title font-alt align-center mt-0 mb-70 mb-sm-40">AGENCY EXPERIENCE</h2>
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td>Network18 <div className="small"> Senior Software Engineer, Lead Developer </div></td>
                      <td className="align-right small">Dec 2016 — Present</td>
                    </tr>
                    <tr>
                      <td>ZEE Digital Convergence Limited<div className="small">  Senior Software Engineer, Lead Developer</div></td>
                      <td className="align-right small">May 2015 — Dec 2016</td>
                    </tr>
                    <tr>
                      <td> Mediatech Interactive <div className="small">Web Developer, Backend Developer</div></td>
                      <td className="align-right small">Aug 2010 — May 2013</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-6">
                <h2 className="section-title font-alt align-center mt-0 mb-70 mb-sm-40">EDUCATION</h2>
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td> Master of Computer Application <div className="small">Mumbai University, India</div></td>
                      <td className="align-right">2015–2016</td>
                    </tr>
                    <tr>
                      <td>BSC Computer Science <div className="small">SIWS College, Mumbai</div></td>
                      <td className="align-right">2006–2009</td>
                    </tr>
                    <tr>
                      <td>HSC Science <div className="small">SIWS College, Mumbai</div></td>
                      <td className="align-right"> 2004–2010 </td>
                    </tr>
                  </tbody>
                </table>
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
              {skillCollection.map((items, i)=>
                 <div className="col-sm-6 mb-sm-50 mb-xs-30" key={i}>
                   {items.map(item => <ProgressBar  key={item.id} {...item} />)}
                 </div>
              )}
            </div>
          </div>
        </Section>

        <BrandsList collection={brands} />

        <Section small className="bg-dark">
            <div className="align-center">
              <h3 className="banner-heading font-alt">Want to discuss your new project?</h3>
              <div>
                <a href="" className="btn btn-mod btn-w btn-medium btn-round">Lets tallk</a>
              </div>
            </div>
        </Section>
        <Divider/>


      </div>
    );
  }
}

export default Home;