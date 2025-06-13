// src/screens/MapScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useCurrentLocation} from '../hooks/useCurrentLocation';

const MapScreen = () => {
  const location = useCurrentLocation();

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker coordinate={{latitude: location.lat, longitude: location.lng}} title="You are here" />
        </MapView>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {flex: 1},
});
