import { AntDesign, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import paytm from "../assets/paytmonly.png"
import paytmbank from "../assets/paytmbank.png"
import PlainButton from '../components/common/PlainButton'
import TrialOffer from '../assets/offers/trialoffer.jpg'

import balanceLogo from "../assets/homeicons/balance.png"
import scannpay2 from "../assets/homeicons/scannpay4.jpeg"
import tocontact from "../assets/homeicons/tocontact.png"
import linkrupay from "../assets/homeicons/linkrupay.png"
import tobank from "../assets/homeicons/tobank.png"
import ccpayment from "../assets/homeicons/ccpayment.png"
import ccpayment2 from "../assets/homeicons/ccpayment2.png"
import personalloan from "../assets/homeicons/personalloan.png"

import successSound from "../assets/success.mp3"

function Paid() {

    const params = useLocalSearchParams()

    const [name, setName] = useState<string | null>(null)
    const [upiid, setUpiid] = useState<string | null>(null)
    const [price, setPrice] = useState<number | null>(null)

    const [loaded, setLoaded] = useState<boolean>(false)
    const [sound, setSound] = useState<any>(null);

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
        if (params?.price && typeof params?.price === "string") {
            setPrice(parseInt(params.price))
        } else {
            setPrice(null)
        }
        playSound()
        setTimeout(()=>{
            setLoaded(true)
        }, 1000)
    }, [params])

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(successSound);
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
      }

    useEffect(() => {
    return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
        }
        : undefined;
    }, [sound]);

  return (
    loaded ?
    <ScrollView>
        
        <TopBar />

        <PaidCard name={name} upiid={upiid} price={price} />

        <Offer />

        <Image source={TrialOffer} style={{
            width: "95%",
            height: 200,
            objectFit: "cover",
            margin: 10,
            borderRadius: 15,
        }} />

        <Section title="UPI Money Transfer" titleSubText="vishal.vishwajeet@paytm" items={[
            {title: "Scan & Pay", icon: scannpay2, iconStyle: "highlighted", onPress: ()=>{
                router.push("Scanner")
            }},
            {title: "To Mobile or Contact", icon: tocontact, iconStyle: "highlighted"},
            {title: "Link RuPay Card to UPI", icon: linkrupay, iconStyle: "highlighted"},
            {title: "To Bank or Self A/c", icon: tobank, iconStyle: "highlighted"},
            {title: "Balance & History", icon: balanceLogo, iconStyle: "default"},
            {title: "Credit Cards", icon: ccpayment, iconStyle: "special"},
            {title: "Credit Card Payment", icon: ccpayment2, iconStyle: "default"},
            {title: "Personal Loan", icon: personalloan, iconStyle: "special"},
        ]} />

        <View style={{
            height: 60,
            width: "100%"
        }}></View>

    </ScrollView>
    :
    <View style={{
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>
        <ActivityIndicator size={48} color="#28bbdf" style={{
            width: 70,
            height: 70
        }} />
    </View>
  )
}

const TopBar = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20
        }}>
            <AntDesign name="arrowleft" size={24} color="black" onPress={()=>{
                router.push("Home")
            }}/>
            <Image source={paytm} style={{
                width: 80,
                height: 25,
                // marginTop: 20,
                // marginRight: 20,
                objectFit: "cover"
            }} />
            <Text style={{
                fontSize: 13,
                fontWeight: "700",
                color: "#28bbdf",
            }}>Help</Text>
        </View>
    )
}

const PaidCard = ({name, upiid, price}: {name: string | null, upiid: string | null, price: number | null}) => {
    return (
        <View style={{
            backgroundColor: "#def6ff",
            borderRadius: 15,
            padding: 20,
            paddingBottom: 15,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 15,
            marginTop: 2,
            borderBottomColor: "#062e75",
            borderBottomWidth: 8,
        }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                paddingVertical: 22,
                paddingTop: 5
            }}>
            <Text style={{
                backgroundColor: "#ff7300",
                paddingHorizontal: 14,
                borderRadius: 50,
                marginHorizontal: 5,
                fontWeight: "600",
                color: "white",
                aspectRatio: 1,
                verticalAlign: "middle",
                fontSize: 16,
            }}>
                {/* MY */}
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
                gap: 5,
                marginLeft: 4,
                justifyContent: "space-between",
            }}>
                <Text style={{fontWeight: "700", fontSize: 18}}>
                    {name?name:"Paytm Merchant"}
                </Text>
                <Text style={{color: "#000", fontSize: 13}}>
                    {upiid?upiid:"8373958829@paytm"}
                </Text>
            </View>
            <FontAwesome name="bank" size={9} color="black" style={{
                alignSelf: "flex-end",
                color: "#0588d7",
                backgroundColor: "white",
                padding: 4,
                borderRadius: 50,
                marginBottom: 1,
                marginLeft: 5,
            }} />
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                paddingTop: 0,
                gap: 8
            }}>
                <Text style={{
                    fontSize: 38,
                    fontWeight: "700"
                }}>
                    ₹{price?price:0}
                </Text>
                <MaterialCommunityIcons name="check-decagram" size={24} color="#20b970" style={{
                    marginTop: 5,
                }} />
            </View>

            <Text style={{
                fontSize: 13,
                fontWeight: "700",
                marginTop: 10
            }}>
                {/* 11 Dec, 10:28 PM */}
                {new Date().toDateString().split(" ")[2] + " " + new Date().toDateString().split(" ")[1] + ", "}
                {/* time in am pm */}
                {formatAMPM(new Date())}
            </Text>

            <View style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginTop: 12,
            }}>
                <Text style={{
                    color: "#28bbdf",
                    fontWeight: "600",
                }}>Ref. No: XX 4069</Text>
                <Ionicons name="chevron-down" size={20} color="#28bbdf" />
            </View>

            <View style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                marginTop: 23
            }}>
                <PlainButton title="Check Balance" onPress={()=>{}} />
                <PlainButton title="Share" onPress={()=>{}} />
                <PlainButton title="Pay Again" onPress={()=>{}} />

            </View>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                marginTop: 10
            }}>
                <View style={{
                    alignItems: "flex-end",
                    gap: -3
                }}>
                    <Text style={{
                        fontSize: 10,
                        fontWeight: "600",
                        color: "#949494",
                    }}>Powered</Text>
                    <Text style={{
                        fontSize: 10,
                        fontWeight: "600",
                        color: "#949494",
                    }}>by</Text>
                </View>

                <Image source={paytmbank} style={{width: 120, height: 60, objectFit: "cover"}} />
            </View>

            <View style={{
                height: 8,
                width: "110.5%",
                backgroundColor: "#03b8f6",
                position: "absolute",
                bottom: 0,
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
            }}></View>

        </View>
    )
}

import OfferMaybe from "../assets/offers/offermaybe.png"
import { router, useLocalSearchParams } from 'expo-router'
import Section from '../components/home/Section'
import { AVPlaybackStatusToSet, Audio } from 'expo-av'
const Offer = () => {
    return (
        // <View>
        //     <View style={{
        //         width: "100%",
        //         paddingVertical: 5,
        //         paddingHorizontal: 10,
        //         backgroundColor: "#00b8f5",
        //         flexDirection: "row",
        //         alignItems: "center",
        //         gap: 5,
        //     }}>
        //         <Ionicons name="flower-sharp" size={16} color="#078ebe" />
        //         <Text style={{
        //             fontSize: 11,
        //             fontWeight: "600",
        //             color: "white",
        //             marginLeft: 5
        //         }}>CLAIM YOUR REWARD</Text>
        //         <Ionicons name="flower-sharp" size={16} color="#078ebe" />
        //         <Text style={{
        //             fontSize: 11,
        //             fontWeight: "600",
        //             color: "white",
        //             marginLeft: 5
        //         }}>CLAIM YOUR REWARD</Text>
        //         <Ionicons name="flower-sharp" size={16} color="#078ebe" />
        //         <Text style={{
        //             fontSize: 11,
        //             fontWeight: "600",
        //             color: "white",
        //             marginLeft: 5
        //         }}>CLAIM YOUR REWARD</Text>
        //     </View>
        // </View>
        <Image source={OfferMaybe} style={{
            width: "100%",
            height: 200,
            objectFit: "contain",
            marginTop: 5,
        }} />
    )
}

function formatAMPM(date: any) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    const day = date.getDate();

    const formattedDate = `${formattedHours}:${formattedMinutes} ${ampm.toUpperCase()}`;

    return formattedDate;
}

export default Paid
