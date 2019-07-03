import * as React from 'react';
import { useEffect } from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    NavigationScreenProps
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';


const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'Home'
        })
    }
});
const AuthStack = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: () => ({
            title: 'SignIn'
        })
    }
});

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

// 全局修改状态栏字体颜色为白色
StatusBar.setBarStyle('light-content', false);

export default (props: NavigationScreenProps) => {
    console.log('props', props);
    useEffect(() => {
        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('#0F2540');
        }
    }, []);
    return (<SafeAreaView style={{ flex: 1 }}><AppContainer /></SafeAreaView>);
}
