import { Todo } from "../type/TodoType";
import { useEffect, useState } from "react";
import { Modal, Pressable, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { CustomInputField } from "./reusables/CustomInputField";
import { createTodo } from "../../utils/FactoryFunctions";
import { AntDesign } from '@expo/vector-icons';
import colors from "../../res/colors";
import strings from "../../res/strings";

interface TodoInputProps {
    addTodo: (todo: Todo) => void
    isModalVisible: boolean
    setModal: (visibility: boolean) => void
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo, isModalVisible, setModal }) => {

    const addInput = () => {
        if (handleValidation()) {
            setLoading(!loading)
            const todo = createTodo(0, title.toString(), desciption.toString(), false)
            addTodo(todo)
            setModal(false)
        }
        else setError(true)
    }

    function handleValidation(): Boolean {
        if (title === "" || desciption == "")
            return false
        return true
    }

    const styles = StyleSheet.create({
        MainViewContainer: {
            justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20,backgroundColor:colors['white']
        },
        BtnContainer: {
            marginVertical: 10,
            alignSelf: 'center',
            backgroundColor: colors['btnBackground'],
            borderRadius: 50,
            padding: 10
        }
    })

    const [title, setTitle] = useState<String>("")
    const [desciption, setDesc] = useState<String>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [errorState, setError] = useState<boolean>(false)

    useEffect(() => {
        setTitle("")
        setDesc("")
        setLoading(false)
        setError(false)
    }, [isModalVisible])
    return <>
        {
            <Modal visible={isModalVisible}  >
                    <View style={styles.MainViewContainer}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                        <AntDesign name="back" size={24} color="black" onPress={()=>setModal(false)}/>
                        <Text style={{marginHorizontal:20,fontSize:20}}>{strings['addTask']}</Text>
                        </View>
                        <CustomInputField text={title} placeholder={strings['titlePlaceholder']} setText={setTitle} />
                        <CustomInputField text={desciption} placeholder={strings['descriptionPlaceholder']} setText={setDesc} />
                        <View style={{alignItems:'center'}}>
                            <Pressable onPress={() => addInput()}>
                                <View style={styles.BtnContainer}>
                                    {loading ? <ActivityIndicator /> : <Text style={{ color: 'white' }}>{strings['addTask']}</Text>}
                                </View>
                            </Pressable>
                            {errorState ? <Text style={{color:'red'}}>{strings['errorString']}</Text> : null}
                        </View>
                    </View>
            </Modal>
        }
    </>
}