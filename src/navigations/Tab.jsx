import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Mail, Meet, Settings } from '../components/TabScreen';
import { Home } from '../components/Home';
import { Calendar } from '../components/Calendar';
import { Library } from '../components/Library';
import { MyPage } from '../components/MyPage';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        }}>
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{ 
                    // tabBarLabel: "Home",
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "home" : "home-outline"} size={size} color="black"/>
                    ), 
                    headerShown: false
                    }} />
            <Tab.Screen 
                name='Calendar' 
                component={Calendar} 
                options={{ 
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "calendar" : "calendar-outline"} size={size} color="black"/>
                    ), headerShown: false }} />
            <Tab.Screen 
                name='Library' 
                component={Library} 
                options={{ 
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "library" : "library-outline"} size={size} color="black"/>
                    ), headerShown: false}} />
            <Tab.Screen 
                name='MyPage' 
                component={MyPage} 
                options={{ 
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={size} color="black"/>
                    ), headerShown: false}} />
        </Tab.Navigator>
    );
};

export default TabBar;