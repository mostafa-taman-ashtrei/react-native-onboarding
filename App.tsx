import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>
                Hello World !
            </Text>
        </SafeAreaView>
    );
};

export default App;
