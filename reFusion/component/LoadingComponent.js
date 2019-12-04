import React from "react";
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';


const style = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#512DA8',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

const Loading = () => {
    return (
        <View style={style.loadingView}>
            <ActivityIndicator size="large" color="#512DA8"/>
            <Text style={style.loadingText}>Loading . . . </Text>
        </View>
    )
};

export default Loading;