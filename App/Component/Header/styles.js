import { StyleSheet } from 'react-native'
import { Colors } from '../../Theme'

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.white,

        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.primary
    }
})

export default styles