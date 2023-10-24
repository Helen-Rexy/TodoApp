import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';

import DetailComponent from './Detail.Component';
import styles from './TodoDetail.Styles';
import {TodoDetailProps} from '../../Navigation/Navigation.Props';
import {useAppDispatch} from '../../Hooks/Redux.Hook';
import {deleteTodo, updateTodo} from '../../Store/Reducer/TodoSlice';

const TodoDetailContainer = ({route, navigation}: TodoDetailProps) => {
  const [state, setState] = useState({...route.params});

  const dispatch = useAppDispatch();

  const onClickUpdateTodo = async () => {
    dispatch(
      updateTodo({id: state.id, task: state.task, completed: state.completed}),
    );
    navigation.navigate('TodoList');
  };

  const onClickDeleteTodo = async () => {
    const idTask = state?.id;
    if (idTask) {
      dispatch(deleteTodo({id: idTask}));
      navigation.navigate('TodoList');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            color: '#2089dc',
          }}>
          EDIT TODO
        </Text>
      </View>
      <DetailComponent state={state} setState={setState} />
      <View>
        <Button onPress={() => onClickUpdateTodo()}>
          <Text style={{color: '#FFF', fontSize: 18}}>Update</Text>
        </Button>
        <Button
          type="outline"
          style={{marginTop: 10}}
          onPress={() => onClickDeleteTodo()}>
          <Text style={{color: 'red', fontSize: 18}}>Delete</Text>
        </Button>
      </View>
    </View>
  );
};

export default TodoDetailContainer;
