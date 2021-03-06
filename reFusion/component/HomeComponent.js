import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import {Card} from "react-native-elements";
import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import Loading from "./LoadingComponent";


const mapStateToProps = state => {
    return ({
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders
    })
};


function RenderItem(props) {
    const item = props.item;

    if (props.isLoading) {
        return (
            <Loading/>
        )
    } else if (props.errorMessage) {
        return (
            <View>
                <Text> {props.errorMessage} </Text>
            </View>
        )
    } else {
        if (item != null) {
            return (
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={{uri: baseUrl + item.image}}>
                    <Text style={{margin: 10}}> {item.description} </Text>
                </Card>
            )
        } else {
            return (<View></View>)
        }
    }

}

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <ScrollView>
                <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                            isLoading={this.props.dishes.isLoading}
                            errMessage={this.props.dishes.errorMessage}/>
                <RenderItem item={this.props.promotions.promotions.filter((promos) => promos.featured)[0]}
                            isLoading={this.props.promotions.isLoading}
                            errMessage={this.props.promotions.errorMessage}/>
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                            isLoading={this.props.leaders.isLoading}
                            errMessage={this.props.leaders.errorMessage}/>
            </ScrollView>
        )
    }

}

export default connect(mapStateToProps)(Home);