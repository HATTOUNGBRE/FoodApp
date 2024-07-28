import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class CreateProductScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> create </Text>
        <Text style={styles.label}>Name</Text>
        <TextInput placeholder="Name" style={styles.input} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',

    },


})

export default CreateProductScreen
