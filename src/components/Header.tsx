import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";



type HeaderProps = {

  title:string;

  onBack?:()=>void;

  onMenu?:()=>void;

};



export default function Header({

title,

onBack,

onMenu

}:HeaderProps){



return (

<View style={styles.container}>


{/* Left Button */}

<Pressable

style={styles.button}

onPress={onBack}

>

<Ionicons

name="arrow-back"

size={25}

color="#111827"

/>

</Pressable>





{/* Title */}

<Text

style={styles.title}

numberOfLines={1}

>

{title}

</Text>






{/* Right Button */}

<Pressable

style={styles.button}

onPress={onMenu}

>

<Ionicons

name="ellipsis-vertical"

size={24}

color="#111827"

/>

</Pressable>




</View>

);

}








const styles = StyleSheet.create({



container:{


height:65,


backgroundColor:"white",


flexDirection:"row",


alignItems:"center",


justifyContent:"space-between",


paddingHorizontal:16,


borderBottomWidth:1,


borderBottomColor:"#e2e8f0"


},





button:{


height:40,


width:40,


borderRadius:20,


justifyContent:"center",


alignItems:"center"


},





title:{


fontSize:20,


fontWeight:"700",


color:"#111827"


}



});