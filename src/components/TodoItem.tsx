import { Todo } from '../type/TodoType';
import { View, Text,StyleSheet,Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import colors from '../../res/colors';

interface TodoItemProps {
    todo: Todo;
    updateTodo: (id:number) => void
    deleteTodo: (id:number) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo }) => {

    const styles = StyleSheet.create({
        MainRowViewContainer:{
            flexDirection:'row',
            borderRadius:20,
            alignItems:'center',
            marginVertical:10,
            padding:10,
            justifyContent:'space-between',
            backgroundColor:colors['itemBackgroundColor']
        },
        TitleTextLayout:
        {
            fontSize:20,
            fontWeight:'bold',

        },
        DescriptionTextLayout:
        {
            fontSize:16
        } 
    })
    return <>
        {
            <View style={styles.MainRowViewContainer}>
                {todo.completionStatus===true ?<Fontisto name="checkbox-active" size={24} color="black" onPress={()=>updateTodo(todo.id)}/>:
                 <Fontisto name="checkbox-passive" size={24} color="black" onPress={()=>updateTodo(todo.id)}/>}
                <View>
                    <Text style={styles.TitleTextLayout}>{todo.title}</Text>
                    <Text style={styles.DescriptionTextLayout}>{todo.description}</Text>
                </View>
                <AntDesign name="delete" size={24} color="black" onPress={()=>deleteTodo(todo.id)}/>
            </View>
        }
    </>

    
}