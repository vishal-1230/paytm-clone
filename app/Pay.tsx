import { AntDesign } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import upiLogo from "../assets/upionly.png"
import Button from '../components/common/Button'
import paytmbank from "../assets/paytmbank.png"

import { router, useLocalSearchParams } from 'expo-router'

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
                    console.log("PRice updated", price)
                }} value={
                    // comma seperated price
                    price ?
                    // formatIndianPrice(price)
                    price.toString()
                    :
                    undefined
                } />
            </View>
                <Text style={{
                    fontSize: 12,
                    color: "#949494",
                    // textAlign: "center",
                    // width: "100%",
                }}>
                    {/* Rupees Twelve Only */}
                    {
                        price ? 
                            `Rupees ${price} Only`
                        :
                            null
                        }
                </Text>
        </View>

        <PayButton price={price} />

    </View>
  )
}

const TopBar = () => {

    const params = useLocalSearchParams()

    const [name, setName] = useState<string | null>(null)
    const [upiid, setUpiid] = useState<string | null>(null)

    useEffect(()=>{
        if (params?.name && typeof params?.name === "string") {
            setName(params.name)
        } else {
            setName(null)
        }
        if (params?.upiid && typeof params?.upiid === "string") {
            setUpiid(params.upiid)
        } else {
            setUpiid(null)
        }
    }, [params])

    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            width: "100%",
            paddingVertical: 22
        }}>
            <AntDesign name="arrowleft" size={24} color="black" onPress={(e: any)=>{
                router.back()
            }} style={{
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
            }}>
                {/* SS */}
                {
                    name ? 
                        name.split(" ").map((word: string) => word[0]).join("")
                    :
                        "PM"
                    }
            </Text>
            <View style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginLeft: 7,
            }}>
                <Text style={{fontWeight: "700", fontSize: 16}}>
                    {name?name:"Paytm Merchant"}
                </Text>
                <Text style={{color: "#000", fontSize: 13}}>
                    {upiid?upiid:"8373958829@paytm"}
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

const PayButton = ({price}: {price: number | null}) => {

    const params = useLocalSearchParams()

    const [name, setName] = useState<string | null>(null)
    const [upiid, setUpiid] = useState<string | null>(null)

    useEffect(()=>{
        if (params?.name && typeof params?.name === "string") {
            setName(params.name)
        } else {
            setName(null)
        }
        if (params?.upiid && typeof params?.upiid === "string") {
            setUpiid(params.upiid)
        } else {
            setUpiid(null)
        }
    }, [params])

    return (
        <View style={{
            borderTopColor: "#d0d0d0",
            borderTopWidth: 0.5,
        }}>
            <Button title="Proceed Securely" onPress={()=>{
                router.push({pathname: "UPI", params:{
                    name: name,
                    upiid: upiid,
                    price: price
                }})
            }} />
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

// getting 12,24,110 from 1224110
function formatIndianPrice(price: number) {
    const priceString = price.toString()
    const priceArray = priceString.split("")
    if (priceArray.length <= 3) {
        return priceString
    } else {
        const lastThree = priceArray.slice(priceArray.length-3, priceArray.length).join("")
        let remaining = ""
        for (let i = priceArray.length-4; i >= 0; i--) {
            remaining = priceArray[i] + remaining
            if ((priceArray.length-1-i)%2 === 0) {
                remaining = "," + remaining
            }
        }
        return `${remaining},${lastThree}`
    }
}

export default Pay