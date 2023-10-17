import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import ListTodo from './ListTodo';

type todoList = {
  task: string;
  completed: boolean;
};

const TodoApp = () => {
  const [todoList, setTodos] = useState<todoList[] | any[]>([]);
  const [textInput, setTextInput] = useState('');

  const ref = firestore().collection('todos');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list: any[] = [];
      querySnapshot.docs.forEach(doc => {
        const {task, completed} = doc.data();
        list.push({
          id: doc.id,
          task,
          completed,
        });
      });

      setTodos(list);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = async () => {
    if (textInput.length === 0) {
      Alert.alert('Error', 'Please input new task');
      return;
    } else {
      const newTodo = {
        task: textInput,
        completed: false,
      };
      await ref.add({...newTodo});
      setTextInput('');
    }
  };

  const markTodoComplete = async (todo: any) => {
    await ref
      .doc(todo.id)
      .set({task: todo.task, completed: true}, {merge: true});
  };

  const deleteTodo = async (todoId: any) => {
    await ref.doc(todoId).delete();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            color: '#79AC78',
          }}>
          MY TODO
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todoList}
        renderItem={({item}) => (
          <ListTodo
            todo={item}
            markTodoComplete={markTodoComplete}
            deleteTodo={deleteTodo}
          />
        )}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={textInput}
            placeholder="Enter new task here"
            onChangeText={text => setTextInput(text)}
            style={{color: '#000', height: 50}}
          />
        </View>
        <TouchableOpacity onPress={() => addTodo()}>
          <View style={styles.iconPlusContainer}>
            <Icon name="add" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default TodoApp;
