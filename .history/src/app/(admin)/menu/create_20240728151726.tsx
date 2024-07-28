import Button from '@/src/components/Button'
import { defaultImagePizza } from '@/src/components/ProductListItems'
import React, { Component } from 'react'
import { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Alert,} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router'


const CreateProductScreen = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState('')
    const [image, setImage ]  = useState<string | null>(null);
    const { id } = useLocalSearchParams();
    const isUpdating= !!id; // !! converts to boolean

    
    const onSubmit = () => {
        if (isUpdating){
            onUpdateProduct()
        } else {
            onCreateProduct()
        }
    }

    const onUpdateProduct = () => {
        if (!validateInputs()){
            return;
          }
        console.warn('Update Product: ', name, price,'€')
        resetFields();
    }
    
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
        });
        
        console.log(result);

        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

      const onDelete= () => {
        console.warn('Delete Product: ', name, price,'€')
       
    }

    const confirmDelete = () => {
        Alert.alert('Confirm','Are you sure you want to delete this product?',[
            {text: 'Cancel', style: 'cancel'},
            {text: 'Delete', style: 'destructive', onPress: onDelete}
        ]) 
    //   onDelete ()
    //     resetFields();
    }
    

    return (
      <View style={styles.container}>
        <Stack.Screen options={{title: isUpdating? 'Update Product' : 'Create Product'}} />
        
        <Image source={{uri: image || defaultImagePizza}} style={styles.image} />
        <Text onPress={pickImage} style={styles.textButton}>
            Select an image
            </Text>

        <Text style={styles.title}>{isUpdating?"Update a Product":"Create a new Product" }</Text>
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
        <Button text={isUpdating? "Update":"Create Product"} onPress={onSubmit} />
        {isUpdating && <Text style={styles.textButton} onPress={confirmDelete} >Delete Product</Text>    }
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

