import * as React from 'react';
import {useEffect} from 'react';
import { AsyncStorage, StatusBar, ActivityIndicator, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';

interface IAuthLoadingScreenProps extends NavigationScreenProps {
}

export default (props: IAuthLoadingScreenProps)=>{
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () =>{
        console.log('bootstrapAsync');
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };


    useEffect(()=>{
        bootstrapAsync()
    },[bootstrapAsync]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color="#00ff00" />
            <StatusBar barStyle="default" />
        </View>
    );
}
