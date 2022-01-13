# rn-colorful-selectable-progress

selectable progress bar with colorful ui for react native


**install**

yarn add rn-colorful-selectable-progress
or
npm install --save rn-colorful-selectable-progress


**usage**
```
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressBar} from 'rn-colorful-selectable-progress';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ProgressBar getProgressPercent={percent => console.log(percent)} />
    </View>
  );
}
```
