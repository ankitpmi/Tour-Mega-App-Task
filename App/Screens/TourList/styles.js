import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from "../../Theme";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    component: {
        flex: 1,
        // paddingHorizontal : 15
    },
    card: {
        backgroundColor: '#e6e6e6',
        marginTop: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 13,        
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center',
        // SHADOW
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardDetail: {
        marginLeft: 15,
        flex : 1
    },
    row: {
        flexDirection: 'row',    
    },
    column: {
        flex: 1,        
    },
    text: {
        fontSize : 14,
        fontWeight: '600'
    },
    title: {
        fontSize : 16,
        fontWeight: '600'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIconContainer : {
        // backgroundColor :'red',
        height: '50%',
        width: '50%',
        justifyContent :'center',
        alignItems: 'center'
    },
    backIcon: {
        fontSize: 25,
        color: 'gray'
    }
})

export default styles