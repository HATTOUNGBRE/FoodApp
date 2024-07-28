import Button from '@/src/components/Button'
import { defaultImagePizza } from '@/src/components/ProductListItems'
import React, { Component } from 'react'
import { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


const CreateProductScreen = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null);

    const [errors, setErrors] = useState('')
    
    
    const onCreateProduct = () => {
       
       if (!validateInputs()){
           return;
         }
        console.warn('Create Product: ', name, price,'€')

        resetFields();

        //save in the db 
    }

    const resetFields = () => {
        setName('')
        setPrice('')
    }

    const validateInputs = () => {
        if (!name || !price){
            alert('Please fill all the fields')
            setErrors('Please fill all the fields')
            return false
        }
        if (isNaN(parseFloat(price))){
            alert('Price must be a number')
            setErrors('Price must be a number')
            return false
        }
        return true
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });}

    return (
      <View style={styles.container}>
        <Image source={{uri: image || defaultImagePizza}} style={styles.image} />
        <Text onPress={pickImage} style={styles.textButton}>
            Select an image
            </Text>

        <Text style={styles.title}>Create a new Product</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput 
        placeholder="Name" 
        style={styles.input}
        value={name}
        onChangeText={setName} />
        <Text style={styles.label}>Price €</Text>
        <TextInput 
        placeholder="€9.99" 
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType='numeric' />


        <Text style={{color: 'red', textAlign: 'center'}}>{errors}</Text>       
        <Button text="Create Product" onPress={onCreateProduct} />
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
        borderColor: 'grey',
        marginVertical: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',

    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    image:{
        width: "50%",
        aspectRatio: 1,
        alignSelf: 'center',
    },
    textButton: {
        color: 'green',
        textAlign: 'center',
        marginVertical: 10,
    }


}) 

export default CreateProductScreen;

