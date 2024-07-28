import Button from '@/src/components/Button'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class CreateProductScreen extends Component {

    return (
      <View style={styles.container}>
        <Text> create </Text>
        <Text style={styles.label}>Name</Text>
        <TextInput placeholder="Name" style={styles.input} />
        <Text style={styles.label}>Price €</Text>
        <TextInput 
        placeholder="€9.99" 
        style={styles.input}
        keyboardType='numeric' />

        <Button text="Create Product" onPress={() => {}} />
      </View>
    )
  
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
        color: 'grey',

    },


}) 

export default CreateProductScreen
