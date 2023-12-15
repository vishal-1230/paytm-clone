import React from 'react'
import { FlatList, Image, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

function Section(props: SectionProps) {
  return (
    <View style={{
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 10,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width: "100%",
    }}>
      <View style={{
        backgroundColor: "#E5F8FE",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 8,
        paddingHorizontal: 14,
        width: "100%",
        justifyContent: "space-between"
      }}>
        <Text style={{
          fontWeight: "700",
          fontSize: 13,
        }}>
          {props.title}
        </Text>

        <Text style={{
          color: "#00B9F1",
          fontWeight: "bold",
          fontSize: 12
        }}>
          {props.titleSubText}
        </Text>
      </View>

      {/* <FlatList horizontal key={0} style={{flexWrap: 'wrap', width: '100%'}} data={props.items} renderItem={({item}) => (
        <View style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          marginLeft: 10,
          borderRadius: 12,
          aspectRatio: 1,
          width: 80
        }}>
          <Text>
          {item.icon}
          </Text>
          <Text style={{color: "black", fontWeight: "600", textAlign: "center", fontSize: 12}}>{item.title}</Text>
        </View>
      )} /> */}
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        paddingRight: 12,
        rowGap: 20,
      }}>
        {props.items.map((item, index) => (
          <TouchableWithoutFeedback style={{
            borderRadius: 60,
          }} key={index} onPress={item.onPress}>
            <View key={index} style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              marginLeft: 10,
              borderRadius: 12,
              aspectRatio: 1,
              width: 80
            }}>
              {
                item.iconStyle === "highlighted" ? (
                  <View style={{
                    // height: 30,
                    // width: 30,
                    backgroundColor: "#022A72",
                    borderRadius: 15,
                    padding: 5,
                  }}>
                    <Image source={item.icon} style={{height: 40, width: 40, objectFit: "contain"}} />
                  </View>
                ) : item.iconStyle === "special" ? (
                  <View style={{
                    backgroundColor: "#FEF8E2",
                    borderColor: "#EAD882",
                    borderWidth: 1,
                    borderRadius: 15,
                    padding: 5,
                    paddingTop: 4,
                    paddingBottom: 7,
                  }}>
                    <Image source={item.icon} style={{height: 40, width: 40, objectFit: "contain"}} />
                  </View>
                ) : (
                  <View style={{
                    borderColor: "#ececec",
                    borderWidth: 1,
                    borderRadius: 15,
                    paddingBottom: 7,
                    paddingTop: 4,
                    paddingHorizontal: 5
                  }}>
                    <Image source={item.icon} style={{height: 40, width: 40, objectFit: "contain"}} />
                  </View>
                )
              }
              <Text style={{color: "black", fontWeight: "600", textAlign: "center", fontSize: 12}}>{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
        </View>
    </View>
  )
}

interface SectionProps {
  title: string,
  titleSubText: string,
  items: {title: string, icon: any, onPress?: () => void, iconStyle?: "default" | "highlighted" | "special"}[]
}

export default Section