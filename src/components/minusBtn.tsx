import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { counterDecrement } from '../store/actions';

type Props = {}

const minusBtn = (props: Props) => {
    const dispatch = useDispatch();
    function decrementVal() {
        dispatch(counterDecrement(null))
    }
    return (
        <TouchableOpacity onPress={decrementVal} style={styles.btn}>
            <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
    )
}

export default minusBtn

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