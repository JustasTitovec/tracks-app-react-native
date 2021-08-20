import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>TrackListScreen Screen</Text>
      <Button
        title="Go to track details"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default TrackListScreen;
