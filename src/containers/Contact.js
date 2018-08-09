import React, { Component } from 'react';
import GoogleMap from '../component/GoogleMap';
import BgEffect from '../component/BgEffect';
import Section from '../component/Section';
import FloatTexts from '../component/FloatTexts'


class Contact extends Component{

  constructor(props){
    super(props);
    this.toggleMap = this.toggleMap.bind(this);
  }

  static defaultProps = {
     items: [
       { icon : 'phone', title: 'Call Me', desc: '+91 9870675742' },
       { icon : 'map-marker', title: 'Address', desc: 'Sion, Mumbai' },
       { icon : 'envelope', title: 'Email', email: '_anil@mail.com' },
     ]
  };

  state = {
     showMap : true
  };

  toggleMap(){
     this.setState({ showMap: !this.state.showMap })
  }

  render() {
    const { items } = this.props,
          { showMap } = this.state;

    return (
      <div>
        <Section className="page-section section-mask" background="/assets/images/bg/6.jpeg" alpha="30" type="light">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="section-heading align-center mb-120 mb-xs-40">
                  <FloatTexts dealy={10}>Contact Me</FloatTexts>
                </div>
              </div>
            </div>

            <div className="row mb-60 mb-xs-40">
              <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div className="row">
                  {items.map(({icon, title, desc, email}, key) => {
                    return  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0" key={key}>
                      <div className="contact-item">
                        <div className="ci-icon"><i className={`fa fa-${icon}`} /></div>
                        <div className="ci-title font-alt">{title}</div>
                        <div className="ci-text">{email ?  <a href={`mailto:${email}`}>{email}</a> : desc}</div>
                      </div>
                    </div>
                  })}
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-xs-12">
                <form className="form contact-form" id="contact_form">
                  <div className="clearfix">
                    <div className="col-xs-12 col-sm-6 reset-col">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="input-md round form-control text-transform" placeholder="NAME" pattern=".{3,100}" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" className="input-md round form-control" placeholder="EMAIL" pattern=".{5,100}" required />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 reset-col">
                      <div className="form-group">
                        <textarea name="message" id="message" className="input-md round form-control" style={{ height: '84px'}} placeholder="MESSAGE" />
                      </div>
                    </div>
                  </div>

                  <div className="clearfix">

                    <div className="cf-right-col col-xs-12">
                      <div className="align-right pt-10">
                        <button className="submit_btn btn btn-mod btn-medium btn-round btn-mask" id="submit_btn">Submit Message</button>
                      </div>
                    </div>
                    <div className="form-tip pt-20 col-xs-12">
                      <i className="fa fa-info-circle" /> All the fields are required
                    </div>
                  </div>
                  <div id="result" />
                </form>
              </div>
            </div>
        </Section>

        <div className="google-map">
          <GoogleMap />
          <div className={`map-section ${showMap ? '': 'js-active'}`} onClick={this.toggleMap}>
            <div className="map-toggle">
              <div className="mt-icon"><i className="fa fa-map-marker" /></div>
              <div className="mt-text font-alt">
                { showMap
                  ? <div className="mt-open">Open the map <i className="fa fa-angle-down" /></div>
                  : <div className="mt-open">Close the map <i className="fa fa-angle-up" /></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;