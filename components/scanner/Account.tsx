import React from 'react'
import { Image, Text, View } from 'react-native'
import img1 from "../../assets/scannericons/icon1.png"
import img2 from "../../assets/scannericons/icon2.png"
import img3 from "../../assets/scannericons/icon3.png"
import img4 from "../../assets/scannericons/icon4.png"

function Account(props: AccountProps) {
  return (
    <View style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 95,
        width: 95,
    }}>
        <View style={{
            backgroundColor: props.color==="pink"?"#ffeae5":props.color==="skin"?"#fff3d6":"#e7fcf7",
            width: 50,
            height: 50,
            borderRadius: 50,
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Image source={props.icon===1?img1:props.icon===2?img2:props.icon===3?img3:img4} style={{width: 30, height: 30, objectFit: "contain"}} />
        </View>
        <Text style={{color: "black", fontWeight: "600", width: "80%", textAlign: "center", fontSize: 12}}>{props.name}</Text>
    </View>
  )
}

interface AccountProps {
    name: string,
    icon: 1 | 2 | 3 | 4,
    color: "pink" | "skin" | "blue"
}

export default Account