import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {useState} from "react";
import {FabButton} from "../components/FabButton";

export const CounterScreen = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <FabButton
                title="+1"
                onPress={incrementar}
                position='br'
            />

            <FabButton
                title="-1"
                onPress={decrementar}
                position='bl'
            />
            {/*<TouchableOpacity*/}
            {/*    onPress={() => setContador(contador + 1)}*/}
            {/*    style={styles.fabLocationBR}*/}
            {/*>*/}
            {/*    <View style={styles.fab}>*/}
            {/*        <Text style={styles.fabText}>+1</Text>*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}
            {/*<TouchableOpacity*/}
            {/*    onPress={() => setContador(contador - 1)}*/}
            {/*    style={styles.fabLocationBL}*/}
            {/*>*/}
            {/*    <View style={styles.fab}>*/}
            {/*        <Text style={styles.fabText}>-1</Text>*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 40
    },

})
