import React, {Component} from "react";
import {Card, ListItem} from "react-native-elements";
import {Text, ScrollView, FlatList} from "react-native";
import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import Loading from "./LoadingComponent";


const mapStateToProps = state => {
    return({
        leaders: state.leaders
    })
};


function RenderHistory(props) {
    let message = "Started in 2010, Ristorante con Fusion quickly " +
        "established itself as a culinary icon par excellence in Hong Kong. " +
        "With its unique brand of world fusion cuisine that can be found nowhere else," +
        " it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of " +
        "the best three-star Michelin chefs in the world, you never know what will arrive on " +
        "your plate the next time you visit us.\n" + "\n" +
        "The restaurant traces its humble beginnings to The Frying Pan, a successful chain" +
        " started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.";


    return (
        <Card
            title="Our History">
            <Text> {message} </Text>
        </Card>
    )
}


class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };


    RenderMenuItem = ({item, index}) => (
        <ListItem
            key={index}
            title={item.name}
            leftAvatar={{source: { uri: baseUrl + item.image }}}
            subtitle={item.description}
            subtitleNumberOfLines={15}
            hideChevron={true}>
        </ListItem>

    );

    render() {

        if (this.props.leaders.isLoading) {
            return (
                <ScrollView>
                    <Card title="Corporate Leadership">
                        <Loading/>
                    </Card>
                </ScrollView>
            )
        } else if (this.props.leaders.errorMessage) {
            return (
                <ScrollView>
                    <Card title="Corporate Leadership">
                        <Text> {this.props.leaders.errorMessage} </Text>
                    </Card>
                </ScrollView>
            )
        } else {
            return (
                <ScrollView>
                    <RenderHistory/>
                    <Card title="Corporate Leadership">
                        <FlatList
                            data={this.props.leaders.leaders}
                            renderItem={this.RenderMenuItem}
                            keyExtractor={item => item.id.toString()}/>
                    </Card>
                </ScrollView>
            )
        }
    }

}


export default connect(mapStateToProps)(About);