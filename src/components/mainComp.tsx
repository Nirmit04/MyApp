import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


type Props = {}

const MainComp = (props: Props) => {
  let currentCountValue = useSelector((state: any) => state.count.counterValue);
  return (
    <View
      style={styles.wrapper}>
      <Text
        style={[
          styles.sectionTitle
        ]}>
        Current Count is = {currentCountValue}
      </Text>

    </View>
  )
}

export default MainComp

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 48
  }
});