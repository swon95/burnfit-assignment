import { View } from "react-native";
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";

function Calendar() {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();

  // console.log('date', DATE)

  const [selectedYear, setSelectedYear] = useState(YEAR); // 현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(MONTH); // 현재 선택된 월
  const [selectedDate, setSelectedDate] = useState(DAY); // 현재 선택된 날짜

  // 이전 월 버튼
  const prevMonth = (selectedMonth) => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  // 다음 월 버튼
  const nextMonth = (selectedMonth) => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };
  return (
    <View style={{ width: "100%", paddingHorizontal: 15 }}>
      <Header 
        selectedMonth={selectedMonth} 
        selectedYear={selectedYear} 
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        />

      <Body
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedDate={selectedDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        />
    </View>
  );
}

export default Calendar;
