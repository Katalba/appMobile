import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'

import Modal from './Modal'


const ListContainer = () => {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => setTextValue(text)

  const addItem = () => {
    if (textValue === '') {
      return
    }
    console.log('ejecuta la funcion de agregar elemento')
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <>
    <Text style={styles.title}>Lista de nombres</Text>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escriba un nombre"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="Agregar" color={'black'}  onPress={addItem}></Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
    </>
  )
}


export default ListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#331039',
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '500',
    backgroundColor: '#331039',
    textAlign: 'center',
    paddingTop: 80,
    textTransform: 'uppercase',
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
    
  },
  listContainer: {
    marginTop: 25,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#F79EBA',
    shadowColor: '#fe6855',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
    textAlign: 'center',
  },
})
