import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    splashContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    bar: {
        width: "100%",
        height: 50,
        backgroundColor: '#3498DB'
    },
    menu: {
        flex: 1,
        backgroundColor: '#3498DB'
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },

});