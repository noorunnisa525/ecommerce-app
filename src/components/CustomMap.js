import React, {forwardRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from '../constants';

const CustomMap = forwardRef((props, ref) => {
  return (
    <MapView
      ref={ref}
      provider={PROVIDER_GOOGLE}
      onMapReady={props.onMapReady}
      style={props.style}
      initialRegion={props.initialRegion}
      customMapStyle={mapStyle}
      showsMyLocationButton={props.showsMyLocationButton ?? false}
      onRegionChangeComplete={props.onRegionChangeComplete}
      scrollEnabled={props.scrollEnabled ?? true}
      showsUserLocation={props.showsUserLocation}
      zoomControlEnabled={props.zoomControlEnabled}
      showsCompass={false}>
      {props.children}
    </MapView>
  );
});

export default CustomMap;
