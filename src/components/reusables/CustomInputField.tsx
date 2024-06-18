import { StyleSheet, TextInput } from "react-native";

interface CustomInputFieldProps{
    text:String;
    placeholder:String;
    setText:(text:String)=>void;
}

export const CustomInputField:React.FC<CustomInputFieldProps>=({text,setText,placeholder}) =>
    {

        const styles = StyleSheet.create({
            input:{
              borderRadius:20,
              borderWidth:1,
              padding:5,
              marginVertical:10
            }
        })
        return <>
        {
        <TextInput
        style={styles.input}
        onChangeText={(text)=>setText(text)}
        value={text.toString()}
        placeholder={placeholder.toString()}
        multiline={true}
      />
        }</>
    }
