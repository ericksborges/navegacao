import { View, Text } from "react-native"
import { Link } from "expo-router"
import {styles} from '../styles/styles'

export default function NotFound(){
  return(
    <View style={[styles.container, {backgroundColor: 'purple'}]}>
      <Text>Ops! a página que você está tentando acessar não existe.</Text>
      <Link href=' / '>Voltar para Home</Link>
    </View>
  )
}