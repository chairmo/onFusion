import React, {Component} from "react";
import {Card, Text} from "react-native-elements";


export default class Contact extends Component{

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return (
            <Card
                title="Contact Information">
                <Text style={{margin: 10}}>
                    121, Clear Water Bay Road
                    Clear Water Bay, Kowloon HONG KONG.
                    Tel: +3849925152
                    Fax: +36484527829.
                    Email: iyungmany@gmil.com
                </Text>
            </Card>
        )
    }
}
