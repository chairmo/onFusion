import React, {Component} from "react";
import {Card, Icon, Rating, Input} from "react-native-elements";
import {View, Text, FlatList, ScrollView, StyleSheet, TextInput, Button, Modal} from 'react-native';
import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import {postFavorites, postComment} from "../redux/actionCreators";


const mapStateToProps = state => {
    return ({
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    })
};

const mapDispatchToProps = () => dispatch => {
    return {
        postFavorites: (dishId) => dispatch(postFavorites(dishId)),
        postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
    }
};

function RenderDish(props) {
    let dish = props.dish;
    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{uri: baseUrl + dish.image}}>
                <View style={styles.iconView}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color="#f50"
                        onPress={() => props.favorite ? console.log('Already a favorite') : props.markFav()}/>
                    <Icon raised
                          reverse
                          name="pencil"
                          color="#512DA8" type="font-awesome"
                          onPress={() => props.addComment()}/>
                </View>
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
                <Rating readonly imageSize={20} startingValue={parseInt(item.rating, 10)}
                        type="star" style={{paddingVertical: 5}}/>
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
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            author: '',
            comment: '',
            rating: null
        }
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    resetForm() {
        this.setState({
            rating: null,
            author: '',
            comment: ''
        });
    }

    static navigationOptions = {
        title: 'DishDetail'
    };

    makeFavorite(dishId) {
        this.props.postFavorites(dishId);
    }

    handlePostComment = (dishId, rating, author, comment) => {
        this.props.postComment(dishId, rating, author, comment);
        this.toggleModal();
        this.resetForm();
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId', '');
        const {rating, author, comment} = this.state;
        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                            favorite={this.props.favorites.some((el) => el === dishId)}
                            markFav={() => this.makeFavorite(dishId)}
                            addComment={() =>this.toggleModal()}/>
                <RenderComments comment={this.props.comments.comments.filter((comment) => comment.dishId === dishId)}/>

                <Modal animationType="slide" transparent={false} visible={this.state.showModal}
                       onDismiss={() => this.toggleModal()} onRequestClose={() => this.toggleModal()}>
                    <View style={styles.modal}>
                        <Rating showRating imageSize={30} startingValue={this.state.rating} ratingCount={5} type="star"
                                onFinishRating={(rating) => this.setState({rating: rating})} style={{paddingVertical: 10}}/>
                    </View>
                    <View style={styles.iconView}>
                        <Input style={styles.input}
                               Placeholder="author"
                               leftIcon={<Icon name ="user-o" type = "font-awesome" size={24}/>}
                               onChangeText={(author) => this.setState({author: author})}/>
                    </View>
                    <View style={styles.iconView}>
                        <Input style={styles.input}
                               Placeholder="comment"
                               onChangeText={(comment) => this.setState({comment: comment})}
                               leftIcon={<Icon name ="comment-o" type = "font-awesome" size={24}/>}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.button}>
                        <Button title="Cancel" onPress={() => {this.toggleModal(); this.resetForm()}} color="#9294a1"/>
                        </View>
                        <View style={styles.button}>
                        <Button title="Submit" onPress={() => this.handlePostComment(dishId, rating, author, comment)}
                                color="#512DA8"/>
                        </View>

                    </View>

                </Modal>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    authorText: {
        fontSize: 12,
        margin: 10
    },
    iconView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    modal: {
        justifyContent: "center",
        margin: 20
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 0,
        backgroundColor: "#512DA8",
        color: "#fff"
    },
    searchIcon: {
        padding: 10
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    button: {
        width: "70%",
        flex: 1,
        padding: 10,
        height: "80%"
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);