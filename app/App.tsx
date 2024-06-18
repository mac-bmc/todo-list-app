
import React, { useState, useEffect } from 'react';
import { Todo } from '../src/type/TodoType';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TodoList } from '../src/components/TodoList';
import { FontAwesome6 } from '@expo/vector-icons';
import colors from '../res/colors';
import { TodoInput } from '../src/components/TodoInput';
import strings from '../res/strings';
const App: React.FC = () => {

  const [todo, setTodo] = useState<Todo[]>([]);
  const [modalVisible, setModal] = useState<boolean>(false)
  useEffect(() => {
    let dummyTodo: Todo[] = [
      {
        id: 1, title: "Todo1", description: "Dummy Todo 1", completionStatus: false
      },
      {
        id: 2, title: "Todo2", description: "Dummy Todo 2", completionStatus: false
      },
      {
        id: 3, title: "Todo3", description: "Dummy Todo 3", completionStatus: false
      },
      {
        id: 4, title: "Todo4", description: "Dummy Todo 4", completionStatus: false
      },
      


    ]

    setTodo(dummyTodo);

  }, []);

  const addTodo = (newTodo: Todo) => {
    newTodo.id = todo.length ? todo.length + 1 : 1;

    setTodo([...todo, newTodo]);
  }

  const updateTodo = (id: number) => {
    const updatedTodos: Todo[] = todo.map(todo =>
      todo.id === id ? {
        ...todo, completionStatus: !todo.completionStatus
      } : todo
    );

    setTodo(updatedTodos);
  }

  const deleteTodo = (id: number) => {
    const newTodos: Todo[] = todo.filter(todo =>
      todo.id !== id
    );
    setTodo(newTodos);
  }


  const styles = StyleSheet.create({
    MainLayoutContainer: {
      flex: 1,
      margin: 10,
      marginTop: StatusBar.currentHeight,

    },
    AddBtnLayout: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      position: "absolute",
      bottom: 50,
      right: 20,
      borderWidth: 1,
      borderColor: colors['white'],
      backgroundColor: colors['btnBackground'],
      padding:15,
    }
  })
  return (
    <SafeAreaView style={styles.MainLayoutContainer}>
      <Text style={{alignSelf:'center',fontSize:22}}>{strings['homeTitle']}</Text>
      <TodoInput addTodo={addTodo} setModal={setModal} isModalVisible={modalVisible}/>
      {todo.length ? <TodoList todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} /> :<Text style={{flex:1,alignSelf:'center',margin:20}}>{strings['taskEmpty']}</Text>}
      <Pressable onPress={()=>setModal(true)}>
        <View style={styles.AddBtnLayout}><FontAwesome6 name="add" size={24} color="black" /></View>
      </Pressable>
    </SafeAreaView>
  );

}



export default App