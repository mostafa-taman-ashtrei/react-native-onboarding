import React from 'react';
import { Button, Text, View } from 'react-native';

interface props {
    navigation: any;
}

const HomeScreen: React.FC<props> = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to the home screen</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default HomeScreen;
