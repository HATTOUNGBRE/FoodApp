import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class CreateProductScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> create </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    }

})

export default CreateProductScreen
