import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from '../REDUX/Actions/count';


class Main extends Component {
    decrementCount() {
        let { count, actions } = this.props;
        count--;
        actions.changeCount(count);
    }
    incerementCount() {
        let { count, actions } = this.props;
        count++;
        actions.changeCount(count);
    }
    render() {
        const { count } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Main Screen
            </Text>
                <Ionicons name="home" />
                <Button title="+" onPress={() => this.incerementCount()} />
                <Text>{count}</Text>
                <Button title="-" onPress={() => this.decrementCount()} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count.count,
})

const ActionCreators = Object.assign(
    {},
    countActions,
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)