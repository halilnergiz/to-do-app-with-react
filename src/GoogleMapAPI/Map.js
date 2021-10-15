import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 39.887563,
      lng: 32.864937
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ 
        height: '50vh',
        width: '95%',
        position: 'absolute',
        paddingLeft:'4rem',
        bottom:'1px'
        }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={38.701563}
            lng={35.565562}
            text="My Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;