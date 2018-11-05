import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import styles from './styles'


export default class FlatListItem extends Component {
    render() {
        return (
            <View style={[styles.tableShadowBox]}>
                <View style={styles.tableMargin}>
                    <Text style={styles.transactionStyle}>{this.props.item.transaction}</Text>
                    <View style={styles.rowView}>

                        <View style={styles.rowView}>
                            <Text>{this.props.item.fromData}  </Text>
                            <View >
                                <Text style={styles.toDateContainer}>  {this.props.item.toDate}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.TupBalanceStyle}>{this.props.item.money}</Text>
                        </View>
                    </View>
                    <Text style={styles.confirmedStyle}>{this.props.item.confirmation}</Text>
                </View>
            </View>


        );
    }
}
