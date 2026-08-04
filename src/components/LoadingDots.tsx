import React, { useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";



export default function LoadingDots(){


const dot1 = useRef(
new Animated.Value(0)
).current;


const dot2 = useRef(
new Animated.Value(0)
).current;


const dot3 = useRef(
new Animated.Value(0)
).current;




function animateDot(
value:Animated.Value,
delay:number
){


Animated.loop(

Animated.sequence([


Animated.delay(delay),


Animated.timing(
value,
{
toValue:1,
duration:400,
useNativeDriver:true
}
),


Animated.timing(
value,
{
toValue:0,
duration:400,
useNativeDriver:true
}
)


])


).start();


}




useEffect(()=>{


animateDot(dot1,0);

animateDot(dot2,200);

animateDot(dot3,400);



},[]);





return (

<View style={styles.container}>


<Text style={styles.text}>
AI is typing
</Text>



<Animated.Text

style={[
styles.dot,
{
opacity:dot1
}
]}

>
•
</Animated.Text>



<Animated.Text

style={[
styles.dot,
{
opacity:dot2
}
]}

>
•
</Animated.Text>




<Animated.Text

style={[
styles.dot,
{
opacity:dot3
}
]}

>
•
</Animated.Text>


</View>

);

}







const styles = StyleSheet.create({


container:{


flexDirection:"row",

alignItems:"center",

backgroundColor:"white",

paddingHorizontal:18,

paddingVertical:12,

borderRadius:20,

alignSelf:"flex-start",

marginLeft:12,

marginBottom:10,

shadowColor:"#000",

shadowOpacity:0.05,

shadowRadius:5,

elevation:2


},



text:{


fontSize:14,

color:"#64748b",

marginRight:5


},



dot:{


fontSize:22,

color:"#2563eb",

fontWeight:"700",

lineHeight:15

}


});