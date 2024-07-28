import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class CreateProductScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> create </Text>
        <TextInput placeholder="Name" />
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


})

export default CreateProductScreen
