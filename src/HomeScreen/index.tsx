import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, Button, AsyncStorage } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';


const HomeScreen = ({ navigation }: NavigationScreenProps) => {

    const [count, setCount] = useState<number>(1);
    const signOutAsync = async() => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>{count}</Text>
                <Text>点击按钮改变数据</Text>
                <Button onPress={() => setCount(count + 1)} title='点我啊' />
                <Button onPress={signOutAsync} title='我是退出' />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
