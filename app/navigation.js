import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import HeaderHome from './components/HeaderHome';

const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                Home: {
                    screen: createStackNavigator({
                        HomeScreen: { screen: HomeScreen },
                    },
                    
                        {
                            headerMode: 'none',
                            navigationOptions:
                                ({ navigation, screenProps }) => {
                                    return {
                                        header: <HeaderHome {...navigation} {...screenProps} />
                                    }
                                }
                        }),
                    headerMode: 'none',
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Octicons name='home' color={tintColor} size={30} />
                        ),
                        headerShown: false,
                    },

                },

                Create: {
                    screen: ChallengeScreen,
                    headerMode: 'none',
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <FontAwesome name='plus-square' color={tintColor} size={30} />
                        ),
                        headerShown: false
                    }
                },

                Profile: {
                    screen: ProfileScreen,
                    headerMode: 'none',
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <FontAwesome name='user-o' color={tintColor} size={27} />
                        ),
                        headerShown: false
                    }
                }

            },
            {
                headerMode: 'none',
                navigationOptions: {

                    headerShown: false
                },
                /*
                defaultNavigationOptions: {
                    tabBarOnPress: ({ navigation, defaultHandler }) => {
                        if (navigation.state.key === 'Post') {
                            navigation.navigate('postModal')
                        } else {
                            defaultHandler()
                        }
                    }
                },
                */
                tabBarOptions: {
                    activeTintColor: "black",
                    inactiveTintColor: "#C0C0C0",
                    showLabel: true,

                    style: {
                        height: 60,
                        backgroundColor: "white",
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        elevation: 5,

                    }
                },

            },

        ),
        /*
        postModal: {
            screen: PostScreen
        }
        */
    },
    {
        mode: 'modal',
        headerMode: 'none',
        navigationOptions: {
            headerShown: false
        }
    }
)


export default createAppContainer(
    createStackNavigator(
        {
            //Loading: LoadingScreen,
            App: AppContainer,
        },
        {
            initialRouteName: 'App'
        }
    )
)
