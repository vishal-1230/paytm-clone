import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import upiLogo from "../assets/upionly.png"
import Button from '../components/common/Button'
import paytmbank from "../assets/paytmbank.png"

function Pay() {

    const [price, setPrice] = useState<number | null>(null)

  return (
    <View style={{
        flex: 1,
        // alignItems: 'center'
        justifyContent: "space-between"
    }}>
        
        <TopBar />

        <UPI />

        <View style={{
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
        }}>
            <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                <Text style={{
                    fontSize: 24,
                    color: price==null?"#949494":"#000",
                    // textAlign: "center",
                    // width: "100%",
                    marginTop: 6,
                    marginRight: 3,
                }}>₹</Text>
                <TextInput placeholder='0' autoFocus keyboardType='numeric' style={{
                    fontSize: 40,
                    fontWeight: "700",
                    // textAlign: "center",
                    // width: "100%",
                }} onChange={(e: any)=>{
                    setPrice(e.nativeEvent.text)
                }} />
            </View>
                <Text style={{
                    fontSize: 12,
                    color: "#949494",
                    // textAlign: "center",
                    // width: "100%",
                }}>Rupees Twelve Only</Text>
        </View>

        <PayButton />

    </View>
  )
}

const TopBar = () => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            width: "100%",
            paddingVertical: 22
        }}>
            <AntDesign name="arrowleft" size={24} color="black" style={{
                marginHorizontal: 10,
            }} />
            <Text style={{
                backgroundColor: "#ff7300",
                paddingHorizontal: 14,
                borderRadius: 50,
                marginHorizontal: 5,
                fontSize: 18,
                fontWeight: "500",
                color: "white",
                aspectRatio: 1,
                verticalAlign: "middle"
            }}>SS</Text>
            <View style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginLeft: 7,
            }}>
                <Text style={{fontWeight: "700", fontSize: 16}}>Siddharth Saha</Text>
                <Text style={{color: "#000", fontSize: 13}}>
                    9354992488@upi
                </Text>
            </View>
        </View>
    )
}

const UPI = () => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            borderBottomColor: "#d0d0d0",
            borderBottomWidth: 0.5,
            paddingBottom: 15,
        }}>
            <Text style={{
                marginHorizontal: 10, 
                marginRight: 25
            }}>To</Text>
            <View style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "#e4e4e4",
                padding: 4,
                marginRight: 8
            }}>
                <Image source={upiLogo} style={{width: 12, height: 12, objectFit: "contain"}} />
            </View>
            <Text>UPI linked Bank A/c</Text>
        </View>
    )
}

const PayButton = () => {
    return (
        <View style={{
            borderTopColor: "#d0d0d0",
            borderTopWidth: 0.5,
        }}>
            <Button title="Proceed Securely" onPress={()=>{}} />
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
            }}>
                <Text style={{
                    fontSize: 12,
                    color: "#949494",
                }}>Powered by</Text>

                <Image source={paytmbank} style={{width: 85, height: 38, objectFit: "cover"}} />
            </View>
        </View>
    )
}

export default Pay