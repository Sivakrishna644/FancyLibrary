import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, add, substraction } from 'fancy';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [result1, setResult1] = React.useState<number | undefined>();
  const [result2, setResult2] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    add(3, 7).then(setResult1);
    substraction(3, 7).then(setResult2);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Multiply Result: {result}</Text>
      <Text>Add Result: {result1}</Text>
      <Text>Minus Result: {result2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
