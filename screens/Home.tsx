import { View, Text } from "react-native"
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
            padding: 20,
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
                padding: 12
            }}>
                <Text>Main Playground</Text>
            </View>
        </View>

    </View>
  )
}