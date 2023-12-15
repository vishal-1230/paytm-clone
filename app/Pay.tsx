import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

function Pay() {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            width: "100%",
        }}>
            <AntDesign name="arrowleft" size={24} color="black" style={{
                marginHorizontal: 10,
            }} />
            <Text style={{
                backgroundColor: "#ff7300",
                padding: 10,
                borderRadius: 50,
                marginHorizontal: 10,
            }}>SS</Text>
            <View style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                marginLeft: 10,
            }}>
                <Text style={{fontWeight: "bold"}}>Siddharth Saha</Text>
                <Text style={{color: "grey", fontSize: 12}}>
                    1234 5678 9012 3456
                </Text>
            </View>
        </View>


    </View>
  )
}

export default Pay