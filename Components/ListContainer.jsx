import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

const ListContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="New Item" 
        value={textValue}
        onChangeText={}
        />
        <Button></Button>
      
      </View>
    </View>
  );
}

export default ListContainer;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    fontWeight: 500,
  },
  inputContainer:{
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: '',
    justifyContent: 'space-between',
  },
  input:{
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  }
})
