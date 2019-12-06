import React, {Component} from "react";
import {View, Text, StyleSheet, Button, Switch, ScrollView, Picker} from "react-native";
import DatePicker from 'react-native-datepicker';
import {Card} from "react-native-elements";


class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plates: 1,
            dishType: '',
            homeDelivery: false,
            guest: 1,
            date: ''
        }
    }

    static navigationOptions = {
        title: 'Make Reservation'
    };

    handleReservation() {
        console.log(JSON.stringify(this.state));

        this.setState({
            plates: 1,
            dishType: '',
            homeDelivery: false,
            guest: 1,
            date: ''
        })
    }

    render() {
        return (
            <Card>
                <ScrollView>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}> Number of Plates </Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={this.state.plates}
                            onValueChange={((itemValue, itemPosition) => this.setState({
                                plates: itemValue
                            }))}>
                            <Picker.Item label="1" value={1}/>
                            <Picker.Item label="2" value={2}/>
                            <Picker.Item label="3" value={3}/>
                            <Picker.Item label="4" value={4}/>
                            <Picker.Item label="5" value={5}/>
                            <Picker.Item label="6" value={6}/>
                        </Picker>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}> Dish Type </Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={this.state.dishType}
                            onValueChange={((itemValue, itemPosition) => this.setState({
                                dishType: itemValue
                            }))}>
                            <Picker.Item label="White Soup" value={1}/>
                            <Picker.Item label="Okro" value={2}/>
                            <Picker.Item label="Vegetable" value={3}/>
                            <Picker.Item label="Ogbono" value={4}/>
                            <Picker.Item label="Idikaikong" value={5}/>
                            <Picker.Item label="Egusi" value={6}/>
                        </Picker>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}> Home Delivery </Text>
                        <Switch style={styles.formItem}
                                value={this.state.homeDelivery}
                                trackColor="#512DA8"
                                onValueChange={(value) => this.setState({
                                    homeDelivery: value
                                })}
                        >

                        </Switch>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}> Number of Guest </Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={this.state.guest}
                            onValueChange={((itemValue, itemPosition) => this.setState({
                                guest: itemValue
                            }))}>
                            <Picker.Item label="1" value={1}/>
                            <Picker.Item label="2" value={2}/>
                            <Picker.Item label="3" value={3}/>
                            <Picker.Item label="4" value={4}/>
                            <Picker.Item label="5" value={5}/>
                            <Picker.Item label="6" value={6}/>
                        </Picker>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}> Date and Time </Text>
                        <DatePicker
                            style={styles.formItem}
                            date={this.state.date}
                            mode='datetime'
                            placeholder="date"
                            format="YYYY-MM-DD"
                            minDate="2019-12-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}>
                            onDateChange={(date) => {
                            this.setState({date: date})
                        }}
                        </DatePicker>
                    </View>
                    <View style={styles.formRow}>
                        <Button title="reserve" onPress={() => this.handleReservation}
                                color="#512DA8" accessibilityLabel="Learn more about this purple button"/>
                    </View>
                </ScrollView>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        flex: 2
    },
    formItem: {
        flex: 1,
    }
});


export default Reservation;