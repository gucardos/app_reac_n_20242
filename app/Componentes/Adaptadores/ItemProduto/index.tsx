import Style from "@/app/Styles/Default";
import React from "react";
import { Alert, Button, Image, Text, View } from "react-native";
import Produto from '@/app/Models/Produto'
import axios from "axios";



interface PropProd{
    produto:Produto,
    
}


const  ItemProduto:React.FC<PropProd> = ({produto})=> {
    console.log(produto)

    function Excluir(id: number) {
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos'
        axios.delete(`${api}/${id}`)
        .then((resp)=>{
            Alert.alert('Produto excluído com sucesso');
            alert('Produto excluído com sucesso');
        })
    }

    return(
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>{produto.preco}</Text>
            <Image source= {{uri:produto.foto}}  style={Style.image}/>
            <Button title="Excluir" onPress={()=>{Excluir(produto.id)}}/>
            
        </View>
    )
}

export default ItemProduto;