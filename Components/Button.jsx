import { StyleSheet } from "react-native";

const Button = ({title}) => {
  return (
    
      <Button style={styles.borrar} title='confirmar' ></Button>
  
      
  );
}

export default Button;

const styles = StyleSheet.create({
  borrar: {
    color: 'green'
  }
})
