import { Image, Text, View } from "react-native"
import gift from "../../assets/homeicons/gift.png"
import personalloan from "../../assets/homeicons/personalloan.png"

export const SectionSeperator = () => {
    return (
        <View style={{
            width: "100%",
            backgroundColor: "#f2f7fb",
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingVertical: 8,
            marginTop: 18,
            borderRadius: 10,
            gap: 10
        }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "white",
                flexGrow: 1,
                borderRadius: 10,
                padding: 6,
                paddingBottom: 8,
            }}>
                <Image source={gift} style={{height: 40, width: 40, objectFit: "contain"}} />
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}>
                    <Text style={{fontWeight: "600"}}>Refer & Win</Text>
                    <Text style={{color: "grey", fontSize: 12}}>Up to ₹1500</Text>
                </View>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "white",
                flexGrow: 1,
                borderRadius: 10,
                padding: 6,
                paddingBottom: 8,
            }}>
                <Image source={personalloan} style={{width: 40, height: 40, objectFit: "cover"}} />
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}>
                    <Text style={{fontWeight: "600"}}>Cash Crunch</Text>
                    <Text style={{color: "grey", fontSize: 12}}>Get a Loan</Text>
                </View>
            </View>
        </View>
    )
}