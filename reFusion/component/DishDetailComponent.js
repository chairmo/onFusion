import React, {Component} from "react";
import {Card, ListItem, Icon} from "react-native-elements";
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import {postFavorites} from "../redux/actionCreators";


const mapStateToProps = state => {
    return({
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    })
};

const mapDispatchToProps = () => dispatch => {
    return {
        postFavorites: (dishId) => dispatch(postFavorites(dishId))
    }
};

function RenderDish(props) {
    let dish = props.dish;
    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{uri: baseUrl + dish.image}}>
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color="#f50"
                    onPress={() => props.favorite ? console.log('Already a favorite') : props.onPress()}/>
                <Text style={{marginBottom: 10}}>
                    {dish.description}
                </Text>
            </Card>
        )
    } else {
        return (
            <View></View>
        )
    }
}

function RenderComments(props) {
    let comment = props.comment;

    let renderCommentItem = ({item, index}) => {
        return (
            <View key={index} style={styles.authorText}>
                <Text>{item.rating + ' Stars'}</Text>
                <Text>{item.comment}</Text>
                <Text>{'--- ' + item.author + '  ' + item.date}</Text>
            </View>
        )
    };

    return (
        <Card title="Comments">
            <FlatList
                data={comment}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

class DishDetail extends Component {

    static navigationOptions = {
        title: 'DishDetail'
    };

    makeFavorite(dishId) {
        this.props.postFavorites(dishId);
    }


    render() {
        const dishId = this.props.navigation.getParam('dishId', '');
        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                favorite={this.props.favorites.some((el) => el === dishId)}
                onPress={() => this.makeFavorite(dishId)}/>
                <RenderComments comment={this.props.comments.comments.filter((comment) => comment.dishId === dishId)}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 14,
        margin: 10
    },
    authorText: {
        fontSize: 12,
        margin: 10
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);