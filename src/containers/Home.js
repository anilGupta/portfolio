import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { fetchBrandIfNeeded, fetchSkillIfNeed } from "../actions/userActions";
import Waypoint from 'react-waypoint';
import { Section, Divider, ProgressBar, Spinner, BrandsList, FloatTexts, LineAnimation, WordAnimation, SVGTextAnimation,  ImageDistortion, FlareAnimation } from '../component/Index';

@connect(
  state =>{ return {user: state.user, app: state.app}},
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

  state ={
    animateSkills: false
  };

  componentWillMount(){
     this.fetchData(this.props);
  }

  @autobind
  handleEnter(){
      this.setState({
         animateSkills: true
      })
  }

  render() {
    const { user: { brands, skills, brandsLoading, skillsLoading}, app: { width }} = this.props,
          { animateSkills } = this.state,
            small = width < 768;

            if((brandsLoading || skillsLoading) && !brands.length){
              return <Spinner />
            }

            const skillCollection = [
              skills.slice(0, Math.round(skills.length/2)),
              skills.slice(Math.round(skills.length/2), skills.length)
            ];

    return (
      <div>
        <Section  background="/assets/images/section-bg-1.jpg" id="home" alpha="90" type="dark" parallax={2}>
          <div className="row">
            <div className="col-sm-6 mt-xs-40">
              {small
                ? <div className="mobile-avatar-wrapper" >
                  <FlareAnimation light all zIndex={10} >
                    <div>
                      <div className="avatar-image" style={{ backgroundImage: `url('/assets/images/mobile-avatar.jpg')`}} />
                    </div>
                  </FlareAnimation>
                </div>
                : <ImageDistortion image1={'/assets/images/me.jpg'} image2={'/assets/images/0.jpg'} displacement={'/assets/images/fuse1.jpg'} small={small} />
              }
            </div>
            <div className="col-sm-6 col-lg-5 align-center pt-20 pt-lg-0 mb-xs-30">
              <div>
                <SVGTextAnimation />
              </div>
              <h1 className="font-alt mb-40 mb-xs-20 animated  fadeInRight delay-3s">FullStack Developer</h1>
              <div className="section-text white mb-70 mb-xs-40 text-justify">
                <p>
                  <span className="dropcap font-alt">M</span>
                  <FloatTexts>y name is Anil Gupta, I am a creative, highly motivated software engineer with over 7+ years of experience working with  JavaScript, NodeJS, PHP, and related technologies.</FloatTexts>
                </p>

                <LineAnimation dealy="1">
                  I thrive in a challenging, fast-paced environment. An enthusiastic team player with phenomenal time management skills and a can-do attitude
                </LineAnimation>
                <hr className="white mb-30" />
                <div>
                  <h4 className="font-alt mt-0 mb-20">Profile</h4>
                  <div><strong style={{display:'inline-block', minWidth: '80px'}}>Age </strong>: 28</div>
                  <div><strong style={{display:'inline-block', minWidth: '80px'}}>Address </strong>: Antophill, Mumbai, India</div>
                  <div><strong style={{display:'inline-block', minWidth: '80px'}}>Phone </strong>: +91 9870675742</div>
                  <div><strong style={{display:'inline-block', minWidth: '80px'}}>Email </strong>: <a href="#">_anil@mail.com</a></div>
                  <div><strong style={{display:'inline-block', minWidth: '80px'}}>Status </strong>: Available</div>
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
                      <td className="">Network18 <div className="small"> Senior Software Engineer, Lead Developer </div></td>
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
              <LineAnimation>
                I have following skills in various programming language, frameworks, dev-tools and related technology .
              </LineAnimation>
            </div>
            <Waypoint onEnter={this.handleEnter.bind(this, 'skills')}>
              <div className={`row`}>
                {skillCollection.map((items, i)=>
                   <div className="col-sm-6 mb-sm-50 mb-xs-30" key={i}>
                     {items.map((item, index) => <ProgressBar index={(i+1)*index} key={item.id} {...item} animate={animateSkills} />)}
                   </div>
                )}
              </div>
            </Waypoint>
          </div>
        </Section>

        <BrandsList collection={brands} />

        <Section small className="bg-dark">
            <div className="align-center">
              <h3 className="banner-heading font-alt">Want to discuss your new project?</h3>
              <div>
                <a href="mailto:anil6080@gmail.com" className="btn btn-mod btn-w btn-medium btn-round">Lets Talk</a>
              </div>
            </div>
        </Section>
        <Divider/>
      </div>
    );
  }
}

export default Home;