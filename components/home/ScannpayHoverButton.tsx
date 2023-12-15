import { Image, Text, View } from "react-native"
import cashback from "../../assets/homeicons/cashback.png"
import ondc from "../../assets/homeicons/ondc.png"
import scannpay2 from "../../assets/homeicons/scannpay4.jpeg"

export const ScannpayHoverButton = () => {
    return (
        <View style={{
            position: "absolute",
            // bottom: 135,
            // bottom: 250,
            top: "74.5%",
            height: 67,
            // width: 180,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: -2,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
            borderRadius: 70,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            // paddingVertical: 10,
            alignSelf: "center",
            zIndex: 100,
            gap: 10
        }}>
            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
                alignSelf: "center",
                width: 55,
            }}>
                <Image source={cashback} style={{width: 50, height: 35, objectFit: "cover"}} />
                <Text style={{fontSize: 11, fontWeight: "500"}}>Cashback</Text>
            </View>
            <View style={{
                backgroundColor: "#022a72",
                borderRadius: 50,
                padding: 9,
                borderColor: "#2c89bb",
                borderWidth: 1.5
            }}>
                <Image source={scannpay2} style={{width: 48, height: 48, objectFit: "cover"}} />
            </View>

            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
                alignSelf: "center",
                width: 55,
            }}>
                <Image source={ondc} style={{width: 50, height: 35, objectFit: "cover"}} />
                <Text style={{fontSize: 11, fontWeight: "500"}}>ONDC</Text>
            </View>
        </View>
    )
}