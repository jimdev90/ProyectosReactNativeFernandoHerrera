import {StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity} from "react-native";

interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}


export const FabButton = ({title, onPress, position = 'br'}: Props) => {


    const io = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={onPress}
                style={[styles.fabLocation, (position == 'br') ? styles.right : styles.left]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[styles.fabLocation, (position == 'br') ? styles.right : styles.left]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? io() : android();
};


const styles = StyleSheet.create({
    fab: {
        backgroundColor: "#5856d6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    fabText:{
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    },
    right: {
        right: 25
    },
    left : {
        left: 25
    },
    fabLocation: {
        position: "absolute",
        bottom: 25,
    }
})