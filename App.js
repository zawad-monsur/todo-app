import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from './src/constants/Colors'
import tempData from './tempData'
import TodoList from './src/components/TodoList'
import AddListModal from './src/components/AddListModal'

export default class App extends React.Component {
    state = {
        addTodoVisible: false
    }

    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible })
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType='slide' visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} />
                </Modal>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.divider} />
                    <Text style={styles.title}>
                        Todo <Text style={{ fontWeight: '300', color: colors.blue }}>List</Text>
                    </Text>
                    <View style={styles.divider} />
                </View>

                <View style={{ marginVertical: 48 }}>
                    <TouchableOpacity style={styles.addlist} onPress={() => this.toggleAddTodoModal()}>
                        <AntDesign name='plus' size={16} color={colors.blue}></AntDesign>
                    </TouchableOpacity>

                    <Text style={styles.add}>Add List</Text>
                </View>

                <View style={{ height: 275, paddingLeft: 32 }}>
                    <FlatList data={tempData} keyExtractor={item => item.name} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => <TodoList list={item} />} />
                </View>

                <View></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: colors.black,
        paddingHorizontal: 64
    },
    addlist: {
        borderWidth: 2,
        borderColor: colors.lightblue,
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add: {
        color: colors.blue,
        fontWeight: '600',
        fontSize: 14,
        marginTop: 8
    }
})
