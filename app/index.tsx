import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
    style={estilo.container}
    >
      <Text style={estilo.text}>Olá Mundo!</Text>
    </View>
  );
}



const estilo = StyleSheet.create({
  container:{
    flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#4682B4",
  },
  text: {
    color:"#FFFFFF",
    fontSize: 20,
  },
});