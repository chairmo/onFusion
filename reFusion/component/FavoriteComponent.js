import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from "react-native-elements";
import {baseUrl} from "../shared/baseUrl";
import {connect} from "react-redux";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
    return ({
        favorites: state.favorites,
        dishes: state.dishes
    })
};

class Favorites extends Component {

    static navigationOptions = {
        title: 'Favorites'
    };

    render() {
        const {navigate} = this.props.navigation;


        const RenderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    bottomDivider
                    onPress={() => navigate('DishDetail', {dishId: item.id})}
                />
            )
        };

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
                    data={this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => dish.id === el))}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            )
        }
    }
}


export default connect(mapStateToProps)(Favorites);