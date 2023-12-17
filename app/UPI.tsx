import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import upi from '../assets/upi.webp'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

function UPI() {

    const [pin, setPin] = useState<null[] | number[]>([null, null, null, null, null, null])

  return (
    <View style={{
        height: "100%"
    }}>

        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingTop: 5,
            paddingBottom: 10,
            backgroundColor: "#f1f1f1"
        }}>
            <View>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 14
                }}>SBI Bank</Text>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 18
                }}>XXXX1234</Text>
            </View>
            <Image source={upi} style={{width: 95, height: 47, marginTop: 6, marginRight: 15, objectFit: "cover"}} />
        </View>

        <View style={{
            backgroundColor: "#1b3281",
            padding: 5, 
            flexDirection: "row", 
            paddingHorizontal: 15,
        }}>
            <View style={{
                flexGrow: 1,
                marginLeft: 5
            }}>
                <Text style={{
                    color: "white",
                    fontSize: 16
                }}>To:</Text>
                <Text style={{
                    color: "white",
                    fontSize: 16
                }}>Sending:</Text>
            </View>

            <View>
                <Text style={{
                    fontWeight: "700", 
                    color: "white",
                    fontSize: 16,
                }}>Shubham Singh</Text>
                <Text style={{
                    fontWeight: "700", 
                    color: "white",
                    fontSize: 16,
                }}>₹ 1.00</Text>
            </View>
            <Entypo name="chevron-small-down" size={24} color="white" style={{marginTop: 5, alignSelf: "flex-end", paddingHorizontal: 15}} />
        </View>

        <View style={{
            // flexGrow: 1,
        }}>
            <View style={{
                margin: 25
            }}>
                <Text style={{
                    fontWeight: "600",
                    color: "#444444",
                    textAlign: "center",
                    fontSize: 14.3
                }}>ENTER 6-DIGIT UPI PIN</Text>

                <View style={{
                    flexDirection: "row",
                    gap: 12,
                    marginTop: 45,
                }}>
                    {pin.map((item, index) => {
                        return (
                            <View key={index} style={{
                                flexGrow: 1,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                // marginHorizontal: 5,
                            }}>
                                {
                                    item!=null ?
                                    <Text style={{
                                        fontSize: 40,
                                        fontWeight: "700",
                                        color: "#444444",
                                    }}>
                                        •
                                    </Text>
                                    :
                                    <View style={{
                                        height: 2,
                                        maxHeight: 2,
                                        width: "80%",
                                        flexGrow: 1,
                                        backgroundColor: "#ccc",
                                    }}></View>
                                }
                            </View>
                        )
                    })}
                </View>
            </View>

            <View style={{
                backgroundColor: "#ffd07165",
                width: "85%",
                alignSelf: "center",
                alignItems: "center",
                marginTop: 60,
                padding: 5,
                flexDirection: "row",
                gap: 10,
                borderRadius: 10,
                paddingRight: 20
            }}>
                <View style={{
                    backgroundColor: "#ffb31c",
                    padding: 5,
                    borderRadius: 50,
                    marginRight: 2,
                }}>
                    <MaterialCommunityIcons name="exclamation-thick" size={20} color="white" />
                </View>
                <Text style={{
                    color: "#0000008f",
                    fontSize: 14,
                    fontWeight: "600",
                    textAlign: "center",
                }}>
                    You are transferring money from your account to Shubham Singh
                </Text>
            </View>
        </View>

        <UPIKeyboard pin={pin} setPin={setPin} />

    </View>
  )
}

const UPIKeyboard = ({pin, setPin}: any) => {

    // const [pin, setPin] = useState<null[] | number[]>([null, null, null, null, null, null])

    return (
        <FlatList
            key={0}
            numColumns={3}
            style={{
                // flexWrap: 'wrap',
                width: '100%',
                backgroundColor: "#eee",
                paddingTop: 5,
                paddingBottom: 10,
                bottom: 0,
                position: "absolute"
            }}
            data={[
                {title: 1}, {title: 2}, {title: 3}, {title: 4}, {title: 5}, {title: 6}, {title: 7}, {title: 8}, {title: 9}, {title: "DEL"}, {title: 0}, {title: "OK"}
            ]} renderItem={({item}) => (
                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 6,
                        marginLeft: 10,
                        borderRadius: 12,
                        width: "30%",
                        paddingVertical: 7,
                    }} onPress={(e: any)=>{
                        console.log(item.title)
                        if (item.title!="DEL" && item.title!="OK") {
                            console.log("Not DEL or OK")
                            setPin((prev: any) => {
                                let temp = [...prev]
                                for (let i = 0; i < temp.length; i++) {
                                    if (temp[i] == null) {
                                        temp[i] = item.title
                                        break
                                    }
                                }
                                return temp
                            })
                        } else if (item.title=="DEL") {
                            console.log("DEL")
                            setPin((prev: any) => {
                                let temp = [...prev]
                                for (let i = temp.length-1; i >= 0; i--) {
                                    if (temp[i] != null) {
                                        temp[i] = null
                                        break
                                    }
                                }
                                return temp
                            })
                        } else if (item.title=="OK") {
                            console.log("OK")
                        }
                    }}>
                        <Text style={{
                            color: "#1b3281",
                            fontWeight: "400",
                            textAlign: "center",
                            fontSize: 32
                        }}>
                            {
                                item.title!="DEL" && item.title!="OK" ? item.title : <Ionicons name={item.title=="DEL" ? "backspace-sharp" : "checkmark-circle-sharp"} size={item.title=="DEL" ? 32 : 56} color="#1b3281" />
                            }
                        </Text>
                    </TouchableOpacity>
        )} />
    )
}

export default UPI