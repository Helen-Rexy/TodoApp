import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button} from '@rneui/themed';

import DetailComponent from './Detail.Component';
import styles from './TodoDetail.Styles';
import {TodoDetailProps} from '../../Navigation/Navigation.Props';
import {useAppDispatch} from '../../Hooks/Redux.Hook';
import {deleteTodo, updateTodo} from '../../Store/Reducer/TodoSlice';
import {SafeAreaView} from 'react-native-safe-area-context';

const TodoDetail = ({route, navigation}: TodoDetailProps) => {
  const [state, setState] = useState({...route.params});

  const dispatch = useAppDispatch();

  const onClickUpdateTodo = async () => {
    dispatch(
      updateTodo({
        id: state.id,
        task: state.task,
        completed: state.completed,
        imageUrl: state.imageUrl,
      }),
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
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <ScrollView scrollEnabled>
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
        </ScrollView>
      </View>
      <View style={{flexDirection: 'column', gap: 5, backgroundColor: '#fff'}}>
        <Button onPress={() => onClickUpdateTodo()}>
          <Text style={{color: '#FFF', fontSize: 18}}>Update</Text>
        </Button>
        <Button
          type="outline"
          style={{
            marginTop: 10,
            backgroundColor: '#fff',
          }}
          onPress={() => onClickDeleteTodo()}>
          <Text style={{color: 'red', fontSize: 18}}>Delete</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default TodoDetail;
