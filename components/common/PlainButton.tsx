import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function PlainButton({title, onPress}: {title: string, onPress: () => void}) {
  return (
    <TouchableOpacity style={{
        borderRadius: 20,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#d8eaf0",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 14
    }} onPress={onPress}>
        <Text style={{
            fontSize: 12,
            fontWeight: "600",
        }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PlainButton