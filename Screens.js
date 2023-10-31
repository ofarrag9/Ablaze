import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenContainer } from 'react-native-screens';
import { TouchableOpacity, Button, SafeAreaView, TextInput, View, Text, StyleSheet } from 'react-native';




export const Welcome = ({ naviagtion }) => {
    <ScreenContainer>
        <SafeAreaView style={styles.main}>
            <Text>Welcome</Text>
        </SafeAreaView>
    </ScreenContainer>
}

export const LogInScreen = ({ naviagtion }) => {
    const [text, SetText] = React.useState('');
    const [password, SetPassword] = React.useState('');

    return (

            <SafeAreaView style={styles.main}>
                <TextInput
                    style={styles.loginTextBox}
                    value={text}
                    onChangeText={SetText}
                    placeholder='Username or email'
                    placeholderTextColor='gray'
                />

                <TextInput
                    style={styles.loginTextBox}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor='gray'
                    onChangeText={SetPassword}
                />

                <TouchableOpacity style={styles.logButton}>
                    <Text style={styles.logButtonText}>Log in</Text>
                </TouchableOpacity>

                <Button title='Forgot password' />

                <View >
                    <TouchableOpacity style={styles.newAcc}>
                        <Text style={styles.newAccText}>Create account</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    loginTextBox: {
        height: 60,
        width: 390,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        margin: 6,
        fontSize: 17,
        backgroundColor: `#B0AF6D`,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `#1A5259`,
    },
    logButton: {
        backgroundColor: `#1AB7C9`,
        height: 60,
        width: 390,
        borderRadius: 15,
        alignContent: 'center',
        marginBottom: 7,
    },
    logButtonText: {

        fontSize: 17,
        textAlign: 'center',
        marginTop: 20,
    },
    newAcc: {
        backgroundColor: `#87ceeb`,
        height: 60,
        width: 140,
        borderRadius: 15,
        alignContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        bottom: -240,


    },
    newAccText: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 20,
    },
});