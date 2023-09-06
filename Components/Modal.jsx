import { Modal as NewModal, Button as Btn, StyleSheet, Text, View} from 'react-native'



const Modal = ({ modalVisible, onHandleDelete}) => {
  return (
    <NewModal visible={modalVisible} animationType='slide' transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text style={styles.deseaBorrar}>¿Desea eliminar este nombre de la lista?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Btn title='Eliminar' onPress={onHandleDelete}/>
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    backgroundColor: '#ccc',
    color: '#fff',
    fontSize: 18,
  },
  deseaBorrar: {
    fontSize: 18,
    
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 15,
  },
})