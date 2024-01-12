import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Calendar from '../../components/Calendar/Calendar';

const CalendarScreen = () => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <Calendar/>
        </SafeAreaView>
    );
};

export default CalendarScreen;