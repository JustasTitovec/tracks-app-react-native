import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';

import '../_mockLocations';

import Map from '../components/Map';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation(isFocused, addLocation);

  console.log(isFocused);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
