import React, { useCallback, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { EvilIcons } from "@expo/vector-icons";

function Header(props) {

    // console.log('month', MONTH)

  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={props.prevMonth.bind(this, props.selectedMonth)} style={({ pressed }) => pressed && styles.pressed}>
          <EvilIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

          <View style={{flexDirection: "row"}}>
              <Text>{props.selectedYear}년  </Text>
              <Text>{props.selectedMonth}월</Text>
          </View>

        <TouchableOpacity onPress={props.nextMonth.bind(this, props.selectedMonth)} style={({ pressed }) => pressed && styles.pressed}>
          <EvilIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5
  }
});