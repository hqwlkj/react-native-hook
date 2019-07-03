import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, Button, AsyncStorage } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';

interface ISignInProps extends NavigationScreenProps {
}

export default ({ navigation }: ISignInProps) => {
    const [text] = useState<string>('登录页面');

    const signInAsync = async() => {
        await AsyncStorage.setItem('userToken', 'auth');
        navigation.navigate('App')
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>{text}</Text>
                <Button onPress={signInAsync} title="登录" />
            </View>
        </SafeAreaView>
    );
}
