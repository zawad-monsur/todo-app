import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React, { Component } from 'react'
import Colors from '../constants/Colors'

export default class AddListModal extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32 }}>
                    <AntDesign name='close' size={24} color={Colors.black} onPress={this.props.closeModal} />
                </TouchableOpacity>

                <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
                    <Text style={styles.title}>Create Todo List</Text>
                    <TextInput style={styles.input} placeholder='List name'></TextInput>

                    <TouchableOpacity style={[styles.create, { backgroundColor: Colors.lightblue }]}>
                        <Text style={{ color: Colors.white, fontWeight: '600' }}>Create</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.black,
        alignSelf: 'center',
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue,
        height: 40,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
