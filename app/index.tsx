import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const produtos = [
  { id: 1, nome: "Coca-Cola", preco: 5.5},
  { id: 2, nome: "Pepsi", preco: 5.5},
  { id: 3, nome: "Fanta", preco: 5.5},
  { id: 4, nome: "Guaraná", preco: 5.5},
];



export default function Index() {
  let [contador,setContador] = useState(0)
  return (
    <View
    style={estilo.container}
    >
      {produtos.map((p)=>(
        <View key={p.id}>
        <Text style= {estilo.titulo}>{p.nome}</Text>
        <Text style= {estilo.Text}>{p.preco}</Text>
        </View>)
      )}
    
      <Button title={contador.toString()} onPress={()=>{Clicarbotao()}}></Button>

    </View>
    );
  function Clicarbotao(){
    setContador(contador++)
  };
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#2f2f2f",
      paddingStart: 20,
  },
  Text: {
    color:"#ffffff",
    fontSize: 20,
  },
  titulo:{
    color: "#8B0000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"
  },
});