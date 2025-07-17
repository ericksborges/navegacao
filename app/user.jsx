import {View, Text} from "react-native"
import { Link } from "expo-router"
import { styles } from "../styles/styles"

export default function Settings(){
    return(

        <View style={[styles.container, {backgroundColor: '#fa43'}]}>
            <Text>Página Settings</Text>
            <Link styles={styles.textPadrao} href='/'>Ir para Home</Link>
        </View>
    )
}