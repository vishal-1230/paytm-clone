import { Image, Text, View } from "react-native";
import bsesLogo from "../../assets/homeicons/bses.png"
export const Bill = () => {
    return (
        <View style={{
            // width: "92%",
            borderColor: "#d6d6d6",
            borderWidth: 1,
            borderRadius: 12,
            marginTop: 2,
            marginBottom: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
            paddingVertical: 16
        }}>
            <Image source={bsesLogo} style={{width: 35, objectFit: "cover", height: 10}} />
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 3,
                marginLeft: 13,
                marginRight: 72,
                flexGrow: 1,
            }}>
                <Text style={{fontWeight: "700"}}>Electricity Bill - Rajeev</Text>
                <Text style={{color: "red", fontSize: 13}}>₹730 was due 1 day(s) ago</Text>
            </View>
            <Text style={{color: "#00B9F1", fontWeight: "600", paddingVertical: 4, paddingHorizontal: 18, borderColor: "#00B9F1", borderRadius: 50, borderWidth: 1}}>Pay</Text>
        </View>
    )
}