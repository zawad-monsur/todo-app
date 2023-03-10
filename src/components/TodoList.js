import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

export default TodoList = ({ list }) => {
    const completedCount = list.todos.filter(todo => todo.completed).length
    const remainingCount = list.todos.length - completedCount

    return (
        <View style={[styles.listContainer, { backgroundColor: list.color }]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.subtitle}>Remaining</Text>
                    <Text style={styles.count}>{remainingCount}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.subtitle}>Completed</Text>
                    <Text style={styles.count}>{completedCount}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.white,
        marginBottom: 18
    },

    count: {
        fontSize: 48,
        fontWeight: '200',
        color: Colors.white
    },

    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        alignItems: 'center',
        color: Colors.white
    }
})
