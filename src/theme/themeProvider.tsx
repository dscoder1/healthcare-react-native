import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


import {
  useColorScheme
} from "react-native";


import AsyncStorage from
"@react-native-async-storage/async-storage";


import {
  Colors
} from "../constants/colors";





type ThemeMode =
"light"
|
"dark"
|
"system";





interface ThemeContextType {


themeMode:ThemeMode;


setThemeMode:(mode:ThemeMode)=>void;


colors:typeof Colors.light;



isDark:boolean;


}





const ThemeContext =
createContext<ThemeContextType | null>(null);





export function ThemeProvider({

children

}:{

children:React.ReactNode;

}){



const systemTheme =
useColorScheme();



const [themeMode,setThemeModeState]
=
useState<ThemeMode>("system");





useEffect(()=>{


loadTheme();


},[]);





async function loadTheme(){


try{


const saved =
await AsyncStorage.getItem(
"theme"
);



if(saved){

setThemeModeState(
saved as ThemeMode
);

}


}
catch(error){

console.log(
"Theme load error",
error
);

}


}






async function setThemeMode(
mode:ThemeMode
){


setThemeModeState(mode);


await AsyncStorage.setItem(
"theme",
mode
);


}







const isDark =

themeMode==="dark"

?

true


:

themeMode==="light"

?

false


:

systemTheme==="dark";







const colors = isDark

?

Colors.dark

:

Colors.light;








return(

<ThemeContext.Provider

value={{

themeMode,

setThemeMode,

colors,

isDark

}}

>


{children}


</ThemeContext.Provider>


);



}







export function useTheme(){


const context =
useContext(ThemeContext);



if(!context){

throw new Error(
"useTheme must be used inside ThemeProvider"
);

}



return context;


}