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

import styles from './TodoList.Styles';
import TodosComponent from './Todos.Component';
import {TodoListProps} from '../../Navigation/Navigation.Props';
import {useAppDispatch, useAppSelector} from '../../Hooks/Redux.Hook';
import {
  addNewTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../../Store/Reducer/TodoSlice';
import {getTodosService} from '../../Services/Todo.Sevices';
import {ITodo} from '../../Types/Todos';

const TodoList = ({navigation}: TodoListProps) => {
  //   const navigation = useNavigation<TodoListProps>();

  const todos = useAppSelector(state => state.todo.todos);
  const dispatch = useAppDispatch();

  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await getTodosService(data => dispatch(getTodos(data)));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickAddTodo = async () => {
    if (textInput.length === 0) {
      Alert.alert('Error', 'Please input new task');
      return;
    } else {
      const newTodo = {
        task: textInput,
        completed: false,
      };
      dispatch(addNewTodo(newTodo));
      setTextInput('');
    }
  };

  const markTodoComplete = async (todo: any) => {
    dispatch(
      updateTodo({id: todo.id, task: todo.task, completed: !todo.completed}),
    );
  };

  const onClickDeleteTodo = async (todoId: any) => {
    dispatch(deleteTodo({id: todoId}));
  };

  const editTodo = (todoData: ITodo) => {
    navigation.navigate('TodoDetail', {...todoData});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            color: '#2089dc',
          }}>
          MY TODOS
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => (
          <TodosComponent
            todo={item}
            markTodoComplete={markTodoComplete}
            deleteTodo={onClickDeleteTodo}
            editTodo={() => editTodo(item)}
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
        <TouchableOpacity onPress={() => onClickAddTodo()}>
          <View style={styles.iconPlusContainer}>
            <Icon name="add" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default TodoList;
