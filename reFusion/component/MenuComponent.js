import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {Tile} from 'react-native-elements';
import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import View from "react-native-web/dist/exports/View";


const mapStateToProps = state => {
    return ({
        dishes: state.dishes
    })
};


class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };


    render() {
        const RenderMenuItem = ({item, index}) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    imageSrc={{uri: baseUrl + item.image}}
                    featured
                    onPress={() => navigate('DishDetail', {dishId: item.id})}
                />
            )
        };

        let {navigate} = this.props.navigation;

        if (this.props.dishes.isLoading) {
            return (
                <Loading/>
            )
        } else if (this.props.dishes.errorMessage) {
            return (
                <View>
                    <Text> {this.props.dishes.errorMessage} </Text>
                </View>
            )
        } else {
            return (
                <FlatList
                    data={this.props.dishes.dishes}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            )
        }
    }
}


export default connect(mapStateToProps)(Menu);