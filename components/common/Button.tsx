import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function Button({title, onPress}: {title: string, onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: "#00aceb",
            borderRadius: 6,
            // width: "100%",
            paddingVertical: 16,
            margin: 16,
            marginBottom: 0,
        }}>

            {/* <Ionicons name='shield-checkmark-sharp' size={20} color="white" /> */}
            <MaterialCommunityIcons name="shield-check" size={20} color="white" />

            <Text style={{
                fontSize: 17,
                fontWeight: "700",
                color: "white"
            }}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button