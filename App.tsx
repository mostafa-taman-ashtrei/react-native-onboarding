import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

const App: React.FC = () => {
    const AppStack = createStackNavigator();

    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    options={{ headerStyle: { height: 0 } }}
                    name="Welcome"
                    component={OnboardingScreen}
                />
                <AppStack.Screen name="Home" component={HomeScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
