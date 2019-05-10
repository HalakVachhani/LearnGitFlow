import { StyleSheet, PixelRatio, Dimensions } from 'react-native'
// import { Metrics, Colors, Fonts } from '../../Themes'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        paddingLeft: 5,
        paddingTop: 5
    },
    image: {
        width: ((width - 5) / 3) - 5,
        height: ((width - 5) / 3) - 5,
        justifyContent: 'flex-end'
    },
    labelContainer: {
        backgroundColor: "rgba(0,0,0, 0.40)",
        height: 25,
        justifyContent: 'center'
    },
    label: {
        color: "white",
        marginLeft: 5
    }

})