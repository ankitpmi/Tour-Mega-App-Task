import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from "../../Theme";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    mainContainer : {
         alignItems : 'center', flex : 1, backgroundColor:  Colors.white, marginTop : height * 0.05
    },
    formContainer: {
        width : '95%',
        alignSelf : 'center'
    },
    nextBtn: {
        width : '95%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: Colors.primary,
        marginTop: height * 0.1,
        zIndex: 10
    },
    nextBtnText : {
        color : Colors.white,
        fontSize: 18,
        fontWeight: '600',        
    },
    
})

export default styles