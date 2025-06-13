// src/hooks/useCurrentLocation.ts
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {requestLocationPermission} from '../utils/locationPermissions';

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<{lat: number; lng: number} | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      const granted = await requestLocationPermission();
      if (!granted) return;

      Geolocation.getCurrentPosition(
        pos => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        error => console.warn(error),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    getLocation();
  }, []);

  return location;
};
export default useCurrentLocation;
// src/hooks/useCurrentLocation.ts