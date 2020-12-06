import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_CHANGE } from '../REDUX/Constants';

export default function Another() {
    //const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.count);

    const inc = item => dispatch({ type: COUNTER_CHANGE, payload: count + 1 })
    const dec = item => dispatch({ type: COUNTER_CHANGE, payload: count - 1 })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Another Screen
            </Text>
            <Button title="+" onPress={() => inc()} />
            <Text>{count}</Text>
            <Button title="-" onPress={() => dec()} />
        </View>
    );
}