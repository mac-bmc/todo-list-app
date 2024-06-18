import { Todo } from "../type/TodoType";
import { FlatList,Text } from "react-native";
import { TodoItem } from "./TodoItem";

interface TodoListProps
{
    todo:Todo[];
    updateTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}

export const TodoList:React.FC<TodoListProps>=({todo,updateTodo,deleteTodo})=>
    {
        console.log("TodoList-todo",todo)
        return <>
        {
            <FlatList
            data={todo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
               <TodoItem todo={item} updateTodo={updateTodo} deleteTodo={deleteTodo} />
              )
            }}/>
        }
        </>
    }
    