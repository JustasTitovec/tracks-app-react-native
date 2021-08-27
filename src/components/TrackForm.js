import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTruck';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter the track name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button onPress={stopRecording} title="Stop" />
        ) : (
          <Button onPress={startRecording} title="Start recording" />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
