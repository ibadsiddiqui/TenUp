import React, { Component } from 'react'
import {
    ScrollView,
    FlatList
} from 'react-native'

import styles from './styles'
import FlatListItem from './../FlatListItem'

var fetchData = [
    {
        "transaction": "Sent",
        "fromData": "June 02 2018",
        "toDate": "June 02 2018",
        "money": "0.000078",
        "confirmation": "Confirmed"
    },
    {
        "transaction": "Received",
        "fromData": "June 02 2018",
        "toDate": "June 02 2018",
        "money": "0.000078",
        "confirmation": "Unconfirmed"
    },
    {
        "transaction": "Received",
        "fromData": "June 02 2018",
        "toDate": "June 02 2018",
        "money": "0.000078",
        "confirmation": "Unconfirmed"
    }
    ,
    {
        "transaction": "Received",
        "fromData": "June 02 2018",
        "toDate": "June 02 2018",
        "money": "0.000078",
        "confirmation": "Unconfirmed"
    }
]


export default class Transactions extends Component {
    render() {
        return (
            <ScrollView style={styles.transactionScroll}>
                <FlatList data={fetchData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} />);
                    }
                    } keyExtractor={(item, index) => index.toString()}
                >

                </FlatList>
            </ScrollView>
        )
    }
}
