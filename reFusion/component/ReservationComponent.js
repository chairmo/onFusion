import React, {Component} from "react";
import {View, Text, StyleSheet, Button, Switch, ScrollView, Picker, Modal} from "react-native";
import DatePicker from 'react-native-datepicker';



class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plates: 1,
            dishType: '',
            homeDelivery: false,
            guest: 1,
            date: '',
            showModal: false
        }
    }

    static navigationOptions = {
        title: 'Make Reservation'
    };

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm(){
        this.setState({
            plates: 1,
            dishType: [],
            homeDelivery: false,
            guest: 1,
            date: ''
        });
    }

    render() {
        return (
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
                            <Picker.Item label="White Soup" value="White Soup"/>
                            <Picker.Item label="Okro" value="Okro"/>
                            <Picker.Item label="Vegetable" value="Vegetable"/>
                            <Picker.Item label="Ogbono" value="Ogbono"/>
                            <Picker.Item label="Idikaikong" value="Idikaikong"/>
                            <Picker.Item label="Egusi" value="Egusi"/>
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
                        <Button title="reserve" onPress={() => this.handleReservation()}
                                color="#512DA8" accessibilityLabel="Learn more about this purple button"/>
                    </View>
                    <Modal animationType="slide" transparent={false} visible={this.state.showModal}
                           onDismiss={() => this.toggleModal()} onRequestClose={() => this.toggleModal()}>
                        <View style={styles.modal}>
                            <Text style={styles.modalTitle}> Your Reservation </Text>
                            <Text style={styles.modalText}>Number of plates: {this.state.plates} </Text>
                            <Text style={styles.modalText}>Dish Type: {this.state.dishType} </Text>
                            <Text style={styles.modalText}>Home Delivery: {this.state.homeDelivery ? 'Yes' : 'No'} </Text>
                            <Text style={styles.modalText}>Number of guest: {this.state.guest} </Text>
                            <Text style={styles.modalText}>Date and Time: {this.state.date} </Text>
                            <Button title="Close" onPress={() => {this.toggleModal(); this.resetForm();}} color="#512DA8"/>
                        </View>
                    </Modal>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    formLabel: {
        fontSize: 16,
        flex: 2
    },
    formItem: {
        flex: 1,
    },
    modal: {
        justifyContent: "center",
        margin: 20
    },
    modalTitle: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 10,
      fontWeight: "bold",
      backgroundColor: "#512DA8",
      color: "#fff"
    },
    modalText: {
        fontSize: 14,
        margin: 10
    }
});


export default Reservation;