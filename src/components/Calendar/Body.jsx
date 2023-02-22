import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Body(props) {

  const weeks = ["일", "월", "화", "수", "목", "금", "토"] // 일주일

  const { selectedYear, selectedMonth, selectedDate } = props
  const [allDays, setAllDays] = useState([])

  useEffect(() => {
      setAllDays(selectedYear, selectedMonth)
    }, [selectedYear, selectedMonth, selectedDate])

  return (
    <View>
        <View style={{ flexDirection: "row" }}>
            {weeks.map((day) => (
            <View style={styles.week}>
              <Text style={weekend(day).weeks}>{day}</Text>
            </View>
          ))}
        </View>
    </View>
  )
}

export default Body


const styles = StyleSheet.create({
    week: {
        width: "14.2%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
      },
})


const weekend = (day) =>
  StyleSheet.create({
    weeks: {
      color: day === "일" ? "red" : day === "토" ? "blue" : "black",
      fontSize: 16,
    },
  });
