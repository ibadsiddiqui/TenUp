import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from "react-native";


const users = [
    {
       name: 'brynn',
       avatar: ''
    },
]
const ListData = props => (

            props.details.map((data) =>
                <Text key={data} style={{ textAlign: "center"}}>
                    {data}
                </Text>
            )

)

const ProfileData = props => {
    return (
        <View>
            <Image  source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}} 
                    style={{width: 100, height: 100, borderRadius: 80}}/>
            <ListData details={props.details} />
        </View>

    )
}

export default ProfileData;