import { View, Text, ScrollView, Dimensions } from "react-native"
import { Image } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home () {
  return (
    <View>
        <View style={{
            backgroundColor: "#022a72",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 15,
            paddingHorizontal: 15,
            rowGap: 10
        }}>
            <Image source={require("../assets/vishallinkedin.jpeg")} style={{width: 35, height: 35, borderRadius: 500}} />
            <View style={{flexGrow: 1, alignItems: "center", display: "flex", flexDirection: "row", alignSelf: "center"}}>
                <View style={{display: "flex", flexDirection: "row", borderRadius: 50, padding: 3, alignItems: 'center', gap: 5, backgroundColor: "#fedc22", marginRight: "auto", marginLeft: 16}}>
                    <MaterialCommunityIcons name="airplane-takeoff" size={20} color="black" style={{backgroundColor: "white", borderRadius: 500, padding: 2}} />
                    <Text style={{color: "black", fontWeight: "600", fontSize: 13}}>Travel Sale Live</Text>
                    <View style={{borderRadius: 500, width: 7, height: 7, backgroundColor: "green", marginRight: 5}}></View>
                </View>
            </View>

            <Ionicons name="search-outline" size={26} color="white" style={{marginRight: 20}} />
            <Ionicons name="chatbox-outline" size={26} color="white" style={{marginRight: 5}} />
        </View>

        <View style={{
            backgroundColor: "#022a72",
            flexGrow: 1,
        }}>
            <View style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "white",
                height: "100%",
            }}>

                <View style={{
                    height: 5,
                    width: 40,
                    backgroundColor: "grey",
                    borderRadius: 50,
                    alignSelf: "center",
                    marginTop: 7,
                    marginBottom: 5
                }}></View>

                <MainPlayground />

                <ScannpayHoverButton />
                
            </View>
        </View>

    </View>
  )
}

import balanceLogo from "../assets/homeicons/balance.png"
import scannpay2 from "../assets/homeicons/scannpay4.jpeg"
import tocontact from "../assets/homeicons/tocontact.png"
import linkrupay from "../assets/homeicons/linkrupay.png"
import tobank from "../assets/homeicons/tobank.png"
import ccpayment from "../assets/homeicons/ccpayment.png"
import ccpayment2 from "../assets/homeicons/ccpayment2.png"
import personalloan from "../assets/homeicons/personalloan.png"

import recharge from "../assets/homeicons/recharge.png"
import rent from "../assets/homeicons/rent.png"
import dth from "../assets/homeicons/dth.png"
import electricity from "../assets/homeicons/electricity.png"
import mobilepostpaid from "../assets/homeicons/mobilepostpaid.png"
import cylinder from "../assets/homeicons/cylinder.png"
import viewmore from "../assets/homeicons/viewmore.png"
import { Bill } from "../components/home/Bills";
import Section from "../components/home/Section";
import { SectionSeperator } from "../components/home/SectionSeperator";
import { ScannpayHoverButton } from "../components/home/ScannpayHoverButton";

import Carousel from "react-native-reanimated-carousel";
import offer1 from "../assets/offers/offer1.jpeg"
import offer2 from "../assets/offers/offer2.jpeg"
import offer3 from "../assets/offers/offer3.jpeg"
import offer4 from "../assets/offers/offer4.jpeg"
import offer5 from "../assets/offers/offer5.jpeg"
import offer6 from "../assets/offers/offer6.jpeg"
import offer7 from "../assets/offers/offer7.jpeg"
const MainPlayground = () => {
    const width = Dimensions.get('window').width;
    const images = [offer1, offer2, offer3, offer4, offer5, offer6, offer7].reverse()
    return (
        <ScrollView style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "white",
            padding: 12,
            paddingTop: 5,
        }}>
        <Carousel
            loop
            width={width}
            height={150}
            autoPlay={true}
            data={images}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View style={{
                        width: width*0.935,
                        height: "auto",
                        backgroundColor: "grey",
                        borderRadius: 10,
                        marginBottom: 10
                    }}>
                        <Image source={images[index]} style={{width: "100%", height: "100%", borderRadius: 10}} />
                    </View>
                )}
        />
        <View style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <ScrollView horizontal={true} style={{
                display: "flex",
                flexDirection: "row",
                // marginBottom: 10,
            }}>
            <Bill />
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                borderColor: "#d6d6d6",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 0,
                aspectRatio: 1,
                paddingHorizontal: 12,
                gap: 6
            }}>
                <Image source={balanceLogo} style={{height: 25, width: 25, objectFit: "cover"}} />
                <Text style={{color: "black", fontWeight: "700", fontSize: 12}}>My Bills</Text>
            </View>
            </ScrollView>
        </View>

                <Section title="UPI Money Transfer" titleSubText="vishal.vishwajeet@paytm" items={[
                    {title: "Scan & Pay", icon: scannpay2, iconStyle: "highlighted"},
                    {title: "To Mobile or Contact", icon: tocontact, iconStyle: "highlighted"},
                    {title: "Link RuPay Card to UPI", icon: linkrupay, iconStyle: "highlighted"},
                    {title: "To Bank or Self A/c", icon: tobank, iconStyle: "highlighted"},
                    {title: "Balance & History", icon: balanceLogo, iconStyle: "default"},
                    {title: "Credit Cards", icon: ccpayment, iconStyle: "special"},
                    {title: "Credit Card Payment", icon: ccpayment2, iconStyle: "default"},
                    {title: "Personal Loan", icon: personalloan, iconStyle: "special"},
                ]} />
                <SectionSeperator />
                <Section title="Recharge & Pay Bills" titleSubText="My Bills" items={[
                    {title: "Mobile Recharge", icon: recharge, iconStyle: "default"},
                    {title: "Rent via Credit Card", icon: rent, iconStyle: "default"},
                    {title: "DTH Recharge", icon: dth, iconStyle: "default"},
                    {title: "Electricity Bill", icon: electricity, iconStyle: "default"},
                    {title: "Credit Card Payment", icon: ccpayment2, iconStyle: "default"},
                    {title: "Mobile Postpaid", icon: mobilepostpaid, iconStyle: "default"},
                    {title: "Book LPG Cylinder", icon: cylinder, iconStyle: "default"},
                    {title: "View More", icon: viewmore, iconStyle: "default"},
                ]} />
                <View style={{height: 270, width: "100%"}}></View>
        </ScrollView>
    )
}