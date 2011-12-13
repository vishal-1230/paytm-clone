import React, { useEffect } from 'react'
import { ScrollView, Text, TextInput, ToastAndroid, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';

function Scanner() {
  return (
    <View style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
      
      <CameraSection />

      <View style={{
        width: "100%",
        // height: 100,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 20,
        paddingBottom: 0,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        top: -24,
      }}>
        <TextInput placeholder='Enter Mobile Number or Name' style={{
          backgroundColor: "white",
          borderColor: "#a4a4a4",
          borderWidth: 1,
          borderRadius: 12,
          paddingHorizontal: 14,
          paddingVertical: 12,
          marginHorizontal: 4,
          marginTop: 2,
          fontSize: 16,
          fontWeight: "500",
        }} />

        <Text style={{
          fontWeight: "700",
          fontSize: 18,
          marginTop: 14,
          marginLeft: 4,
          color: "black",
        }}>Recents</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
          paddingTop: 8,
        }}>
          <Account color='pink' icon={1} name="Arvind" />
          <Account color='blue' icon={2} name="Mohd Yahya" />
          <Account color='pink' icon={3} name="Gupta Electronics" />
          <Account color='skin' icon={4} name="Mohd Naveen" />
          <Account color='blue' icon={2} name="Mayank Pal" />
          <Account color='pink' icon={1} name="Dhruv Pal" />
        </ScrollView>

      </View>
    </View>
  )
}

import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScannerBox from '../components/scanner/ScannerBox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Account from '../components/scanner/Account';
import { router } from 'expo-router';

const CameraSection = () => {

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flash, setFlash] = React.useState<any>(Camera?.Constants?.FlashMode?.off)

  async function askForPermission() {
    const status = permission?.status
    if (status === 'granted') {
      console.log("Permission Granted")
    } else {
      console.log("Permission Not Granted")
      await requestPermission()
    }
  }

  useEffect(()=>{
    
    askForPermission()

  }, [])

  return (
    <View style={{
      flexGrow: 1,
      width: "100%",
    }}>

      <Text style={{
        fontSize: 18, 
        fontWeight: "600",
        color: "white",
        position: "absolute",
        top: 30,
        alignSelf: "center",
        zIndex: 100,
      }}>Scan Any QR Code</Text>

      <MaterialIcons name="cancel" size={24} color="#c2c2c2" onPress={()=>{
        router?.back()
      }} style={{
        position: "absolute",
        top: 30,
        right: 30,
        zIndex: 100,
      }} />

      <ScannerBox />

      <View style={{
        position: "absolute",
        top: 200,
        right: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        zIndex: 100,
      }}>
        <MaterialCommunityIcons name="flashlight" size={24} color="white" onPress={()=>{
          if(flash === Camera?.Constants?.FlashMode.off) {
            setFlash(Camera?.Constants?.FlashMode?.torch)
          } else {
            setFlash(Camera?.Constants?.FlashMode?.off)
          }
        }} style={{
          padding: 7,
          borderRadius: 50,
          backgroundColor: "#7c7c84",
          fontSize: 20
        }} />

        <MaterialCommunityIcons name="image-outline" size={24} color="white" onPress={()=>{
          console.log("Focus")
        }} style={{
          padding: 7,
          borderRadius: 50,
          backgroundColor: "#7c7c84",
          fontSize: 20
        }} />
      </View>

      <Camera
        style={{
          width: "100%",
          flexGrow: 1,
        }}
        ratio='16:9'
        type={CameraType.back}
        flashMode={flash}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={(res: any)=>{
          // console.log(res?.data)
          const name = res?.data?.split("&")[1]?.split("=")[1]?.replaceAll("%20", " ")?.replaceAll("  ", " ")
          const upiid = res?.data?.split("?")[1]?.split("=")[1].split("&")[0]
          ToastAndroid.show(name, ToastAndroid.SHORT)
          console.log(name, upiid)
          router?.push({pathname: "Pay", params: {name, upiid}})
        }}
      />
    </View>
  )
}

export default Scanner