import { useState } from "react";
import { Button } from "react-native";

const Button = ({title}) => {

  const [itemsList, setItemsList] = useState([])
  const [textValue, setTextValue] = useState('')

  const addItem = () => {
    if (textValue === '') {
      return
    }
    setItemsList(prevState => [
      ...prevState,
      {id: Math.random(), value: textValue},
    ])
    setTextValue('')
  }

  return (
    <Button title='ADD' color={'#000'} onPress={addItem} />
  );
}

export default Button;
