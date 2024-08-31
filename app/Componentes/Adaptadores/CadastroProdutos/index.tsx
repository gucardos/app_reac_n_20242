import { useState } from "react";
import { TextInput, View, Text} from "react-native";


const CadastroProduto = ()=>{
let [nome,SetNome] = useState('')
let [descricao,SetDescricao] = useState('')
    return(
        <View>
            <Text  >Home:</Text>
            <TextInput onChangeText={SetNome} value={nome}/>
            <Text  >Descrição:</Text>
            <TextInput onChangeText={SetDescricao} value={descricao}/>
        </View>
    )
}

export default CadastroProduto