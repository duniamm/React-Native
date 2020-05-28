import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import logo from './assets/dunia.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
export default function App() {
 const [selectedImage, setSelectedImage] = React.useState(null);

 let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  
  }


  return (
    <View style={styles.container}>
     <Text > Inversiones Corazón</Text>
      <Image source={logo} style={styles.logo}/>        
  
    <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
</View>  
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 305,
    height: 259,
    marginBottom: 10,
  },
    button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
 
});