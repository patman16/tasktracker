import React from 'react';
import {
    View,
    Button,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Nav = {
    replace: (value: string) => void;
}

export default function LoginScreen() {
    const navigation = useNavigation<Nav>();
    function handlePress() {
        navigation.replace('Home');
    };

    return (
        <View>
            <Button title="Login" onPress={handlePress} />
        </View>
    );
}