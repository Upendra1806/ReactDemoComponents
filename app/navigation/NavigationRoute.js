import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/SplashScreen';
import SampleViewPager from '../components/SampleViewPager'


const Stack = createStackNavigator();

function NavStack() {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            options={{ headerShown: false }}
        >

            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SampleViewPager"
                component={SampleViewPager}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
}

