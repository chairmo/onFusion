import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import {Button, Icon} from "react-native-elements";
import {SafeAreaView, ScrollView, View, Text, Image, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {fetchComments, fetchDishes, fetchLeaders, fetchPromotions} from "../redux/actionCreators";


const mapStateToProps = state => {
    return ({})
};
const mapDispatchToProps = () => (dispatch) => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchPromos: () => dispatch(fetchPromotions()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    fetchComments: () => dispatch(fetchComments()),
});

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="arrow-back" size={30} color="#fff"
                              onPress={() => navigation.navigate("Home")}/>
        })
    },
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTintStyle: {color: '#fff'}
    }
});

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="menu" size={24} color="#fff"
                              onPress={() => navigation.toggleDrawer()}/>
        })
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTintStyle: {color: '#fff'}
    }
});

const AboutNavigator = createStackNavigator({

    About: {
        screen: About,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="arrow-back" size={30} color="#fff"
                              onPress={() => navigation.navigate("Home")}/>
        })
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#512DA2'},
        headerTintColor: '#fff',
        headerTintStyle: {color: '#fff'}
    }
});

const ContactNavigator = createStackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="arrow-back" size={30} color="#fff"
                              onPress={() => navigation.navigate("Home")}/>
        })
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#512DA2'},
        headerTintColor: '#fff',
        headerTintStyle: {color: '#fff'}
    }
});

const customDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInsert={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>ReFusion Dish</Text>
                </View>
            </View>
            <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
        Home: {
            screen: HomeNavigator, navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon name="home"
                          type="font-awesome"
                          size={26}
                          color={tintColor}
                    />
                )
            }
        },
        Menu: {
            screen: MenuNavigator, navigationOptions: {
                title: 'Menu',
                drawerLabel: 'Menu',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon name="list"
                          type="font-awesome"
                          size={24}
                          color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator, navigationOptions: {
                title: 'About Us',
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon name="info-circle"
                          type="font-awesome"
                          size={26}
                          color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator, navigationOptions: {
                title: 'Contact Us',
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon name="address-card"
                          type="font-awesome"
                          size={24}
                          color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#dae2e8',
        contentComponent: customDrawerContentComponent
    });


const styles = StyleSheet.create({
    container: {flex: 1},
    drawerHeader: {
        flex: 1,
        flexDirection: 'row',
        height: 140,
        backgroundColor: '#512da8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 80
    }
});

const MainApp = createAppContainer(MainNavigator);


class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromos();
        this.props.fetchComments();
    }

    render() {
        return (
            <MainApp/>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Main);