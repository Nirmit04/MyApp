import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { counterIncrement } from '../store/actions'

type Props = {}

const plusBtn = (props: Props) => {
  const dispatch = useDispatch();
  function incrementVal() {
    dispatch(counterIncrement(null))
  }
  return (
    <TouchableOpacity onPress={incrementVal} style={styles.btn}>
      <Text style={styles.btnText}>+</Text>
    </TouchableOpacity>
  )
}

export default plusBtn

const styles = StyleSheet.create({
  btnText: {
    fontSize: 30,
    fontWeight: '500',
  },
  btn: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
  }
})