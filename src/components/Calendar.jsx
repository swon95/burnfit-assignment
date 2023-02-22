import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalCal from './Calendar/CalCal'

export const Calendar = () => {
    
    return (
        <View style={styles.container}>
            <CalCal/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });