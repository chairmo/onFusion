import React from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import {ListItem} from 'react-native-elements';
import * as Constants from "expo-constants";

export default function Menu(props) {

    const RenderMenuItem = ({item, index}) => {
        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('./images/alberto.png')}}
                    hideChevron={true}

                    />
        )
    };

    return (
        <FlatList
            data = {props.dishes}
            renderItem={RenderMenuItem}
            keyExtractor={ item =>item.id.toString() }
            />
    )

}



/*export default Menu; */