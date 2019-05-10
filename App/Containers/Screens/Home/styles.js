import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginRight: 10
    },
    lista: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "transparent"
    },
    infoMessage: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10
    },
    ellipsis: {
        color: "black",
        fontSize: 30,
    },
    gridCocktails: {
        flexDirection: 'row',
        flexWrap:'wrap'
    }

})
