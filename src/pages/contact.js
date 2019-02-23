import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

import PinDrop from '@material-ui/icons/PinDrop';
import Phone from '@material-ui/icons/Phone';

// core components
import PageTemplate from '../components/PageTemplate';

import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import InfoArea from '../components/InfoArea/InfoArea.jsx';
import CustomInput from '../components/CustomInput/CustomInput.jsx';
import Button from '../components/CustomButtons/Button.jsx';

import contactUsStyle from '../../content/assets/jss/views/contactUsStyle.jsx';
import './css/contact.css';

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 29.5774829, lng: -95.5965596 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: 'water',
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: '#0088ff' }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              { hue: '#ff0000' },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#808080' }, { lightness: 54 }]
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ece2d9' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ccdca1' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#767676' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ffffff' }]
          },
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry.fill',
            stylers: [{ visibility: 'on' }, { color: '#b8cb93' }]
          },
          { featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
          {
            featureType: 'poi.sports_complex',
            stylers: [{ visibility: 'on' }]
          },
          { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
          {
            featureType: 'poi.business',
            stylers: [{ visibility: 'simplified' }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 29.5774829, lng: -95.5965596 }} />
    </GoogleMap>
  ))
);

class ContactUsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        name: '',
        email: '',
        message: ''
      },
      formErrors: {},
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleChange = e => {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState(
      {
        formFields
      },
      this.validateField(e.target.name, e.target.value)
    );
  };
  render() {
    const { name, email, message } = this.state;
    const { classes } = this.props;
    return (
      <PageTemplate headerImg={true}>
        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: '5px' }}
        >
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Send me a message!</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                    You can contact me with any questions about baked goods!
                    I'll get in touch with you as soon as possible.
                    <br />
                    <br />
                  </p>
                  <form
                    action="https://formspree.io/cakedinbutter@gmail.com"
                    method="POST"
                  >
                    <CustomInput
                      labelText="Your Name"
                      inputProps={{
                        name: 'name',
                        value: name,
                        onChange: this.handleChange
                      }}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      inputProps={{
                        name: 'email',
                        value: email,
                        type: 'email',
                        onChange: this.handleChange
                      }}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      labelText="Your message"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: 'message',
                        value: message,
                        onChange: this.handleChange,
                        multiline: true,
                        rows: 4
                      }}
                    />
                    <div className={classes.textCenter}>
                      <Button color="primary" round style={{ width: '40%' }}>
                        <a href="/" className="go_back">
                          Go Back
                        </a>
                      </Button>
                      <Button
                        color="primary"
                        round
                        type="submit"
                        style={{ width: '40%', marginLeft: '2%' }}
                      >
                        Contact Me
                      </Button>
                    </div>
                  </form>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Find me at the kitchen"
                    description={<p>Sugar Land, Texas</p>}
                    icon={PinDrop}
                    iconColor="primary"
                  />

                  <div className={classes.bigMap} style={{ height: '20vh' }}>
                    <CustomSkinMap
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGr7jLJzimm5z2e--AsRskteS3AylCBLg"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={
                        <div
                          style={{
                            height: `100%`,
                            borderRadius: '6px',
                            overflow: 'hidden'
                          }}
                        />
                      }
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </div>
                  <InfoArea
                    className={classes.info}
                    title="Give me a ring"
                    description={
                      <p>
                        Emily Outen <br /> (919) 649-5660 <br /> Mon - Fri |
                        8:00a-5:00p
                      </p>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  }
}

export default withStyles(contactUsStyle)(ContactUsPage);
