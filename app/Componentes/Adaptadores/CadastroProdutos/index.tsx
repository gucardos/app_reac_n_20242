import Produto from "@/app/Models/Produto";
import { PreventRemoveContext } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { TextInput, View, Text, Button} from "react-native";


const CadastroProduto = ()=>{
let [nome,SetNome] = useState('');
let [descricao,SetDescricao] = useState('');
let [preco,SetPreco] = useState(0);
    return(
        <View>
            <Text  >Nome:</Text>
            <TextInput onChangeText={SetNome} value={nome}/>
            <Text  >Descrição:</Text>
            <TextInput onChangeText={SetDescricao} value={descricao}/>
            <Text >Preço:</Text>
            <TextInput onChangeText={
                (v)=>
                    {
                        SetPreco(
                            isNaN(parseFloat(v))? 0:parseFloat(v)
                    )}
                } 
             inputMode="numeric" value={preco.toString()} />
            <Button title="Cadastrar" onPress={Cadastrar}></Button>

        </View>
    )
    function Cadastrar(){
        let produto: Produto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api,produto)
    }
}

export default CadastroProduto