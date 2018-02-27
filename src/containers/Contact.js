import React, { Component } from 'react';
import GoogleMap from '../component/GoogleMap';


class Contact extends Component{

  constructor(props){
    super(props);
    this.toggleMap = this.toggleMap.bind(this);
  }

  state = {
     showMap : false
  };

  toggleMap(){
     this.setState({ showMap: !this.state.showMap })
  }

  render() {
    const { showMap } = this.state;

    return (
      <div>

        <section className="page-section" id="contact">
          <div className="container relative">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="section-text align-center mb-70 mb-xs-40">
                  Contact Me
                </div>
              </div>
            </div>
            <div className="row mb-60 mb-xs-40">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon"><i className="fa fa-phone" /></div>
                      <div className="ci-title font-alt">Call Me</div>
                      <div className="ci-text">+91 9870675742</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon"><i className="fa fa-map-marker" /></div>
                      <div className="ci-title font-alt">Address</div>
                      <div className="ci-text"> Antophill, Mumbai, IN</div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon"><i className="fa fa-envelope" /></div>
                      <div className="ci-title font-alt">Email</div>
                      <div className="ci-text"><a href="mailto:support@bestlooker.pro">_anil@mail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <form className="form contact-form" id="contact_form">

                  <div className="clearfix">
                    <div className="cf-left-col">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" required />
                      </div>
                    </div>

                    <div className="cf-right-col">
                      <div className="form-group">
                        <textarea name="message" id="message" className="input-md round form-control" style={{ height: '84px'}} placeholder="Message" />
                      </div>
                    </div>
                  </div>



                  <div className="clearfix">
                    <div className="cf-left-col">
                      <div className="form-tip pt-20">
                        <i className="fa fa-info-circle" /> All the fields are required
                      </div>
                    </div>
                    <div className="cf-right-col">
                      <div className="align-right pt-10">
                        <button className="submit_btn btn btn-mod btn-medium btn-round" id="submit_btn">Submit Message</button>
                      </div>
                    </div>
                  </div>
                  <div id="result"></div>
                </form>
              </div>
            </div>




          </div>
        </section>
        
        
        <div className="google-map mt-80">
          <GoogleMap address="Belt Parkway, Queens, NY, United States" />
          <div className={`map-section ${showMap ? '': 'js-active'}`} onClick={this.toggleMap}>
            <div className="map-toggle">
              <div className="mt-icon"><i className="fa fa-map-marker" /></div>
              <div className="mt-text font-alt">
                { showMap
                  ? <div className="mt-open">Close the map <i className="fa fa-angle-down" /></div>
                  : <div className="mt-open">Open the map <i className="fa fa-angle-up" /></div>
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